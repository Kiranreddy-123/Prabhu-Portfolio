import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TerminalSection } from './components/TerminalSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';

export function App() {
  const [theme, setTheme] = useState<string>('cyber-dark');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [customCursor, setCustomCursor] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Custom Cursor Position State
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovering, setCursorHovering] = useState(false);

  // Apply Theme Attribute to HTML tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Cursor Tracker
  useEffect(() => {
    if (!customCursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest('button, a, input, textarea, select, .glass-card, [role="button"]');
      setCursorHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [customCursor]);

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-root" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Star Constellation Particle Canvas */}
      <ParticleBackground />

      {/* Custom Glowing Cursor */}
      {customCursor && (
        <>
          <div
            className={`custom-cursor ${cursorHovering ? 'hovering' : ''}`}
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          />
          <div
            className="custom-cursor-dot"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          />
        </>
      )}

      {/* Navigation Header */}
      <Navbar
        currentTheme={theme}
        setTheme={setTheme}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <HeroSection
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenTerminal={handleOpenTerminal}
        />

        <TerminalSection setTheme={setTheme} />

        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        <SkillsSection />

        <ExperienceSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating Visual Studio Controls Drawer */}
      <CustomizerDrawer
        currentTheme={theme}
        setTheme={setTheme}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
        customCursor={customCursor}
        setCustomCursor={setCustomCursor}
      />
    </div>
  );
}

export default App;
