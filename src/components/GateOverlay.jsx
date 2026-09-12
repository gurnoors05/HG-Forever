import { useState } from 'react';
import './GateOverlay.css';

export default function GateOverlay({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTap = () => {
    setIsOpen(true);
    if (onOpen) onOpen();
    // Hide overlay completely after animation
    setTimeout(() => {
      document.getElementById('gate-overlay-container').style.display = 'none';
    }, 2000);
  };

  return (
    <div id="gate-overlay-container" className={`gate-overlay ${isOpen ? 'open' : ''}`}>
      <div className="gate-door left-door">
        <div className="gate-pattern"></div>
      </div>
      <div className="gate-door right-door">
        <div className="gate-pattern"></div>
      </div>
      
      <div className={`gate-center-content ${isOpen ? 'fade-out' : ''}`} onClick={handleTap}>
        <div className="ribbon-container">
          <div className="ribbon-left"></div>
          <div className="ribbon-center">
            <span className="tap-to-begin text-gold">TAP TO BEGIN</span>
            <div className="wax-seal">
              <span className="script-font text-gold">HG</span>
            </div>
          </div>
          <div className="ribbon-right"></div>
        </div>
      </div>
    </div>
  );
}
