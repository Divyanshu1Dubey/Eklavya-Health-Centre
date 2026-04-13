import Image from 'next/image';
import Link from 'next/link';
import { slideInUpAnimate } from './animation';
import UseIntersectionObserver from './UseIntersectionObserver';

const Card = ({ arr, icon }) => {
  // Observe when component is in viewport
  const [elementRef, isVisible] = UseIntersectionObserver({
    threshold: 0.1
  });

  return (
    <div
      className="row gx-md-5 gy-5 d-flex justify-content-center"
      ref={elementRef}
    >
      {arr.map((item) => {
        const animationDelay = `${0.2 * item.id}s`;

        return (
          <div
            key={item.id}
            className="col-md-6 col-xl-3"
            style={isVisible ? slideInUpAnimate(animationDelay) : {}}
          >
            <div className="shadow-lg p-3 rounded-xl border border-soft-dark cards treatment-card-hover">
              <div className="card-body p-3">
                {/* Icon or fallback */}
                <Image
                  src={icon || item.icon}
                  alt={`${item.title} | Eklavya Healthcare Centre`}
                  width={75}
                  height={75}
                  className="position-static mb-5 p-2 primary-bg-soft"
                />

                {/* Title */}
                <h3 className="fs-24">{item.title}</h3>

                {/* Description */}
                <p>{item.cardDescription}</p>

                {/* Optional link arrow */}
                {item.url && (
                  <div>
                    <Link href={item.url} aria-label={`Read more about ${item.title}`}>
                      <i className="uil uil-arrow-right bg-dark rounded-circle text-white fs-30 p-1" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
