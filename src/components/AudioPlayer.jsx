import { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

export default function AudioPlayer({ forcePlay, isVisible }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (forcePlay && !hasStarted.current && audioRef.current) {
      hasStarted.current = true;
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
         playPromise.then(() => setIsPlaying(true)).catch(e => console.log(e));
      }
    }
  }, [forcePlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
    }
  };

  const isSpinning = isPlaying || forcePlay;

  return (
    <div className={`floating-audio-player ${isVisible ? 'visible' : 'hidden'}`} onClick={togglePlay}>
      <audio ref={audioRef} loop>
        <source src="/bg_music_piano_new.mp3" type="audio/mpeg" />
      </audio>
      
      <div className={`vinyl-record ${isSpinning ? 'spinning' : ''}`}>
        <div className="vinyl-center">
          <span className="script-font text-gold" style={{ fontSize: '0.8rem', marginTop: '3px' }}>HG</span>
        </div>
      </div>
    </div>
  );
}
