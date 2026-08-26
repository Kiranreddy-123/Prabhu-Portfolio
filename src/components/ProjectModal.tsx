import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Zap, Activity } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
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
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          padding: '0',
          position: 'relative',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--glass-border-hover)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Header with Gradient */}
        <div
          style={{
            height: '180px',
            background: project.imageGradient,
            position: 'relative',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
          }}
        >
          <button
            onClick={() => {
              sounds.playClick(400);
              onClose();
            }}
            className="btn btn-icon btn-secondary"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <X size={18} />
          </button>

          <div className="badge badge-emerald" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>
            <Activity size={12} />
            <span>{project.metrics}</span>
          </div>

          <h2 style={{ fontSize: '1.9rem', color: '#fff', fontWeight: 800 }}>
            {project.title}
          </h2>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Tagline & Overview */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', marginBottom: '0.4rem' }}>
              {project.tagline}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              {project.description}
            </p>
          </div>

          {/* Key Metrics Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              background: 'var(--bg-tertiary)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--glass-border)',
            }}
          >
            {project.stats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {stat.label}
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Architectural Design & Key Decisions */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <Layers size={18} style={{ color: 'var(--accent-secondary)' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>System Architecture &amp; Engineering Decisions</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.architecture.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenge & Resolution */}
          <div
            style={{
              background: 'var(--accent-gradient-subtle)',
              border: '1px solid var(--glass-border-hover)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Zap size={16} style={{ color: 'var(--accent-primary)' }} />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                Major Technical Hurdle Overcome:
              </h4>
            </div>
            <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {project.challenges}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Cpu size={16} style={{ color: 'var(--accent-tertiary)' }} />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Technologies &amp; Tools Used:</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-primary font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--glass-border)',
              marginTop: '0.5rem',
            }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ flex: 1 }}
              onMouseEnter={() => sounds.playHover()}
            >
              <span>Launch Live Interactive System</span>
              <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              onMouseEnter={() => sounds.playHover()}
            >
              <GithubIcon size={16} />
              <span>Source Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
