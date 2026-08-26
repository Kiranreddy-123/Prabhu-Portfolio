import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface TerminalSectionProps {
  setTheme: (theme: string) => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({ setTheme }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div style={{ color: 'var(--text-secondary)' }}>
          <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
            ⚡ Stellar OS v4.2 [x86_64-quantum-arch]
          </p>
          <p>Type <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>'help'</span> to explore interactive CLI commands or click any quick shortcut below.</p>
        </div>
      ),
    },
  ]);
  const [matrixMode, setMatrixMode] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    sounds.playClick(600);
    const parts = trimmed.toLowerCase().split(' ');
    const cmd = parts[0];
    const arg = parts[1];

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>Available System Commands:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0.4rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>skills</span>
              <span>Inspect full-stack, AI, and distributed tech stack</span>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>projects</span>
              <span>List featured high-impact enterprise & AI projects</span>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>bio / about</span>
              <span>Read engineering philosophy & architectural focus</span>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>contact / hire</span>
              <span>Get direct email, calendar booking, & channels</span>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>theme [name]</span>
              <span>Switch visual theme: (dark, neon, gold, light)</span>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>matrix</span>
              <span>Toggle green cyberpunk matrix rain mode</span>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>clear</span>
              <span>Reset terminal buffer</span>
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>⚡ Core Engineering Competencies:</p>
            {portfolioData.skills.map((cat, idx) => (
              <div key={idx} style={{ marginBottom: '0.4rem' }}>
                <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.88rem' }}>[{cat.category}]</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem' }}>
                  {cat.skills.map((s) => `${s.name} (${s.level}%)`).join(' • ')}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>🚀 Featured Architectural Deliverables:</p>
            {portfolioData.projects.slice(0, 3).map((p) => (
              <div key={p.id} style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '0.75rem' }}>
                <p style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{p.title} <span style={{ color: 'var(--accent-emerald)', fontSize: '0.8rem' }}>[{p.metrics}]</span></p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{p.tagline}</p>
                <p style={{ color: 'var(--accent-secondary)', fontSize: '0.78rem' }}>Stack: {p.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'bio':
      case 'about':
        output = (
          <div>
            <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.4rem' }}>
              {portfolioData.profile.name} — {portfolioData.profile.role}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {portfolioData.profile.bio}
            </p>
            <p style={{ color: 'var(--accent-primary)', marginTop: '0.5rem', fontSize: '0.85rem' }}>
              📍 {portfolioData.profile.status.location}
            </p>
          </div>
        );
        break;

      case 'contact':
      case 'hire':
      case 'sudo':
        if (cmd === 'sudo' && parts[1] !== 'hire') {
          output = <p style={{ color: 'var(--accent-rose)' }}>Permission granted. Type 'sudo hire' for immediate priority scheduling.</p>;
          break;
        }
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
        });
        sounds.playSuccess();
        output = (
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.8rem', borderRadius: '8px', border: '1px solid #10b981' }}>
            <p style={{ color: '#10b981', fontWeight: 700 }}>🎉 Direct Priority Channel Initialized:</p>
            <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
              Email: <a href={`mailto:${portfolioData.socials.email}`} style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>{portfolioData.socials.email}</a>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Scheduling: <a href={portfolioData.socials.calendly} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-secondary)' }}>Book a 30-min strategy call</a>
            </p>
          </div>
        );
        break;

      case 'theme':
        if (!arg) {
          output = <p style={{ color: 'var(--text-muted)' }}>Usage: theme [dark | neon | gold | light]</p>;
        } else if (arg === 'dark') {
          setTheme('cyber-dark');
          output = <p style={{ color: 'var(--accent-primary)' }}>Theme switched to Cyber Dark</p>;
        } else if (arg === 'neon') {
          setTheme('tokyo-neon');
          output = <p style={{ color: 'var(--accent-primary)' }}>Theme switched to Tokyo Neon</p>;
        } else if (arg === 'gold') {
          setTheme('obsidian-gold');
          output = <p style={{ color: 'var(--accent-primary)' }}>Theme switched to Obsidian Gold</p>;
        } else if (arg === 'light') {
          setTheme('aura-light');
          output = <p style={{ color: 'var(--accent-primary)' }}>Theme switched to Aura Light</p>;
        } else {
          output = <p style={{ color: 'var(--accent-rose)' }}>Unknown theme: '{arg}'. Options: dark, neon, gold, light</p>;
        }
        break;

      case 'matrix':
        setMatrixMode(!matrixMode);
        output = <p style={{ color: '#00ff66' }}>Matrix rain mode {matrixMode ? 'DEACTIVATED' : 'ACTIVATED'} 🟩</p>;
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'whoami':
        output = <p style={{ color: 'var(--accent-primary)' }}>guest@alex-morgan-stellar-session (Level: Recruiter / Collaborator)</p>;
        break;

      case 'date':
        output = <p style={{ color: 'var(--text-secondary)' }}>{new Date().toString()}</p>;
        break;

      default:
        output = (
          <p style={{ color: 'var(--accent-rose)' }}>
            Command not recognized: '{trimmed}'. Type <span style={{ textDecoration: 'underline' }}>'help'</span> for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sounds.playTerminalKey();
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const suggestionChips = [
    'help',
    'skills',
    'projects',
    'bio',
    'sudo hire',
    'theme neon',
    'clear',
  ];

  return (
    <section id="terminal" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>Interactive CLI</span>
          </div>
          <h2 className="section-title">Developer Command Terminal</h2>
          <p className="section-subtitle">
            Explore the portfolio interactively with developer commands, inspect tech architecture, or execute custom scripts.
          </p>
        </div>

        {/* Suggestion Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          {suggestionChips.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              onMouseEnter={() => sounds.playHover()}
              className="badge badge-primary font-mono"
              style={{
                cursor: 'pointer',
                padding: '0.35rem 0.8rem',
                fontSize: '0.82rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Play size={10} />
              <span>{cmd}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            backgroundColor: 'var(--terminal-bg)',
            border: matrixMode ? '1px solid #00ff66' : '1px solid var(--glass-border-hover)',
            boxShadow: matrixMode ? '0 0 30px rgba(0, 255, 102, 0.25)' : 'var(--glass-shadow)',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Window Header Bar */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: 'var(--terminal-header)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--glass-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                alex@quantum-core: ~ (zsh)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="badge badge-primary font-mono" style={{ fontSize: '0.7rem' }}>
                ONLINE
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHistory([]);
                }}
                title="Clear Terminal"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={13} />
              </button>
            </div>
          </div>

          {/* Terminal Body Content */}
          <div
            className="font-mono"
            style={{
              padding: '1.5rem',
              minHeight: '260px',
              maxHeight: '440px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              fontSize: '0.9rem',
              color: matrixMode ? '#00ff66' : 'var(--text-primary)',
            }}
          >
            {history.map((item) => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
                  <span style={{ color: 'var(--accent-secondary)' }}>➜</span>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>alex-os</span>
                  <span style={{ color: 'var(--text-muted)' }}>git:(main)</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.command}</span>
                </div>
                <div style={{ paddingLeft: '1.2rem' }}>{item.output}</div>
              </div>
            ))}

            {/* Current Input Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-secondary)' }}>➜</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>alex-os</span>
              <span style={{ color: 'var(--text-muted)' }}>git:(main)</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command (e.g. 'skills', 'projects', 'help')..."
                className="font-mono"
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: matrixMode ? '#00ff66' : 'var(--text-primary)',
                  fontSize: '0.9rem',
                }}
              />
              <button
                onClick={() => handleCommand(input)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                }}
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
