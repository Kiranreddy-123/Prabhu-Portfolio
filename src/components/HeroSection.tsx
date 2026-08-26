import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Download, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResumeModal,
  onOpenTerminal,
}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Typewriter effect for rotating titles
  useEffect(() => {
    const titles = portfolioData.profile.rotatingTitles;
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText.length < currentTitle.length) {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
      } else if (!isDeleting && currentText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText.length > 0) {
        setCurrentText(currentTitle.slice(0, currentText.length - 1));
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  // 3D Tilt Card Physics on mouse move
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease',
    });
  };

  const handleCardMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease',
    });
  };

  const scrollToSection = (id: string) => {
    sounds.playClick(650);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{
          top: '15%',
          left: '10%',
          width: '450px',
          height: '450px',
          background: 'var(--hero-glow-1)',
        }}
      />
      <div
        className="glow-orb animate-pulse-glow"
        style={{
          bottom: '10%',
          right: '8%',
          width: '500px',
          height: '500px',
          background: 'var(--hero-glow-2)',
          animationDelay: '-2s',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Hero Copy & Actions */}
          <div>
            {/* Actively Seeking Roles Badge */}
            <div
              className="glass-panel"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 12px #10b981',
                  animation: 'pulseGlow 2s infinite',
                }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>
                {portfolioData.profile.status.text}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.8vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.2rem',
              }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">{portfolioData.profile.name}</span>
            </h1>

            {/* Rotating Title */}
            <div
              style={{
                fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>&gt;</span>
              <span className="font-mono" style={{ color: 'var(--text-primary)' }}>
                {currentText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.4em',
                  backgroundColor: 'var(--accent-primary)',
                  animation: 'pulseGlow 0.8s infinite',
                }}
              />
            </div>

            {/* Tagline / Bio Description */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '2rem',
              }}
            >
              {portfolioData.profile.bio}
            </p>

            {/* Hero CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                onMouseEnter={() => sounds.playHover()}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => {
                  sounds.playClick(800);
                  onOpenTerminal();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
              >
                <TerminalIcon size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>Launch CLI</span>
              </button>

              {/* Direct PDF Resume Download */}
              <a
                href={portfolioData.profile.resumePdfUrl}
                download="Prabhu_Kiran_Reddy_Lakkireddy_Resume.pdf"
                onClick={() => sounds.playSuccess()}
                onMouseEnter={() => sounds.playHover()}
                className="btn btn-secondary"
                style={{
                  padding: '0.85rem 1.4rem',
                  fontSize: '0.95rem',
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--accent-primary)',
                }}
                title="Download Official PDF Resume"
              >
                <Download size={17} />
                <span>Download PDF Resume</span>
              </a>
            </div>

            {/* Social Links & Location Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '1rem',
                borderTop: '1px solid var(--glass-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                <MapPin size={15} style={{ color: 'var(--accent-primary)' }} />
                <span>{portfolioData.profile.status.location}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-icon btn-secondary"
                  title="GitHub"
                  onMouseEnter={() => sounds.playHover()}
                  style={{ width: '38px', height: '38px' }}
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-icon btn-secondary"
                  title="LinkedIn"
                  onMouseEnter={() => sounds.playHover()}
                  style={{ width: '38px', height: '38px' }}
                >
                  <LinkedinIcon size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Crystal-Clear Large Profile Photo & Status Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                width: '100%',
                maxWidth: '430px',
                padding: '1.75rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border-hover)',
                boxShadow: 'var(--glass-shadow), 0 0 40px rgba(0, 240, 255, 0.15)',
                position: 'relative',
                transformStyle: 'preserve-3d',
                ...tiltStyle,
              }}
            >
              {/* Top Card Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div className="badge badge-primary">
                  <GraduationCap size={13} />
                  <span>B.TECH IT 2026 GRADUATE</span>
                </div>
                <span className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)', fontWeight: 800 }}>
                  CGPA: 8.6 / 10.00
                </span>
              </div>

              {/* Large, Clear, Professional Photo Frame */}
              <div
                style={{
                  width: '100%',
                  height: '290px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '2px solid rgba(0, 240, 255, 0.35)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 240, 255, 0.2)',
                  marginBottom: '1.25rem',
                  background: '#0d111a',
                }}
              >
                <img
                  src={portfolioData.profile.avatarUrl}
                  alt={portfolioData.profile.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block',
                  }}
                />
              </div>

              {/* Profile Details */}
              <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.2rem' }}>
                  {portfolioData.profile.shortName}
                </h2>
                <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                  LakiReddy Bali Reddy College of Engineering
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
                  Khammam &amp; Hyderabad, Telangana • Full-Stack Web &amp; ML Developer
                </p>
              </div>

              {/* Verification Checklist */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '0.9rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginBottom: '1.2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                  <span>200+ Coding Problems Solved (LeetCode &amp; GFG)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                  <span>2nd Place in Machine Learning Bootcamp</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                  <span>Full-Stack (INSTEDA) &amp; Data Analytics (JS Solutions)</span>
                </div>
              </div>

              {/* Card Footer Quick Link */}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.65rem', fontSize: '0.88rem' }}
              >
                <span>Contact / Hire Me</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Metrics KPI Counter Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginTop: '4rem',
          }}
        >
          {portfolioData.profile.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
              }}
              onMouseEnter={() => sounds.playHover()}
            >
              <span
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  fontFamily: 'Space Grotesk, sans-serif',
                  lineHeight: 1,
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {metric.value}
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {metric.label}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                {metric.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 990px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};
