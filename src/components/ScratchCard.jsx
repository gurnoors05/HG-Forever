import { useRef, useEffect, useState } from 'react';
import './ScratchCard.css';

export default function ScratchCard() {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300; // Heart aspect ratio

    // Create a shiny gold foil gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#C29B4F');
    gradient.addColorStop(0.2, '#E8D388');
    gradient.addColorStop(0.5, '#D4AF37');
    gradient.addColorStop(0.8, '#F9E596');
    gradient.addColorStop(1, '#B08833');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw some random "sparkles" (little bright dots) into the canvas foil
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#FFFFFF' : '#FFF3B0';
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width, 
        Math.random() * canvas.height, 
        Math.random() * 1.5, 
        0, 
        Math.PI * 2
      );
      ctx.fill();
    }

    // Make drawing act as an eraser
    ctx.globalCompositeOperation = 'destination-out';

  }, []);

  const getPointerPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const scratch = (e) => {
    if (!isDrawing.current || isRevealed) return;
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getPointerPos(e);
    
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2); // Slightly larger brush
    ctx.fill();
    
    checkReveal();
  };

  const checkReveal = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // To optimize, we check a smaller portion of pixels, or check every Nth pixel
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
    const totalPixels = imageData.data.length / 4;

    for (let i = 3; i < imageData.data.length; i += 16) { // Check every 4th pixel to be faster
      if (imageData.data[i] === 0) {
        transparentPixels++;
      }
    }

    // Reveal after scratching roughly 25% of the heart
    if (transparentPixels / (totalPixels / 4) > 0.25) {
      setIsRevealed(true);
    }
  };

  return (
    <section className="section-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>A Special Surprise</p>
      <h2 className="text-maroon" style={{ fontSize: '1.5rem', marginBottom: '3rem', letterSpacing: '2px', fontWeight: 'normal', textTransform: 'uppercase', textAlign: 'center' }}>
        Scratch the heart to reveal our wedding date
      </h2>
      
      {/* Heart wrapper using CSS mask */}
      <div style={{ 
        position: 'relative', 
        width: '300px', 
        height: '300px', 
        maskImage: 'radial-gradient(circle at 60% 40%, transparent 10%, transparent 0), radial-gradient(circle at 40% 40%, transparent 10%, transparent 0), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'black\'><path d=\'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\'/></svg>")',
        maskSize: '100% 100%',
        maskRepeat: 'no-repeat',
        WebkitMaskImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'black\'><path d=\'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\'/></svg>")',
        WebkitMaskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
      }}>
        
        {/* Hidden content underneath */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
          <h3 className="script-font text-maroon" style={{ fontSize: '3rem', margin: 0, marginTop: '-20px' }}>15th November</h3>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', letterSpacing: '4px', margin: '5px 0 0 0' }}>2026</p>
        </div>

        {/* The scratchable canvas on top */}
        <canvas
          ref={canvasRef}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            zIndex: 2, 
            cursor: 'pointer',
            transition: 'opacity 1.5s ease-out',
            opacity: isRevealed ? 0 : 1,
            pointerEvents: isRevealed ? 'none' : 'auto'
          }}
          onMouseDown={() => { isDrawing.current = true; }}
          onMouseUp={() => { isDrawing.current = false; }}
          onMouseLeave={() => { isDrawing.current = false; }}
          onMouseMove={scratch}
          onTouchStart={() => { isDrawing.current = true; }}
          onTouchEnd={() => { isDrawing.current = false; }}
          onTouchMove={(e) => { e.preventDefault(); scratch(e); }}
        />

        {/* Post-reveal golden sparkles animation */}
        {isRevealed && (
          <div className="reveal-sparkles">
            <span className="sparkle s1">✨</span>
            <span className="sparkle s2">✨</span>
            <span className="sparkle s3">✨</span>
            <span className="sparkle s4">✨</span>
            <span className="sparkle s5">✨</span>
          </div>
        )}
      </div>

      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', transition: 'opacity 0.5s', opacity: isRevealed ? 0 : 1 }}>Scratch to reveal! ✨</p>
    </section>
  );
}
