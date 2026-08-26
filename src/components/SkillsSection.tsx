import React, { useState } from 'react';
import { 
  Layers, 
  Layout, 
  Server, 
  Brain, 
  Cloud, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Brain': return <Brain size={18} />;
      case 'Cloud': return <Cloud size={18} />;
      default: return <Layers size={18} />;
    }
  };

  const activeCategory = portfolioData.skills[activeCategoryIndex];

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Mastery</span>
          </div>
          <h2 className="section-title">Skills & Tech Stack Matrix</h2>
          <p className="section-subtitle">
            Comprehensive breakdown of my proficiency in modern full-stack frameworks, AI workflows, cloud infrastructure, and low-latency systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {portfolioData.skills.map((category, idx) => {
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={category.category}
                onClick={() => {
                  sounds.playClick(700);
                  setActiveCategoryIndex(idx);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  background: isSelected ? 'var(--accent-gradient-subtle)' : 'var(--card-bg)',
                  borderColor: isSelected ? 'var(--accent-primary)' : 'var(--card-border)',
                  boxShadow: isSelected ? 'var(--glass-glow)' : 'none',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: isSelected ? 'var(--accent-gradient)' : 'var(--bg-elevated)',
                    color: isSelected ? '#fff' : 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                    {category.category}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {category.skills.length} core technologies
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Skills Proficiency Display */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <div style={{ color: 'var(--accent-primary)' }}>
                {getIcon(activeCategory.icon)}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                {activeCategory.category}
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {activeCategory.description}
            </p>
          </div>

          {/* Skill Bars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {activeCategory.skills.map((skill) => (
              <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    {skill.tag && (
                      <span className="badge badge-primary font-mono" style={{ fontSize: '0.7rem' }}>
                        {skill.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--accent-gradient)',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                      transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Highlight Pills */}
          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
              <span>Engineered with strict TypeScript typing, automated CI testing, and microservice decoupling.</span>
            </div>

            <div className="badge badge-emerald">
              <CheckCircle2 size={13} />
              <span>Production Proven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
