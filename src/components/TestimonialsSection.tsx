import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    sounds.playClick(600);
    setCurrentIndex((prev) => (prev + 1) % portfolioData.testimonials.length);
  };

  const prevTestimonial = () => {
    sounds.playClick(600);
    setCurrentIndex((prev) => (prev - 1 + portfolioData.testimonials.length) % portfolioData.testimonials.length);
  };

  const t = portfolioData.testimonials[currentIndex];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Client Endorsements</span>
          </div>
          <h2 className="section-title">What Engineering Leaders Say</h2>
          <p className="section-subtitle">
            Feedback from CTOs, Engineering VPs, and product leaders I've partnered with to build mission-critical systems.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '3rem',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2.5rem',
                color: 'var(--accent-primary)',
                opacity: 0.25,
              }}
            >
              <Quote size={64} />
            </div>

            {/* Rating Stars */}
            <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.5rem' }}>
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Highlight Callout */}
            <p
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                marginBottom: '1rem',
              }}
            >
              &quot;{t.highlight}&quot;
            </p>

            {/* Content Text */}
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.8,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}
            >
              &quot;{t.content}&quot;
            </p>

            {/* Author Profile Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--glass-border)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-primary)',
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>{t.name}</h3>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {t.role} • <span style={{ color: 'var(--text-secondary)' }}>{t.company}</span>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button
                  onClick={prevTestimonial}
                  onMouseEnter={() => sounds.playHover()}
                  className="btn btn-icon btn-secondary"
                  aria-label="Previous Testimonial"
                  style={{ width: '40px', height: '40px' }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  onMouseEnter={() => sounds.playHover()}
                  className="btn btn-icon btn-secondary"
                  aria-label="Next Testimonial"
                  style={{ width: '40px', height: '40px' }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
