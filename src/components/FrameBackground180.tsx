import React, { useEffect, useRef, useState } from 'react';

interface FrameBackgroundProps {
  onFrameChange?: (frame: number) => void;
}

export const FrameBackground180: React.FC<FrameBackgroundProps> = ({ onFrameChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const totalFrames = 180;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
      const frame = Math.min(totalFrames - 1, Math.floor(progress * totalFrames));

      setCurrentFrame(frame);
      if (onFrameChange) {
        onFrameChange(frame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial trigger

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onFrameChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, width, height);

      // Base background gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0d111a');
      bgGrad.addColorStop(0.5, '#05070c');
      bgGrad.addColorStop(1, '#020305');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const frameRatio = currentFrame / (totalFrames - 1); // 0.0 to 1.0

      // 1. Draw Grid Perspective Floor
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;

      const horizonY = height * 0.45;
      const gridLines = 28;
      const fAngle = frameRatio * Math.PI * 2;

      // Vertical perspective lines fading into horizon
      for (let i = -gridLines; i <= gridLines; i++) {
        const xStart = width / 2 + (i * width) / gridLines;
        ctx.beginPath();
        ctx.moveTo(width / 2, horizonY);
        ctx.lineTo(xStart, height);
        ctx.stroke();
      }

      // Horizontal moving grid lines driven by frameRatio
      const horizontalCount = 20;
      for (let i = 0; i < horizontalCount; i++) {
        const rawY = (i / horizontalCount + (frameRatio * 2) % 1) % 1;
        const yPos = horizonY + Math.pow(rawY, 2) * (height - horizonY);
        const lineAlpha = rawY * 0.15;

        ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.lineTo(width, yPos);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Quantum Core Ring
      ctx.save();
      const centerX = width * 0.5;
      const centerY = height * 0.48;
      const coreRadius = Math.min(width, height) * (0.15 + 0.1 * Math.sin(frameRatio * Math.PI * 4));

      // Glowing outer ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 15;
      ctx.stroke();

      // Rotating inner segmented rings
      const ringSegments = 12;
      for (let r = 1; r <= 3; r++) {
        const radius = coreRadius * (0.3 * r);
        const rotOffset = fAngle * (r % 2 === 0 ? 1 : -1.5);

        ctx.beginPath();
        for (let s = 0; s < ringSegments; s++) {
          const angle = (s / ringSegments) * Math.PI * 2 + rotOffset;
          const arcLength = (Math.PI * 2) / ringSegments * 0.6;
          ctx.arc(centerX, centerY, radius, angle, angle + arcLength);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Core Energy Rays
      const rayCount = 16;
      for (let i = 0; i < rayCount; i++) {
        const rayAngle = (i / rayCount) * Math.PI * 2 + fAngle * 0.5;
        const rayLen = coreRadius * (1.2 + 0.4 * Math.sin(fAngle * 3 + i));
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(rayAngle) * rayLen,
          centerY + Math.sin(rayAngle) * rayLen
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + 0.1 * Math.sin(i + frameRatio * 10)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // 3. Floating Particles
      ctx.save();
      const particleCount = 75;
      for (let p = 0; p < particleCount; p++) {
        const pAngle = (p / particleCount) * Math.PI * 2 + frameRatio * (p % 2 === 0 ? 1.5 : -1);
        const pDist = ((p * 17 + currentFrame * 4) % (width * 0.45));
        const px = centerX + Math.cos(pAngle) * pDist;
        const py = centerY + Math.sin(pAngle) * pDist * 0.6;
        const pSize = 1.5 + (p % 3);
        const pAlpha = 0.15 + 0.4 * Math.abs(Math.sin((p + currentFrame) * 0.1));

        ctx.fillStyle = 'rgba(255, 255, 255, ' + pAlpha + ')';
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    render();

    const handleResize = () => {
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentFrame]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03050a]">
      {/* HTML5 Canvas Background Renderer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Cyber Overlay Grid & Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(3,5,10,0.85)_100%)]" 
      />
    </div>
  );
};
