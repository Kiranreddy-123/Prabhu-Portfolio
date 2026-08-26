import React from 'react';
import { X, Download, Printer, Briefcase, GraduationCap, Code, Award, Phone, Mail, Trophy, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sounds.playClick(800);
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      onClick={() => {
        sounds.playClick(400);
        onClose();
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          position: 'relative',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--glass-border-hover)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 240, 255, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions with Photo and PDF Download */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--glass-border)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '2px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(0, 240, 255, 0.4)',
                flexShrink: 0,
              }}
            >
              <img
                src={portfolioData.profile.avatarUrl}
                alt={portfolioData.profile.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>
                {portfolioData.profile.name}
              </h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                B.Tech in Information Technology (2022–2026) • CGPA: 8.6 / 10.00
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Direct Official PDF Download */}
            <a
              href={portfolioData.profile.resumePdfUrl}
              download="Prabhu_Kiran_Reddy_Lakkireddy_Resume.pdf"
              onClick={() => sounds.playSuccess()}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.88rem' }}
              title="Download Official PDF Resume"
            >
              <Download size={15} />
              <span>Download Official PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
              title="Print CV"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick(400);
                onClose();
              }}
              className="btn btn-icon btn-ghost"
              style={{ width: '36px', height: '36px' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Contact Info Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1.75rem',
            fontSize: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
            <Mail size={15} style={{ color: 'var(--accent-primary)' }} />
            <span>{portfolioData.socials.email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
            <Phone size={15} style={{ color: 'var(--accent-emerald)' }} />
            <span>{portfolioData.socials.phone}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
            <MapPin size={15} style={{ color: 'var(--accent-secondary)' }} />
            <span>{portfolioData.profile.status.location}</span>
          </div>
        </div>

        {/* CV Body Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <GraduationCap size={18} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Education</h3>
            </div>
            <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h4 style={{ fontWeight: 700, fontSize: '0.98rem' }}>
                  Bachelor of Technology in Information Technology (2022–2026)
                </h4>
                <span className="font-mono" style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>
                  CGPA: 8.6 / 10.00
                </span>
              </div>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.88rem' }}>
                LakiReddy Bali Reddy College of Engineering, Mylavaram
              </p>
            </div>
          </div>

          {/* Internships */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Briefcase size={18} style={{ color: 'var(--accent-secondary)' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Experience</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                      {exp.role} — <span style={{ color: 'var(--accent-primary)' }}>{exp.company}</span>
                    </h4>
                    <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0.2rem 0' }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Code size={18} style={{ color: 'var(--accent-tertiary)' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Featured Projects</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {portfolioData.projects.map((p) => (
                <div key={p.id} style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{p.description}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', marginTop: '0.3rem' }}>
                    Stack: {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Trophy size={18} style={{ color: 'var(--accent-amber)' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Achievements</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {portfolioData.achievements.map((ach, idx) => (
                <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '0.8rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {ach.title}
                    </h4>
                    <span className="badge badge-emerald font-mono" style={{ fontSize: '0.7rem' }}>
                      {ach.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Award size={18} style={{ color: 'var(--accent-emerald)' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Certifications</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
              {portfolioData.certifications.map((c, idx) => (
                <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{c.title}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--accent-primary)' }}>{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Code size={18} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Technical Skills</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {portfolioData.skills.map((s, idx) => (
                <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>
                    {s.category}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {s.skills.map((k) => k.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
