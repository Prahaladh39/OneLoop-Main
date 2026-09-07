import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface StyleSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: StyleSegment[];
  className?: string;
  delay?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Flatten segments into individual words while preserving their styling
  let totalWordCounter = 0;
  const wordTokens: { word: string; className: string; index: number }[] = [];

  segments.forEach((seg) => {
    const rawWords = seg.text.split(' ').filter((w) => w.length > 0);
    rawWords.forEach((word) => {
      wordTokens.push({
        word,
        className: seg.className || '',
        index: totalWordCounter++
      });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center items-baseline ${className}`}>
      {wordTokens.map((token) => (
        <span key={token.index} className="inline-block overflow-hidden mr-[0.28em] mb-[0.1em]">
          <motion.span
            className={`inline-block ${token.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + token.index * 0.08
            }}
          >
            {token.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
