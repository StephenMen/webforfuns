import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Your uploaded images
const IMG_1 = '/images/DSC00488.JPG';
const IMG_2 = '/images/DSC00722.JPG';
const IMG_3 = '/images/DSC00914.JPG';
const IMG_4 = '/images/DSC01007.JPG';
const IMG_5 = '/images/DSC05464.JPG';
const IMG_6 = '/images/DSC07500.JPG';

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">BLOOD_BORDER</div>
      <div className="nav-links">
        <a href="#scene-1">Archive</a>
        <a href="#scene-2">Film</a>
        <a href="#scene-3">Evidence</a>
        <a href="#scene-4">Press</a>
      </div>
    </nav>
  );
}

// ============================================
// HERO
// ============================================
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power4.out'
    })
    .from('.hero-sub', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    }, '-=1')
    .from('.hero-year', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.scroll-indicator', {
      opacity: 0,
      duration: 1
    }, '-=0.5');
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <img src={IMG_1} alt="" className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title">
          CAMBODIA'S<br />SECOND KILLING FIELD
        </h1>
        <p className="hero-sub">An Immersive Historical Testament</p>
        <div className="hero-year">1975 — 1979</div>
      </div>
      <div className="scroll-indicator">Scroll to Excavate ↓</div>
    </section>
  );
}

