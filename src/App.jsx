import { useState, useEffect } from 'react';
import HeroVideo from './components/HeroVideo';
import MainContent from './components/MainContent';
import AudioPlayer from './components/AudioPlayer';
import Header from './components/Header';
import './index.css';

function App() {
  const [videoFinished, setVideoFinished] = useState(false);
  const [globalPlay, setGlobalPlay] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoFinished) {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    } else {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed'; 
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      window.scrollTo(0, 0);
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [videoFinished]);

  return (
    <>
      <AudioPlayer forcePlay={globalPlay} isVisible={hasScrolled} />
      
      <HeroVideo 
        onVideoComplete={() => setVideoFinished(true)} 
        onVideoPlay={() => setGlobalPlay(true)}
      />
      
      <Header />

      <MainContent isVisible={videoFinished} />
    </>
  );
}

export default App;
