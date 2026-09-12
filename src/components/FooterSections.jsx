import React, { useState } from 'react';

export function Blessings() {
  const blessings = [
    { label: 'Grand Parents', names: 'Late S. Mohinder Singh & Late Sdn. Gurbachan Kaur' },
    { label: 'Family Stars', names: 'Amreen, Hargun & Ambar' }
  ];

  return (
    <section className="section-container" style={{ padding: '80px 20px 40px 20px' }}>
      <h2 className="script-font text-maroon" style={{ fontSize: '4.5rem', marginBottom: '3rem', fontWeight: 'normal' }}>With Blessings From</h2>
      
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        padding: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        margin: '0 auto',
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        {blessings.map((b, i) => (
          <div key={i}>
            <p style={{ color: 'var(--text-maroon)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '8px', fontWeight: 'bold' }}>{b.label}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{b.names}</p>
          </div>
        ))}
      </div>
    </section>
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
    <section className="section-container" style={{ padding: '40px 20px 100px 20px' }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        padding: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        margin: '0 auto',
        maxWidth: '700px',
        textAlign: 'center'
      }}>
        <h2 className="text-maroon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'normal' }}>RSVP</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>We look forward to celebrating with you.</p>

        <form onSubmit={(e) => e.preventDefault()} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '20px', color: 'var(--text-maroon)' }}>Which wedding events will you be attending?</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {events.map((ev, i) => (
                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.05rem' }}>
                  <input type="radio" name="event" value={ev} checked={selectedEvent === ev} onChange={(e) => setSelectedEvent(e.target.value)} style={{ width: '20px', height: '20px', accentColor: 'var(--maroon)' }} />
                  {ev}
                </label>
              ))}
            </div>
          </div>

          {selectedEvent && selectedEvent !== 'Unfortunately, I cannot attend' && (
            <div style={{ animation: 'fadeIn 0.5s forwards', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              <input type="text" placeholder="Enter your full name" style={{ width: '100%', padding: '15px', border: '1px solid #EAE3CD', borderRadius: '5px', outline: 'none' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px', borderRadius: '5px', border: '1px solid #EAE3CD' }}>
                <span style={{ color: 'var(--text-muted)' }}>Guests (including you)</span>
                <input type="number" min="1" defaultValue="1" style={{ width: '50px', border: 'none', textAlign: 'right', outline: 'none' }} />
              </div>

              <textarea placeholder="We would love to hear your wishes..." rows="4" style={{ width: '100%', padding: '15px', border: '1px solid #EAE3CD', borderRadius: '5px', resize: 'none', outline: 'none' }}></textarea>
              
              <button style={{ backgroundColor: 'var(--maroon)', color: '#FFFFFF', padding: '15px', border: 'none', borderRadius: '30px', fontSize: '1rem', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '2px', marginTop: '10px' }}>
                Send RSVP
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--maroon)', padding: '60px 20px', textAlign: 'center' }}>
      <h2 className="script-font text-gold" style={{ fontSize: '4.5rem', marginBottom: '3rem', fontWeight: 'normal' }}>Thank You</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <div>
          <p style={{ color: 'var(--border-color)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Harmeet Singh</p>
          <a href="tel:+917009067423" style={{ color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '2px' }}>+91 70090 67423</a>
        </div>
      </div>
      
      <div style={{ fontSize: '0.8rem', color: 'var(--border-color)', opacity: 0.8, letterSpacing: '1px', marginTop: '20px' }}>
        Made with ❤️ by Gurnoor Singh
      </div>
    </footer>
  );
}
