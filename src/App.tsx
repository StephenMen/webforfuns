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
// HERO - More visible image
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
// SECTION 2: GHOST MOUNTAIN - Full bleed with overlay
// ============================================
function GhostMountain() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.ghost-content > *',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.ghost-bg',
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="ghost-section" id="ghost-mountain" ref={sectionRef}>
      <img src={IMG_2} alt="" className="ghost-bg" />
      <div className="ghost-overlay"></div>
      <div className="ghost-content">
        <div className="section-label">The History</div>
        <h2 className="section-title">Ghost Mountain</h2>
        <div className="section-body">
          <p>Phnum Khmoch, known as "Ghost Mountain," sits along the Thai-Cambodian border — a place where history and horror converge. During the Khmer Rouge regime (1975-1979), this remote region became a site of systematic violence.</p>
          <p>The mountain's dense jungles concealed mass graves, execution sites, and forced labor camps. Thousands were brought here from across the country, their fates sealed by a regime that sought to erase an entire generation.</p>
          <p>Today, the land still yields bones during the rainy season. The trees grow from burial sites. The earth remembers what the world tried to forget.</p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 3: KUOCH MENGLY'S STORY
// ============================================
function KuochMengly() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.km-quote',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.km-image',
        { x: 100, opacity: 0, rotation: 5 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.km-text',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 10%',
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mengly-section" id="kuoch-mengly" ref={sectionRef}>
      <div className="mengly-inner">
        <div className="section-label">A Survivor's Testimony</div>
        <h2 className="section-title">Kuoch Mengly</h2>
        <blockquote className="mengly-quote">
          "They took us in the night. We walked for days through the jungle. Many did not return."
        </blockquote>
        <div className="mengly-image">
          <img src={IMG_3} alt="Kuoch Mengly" />
        </div>
        <div className="mengly-body">
          <p>Kuoch Mengly was just nineteen when the Khmer Rouge seized his village in Battambang province. Separated from his family, he was marched hundreds of kilometers to labor camps near the Thai border.</p>
          <p>For three years, he endured forced labor, starvation, and the constant threat of execution. He witnessed massacres that haunts him to this day — entire families erased in a single night.</p>
          <p>Against all odds, Mengly survived. He escaped across the border into Thailand in 1979, carrying with him the weight of memory and the responsibility to bear witness.</p>
          <p>His story is one of thousands — but it is his voice that breaks the silence.</p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 4: MAKING OF - Cinematic horizontal
// ============================================
function MakingOf() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.making-hero img',
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.making-hero-text > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.making-hero',
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.making-body > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.making-body-section',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="making-section" id="making-of" ref={sectionRef}>
      <div className="making-hero">
        <img src={IMG_4} alt="Making of" />
        <div className="making-hero-overlay"></div>
        <div className="making-hero-text">
          <div className="section-label">Behind the Camera</div>
          <h2 className="section-title">The Making Of</h2>
        </div>
      </div>
      <div className="making-body-section">
        <div className="making-body">
          <p><strong>Director's Vision</strong></p>
          <p>Blood Border represents three years of immersive documentary work along the Cambodian-Thai border. Director [Director Name] worked closely with survivors, archaeologists, and historians to reconstruct the untold stories of the region's mass graves.</p>
          <p>Filmed on location at actual killing field sites, the documentary combines archival footage, survivor testimonies, and contemporary archaeological evidence to create an unflinching portrait of historical amnesia and the quest for justice.</p>
          <p>The film premiered at [Festival Name] to critical acclaim, praised for its unflinching approach to difficult history and its commitment to giving voice to those who survived.</p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 5: FESTIVAL SELECTIONS
// ============================================
function Festivals() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.fest-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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
              <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 M50 15 C35 15 25 30 25 50 C25 70 35 85 50 85 C65 85 75 70 75 50 C75 30 65 15 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 40 Q40 30 50 40 Q60 30 70 40" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M30 60 Q40 70 50 60 Q60 70 70 60" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="50" cy="50" r="5" fill="currentColor"/>
            </svg>
          </div>
          <div className="laurel-text">Cannes Film Festival</div>
          <div className="laurel-subtext">Un Certain Regard · 2025</div>
        </div>

        <div className="laurel-item fest-item">
          <div className="laurel-circle">
            <svg className="laurel-svg" viewBox="0 0 100 100">
              <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 M50 15 C35 15 25 30 25 50 C25 70 35 85 50 85 C65 85 75 70 75 50 C75 30 65 15 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M35 35 L65 35 M35 65 L65 65" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="laurel-text">Berlinale</div>
          <div className="laurel-subtext">Best Documentary · 2025</div>
        </div>

        <div className="laurel-item fest-item">
          <div className="laurel-circle">
            <svg className="laurel-svg" viewBox="0 0 100 100">
              <path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 M50 15 C35 15 25 30 25 50 C25 70 35 85 50 85 C65 85 75 70 75 50 C75 30 65 15 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M40 40 Q50 30 60 40 Q50 50 40 40" fill="currentColor" opacity="0.5"/>
              <path d="M40 60 Q50 70 60 60 Q50 50 40 60" fill="currentColor" opacity="0.5"/>
            </svg>
          </div>
          <div className="laurel-text">Sundance</div>
          <div className="laurel-subtext">Jury Prize Winner · 2025</div>
        </div>

        <div className="laurel-item fest-item">
          <div className="laurel-circle">
            <svg className="laurel-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 25 L50 75 M25 50 L75 50" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="laurel-text">IDFA Amsterdam</div>
          <div className="laurel-subtext">Special Mention · 2024</div>
        </div>
      </div>

      <blockquote className="press-quote fest-item">
        "A masterwork of tension and visual poetry. Blood Border redefines the genre by turning history into a haunting, physical presence."
      </blockquote>
      <div className="press-source fest-item">— Variety Magazine</div>
    </section>
  );
}

// ============================================
// SECTION 6: TEAM CREDITS
// ============================================
function Credits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.credit-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
    <section className="credits-section" id="credits" ref={sectionRef}>
      <div className="credits-header">The Team</div>
      
      <div className="credits-grid">
        <div className="credit-item">
          <div className="credit-role">Director</div>
          <div className="credit-name">[Director Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Producer</div>
          <div className="credit-name">[Producer Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Director of Photography</div>
          <div className="credit-name">[DP Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Screenwriter</div>
          <div className="credit-name">[Writer Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Editor</div>
          <div className="credit-name">[Editor Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Sound Design</div>
          <div className="credit-name">[Sound Designer]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Original Score</div>
          <div className="credit-name">[Composer Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Camera Operator</div>
          <div className="credit-name">[Camera Op Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Research Director</div>
          <div className="credit-name">[Researcher Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Production Manager</div>
          <div className="credit-name">[PM Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Colorist</div>
          <div className="credit-name">[Colorist Name]</div>
        </div>

        <div className="credit-item">
          <div className="credit-role">Executive Producer</div>
          <div className="credit-name">[EP Name]</div>
        </div>
      </div>

      <div className="credits-footer">
        <p>In collaboration with the Documentation Center of Cambodia (DC-CAM)</p>
        <p>Special thanks to all survivors who shared their stories</p>
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
