import { useEffect, useRef } from 'react';
import Vector2D from './Vector2D.js';
import './Banner.css';

const BG_COLOR = '#2B2D42';
const MIN_ALPHA = 0.35;
const BOID_COLOR = { r: 247, g: 247, b: 249 };
const BOID_SPEED = 3;
const BOID_RADIUS = 6;
let A_FACTOR = 0.3;
let C_FACTOR = 0.04;
let R_FACTOR = 1.8;
const boids: Boid[] = [];
let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
const FLOCK_RADIUS = 40;
let WIDTH = 900,
  HEIGHT = 600;

let mouseOnCanvas = false;
let mouseX = 0,
  mouseY = 0;
/**
 * Banner is the banner on the home page of my portfolio. It has the flocking simulator.
 */
function Banner() {
  const NUM_BOIDS =
    ((window.innerWidth * window.innerHeight) / (100 * 100)) * 2;
  for (let i = 0; i < NUM_BOIDS; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const boid = new Boid(x, y);
    boids.push(boid);
  }

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    /* Called upon mount */
    if (canvasRef.current === null) return;
    ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    window.requestAnimationFrame(update);
  }, []);

  return (
    <section className="banner" id="banner">
      <canvas
        ref={canvasRef}
        className="banner-bg-canvas"
        width="100%"
        height="100%"
        onMouseEnter={() => (mouseOnCanvas = true)}
        onMouseLeave={() => (mouseOnCanvas = false)}
        onMouseMove={(e) => {
          if (!canvas) return;
          const rect = canvas.getBoundingClientRect();
          mouseX = e.clientX - rect.left;
          mouseY = e.clientY - rect.top;
        }}
      />
      <div className="banner-text">
        Hello, I'm <span className="highlight">Tommy Heng</span>.
      </div>
    </section>
  );
}

/**
 * Draws a rectangle onto the global ctx variable
 * @param x The x coordinate of the top left corner of the rectangle
 * @param y The y coordinate of the top left corner of the rectangle
 * @param w The width of the rectangle, increases to the right
 * @param h The height of the rectangle, increases downwards
 * @param c The color of the rectangle
 */
function drawRectangle(x: number, y: number, w: number, h: number, c: string) {
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
}

/**
 * Calculates the next position of each boid based on the localized rules
 */
function update() {
  // black background
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  drawRectangle(0, 0, WIDTH, HEIGHT, BG_COLOR);
  for (let i = 0; i < boids.length; i++) {
    boids[i].update(boids);
    boids[i].draw();
  }
  window.requestAnimationFrame(update);
}

class Boid {
  position: Vector2D;
  velocity: Vector2D;
  acceleration: Vector2D;

  constructor(x?: number, y?: number) {
    this.position = new Vector2D(
      x ?? Math.random() * WIDTH,
      y ?? Math.random() * HEIGHT,
    );
    const angle = Math.random() * 2 * Math.PI;
    this.velocity = new Vector2D(Math.cos(angle), Math.sin(angle));
    this.acceleration = new Vector2D(0, 0);
  }

  /**
   * localFlock - Finds the subset of boids that are within FLOCK_RADIUS of this boid
   * Does NOT find the edge cases, where a boid is on the edge and could potentially
   * be influenced by one on the opposite edge.
   *
   * @return A subset of boids which are within FLOCK_RADIUS of this
   */
  localFlock(boids: Boid[]): Boid[] {
    return boids.filter((boid) => {
      if (boid === this) return false;
      const dist = Math.sqrt(
        (this.position.x - boid.position.x) ** 2 +
          (this.position.y - boid.position.y) ** 2,
      );
      return dist < FLOCK_RADIUS;
    });
  }

  /**
   * align - First force, wehre the boid will attempt to align its velocity with
   * the average of its local flock.
   *
   * @return A vector of the aligning force's influence
   */
  align(local: Boid[]): Vector2D {
    let force = new Vector2D(0, 0);
    for (let i = 0; i < local.length; i++) {
      force.add(local[i].velocity, true);
    }
    force.setMax(2);
    return force.scale(A_FACTOR);
  }

