import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Positioning tool state
const usePositioningTool = () => {
  const [enabled, setEnabled] = useState(false);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number; rotation: number }>>({});

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'p' && e.ctrlKey) {
        setEnabled(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return { enabled, positions, setPositions };
};

// Your actual images from GitHub
const IMG_1 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC07512.JPG';
const IMG_2 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC00722.JPG';
const IMG_3 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/Master-for-Web-6.jpg';
const IMG_4 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/798985908_1088092280301823_3849388321751906669_n (1).jpg';
const IMG_5 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC05464.JPG';
const IMG_6 = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/DSC07500.JPG';

// Worn red checkered scarf asset
const SCARF_IMG = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/Worn_Red_Checkered_Fringed_Scarf.png';

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
    tl.from('.hero-title', { opacity: 0, y: 100, duration: 1.5, ease: 'power4.out' })
      .from('.hero-sub', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' }, '-=1')
      .from('.hero-year', { opacity: 0, scale: 0.8, duration: 1, ease: 'power3.out' }, '-=0.5')
      .from('.scroll-indicator', { opacity: 0, duration: 1 }, '-=0.5');
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <img src={IMG_1} alt="" className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title">BLOOD BORDER</h1>
        <p className="hero-sub">Cambodia's Second Killing Field</p>
        <div className="hero-year">A Documentary Film</div>
      </div>
      <div className="scroll-indicator">Scroll to Explore ↓</div>
    </section>
  );
}

// ============================================
// SECTION 2: GHOST MOUNTAIN - Text left, image right
// ============================================
function GhostMountain() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.gm-text > *',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.gm-image',
        { opacity: 0, x: 100, scale: 1.1 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 }
        }
      );
      gsap.fromTo('.gm-doc',
        { opacity: 0, y: 80, rotation: -10 },
        { opacity: 1, y: 0, rotation: -5, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 25%', scrub: 1 }
        }
      );
      gsap.fromTo('.polaroid-1',
        { opacity: 0, y: 100, rotation: -15 },
        { opacity: 1, y: 0, rotation: -3, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', end: 'top 28%', scrub: 1 }
        }
      );
      gsap.fromTo('.polaroid-2',
        { opacity: 0, x: 150, rotation: 20 },
        { opacity: 1, x: 0, rotation: 5, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 25%', scrub: 1 }
        }
      );
      gsap.fromTo('.polaroid-3',
        { opacity: 0, y: 150, rotation: -10 },
        { opacity: 1, y: 0, rotation: -2, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 55%', end: 'top 20%', scrub: 1 }
        }
      );
      gsap.fromTo('.gm-scarf-artifact',
        { opacity: 0, scale: 0.5, rotation: 45 },
        { opacity: 1, scale: 1, rotation: -8, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 50%', end: 'top 15%', scrub: 1 }
        }
      );
      gsap.fromTo('.gm-extra-img-1',
        { opacity: 0, scale: 0.8, rotation: 15 },
        { opacity: 1, scale: 1, rotation: -8, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 50%', end: 'top 15%', scrub: 1 }
        }
      );
      gsap.fromTo('.gm-extra-img-2',
        { opacity: 0, x: 100, rotation: -20 },
        { opacity: 1, x: 0, rotation: 5, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 25%', scrub: 1 }
        }
      );

    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-section scene-black" id="ghost-mountain" ref={sectionRef}>
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
          <div className="gm-photo-stack">
            <div className="polaroid polaroid-1">
              <img src={IMG_2} alt="Ghost Mountain" />
              <div className="polaroid-caption">Phnum Khmoch · 1979</div>
              <div className="tape tape-top"></div>
            </div>
            <div className="polaroid polaroid-2">
              <img src={IMG_5} alt="Evidence" />
              <div className="polaroid-caption">Border region · Recovered</div>
              <div className="tape tape-corner"></div>
            </div>
            <div className="polaroid polaroid-3">
              <img src={IMG_6} alt="Archive" />
              <div className="polaroid-caption">Mass grave site · 1980</div>
            </div>
          </div>
          <div className="gm-doc">
            <div className="doc-header">Historical Record</div>
            <strong>1975-1979</strong><br />
            Border region<br />
            Mass graves identified
          </div>
          <div className="gm-scarf-artifact">
            <img src={SCARF_IMG} alt="Worn scarf" className="scarf-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 3: KUOCH MENGLY - Text left, image right