// ============================================
// SCENE 1: THE VOID (Black) - Pinned
// ============================================
function Scene1() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: 1,
        }
      });

      // Background watermark drifts
      tl.fromTo('.wm-1', 
        { x: -200, opacity: 0 },
        { x: 100, opacity: 1, duration: 1, ease: 'none' },
        0
      );

      // Photo 1 - flies in from top-right, rotates
      tl.fromTo('.obj-1-1',
        { x: 400, y: -300, rotation: 45, opacity: 0, scale: 0.5 },
        { x: 0, y: 0, rotation: -8, opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' },
        0.2
      );

      // Document - slides in from left
      tl.fromTo('.obj-1-2',
        { x: -500, rotation: -30, opacity: 0 },
        { x: 0, rotation: 5, opacity: 1, duration: 1.5, ease: 'power3.out' },
        0.5
      );

      // Metal artifact - drops in
      tl.fromTo('.obj-1-3',
        { y: -400, rotation: 180, opacity: 0 },
        { y: 0, rotation: 0, opacity: 1, duration: 1, ease: 'bounce.out' },
        0.8
      );

      // Text - fades in between objects
      tl.fromTo('.text-1',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        1
      );

      // Exit - everything flies away
      tl.to('.obj-1-1', {
        x: -600, y: 200, rotation: -90, opacity: 0, duration: 1
      }, 2);
      
      tl.to('.obj-1-2', {
        x: 500, rotation: 45, opacity: 0, duration: 1
      }, 2.2);
      
      tl.to('.obj-1-3', {
        y: 500, opacity: 0, duration: 1
      }, 2.1);
      
      tl.to('.text-1', {
        opacity: 0, y: -50, duration: 0.8
      }, 2.3);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-black" id="scene-1" ref={sceneRef}>
      <div className="scene-content">
        {/* Background layer */}
        <div className="layer layer-bg">
          <div className="watermark wm-1" style={{ top: '20%', left: '10%' }}>FORGETTING</div>
        </div>

        {/* Mid layer - objects */}
        <div className="layer layer-mid">
          <div className="obj photo obj-1-1" style={{ width: '280px', top: '15%', right: '15%' }}>
            <img src={IMG_2} alt="Archive" />
            <div className="photo-cap">Border Region, 1979<br />Recovered from abandoned archive</div>
          </div>

          <div className="obj doc obj-1-2" style={{ width: '220px', top: '50%', left: '10%' }}>
            <div className="doc-header">Personal Diary</div>
            <strong>Oct 14, 1975</strong><br /><br />
            They took the rice. Again.<br />
            The children cry silently now.<br />
            We hide what little we have<br />
            beneath the floorboards.<br /><br />
            <em style={{ opacity: 0.6 }}>— Anonymous, Battambang</em>
            <div className="doc-stamp">EVIDENCE</div>
          </div>

          <div className="obj metal obj-1-3" style={{ width: '80px', height: '80px', borderRadius: '50%', bottom: '25%', right: '30%' }}></div>
        </div>

        {/* Text layer */}
        <div className="layer layer-text">
          <div className="scene-text text-1" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div className="scene-date">1975 — 1976</div>
            <h2 className="scene-title">The Void</h2>
            <div className="scene-body">
              <p>When the Khmer Rouge emptied the cities, they erased memory itself. Families separated. Names forbidden. History rewritten in real-time.</p>
            </div>
            <blockquote className="scene-quote">
              "To preserve you is no benefit, to destroy you is no loss."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SCENE 2: THE BLOOD (Red) - Pinned
// ============================================
function Scene2() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: 1,
        }
      });

      // Watermark
      tl.fromTo('.wm-2',
        { x: 300, opacity: 0 },
        { x: -100, opacity: 1, duration: 1 },
        0
      );

      // Portrait - zooms in dramatically
      tl.fromTo('.obj-2-1',
        { scale: 3, opacity: 0, rotation: 15 },
        { scale: 1, opacity: 1, rotation: -5, duration: 1.5, ease: 'power4.out' },
        0.2
      );

      // Mine artifact - spins in
      tl.fromTo('.obj-2-2',
        { rotation: -360, scale: 0, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.7)' },
        0.5
      );

      // Document - slides from right
      tl.fromTo('.obj-2-3',
        { x: 600, rotation: 20, opacity: 0 },
        { x: 0, rotation: -8, opacity: 1, duration: 1.5, ease: 'power3.out' },
        0.7
      );

      // Text
      tl.fromTo('.text-2',
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
        1.2
      );

      // Exit
      tl.to('.obj-2-1', { scale: 0, rotation: 90, opacity: 0, duration: 1 }, 2.2);
      tl.to('.obj-2-2', { scale: 3, opacity: 0, duration: 1 }, 2.3);
      tl.to('.obj-2-3', { x: -600, opacity: 0, duration: 1 }, 2.4);
      tl.to('.text-2', { opacity: 0, x: 100, duration: 0.8 }, 2.5);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-red" id="scene-2" ref={sceneRef}>
      <div className="scene-content">
        <div className="layer layer-bg">
          <div className="watermark wm-2" style={{ top: '30%', right: '5%' }}>CRIME</div>
        </div>

        <div className="layer layer-mid">
          <div className="obj photo obj-2-1" style={{ width: '240px', top: '20%', left: '15%' }}>
            <img src={IMG_3} alt="Prisoner" />
            <div className="photo-cap">Subject ID: 442-B<br />S-21 Prison · Tuol Sleng</div>
          </div>

          <div className="obj metal obj-2-2" style={{ width: '120px', height: '120px', borderRadius: '50%', bottom: '30%', left: '20%', border: '3px solid rgba(255,255,255,0.2)' }}>
            <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}>
              <circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="2"/>
              <line x1="50" y1="15" x2="50" y2="85" stroke="#fff" strokeWidth="1"/>
              <line x1="15" y1="50" x2="85" y2="50" stroke="#fff" strokeWidth="1"/>
            </svg>
          </div>

          <div className="obj doc obj-2-3" style={{ width: '200px', top: '45%', right: '10%' }}>
            <div className="doc-header">S-21 · Interrogation</div>
            <strong>Confession Extract</strong><br /><br />
            I was recruited by the CIA in 1972.<br />
            My mission: sabotage the revolution.<br /><br />
            <span style={{ opacity: 0.5, fontSize: '0.65rem' }}>[Extracted under torture]</span>
            <div className="doc-stamp">CLASSIFIED</div>
          </div>
        </div>

        <div className="layer layer-text">
          <div className="scene-text text-2" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div className="scene-date">1976 — 1978</div>
            <h2 className="scene-title">The Blood</h2>
            <div className="scene-body">
              <p>S-21 was a high school converted into a torture prison. Of 20,000 held there, fewer than a dozen survived.</p>
            </div>
            <blockquote className="scene-quote">
              "The evidence does not speak. It bleeds."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SCENE 3: THE JUNGLE (Green) - Pinned
