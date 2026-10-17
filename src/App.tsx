import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Cinematic film stills
const IMAGES = {
  hero: 'https://image.qwenlm.ai/generated-images/683fa63b-4a5a-495b-ac64-e324451cb143/_result.png',
  portrait: 'https://image.qwenlm.ai/generated-images/945b93ae-1048-49ab-b54e-8fd86e6db554/_result.png',
  ruins: 'https://image.qwenlm.ai/generated-images/3eb0a29d-4689-4ff4-9fc9-87d2a7327eea/_result.png',
  journalists: 'https://image.qwenlm.ai/generated-images/73382d87-2bae-41df-a133-abe235446a99/_result.png',
  hands: 'https://image.qwenlm.ai/generated-images/cffb0c57-519e-4f75-8d2f-f76f2dd64dc1/_result.png',
};

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">Blood Border</div>
      <div className="nav-links">
        <a href="#synopsis">Synopsis</a>
        <a href="#gallery">Film</a>
        <a href="#press">Press</a>
        <a href="#awards">Awards</a>
      </div>
    </nav>
  );
}

// ============================================
// HERO
// ============================================
function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to('.hero-tagline', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          src={IMAGES.hero} 
          alt="" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: 0.4,
            filter: 'grayscale(30%) contrast(1.1)'
          }}
        />
      </div>
      <div className="hero-content">
        <p className="hero-tagline">A Documentary Film · 2025</p>
        <h1 className="hero-title">Blood Border</h1>
        <p className="hero-subtitle">
          Cambodia's Second Killing Field — An immersive testament to the stories 
          buried beneath the jungle floor, and the evidence that refuses to stay silent.
        </p>
        <a href="#synopsis" className="hero-cta">
          <span>Discover the Film</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}

// ============================================
// SYNOPSIS
// ============================================
function Synopsis() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo('.synopsis-text', 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section className="synopsis" id="synopsis" ref={sectionRef}>
      <div className="synopsis-inner">
        <p className="section-label">Synopsis</p>
        <p className="synopsis-text">
          In 1975, the Khmer Rouge emptied Cambodia's cities and murdered a quarter 
          of its population. <em>Blood Border</em> follows the journey of investigators 
          uncovering mass graves along the Thai-Cambodian border — where the jungle 
          still yields bones, and the evidence of a second killing field demands to be heard.
        </p>
        <p className="synopsis-text" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', opacity: 0.7 }}>
          A film about memory, justice, and the weight of what the world chose to forget.
        </p>
      </div>
    </section>
  );
}

// ============================================
// CREDITS
// ============================================
function Credits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo('.credit-item', 
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
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section className="credits" ref={sectionRef}>
      <div className="credits-grid">
        <div className="credit-item">
          <p className="credit-role">Director</p>
          <p className="credit-name">Rithy Panh</p>
        </div>
        <div className="credit-item">
          <p className="credit-role">Writers</p>
          <p className="credit-name">Elizabeth Becker<br/>Pierre Erwan Guillaume</p>
        </div>
        <div className="credit-item">
          <p className="credit-role">Producer</p>
          <p className="credit-name">Catherine Dussart</p>
        </div>
        <div className="credit-item">
          <p className="credit-role">Cinematography</p>
          <p className="credit-name">Prano Bailey-Bond</p>
        </div>
        <div className="credit-item">
          <p className="credit-role">Editor</p>
          <p className="credit-name">Marie-Hélène Dozo</p>
        </div>
        <div className="credit-item">
          <p className="credit-role">Music</p>
          <p className="credit-name">Marc Marder</p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// GALLERY
// ============================================
function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo('.gallery-item', 
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section className="gallery" id="gallery" ref={sectionRef}>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={IMAGES.hero} alt="Film still" />
        </div>
        <div className="gallery-item">
          <img src={IMAGES.portrait} alt="Film still" />
        </div>
        <div className="gallery-item">
          <img src={IMAGES.ruins} alt="Film still" />
        </div>
        <div className="gallery-item">
          <img src={IMAGES.journalists} alt="Film still" />
        </div>
        <div className="gallery-item">
          <img src={IMAGES.hands} alt="Film still" />
        </div>
        <div className="gallery-item">
          <img src={IMAGES.hero} alt="Film still" style={{ objectPosition: 'center 70%' }} />
        </div>
      </div>
    </section>
  );
}

