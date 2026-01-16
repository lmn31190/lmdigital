import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * ScrollReveal - Animation wrapper component
 * Animates children when they enter the viewport
 * 
 * @param {ReactNode} children - Content to animate
 * @param {string} animation - Animation type: 'fade-up', 'fade-in', 'slide-left', 'slide-right', 'zoom-in'
 * @param {number} delay - Delay in milliseconds
 * @param {number} threshold - Intersection threshold (0 to 1)
 */
const ScrollReveal = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0'
    },
    'fade-in': {
      initial: 'opacity-0',
      animate: 'opacity-100'
    },
    'slide-left': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    'slide-right': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    'zoom-in': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100'
    }
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? selectedAnimation.animate : selectedAnimation.initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
