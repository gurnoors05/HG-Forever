export default function Invocation() {
  return (
    <section className="section-container" style={{ paddingTop: '40px' }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-color)',
        borderRadius: '15px',
        padding: '60px 40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        margin: '0 auto',
        maxWidth: '800px'
      }}>
        <div className="invocation-symbol text-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>ੴ</div>
        <p className="punjabi-text" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
          ਸਤਿਗੁਰੂ ਦਾਤੇ ਕਾਜਿ ਰਚਾਇਆ ਆਪਣੀ ਮੇਹਰ ਕਰਾਈ।<br />
          ਦਾਸਾਂ ਕਾਰਜ ਆਪ ਸਵਾਰੇ ਇਹ ਉਸ ਦੀ ਵਡਿਆਈ॥
        </p>
        
        <h2 className="script-font text-maroon" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'normal' }}>We Cordially Invite You</h2>
        <p style={{ maxWidth: '500px', margin: '0 auto 3rem auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Together with our beloved families,<br />
          we request the honour of your gracious<br />
          presence to celebrate the wedding of
        </p>

        <div className="couple-details" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div>
            <h3 className="script-font text-maroon" style={{ fontSize: '3.5rem', margin: '0', fontWeight: 'normal' }}>Harmeet Singh</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', margin: '5px 0' }}>Son of</p>
            <p className="text-gold" style={{ fontSize: '1rem' }}>Gurwinder Singh Tuli & Kuljeet Kaur</p>
          </div>
          
          <div style={{ fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '10px 0' }}>With</div>
          
          <div>
            <h3 className="script-font text-maroon" style={{ fontSize: '3.5rem', margin: '0', fontWeight: 'normal' }}>Gurleen Kaur</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', margin: '5px 0' }}>Daughter of</p>
            <p className="text-gold" style={{ fontSize: '1rem' }}>Gurdev Singh & Satvinder Kaur</p>
          </div>
        </div>
      </div>
    </section>
  );
}
