import { Fragment, useMemo, useState, useCallback } from 'react';
import { CheckCircle2, CalendarCheck, Clock, User, Phone, Mail, MapPin, Download, ChevronLeft, Stethoscope, Copy, CheckCheck, FileText } from 'lucide-react';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import { useLanguage } from '../src/context/LanguageContext';

/* ─── Deterministic ticket ID ─────────────────────────────────── */
const generateTicketId = () => {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `EHC-${ts}-${rand}`;
};

/* ─── localStorage helpers ────────────────────────────────────── */
const LS_KEY = 'eklavya_appointments';

const saveAppointment = (appt) => {
  if (typeof window === 'undefined') return;
  const existing = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  existing.push(appt);
  localStorage.setItem(LS_KEY, JSON.stringify(existing));
};

const QUICK_CONCERN_TEMPLATES = [
  { label: 'Fever', text: 'Fever and weakness for the last 2 days.' },
  { label: 'Sickness', text: 'General sickness and low energy throughout the day.' },
  { label: 'Health Issue', text: 'I am facing a health issue and need clinical guidance.' },
  { label: 'Doctor Checkup', text: 'Routine doctor checkup and preventive consultation.' },
  { label: 'Follow-up', text: 'Follow-up visit for previous treatment and medicines.' },
  { label: 'Report Review', text: 'Need review of recent medical reports and next steps.' }
];

const APPOINTMENT_TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00'
];

const toLocalDateInputValue = (date = new Date()) => {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
};

const buildDateTimeFromParts = (dateValue, timeValue) => {
  if (!dateValue || !timeValue) return '';
  return `${dateValue}T${timeValue}`;
};

const formatTimeLabel = (timeValue) => {
  const parsed = new Date(`2000-01-01T${timeValue}`);
  if (Number.isNaN(parsed.getTime())) return timeValue;
  return parsed.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
};

/* ─── Format datetime nicely ──────────────────────────────────── */
const formatDateTimeNice = (dt) => {
  if (!dt) return '—';
  const d = new Date(dt);
  if (isNaN(d.getTime())) return dt;
  return d.toLocaleString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true
  });
};

