import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  Code,
  Shield
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  const [tab, setTab] = useState<'internships' | 'achievements' | 'education'>('internships');

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Track Record &amp; Academics</span>
          </div>
          <h2 className="section-title">Internships, Achievements &amp; Education</h2>
          <p className="section-subtitle">
            A demonstrated history of successful internships in Full-Stack Web Development &amp; Data Analytics, competitive coding milestones, and 8.6 CGPA academic excellence.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              sounds.playClick(600);
              setTab('internships');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="btn"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.9rem',
              background: tab === 'internships' ? 'var(--accent-gradient)' : 'var(--glass-bg)',
              color: tab === 'internships' ? '#fff' : 'var(--text-secondary)',
              border: tab === 'internships' ? '1px solid transparent' : '1px solid var(--glass-border)',
              boxShadow: tab === 'internships' ? '0 4px 20px rgba(0, 240, 255, 0.25)' : 'none',
            }}
          >
            <Briefcase size={16} />
            <span>Internship Experience</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(600);
              setTab('achievements');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="btn"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.9rem',
              background: tab === 'achievements' ? 'var(--accent-gradient)' : 'var(--glass-bg)',
              color: tab === 'achievements' ? '#fff' : 'var(--text-secondary)',
              border: tab === 'achievements' ? '1px solid transparent' : '1px solid var(--glass-border)',
              boxShadow: tab === 'achievements' ? '0 4px 20px rgba(245, 158, 11, 0.25)' : 'none',
            }}
          >
            <Trophy size={16} />
            <span>Achievements &amp; Honors (3)</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(600);
              setTab('education');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="btn"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.9rem',
              background: tab === 'education' ? 'var(--accent-gradient)' : 'var(--glass-bg)',
              color: tab === 'education' ? '#fff' : 'var(--text-secondary)',
              border: tab === 'education' ? '1px solid transparent' : '1px solid var(--glass-border)',
              boxShadow: tab === 'education' ? '0 4px 20px rgba(168, 85, 247, 0.25)' : 'none',
            }}
          >
            <GraduationCap size={16} />
            <span>B.Tech Degree &amp; Certifications</span>
          </button>
        </div>

        {/* Tab 1: Internships Timeline */}
        {tab === 'internships' && (
          <div
            style={{
              maxWidth: '880px',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            {/* Vertical Line */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                bottom: '20px',
                left: '20px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, transparent 100%)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {portfolioData.experience.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    paddingLeft: '3.5rem',
                  }}
                >
                  {/* Timeline Node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '1.5rem',
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'var(--bg-primary)',
                      border: '3px solid var(--accent-primary)',
                      boxShadow: '0 0 14px var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                  </div>

                  {/* Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '2rem',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <div className="badge badge-primary font-mono" style={{ fontSize: '0.8rem' }}>
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="badge font-mono" style={{ fontSize: '0.75rem' }}>
                          {item.type}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {item.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                        <span style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                          {item.company}
                        </span>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                      {item.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid var(--glass-border)',
                      }}
                    >
                      {item.technologies.map((tech) => (
                        <span key={tech} className="badge font-mono" style={{ fontSize: '0.72rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Achievements & Honors */}
        {tab === 'achievements' && (
          <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {portfolioData.achievements.map((ach, aIdx) => (
                <div
                  key={aIdx}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                  onMouseEnter={() => sounds.playHover()}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'var(--accent-gradient)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                        }}
                      >
                        {aIdx === 0 && <Trophy size={20} />}
                        {aIdx === 1 && <Code size={20} />}
                        {aIdx === 2 && <Shield size={20} />}
                      </div>
                      <span className="badge badge-emerald font-mono">{ach.badge}</span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {ach.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                      {ach.category}
                    </span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {ach.description}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontSize: '0.82rem', fontWeight: 600 }}>
                    <CheckCircle2 size={14} />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Education & Certifications */}
        {tab === 'education' && (
          <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Degree Card */}
            <div className="glass-panel" style={{ padding: '2.25rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div className="badge badge-primary font-mono" style={{ marginBottom: '0.5rem' }}>
                    <Calendar size={13} />
                    <span>2022 — 2026 (Graduation Year)</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Bachelor of Technology in Information Technology
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    LakiReddy Bali Reddy College of Engineering, Mylavaram
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Mylavaram, Andhra Pradesh, India</p>
                </div>

                <div
                  style={{
                    background: 'var(--bg-tertiary)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--glass-border-hover)',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>ACADEMIC SCORE</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent-emerald)' }}>CGPA: 8.6 / 10.00</span>
                </div>
              </div>

              {/* Relevant Coursework & Practices */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <BookOpen size={16} style={{ color: 'var(--accent-secondary)' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Software Practices &amp; Core Competencies:</h4>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {[
                    'Data Structures & Algorithms',
                    'Problem Solving',
                    'Agile Methodologies',
                    'SDLC Practices',
                    'Database Technologies (SQL)',
                    'Object-Oriented Programming'
                  ].map((course) => (
                    <span key={course} className="badge badge-primary font-mono" style={{ fontSize: '0.78rem' }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Award size={20} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Industry Certifications &amp; Badges</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {portfolioData.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="glass-card"
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <div>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>
                        {cert.badge}
                      </span>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {cert.title}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        {cert.issuer}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--accent-emerald)' }} />
                      <span>{cert.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
