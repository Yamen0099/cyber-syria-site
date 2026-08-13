// Design philosophy: Signal / Shield — neo-futurist information design, asymmetric command-surface layout, Signal Cyan accents, restrained motion.
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Instagram, Mail, Menu, ShieldCheck, Sparkles, X } from "lucide-react";

const signals = [
  { label: "ACCOUNT SECURITY", value: "94%", detail: "baseline protected", tone: "lime" },
  { label: "THREAT AWARENESS", value: "LIVE", detail: "signal feed active", tone: "cyan" },
  { label: "NEXT BRIEF", value: "01:42", detail: "minutes to clarity", tone: "red" },
];

const briefings = [
  { number: "01", title: "Spot the trap", text: "The safest click is the one you understand first.", tag: "PHISHING" },
  { number: "02", title: "Lock the door", text: "A strong password is a habit, not a one-time fix.", tag: "ACCESS" },
  { number: "03", title: "Keep your signal", text: "Privacy is the space between you and the noise.", tag: "PRIVACY" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSignal, setActiveSignal] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    const timer = window.setInterval(() => setActiveSignal((value) => (value + 1) % signals.length), 4200);
    return () => { window.removeEventListener("mousemove", onMove); window.clearInterval(timer); };
  }, []);

  return (
    <main className="site-shell" style={{ "--cursor-x": `${cursor.x}px`, "--cursor-y": `${cursor.y}px` } as React.CSSProperties}>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Cyber Syria home">
          <span className="brand-mark"><ShieldCheck size={22} strokeWidth={1.7} /></span>
          <span><b>CYBER</b><em>SYRIA</em></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#signal" onClick={() => setMenuOpen(false)}>Signal</a>
          <a href="#briefings" onClick={() => setMenuOpen(false)}>Briefings</a>
          <a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a>
          <a className="nav-cta" href="mailto:syriacyber.syria@gmail.com" onClick={() => setMenuOpen(false)}>Connect <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy reveal reveal-one">
          <p className="eyebrow"><span className="pulse-dot" /> SYRIA / DIGITAL DEFENSE UNIT 01</p>
          <h1>Stay one<br /><span>signal</span> ahead.</h1>
          <p className="hero-text">Practical cybersecurity awareness for the people, teams, and stories shaping Syria's digital tomorrow.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#briefings">Explore the signal <ArrowUpRight size={17} /></a>
            <a className="text-link" href="https://www.instagram.com/syria_cyber/" target="_blank" rel="noreferrer"><Instagram size={15} /> @syria_cyber</a>
          </div>
          <div className="micro-meta"><span>LAT 33.5138° N</span><span>LONG 36.2765° E</span><span>STATUS: WATCHFUL</span></div>
        </div>
        <div className="orbital-stage reveal reveal-two" id="signal">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
          <div className="orbit-node node-a" /><div className="orbit-node node-b" /><div className="orbit-node node-c" />
          <div className="shield-core"><div className="core-grid" /><ShieldCheck size={76} strokeWidth={1} /><span>SECURE<br />THE SIGNAL</span></div>
          <div className="telemetry telemetry-top"><span>NODE_001</span><b>ACTIVE</b></div>
          <div className="telemetry telemetry-bottom"><span>ENCRYPTION</span><b>AES / 256</b></div>
          <div className="scan-line" />
        </div>
      </section>

      <section className="signal-strip" aria-label="Live account signals">
        {signals.map((signal, index) => <button key={signal.label} className={activeSignal === index ? "signal-card active" : "signal-card"} onClick={() => setActiveSignal(index)}><span className={`signal-icon ${signal.tone}`} /> <span><small>{signal.label}</small><strong>{signal.value}</strong><em>{signal.detail}</em></span></button>)}
      </section>

      <section id="briefings" className="briefings-section">
        <div className="section-heading"><p className="eyebrow">FIELD NOTES / 03</p><h2>Small signals.<br /><i>Big difference.</i></h2><p className="section-lede">No jargon. No panic. Just the habits that make your digital life harder to break.</p></div>
        <div className="briefing-list">{briefings.map((briefing) => <article className="briefing-card" key={briefing.number}><div className="briefing-index">{briefing.number}</div><div className="briefing-main"><div className="briefing-tag">{briefing.tag}</div><h3>{briefing.title}</h3><p>{briefing.text}</p><a href="https://www.instagram.com/syria_cyber/" target="_blank" rel="noreferrer" aria-label={`Read ${briefing.title}`}>Read the briefing <ArrowUpRight size={16} /></a></div><div className="briefing-status"><span className="status-bar" /> SIGNAL / CLEAR</div></article>)}</div>
      </section>

      <section id="mission" className="mission-section"><div className="mission-line" /><div><p className="eyebrow">WHY CYBER SYRIA</p><h2>See the risk.<br /><span>Lock the door.</span></h2></div><div className="mission-copy"><p>Digital safety should feel clear, local, and possible. Cyber Syria turns complex threats into useful signals you can act on today.</p><a className="outline-btn" href="mailto:syriacyber.syria@gmail.com"><Mail size={16} /> Start a conversation</a></div></section>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark"><ShieldCheck size={18} /></span><span>CYBER SYRIA</span></div><span>© 2026 / DIGITAL SAFETY MATTERS</span><a href="https://www.instagram.com/syria_cyber/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></footer>
      <div className="scroll-cue"><ChevronDown size={16} /> SCROLL TO DECODE</div>
    </main>
  );
}
