import React, { useState, useEffect, useRef } from 'react';

// hook for triggering animations that start when user scrolls to an element
export const useIsInView = (margin: string = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isIntersecting];
};
