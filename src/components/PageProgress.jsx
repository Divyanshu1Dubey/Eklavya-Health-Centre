import { useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * PageProgress component
 * - Displays a circular scroll progress indicator.
 * - Includes a floating WhatsApp contact button with a prefilled message.
 */
const PageProgress = () => {
  // Refs for the circular progress indicator elements
  const progressWrapRef = useRef(null);
  const progressPathRef = useRef(null);


  useEffect(() => {
    const progressPath = progressPathRef.current;
    const progressWrap = progressWrapRef.current;
    const offset = 50;

    if (progressPath && progressWrap) {
      const pathLength = progressPath.getTotalLength();

      // Set up stroke for circular progress
      progressPath.style.transition = 'none';
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressPath.style.strokeDashoffset = pathLength.toString();
      progressPath.getBoundingClientRect(); // Force layout for transition
      progressPath.style.transition = 'stroke-dashoffset 10ms linear';

      // Update progress on scroll
      const handleScroll = () => {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress.toString();

        if (scroll >= offset) {
          progressWrap.classList.add('active-progress');
        } else {
          progressWrap.classList.remove('active-progress');
        }
      };

      // Scroll to top when progress circle is clicked
      const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

      // Event listeners
      window.addEventListener('scroll', handleScroll);
      progressWrap.addEventListener('click', handleClick);

      // Cleanup on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
        progressWrap.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <div>
      {/* Scroll to Top Circular Progress */}
      <div className="progress-wrap" ref={progressWrapRef}>
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            ref={progressPathRef}
          />
        </svg>
      </div>
    </div>
  );
};

export default PageProgress;
