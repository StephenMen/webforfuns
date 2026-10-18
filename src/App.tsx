import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Images from your GitHub
const IMG_1 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC07512.JPG';
const IMG_2 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC00722.JPG';
const IMG_3 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/Master-for-Web-6.jpg';
const IMG_4 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/798985908_1088092280301823_3849388321751906669_n%20(1).jpg';
const IMG_5 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC05464.JPG';
const IMG_6 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC07500.JPG';
const LAUREL = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/Sundance_Laurel-removebg-preview.png';
const KRAMA_IMG = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/krama-bloody.png';

// Navigation
function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">BLOOD_BORDER</div>
      <div className="nav-links">
        <a href="#ghost-mountain">Ghost Mountain</a>
        <a href="#kuoch-mengly">Story</a>
        <a href="#making-of">Making Of</a>
        <a href="#festivals">Festivals</a>
        <a href="#credits">Credits</a>
      </div>
    </nav>
  );
}

// Hero
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.from('.hero-title', { opacity: 0, y: 100, duration: 1.5, ease: 'power4.out' })
      .from('.hero-sub', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' }, '-=1')
      .from('.hero-year', { opacity: 0, scale: 0.8, duration: 1, ease: 'power3.out' }, '-=0.5')
      .from('.scroll-indicator', { opacity: 0, duration: 1 }, '-=0.5');

    // Scroll-triggered bloody text reveal
    const ctx = gsap.context(() => {
      // Pin the hero section and animate the text color transition
      gsap.to('.hero-title-overlay', {
        clipPath: 'inset(0 0 100% 0)',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=600',
          scrub: 1,
          pin: true,
        }
      });

      // Fade out other elements as text turns bloody
      gsap.to('.hero-sub, .hero-year, .scroll-indicator', {
        opacity: 0,
        y: -30,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=400',
          scrub: 1,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <img src={IMG_1} alt="" className="hero-bg parallax-slow" />
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-base">BLOOD BORDER</span>
          <span className="hero-title-overlay">BLOOD BORDER</span>
        </h1>
        <p className="hero-sub">Cambodia's Second Killing Field</p>
        <div className="hero-year">A Documentary Film</div>
      </div>
      <div className="scroll-indicator">Scroll to Explore ↓</div>
    </section>
  );
}

// Trailer
function Trailer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.trailer-title',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.trailer-container',
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 20%', scrub: 1 }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="trailer-section" ref={sectionRef}>
      <h2 className="trailer-title">Official Trailer</h2>
      <div className="trailer-container">
        <iframe 
          src="https://www.youtube.com/embed/54PskZgTbgg?rel=0&modestbranding=1" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
}

// Ghost Mountain - Two-page section with horizontal slide
function GhostMountain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (pageIndex: number) => {
    if (!sliderRef.current) return;
    
    gsap.to(sliderRef.current, {
      x: `-${pageIndex * 100}%`,
      duration: 1,
      ease: 'power3.inOut'
    });
    
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Krama animations
      gsap.fromTo('.krama-left',
        { opacity: 0, x: -200, scaleX: 0.3, rotation: -15 },
        { 
          opacity: 0.85, x: 0, scaleX: 1, rotation: -15,
          duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      
      gsap.fromTo('.krama-right',
        { opacity: 0, x: 200, scaleX: 0.3, rotation: 15 },
        { 
          opacity: 0.85, x: 0, scaleX: 1, rotation: 15,
          duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );

      // Page 1 content animations
      gsap.fromTo('.page-1 .gm-text > *',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.page-1 .gm-image',
        { opacity: 0, x: 100, scale: 1.1 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.page-1 .gm-doc',
        { opacity: 0, y: 80, rotation: -10 },
        { opacity: 1, y: 0, rotation: -5, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 25%', scrub: 1 }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-section scene-black" id="ghost-mountain" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="krama-left">
        <img src={KRAMA_IMG} alt="Krama" />
      </div>
      <div className="krama-right">
        <img src={KRAMA_IMG} alt="Krama" />
      </div>
      
      {/* Slider wrapper - clips the overflow */}
      <div className="gm-slider-wrapper">
        {/* Slider track - contains both pages */}
        <div className="gm-slider-track" ref={sliderRef}>
          {/* Page 1: Ghost Mountain History */}
          <div className="gm-slider-page page-1">
            <div className="editorial-inner">
              <div className="editorial-left">
                <div className="gm-text">
                  <div className="section-label">The History</div>
                  <h2 className="section-title">Ghost Mountain</h2>
                  <div className="section-body">
                    <p>Phnum Khmoch, known as "Ghost Mountain," sits along the Thai-Cambodian border — a place where history and horror converge. During the Khmer Rouge regime (1975-1979), this remote region became a site of systematic violence.</p>
                    <p>The mountain's dense jungles concealed mass graves, execution sites, and forced labor camps. Thousands were brought here from across the country, their fates sealed by a regime that sought to erase an entire generation.</p>
                    <p>Today, the land still yields bones during the rainy season. The trees grow from burial sites. The earth remembers what the world tried to forget.</p>
                  </div>
                </div>
              </div>
              <div className="editorial-right">
                <div className="gm-image">
                  <img src={IMG_2} alt="Ghost Mountain" className="framed-image" />
                </div>
                <div className="gm-doc">
                  <div className="doc-header">Historical Record</div>
                  <strong>1975-1979</strong><br />
                  Border region<br />
                  Mass graves identified
                </div>
              </div>
            </div>
          </div>

          {/* Page 2: Synopsis */}
          <div className="gm-slider-page page-2">
            <div className="editorial-inner">
              <div className="editorial-left">
                <div className="gm-text">
                  <div className="section-label">Film Synopsis</div>
                  <h2 className="section-title">Blood Border</h2>
                  <div className="section-body">
                    <p>In the shadow of the Thai-Cambodian border lies Phnum Khmoch — Ghost Mountain — where the earth still holds secrets buried for decades. <em>Blood Border</em> is a harrowing documentary that unearths the untold story of a second killing field, hidden from the world's gaze.</p>
                    <p>Through intimate survivor testimonies, archaeological discoveries, and haunting archival footage, the film follows investigators as they excavate mass graves and piece together evidence of systematic atrocities committed during the final days of the Khmer Rouge regime.</p>
                    <p>As bones emerge from the jungle floor and witnesses break decades of silence, the documentary reveals not just a historical tragedy, but an ongoing quest for justice that continues to shape Cambodia's fragile present.</p>
                    <p style={{ marginTop: '20px', fontStyle: 'italic', opacity: 0.7 }}>A film about memory, evidence, and the weight of what the world chose to forget.</p>
                  </div>
                </div>
              </div>
              <div className="editorial-right">
                <div className="gm-image">
                  <img src={IMG_5} alt="Film still" className="framed-image" />
                </div>
                <div className="gm-doc">
                  <div className="doc-header">Film Details</div>
                  <strong>Documentary</strong><br />
                  Runtime: 95 min<br />
                  Language: Khmer/English<br />
                  Year: 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page indicator + navigation */}
      <div className="gm-page-nav">
        <button 
          className={`gm-page-btn ${currentPage === 0 ? 'active' : ''}`}
          onClick={() => goToPage(0)}
        >
          <span className="gm-page-num">01</span>
          <span className="gm-page-label">History</span>
        </button>
        <div className="gm-page-divider"></div>
        <button 
          className={`gm-page-btn ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => goToPage(1)}
        >
          <span className="gm-page-num">02</span>
          <span className="gm-page-label">Synopsis</span>
        </button>
      </div>

      {/* Arrow */}
      <button className="gm-slide-arrow" onClick={() => goToPage(currentPage === 0 ? 1 : 0)}>
        {currentPage === 0 ? (
          <>
            <span>Read Synopsis</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to History</span>
          </>
        )}
      </button>
    </section>
  );
}

// Kuoch Mengly
function KuochMengly() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.km-text > *',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.km-image',
        { opacity: 0, x: 100, scale: 1.1 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.km-record',
        { opacity: 0, y: 80, rotation: 8 },
        { opacity: 1, y: 0, rotation: 3, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 25%', scrub: 1 }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-section scene-red" id="kuoch-mengly" ref={sectionRef}>
      <div className="editorial-inner">
        <div className="editorial-left">
          <div className="km-text">
            <div className="section-label">A Survivor's Testimony</div>
            <h2 className="section-title">Kuoch Mengly</h2>
            <blockquote className="editorial-quote">
              "They took us in the night. We walked for days through the jungle. Many did not return."
            </blockquote>
            <div className="section-body">
              <p>Kuoch Mengly was just nineteen when the Khmer Rouge seized his village in Battambang province. Separated from his family, he was marched hundreds of kilometers to labor camps near the Thai border.</p>
              <p>For three years, he endured forced labor, starvation, and the constant threat of execution. He witnessed massacres that haunt him to this day.</p>
              <p>Against all odds, Mengly survived. He escaped across the border into Thailand in 1979, carrying with him the weight of memory and the responsibility to bear witness.</p>
            </div>
          </div>
        </div>
        <div className="editorial-right">
          <div className="km-image">
            <img src={IMG_3} alt="Kuoch Mengly" className="framed-image" />
          </div>
          <div className="km-record">
            <div className="doc-header">Survivor Record</div>
            <strong>ID: KM-1979</strong><br />
            Age: 19 at capture<br />
            Escaped: 1979<br />
            Status: Survivor
          </div>
        </div>
      </div>
    </section>
  );
}

// Making Of
function MakingOf() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.mo-text > *',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.mo-image',
        { opacity: 0, x: 100, scale: 1.1 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.mo-notes',
        { opacity: 0, y: 80, rotation: -8 },
        { opacity: 1, y: 0, rotation: -4, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 25%', scrub: 1 }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-section scene-green" id="making-of" ref={sectionRef}>
      <div className="editorial-inner">
        <div className="editorial-left">
          <div className="mo-text">
            <div className="section-label">Behind the Camera</div>
            <h2 className="section-title">The Making Of</h2>
            <div className="section-body">
              <p><strong>Director's Vision</strong></p>
              <p>Blood Border represents three years of immersive documentary work along the Cambodian-Thai border. Director [Director Name] worked closely with survivors, archaeologists, and historians to reconstruct the untold stories of the region's mass graves.</p>
              <p>Filmed on location at actual killing field sites, the documentary combines archival footage, survivor testimonies, and contemporary archaeological evidence to create an unflinching portrait of historical amnesia and the quest for justice.</p>
              <p>The film premiered at [Festival Name] to critical acclaim, praised for its unflinching approach to difficult history and its commitment to giving voice to those who survived.</p>
            </div>
          </div>
        </div>
        <div className="editorial-right">
          <div className="mo-image">
            <img src={IMG_4} alt="Making of" className="framed-image" />
          </div>
          <div className="mo-notes">
            <div className="doc-header">Production Notes</div>
            <strong>3 Years</strong> filming<br />
            12 locations<br />
            47 interviews<br />
            200+ hours footage
          </div>
        </div>
      </div>
    </section>
  );
}

// Festivals
function Festivals() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.fest-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="festivals-section" id="festivals" ref={sectionRef}>
      <div className="festivals-header">Official Selections & Awards</div>
      <div className="laurels-grid">
        <div className="laurel-item fest-item">
          <img src={LAUREL} alt="Cannes Film Festival" className="laurel-img" />
        </div>
        <div className="laurel-item fest-item">
          <img src={LAUREL} alt="Berlinale" className="laurel-img" />
        </div>
        <div className="laurel-item fest-item">
          <img src={LAUREL} alt="Sundance Film Festival" className="laurel-img" />
        </div>
        <div className="laurel-item fest-item">
          <img src={LAUREL} alt="IDFA Amsterdam" className="laurel-img" />
        </div>
      </div>
      <blockquote className="press-quote fest-item">
        "A masterwork of tension and visual poetry. Blood Border redefines the genre by turning history into a haunting, physical presence."
      </blockquote>
      <div className="press-source fest-item">— Variety Magazine</div>
    </section>
  );
}

// Credits
function Credits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.credit-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const credits = [
    { role: 'Director', name: '[Name]' },
    { role: 'Producer', name: '[Name]' },
    { role: 'Executive Producer', name: '[Name]' },
    { role: 'Director of Photography', name: '[Name]' },
    { role: 'Screenwriter', name: '[Name]' },
    { role: 'Co-Writer', name: '[Name]' },
    { role: 'Editor', name: '[Name]' },
    { role: 'Sound Design', name: '[Name]' },
    { role: 'Original Score', name: '[Name]' },
    { role: 'Camera Operator', name: '[Name]' },
    { role: 'Research Director', name: '[Name]' },
    { role: 'Production Manager', name: '[Name]' },
    { role: 'Colorist', name: '[Name]' },
    { role: 'Sound Mixer', name: '[Name]' },
    { role: 'Field Producer', name: '[Name]' },
    { role: 'Translator', name: '[Name]' },
    { role: 'Archival Research', name: '[Name]' },
    { role: 'Post-Production', name: '[Name]' },
  ];

  return (
    <section className="credits-section" id="credits" ref={sectionRef}>
      <div className="credits-header">The Team</div>
      <div className="credits-grid">
        {credits.map((c, i) => (
          <div className="credit-item" key={i}>
            <div className="credit-role">{c.role}</div>
            <div className="credit-name">{c.name}</div>
          </div>
        ))}
      </div>
      <div className="credits-footer">
        <p>In collaboration with the Documentation Center of Cambodia (DC-CAM)</p>
        <p>Special thanks to all survivors who shared their stories</p>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2025 BLOOD BORDER PROJECT. ALL RIGHTS RESERVED.</p>
      <p>SOURCES: NATIONAL ARCHIVES OF CAMBODIA / ECCC RECORDS / DC-CAM</p>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Trailer />
      <GhostMountain />
      <KuochMengly />
      <MakingOf />
      <Festivals />
      <Credits />
      <Footer />
    </>
  );
}