/* ─── Appointment Confirmation Ticket ────────────────────────── */
const AppointmentTicket = ({ appointment, onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard?.writeText(appointment.ticketId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [appointment.ticketId]);

  const handleDownload = async () => {
    const element = document.getElementById('appt-ticket-printable');
    if (!element) return;
    
    // Hide actions before capture
    const actions = element.querySelector('.appt-ticket-actions');
    if (actions) actions.style.display = 'none';

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(element, { backgroundColor: '#ffffff', scale: 2 });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Eklavya_Appointment_${appointment.ticketId}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate ticket image', err);
    } finally {
      if (actions) actions.style.display = 'flex';
    }
  };

  return (
    <div className="appt-ticket-overlay">
      <div className="appt-ticket-wrap" id="appt-ticket-printable">
        {/* Header */}
        <div className="appt-ticket-header">
          <div className="appt-ticket-logo-row">
            <span className="appt-tick-icon"><CheckCircle2 size={28} /></span>
            <div>
              <p className="appt-ticket-clinic-name mb-0">Eklavya Healthcare Centre</p>
              <p className="appt-ticket-doctor mb-0">Dr. Akash Tamrakar — Consultant Physician &amp; ICU Specialist</p>
            </div>
          </div>
          <h2 className="appt-ticket-title">Appointment Confirmation</h2>
          <p className="appt-ticket-subtitle">Show this screen at the reception desk</p>
        </div>

        {/* Ticket ID Badge */}
        <div className="appt-ticket-id-row">
          <span className="appt-ticket-id-label">Ticket ID</span>
          <button className="appt-ticket-id-value" onClick={handleCopy} title="Copy ticket ID">
            {appointment.ticketId}
            {copied
              ? <CheckCheck size={15} className="ms-2 text-success" />
              : <Copy size={15} className="ms-2" />}
          </button>
        </div>

        {/* Details Grid */}
        <div className="appt-ticket-details">
          <div className="appt-detail-row">
            <span className="appt-detail-icon"><User size={16} /></span>
            <div>
              <span className="appt-detail-label">Patient Name</span>
              <span className="appt-detail-value">{appointment.name || '—'}</span>
            </div>
          </div>
          <div className="appt-detail-row">
            <span className="appt-detail-icon"><Phone size={16} /></span>
            <div>
              <span className="appt-detail-label">Contact Number</span>
              <span className="appt-detail-value">{appointment.phone || '—'}</span>
            </div>
          </div>
          {appointment.email && (
            <div className="appt-detail-row">
              <span className="appt-detail-icon"><Mail size={16} /></span>
              <div>
                <span className="appt-detail-label">Email</span>
                <span className="appt-detail-value">{appointment.email}</span>
              </div>
            </div>
          )}
          <div className="appt-detail-row">
            <span className="appt-detail-icon"><Stethoscope size={16} /></span>
            <div>
              <span className="appt-detail-label">Service Requested</span>
              <span className="appt-detail-value">{appointment.service || '—'}</span>
            </div>
          </div>
          {appointment.message && (
            <div className="appt-detail-row">
              <span className="appt-detail-icon"><FileText size={16} /></span>
              <div>
                <span className="appt-detail-label">Symptoms / Concern</span>
                <span className="appt-detail-value appt-detail-note">{appointment.message}</span>
              </div>
            </div>
          )}
          <div className="appt-detail-row">
            <span className="appt-detail-icon"><CalendarCheck size={16} /></span>
            <div>
              <span className="appt-detail-label">Appointment Date &amp; Time</span>
              <span className="appt-detail-value appt-datetime">{formatDateTimeNice(appointment.dateTime)}</span>
            </div>
          </div>
          {appointment.address && (
            <div className="appt-detail-row">
              <span className="appt-detail-icon"><MapPin size={16} /></span>
              <div>
                <span className="appt-detail-label">Patient Address</span>
                <span className="appt-detail-value">{appointment.address}</span>
              </div>
            </div>
          )}
          <div className="appt-detail-row">
            <span className="appt-detail-icon"><Clock size={16} /></span>
            <div>
              <span className="appt-detail-label">Booked On</span>
              <span className="appt-detail-value">{formatDateTimeNice(appointment.bookedAt)}</span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="appt-ticket-note">
          <p className="mb-1"><strong>Important:</strong> Please arrive 10 minutes before your appointment time. Carry your previous reports and current medication list.</p>
          <p className="mb-0 appt-ticket-status-pill text-success mt-2">
            <CheckCheck size={18} className="me-2" /> Confirmed your booking
          </p>
        </div>

        {/* Action buttons (hidden in print) */}
        <div className="appt-ticket-actions no-print">
          <button className="btn btn-primary rounded-pill px-4 shadow-sm" style={{ background: '#357abd', borderColor: '#357abd' }} onClick={handleDownload}>
            <Download size={18} className="me-2" />Download Ticket
          </button>
          <button className="btn btn-outline-primary rounded-pill px-4" onClick={onBack}>
            <ChevronLeft size={18} className="me-1" />Book another
          </button>
        </div>
      </div>
    </div>
  );
};


