import React, { useState } from 'react';
import { Sliders, X, Palette, Volume2, VolumeX, MousePointer, Sparkles, RefreshCw } from 'lucide-react';
import { sounds } from '../utils/audio';

interface CustomizerDrawerProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
  customCursor: boolean;
  setCustomCursor: (val: boolean) => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  currentTheme,
  setTheme,
  audioEnabled,
  setAudioEnabled,
  customCursor,
  setCustomCursor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'cyber-dark', label: 'Cyber Dark', desc: 'Cosmic deep slate & cyan', icon: '🌌' },
    { id: 'tokyo-neon', label: 'Tokyo Neon', desc: 'Cyberpunk magenta & cyan', icon: '⚡' },
    { id: 'obsidian-gold', label: 'Obsidian Gold', desc: 'Luxury dark obsidian & amber', icon: '👑' },
    { id: 'aura-light', label: 'Aura Light', desc: 'Sleek modern crisp light mode', icon: '☀️' },
  ];

  return (
    <>
      {/* Floating Settings Button */}
      <button
        onClick={() => {
          sounds.playClick(600);
          setIsOpen(!isOpen);
        }}
        className="btn btn-primary"
        title="Open Visual Customizer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 90,
          width: '48px',
          height: '48px',
          padding: 0,
          borderRadius: '50%',
          boxShadow: '0 8px 30px rgba(0, 240, 255, 0.4)',
        }}
      >
        {isOpen ? <X size={20} /> : <Sliders size={20} />}
      </button>

      {/* Drawer Overlay Panel */}
      {isOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '24px',
            width: '320px',
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '1.75rem',
            borderRadius: 'var(--radius-lg)',
            zIndex: 95,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), var(--glass-glow)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Palette size={18} style={{ color: 'var(--accent-primary)' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Visual Studio Controls</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-icon btn-ghost"
              style={{ width: '28px', height: '28px' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Theme Switcher */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>
              Active Color Matrix
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {themes.map((t) => {
                const isSelected = currentTheme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      sounds.playClick(750);
                      setTheme(t.id);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.6rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'var(--accent-gradient-subtle)' : 'var(--bg-tertiary)',
                      border: isSelected ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                      color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{t.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.88rem', fontWeight: 700 }}>{t.label}</p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '0.5rem', borderTop: '1px solid var(--glass-border)' }}>
            {/* Audio Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                {audioEnabled ? <Volume2 size={16} style={{ color: 'var(--accent-primary)' }} /> : <VolumeX size={16} style={{ color: 'var(--text-muted)' }} />}
                <span>Futuristic Audio FX</span>
              </div>
              <input
                type="checkbox"
                checked={audioEnabled}
                onChange={(e) => {
                  setAudioEnabled(e.target.checked);
                  sounds.setEnabled(e.target.checked);
                  if (e.target.checked) sounds.playClick(900);
                }}
                style={{ accentColor: 'var(--accent-primary)', width: '16px', height: '16px', cursor: 'pointer' }}
              />
            </div>

            {/* Custom Cursor Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                <MousePointer size={16} style={{ color: 'var(--accent-secondary)' }} />
                <span>Glowing Particle Cursor</span>
              </div>
              <input
                type="checkbox"
                checked={customCursor}
                onChange={(e) => setCustomCursor(e.target.checked)}
                style={{ accentColor: 'var(--accent-primary)', width: '16px', height: '16px', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
