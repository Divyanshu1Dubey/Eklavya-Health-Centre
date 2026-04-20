/**
 * Utility function to return a standard animation style object.
 * @param {Object} params
 * @param {string} params.name - Name of the animation keyframe.
 * @param {string} params.delay - Delay before the animation starts (e.g., "0.3s").
 * @returns {Object} - Animation style object for inline usage.
 */
const animation = ({ name, delay = '0s' }) => ({
  animationName: name,
  animationDelay: delay,
  animationFillMode: 'both',
  animationDuration: '900ms',
  animationDirection: 'normal',
  animationTimingFunction: 'ease'
});

// Predefined animation helpers with different directions or effects

/** Slide in from the top */
export const slideInDownAnimate = (delay) => animation({ name: 'slideInDown', delay });

/** Slide in from the bottom */
export const slideInUpAnimate = (delay) => animation({ name: 'slideInUp', delay });

/** Slide in from the right */
export const slideInRightAnimate = (delay) => animation({ name: 'slideInRight', delay });

/** Slide in from the left */
export const slideInLeftAnimate = (delay) => animation({ name: 'slideInLeft', delay });

/** Zoom in animation */
export const zoomInAnimate = (delay) => animation({ name: 'zoomIn', delay });

/** Fade in animation */
export const fadeInAnimate = (delay) => animation({ name: 'fadeIn', delay });

/** Fade in from the left */
export const fadeInLeft = (delay) => animation({ name: 'fadeInLeft', delay });

/** Fade in from the bottom */
export const fadeInUp = (delay) => animation({ name: 'fadeInUp', delay });

// Default export for the core animation function
export default animation;
