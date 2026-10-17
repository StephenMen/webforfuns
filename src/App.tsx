import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Navigation Component
function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">BLOOD_BORDER</div>
      <div className="nav-links">
        <a href="#archive">Archive</a>
        <a href="#film">Film</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title anim-hero">
        CAMBODIA'S<br />SECOND KILLING FIELD
      </h1>
      <p className="hero-subtitle anim-hero-sub">
        AN IMMERSIVE HISTORICAL TESTAMENT
      </p>
      <div className="scroll-hint">SCROLL TO EXCAVATE ↓</div>
    </section>
  );
}

// Zone 1: Black - The Void / Memory Loss
function ZoneBlack() {
  return (
    <section className="zone z-black" data-bg="#050505">
      <div className="objects-layer">
        <div className="obj type-watermark wm-1 anim-float">FORGETTING</div>
        <div className="obj asset-doc pos-1 anim-float">
          <strong>Oct 14, 1975</strong><br />
          They took the rice. Again.<br />
          The children cry silently now.<br />
          <em>- Anonymous, Battambang</em>
        </div>
        <div className="obj asset-photo pos-2 anim-float">
          <img src="https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=400&h=300&fit=crop" alt="Ruins" />
          <div className="caption">Phnom Penh Outskirts, 1979</div>
        </div>
      </div>
    </section>
  );
}

// Zone 2: Red - The Violence / Blood
function ZoneRed() {
  return (
    <section className="zone z-red" data-bg="#7a0c0c">
      <div className="objects-layer">
        <div className="obj type-watermark wm-2 anim-float">CRIME</div>
        <div className="obj asset-metal shape-mine pos-3 anim-float">
          <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2 }}>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#000" strokeWidth="5"/>
            <rect x="45" y="10" width="10" height="20" fill="#000"/>
          </svg>
        </div>
        <div className="obj asset-photo pos-4 anim-float">
          <img src="https://images.unsplash.com/photo-1504198266287-1659872e6590?w=400&h=300&fit=crop" alt="Portrait" />
          <div className="caption">Subject ID: 442-B<br />S-21 Prisoner</div>
        </div>
      </div>
    </section>
  );
}

// Zone 3: Green - The Jungle / Decay
function ZoneGreen() {
  return (
    <section className="zone z-green" data-bg="#162b20">
      <div className="objects-layer">
        <div className="obj type-watermark wm-3 anim-float">OVERGROWN</div>
        <div className="obj asset-doc pos-5 anim-float">
          SECTOR 4<br />
          [REDACTED]<br />
          COORDINATES:<br />
          11°55'N 104°91'E
        </div>
        <div className="obj asset-metal shape-bullet pos-6 anim-float"></div>
      </div>
    </section>
  );
}

// Zone 4: White - The Evidence / Truth
function ZoneWhite() {
  return (
    <section className="zone z-white" data-bg="#e8e4d9">
      <div className="objects-layer">
        <div className="obj type-watermark wm-4 anim-float">EVIDENCE</div>
        <div className="obj asset-photo pos-7 anim-float">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop" alt="Grave Site" />
          <div className="caption">Killing Field Evidence<br />Recovered 2023</div>
        </div>
        <div className="obj asset-doc pos-8 anim-float">
          <strong>DECLASSIFIED · 1953</strong><br />
          The evidence does not speak.<br />
          It bleeds.
        </div>
      </div>
    </section>
  );
}

