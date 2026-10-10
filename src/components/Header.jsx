import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fade in smoothly over the first 250px of scrolling
      const opacity = Math.min(window.scrollY / 250, 1);
      setScrollOpacity(opacity);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Account for header height (~80px)
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="sticky-header" 
      style={{ 
        opacity: scrollOpacity, 
        pointerEvents: scrollOpacity > 0 ? 'auto' : 'none' 
      }}
    >
      <div className="header-container">
        {/* Left: Monogram and Names */}
        <div className="header-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="header-monogram script-font">HG</div>
          <div className="header-names serif-font">Harmeet <span className="script-font">&</span> Gurleen</div>
        </div>

        {/* Center/Right: Desktop Navigation */}
        <nav className="desktop-nav sans-font">
          <button onClick={() => scrollToSection('invocation')}>Invitation</button>
          <button onClick={() => scrollToSection('countdown')}>Countdown</button>
          <button onClick={() => scrollToSection('events')}>Celebrations</button>
        </nav>

        {/* Far Right: RSVP CTA */}
        <div className="header-cta desktop-cta">
          <button className="btn-header-rsvp sans-font" onClick={() => scrollToSection('rsvp')}>RSVP</button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-nav sans-font ${isMobileMenuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('invocation')}>Invitation</button>
        <button onClick={() => scrollToSection('countdown')}>Countdown</button>
        <button onClick={() => scrollToSection('events')}>Celebrations</button>
        <button onClick={() => scrollToSection('rsvp')} className="mobile-rsvp-link">RSVP</button>
      </div>
    </header>
  );
}
