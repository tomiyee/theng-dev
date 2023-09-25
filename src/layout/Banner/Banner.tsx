import { useCallback, useEffect, useRef, useState } from 'react';
import Vector2D from './Vector2D.js';
import Boid from './Boid.js';
import { Typography, styled } from '@mui/material';

/**
 * The interactive banner on the home page of the portfolio. It has the flocking simulator.
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
  const [boids] = useState<Boid[]>(totalBoids);

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
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, 'hsl(204, 98%, 20%)');
      gradient.addColorStop(0.5, 'hsl(233, 21%, 25%)');
      ctx.fillStyle = gradient;
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
    <BannerSection id="banner">
      <Canvas
        ref={canvasRef}
        width="100%"
        height="100%"
        onMouseEnter={updateMousePos}
        onMouseLeave={() => (mousePos.current = undefined)}
        onMouseMove={updateMousePos}
      />
      <BannerText />
    </BannerSection>
  );
};
export default Banner;

const BannerText = () => {
  return (
    <Typography
      variant="h1"
      textAlign="center"
      sx={{
        zIndex: 1,
        fontWeight: 'bold',
        letterSpacing: '0.3rem',
        pointerEvents: 'none',
      }}
    >
      Hey, I&apos;m{' '}
      <Typography variant="h1" component="span" color="secondary.light">
        Tommy Heng
      </Typography>
    </Typography>
  );
};

const Canvas = styled('canvas')({
  position: 'absolute',
  zIndex: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
});

const BannerSection = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100vh)',
  margin: 0,
  padding: 0,
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));