// ============================================
function Scene3() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: 1,
        }
      });

      // Watermark
      tl.fromTo('.wm-3',
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0
      );

      // Jungle photo - drifts in slowly
      tl.fromTo('.obj-3-1',
        { y: 400, rotation: -10, opacity: 0 },
        { y: 0, rotation: 3, opacity: 1, duration: 2, ease: 'power2.out' },
        0.2
      );

      // Map document - floats in
      tl.fromTo('.obj-3-2',
        { x: -400, y: 200, rotation: 15, opacity: 0 },
        { x: 0, y: 0, rotation: -5, opacity: 1, duration: 1.8, ease: 'power2.out' },
        0.5
      );

      // Bullet casing - drops
      tl.fromTo('.obj-3-3',
        { y: -500, rotation: 90, opacity: 0 },
        { y: 0, rotation: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
        0.8
      );

      // Field report
      tl.fromTo('.obj-3-4',
        { x: 500, rotation: -20, opacity: 0 },
        { x: 0, rotation: 8, opacity: 1, duration: 1.5, ease: 'power3.out' },
        1
      );

      // Text
      tl.fromTo('.text-3',
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        1.3
      );

      // Exit - everything drifts away
      tl.to('.obj-3-1', { y: -400, opacity: 0, duration: 1.5 }, 2.2);
      tl.to('.obj-3-2', { x: -500, opacity: 0, duration: 1.5 }, 2.3);
      tl.to('.obj-3-3', { y: 500, opacity: 0, duration: 1 }, 2.4);
      tl.to('.obj-3-4', { x: 600, opacity: 0, duration: 1.5 }, 2.5);
      tl.to('.text-3', { opacity: 0, duration: 1 }, 2.6);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-green" id="scene-3" ref={sceneRef}>
      <div className="scene-content">
        <div className="layer layer-bg">
          <div className="watermark wm-3" style={{ bottom: '20%', left: '5%' }}>OVERGROWN</div>
        </div>

        <div className="layer layer-mid">
          <div className="obj photo obj-3-1" style={{ width: '300px', top: '10%', right: '12%' }}>
            <img src={IMG_4} alt="Jungle" />
            <div className="photo-cap">Border Region · Sector 4<br />Aerial reconnaissance, 1978</div>
          </div>

          <div className="obj doc obj-3-2" style={{ width: '200px', top: '55%', left: '8%', background: '#e8e4d9' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', letterSpacing: '2px', fontSize: '0.6rem', textTransform: 'uppercase' }}>Sector 4 · Restricted</div>
            <div style={{ marginBottom: '6px' }}>COORDINATES:</div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>11°55'N 104°91'E</div>
            <div style={{ marginTop: '12px', fontSize: '0.6rem', opacity: 0.5 }}>STATUS: [REDACTED]</div>
          </div>

          <div className="obj metal obj-3-3" style={{ 
            width: '40px', height: '90px', bottom: '25%', right: '25%',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%)'
          }}></div>

          <div className="obj doc obj-3-4" style={{ width: '160px', bottom: '30%', right: '35%', padding: '16px', fontSize: '0.65rem' }}>
            <div className="doc-header" style={{ fontSize: '0.55rem' }}>Field Report</div>
            Mass graves identified.<br />
            Est. 300+ bodies.<br />
            <span style={{ opacity: 0.5 }}>Children: ~40%</span>
          </div>
        </div>

        <div className="layer layer-text">
          <div className="scene-text text-3" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div className="scene-date">1978 — 1979</div>
            <h2 className="scene-title">The Jungle</h2>
            <div className="scene-body">
              <p>The killing fields were scattered across the countryside, hidden by dense canopy. Today, trees grow from mass graves.</p>
            </div>
            <blockquote className="scene-quote">
              "The jungle remembers what the world chose to forget."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SCENE 4: THE EVIDENCE (White) - Pinned
// ============================================
function Scene4() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: 1,
        }
      });

      // Watermark
      tl.fromTo('.wm-4',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' },
        0
      );

      // Photo 1 - slides in
      tl.fromTo('.obj-4-1',
        { x: -500, rotation: -15, opacity: 0 },
        { x: 0, rotation: 4, opacity: 1, duration: 1.5, ease: 'power3.out' },
        0.3
      );

      // Document - drops in
      tl.fromTo('.obj-4-2',
        { y: -400, rotation: 20, opacity: 0 },
        { y: 0, rotation: -6, opacity: 1, duration: 1.3, ease: 'power4.out' },
        0.6
      );

      // Photo 2 - flies in from right
      tl.fromTo('.obj-4-3',
        { x: 600, scale: 0.5, opacity: 0 },
        { x: 0, scale: 1, rotation: -3, opacity: 1, duration: 1.5, ease: 'power3.out' },
        0.9
      );

      // Text
      tl.fromTo('.text-4',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
        1.2
      );

      // Exit
      tl.to('.obj-4-1', { x: 600, opacity: 0, duration: 1.5 }, 2.3);
      tl.to('.obj-4-2', { y: 500, opacity: 0, duration: 1.3 }, 2.4);
      tl.to('.obj-4-3', { x: -600, opacity: 0, duration: 1.5 }, 2.5);
      tl.to('.text-4', { opacity: 0, scale: 1.1, duration: 1 }, 2.6);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-white" id="scene-4" ref={sceneRef}>
      <div className="scene-content">
        <div className="layer layer-bg">
          <div className="watermark wm-4" style={{ top: '25%', left: '10%' }}>TRUTH</div>
        </div>

        <div className="layer layer-mid">
          <div className="obj photo obj-4-1" style={{ width: '260px', top: '15%', right: '15%' }}>
            <img src={IMG_5} alt="Evidence" />
            <div className="photo-cap">Killing Field Evidence<br />Recovered 2023</div>
          </div>

          <div className="obj doc obj-4-2" style={{ width: '220px', top: '50%', left: '10%' }}>
            <div className="doc-header">ECCC · Case File 002</div>
            <strong>Declassified · 2012</strong><br /><br />
            The tribunal found the senior leaders of Democratic Kampuchea guilty of crimes against humanity.<br /><br />
            <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>Estimated deaths: 1.7 million</span>
            <div className="doc-stamp">VERIFIED</div>
          </div>

          <div className="obj photo obj-4-3" style={{ width: '180px', bottom: '20%', right: '25%' }}>
            <img src={IMG_6} alt="Archive" />
            <div className="photo-cap">Official record<br />National Archives</div>
          </div>
        </div>

        <div className="layer layer-text">
          <div className="scene-text text-4" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div className="scene-date" style={{ color: '#666' }}>2006 — Present</div>
            <h2 className="scene-title" style={{ color: '#1a1a1a' }}>The Evidence</h2>
            <div className="scene-body" style={{ color: '#333' }}>
              <p>Decades later, the evidence remains. Mass graves excavated. Documents declassified. Survivors testified.</p>
            </div>
            <blockquote className="scene-quote" style={{ color: '#444', borderColor: '#7a0c0c' }}>
              "What happened here was not an accident of history. It was policy."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// EVIDENCE TABLE
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
    <section className="evidence-scene" ref={sectionRef}>
      <h2 className="evidence-title">Phnum Khmoch</h2>
      <p className="evidence-sub">The table does not lie. The objects remember.</p>
      <div className="evidence-table">
        <div className="table-surface"></div>
        <div className="evidence-artifact ea-photo">
          <img src={IMG_2} alt="Border record" />
          <span className="artifact-label">Border record · 1947</span>
        </div>
        <div className="evidence-artifact ea-doc">
          <div className="ea-doc-inner"></div>
          <span className="artifact-label">Declassified</span>
        </div>
        <div className="evidence-artifact ea-film">
          <img src={IMG_3} alt="Recovered footage" />
          <span className="artifact-label">Recovered footage</span>
        </div>
        <div className="evidence-artifact ea-object">
          <img src={IMG_5} alt="Personal effects" />
          <span className="artifact-label">Personal effects</span>
        </div>
        <div className="blood-stain"></div>
      </div>
      <blockquote className="table-quote">"The evidence does not speak. It bleeds."</blockquote>
    </section>
  );
}

// ============================================
// FESTIVALS
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
    <section className="festivals-section">
      <div className="festivals-header">Official Selections & Awards</div>
      <div className="laurels-grid">
        <div className="laurel-item">
          <LaurelSVG variant="cannes" />
          <div className="laurel-text">Cannes Film Festival</div>
          <div className="laurel-subtext">Un Certain Regard · 2025</div>
        </div>
        <div className="laurel-item">
          <LaurelSVG variant="berlinale" />
          <div className="laurel-text">Berlinale</div>
          <div className="laurel-subtext">Best Documentary · 2025</div>
        </div>
        <div className="laurel-item">
          <LaurelSVG variant="sundance" />
          <div className="laurel-text">Sundance</div>
          <div className="laurel-subtext">Jury Prize Winner · 2025</div>
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
      © 2025 BLOOD BORDER PROJECT. ALL RIGHTS RESERVED.<br />
      SOURCES: NATIONAL ARCHIVES OF CAMBODIA / ECCC RECORDS / DC-CAM
    </footer>
  );
}

// ============================================
// MAIN APP
// ============================================
export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Scene1 />
      <Scene2 />
      <Scene3 />
      <Scene4 />
      <EvidenceTable />
      <Festivals />
      <Footer />
    </>
  );
}
