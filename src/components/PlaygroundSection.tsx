import React, { useState, useEffect, useRef } from 'react';
import { 
  FlaskConical, 
  Sliders, 
  Music, 
  Sparkles, 
  Copy, 
  Check, 
  Zap, 
  Play,
  RotateCcw
} from 'lucide-react';
import { sounds } from '../utils/audio';

export const PlaygroundSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'glass' | 'audio' | 'neural'>('glass');

  // Glassmorphism state
  const [blur, setBlur] = useState(16);
  const [opacity, setOpacity] = useState(0.65);
  const [borderAlpha, setBorderAlpha] = useState(0.12);
  const [copied, setCopied] = useState(false);

  // Audio Synth state
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Neural stream state
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState('');
  const [speed, setSpeed] = useState(30);

  const samplePrompt = "Explain why event-driven architectures excel in high-throughput streaming systems.";
  const sampleResponse = "Event-driven architectures decouple producers from consumers via immutable event logs. By utilizing asynchronous queues like Apache Kafka or Redis Pub/Sub, services achieve linear horizontal scalability, buffer spikes in load, and isolate failures without blocking client threads.";

  // Handle Audio Visualizer Canvas Loop
  useEffect(() => {
    if (activeTab !== 'audio') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const draw = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#00f0ff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00f0ff';

      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      for (let x = 0; x < width; x++) {
        const freqMultiplier = activeNote ? 0.08 : 0.02;
        const amp = activeNote ? 35 : 12;
        const y = midY + Math.sin(x * freqMultiplier + time) * amp * Math.cos(time * 0.5);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [activeTab, activeNote]);

  // Handle Neural Stream Simulation
  useEffect(() => {
    if (!streaming) return;
    let idx = 0;
    setStreamText('');

    const interval = setInterval(() => {
      if (idx < sampleResponse.length) {
        setStreamText((prev) => prev + sampleResponse[idx]);
        sounds.playTerminalKey();
        idx++;
      } else {
        setStreaming(false);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [streaming, speed]);

  const copyGlassCSS = () => {
    sounds.playClick(900);
    const cssCode = `background: rgba(13, 17, 26, ${opacity});\nbackdrop-filter: blur(${blur}px);\n-webkit-backdrop-filter: blur(${blur}px);\nborder: 1px solid rgba(255, 255, 255, ${borderAlpha});\nborder-radius: 16px;\nbox-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.45);`;
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const playSynthNote = (note: string, freq: number) => {
    setActiveNote(note);
    sounds.playClick(freq);
    setTimeout(() => setActiveNote(null), 300);
  };

  const notes = [
    { note: 'C4', freq: 261.63 },
    { note: 'D4', freq: 293.66 },
    { note: 'E4', freq: 329.63 },
    { note: 'F4', freq: 349.23 },
    { note: 'G4', freq: 392.00 },
    { note: 'A4', freq: 440.00 },
    { note: 'B4', freq: 493.88 },
    { note: 'C5', freq: 523.25 },
  ];

  return (
    <section id="playground" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FlaskConical size={14} />
            <span>Interactive Lab</span>
          </div>
          <h2 className="section-title">Creative Tech & Live Workbench</h2>
          <p className="section-subtitle">
            Interactive experiments demonstrating real-time shaders, Web Audio API synthesis, and simulated streaming tokens.
          </p>
        </div>

        {/* Lab Switcher Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              sounds.playClick(600);
              setActiveTab('glass');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="btn"
            style={{
              padding: '0.55rem 1.3rem',
              fontSize: '0.9rem',
              background: activeTab === 'glass' ? 'var(--accent-gradient)' : 'var(--glass-bg)',
              color: activeTab === 'glass' ? '#fff' : 'var(--text-secondary)',
              border: activeTab === 'glass' ? '1px solid transparent' : '1px solid var(--glass-border)',
            }}
          >
            <Sliders size={16} />
            <span>Glassmorphism Engine</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(600);
              setActiveTab('audio');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="btn"
            style={{
              padding: '0.55rem 1.3rem',
              fontSize: '0.9rem',
              background: activeTab === 'audio' ? 'var(--accent-gradient)' : 'var(--glass-bg)',
              color: activeTab === 'audio' ? '#fff' : 'var(--text-secondary)',
              border: activeTab === 'audio' ? '1px solid transparent' : '1px solid var(--glass-border)',
            }}
          >
            <Music size={16} />
            <span>Audio Synth & Oscilloscope</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(600);
              setActiveTab('neural');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="btn"
            style={{
              padding: '0.55rem 1.3rem',
              fontSize: '0.9rem',
              background: activeTab === 'neural' ? 'var(--accent-gradient)' : 'var(--glass-bg)',
              color: activeTab === 'neural' ? '#fff' : 'var(--text-secondary)',
              border: activeTab === 'neural' ? '1px solid transparent' : '1px solid var(--glass-border)',
            }}
          >
            <Zap size={16} />
            <span>Neural Stream Simulator</span>
          </button>
        </div>

        {/* Experiment Container Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          {/* 1. GLASSMORPHISM EXPERIMENT */}
          {activeTab === 'glass' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} className="grid-2">
              {/* Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Real-Time Glass Shader</h3>
                
                {/* Blur Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Backdrop Blur</span>
                    <span className="font-mono" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{blur}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={blur}
                    onChange={(e) => setBlur(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                  />
                </div>

                {/* Opacity Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Surface Opacity</span>
                    <span className="font-mono" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{Math.round(opacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.95"
                    step="0.05"
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                  />
                </div>

                {/* Border Alpha Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Border Refraction</span>
                    <span className="font-mono" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{Math.round(borderAlpha * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.02"
                    max="0.5"
                    step="0.02"
                    value={borderAlpha}
                    onChange={(e) => setBorderAlpha(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                  />
                </div>

                <button onClick={copyGlassCSS} className="btn btn-secondary" style={{ marginTop: '0.5rem' }}>
                  {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  <span>{copied ? 'CSS Copied to Clipboard!' : 'Copy CSS Generator Code'}</span>
                </button>
              </div>

              {/* Live Preview Box */}
              <div
                style={{
                  height: '280px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 50%, #ec4899 100%)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '85%',
                    padding: '1.5rem',
                    background: `rgba(13, 17, 26, ${opacity})`,
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    border: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>Glass Effect Preview</p>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.3rem' }}>
                    Hardware-accelerated CSS filter rendering
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. AUDIO SYNTH EXPERIMENT */}
          {activeTab === 'audio' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Web Audio API Polyphonic Synthesizer
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Click the musical tone pads to synthesize real-time sine waveforms with dynamic DSP attenuation.
                </p>
              </div>

              {/* Oscilloscope Canvas */}
              <div
                style={{
                  height: '140px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--glass-border)',
                }}
              >
                <canvas ref={canvasRef} width={800} height={140} style={{ width: '100%', height: '100%' }} />
              </div>

              {/* Keyboard Note Pads */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {notes.map((n) => {
                  const isPlaying = activeNote === n.note;
                  return (
                    <button
                      key={n.note}
                      onClick={() => playSynthNote(n.note, n.freq)}
                      className="glass-card"
                      style={{
                        padding: '1.25rem 0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        cursor: 'pointer',
                        background: isPlaying ? 'var(--accent-gradient)' : 'var(--bg-secondary)',
                        color: isPlaying ? '#fff' : 'var(--text-primary)',
                        transform: isPlaying ? 'scale(0.95)' : 'scale(1)',
                        boxShadow: isPlaying ? '0 0 20px rgba(0, 240, 255, 0.6)' : 'none',
                      }}
                    >
                      <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{n.note}</span>
                      <span className="font-mono" style={{ fontSize: '0.7rem', color: isPlaying ? '#fff' : 'var(--text-muted)' }}>
                        {Math.round(n.freq)} Hz
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. NEURAL STREAM EXPERIMENT */}
          {activeTab === 'neural' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>LLM Stream Token Visualizer</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    Simulating chunked Server-Sent Events (SSE) token buffering and render latency.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <button
                    onClick={() => {
                      sounds.playClick(800);
                      setStreaming(true);
                    }}
                    disabled={streaming}
                    className="btn btn-primary"
                    style={{ padding: '0.55rem 1.2rem', fontSize: '0.88rem' }}
                  >
                    <Play size={14} />
                    <span>{streaming ? 'Streaming Tokens...' : 'Trigger Stream'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setStreamText('');
                      setStreaming(false);
                    }}
                    className="btn btn-secondary"
                    style={{ padding: '0.55rem 0.9rem' }}
                    title="Reset"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              {/* Speed Slider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '360px' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  Emission Delay: {speed}ms
                </span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  style={{ flex: 1, accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Stream Render Box */}
              <div
                className="font-mono"
                style={{
                  background: 'var(--terminal-bg)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--glass-border)',
                  minHeight: '160px',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                }}
              >
                <div style={{ color: 'var(--accent-primary)', marginBottom: '0.6rem', fontSize: '0.82rem' }}>
                  PROMPT: &quot;{samplePrompt}&quot;
                </div>
                <div style={{ color: 'var(--text-primary)' }}>
                  {streamText || (
                    <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      Click 'Trigger Stream' above to simulate token emissions...
                    </span>
                  )}
                  {streaming && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '14px',
                        backgroundColor: 'var(--accent-primary)',
                        marginLeft: '4px',
                        animation: 'pulseGlow 0.5s infinite',
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
