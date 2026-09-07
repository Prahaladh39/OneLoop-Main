import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

export const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  char,
  index,
  totalChars,
  scrollYProgress
}) => {
  const charProgress = totalChars > 0 ? index / totalChars : 0;
  const startRange = Math.max(0, charProgress - 0.1);
  const endRange = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(
    scrollYProgress,
    [startRange, endRange],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

interface AnimatedTextRevealProps {
  text: string;
  className?: string;
}

export const AnimatedTextReveal: React.FC<AnimatedTextRevealProps> = ({
  text,
  className = ''
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          totalChars={characters.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};
