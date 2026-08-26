import React, { useState } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Maximize2, 
  Activity, 
  ArrowRight 
} from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'ai', label: 'AI & Multimodal' },
    { id: 'cloud', label: 'Cloud & Systems' },
    { id: 'web3', label: 'Web3 & Fintech' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">High-Impact Architectures &amp; Systems</h2>
          <p className="section-subtitle">
            A curated selection of large-scale distributed systems, multi-agent AI runtimes, and creative high-performance web applications.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick(650);
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="btn"
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.88rem',
                  background: isActive ? 'var(--accent-gradient)' : 'var(--glass-bg)',
                  border: isActive ? '1px solid transparent' : '1px solid var(--glass-border)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 4px 20px rgba(0, 240, 255, 0.25)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => {
                sounds.playModalOpen();
                onSelectProject(project);
              }}
              onMouseEnter={() => sounds.playHover()}
            >
              {/* Project Card Header Visual Banner */}
              <div
                style={{
                  height: '160px',
                  background: project.imageGradient,
                  position: 'relative',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-emerald" style={{ backdropFilter: 'blur(8px)' }}>
                    <Activity size={12} />
                    {project.metrics}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <Maximize2 size={14} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#fff', fontWeight: 800, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                  gap: '1.2rem',
                }}
              >
                <div>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    {project.tagline}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {project.description.slice(0, 120)}...
                  </p>
                </div>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="badge badge-primary font-mono" style={{ fontSize: '0.72rem' }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="badge font-mono" style={{ fontSize: '0.72rem' }}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Bottom Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--glass-border)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    Inspect Architecture <ArrowRight size={13} />
                  </span>

                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-icon btn-ghost"
                      style={{ width: '32px', height: '32px' }}
                      title="GitHub"
                      onMouseEnter={() => sounds.playHover()}
                    >
                      <GithubIcon size={15} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-icon btn-ghost"
                      style={{ width: '32px', height: '32px' }}
                      title="Live Demo"
                      onMouseEnter={() => sounds.playHover()}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