// Evidence Scene Component
function EvidenceScene() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const artifacts = section.querySelectorAll('.artifact');
          artifacts.forEach((art, i) => {
            setTimeout(() => art.classList.add('visible'), i * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="scene-evidence" id="evidence" ref={sectionRef}>
      <h2 className="evidence-title">Phnum Khmoch</h2>
      <p className="evidence-sub">The table does not lie. The objects remember.</p>
      <div className="evidence-table">
        <div className="table-surface"></div>
        <div className="artifact photo-artifact" data-delay="0">
          <img src="https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=400&h=500&fit=crop" alt="Evidence" />
          <span className="artifact-label">Border record · 1947</span>
        </div>
        <div className="artifact doc-artifact" data-delay="150">
          <div className="doc-paper"></div>
          <span className="artifact-label">Declassified</span>
        </div>
        <div className="artifact film-artifact" data-delay="300">
          <img src="https://images.unsplash.com/photo-1504198266287-1659872e6590?w=400&h=500&fit=crop" alt="Film artifact" />
          <span className="artifact-label">Recovered footage</span>
        </div>
        <div className="artifact object-artifact" data-delay="450">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=300&fit=crop" alt="Artifact" />
          <span className="artifact-label">Personal effects</span>
        </div>
        <div className="blood-stain"></div>
      </div>
      <blockquote className="table-quote">"The evidence does not speak. It bleeds."</blockquote>
    </section>
  );
}

// Laurel SVG Component
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

// Festivals Section
function Festivals() {
  return (
    <section className="festivals-section">
      <div className="festivals-header">Official Selections & Awards</div>
      
      <div className="laurels-grid">
        <div className="laurel-item">
          <LaurelSVG variant="cannes" />
          <div className="laurel-text">CANNES FILM FESTIVAL</div>
          <div className="laurel-subtext">Un Certain Regard • 2024</div>
        </div>

        <div className="laurel-item">
          <LaurelSVG variant="berlinale" />
          <div className="laurel-text">BERLINALE</div>
          <div className="laurel-subtext">Best Documentary • 2024</div>
        </div>

        <div className="laurel-item">
          <LaurelSVG variant="sundance" />
          <div className="laurel-text">SUNDANCE</div>
          <div className="laurel-subtext">Jury Prize Winner • 2024</div>
        </div>
      </div>

      <blockquote className="press-quote">
        "A masterwork of tension and visual poetry. Blood Border redefines the genre by turning history into a haunting, physical presence."
      </blockquote>
      <div className="press-source">— Variety Magazine</div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="site-footer">
      &copy; 2026 BLOOD BORDER PROJECT. ALL RIGHTS RESERVED.<br />
      SOURCES: NATIONAL ARCHIVES OF CAMBODIA / ECCC RECORDS
    </footer>
  );
}

// Main App Component
export default function App() {
  useEffect(() => {
    // 1. Hero Animation
    gsap.to(".anim-hero", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 });
    gsap.to(".anim-hero-sub", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 });

    // 2. Background Color Sync
    const zones = document.querySelectorAll('.zone');
    zones.forEach(zone => {
      const bgColor = zone.getAttribute('data-bg') || '#050505';
      ScrollTrigger.create({
        trigger: zone,
        start: "top center",
        end: "bottom center",
        onEnter: () => gsap.to("body", { backgroundColor: bgColor, duration: 0.8 }),
        onEnterBack: () => gsap.to("body", { backgroundColor: bgColor, duration: 0.8 })
      });
    });

    // 3. Floating Object Physics
    const floats = document.querySelectorAll('.anim-float');

    floats.forEach((el, index) => {
      const dirY = index % 2 === 0 ? 1 : -1;
      const dirX = index % 3 === 0 ? 1 : -1;
      
      // Main Scroll Animation
      gsap.fromTo(el, 
        { 
          y: 100 * dirY, 
          x: 50 * dirX,
          opacity: 0,
          scale: 0.9,
          rotate: `${dirY * 5}deg`
        },
        {
          y: -100 * dirY, 
          x: -50 * dirX,
          opacity: 1,
          scale: 1,
          rotate: `${dirY * -5}deg`,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest('.zone'),
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        }
      );

      // Idle Sway
      gsap.to(el, {
        y: "+=10",
        x: "+=5",
        rotation: "+=2",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        duration: 3 + Math.random() * 2
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <div className="story-container">
        <ZoneBlack />
        <ZoneRed />
        <ZoneGreen />
        <ZoneWhite />
      </div>
      <EvidenceScene />
      <Festivals />
      <Footer />
    </>
  );
}
