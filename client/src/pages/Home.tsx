// Design philosophy: Signal / Shield — official cinematic cyber-safety experience with tactile lock-to-shield interaction, layered depth, and clear operational content.
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Check, Instagram, Mail, Menu, Phone, Shield, ShieldCheck, Sparkles, X, Zap } from "lucide-react";

const identityImage = "/manus-storage/cyber-syria-identity_4dcfe87c.png";
const benefits = ["Threat awareness", "Account protection", "Digital resilience"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unlock, setUnlock] = useState(0);
  const [activeTab, setActiveTab] = useState("Protection");
  const dragStart = useRef<number | null>(null);
  const lockPercent = Math.min(100, Math.max(0, unlock));

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    setUnlock(Math.min(100, Math.max(0, ((event.clientX - dragStart.current) / 220) * 100 + unlock)));
    dragStart.current = event.clientX;
  };
  const onPointerUp = () => { dragStart.current = null; };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "ArrowRight") setUnlock((value) => Math.min(100, value + 12)); if (event.key === "ArrowLeft") setUnlock((value) => Math.max(0, value - 12)); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="official-site">
      <div className="site-grain" />
      <header className="official-nav">
        <a href="#top" className="official-brand"><span className="brand-image"><img src={identityImage} alt="Cyber Syria identity" /></span><span><b>CYBER SYRIA</b><small>DIGITAL DEFENSE UNIT</small></span></a>
        <nav className={menuOpen ? "official-links open" : "official-links"}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#protection" onClick={() => setMenuOpen(false)}>Protection</a><a href="#briefings" onClick={() => setMenuOpen(false)}>Briefings</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a href="#contact" className="nav-pill">Talk to us <ArrowRight size={15} /></a>
        <button className="nav-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Open navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="cinematic-hero">
        <div className="hero-grid-lines" />
        <div className="hero-wordmark"><span>SYRIA</span><i>/</i><span>CYBER</span></div>
        <div className="hero-statement"><p className="kicker"><span className="live-dot" /> YOUR DIGITAL WORLD, PROTECTED</p><h1>Move with<br /><em>confidence.</em></h1><p className="hero-intro">A new standard for digital safety. Clear signals, practical protection, and a stronger tomorrow.</p><a href="#experience" className="hero-button">Enter the experience <ArrowDown size={17} /></a></div>
        <div className="hero-visual" id="experience" style={{ "--shield-opacity": lockPercent > 55 ? .85 : 0, "--shield-scale": lockPercent > 55 ? .25 : 0 } as React.CSSProperties}>
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-orbit orbit-three" />
          <div className={lockPercent > 55 ? "lock-object unlocked" : "lock-object"} style={{ "--shift": `${lockPercent * 1.25}px` } as React.CSSProperties} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} role="slider" aria-label="Drag the lock to unlock your shield" aria-valuenow={lockPercent} tabIndex={0}>
            <div className="lock-body"><div className="lock-hole" /><div className="lock-keyhole" /><div className="lock-shine" /></div><div className="lock-shackle" />
          </div>
          <div className="shield-object"><Shield size={124} strokeWidth={.65} /><div className="shield-inner">PROTECTED<br /><span>CYBER SYRIA</span></div></div>
          <div className="drag-track"><span>DRAG TO UNLOCK</span><i style={{ width: `${Math.max(18, lockPercent)}%` }} /><b style={{ left: `${Math.min(92, Math.max(5, lockPercent))}%` }}><ArrowRight size={17} /></b></div>
          <div className="visual-label label-top"><small>SECURE NODE</small><strong>001 / ONLINE</strong></div><div className="visual-label label-bottom"><small>PROTOCOL</small><strong>{lockPercent > 55 ? "SHIELD ACTIVE" : "LOCKED / READY"}</strong></div>
        </div>
        <div className="scroll-mark"><ArrowDown size={15} /> SCROLL TO EXPLORE</div>
      </section>

      <section className="statement-band"><p className="kicker">A SIGNAL WORTH FOLLOWING</p><h2>Security should feel<br /><span>powerful, not complicated.</span></h2><div className="band-line" /></section>

      <section id="protection" className="protection-section"><div className="section-marker">01 / PROTECTION SYSTEM</div><div className="protection-copy"><p className="kicker">DESIGNED FOR REAL LIFE</p><h2>One clear<br /><span>layer at a time.</span></h2><p className="body-copy">We translate the complexity of cybersecurity into actions you can understand, remember, and use. Because feeling safe online starts with seeing the signal clearly.</p><div className="benefit-list">{benefits.map((benefit, index) => <div className="benefit" key={benefit}><span>0{index + 1}</span><b>{benefit}</b><Check size={16} /></div>)}</div></div><div className="protection-card"><div className="card-glow" /><div className="card-top"><span>CYBER SYRIA / CORE</span><span>ACTIVE</span></div><div className="mini-shield"><ShieldCheck size={55} /></div><div className="card-readout"><span>SECURITY LEVEL</span><strong>MAXIMUM AWARENESS</strong><i><b /></i></div><div className="card-footer">33.5138° N / 36.2765° E <Sparkles size={14} /></div></div></section>

      <section id="briefings" className="briefing-section"><div className="section-marker">02 / THE BRIEFING ROOM</div><div className="briefing-head"><p className="kicker">SIGNALS FOR EVERYDAY LIFE</p><h2>Know the move<br /><span>before the threat.</span></h2></div><div className="briefing-tabs">{["Protection", "Awareness", "Resilience"].map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? "active" : ""}>{tab}</button>)}</div><div className="briefing-panel"><div className="panel-number">01</div><div><p className="kicker">{activeTab.toUpperCase()} / FIELD NOTE</p><h3>Make the invisible<br />impossible to ignore.</h3><p className="body-copy">Your strongest defense is a small habit repeated consistently. Start with the signal in front of you.</p><a href="https://www.instagram.com/syria_cyber/" target="_blank" rel="noreferrer">Read on Instagram <Instagram size={15} /></a></div><div className="panel-ring"><Zap size={34} /><span>LIVE<br />SIGNAL</span></div></div></section>

      <section id="contact" className="contact-section"><div className="contact-visual"><img src={identityImage} alt="Cyber Syria official identity" /><div className="contact-orbit" /></div><div className="contact-copy"><p className="kicker">03 / DIRECT LINE</p><h2>Let’s make<br /><span>the signal stronger.</span></h2><p className="body-copy">For collaborations, awareness campaigns, or digital safety conversations, connect directly with Cyber Syria.</p><div className="contact-links"><a href="tel:+971544472016"><span><Phone size={18} /></span><b>+971 54 447 2016</b><ArrowRight size={16} /></a><a href="mailto:yamanjswma526@gmail.com"><span><Mail size={18} /></span><b>yamanjswma526@gmail.com</b><ArrowRight size={16} /></a><a href="https://www.instagram.com/syria_cyber/" target="_blank" rel="noreferrer"><span><Instagram size={18} /></span><b>@syria_cyber</b><ArrowRight size={16} /></a></div></div></section>

      <footer className="official-footer"><a href="#top" className="official-brand"><span className="brand-image"><img src={identityImage} alt="" /></span><span><b>CYBER SYRIA</b><small>DIGITAL DEFENSE UNIT</small></span></a><span>© 2026 CYBER SYRIA / DIGITAL SAFETY MATTERS</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
