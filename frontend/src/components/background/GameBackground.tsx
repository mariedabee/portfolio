import React, { useEffect, useRef } from 'react';

// Floating neon particles that link up and get pushed away by the cursor
const PARTICLE_COUNT = 120;
const LINK_DISTANCE = 140;
const CURSOR_RADIUS = 160;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const GameBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let frameId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2.5 + 1.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Soft glow that follows the cursor
      if (mouse.x > -1000) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, CURSOR_RADIUS * 1.5);
        glow.addColorStop(0, 'rgba(57, 255, 20, 0.12)');
        glow.addColorStop(1, 'rgba(57, 255, 20, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(mouse.x - CURSOR_RADIUS * 1.5, mouse.y - CURSOR_RADIUS * 1.5, CURSOR_RADIUS * 3, CURSOR_RADIUS * 3);
      }

      for (const p of particles) {
        // Push away from cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < CURSOR_RADIUS && dist > 0) {
          const force = (CURSOR_RADIUS - dist) / CURSOR_RADIUS;
          p.x += (dx / dist) * force * 4;
          p.y += (dy / dist) * force * 4;
        }

        p.x += p.vx;
        p.y += p.vy;
        // Bounce off the edges; clamp so the cursor push can't trap particles outside
        if (p.x < 0 || p.x > canvas.width) {
          p.vx = p.x < 0 ? Math.abs(p.vx) : -Math.abs(p.vx);
          p.x = Math.min(Math.max(p.x, 0), canvas.width);
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy = p.y < 0 ? Math.abs(p.vy) : -Math.abs(p.vy);
          p.y = Math.min(Math.max(p.y, 0), canvas.height);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#39ff14';
        ctx.shadowColor = '#39ff14';
        ctx.shadowBlur = 12;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            // Links near the cursor light up brighter
            const nearCursor = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) < CURSOR_RADIUS * 1.5;
            const strength = nearCursor ? 0.7 : 0.4;
            ctx.strokeStyle = `rgba(57, 255, 20, ${strength * (1 - dist / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion) frameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}
    />
  );
};

export default GameBackground;
