import { useRef, useState, useEffect } from 'react';
import './HeroVideo.css';

export default function HeroVideo({ onVideoComplete, onVideoPlay }) {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isEntered, setIsEntered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  const handleTimeUpdate = (e) => {
    setVideoTime(e.target.currentTime);
  };

  // Adjusted timings so text appears AFTER curtains fully open
  const stage2Visible = videoTime > 4.5;
  const stage3Visible = videoTime > 6.0;
  const stage4Visible = videoTime > 7.5;

  const handleOpenInvitation = () => {
    if (isTransitioning || isEntered) return;
    setIsTransitioning(true);
    
    // Explicit play triggered by user click
    if (desktopVideoRef.current) desktopVideoRef.current.play().catch(e => console.log(e));
    if (mobileVideoRef.current) mobileVideoRef.current.play().catch(e => console.log(e));
    if (onVideoPlay) onVideoPlay();

    // 1.2s smooth transition fade for the photo overlay
    setTimeout(() => {
      setIsEntered(true);
      setIsTransitioning(false);
    }, 1200);
  };

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
    if (onVideoComplete) onVideoComplete();
  };

  return (
    <div className="hero-video-container">
      
      {/* Background Videos (Hidden behind image until entered) */}
      <video
        ref={desktopVideoRef}
        className="bg-video desktop-video"
        playsInline
        muted
        onEnded={handleVideoEnd}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="/gemini_generated_video_a7326f7e.mp4" type="video/mp4" />
      </video>
      <video
        ref={mobileVideoRef}
        className="bg-video mobile-video"
        playsInline
        muted
        onEnded={handleVideoEnd}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="/gemini_generated_video_a7326f7e.mp4" type="video/mp4" />
      </video>

      {/* Entry Photo Background (Fades out when entered) */}
      <div className={`entry-photo-container ${isTransitioning || isEntered ? 'fade-out' : ''} ${isEntered ? 'hidden' : ''}`}>
        <img
          src="/Entrance.png"
          alt="Wedding Reception"
          className="bg-image desktop-image"
        />
        <img
          src="/Entrance.png"
          alt="Wedding Reception"
          className="bg-image mobile-image"
        />
        <div className="video-overlay"></div>
      </div>

      {/* Timed Video Text Overlays */}
      {isEntered && (
        <div className="video-text-overlay">
          <div className={`text-stage-2 ${stage2Visible ? 'visible' : ''}`}>
            <p className="family-intro sans-font">WITH THE BLESSINGS OF THEIR FAMILIES</p>
            <div className="gold-divider"></div>
          </div>
          
          <div className={`text-stage-3 ${stage3Visible ? 'visible' : ''}`}>
            <h2 className="overlay-names serif-font">
              Harmeet <span className="script-font ampersand">&</span> Gurleen
            </h2>
          </div>
          
          <div className={`text-stage-4 ${stage4Visible ? 'visible' : ''}`}>
            <p className="invite-text sans-font">INVITE YOU TO CELEBRATE THEIR WEDDING</p>
            <p className="invite-subtext serif-font" style={{ fontStyle: 'italic' }}>
              A celebration of love, tradition & togetherness
            </p>
          </div>
        </div>
      )}

      {/* The Entrance Content (Layered over the overlay) */}
      {!isEntered && (
        <div className={`entrance-content-wrapper ${isTransitioning ? 'transition-out' : ''}`}>
          <div className="arch-frame">
            <div className="text-content">
              <p className="small-heading sans-font">TOGETHER WITH THEIR FAMILIES</p>
              <h1 className="couple-names serif-font">Harmeet <span className="script-font">&</span> Gurleen</h1>
              <p className="welcome-line sans-font">A Celebration of Love, Tradition and Togetherness</p>
              
              <div className="ornamental-motif">✤</div>
              
              <button 
                className="btn-open-invite sans-font" 
                onClick={handleOpenInvitation}
                disabled={isTransitioning}
              >
                Open Wedding Invitation
                <div className="btn-light-sweep"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Down Message (Shown when video completes) */}
      {isVideoFinished && (
        <div className="scroll-indicator-wrapper">
          <div className="scroll-indicator-bg"></div>
          <div className="scroll-indicator">
            <p className="serif-font scroll-subtitle">Your Invitation Awaits</p>
            <p className="sans-font scroll-title">SCROLL TO CONTINUE</p>
            <div className="scroll-line"></div>
          </div>
        </div>
      )}

      {/* Permanent Wax Seal */}
      <div className={`seal-container ${isEntered ? 'visible' : ''}`}>
        <div className="wax-seal">
          <span className="seal-text script-font">HG</span>
        </div>
      </div>
    </div>
  );
}


