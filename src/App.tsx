import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Your actual images from GitHub
const IMG_1 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC00488.JPG';
const IMG_2 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC00722.JPG';
const IMG_3 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC00914.JPG';
const IMG_4 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC01007.JPG';
const IMG_5 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC05464.JPG';
const IMG_6 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC07500.JPG';

// ============================================
// NAVIGATION
// ============================================
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
          BLOOD BORDER
        </h1>
        <p className="hero-sub">Cambodia's Second Killing Field</p>
        <div className="hero-year">A Documentary Film</div>
      </div>
      <div className="scroll-indicator">Scroll to Explore ↓</div>
    </section>
  );
}

// ============================================
// SECTION 2: GHOST MOUNTAIN (Black with floating objects)
// ============================================
function GhostMountain() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Watermark
      gsap.fromTo('.wm-gm',
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      // Photo
      gsap.fromTo('.obj-gm-1',
        { x: 400, y: -200, rotation: 30, opacity: 0 },
        {
          x: 0, y: 0, rotation: -5, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      // Document
      gsap.fromTo('.obj-gm-2',
        { x: -400, rotation: -20, opacity: 0 },
        {
          x: 0, rotation: 3, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      // Text
      gsap.fromTo('.text-gm',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-black" id="ghost-mountain" ref={sectionRef}>
      <div className="scene-content">
        <div className="layer layer-bg">
          <div className="watermark wm-gm" style={{ top: '20%', left: '5%' }}>PHNUM KHMOCH</div>
        </div>

        <div className="layer layer-mid">
          <div className="obj photo obj-gm-1" style={{ width: '240px', top: '15%', right: '12%' }}>
            <img src={IMG_2} alt="Ghost Mountain" />
            <div className="photo-cap">Border Region, 1979<br />Mass grave site</div>
          </div>

          <div className="obj doc obj-gm-2" style={{ width: '200px', bottom: '20%', left: '8%' }}>
            <div className="doc-header">Historical Record</div>
            <strong>1975-1979</strong><br /><br />
            Thousands executed<br />
            in border region.<br /><br />
            <em style={{ opacity: 0.6 }}>— DC-CAM Archives</em>
            <div className="doc-stamp">ARCHIVE</div>
          </div>
        </div>

        <div className="layer layer-text">
          <div className="scene-text text-gm" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', maxWidth: '600px' }}>
            <div className="scene-date">The History</div>
            <h2 className="scene-title">Ghost Mountain</h2>
            <div className="scene-body">
              <p>Phnum Khmoch, known as "Ghost Mountain," sits along the Thai-Cambodian border. During the Khmer Rouge regime, this remote region became a site of systematic violence.</p>
              <p>The mountain's dense jungles concealed mass graves and execution sites. Thousands were brought here, their fates sealed by a regime that sought to erase an entire generation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 3: KUOCH MENGLY (Red with floating objects)
// ============================================
function KuochMengly() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.wm-km',
        { x: 300, opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.obj-km-1',
        { scale: 2.5, opacity: 0, rotation: 10 },
        {
          scale: 1, opacity: 1, rotation: -3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.obj-km-2',
        { y: -400, rotation: 180, opacity: 0 },
        {
          y: 0, rotation: 0, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.text-km',
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-red" id="kuoch-mengly" ref={sectionRef}>
      <div className="scene-content">
        <div className="layer layer-bg">
          <div className="watermark wm-km" style={{ top: '25%', right: '5%' }}>TESTIMONY</div>
        </div>

        <div className="layer layer-mid">
          <div className="obj photo obj-km-1" style={{ width: '220px', top: '18%', left: '12%' }}>
            <img src={IMG_3} alt="Kuoch Mengly" />
            <div className="photo-cap">Kuoch Mengly<br />Survivor, Battambang</div>
          </div>

          <div className="obj doc obj-km-2" style={{ width: '180px', bottom: '25%', right: '10%' }}>
            <div className="doc-header">Survivor Record</div>
            <strong>ID: KM-1979</strong><br /><br />
            Age: 19 at capture<br />
            Escaped: 1979<br />
            Status: Survivor<br /><br />
            <div className="doc-stamp">WITNESS</div>
          </div>
        </div>

        <div className="layer layer-text">
          <div className="scene-text text-km" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', maxWidth: '550px' }}>
            <div className="scene-date">A Survivor's Story</div>
            <h2 className="scene-title">Kuoch Mengly</h2>
            <blockquote className="scene-quote" style={{ margin: '20px 0' }}>
              "They took us in the night. We walked for days through the jungle."
            </blockquote>
            <div className="scene-body">
              <p>Kuoch Mengly was just nineteen when the Khmer Rouge seized his village. For three years, he endured forced labor, starvation, and execution threats.</p>
              <p>Against all odds, he escaped across the border in 1979, carrying the weight of memory and the responsibility to bear witness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 4: MAKING OF (Green with floating objects)
// ============================================
function MakingOf() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.wm-mo',
        { y: 200, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.obj-mo-1',
        { y: 300, rotation: -15, opacity: 0 },
        {
          y: 0, rotation: 4, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.obj-mo-2',
        { x: -500, rotation: 25, opacity: 0 },
        {
          x: 0, rotation: -6, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.text-mo',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-green" id="making-of" ref={sectionRef}>
      <div className="scene-content">
        <div className="layer layer-bg">
          <div className="watermark wm-mo" style={{ bottom: '15%', left: '5%' }}>PRODUCTION</div>
        </div>

        <div className="layer layer-mid">
          <div className="obj photo obj-mo-1" style={{ width: '260px', top: '12%', right: '15%' }}>
            <img src={IMG_4} alt="Behind the scenes" />
            <div className="photo-cap">On location<br />Cambodian border, 2023</div>
          </div>

          <div className="obj doc obj-mo-2" style={{ width: '190px', bottom: '22%', left: '10%' }}>
            <div className="doc-header">Production Notes</div>
            <strong>3 Years</strong><br /><br />
            Filming period<br />
            Locations: 12<br />
            Interviews: 47<br /><br />
            <div className="doc-stamp">FILM</div>
          </div>
        </div>

        <div className="layer layer-text">
          <div className="scene-text text-mo" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', maxWidth: '550px' }}>
            <div className="scene-date">Behind the Camera</div>
            <h2 className="scene-title">The Making Of</h2>
            <div className="scene-body">
              <p><strong>Director's Vision</strong></p>
              <p>Blood Border represents three years of immersive documentary work along the Cambodian-Thai border. Director [Director Name] worked closely with survivors and historians.</p>
              <p>Filmed on location at actual killing field sites, the documentary combines archival footage, survivor testimonies, and archaeological evidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 5: FESTIVALS (White - different layout)
// ============================================
function Festivals() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.fest-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
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
          <div className="laurel-circle">
            <svg className="laurel-svg" viewBox="0 0 100 100">
              <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="5" fill="currentColor"/>
            </svg>
          </div>
          <div className="laurel-text">Cannes</div>
          <div className="laurel-subtext">2025</div>
        </div>

        <div className="laurel-item fest-item">
          <div className="laurel-circle">
            <svg className="laurel-svg" viewBox="0 0 100 100">
              <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M35 35 L65 35 M35 65 L65 65" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="laurel-text">Berlinale</div>
          <div className="laurel-subtext">2025</div>
        </div>

        <div className="laurel-item fest-item">
          <div className="laurel-circle">
            <svg className="laurel-svg" viewBox="0 0 100 100">
              <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="laurel-text">Sundance</div>
          <div className="laurel-subtext">2025</div>
        </div>

        <div className="laurel-item fest-item">
          <div className="laurel-circle">
            <svg className="laurel-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 25 L50 75 M25 50 L75 50" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="laurel-text">IDFA</div>
          <div className="laurel-subtext">2024</div>
        </div>
      </div>

      <blockquote className="press-quote fest-item">
        "A masterwork of tension and visual poetry."
      </blockquote>
      <div className="press-source fest-item">— Variety</div>
    </section>
  );
}

// ============================================
// SECTION 6: CREDITS (Black with floating objects)
// ============================================
function Credits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.wm-cr',
        { scale: 0.5, opacity: 0 },
        {
          scale: 1, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.obj-cr-1',
        { x: -500, rotation: -10, opacity: 0 },
        {
          x: 0, rotation: 5, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.obj-cr-2',
        { x: 500, rotation: 15, opacity: 0 },
        {
          x: 0, rotation: -4, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.text-cr',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="scene-stage scene-black" id="credits" ref={sectionRef}>
      <div className="scene-content">
        <div className="layer layer-bg">
          <div className="watermark wm-cr" style={{ top: '20%', left: '10%' }}>TEAM</div>
        </div>

        <div className="layer layer-mid">
          <div className="obj photo obj-cr-1" style={{ width: '200px', top: '15%', left: '10%' }}>
            <img src={IMG_5} alt="Team" />
            <div className="photo-cap">Production team<br />On location</div>
          </div>

          <div className="obj photo obj-cr-2" style={{ width: '180px', bottom: '18%', right: '12%' }}>
            <img src={IMG_6} alt="Crew" />
            <div className="photo-cap">Camera crew<br />Border region</div>
          </div>
        </div>

        <div className="layer layer-text">
          <div className="scene-text text-cr" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', maxWidth: '700px' }}>
            <div className="scene-date">The Team</div>
            <h2 className="scene-title">Credits</h2>
            <div className="credits-list">
              <div className="credit-row">
                <span className="credit-role">Director</span>
                <span className="credit-name">[Name]</span>
              </div>
              <div className="credit-row">
                <span className="credit-role">Producer</span>
                <span className="credit-name">[Name]</span>
              </div>
              <div className="credit-row">
                <span className="credit-role">Director of Photography</span>
                <span className="credit-name">[Name]</span>
              </div>
              <div className="credit-row">
                <span className="credit-role">Screenwriter</span>
                <span className="credit-name">[Name]</span>
              </div>
              <div className="credit-row">
                <span className="credit-role">Editor</span>
                <span className="credit-name">[Name]</span>
              </div>
              <div className="credit-row">
                <span className="credit-role">Sound Design</span>
                <span className="credit-name">[Name]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2025 BLOOD BORDER PROJECT. ALL RIGHTS RESERVED.</p>
      <p>SOURCES: NATIONAL ARCHIVES OF CAMBODIA / ECCC RECORDS / DC-CAM</p>
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
      <GhostMountain />
      <KuochMengly />
      <MakingOf />
      <Festivals />
      <Credits />
      <Footer />
    </>
  );
}
