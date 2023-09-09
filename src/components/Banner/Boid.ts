import Vector2D from './Vector2D';
import _ from 'lodash';

/** pixels */
const FLOCK_RADIUS = 40;
const ALIGNMENT_FACTOR = 0.2;
const COHESION_FACTOR = 0.04;
const REPULSION_FACTOR = 1.8;
const BOID_COLOR = '247,247,249';
const MIN_ALPHA = 0.35;
const BOID_RADIUS = 6;
const BOID_SPEED = 3;

function scale(
  number: number,
  fromLeft: number,
  fromRight: number,
  toLeft: number,
  toRight: number,
) {
  return (
    toLeft + ((number - fromLeft) / (fromRight - fromLeft)) * (toRight - toLeft)
  );
}
/**
 * Each boid experiences three forces: alignment, cohesion, and repulsion.
 * Their position ranges from 0 to 1.
 * The render function will then stretch this position to the width and height
 * of the given canvas.
 */
class Boid {
  /** Position range from (0,0) to (width, height) */
  private pos: Vector2D;
  private vel: Vector2D;
  private acc: Vector2D;
  private canvasRef: React.RefObject<HTMLCanvasElement>;

  constructor(
    x: number,
    y: number,
    canvasRef: React.RefObject<HTMLCanvasElement>,
  ) {
    this.canvasRef = canvasRef;
    this.pos = new Vector2D(x, y);
    const angle = _.random(0, 2 * Math.PI);
    this.vel = new Vector2D(Math.cos(angle), Math.sin(angle));
    this.acc = new Vector2D(0, 0);
  }

  localFlock(boids: Boid[]): Boid[] {
    return boids.filter((boid) => {
      if (boid === this) return false;
      const squareDist =
        (this.pos.x - boid.pos.x) ** 2 + (this.pos.y - boid.pos.y) ** 2;
      return squareDist < FLOCK_RADIUS ** 2;
    });
  }

  align(flock: Boid[]): Vector2D {
    const alignmentForce = new Vector2D(0, 0);
    flock.forEach((boid) => alignmentForce.add(boid.vel, true));
    return alignmentForce.setMax(2).scale(ALIGNMENT_FACTOR);
  }

  /**
   * Cohesion: the force where boids attempt to move to the "center
   * of gravity" of its local flock
   */
  cohesion(flock: Boid[]): Vector2D {
    const avg = { x: 0, y: 0 };
    for (let i = 0; i < flock.length; i++) {
      avg.x += flock[i].pos.x;
      avg.y += flock[i].pos.y;
    }
    const len = Math.sqrt(avg.x ** 2 + avg.y ** 2);
    const force = new Vector2D(
      avg.x / len - this.pos.x,
      avg.y / len - this.pos.y,
    );
    return force.setMax(2).scale(COHESION_FACTOR);
  }

  repulsion(flock: Boid[], mousePos?: Vector2D) {
    const repulsionForce = new Vector2D(0, 0);
    flock.forEach((boid) => {
      repulsionForce.x += 1 / (this.pos.x - boid.pos.x);
      repulsionForce.y += 1 / (this.pos.y - boid.pos.y);
    });
    if (
      mousePos !== undefined &&
      (this.pos.x - mousePos.x) ** 2 + (this.pos.y - mousePos.y) ** 2 <
        (4 * FLOCK_RADIUS) ** 2
    ) {
      repulsionForce.x += 10 / (this.pos.x - mousePos.x);
      repulsionForce.y += 10 / (this.pos.y - mousePos.y);
    }
    return repulsionForce.setMax(3).scale(REPULSION_FACTOR);
  }

  draw(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    mousePosRef: React.MutableRefObject<Vector2D | undefined>,
    color?: string,
  ) {
    const { width, height } = canvas;
    const angle = Math.atan2(this.vel.y, this.vel.x);
    const backAngle = Math.PI / 5;
    ctx.fillStyle = `rgba(${color ?? BOID_COLOR},${MIN_ALPHA})`;
    const mousePos = mousePosRef.current;
    if (mousePos !== undefined) {
      const squareDist =
        (this.pos.x - mousePos.x) ** 2 + (this.pos.y - mousePos.y) ** 2;
      const alpha = scale(squareDist, 0, 16 * FLOCK_RADIUS ** 2, 1, MIN_ALPHA);
      ctx.fillStyle = `rgba(${color ?? BOID_COLOR},${Math.max(
        MIN_ALPHA,
        alpha,
      )})`;
    }

    ctx.beginPath();
    ctx.moveTo(
      this.pos.x + BOID_RADIUS * Math.cos(angle),
      this.pos.y + Math.sin(angle) * BOID_RADIUS,
    );
    ctx.lineTo(
      this.pos.x + BOID_RADIUS * Math.cos(angle + Math.PI - backAngle),
      this.pos.y + BOID_RADIUS * Math.sin(angle + Math.PI - backAngle),
    );
    ctx.lineTo(
      this.pos.x + BOID_RADIUS * Math.cos(angle + Math.PI + backAngle),
      this.pos.y + BOID_RADIUS * Math.sin(angle + Math.PI + backAngle),
    );
    ctx.fill();
  }

  update(
    boids: Boid[],
    mousePosRef: React.MutableRefObject<Vector2D | undefined>,
  ) {
    const width = this.canvasRef.current?.width ?? 900;
    const height = this.canvasRef.current?.height ?? 600;
    const flock = this.localFlock(boids);
    this.acc.scale(0);
    if (flock.length > 0) {
      const forceAlign = this.align(flock);
      const forceCohesion = this.cohesion(flock);
      const forceRepulsion = this.repulsion(flock, mousePosRef.current);
      this.acc.add(forceAlign, true);
      this.acc.add(forceCohesion, true);
      this.acc.add(forceRepulsion, true);
    }

    this.vel.add(this.acc, true);
    this.vel.setLength(BOID_SPEED);
    this.pos.add(this.vel, true);

    // Loop around Horizontally
    if (this.pos.x > width) this.pos.x -= width;
    else if (this.pos.x < 0) this.pos.x += width;
    // Loop around Vertically
    if (this.pos.y > height) this.pos.y -= height;
    else if (this.pos.y < 0) this.pos.y += height;
  }
}
export default Boid;
