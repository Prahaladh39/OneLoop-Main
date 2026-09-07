import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = '',
  showAsterisk = false,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap items-baseline ${className}`}>
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;

        return (
          <span key={wordIndex} className={`inline-block mr-[0.25em] last:mr-0 ${showAsterisk && isLastWord ? 'overflow-visible pr-3' : 'overflow-hidden'}`}>
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + wordIndex * 0.08
              }}
            >
              {word}
              {showAsterisk && isLastWord && (
                <span className="absolute -top-[0.05em] -right-[0.32em] text-[0.35em] text-[#E59C69] select-none font-bold leading-none">
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};
