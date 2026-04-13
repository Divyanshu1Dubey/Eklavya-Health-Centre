import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect if an element is visible in the viewport using IntersectionObserver.
 * @param {Object} options - Options object.
 * @param {number} options.threshold - A value between 0 and 1 indicating the percentage of the element's visibility required to trigger.
 * @returns {[React.RefObject, boolean]} - A ref to assign to the target element and a boolean indicating if it's visible.
 */
const UseIntersectionObserver = ({ threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false); // Visibility state
  const elementRef = useRef(null); // Ref to attach to the target DOM element

  useEffect(() => {
    // Create the observer instance with callback and options
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update visibility based on intersection
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentElement = elementRef.current;

    // Start observing the element
    if (currentElement) observer.observe(currentElement);

    // Cleanup: unobserve the element on unmount or ref change
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  // Return the element ref and its visibility state
  return [elementRef, isVisible];
};

export default UseIntersectionObserver;