/* ─── Main Page ───────────────────────────────────────────────── */
const ContactPage = () => {
  const { data: { siteInfo, treatments } } = useLanguage();
  const todayDate = useMemo(() => toLocalDateInputValue(), []);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    appointmentDate: '',
    appointmentTime: '',
    dateTime: '',
    address: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [confirmedAppt, setConfirmedAppt] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  const handleAppointmentDateChange = (dateValue) => {
    setForm((prev) => ({
      ...prev,
      appointmentDate: dateValue,
      dateTime: buildDateTimeFromParts(dateValue, prev.appointmentTime)
    }));
    setErrors((prev) => ({ ...prev, dateTime: '' }));
  };

  const handleAppointmentTimeChange = (timeValue) => {
    setForm((prev) => ({
      ...prev,
      appointmentTime: timeValue,
      dateTime: buildDateTimeFromParts(prev.appointmentDate, timeValue)
    }));
    setErrors((prev) => ({ ...prev, dateTime: '' }));
  };

  const handleQuickConcernFill = (templateText) => {
    setForm((prev) => {
      const current = prev.message.trim();
      if (!current) return { ...prev, message: templateText };
      if (current.includes(templateText)) return prev;
      return { ...prev, message: `${current}\n${templateText}` };
    });
  };

  /* WhatsApp message builder */
  const whatsappMessage = useMemo(() => {
    const lines = [
      siteInfo.appointmentMessage,
      `Name: ${form.name || '-'}`,
      `Contact Number: ${form.phone || '-'}`,
      `Email Address: ${form.email || '-'}`,
      `Service Required: ${form.service || '-'}`,
      `Preferred Date: ${form.appointmentDate || '-'}`,
      `Preferred Time: ${form.appointmentTime ? formatTimeLabel(form.appointmentTime) : '-'}`,
      `Date / Time: ${form.dateTime ? formatDateTimeNice(form.dateTime) : '-'}`,
      `Your Address: ${form.address || '-'}`,
      `Your Message: ${form.message || '-'}`
    ];
    return encodeURIComponent(lines.join('\n'));
  }, [form, siteInfo.appointmentMessage]);

  const appointmentLinks = [
    { label: 'Send to appointment number', href: `https://wa.me/${siteInfo.appointmentWhatsApp}?text=${whatsappMessage}`, primary: true },
    { label: 'Send to alternate number', href: `https://wa.me/${siteInfo.whatsapp}?text=${whatsappMessage}`, primary: false }
  ];

  /* Validate */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Contact number is required';
    if (!form.service) e.service = 'Please select a service';
    const selectedDateTime = buildDateTimeFromParts(form.appointmentDate, form.appointmentTime);
    if (!selectedDateTime) {
      e.dateTime = 'Please choose both preferred date and preferred time';
    } else {
      const selected = new Date(selectedDateTime);
      if (Number.isNaN(selected.getTime()) || selected.getTime() < Date.now() - 60000) {
        e.dateTime = 'Please choose a future date and time';
      }
    }
    return e;
  };

  /* Book appointment (with mail) */
  const handleBookAppointment = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    
    setIsBooking(true);
    const finalDateTime = buildDateTimeFromParts(form.appointmentDate, form.appointmentTime);
    const appt = {
      ticketId: generateTicketId(),
      bookedAt: new Date().toISOString(),
      ...form,
      dateTime: finalDateTime
    };

    // Save locally
    saveAppointment(appt);
    
    // Background email send via FormSubmit (First request sends an activation link to your email)
    try {
      await fetch('https://formsubmit.co/ajax/eklavyahealthcarecentre@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Appointment: ${appt.name} - ${appt.service}`,
          _template: "table",
          Ticket_ID: appt.ticketId,
          Patient_Name: appt.name,
          Phone: appt.phone,
          Email: appt.email || "Not Provided",
          Service: appt.service,
          Date_Time: new Date(appt.dateTime).toLocaleString('en-IN'),
          Address: appt.address || "Not Provided",
          Message: appt.message || "No additional message"
        })
      });
    } catch (err) {
      console.error('Failed to send mail', err);
    }
    
    setConfirmedAppt(appt);
    setErrors({});
    setIsBooking(false);
  };

  const handleBack = () => {
    setConfirmedAppt(null);
    setForm({
      name: '',
      phone: '',
      email: '',
      service: '',
      appointmentDate: '',
      appointmentTime: '',
      dateTime: '',
      address: '',
      message: ''
    });
  };

  /* Show confirmation ticket if booked */
  if (confirmedAppt) {
    return (
      <Fragment>
        <PageProgress />
        <main className="content-wrapper overflow-hidden pb-10">
          <AppointmentTicket appointment={confirmedAppt} onBack={handleBack} />
        </main>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Book Appointment with Dr. Akash Tamrakar | Best Doctor in Jhansi"
        description={`Book appointment with ${siteInfo.doctorName} at ${siteInfo.name}, trusted by families searching for the best doctor in Jhansi and best doctor in Gursarai for physician, chest, diabetes, thyroid, and chronic care support.`}
        canonical={`${siteInfo.url}/contact`}
        keywords={[
          'dr akash tamrakar appointment',
          'dr akash tamrakar best doctor in jhansi',
          'dr akash tamrakar gursarai jhansi',
          'best doctor in jhansi contact',
          'best doctor in gursarai appointment',
          'best physician in jhansi contact',
          'best chest doctor in jhansi appointment',
          'doctor appointment jhansi',
          'eklavya healthcare centre contact'
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">

        {/* ── Hero Panel ── */}
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

        {/* ── Appointment Form ── */}
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-start">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card premium-form appointment-form-shell h-100 glass-card">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Direct appointment</span>
                  <h2 className="h3 mb-1">Book your appointment</h2>
                  <p className="mb-4 text-dark-blue text-opacity-75">
                    Fill the form below to book your slot. You will receive a confirmation ticket you can show at the reception.
                  </p>

                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Name <span className="text-danger">*</span></label>
                      <input
                        id="appt-name"
                        className={`form-control appt-field${errors.name ? ' is-invalid' : ''}`}
                        placeholder="Full name"
                        value={form.name}
                        onChange={(e) => { setForm((p) => ({ ...p, name: e.target.value })); setErrors((p) => ({ ...p, name: '' })); }}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Contact Number <span className="text-danger">*</span></label>
                      <input
                        id="appt-phone"
                        className={`form-control appt-field${errors.phone ? ' is-invalid' : ''}`}
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => { setForm((p) => ({ ...p, phone: e.target.value })); setErrors((p) => ({ ...p, phone: '' })); }}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Email Address</label>
                      <input
                        id="appt-email"
                        className="form-control appt-field"
                        type="email"
                        placeholder="Optional"
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>

                    {/* Service */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Service <span className="text-danger">*</span></label>
                      <select
                        id="appt-service"
                        className={`form-select appt-field${errors.service ? ' is-invalid' : ''}`}
                        value={form.service}
                        onChange={(e) => { setForm((p) => ({ ...p, service: e.target.value })); setErrors((p) => ({ ...p, service: '' })); }}
                      >
                        <option value="">Select a service</option>
                        {treatments.map((item) => (
                          <option key={item.id} value={item.title}>{item.title}</option>
                        ))}
                      </select>
                      {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                    </div>

                    {/* Preferred Date */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Preferred Date <span className="text-danger">*</span></label>
                      <input
                        id="appt-date"
                        className={`form-control appt-field${errors.dateTime ? ' is-invalid' : ''}`}
                        type="date"
                        value={form.appointmentDate}
                        min={todayDate}
                        onChange={(e) => handleAppointmentDateChange(e.target.value)}
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Preferred Time <span className="text-danger">*</span></label>
                      <select
                        id="appt-time"
                        className={`form-select appt-field${errors.dateTime ? ' is-invalid' : ''}`}
                        value={form.appointmentTime}
                        onChange={(e) => handleAppointmentTimeChange(e.target.value)}
                      >
                        <option value="">Select time</option>
                        {APPOINTMENT_TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{formatTimeLabel(slot)}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <div className="appt-time-quick-wrap">
                        {['09:00', '11:00', '13:00', '15:00', '17:00'].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            className={`appt-slot-chip${form.appointmentTime === slot ? ' is-active' : ''}`}
                            onClick={() => handleAppointmentTimeChange(slot)}
                          >
                            {formatTimeLabel(slot)}
                          </button>
                        ))}
                      </div>
                      <p className="appt-help-text mb-0">Choose a preferred slot. Clinic will confirm the nearest available timing based on daily schedule.</p>
                      {errors.dateTime && <div className="invalid-feedback d-block">{errors.dateTime}</div>}
                    </div>

                    {/* Address */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Your Address</label>
                      <input
                        id="appt-address"
                        className="form-control appt-field"
                        placeholder="City / Area"
                        value={form.address}
                        onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
                      />
                    </div>

                    {/* Quick concern chips */}
                    <div className="col-12">
                      <label className="form-label fw-bold">Quick Concern Tags</label>
                      <div className="appt-concern-grid">
                        {QUICK_CONCERN_TEMPLATES.map((template) => (
                          <button
                            key={template.label}
                            type="button"
                            className={`appt-concern-chip${form.message.includes(template.text) ? ' is-active' : ''}`}
                            onClick={() => handleQuickConcernFill(template.text)}
                          >
                            {template.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label className="form-label fw-bold">Symptoms / Health Issue</label>
                      <textarea
                        id="appt-message"
                        className="form-control appt-field"
                        rows="4"
                        placeholder="Example: Fever since yesterday, throat pain, weakness, or routine doctor checkup."
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      />
                      <p className="appt-help-text mb-0">Share symptoms, duration, ongoing medicines, or specific health concerns for better consultation prep.</p>
                    </div>
                  </div>

                  {/* CTA row */}
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    {/* Book (local ticket) */}
                    <button
                      id="appt-book-btn"
                      className="btn btn-power rounded-pill"
                      onClick={handleBookAppointment}
                      disabled={isBooking}
                    >
                      <CalendarCheck size={16} className="me-2" />
                      {isBooking ? 'Completing Booking...' : 'Book & Get Ticket'}
                    </button>

                    {/* WhatsApp buttons */}
                    {appointmentLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={item.primary ? 'btn btn-whatsapp rounded-pill' : 'btn btn-teal rounded-pill'}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>


                </div>
              </div>

              {/* Doctor Bio */}
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

        {/* ── Clinic Details + Maps ── */}
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
