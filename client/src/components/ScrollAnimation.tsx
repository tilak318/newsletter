
import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <div ref={ref} className="animate-on-scroll">
      {children}
    </div>
  );
};

export default ScrollAnimation;
