import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  website?: string;
  topic?: string;
  message?: string;
  source: 'audit_section' | 'inquiry_modal';
  honeypot?: string;
}

/**
 * Strips dangerous HTML tags and control characters to prevent XSS.
 */
function sanitizeInput(str: string | undefined, maxLen: number): string {
  if (!str) return '';
  return str
    .replace(/<[^>]*>?/gm, '')
    .replace(/[^\w\s@.,:;+\-/?!#()&]/gi, '')
    .trim()
    .slice(0, maxLen);
}

/**
 * Client-side rate limiting to prevent spam hammering.
 */
function checkRateLimit(): boolean {
  const STORAGE_KEY = 'oneloop_last_lead_ts';
  const COOLDOWN_MS = 10000;
  const now = Date.now();

  try {
    const lastSubmit = localStorage.getItem(STORAGE_KEY);
    if (lastSubmit && now - parseInt(lastSubmit, 10) < COOLDOWN_MS) {
      return false;
    }
    localStorage.setItem(STORAGE_KEY, now.toString());
  } catch {
    // localStorage might be disabled in private browsing
  }

  return true;
}

/**
 * Dispatches email notification directly to Web3Forms API.
 */
async function sendEmailAlert(
  sanitizedLead: Omit<LeadData, 'honeypot'>,
  leadId?: string
): Promise<boolean> {
  const accessKey =
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    '389e9e2a-d10d-428d-abbb-9cd89098926b'; // Fallback ensures email never fails if env var is missing

  if (!accessKey) {
    console.error('[Web3Forms] Missing access key');
    return false;
  }

  try {
    const payload = {
      access_key: accessKey,
      subject: `🔥 New OneLoop Lead: ${sanitizedLead.name} (${sanitizedLead.topic || 'Inquiry'})`,
      from_name: 'OneLoop Lead Bot',
      replyto: sanitizedLead.email,
      name: sanitizedLead.name,
      email: sanitizedLead.email,
      phone: sanitizedLead.phone,
      company: sanitizedLead.company || 'Not provided',
      website: sanitizedLead.website || 'Not provided',
      focus_topic: sanitizedLead.topic || 'General Audit',
      message: sanitizedLead.message || 'No additional details provided',
      source_form: sanitizedLead.source === 'audit_section' ? 'Main Audit Section' : 'Inquiry Modal',
      submitted_at: new Date().toLocaleString('en-US', { timeZoneName: 'short' }),
      lead_id: leadId || 'pending',
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!result.success) {
      console.error('[Web3Forms Error]', result);
    }
    return result.success;
  } catch (err) {
    console.error('[Web3Forms Network Error]', err);
    return false;
  }
}

/**
 * Submits lead with dual-layer redundancy:
 * 1. Writes to Firestore database
 * 2. Sends instant email alert via Web3Forms
 * Even if one layer encounters a network or rules issue, the other delivers the lead.
 */
export async function submitLead(rawLead: LeadData): Promise<{ success: boolean; error?: string }> {
  // 1. HONEYPOT CHECK: Drop automated bots silently
  if (rawLead.honeypot && rawLead.honeypot.trim().length > 0) {
    return { success: true };
  }

  // 2. RATE LIMIT CHECK: Prevent flood attacks
  if (!checkRateLimit()) {
    return {
      success: false,
      error: 'Please wait a few moments before submitting again.',
    };
  }

  // 3. INPUT SANITIZATION & BOUNDS CLAMPING
  const cleanLead = {
    name: sanitizeInput(rawLead.name, 100),
    email: sanitizeInput(rawLead.email, 120).toLowerCase(),
    phone: sanitizeInput(rawLead.phone, 25),
    company: sanitizeInput(rawLead.company, 120),
    website: sanitizeInput(rawLead.website, 200),
    topic: sanitizeInput(rawLead.topic, 100),
    message: sanitizeInput(rawLead.message, 2000),
    source: rawLead.source,
  };

  // Validation
  if (!cleanLead.name || !cleanLead.email || !cleanLead.phone) {
    return {
      success: false,
      error: 'Please fill in all required fields.',
    };
  }

  let dbSuccess = false;
  let docId = '';

  // 4. WRITE TO FIRESTORE
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      ...cleanLead,
      status: 'new',
      createdAt: serverTimestamp(),
      createdAtISO: new Date().toISOString(),
    });
    dbSuccess = true;
    docId = docRef.id;
  } catch (dbErr: any) {
    console.error('[Firestore Write Error]', dbErr?.code || dbErr?.message, dbErr);
  }

  // 5. ALWAYS DISPATCH EMAIL ALERT (Even if Firestore failed, you still get the customer inquiry)
  const emailSuccess = await sendEmailAlert(cleanLead, docId);

  // If either database or email succeeded, the lead was captured
  if (dbSuccess || emailSuccess) {
    return { success: true };
  }

  // Only fail if BOTH completely failed
  return {
    success: false,
    error: 'Unable to submit at this time. Please reach out to hello@oneloop.in directly.',
  };
}
