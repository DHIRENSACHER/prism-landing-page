import { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
}

const DotGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      const { innerWidth, innerHeight } = window;
      setDimensions({ width: innerWidth, height: innerHeight });
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Initialize dots
    const spacing = 30;
    const dots: Dot[] = [];
    
    for (let x = spacing; x < dimensions.width; x += spacing) {
      for (let y = spacing; y < dimensions.height; y += spacing) {
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0,
          opacity: 0.3,
          size: 2,
        });
      }
    }
    
    dotsRef.current = dots;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      
      // Create ripple effect
      dotsRef.current.forEach((dot) => {
        const dx = dot.originalX - clickX;
        const dy = dot.originalY - clickY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          dot.vx += (dx / distance) * force * 8;
          dot.vy += (dy / distance) * force * 8;
          dot.opacity = Math.min(1, dot.opacity + force);
          dot.size = Math.min(4, dot.size + force * 2);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      dotsRef.current.forEach((dot) => {
        // Mouse interaction
        const dx = dot.originalX - mouseX;
        const dy = dot.originalY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          dot.vx += (dx / distance) * force * 0.5;
          dot.vy += (dy / distance) * force * 0.5;
          dot.opacity = Math.min(0.8, 0.3 + force * 0.5);
        }

        // Apply velocity
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Return to original position
        const returnForceX = (dot.originalX - dot.x) * 0.05;
        const returnForceY = (dot.originalY - dot.y) * 0.05;
        dot.vx += returnForceX;
        dot.vy += returnForceY;

        // Damping
        dot.vx *= 0.9;
        dot.vy *= 0.9;

        // Reset opacity and size
        dot.opacity = Math.max(0.1, dot.opacity - 0.01);
        dot.size = Math.max(1, dot.size - 0.02);

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(77, 68%, 77%, ${dot.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default DotGrid;