import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Activity,
  HeartPulse,
  Wind,
  Droplets,
  Gauge,
  Stethoscope,
  ShieldPlus
} from 'lucide-react';
import { slideInUpAnimate } from './animation';
import UseIntersectionObserver from './UseIntersectionObserver';

const iconMap = {
  diabetes: Droplets,
  thyroid: Activity,
  heart: HeartPulse,
  chest: Stethoscope,
  lungs: Wind,
  'kidney-liver': ShieldPlus,
  'high-blood-pressure': Gauge,
  'low-blood-pressure': Gauge,
  asthma: Wind
};

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
        const IconComponent = iconMap[item.slug] || Activity;

        return (
          <div
            key={item.id}
            className="col-md-6 col-xl-3"
            style={isVisible ? slideInUpAnimate(animationDelay) : {}}
          >
            <div className="service-card h-100 treatment-card-hover">
              <div className="service-media-wrap">
                {item.coverImage ? (
                  <Image
                    src={item.coverImage}
                    alt={`${item.title} treatment visual`}
                    width={640}
                    height={420}
                    loading="eager"
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                    className="service-media"
                  />
                ) : (
                  <div className="service-media service-media-fallback" />
                )}
                <div className="service-icon-chip">
                  {icon ? (
                    <Image
                      src={icon || item.icon}
                      alt={`${item.title} icon`}
                      width={52}
                      height={52}
                      className="position-static"
                    />
                  ) : (
                    <IconComponent size={28} strokeWidth={2.2} aria-hidden="true" />
                  )}
                </div>
              </div>

              <div className="card-body p-4 d-flex flex-column">
                <h3 className="fs-24 mb-3">{item.title}</h3>
                <p className="service-description mb-4">{item.cardDescription}</p>

                {item.url && (
                  <div className="mt-auto">
                    <Link href={item.url} aria-label={`Read more about ${item.title}`} className="service-arrow">
                      <ArrowRight size={18} aria-hidden="true" />
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
