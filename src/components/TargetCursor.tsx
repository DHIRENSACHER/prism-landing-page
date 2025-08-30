import { useEffect, useState } from 'react';

const TargetCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-all duration-200 ease-out"
      style={{
        transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1,
      }}
    >
      {/* Outer ring */}
      <div
        className={`w-10 h-10 border-2 border-primary rounded-full transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 border-accent' : 'scale-100'
        }`}
        style={{
          animation: isHovering ? 'spin 1s linear infinite' : 'none',
        }}
      >
        {/* Corner indicators */}
        <div className="relative w-full h-full">
          {/* Top-left corner */}
          <div
            className={`absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-primary transition-all duration-300 ${
              isHovering ? 'border-accent scale-125' : ''
            }`}
            style={{
              animation: isHovering ? 'spin 0.8s linear infinite reverse' : 'none',
            }}
          />
          {/* Top-right corner */}
          <div
            className={`absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-primary transition-all duration-300 ${
              isHovering ? 'border-accent scale-125' : ''
            }`}
            style={{
              animation: isHovering ? 'spin 0.8s linear infinite reverse' : 'none',
            }}
          />
          {/* Bottom-left corner */}
          <div
            className={`absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 border-primary transition-all duration-300 ${
              isHovering ? 'border-accent scale-125' : ''
            }`}
            style={{
              animation: isHovering ? 'spin 0.8s linear infinite reverse' : 'none',
            }}
          />
          {/* Bottom-right corner */}
          <div
            className={`absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-primary transition-all duration-300 ${
              isHovering ? 'border-accent scale-125' : ''
            }`}
            style={{
              animation: isHovering ? 'spin 0.8s linear infinite reverse' : 'none',
            }}
          />
        </div>
      </div>
      
      {/* Center dot */}
      <div
        className={`absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 ${
          isHovering ? 'bg-accent scale-150' : ''
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default TargetCursor;