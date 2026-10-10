import React, { useState } from 'react';

export function Blessings() {
  const blessings = [
    { label: 'Grand Parents', names: 'Late S. Mohinder Singh & Late Sdn. Gurbachan Kaur' },
    { label: 'Family Stars', names: 'Amreen, Hargun & Ambar' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--chocolate)', width: '100vw', margin: '0 calc(-50vw + 50%)' }}>
      <section className="section-container" style={{ padding: '100px 20px' }}>
        <h2 className="script-font text-gold" style={{ fontSize: '4.5rem', marginBottom: '4rem', fontWeight: 'normal' }}>With Blessings From</h2>
        
        <div style={{
          margin: '0 auto',
          maxWidth: '700px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          {blessings.map((b, i) => (
            <div key={i}>
              <p className="sans-font text-gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '8px', fontWeight: 'bold' }}>{b.label}</p>
              <p className="serif-font" style={{ color: 'var(--ivory)', fontSize: '1.4rem' }}>{b.names}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function RSVP() {
  const [selectedEvent, setSelectedEvent] = useState('');
  const events = [
    'Ring Ceremony',
    'Sukhmani Sahib Path',
    'Jago',
    'Marriage',
    'Reception',
    'Unfortunately, I cannot attend'
  ];

  return (
    <div id="rsvp" style={{ backgroundColor: 'var(--ivory)', width: '100vw', margin: '0 calc(-50vw + 50%)', padding: '100px 0' }}>
      <section className="section-container" style={{ padding: '0 20px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--gold)',
          borderRadius: '4px',
          padding: '60px 40px',
          boxShadow: '0 10px 30px rgba(112,45,64,0.08)',
          margin: '0 auto',
          maxWidth: '700px',
          textAlign: 'center'
        }}>
          <h2 className="text-burgundy serif-font" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'normal' }}>RSVP</h2>
          <p className="sans-font" style={{ color: 'var(--chocolate)', marginBottom: '3rem', fontSize: '1.1rem', opacity: 0.8 }}>We look forward to celebrating with you.</p>

          <form onSubmit={(e) => e.preventDefault()} className="sans-font" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '20px', color: 'var(--burgundy)' }}>Which wedding events will you be attending?</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {events.map((ev, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--chocolate)', cursor: 'pointer', fontSize: '1.05rem', opacity: 0.9 }}>
                    <input type="radio" name="event" value={ev} checked={selectedEvent === ev} onChange={(e) => setSelectedEvent(e.target.value)} style={{ width: '20px', height: '20px', accentColor: 'var(--burgundy)' }} />
                    {ev}
                  </label>
                ))}
              </div>
            </div>

            {selectedEvent && selectedEvent !== 'Unfortunately, I cannot attend' && (
              <div style={{ animation: 'fadeIn 0.5s forwards', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                <input type="text" placeholder="Enter your full name" className="sans-font" style={{ width: '100%', padding: '15px', border: '1px solid rgba(197,166,107,0.5)', borderRadius: '4px', outline: 'none' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px', borderRadius: '4px', border: '1px solid rgba(197,166,107,0.5)' }}>
                  <span style={{ color: 'var(--chocolate)', opacity: 0.8 }}>Guests (including you)</span>
                  <input type="number" min="1" defaultValue="1" className="sans-font" style={{ width: '50px', border: 'none', textAlign: 'right', outline: 'none' }} />
                </div>

                <textarea placeholder="We would love to hear your wishes..." rows="4" className="sans-font" style={{ width: '100%', padding: '15px', border: '1px solid rgba(197,166,107,0.5)', borderRadius: '4px', resize: 'none', outline: 'none' }}></textarea>
                
                <button className="sans-font" style={{ backgroundColor: 'var(--burgundy)', color: '#FFFFFF', padding: '16px', border: 'none', borderRadius: '4px', fontSize: '0.9rem', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '2px', marginTop: '10px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#626749'} onMouseOut={(e) => e.target.style.backgroundColor = 'var(--burgundy)'}>
                  Send RSVP
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export function Footer() {
  return (
    <div style={{ backgroundColor: 'var(--chocolate)', width: '100vw', margin: '0 calc(-50vw + 50%)' }}>
      <footer style={{ padding: '80px 20px', textAlign: 'center', borderTop: '1px solid rgba(197,166,107,0.3)' }}>
        <h2 className="script-font text-gold" style={{ fontSize: '4.5rem', marginBottom: '3rem', fontWeight: 'normal' }}>Thank You</h2>
        
        <div className="sans-font" style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ color: 'var(--ivory)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', opacity: 0.8 }}>Harmeet Singh</p>
            <a href="tel:+917009067423" style={{ color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '2px' }}>+91 70090 67423</a>
          </div>
          <div>
            <p style={{ color: 'var(--ivory)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', opacity: 0.8 }}>Gurvinder Singh Tuli</p>
            <a href="tel:+919501009689" style={{ color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '2px' }}>+91 95010 09689</a>
          </div>
        </div>
        
        <div className="sans-font" style={{ fontSize: '0.8rem', color: 'var(--ivory)', opacity: 0.5, letterSpacing: '1px', marginTop: '20px' }}>
          Made with ❤️ by Gurnoor Singh
        </div>
      </footer>
    </div>
  );
}
