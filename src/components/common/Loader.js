import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const Loader = forwardRef((props, ref) => {
  const [isFading, setIsFading] = useState(false);
  const loaderRef = useRef(null);
  
  useEffect(() => {
    // When component mounts, force layout recalculation to trigger animations
    const triggerAnimation = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add('loading-visible');
      }
    }, 50);
    
    // Listen for animation end to handle cleanup after fade-out
    const handleAnimationEnd = () => {
      if (isFading && loaderRef.current) {
        loaderRef.current.classList.add('loading-hidden');
      }
    };
    
    const loaderElement = loaderRef.current;
    if (loaderElement) {
      loaderElement.addEventListener('transitionend', handleAnimationEnd);
    }
    
    return () => {
      clearTimeout(triggerAnimation);
      if (loaderElement) {
        loaderElement.removeEventListener('transitionend', handleAnimationEnd);
      }
    };
  }, [isFading]);
  
  // Expose fadeOut method to parent component
  useImperativeHandle(ref, () => ({
    fadeOut: () => setIsFading(true)
  }));

  return (
    <div 
      ref={loaderRef} 
      className={`loading-wrapper ${isFading ? 'loading-fade-out' : ''}`}
    >
      <div className="loading-content">
        <svg className="loader-svg" width="100" height="100" viewBox="0 0 100 100">
          <circle 
            className="loader-circle" 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            strokeWidth="5" 
          />
        </svg>
      </div>
    </div>
  );
});

export default Loader; 