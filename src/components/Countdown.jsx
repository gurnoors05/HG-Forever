import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00', hours: '00', minutes: '00', seconds: '00'
  });

  useEffect(() => {
    // Target date: November 15, 2026
    const target = new Date('2026-11-15T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimerBox = ({ value, label }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
      <div style={{ 
        backgroundColor: '#FCFBF4', // cream 
        border: '1px solid #EAE3CD', 
        borderRadius: '8px', 
        width: '100px', 
        height: '110px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: '2.5rem', 
        color: 'var(--gold)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
      }}>
        {value}
      </div>
      <p style={{ marginTop: '15px', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '3px' }}>{label}</p>
    </div>
  );

  return (
    <section className="section-container" style={{ textAlign: 'center', paddingBottom: '100px' }}>
      <h2 className="script-font text-maroon" style={{ fontSize: '4rem', marginBottom: '4rem', fontWeight: 'normal' }}>The Big Day Approaches</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <TimerBox value={timeLeft.days} label="Days" />
        <TimerBox value={timeLeft.hours} label="Hours" />
        <TimerBox value={timeLeft.minutes} label="Minutes" />
        <TimerBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
}

