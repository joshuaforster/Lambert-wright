import React, { useState, useEffect, ReactNode } from 'react';

interface DelayedFallbackProps {
  children: ReactNode;
  delay?: number;
}

const DelayedFallback: React.FC<DelayedFallbackProps> = ({ children, delay = 1000 }) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showFallback ? <>{children}</> : null;
};

export default DelayedFallback;
