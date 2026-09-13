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

  // Gapless looping hack to prevent the tiny pause at the end of MP3s
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      // If we are within 0.4 seconds of the end of the track, instantly loop back to the start
      if (audio.duration && audio.currentTime >= audio.duration - 0.4) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log(e));
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

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
        <source src="/bg_music_piano.mp3" type="audio/mpeg" />
      </audio>
      
      <div className={`vinyl-record ${isSpinning ? 'spinning' : ''}`}>
        <div className="vinyl-center">
          <span className="script-font text-gold" style={{ fontSize: '0.8rem', marginTop: '3px' }}>HG</span>
        </div>
      </div>
    </div>
  );
}
