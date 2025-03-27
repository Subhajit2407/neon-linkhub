
import React, { useEffect, useRef } from 'react';

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    };

    const drawGrid = () => {
      if (!context) return;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid settings
      const gridSize = 30;
      context.strokeStyle = '#00FF4130';
      context.lineWidth = 0.5;
      
      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
      }
    };

    // Add random "pulsing" dots at grid intersections
    const addPulsingDots = () => {
      if (!context) return;
      
      const gridSize = 30;
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);
      
      // Only draw dots at some intersections
      for (let i = 0; i < 40; i++) {
        const x = Math.floor(Math.random() * cols) * gridSize;
        const y = Math.floor(Math.random() * rows) * gridSize;
        const alpha = Math.random() * 0.5 + 0.2; // Random alpha between 0.2 and 0.7
        
        context.fillStyle = `rgba(0, 255, 65, ${alpha})`;
        context.beginPath();
        context.arc(x, y, 1.5, 0, Math.PI * 2);
        context.fill();
      }
    };

    // Animation loop
    let animationFrameId: number;
    let lastPulseTime = 0;
    
    const animate = (time: number) => {
      drawGrid();
      
      // Add pulsing dots every 500ms
      if (time - lastPulseTime > 500) {
        addPulsingDots();
        lastPulseTime = time;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 animate-grid-fade"
    />
  );
};

export default GridBackground;
