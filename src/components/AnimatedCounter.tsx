import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

interface ParsedNumber {
  prefix: string;
  target: number;
  decimals: number;
  hasComma: boolean;
  suffix: string;
}

function parseMetricValue(raw: string): ParsedNumber | null {
  // Handle special case like "4–5x" or "4-5x"
  const rangeMatch = raw.match(/^(\d+)[–-](\d+)(.*)$/);
  if (rangeMatch) {
    return {
      prefix: `${rangeMatch[1]}–`,
      target: parseFloat(rangeMatch[2]),
      decimals: 0,
      hasComma: false,
      suffix: rangeMatch[3]
    };
  }

  // General regex to extract prefix, numeric value (with commas/decimals), and suffix
  // e.g., "NZD $38.8K", "-79%", "1,327", "6.1x", "~$24", "£123.9K"
  const match = raw.match(/^([^\d.-]*)(-?\d[\d,]*\.?\d*)(.*)$/);
  if (!match) return null;

  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];

  const hasComma = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const target = parseFloat(cleanNumStr);
  if (isNaN(target)) return null;

  const decimalPart = cleanNumStr.split('.')[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return { prefix, target, decimals, hasComma, suffix };
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.2,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    const parsed = parseMetricValue(value);
    if (!parsed || !isInView) {
      setDisplayValue(value);
      return;
    }

    const { prefix, target, decimals, hasComma, suffix } = parsed;
    let startTime: number | null = null;
    let animationFrameId: number;

    const startVal = 0;
    const durationMs = duration * 1000;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCounter = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutExpo(progress);

      const current = startVal + (target - startVal) * easedProgress;
      
      let formattedNumber = current.toFixed(decimals);
      if (hasComma) {
        const parts = formattedNumber.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNumber = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, isInView, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
