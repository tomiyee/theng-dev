import { useCallback, useEffect, useRef, useState } from 'react';
import Vector2D from './Vector2D.js';
import './Banner.css';
import Boid from './Boid';

const BG_COLOR = '#2B2D42';
/**
 * Banner is the banner on the home page of my portfolio. It has the flocking simulator.
 */
const Banner: React.FC = () => {
  const mousePos = useRef<Vector2D>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const width = window.innerWidth;
  const height = window.innerHeight;
  /** In units of boids per square pixel */
  const averageDensity = 2 / (100 * 100);
  const numBoids = width * height * averageDensity;
  const totalBoids = [];
  for (let i = 0; i < numBoids; i++) {
    totalBoids.push(
      new Boid(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        canvasRef,
      ),
    );
  }
  const [boids, ] = useState<Boid[]>(totalBoids);

  useEffect(() => {
    if (canvasRef.current === null) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let stopAnimation = false;
    const update = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      boids.forEach((boid) => {
        boid.update(boids, mousePos);
        boid.draw(canvas, ctx, mousePos);
      });
      if (stopAnimation) return;
      window.requestAnimationFrame(update);
    };
    window.requestAnimationFrame(update);
    return () => {
      stopAnimation = true;
    };
  }, [boids]);

  const updateMousePos: React.MouseEventHandler = useCallback((e) => {
    if (mousePos.current === undefined) mousePos.current = new Vector2D(0, 0);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect === undefined) return;
    mousePos.current.x = e.clientX - rect.left;
    mousePos.current.y = e.clientY - rect.top;
  }, []);

  return (
    <section className="banner" id="banner">
      <canvas
        ref={canvasRef}
        className="banner-bg-canvas"
        width="100%"
        height="100%"
        onMouseEnter={updateMousePos}
        onMouseLeave={() => (mousePos.current = undefined)}
        onMouseMove={updateMousePos}
      />
      <div className="banner-text">
        Hello, I&apos;m <span className="highlight">Tommy Heng</span>.
      </div>
    </section>
  );
};
export default Banner;
