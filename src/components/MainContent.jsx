import Invocation from './Invocation';
import ScratchCard from './ScratchCard';
import Countdown from './Countdown';
import Events from './Events';
import { Blessings, RSVP, Footer } from './FooterSections';
import './MainContent.css';

export default function MainContent({ isVisible }) {
  return (
    <div className="main-content-wrapper" style={{ 
      opacity: isVisible ? 1 : 0, 
      visibility: isVisible ? 'visible' : 'hidden',
      transition: 'opacity 1s ease-in',
      height: isVisible ? 'auto' : '0',
      overflow: isVisible ? 'visible' : 'hidden'
    }}>
      <Invocation />
      <ScratchCard />
      <Countdown />
      <Events />
      <Blessings />
      <RSVP />
      <Footer />
    </div>
  );
}
