import { useEffect } from 'react';

// ===========================================================
// Hero Component
// Displays a full-screen hero banner with heading and description
// Accepts: img (background image), heading, description
// ===========================================================
const Hero = ({ img, heading, description }) => {
  useEffect(() => {
    // Add 'bg-loaded' class to trigger background image transition
    const heroSlide = document.querySelector('.swiper-slide');
    if (heroSlide) {
      heroSlide.classList.add('bg-loaded');
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="swiper-hero">
        <div
          className="swiper-slide bg-overlay bg-overlay-900 bg-dark bg-image hero-img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            transition: 'background-image 0.3s ease-in-out',
          }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-7 text-center text-lg-start justify-content-center align-self-center align-items-start">
                {/* Hero Heading with animation */}
                <p className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                  {heading}
                </p>

                {/* Hero Description with animation */}
                <p className="hero-p mb-md-7 mb-0 text-white animate__animated animate__slideInRight animate__delay-2s">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
