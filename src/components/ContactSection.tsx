import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Calendar, 
  Clock,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Full-Stack Web App');
  const [budget, setBudget] = useState(15);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services = [
    'Full-Stack Web App',
    'Machine Learning / AI',
    'Data Analytics / Power BI',
    'Software Engineering',
    'Immediate Graduate Hiring',
  ];

  const handleCopyEmail = () => {
    sounds.playClick(900);
    navigator.clipboard.writeText(portfolioData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    sounds.playSuccess();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      {/* Background Ambient Glow */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{
          top: '20%',
          right: '15%',
          width: '500px',
          height: '500px',
          background: 'var(--hero-glow-2)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Channels</span>
          </div>
          <h2 className="section-title">Let&apos;s Connect &amp; Collaborate</h2>
          <p className="section-subtitle">
            Open for software engineering roles, full-stack opportunities, and innovative technical projects. Reach out directly!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Quick Booking */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                Direct Contact &amp; Information
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                I am actively looking for full-time Software Development Engineer (SDE) and Graduate roles. Feel free to contact me via email or phone!
              </p>

              {/* Copy Email Box */}
              <div
                onClick={handleCopyEmail}
                style={{
                  background: 'var(--bg-tertiary)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--glass-border-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={() => sounds.playHover()}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                      CLICK TO COPY EMAIL
                    </span>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {portfolioData.socials.email}
                    </span>
                  </div>
                </div>
                <div style={{ color: copiedEmail ? 'var(--accent-emerald)' : 'var(--text-secondary)' }}>
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                </div>
              </div>

              {/* Status details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  <Clock size={16} style={{ color: 'var(--accent-emerald)' }} />
                  <span>Phone: {portfolioData.socials.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  <MapPin size={16} style={{ color: 'var(--accent-primary)' }} />
                  <span>Location: {portfolioData.profile.status.location}</span>
                </div>
              </div>

              {/* Social Icons (GitHub & LinkedIn only) */}
              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
                <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="btn btn-icon btn-secondary" title="GitHub">
                  <GithubIcon size={17} />
                </a>
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-icon btn-secondary" title="LinkedIn">
                  <LinkedinIcon size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.2rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.6 }}>
                  Thank you, <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{name}</span>. I have received your message and will get back to you at <span style={{ color: 'var(--accent-secondary)' }}>{email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Send Direct Message</h3>

                {/* Service Type Selection Pills */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.6rem', fontWeight: 600 }}>
                    Inquiry Area:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {services.map((srv) => {
                      const isSelected = serviceType === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => {
                            sounds.playClick(750);
                            setServiceType(srv);
                          }}
                          onMouseEnter={() => sounds.playHover()}
                          className="badge"
                          style={{
                            cursor: 'pointer',
                            padding: '0.4rem 0.8rem',
                            fontSize: '0.8rem',
                            background: isSelected ? 'var(--accent-gradient)' : 'var(--bg-elevated)',
                            color: isSelected ? '#fff' : 'var(--text-secondary)',
                            borderColor: isSelected ? 'transparent' : 'var(--glass-border)',
                          }}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Recruiter / HR Name"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. hr@company.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Project Details Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, technical role, or collaboration..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
                  onMouseEnter={() => sounds.playHover()}
                >
                  <Send size={18} />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
