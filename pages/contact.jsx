import { Fragment, useMemo, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import { useLanguage } from '../src/context/LanguageContext';

const ContactPage = () => {
  const { data: { siteInfo, treatments } } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    dateTime: '',
    address: '',
    message: ''
  });

  const message = useMemo(() => {
    const lines = [
      siteInfo.appointmentMessage,
      `Name: ${form.name || '-'}`,
      `Contact Number: ${form.phone || '-'}`,
      `Email Address: ${form.email || '-'}`,
      `Service Required: ${form.service || '-'}`,
      `Date / Time: ${form.dateTime || '-'}`,
      `Your Address: ${form.address || '-'}`,
      `Your Message: ${form.message || '-'}`
    ];

    return encodeURIComponent(lines.join('\n'));
  }, [form]);

  const appointmentLinks = [
    {
      label: 'Send to appointment number',
      href: `https://wa.me/${siteInfo.appointmentWhatsApp}?text=${message}`,
      primary: true
    },
    {
      label: 'Send to alternate number',
      href: `https://wa.me/${siteInfo.whatsapp}?text=${message}`,
      primary: false
    }
  ];

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Direct Appointment with Dr. Akash Tamrakar"
        description={`Contact ${siteInfo.name} for appointments with ${siteInfo.doctorName}. Book with a trusted physician and chest care specialist serving patients from Jhansi and Gursarai.`}
        canonical={`${siteInfo.url}/contact`}
        keywords={[
          'best doctor in jhansi contact',
          'best doctor in gursarai appointment',
          'best physician in jhansi contact',
          'best chest doctor in jhansi appointment',
          'doctor appointment jhansi',
          'eklavya healthcare centre contact'
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="clinic-panel p-6 p-md-8" data-reveal="zoom">
              <div className="row align-items-center gy-6">
                <div className="col-lg-7" data-reveal="left">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Book an appointment</span>
                  <h1 className="display-3 text-dark-blue mb-4">Talk to Dr. Akash Tamrakar, ask a question, or plan your visit.</h1>
                  <p className="lead text-dark-blue text-opacity-85 mb-0">
                    The fastest way to connect is by phone or WhatsApp. Patients from Jhansi and Gursarai can share reports before the visit for quicker consultation planning.
                  </p>
                </div>
                <div className="col-lg-5" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
                  <div className="subtle-card p-4 bg-white text-dark-blue">
                    <p className="fw-bold text-teal mb-2">Quick contact</p>
                    <p className="mb-2"><strong>Phone:</strong> <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a></p>
                    <p className="mb-2"><strong>Alt:</strong> <a href={`tel:${siteInfo.altPhone.replace(/\s/g, '')}`}>{siteInfo.altPhone}</a></p>
                    <p className="mb-0"><strong>Email:</strong> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-start">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card premium-form h-100 glass-card">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Direct appointment</span>
                  <h2 className="h3 mb-3">Fill once: details go to both appointment numbers.</h2>
                  <p className="mb-4">Share your appointment details below and send directly on WhatsApp. The message reaches both the priority appointment number and the alternate contact number.</p>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Name</label>
                      <input className="form-control" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Contact Number</label>
                      <input className="form-control" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Email Address</label>
                      <input className="form-control" type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Services - Select -</label>
                      <select className="form-select" value={form.service} onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}>
                        <option value="">Select a service</option>
                        {treatments.map((item) => (
                          <option key={item.id} value={item.title}>{item.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Date / Time</label>
                      <input className="form-control" type="datetime-local" value={form.dateTime} onChange={(e) => setForm((prev) => ({ ...prev, dateTime: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Your Address</label>
                      <input className="form-control" value={form.address} onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Your Message</label>
                      <textarea className="form-control" rows="4" value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    {appointmentLinks.map((item) => (
                      <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={item.primary ? 'btn btn-power rounded-pill' : 'btn btn-teal rounded-pill'}>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
                <div className="clean-card h-100">
                  <h3 className="h4 mb-3">Dr. Akash Tamrakar bio</h3>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    {siteInfo.doctorBio.map((item) => (
                      <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-start">
              <div className="col-lg-5" data-reveal="left">
                <div className="clean-card h-100 glass-card">
                  <h2 className="h3 mb-4">Doctor contact details</h2>
                  <div className="d-flex flex-column gap-4 mb-4">
                    {siteInfo.locations.map((loc) => (
                      <div key={loc.id} className="p-3 bg-light rounded-medical">
                        <h3 className="h6 fw-bold mb-2 text-dark-blue">{loc.name}</h3>
                        <p className="mb-2 text-dark-blue text-opacity-85">{loc.address.join(', ')}</p>
                        <p className="mb-0 text-teal fw-bold" style={{ fontSize: '14px' }}>{loc.timings}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mb-3"><strong>Phone:</strong> <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a></p>
                  <p className="mb-3"><strong>Alt phone:</strong> <a href={`tel:${siteInfo.altPhone.replace(/\s/g, '')}`}>{siteInfo.altPhone}</a></p>
                  <p className="mb-0"><strong>Email:</strong> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                </div>
              </div>
              <div className="col-lg-7" data-reveal="right" style={{ '--reveal-delay': '90ms' }}>
                <div className="d-flex flex-column gap-4">
                  {siteInfo.locations.map((loc) => (
                    <div key={`map-${loc.id}`} className="map-frame overflow-hidden glass-card p-2">
                      <h4 className="fs-16 px-2 pt-2 mb-2 text-dark-blue">{loc.name} Map</h4>
                      <iframe
                        src={loc.mapEmbed}
                        width="100%"
                        height="250"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={loc.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ContactPage;
