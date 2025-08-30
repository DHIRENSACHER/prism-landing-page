import { useEffect, useState } from 'react';

const TargetCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Main cursor dot */}
      <div
        className={`w-5 h-5 bg-white rounded-full transition-all duration-150 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
      />
      
      {/* Outer ring */}
      <div
        className={`absolute top-1/2 left-1/2 w-8 h-8 border border-white rounded-full transition-all duration-300 ${
          isClicking ? 'scale-150 opacity-60' : 'scale-100 opacity-40'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default TargetCursor;