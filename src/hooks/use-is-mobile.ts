import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint = 768) => { // Default breakpoint for mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};