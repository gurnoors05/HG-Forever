import { useRef, useState, useEffect } from 'react';
import './HeroVideo.css';

export default function HeroVideo({ onVideoComplete, onVideoPlay }) {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading screen
    return () => clearTimeout(timer);
  }, []);

  const handleTapToBegin = () => {
    if (isLoading) return;
    setIsPlaying(true);
    if (desktopVideoRef.current) desktopVideoRef.current.play();
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
    if (onVideoPlay) onVideoPlay();
  };

  const handleVideoEnd = () => {
    if (onVideoComplete) onVideoComplete();
  };

  return (
    <div className="hero-video-container" onClick={handleTapToBegin}>
      
      {isLoading && (
        <div className="loading-screen">
          <div className="wax-seal">
            <span className="seal-text script-font">HG</span>
          </div>
          <div className="loading-text-container text-gold">
            <span className="sparkles">✨</span>
            <span className="loading-text">A BEAUTIFUL LOVE STORY AWAITS...</span>
            <span className="sparkles">✨</span>
          </div>
          <div className="loading-line-container">
            <div className="loading-line"></div>
          </div>
        </div>
      )}

      <video
        ref={desktopVideoRef}
        className={`bg-video desktop-video ${!isLoading ? 'visible' : ''}`}
        playsInline
        muted
        onEnded={handleVideoEnd}
      >
        <source src="/IMG_0358.mp4" type="video/mp4" />
      </video>
      <video
        ref={mobileVideoRef}
        className={`bg-video mobile-video ${!isLoading ? 'visible' : ''}`}
        playsInline
        muted
        onEnded={handleVideoEnd}
      >
        <source src="/gemini_generated_video_54286a18.mp4" type="video/mp4" />
      </video>

      {/* Initial Overlay - Waits for tap */}
      {!isLoading && !isPlaying && (
        <div className="initial-overlay">
          <p className="tap-text script-font text-gold">Tap to Begin</p>
        </div>
      )}

      {/* Permanent watermark cover on the video itself */}
      {!isLoading && (
        <div style={{
          position: 'absolute',
          bottom: '30px',
          right: '10px',
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          <div className="wax-seal" style={{ width: '70px', height: '70px', boxShadow: '0 2px 10px rgba(0,0,0,0.5)', margin: 0 }}>
            <span className="seal-text script-font" style={{ fontSize: '1.5rem', textShadow: 'none' }}>HG</span>
          </div>
        </div>
      )}

    </div>
  );
}