  /**
   * cohesion - Second force, wehre the boid will attempt to get closer to the
   * "center of gravity" of its local flock.
   *
   * @return A vector of the cohesion force's influence
   */
  cohesion(local: Boid[]) {
    const avg = { x: 0, y: 0 };
    for (let i = 0; i < local.length; i++) {
      avg.x += local[i].position.x;
      avg.y += local[i].position.y;
    }
    const len = Math.sqrt(avg.x ** 2 + avg.y ** 2);
    let force = new Vector2D(
      avg.x / len - this.position.x,
      avg.y / len - this.position.y,
    );
    force.setMax(2);
    return force.scale(C_FACTOR);
  }

  /**
   * repulsion - Third force, wehre the boid will attempt to get further from the
   * "center of gravity" of its local flock to prevent "collisions" or overlap
   *
   * @return  A vector of the repulsion force's influence
   */
  repulsion(flock: Boid[]) {
    const force = new Vector2D(0, 0);
    for (let i = 0; i < flock.length; i++) {
      force.x += 1 / (this.position.x - flock[i].position.x);
      force.y += 1 / (this.position.y - flock[i].position.y);
    }
    if (
      mouseOnCanvas &&
      Math.sqrt(
        (this.position.x - mouseX) ** 2 + (this.position.y - mouseY) ** 2,
      ) <
        4 * FLOCK_RADIUS
    ) {
      force.x += 10 / (this.position.x - mouseX);
      force.y += 10 / (this.position.y - mouseY);
    }
    force.setMax(3);
    return force.scale(R_FACTOR);
  }

  draw() {
    // Angle the boid is facing
    const angle = Math.atan2(this.velocity.y, this.velocity.x);
    // The angle of the front of the head
    const backAngle = Math.PI / 5;
    // Distance to the mouse
    ctx.fillStyle = `rgba(${BOID_COLOR.r},${BOID_COLOR.g},${BOID_COLOR.b},${MIN_ALPHA})`;

    if (mouseOnCanvas) {
      const d = Math.sqrt(
        (this.position.x - mouseX) ** 2 + (this.position.y - mouseY) ** 2,
      );
      const a = (d ** 2 / (16 * FLOCK_RADIUS ** 2)) * (MIN_ALPHA - 1) + 1;
      ctx.fillStyle = `rgba(${BOID_COLOR.r},${BOID_COLOR.g},${BOID_COLOR.b},${
        a > MIN_ALPHA ? a : MIN_ALPHA
      })`;
    }
    ctx.beginPath();
    ctx.moveTo(
      this.position.x + BOID_RADIUS * Math.cos(angle),
      this.position.y + Math.sin(angle) * BOID_RADIUS,
    );
    ctx.lineTo(
      this.position.x + BOID_RADIUS * Math.cos(angle + Math.PI - backAngle),
      this.position.y + BOID_RADIUS * Math.sin(angle + Math.PI - backAngle),
    );
    ctx.lineTo(
      this.position.x + BOID_RADIUS * Math.cos(angle + Math.PI + backAngle),
      this.position.y + BOID_RADIUS * Math.sin(angle + Math.PI + backAngle),
    );
    ctx.fill();
  }

  update(boids: Boid[]) {
    const local = this.localFlock(boids);
    if (local.length > 0) {
      // Clears any existing acceleration
      this.acceleration.scale(0);
      // Calculates the sum of the three forces described above
      let forceAlign = this.align(local);
      let forceCohesion = this.cohesion(local);
      let forceRepulsion = this.repulsion(local);
      this.acceleration.add(forceAlign, true);
      this.acceleration.add(forceCohesion, true);
      this.acceleration.add(forceRepulsion, true);

      // Applies this acceleration to the boid's velocity instantaneously
      this.velocity.add(this.acceleration, true);
    }

    this.velocity.setLength(BOID_SPEED);
    this.position.add(this.velocity, true);

    // Loop around Horizontally
    if (this.position.x > WIDTH) this.position.x -= WIDTH;
    else if (this.position.x < 0) this.position.x += WIDTH;
    // Loop around Vertically
    if (this.position.y > HEIGHT) this.position.y -= HEIGHT;
    else if (this.position.y < 0) this.position.y += HEIGHT;
  }
}

export default Banner;
