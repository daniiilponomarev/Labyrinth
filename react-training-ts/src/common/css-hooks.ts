import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    // console.log('getSize', isClient, window.innerWidth);
    return {
      height: isClient ? window.innerHeight : undefined,
      width: isClient ? window.innerWidth : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    // console.log('useEffect()', isClient);
    if (!isClient) {
      return undefined;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
