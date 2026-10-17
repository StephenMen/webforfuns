import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Image URLs from generated assets
const IMG_RUINS = 'https://image.qwenlm.ai/generated-images/17f35ab2-4187-44e2-a43b-cd9d790b1ce4/_result.png';
const IMG_PORTRAIT = 'https://image.qwenlm.ai/generated-images/82ed32d8-b721-47d3-8664-aecc598e2c79/_result.png';
const IMG_GRAVE = 'https://image.qwenlm.ai/generated-images/bf56ff58-a140-4f03-bba3-aed151d3fc58/_result.png';
const IMG_DOCUMENT = 'https://image.qwenlm.ai/generated-images/4416db15-35ab-4486-af5e-2fe39dac4b9f/_result.png';
const IMG_JUNGLE = 'https://image.qwenlm.ai/generated-images/3bbaaaa5-412e-410f-bd80-83bc6ee6dee4/_result.png';

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">BLOOD_BORDER</div>
      <div className="nav-links">
        <a href="#chapter-1">Archive</a>
        <a href="#chapter-2">Film</a>
        <a href="#chapter-3">Evidence</a>
        <a href="#festivals">Press</a>
      </div>
    </nav>
  );
}

// ============================================
// PROGRESS INDICATOR
// ============================================
function ProgressNav() {
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.chapter, .hero-section, .evidence-scene');
    const dots = dotsRef.current?.querySelectorAll('.progress-dot');
    
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => updateDots(i),
        onEnterBack: () => updateDots(i),
      });
    });

    function updateDots(activeIndex: number) {
      dots?.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
      });
    }
  }, []);

  return (
    <div className="progress-nav" ref={dotsRef}>
      <div className="progress-dot active"></div>
      <div className="progress-dot"></div>
      <div className="progress-dot"></div>
      <div className="progress-dot"></div>
      <div className="progress-dot"></div>
      <div className="progress-dot"></div>
      <div className="progress-dot"></div>
    </div>
  );
}

// ============================================
// CHAPTER LABEL
// ============================================
function ChapterLabel() {
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chapters = document.querySelectorAll('.chapter');
    const labels = [
      { num: '01', text: 'The Void' },
      { num: '02', text: 'The Blood' },
      { num: '03', text: 'The Jungle' },
      { num: '04', text: 'The Evidence' },
    ];

    chapters.forEach((ch, i) => {
      ScrollTrigger.create({
        trigger: ch,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => updateLabel(i),
        onEnterBack: () => updateLabel(i),
      });
    });

    function updateLabel(idx: number) {
      if (!labelRef.current) return;
      const numEl = labelRef.current.querySelector('.chapter-num');
      const textEl = labelRef.current.querySelector('.chapter-text');
      if (numEl) numEl.textContent = labels[idx].num;
      if (textEl) textEl.textContent = labels[idx].text;
    }
  }, []);

  return (
    <div className="chapter-label" ref={labelRef}>
      <span className="chapter-num">01</span>
      <span className="chapter-text">The Void</span>
    </div>
  );
}

// ============================================
// HERO SECTION
// ============================================
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-text">BLOOD</div>
      <h1 className="hero-title anim-hero">
        CAMBODIA'S<br />SECOND KILLING FIELD
      </h1>
      <p className="hero-subtitle anim-hero-sub">
        An Immersive Historical Testament
      </p>
      <div className="hero-year anim-hero-year">1975 — 1979</div>
      <div className="scroll-hint">Scroll to Excavate ↓</div>
    </section>
  );
}

