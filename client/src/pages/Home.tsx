// Design philosophy: Signal / Shield — official cinematic cyber-safety experience with tactile lock-to-shield interaction, layered depth, and clear operational content.
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Check, Instagram, Mail, Menu, Phone, Shield, ShieldCheck, Sparkles, X, Zap } from "lucide-react";

const identityImage = "/manus-storage/cyber-syria-identity_4dcfe87c.png";
const eagleImage = "/manus-storage/cyber-syria-eagle-clean_c7ffd756.png";
const benefits = ["Threat awareness", "Account protection", "Digital resilience"];
const translations = {
  en: { experience: "Experience", protection: "Protection", briefings: "Briefings", contact: "Contact", talk: "Talk to us", kicker: "YOUR DIGITAL WORLD, PROTECTED", heroTitle: "Move with", heroAccent: "confidence.", heroIntro: "A new standard for digital safety. Clear signals, practical protection, and a stronger tomorrow.", enter: "Enter the experience", identity: "SYRIAN VISUAL IDENTITY", active: "OFFICIAL SIGNAL / ACTIVE", identityOnline: "VISUAL IDENTITY ONLINE", scroll: "SCROLL TO EXPLORE", statement: "Security should feel", statementAccent: "powerful, not complicated.", protectionKicker: "DESIGNED FOR REAL LIFE", protectionTitle: "One clear", protectionAccent: "layer at a time.", protectionBody: "We translate the complexity of cybersecurity into actions you can understand, remember, and use. Because feeling safe online starts with seeing the signal clearly.", briefKicker: "SIGNALS FOR EVERYDAY LIFE", briefTitle: "Know the move before the threat.", noteKicker: "PROTECTION / FIELD NOTE", noteTitle: "Make the invisible impossible to ignore.", noteBody: "Your strongest defense is a small habit repeated consistently. Start with the signal in front of you.", read: "Read on Instagram", contactKicker: "03 / DIRECT LINE", contactTitle: "Let’s make", contactAccent: "the signal stronger.", contactBody: "For collaborations, awareness campaigns, or digital safety conversations, connect directly with Cyber Syria." },
  ar: { experience: "التجربة", protection: "الحماية", briefings: "الإحاطات", contact: "تواصل معنا", talk: "تحدث معنا", kicker: "عالمك الرقمي، محمي", heroTitle: "تحرّك بثقة", heroAccent: "أكبر.", heroIntro: "معيار جديد للأمان الرقمي. إشارات واضحة، حماية عملية، وغدٌ أقوى.", enter: "ابدأ التجربة", identity: "الهوية البصرية السورية", active: "الإشارة الرسمية / مفعّلة", identityOnline: "الهوية البصرية متصلة", scroll: "مرّر للاستكشاف", statement: "يجب أن يكون الأمان", statementAccent: "قويًا، لا معقدًا.", protectionKicker: "مصمّم للحياة الواقعية", protectionTitle: "طبقة واضحة", protectionAccent: "في كل مرة.", protectionBody: "نحوّل تعقيد الأمن السيبراني إلى خطوات تفهمها وتتذكرها وتستخدمها. فالشعور بالأمان يبدأ برؤية الإشارة بوضوح.", briefKicker: "إشارات للحياة اليومية", briefTitle: "اعرف الخطوة قبل الخطر.", noteKicker: "الحماية / إحاطة ميدانية", noteTitle: "اجعل غير المرئي مستحيل التجاهل.", noteBody: "أقوى دفاع هو عادة صغيرة تكررها باستمرار. ابدأ بالإشارة التي أمامك.", read: "اقرأ على إنستغرام", contactKicker: "03 / خط مباشر", contactTitle: "لنجعل", contactAccent: "الإشارة أقوى.", contactBody: "للتعاونات والحملات التوعوية أو نقاشات الأمان الرقمي، تواصل مباشرة مع Cyber Syria." }
} as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">(() => (localStorage.getItem("cyber-syria-lang") as "en" | "ar") || "en");
  const copy = translations[lang];
  const isArabic = lang === "ar";
  const changeLanguage = () => { const next = isArabic ? "en" : "ar"; setLang(next); localStorage.setItem("cyber-syria-lang", next); };
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
    <main className="official-site" dir={isArabic ? "rtl" : "ltr"} lang={lang}>
      <div className="site-grain" />
      <header className="official-nav">
        <a href="#top" className="official-brand"><span className="brand-image"><img src={identityImage} alt="Cyber Syria identity" /></span><span><b>CYBER SYRIA</b><small>DIGITAL DEFENSE UNIT</small></span></a>
        <nav className={menuOpen ? "official-links open" : "official-links"}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>{copy.experience}</a><a href="#protection" onClick={() => setMenuOpen(false)}>{copy.protection}</a><a href="#briefings" onClick={() => setMenuOpen(false)}>{copy.briefings}</a><a href="#contact" onClick={() => setMenuOpen(false)}>{copy.contact}</a>
        </nav>
        <div className="nav-actions"><button className="language-toggle" onClick={changeLanguage} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>{isArabic ? "EN" : "ع"}</button><a href="#contact" className="nav-pill">{copy.talk} <ArrowRight size={15} /></a></div>
        <button className="nav-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Open navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="cinematic-hero">
        <div className="hero-grid-lines" />
        <div className="hero-wordmark"><span>SYRIA</span><i>/</i><span>CYBER</span></div>
        <div className="hero-statement"><p className="kicker"><span className="live-dot" /> {copy.kicker}</p><h1>{copy.heroTitle}<br /><em>{copy.heroAccent}</em></h1><p className="hero-intro">{copy.heroIntro}</p><a href="#experience" className="hero-button">{copy.enter} <ArrowDown size={17} /></a></div>
        <div className="hero-visual" id="experience">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-orbit orbit-three" />
          <div className="identity-hero-mark"><img src={eagleImage} alt="Syrian visual identity eagle" /><span>{copy.identity}<br /><b>{copy.active}</b></span></div>
          <div className="identity-seal-status"><span>SYRIA / 2026</span><b>{copy.identityOnline}</b></div>
          <div className="visual-label label-top"><small>IDENTITY NODE</small><strong>001 / ONLINE</strong></div><div className="visual-label label-bottom"><small>PROTOCOL</small><strong>VISUAL IDENTITY ACTIVE</strong></div>
        </div>
        <div className="scroll-mark"><ArrowDown size={15} /> {copy.scroll}</div>
      </section>

      <section className="statement-band"><p className="kicker">A SIGNAL WORTH FOLLOWING</p><h2>{copy.statement}<br /><span>{copy.statementAccent}</span></h2><div className="band-line" /></section>

      <section id="protection" className="protection-section"><div className="section-marker">01 / PROTECTION SYSTEM</div><div className="protection-copy"><p className="kicker">{copy.protectionKicker}</p><h2>{copy.protectionTitle}<br /><span>{copy.protectionAccent}</span></h2><p className="body-copy">{copy.protectionBody}</p><div className="benefit-list">{benefits.map((benefit, index) => <div className="benefit" key={benefit}><span>0{index + 1}</span><b>{isArabic ? ["الوعي بالتهديدات", "حماية الحسابات", "المرونة الرقمية"][index] : benefit}</b><Check size={16} /></div>)}</div></div><div className="protection-card"><div className="card-glow" /><div className="card-top"><span>CYBER SYRIA / CORE</span><span>ACTIVE</span></div><div className="mini-shield"><ShieldCheck size={55} /></div><div className="card-readout"><span>{isArabic ? "مستوى الأمان" : "SECURITY LEVEL"}</span><strong>{isArabic ? "أقصى درجات الوعي" : "MAXIMUM AWARENESS"}</strong><i><b /></i></div><div className="card-footer">33.5138° N / 36.2765° E <Sparkles size={14} /></div></div></section>

      <section id="briefings" className="briefing-section"><div className="section-marker">02 / THE BRIEFING ROOM</div><div className="briefing-head"><p className="kicker">{copy.briefKicker}</p><h2>{copy.briefTitle}</h2></div><div className="briefing-tabs">{(isArabic ? ["الحماية", "الوعي", "المرونة"] : ["Protection", "Awareness", "Resilience"]).map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab || (isArabic && ((activeTab === "Protection" && tab === "الحماية") || (activeTab === "Awareness" && tab === "الوعي") || (activeTab === "Resilience" && tab === "المرونة"))) ? "active" : ""}>{tab}</button>)}</div><div className="briefing-panel"><div className="panel-number">01</div><div><p className="kicker">{isArabic ? "الحماية / إحاطة ميدانية" : `${activeTab.toUpperCase()} / FIELD NOTE`}</p><h3>{copy.noteTitle}</h3><p className="body-copy">{copy.noteBody}</p><a href="https://www.instagram.com/syria_cyber/" target="_blank" rel="noreferrer">{copy.read} <Instagram size={15} /></a></div><div className="panel-ring"><Zap size={34} /><span>{isArabic ? "إشارة<br />مباشرة" : "LIVE<br />SIGNAL"}</span></div></div></section>

      <section id="contact" className="contact-section"><div className="contact-visual"><img src={identityImage} alt="Cyber Syria official identity" /><div className="contact-orbit" /></div><div className="contact-copy"><p className="kicker">{copy.contactKicker}</p><h2>{copy.contactTitle}<br /><span>{copy.contactAccent}</span></h2><p className="body-copy">{copy.contactBody}</p><div className="contact-links"><a href="tel:+971544472016"><span><Phone size={18} /></span><b>+971 54 447 2016</b><ArrowRight size={16} /></a><a href="mailto:yamanjswma526@gmail.com"><span><Mail size={18} /></span><b>yamanjswma526@gmail.com</b><ArrowRight size={16} /></a><a href="https://www.instagram.com/syria_cyber/" target="_blank" rel="noreferrer"><span><Instagram size={18} /></span><b>@syria_cyber</b><ArrowRight size={16} /></a></div></div></section>

      <footer className="official-footer"><a href="#top" className="official-brand"><span className="brand-image"><img src={identityImage} alt="" /></span><span><b>CYBER SYRIA</b><small>DIGITAL DEFENSE UNIT</small></span></a><span>© 2026 CYBER SYRIA / {isArabic ? "الأمان الرقمي أولًا" : "DIGITAL SAFETY MATTERS"}</span><a href="#top">{isArabic ? "العودة للأعلى ↑" : "BACK TO TOP ↑"}</a></footer>
    </main>
  );
}
