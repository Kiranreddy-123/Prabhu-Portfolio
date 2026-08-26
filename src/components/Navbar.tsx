import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Palette, 
  Menu, 
  X, 
  Sparkles, 
  Terminal as TerminalIcon,
  Briefcase,
  Layers,
  Mail,
  ArrowRight,
  Download
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme,
  setTheme,
  audioEnabled,
  setAudioEnabled,
  onOpenResumeModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const themes = [
    { id: 'cyber-dark', label: 'Cyber Dark', icon: '🌌' },
    { id: 'tokyo-neon', label: 'Tokyo Neon', icon: '⚡' },
    { id: 'obsidian-gold', label: 'Obsidian Gold', icon: '👑' },
    { id: 'aura-light', label: 'Aura Light', icon: '☀️' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'terminal', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    sounds.setEnabled(nextState);
    if (nextState) sounds.playClick(900);
  };

  const navLinks = [
    { id: 'hero', label: 'Overview', icon: Sparkles },
    { id: 'terminal', label: 'CLI', icon: TerminalIcon },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Layers },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    sounds.playClick(700);
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '0.65rem 1.25rem' : '0.8rem 1.5rem',
            background: scrolled ? 'var(--glass-bg)' : 'rgba(10, 14, 23, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--radius-full)',
            boxShadow: scrolled ? 'var(--glass-shadow)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo / Brand with User Photo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={() => sounds.playHover()}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(0, 240, 255, 0.4)',
              }}
            >
              <img
                src={portfolioData.profile.avatarUrl || '/prabhu_photo.jpg'}
                alt={portfolioData.profile.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                {portfolioData.profile.shortName}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-emerald)',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  2026 IT GRADUATE
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '0.3rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--glass-border)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => sounds.playHover()}
                  style={{
                    background: isActive ? 'var(--accent-gradient-subtle)' : 'transparent',
                    border: isActive ? '1px solid var(--glass-border-hover)' : '1px solid transparent',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 600 : 500,
                    padding: '0.45rem 0.9rem',
                    fontSize: '0.85rem',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <link.icon size={14} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="btn btn-icon btn-secondary"
              title={audioEnabled ? 'Sound Effects Active' : 'Sound Effects Muted'}
              aria-label="Toggle Sound Effects"
              style={{
                width: '36px',
                height: '36px',
                color: audioEnabled ? 'var(--accent-primary)' : 'var(--text-muted)',
              }}
            >
              {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Theme Dropdown Toggle */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => {
                  sounds.playClick(600);
                  setThemeDropdownOpen(!themeDropdownOpen);
                }}
                className="btn btn-icon btn-secondary"
                title="Change Color Theme"
                aria-label="Change Theme"
                style={{ width: '36px', height: '36px' }}
              >
                <Palette size={16} />
              </button>

              {themeDropdownOpen && (
                <div
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    right: 0,
                    width: '180px',
                    padding: '0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    zIndex: 110,
                  }}
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        sounds.playClick(750);
                        setTheme(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.5rem 0.75rem',
                        background: currentTheme === t.id ? 'var(--accent-gradient-subtle)' : 'transparent',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: currentTheme === t.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                        fontWeight: currentTheme === t.id ? 600 : 400,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span>{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resume Button */}
            <a
              href={portfolioData.profile.resumePdfUrl}
              download="Prabhu_Kiran_Reddy_Lakkireddy_Resume.pdf"
              onClick={() => sounds.playSuccess()}
              className="btn btn-primary"
              style={{
                padding: '0.45rem 1.1rem',
                fontSize: '0.85rem',
                display: 'none',
                textDecoration: 'none',
              }}
              id="desktop-resume-btn"
              title="Download PDF Resume"
            >
              <Download size={14} />
              <span>Resume (PDF)</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                sounds.playClick(500);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="btn btn-icon btn-secondary mobile-menu-btn"
              aria-label="Toggle Menu"
              style={{ width: '38px', height: '38px' }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'fixed',
            top: '76px',
            left: '1rem',
            right: '1rem',
            zIndex: 99,
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: isActive ? 'var(--accent-gradient-subtle)' : 'transparent',
                  border: isActive ? '1px solid var(--glass-border-hover)' : 'none',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </button>
            );
          })}
          <a
            href={portfolioData.profile.resumePdfUrl}
            download="Prabhu_Kiran_Reddy_Lakkireddy_Resume.pdf"
            onClick={() => {
              sounds.playSuccess();
              setMobileMenuOpen(false);
            }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', textDecoration: 'none' }}
          >
            <Download size={16} />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          #desktop-resume-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
