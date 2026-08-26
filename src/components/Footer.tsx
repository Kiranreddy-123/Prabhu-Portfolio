import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playClick(900);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '4.5rem 0 3rem',
        borderTop: '1px solid var(--glass-border)',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {/* Main Footer Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {/* Brand Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    color: '#fff',
                  }}
                >
                  {portfolioData.profile.initials}
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                  {portfolioData.profile.name}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '380px' }}>
                Architecting high-scale distributed backends, streaming AI models, and 60 FPS interactive visual interfaces.
              </p>
            </div>

            {/* Back to Top */}
            <div>
              <button
                onClick={scrollToTop}
                onMouseEnter={() => sounds.playHover()}
                className="btn btn-secondary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
              >
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Tech Stack Info */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '2rem',
              borderTop: '1px solid var(--glass-border)',
              gap: '1rem',
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
            }}
          >
            <div>
              © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved. Crafted for high impact.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>Designed with modern CSS, React &amp; WebGL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