// ============================================
// PRESS QUOTES
// ============================================
function Press() {
  const quotes = [
    {
      text: "A masterwork of tension and visual poetry. Blood Border redefines the documentary genre by turning history into a haunting, physical presence.",
      source: "Variety"
    },
    {
      text: "Devastating and essential. The film achieves what few documentaries dare — it makes you feel the weight of forgotten history in your bones.",
      source: "Screen Daily"
    },
    {
      text: "Rithy Panh's most personal work yet. A film that demands we confront what we've chosen to forget.",
      source: "Deadline"
    },
    {
      text: "An extraordinary achievement in documentary filmmaking. Every frame carries the weight of testimony.",
      source: "Cineuropa"
    },
    {
      text: "Blood Border is not just a film — it is an act of remembrance, a monument built from images and silence.",
      source: "The Film Verdict"
    },
  ];

  return (
    <section className="press" id="press">
      <div className="press-header">
        <p className="section-label">Press</p>
        <h2 className="section-title">What They're Saying</h2>
      </div>
      <div className="press-slider">
        {quotes.map((quote, i) => (
          <div className="press-card" key={i}>
            <p className="press-quote">"{quote.text}"</p>
            <p className="press-source">— {quote.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================
// TRAILER
// ============================================
function Trailer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo('.trailer-container', 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section className="trailer" ref={sectionRef}>
      <p className="section-label">Watch</p>
      <h2 className="section-title" style={{ marginBottom: '48px' }}>Official Trailer</h2>
      <div className="trailer-container">
        <div className="trailer-placeholder">
          <img 
            src={IMAGES.ruins} 
            alt="" 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              opacity: 0.5,
              filter: 'grayscale(40%)'
            }}
          />
          <div className="trailer-play">
            <svg viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// AWARDS
// ============================================
function Awards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo('.award-item', 
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
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section className="awards" id="awards" ref={sectionRef}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Official Selections</h2>
      </div>
      <div className="awards-grid">
        <div className="award-item">
          <div className="award-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <p className="award-name">Cannes</p>
          <p className="award-detail">Un Certain Regard · 2025</p>
        </div>
        <div className="award-item">
          <div className="award-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8Z"/>
            </svg>
          </div>
          <p className="award-name">Berlinale</p>
          <p className="award-detail">Best Documentary · 2025</p>
        </div>
        <div className="award-item">
          <div className="award-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <path d="M6 9L12 3L18 9M6 15L12 21L18 15"/>
            </svg>
          </div>
          <p className="award-name">Sundance</p>
          <p className="award-detail">Jury Prize · 2025</p>
        </div>
        <div className="award-item">
          <div className="award-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M9 12L11 14L15 10"/>
            </svg>
          </div>
          <p className="award-name">IDFA</p>
          <p className="award-detail">Special Mention · 2024</p>
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
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Blood Border</p>
          <p className="footer-tagline">
            A documentary film examining the untold stories of Cambodia's border regions 
            and the evidence of atrocities that history tried to bury.
          </p>
        </div>
        <div>
          <p className="footer-heading">Film</p>
          <ul className="footer-links">
            <li><a href="#synopsis">Synopsis</a></li>
            <li><a href="#gallery">Film Stills</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#awards">Awards</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <ul className="footer-links">
            <li><a href="mailto:press@bloodborder.film">Press Inquiries</a></li>
            <li><a href="mailto:dist@bloodborder.film">Distribution</a></li>
            <li><a href="#">Press Kit</a></li>
            <li><a href="#">Screening Requests</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Blood Border. All rights reserved.</span>
        <span>Sources: National Archives of Cambodia · ECCC Records · DC-CAM</span>
      </div>
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
      <Synopsis />
      <Credits />
      <Gallery />
      <Press />
      <Trailer />
      <Awards />
      <Footer />
    </>
  );
}
