import React from 'react';

const EventCard = ({ title, date, time, details, venue, address, country, photo, mapLink }) => (
  <div style={{ 
    backgroundColor: 'var(--ivory)', 
    border: '1px solid var(--gold)',
    borderRadius: '8px', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
    padding: '40px 15px', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    height: '950px', 
    width: '100%',
    margin: '0 auto',
    maxWidth: '450px' 
  }}>
    <h3 className="script-font text-gold" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'normal' }}>{title}</h3>
    
    <div className="sans-font" style={{ color: 'var(--chocolate)', opacity: 0.9, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{date}</p>
      <p>{time}</p>
      {details && (
        <div style={{ marginTop: '10px', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
          {details}
        </div>
      )}
    </div>

    {photo && (
      <div style={{ width: '100%', marginBottom: '30px' }}>
        <img src={photo} alt={title} style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'contain', borderRadius: '20px' }} />
      </div>
    )}

    <div className="sans-font" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={{ fontSize: '0.7rem', color: 'var(--chocolate)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px', opacity: 0.8 }}>Venue</p>
      <p className="text-gold serif-font" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>{venue}</p>
      <p style={{ color: 'var(--chocolate)', opacity: 0.9, fontSize: '0.9rem', marginBottom: '10px' }}>{address}</p>
      <p style={{ color: 'var(--chocolate)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '20px' }}>{country}</p>
      
      <a href={mapLink} target="_blank" rel="noreferrer" className="sans-font" style={{ 
        display: 'inline-block', 
        padding: '10px 25px', 
        border: '1px solid var(--border-color)', 
        borderRadius: '30px', 
        color: 'var(--gold)', 
        textTransform: 'uppercase', 
        fontSize: '0.8rem', 
        letterSpacing: '1px', 
        transition: 'all 0.3s' 
      }} onMouseOver={(e) => { e.target.style.backgroundColor = 'var(--chocolate)'; e.target.style.color = '#FFFFFF'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--gold)'; }}>
        <span style={{ marginRight: '8px' }}>📍</span> View on Maps
      </a>
    </div>
  </div>
);

export default function Events() {
  const events = [
    { 
      title: 'Ring Ceremony', 
      date: '10 NOVEMBER 2026', 
      time: 'TUESDAY • 6 PM', 
      venue: 'Lake House', 
      address: 'Ludhiana', 
      country: 'India',
      photo: '/ring_ceremony.png',
      mapLink: 'https://maps.app.goo.gl/Pfa4fs48yHzsUVEA7' 
    },
    { 
      title: 'Shri Sukhmani Sahib Path', 
      date: '12 NOVEMBER 2026', 
      time: 'THURSDAY',
      details: '11:30 AM to 12:30 PM\nKirtan & Ardass 12:30 PM to 1:30 PM\nFollowed by Guru Ka Langar',
      venue: 'Gurudwara Singh Sabha', 
      address: 'Model Town, Phagwara', 
      country: 'India',
      photo: '/sukhmani.png',
      mapLink: 'https://share.google/sTJxZYnW1AUugHium' 
    },
    { 
      title: <><span style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', marginRight: '5px' }}>DJ</span> Night</>, 
      date: '14 NOVEMBER 2026', 
      time: 'SATURDAY • 7 PM ONWARDS', 
      venue: 'Our Residence', 
      address: '124 C Model Town, Phagwara', 
      country: 'India',
      photo: '/reception.png',
      mapLink: 'https://share.google/DI6hxJQBKxG5aE92I' 
    },
    { 
      title: 'Marriage', 
      date: '15 NOVEMBER 2026', 
      time: 'SUNDAY • BARAAT TIME - 10 AM', 
      venue: 'Ashish Continental', 
      address: 'G.T Road, Phagwara', 
      country: 'India',
      photo: '/marriage.png',
      mapLink: 'https://maps.app.goo.gl/i6SmByKneJZKb7mw6' 
    },
    { 
      title: 'Reception', 
      date: '16 NOVEMBER 2026', 
      time: 'MONDAY • 8 PM ONWARDS', 
      venue: 'Konica Resort', 
      address: 'GT Road, Phagwara', 
      country: 'India',
      photo: '/reception_final.png',
      mapLink: 'https://maps.app.goo.gl/YPHAbU9VTa2EyYS17' 
    }
  ];

  return (
    <div id="events" style={{ backgroundColor: 'var(--burgundy)', width: '100vw', margin: '0 calc(-50vw + 50%)', padding: '100px 0' }}>
      <section className="section-container" style={{ paddingTop: '0', paddingBottom: '0' }}>
        <h2 className="script-font text-ivory" style={{ fontSize: '4rem', marginBottom: '50px', textAlign: 'center', fontWeight: 'normal' }}>Wedding Events</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px' }}>
          {events.map((ev, i) => <EventCard key={i} {...ev} />)}
        </div>
      </section>
    </div>
  );
}

