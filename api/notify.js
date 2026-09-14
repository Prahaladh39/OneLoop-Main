export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Server-side secrets — NEVER exposed to the browser
  const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
  const ALERT_EMAIL = process.env.ALERT_EMAIL;

  if (!WEB3FORMS_KEY || !ALERT_EMAIL) {
    return res.status(500).json({ error: 'Email notification service not configured' });
  }

  // Validate origin to prevent cross-site abuse
  const origin = req.headers.origin || req.headers.referer || '';
  const allowedOrigins = [
    'https://oneloop.in',
    'https://www.oneloop.in',
    'http://localhost:5173',
    'http://localhost:4173',
  ];

  // Also allow any *.vercel.app preview deployments
  const isAllowed =
    allowedOrigins.some((o) => origin.startsWith(o)) ||
    /^https:\/\/.*\.vercel\.app/.test(origin);

  if (!isAllowed && origin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Set CORS headers for allowed origins
  res.setHeader('Access-Control-Allow-Origin', origin || allowedOrigins[0]);
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const lead = req.body;

    // Server-side input validation
    if (!lead || !lead.name || !lead.email || !lead.leadId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Sanitize on server side as defense-in-depth
    const sanitize = (str, maxLen) => {
      if (!str) return '';
      return String(str)
        .replace(/<[^>]*>?/gm, '')
        .trim()
        .slice(0, maxLen);
    };

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `🔥 New OneLoop Lead: ${sanitize(lead.name, 100)} (${sanitize(lead.topic, 50) || 'Inquiry'})`,
      from_name: 'OneLoop Lead Bot',
      to_email: ALERT_EMAIL,
      lead_id: sanitize(lead.leadId, 40),
      replyto: sanitize(lead.email, 120),
      name: sanitize(lead.name, 100),
      email: sanitize(lead.email, 120),
      phone: sanitize(lead.phone, 25) || 'Not provided',
      company: sanitize(lead.company, 120) || 'Not provided',
      website: sanitize(lead.website, 200) || 'Not provided',
      focus_topic: sanitize(lead.topic, 100) || 'General Audit',
      message: sanitize(lead.message, 2000) || 'No additional details provided',
      source_form: lead.source === 'audit_section' ? 'Main Audit Section' : 'Inquiry Modal',
      submitted_at: new Date().toLocaleString('en-US', { timeZoneName: 'short' }),
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

    if (result.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(502).json({ success: false, error: 'Email delivery failed' });
    }
  } catch {
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