// ============================================
// CHAPTER 1: THE VOID (Black)
// ============================================
function Chapter1() {
  return (
    <section className="chapter ch-black" id="chapter-1">
      <div className="floating-objects">
        {/* Watermark */}
        <div className="watermark wm-parallax" style={{ top: '30%', left: '-5%' }}>FORGETTING</div>
        
        {/* Floating Photo */}
        <div className="float-obj obj-photo scroll-obj" style={{ width: '240px', top: '15%', right: '10%', transform: 'rotate(-5deg)' }}>
          <img src={IMG_RUINS} alt="Ruins of Phnom Penh" />
          <div className="photo-cap">Phnom Penh Outskirts, 1979<br />Recovered from abandoned archive</div>
        </div>

        {/* Floating Document */}
        <div className="float-obj obj-document scroll-obj" style={{ width: '200px', top: '55%', left: '8%', transform: 'rotate(3deg)' }}>
          <div className="doc-header">Personal Diary</div>
          <strong>Oct 14, 1975</strong><br /><br />
          They took the rice. Again.<br />
          The children cry silently now.<br />
          We hide what little we have<br />
          beneath the floorboards.<br /><br />
          <em style={{ opacity: 0.6 }}>— Anonymous, Battambang</em>
          <div className="doc-stamp">EVIDENCE</div>
        </div>

        {/* Small metal artifact */}
        <div className="float-obj obj-metal scroll-obj" style={{ width: '60px', height: '60px', borderRadius: '50%', bottom: '20%', right: '25%' }}></div>
      </div>

      <div className="chapter-inner">
        <div className="ch-date text-reveal">1975 — 1976</div>
        <h2 className="ch-title text-reveal">The Void</h2>
        <div className="ch-body text-reveal">
          <p>When the Khmer Rouge emptied the cities on April 17, 1975, they didn't just displace a population — they erased memory itself. Families were separated. Names were forbidden. History was rewritten in real-time.</p>
          <p>What remains are fragments: a diary page, a photograph recovered from rubble, the silence of those who survived.</p>
        </div>
        <blockquote className="ch-quote text-reveal">
          "To preserve you is no benefit, to destroy you is no loss."
        </blockquote>
      </div>
    </section>
  );
}

// ============================================
// CHAPTER 2: THE BLOOD (Red)
// ============================================
function Chapter2() {
  return (
    <section className="chapter ch-red" id="chapter-2">
      <div className="floating-objects">
        {/* Watermark */}
        <div className="watermark wm-parallax" style={{ top: '20%', right: '-10%' }}>CRIME</div>
        
        {/* Prisoner Portrait */}
        <div className="float-obj obj-photo scroll-obj" style={{ width: '200px', top: '12%', left: '12%', transform: 'rotate(4deg)' }}>
          <img src={IMG_PORTRAIT} alt="S-21 Prisoner" />
          <div className="photo-cap">Subject ID: 442-B<br />S-21 Prison · Tuol Sleng</div>
        </div>

        {/* Mine artifact */}
        <div className="float-obj obj-metal scroll-obj" style={{ width: '100px', height: '100px', borderRadius: '50%', bottom: '25%', left: '15%', border: '3px solid rgba(255,255,255,0.1)' }}>
          <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3 }}>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="2"/>
            <line x1="50" y1="15" x2="50" y2="85" stroke="#fff" strokeWidth="1" opacity="0.5"/>
            <line x1="15" y1="50" x2="85" y2="50" stroke="#fff" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>

        {/* Declassified document */}
        <div className="float-obj obj-document scroll-obj" style={{ width: '190px', top: '45%', right: '8%', transform: 'rotate(-6deg)' }}>
          <div className="doc-header">S-21 · Interrogation Record</div>
          <strong>Confession Extract</strong><br /><br />
          I was recruited by the CIA in 1972.<br />
          My mission: sabotage the revolution.<br /><br />
          <span style={{ opacity: 0.5, fontSize: '0.65rem' }}>[All confessions extracted under torture]</span>
          <div className="doc-stamp">CLASSIFIED</div>
        </div>
      </div>

      <div className="chapter-inner" style={{ maxWidth: '500px' }}>
        <div className="ch-date text-reveal">1976 — 1978</div>
        <h2 className="ch-title text-reveal">The Blood</h2>
        <div className="ch-body text-reveal">
          <p>S-21 — Tuol Sleng — was a high school converted into a torture prison. Of the estimated 20,000 people held there, fewer than a dozen survived.</p>
          <p>Each prisoner was photographed upon arrival. These images are now among the most haunting documents of the 20th century — faces frozen between life and death.</p>
        </div>
        <blockquote className="ch-quote text-reveal">
          "The evidence does not speak. It bleeds."
        </blockquote>
      </div>
    </section>
  );
}