// ============================================
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

// ============================================
// SECTION 4: MAKING OF - Text left, image right
// ============================================
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

// Festival laurel wreath images
const LAUREL = 'https://raw.githubusercontent.com/StephenMen/webforfuns/main/Sundance_Laurel-removebg-preview.png';

// ============================================
// SECTION 5: FESTIVALS - White background
// ============================================
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

// ============================================
// SECTION 6: CREDITS - Horizontal 3-row grid
// ============================================
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
// POSITIONING PANEL
// ============================================
function PositioningPanel() {
  const [visible, setVisible] = useState(false);
  const [platePos, setPlatePos] = useState({
    bottom: -40,
    left: 30,
    rotation: -15,
    scale: 1
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'p' && e.ctrlKey) {
        e.preventDefault();
        setVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const scarf = document.querySelector('.gm-scarf-artifact') as HTMLElement;
    if (scarf) {
      scarf.style.top = `${platePos.bottom}px`;
      scarf.style.right = `${platePos.left}%`;
      scarf.style.transform = `rotate(${platePos.rotation}deg) scale(${platePos.scale})`;
    }
  }, [platePos]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      background: 'rgba(0,0,0,0.95)',
      color: '#fff',
      padding: '20px',
      borderRadius: '8px',
      zIndex: 10000,
      fontFamily: 'monospace',
      fontSize: '12px',
      minWidth: '250px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
    }}>
      <div style={{ marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
        <strong>Positioning Tool</strong>
        <div style={{ fontSize: '10px', color: '#888', marginTop: '5px' }}>Press Ctrl+P to toggle</div>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <div style={{ marginBottom: '5px', color: '#888' }}>Red Scarf</div>
        
        <label style={{ display: 'block', marginBottom: '8px' }}>
          Bottom: {platePos.bottom}px
          <input
            type="range"
            min="-200"
            max="200"
            value={platePos.bottom}
            onChange={(e) => setPlatePos(prev => ({ ...prev, bottom: Number(e.target.value) }))}
            style={{ width: '100%', marginTop: '4px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Left: {platePos.left}%
          <input
            type="range"
            min="0"
            max="100"
            value={platePos.left}
            onChange={(e) => setPlatePos(prev => ({ ...prev, left: Number(e.target.value) }))}
            style={{ width: '100%', marginTop: '4px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Rotation: {platePos.rotation}°
          <input
            type="range"
            min="-180"
            max="180"
            value={platePos.rotation}
            onChange={(e) => setPlatePos(prev => ({ ...prev, rotation: Number(e.target.value) }))}
            style={{ width: '100%', marginTop: '4px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Scale: {platePos.scale.toFixed(2)}
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.05"
            value={platePos.scale}
            onChange={(e) => setPlatePos(prev => ({ ...prev, scale: Number(e.target.value) }))}
            style={{ width: '100%', marginTop: '4px' }}
          />
        </label>
      </div>

      <div style={{ 
        background: '#1a1a1a', 
        padding: '10px', 
        borderRadius: '4px',
        fontSize: '10px',
        lineHeight: '1.6'
      }}>
        <div style={{ color: '#888', marginBottom: '5px' }}>Current CSS:</div>
        <code style={{ color: '#4ec9b0' }}>
          top: {platePos.bottom}px;<br/>
          right: {platePos.left}%;<br/>
          transform: rotate({platePos.rotation}deg)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scale({platePos.scale.toFixed(2)});
        </code>
      </div>
    </div>
  );
}

// ============================================
// MAIN APP
// ============================================
export default function App() {
  return (
    <>
      <Navigation />
      <PositioningPanel />
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
