import React from 'react';

interface OneLoopLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const OneLoopMark: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/images/logo/oneloop-logo.png"
        alt="OneLoop"
        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(229,156,105,0.3)]"
      />
    </div>
  );
};

export const OneLoopLogo: React.FC<OneLoopLogoProps> = ({
  className = '',
  showText = true,
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16'
  };

  if (!showText) {
    return <OneLoopMark className={sizeMap[size]} />;
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/logo/oneloop-full-logo.png"
        alt="OneLoop — Audit. Build. Market. Automate."
        className={`${sizeMap[size]} w-auto object-contain filter drop-shadow-[0_0_12px_rgba(229,156,105,0.25)]`}
      />
    </div>
  );
};
