export default function Invocation() {
  return (
    <div id="invocation" style={{ backgroundColor: 'var(--chocolate)', width: '100vw', margin: '0 calc(-50vw + 50%)' }}>
      <section className="section-container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div style={{
          padding: '20px',
          margin: '0 auto',
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          <div className="invocation-symbol text-gold" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>ੴ</div>
          <p className="punjabi-text sans-font" style={{ fontSize: '0.95rem', color: 'var(--ivory)', opacity: 0.8, marginBottom: '4rem', lineHeight: '1.8' }}>
            ਸਤਿਗੁਰੂ ਦਾਤੇ ਕਾਜਿ ਰਚਾਇਆ ਆਪਣੀ ਮੇਹਰ ਕਰਾਈ।<br />
            ਦਾਸਾਂ ਕਾਰਜ ਆਪ ਸਵਾਰੇ ਇਹ ਉਸ ਦੀ ਵਡਿਆਈ॥
          </p>
          
          <h2 className="script-font text-gold" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: 'normal', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>We Cordially Invite You</h2>
          <p className="sans-font" style={{ maxWidth: '500px', margin: '0 auto 4rem auto', color: 'var(--ivory)', opacity: 0.9, fontSize: '1.1rem', lineHeight: '1.8', letterSpacing: '1px' }}>
            Together with our beloved families,<br />
            we request the honour of your gracious<br />
            presence to celebrate the wedding of
          </p>

          <div className="couple-details" style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
            <div>
              <h3 className="serif-font text-ivory" style={{ fontSize: '3rem', margin: '0', fontWeight: 'normal' }}>Harmeet Singh</h3>
              <p className="sans-font" style={{ color: 'var(--gold)', fontSize: '0.85rem', fontStyle: 'italic', margin: '10px 0', letterSpacing: '1px' }}>Son of</p>
              <p className="sans-font" style={{ fontSize: '1rem', color: 'var(--ivory)', opacity: 0.9 }}>Gurvinder Singh Tuli & Kuljeet Kaur</p>
            </div>
            
            <div className="sans-font" style={{ fontSize: '1.2rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', margin: '15px 0' }}>With</div>
            
            <div>
              <h3 className="serif-font text-ivory" style={{ fontSize: '3rem', margin: '0', fontWeight: 'normal' }}>Gurleen Kaur</h3>
              <p className="sans-font" style={{ color: 'var(--gold)', fontSize: '0.85rem', fontStyle: 'italic', margin: '10px 0', letterSpacing: '1px' }}>Daughter of</p>
              <p className="sans-font" style={{ fontSize: '1rem', color: 'var(--ivory)', opacity: 0.9 }}>Gurdev Singh & Satvinder Kaur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
