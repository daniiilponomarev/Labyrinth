import React, { useState, useEffect, useRef } from 'react';

// hook for triggering animations that start when user scrolls to an element
export const useIsInView = (margin: string = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref: React.MutableRefObject<any> = useRef();
  const currentRef = ref.current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.unobserve(currentRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isIntersecting];
};