// ============================================
// CHAPTER 3: THE JUNGLE (Green)
// ============================================
function Chapter3() {
  return (
    <section className="chapter ch-green" id="chapter-3">
      <div className="floating-objects">
        {/* Watermark */}
        <div className="watermark wm-parallax" style={{ bottom: '15%', left: '-5%' }}>OVERGROWN</div>
        
        {/* Jungle photo */}
        <div className="float-obj obj-photo scroll-obj" style={{ width: '280px', top: '10%', right: '15%', transform: 'rotate(-3deg)' }}>
          <img src={IMG_JUNGLE} alt="Cambodian Jungle" />
          <div className="photo-cap">Border Region · Sector 4<br />Aerial reconnaissance, 1978</div>
        </div>

        {/* Map coordinates */}
        <div className="float-obj obj-map scroll-obj" style={{ top: '55%', left: '10%', transform: 'rotate(5deg)' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px', letterSpacing: '2px', fontSize: '0.6rem', textTransform: 'uppercase' }}>Sector 4 · Restricted</div>
          <div style={{ marginBottom: '6px' }}>COORDINATES:</div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>11°55'N 104°91'E</div>
          <div style={{ marginTop: '12px', fontSize: '0.6rem', opacity: 0.5 }}>STATUS: [REDACTED]</div>
          <div style={{ marginTop: '8px', fontSize: '0.6rem', opacity: 0.5 }}>CLEARANCE: LEVEL 5</div>
        </div>

        {/* Bullet casing */}
        <div className="float-obj obj-metal scroll-obj" style={{ 
          width: '35px', height: '80px', bottom: '20%', right: '20%',
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%)',
          borderRadius: '2px'
        }}></div>

        {/* Small document fragment */}
        <div className="float-obj obj-document scroll-obj" style={{ width: '150px', bottom: '30%', right: '35%', transform: 'rotate(-8deg)', padding: '16px', fontSize: '0.65rem' }}>
          <div className="doc-header" style={{ fontSize: '0.55rem' }}>Field Report</div>
          Mass graves identified.<br />
          Est. 300+ bodies.<br />
          <span style={{ opacity: 0.5 }}>Children: ~40%</span>
        </div>
      </div>

      <div className="chapter-inner" style={{ maxWidth: '480px', marginLeft: '8%' }}>
        <div className="ch-date text-reveal">1978 — 1979</div>
        <h2 className="ch-title text-reveal">The Jungle</h2>
        <div className="ch-body text-reveal">
          <p>The killing fields were scattered across the countryside — often in clearings deep within the jungle, hidden from aerial surveillance by the dense canopy above.</p>
          <p>Today, the forests have reclaimed these sites. Trees grow from mass graves. The earth still yields bones during the rainy season.</p>
        </div>
        <blockquote className="ch-quote text-reveal">
          "The jungle remembers what the world chose to forget."
        </blockquote>
      </div>
    </section>
  );
}

// ============================================
// CHAPTER 4: THE EVIDENCE (White)
// ============================================
function Chapter4() {
  return (
    <section className="chapter ch-white" id="chapter-4">
      <div className="floating-objects">
        {/* Watermark */}
        <div className="watermark wm-parallax" style={{ top: '25%', left: '5%' }}>TRUTH</div>
        
        {/* Grave site photo */}
        <div className="float-obj obj-photo scroll-obj" style={{ width: '250px', top: '15%', right: '12%', transform: 'rotate(-2deg)' }}>
          <img src={IMG_GRAVE} alt="Killing Field Evidence" />
          <div className="photo-cap">Choeung Ek Killing Field<br />Evidence recovered 2023</div>
        </div>

        {/* Official record */}
        <div className="float-obj obj-document scroll-obj" style={{ width: '210px', top: '50%', left: '8%', transform: 'rotate(4deg)' }}>
          <div className="doc-header">ECCC · Case File 002</div>
          <strong>Declassified · 2012</strong><br /><br />
          The tribunal found the senior<br />
          leaders of Democratic Kampuchea<br />
          guilty of crimes against humanity.<br /><br />
          <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>Estimated deaths: 1.7 million<br />Period: 1975–1979</span>
          <div className="doc-stamp">VERIFIED</div>
        </div>

        {/* Document photo */}
        <div className="float-obj obj-photo scroll-obj" style={{ width: '160px', bottom: '15%', right: '30%', transform: 'rotate(6deg)' }}>
          <img src={IMG_DOCUMENT} alt="Archival Document" />
          <div className="photo-cap">Official record<br />National Archives</div>
        </div>
      </div>

      <div className="chapter-inner" style={{ maxWidth: '500px', marginRight: '5%', marginLeft: 'auto' }}>
        <div className="ch-date text-reveal" style={{ color: '#666' }}>2006 — Present</div>
        <h2 className="ch-title text-reveal" style={{ color: '#1a1a1a' }}>The Evidence</h2>
        <div className="ch-body text-reveal" style={{ color: '#333' }}>
          <p>Decades later, the evidence remains. Mass graves have been excavated. Documents have been declassified. Survivors have testified before the Extraordinary Chambers in the Courts of Cambodia (ECCC).</p>
          <p>But justice is incomplete. The truth, once buried, now demands to be heard.</p>
        </div>
        <blockquote className="ch-quote text-reveal" style={{ color: '#444', borderColor: '#7a0c0c' }}>
          "What happened here was not an accident of history. It was policy."
        </blockquote>
      </div>
    </section>
  );
}

// ============================================
// EVIDENCE TABLE SCENE
// ============================================
function EvidenceTable() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const artifacts = section.querySelectorAll('.evidence-artifact');
          artifacts.forEach((art, i) => {
            setTimeout(() => art.classList.add('visible'), i * 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="evidence-scene" id="evidence" ref={sectionRef}>
      <h2 className="evidence-title">Phnum Khmoch</h2>
      <p className="evidence-sub">The table does not lie. The objects remember.</p>
      <div className="evidence-table">
        <div className="table-surface"></div>
        <div className="evidence-artifact ea-photo">
          <img src={IMG_RUINS} alt="Border record" />
          <span className="artifact-label">Border record · 1947</span>
        </div>
        <div className="evidence-artifact ea-doc">
          <div className="ea-doc-inner"></div>
          <span className="artifact-label">Declassified</span>
        </div>
        <div className="evidence-artifact ea-film">
          <img src={IMG_PORTRAIT} alt="Recovered footage" />
          <span className="artifact-label">Recovered footage</span>
        </div>
        <div className="evidence-artifact ea-object">
          <img src={IMG_GRAVE} alt="Personal effects" />
          <span className="artifact-label">Personal effects</span>
        </div>
        <div className="blood-stain"></div>
      </div>
      <blockquote className="table-quote">"The evidence does not speak. It bleeds."</blockquote>
    </section>
  );
}

// ============================================
// FESTIVALS & PRESS
// ============================================
function LaurelSVG({ variant }: { variant: 'cannes' | 'berlinale' | 'sundance' }) {
  if (variant === 'cannes') {
    return (
      <svg className="laurel-svg" viewBox="0 0 100 100">
        <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 M50 15 C35 15 25 30 25 50 C25 70 35 85 50 85 C65 85 75 70 75 50 C75 30 65 15 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 40 Q40 30 50 40 Q60 30 70 40" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M30 60 Q40 70 50 60 Q60 70 70 60" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
      </svg>
    );
  }
  if (variant === 'berlinale') {
    return (
      <svg className="laurel-svg" viewBox="0 0 100 100">
        <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 M50 15 C35 15 25 30 25 50 C25 70 35 85 50 85 C65 85 75 70 75 50 C75 30 65 15 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M35 35 L65 35 M35 65 L65 65" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
  }
  return (
    <svg className="laurel-svg" viewBox="0 0 100 100">
      <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 M50 15 C35 15 25 30 25 50 C25 70 35 85 50 85 C65 85 75 70 75 50 C75 30 65 15 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M40 40 Q50 30 60 40 Q50 50 40 40" fill="currentColor" opacity="0.5"/>
      <path d="M40 60 Q50 70 60 60 Q50 50 40 60" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

function Festivals() {
  return (
    <section className="festivals-section" id="festivals">
      <div className="festivals-header">Official Selections & Awards</div>
      
      <div className="laurels-grid">
        <div className="laurel-item">
          <LaurelSVG variant="cannes" />
          <div className="laurel-text">Cannes Film Festival</div>
          <div className="laurel-subtext">Un Certain Regard · 2024</div>
        </div>
        <div className="laurel-item">
          <LaurelSVG variant="berlinale" />
          <div className="laurel-text">Berlinale</div>
          <div className="laurel-subtext">Best Documentary · 2024</div>
        </div>
        <div className="laurel-item">
          <LaurelSVG variant="sundance" />
          <div className="laurel-text">Sundance</div>
          <div className="laurel-subtext">Jury Prize Winner · 2024</div>
        </div>
      </div>

      <blockquote className="press-quote">
        "A masterwork of tension and visual poetry. Blood Border redefines the genre by turning history into a haunting, physical presence."
      </blockquote>
      <div className="press-source">— Variety Magazine</div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="site-footer">
      © 2026 BLOOD BORDER PROJECT. ALL RIGHTS RESERVED.<br />
      SOURCES: NATIONAL ARCHIVES OF CAMBODIA / ECCC RECORDS / DC-CAM
    </footer>
  );
}

// ============================================
// MAIN APP
// ============================================
export default function App() {
  useEffect(() => {
    // ---- HERO ANIMATIONS ----
    gsap.to('.anim-hero', { opacity: 1, y: 0, duration: 1.8, ease: 'power3.out', delay: 0.3 });
    gsap.to('.anim-hero-sub', { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.7 });
    gsap.to('.anim-hero-year', { opacity: 1, duration: 1.5, ease: 'power2.out', delay: 1.1 });

    // ---- BACKGROUND COLOR TRANSITIONS ----
    const colorMap: Record<string, string> = {
      'ch-black': '#050505',
      'ch-red': '#3a0505',
      'ch-green': '#162b20',
      'ch-white': '#e8e4d9',
      'evidence-scene': '#0a0101',
      'festivals-section': '#050505',
    };

    Object.entries(colorMap).forEach(([cls, color]) => {
      const el = document.querySelector(`.${cls}`);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => gsap.to('body', { backgroundColor: color, duration: 0.8, ease: 'power2.inOut' }),
        onEnterBack: () => gsap.to('body', { backgroundColor: color, duration: 0.8, ease: 'power2.inOut' }),
      });
    });

    // ---- 2D FLOATING OBJECTS - Scroll-driven parallax ----
    const scrollObjects = document.querySelectorAll('.scroll-obj');
    
    scrollObjects.forEach((obj, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.8;
      const rotateAmount = (Math.random() - 0.5) * 10;
      
      // Get parent chapter for trigger
      const parentChapter = obj.closest('.chapter');
      if (!parentChapter) return;

      // Main scroll animation: objects move vertically with parallax
      gsap.fromTo(obj,
        {
          y: 150 * direction,
          opacity: 0,
          scale: 0.85,
          rotation: rotateAmount * direction,
        },
        {
          y: -150 * direction,
          opacity: 1,
          scale: 1,
          rotation: -rotateAmount * direction * 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: parentChapter,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          }
        }
      );

      // Subtle idle floating animation
      gsap.to(obj, {
        y: `+=${8 + Math.random() * 6}`,
        x: `+=${3 + Math.random() * 4}`,
        rotation: `+=${1 + Math.random()}`,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      });
    });

    // ---- WATERMARK PARALLAX ----
    const watermarks = document.querySelectorAll('.wm-parallax');
    watermarks.forEach((wm) => {
      const parent = wm.closest('.chapter');
      if (!parent) return;
      
      gsap.fromTo(wm,
        { x: -100 },
        {
          x: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: parent,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          }
        }
      );
    });

    // ---- TEXT REVEAL ANIMATIONS ----
    const textReveals = document.querySelectorAll('.text-reveal');
    textReveals.forEach((el) => {
      const parent = el.closest('.chapter');
      if (!parent) return;

      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <Navigation />
      <ProgressNav />
      <ChapterLabel />
      <Hero />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <EvidenceTable />
      <Festivals />
      <Footer />
    </>
  );
}
