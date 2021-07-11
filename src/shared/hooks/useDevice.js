import { useEffect, useState } from 'react';

export const useDevice = () => {
  const [display, setDisplay] = useState('mobile');

  const handleResize = () => {
    if (window.matchMedia('(max-width: 425px)').matches) {
      setDisplay(() => 'mobile');
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      setDisplay(() => 'tablet');
    } else {
      setDisplay(() => 'desktop');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { display };
};
