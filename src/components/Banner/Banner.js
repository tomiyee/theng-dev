import React, { useState, useEffect } from 'react';
import Vector2D from './Vector2D.js';
import './Banner.css';

const BG_COLOR = "#2B2D42";
const BOID_COLOR = "rgba(247,247,249, 0.35)";
const BOID_SPEED = 10;
const BOID_RADIUS = 6;
let A_FACTOR = 0.3;
let C_FACTOR = 0.04;
let R_FACTOR = 1.4
let boids = [];
let canvas, ctx;
const FPS = 30;
const FLOCK_RADIUS = 50;
let WIDTH = 900, HEIGHT = 600;

/**
 * Banner is the banner on the home page of my portfolio. It has the flocking simulator.
 */
function Banner() {
  const canvasJsx = (<canvas className='banner-bg-canvas' width='100%' height='100%'/>);

  const NUM_BOIDS = (window.innerWidth * window.innerHeight) / (100*100) * 2
  for (let i = 0; i < NUM_BOIDS; i++) {
    const x = Math.random()*window.innerWidth;
    const y = Math.random()*window.innerHeight;
    const boid = new Boid(x, y)
    boids.push(boid);
  }


  useEffect(() => {
    /* Called upon mount */
    canvas = document.getElementsByClassName('banner-bg-canvas')[0];
    ctx = canvas.getContext('2d');
    const intervalId = setInterval(update, 1000/FPS);
    /* The function run when the <Banner> is unmounted */
    return function cleanup () {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <section className='banner'>
      {canvasJsx}
      <div className='banner-text'>Hello, I'm <span className='highlight'>Tommy Heng</span>.</div>
    </section>
  );
}

/**
 * Draws a rectangle onto the global ctx variable
 * @param {Number} x - The x coordinate
 * @param {Number} y - The y coordinate
 * @param {Number} w - The width of the rectangle
 * @param {Number} h - The height of the rectangle
 * @param {String} c - The color of the rectangle
 */
function drawRectangle(x, y, w, h, c) {
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
}

/**
 * Calculates the next position of each boid based on the localized rules
 */
function update () {
  // black background
  HEIGHT = window.innerHeight;
  WIDTH  = window.innerWidth;
  if (!canvas) return console.log('canvas DNE?');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  drawRectangle(0, 0,WIDTH, HEIGHT, BG_COLOR)
  boids.forEach((boid, i) => {
    boid.update(boids);
    boid.draw(i==0);
  });
}

class Boid {
  constructor (x, y) {
    this.position = new Vector2D (
      !isNaN(x) ? x : Math.random()*WIDTH,
      !isNaN(y) ? y : Math.random()*HEIGHT,
    );
    this.velocity = new Vector2D(Math.random()*2-1, Math.random()*2-1)
    this.velocity.setLength(BOID_SPEED);
    this.acceleration = new Vector2D(0,0);
  }

  /**
   * localFlock - Finds the subset of boids that are within FLOCK_RADIUS of this boid
   * Does NOT find the edge cases, where a boid is on the edge and could potentially
   * be influenced by one on the opposite edge.
   *
   * @param  {Boid[]} boids A list of boids
   * @return {Boid[]}       A subset of boids which are within FLOCK_RADIUS of this
   */
  localFlock (boids) {
    let local = [];
    for (let boid of boids)
      if (this.position.subtract(boid.position).length() < FLOCK_RADIUS && boid !== this)
        local.push(boid);
    return local;
  }

  /**
   * align - First force, wehre the boid will attempt to align its velocity with
   * the average of its local flock.
   *
   * @param  {Boid[]} local A list of boids local to this one
   * @return {Vector2D}       A vector repr this force's influence
   */
  align (local) {
    let force = new Vector2D(0,0);
    for (let boid of local) {
      force.add(boid.velocity, true);
    }
    force.setMax(2);
    return force.scale(A_FACTOR);
  }

  /**
   * cohesion - Second force, wehre the boid will attempt to get closer to the
   * "center of gravity" of its local flock.
   *
   * @param  {Vector2D} local A list of boids local to this one
   * @return {Vector2D}       A vector repr this force's influence
   */
  cohesion (local) {
    let avg = new Vector2D(0,0);
    for (let boid of local)
      avg.add(boid.position, true);
    avg.scale(1/local.length);
    let force = avg.subtract(this.position);
    force.setMax(2);
    return force.scale(C_FACTOR);
  }

  /**
   * repulsion - Third force, wehre the boid will attempt to get further from the
   * "center of gravity" of its local flock to prevent "collisions" or overlap
   *
   * @param  {Vector2D} local A list of boids local to this one
   * @return {Vector2D}       A vector repr this force's influence
   */
  repulsion (local) {
    let force = new Vector2D (0,0);
    for (let boid of local) {
      let displ = this.position.subtract(boid.position);
      force.x += 1 / displ.x;
      force.y += 1 / displ.y;
    }
    force.setMax(2)
    return force.scale(R_FACTOR);
  }

  draw () {
    // Center of the boid
    const x = this.position.x;
    const y = this.position.y;
    // Angle the boid is facing
    const angle = Math.atan2(this.velocity.y, this.velocity.x);
    // The angle of the front of the head
    const backAngle = Math.PI/5;

    ctx.fillStyle = BOID_COLOR;
    ctx.beginPath();
    ctx.moveTo(
      x + BOID_RADIUS * Math.cos(angle), 
      y + Math.sin(angle) * BOID_RADIUS);
    ctx.lineTo(
      x + BOID_RADIUS * Math.cos(angle + Math.PI - backAngle), 
      y + BOID_RADIUS * Math.sin(angle + Math.PI - backAngle));
    ctx.lineTo(
      x + BOID_RADIUS * Math.cos(angle + Math.PI + backAngle), 
      y + BOID_RADIUS * Math.sin(angle + Math.PI + backAngle));
    ctx.fill();

  }

  update (boids) {
    let local = this.localFlock (boids);
    if (local.length > 0){
      // Clears any existing acceleration
      this.acceleration.scale(0);
      // Calculates the sum of the three forces described above
      let forceAlign = this.align(local);
      let forceCohesion = this.cohesion (local);
      let forceRepulsion = this.repulsion (local);
      this.acceleration.add(forceAlign, true);
      this.acceleration.add(forceCohesion, true);
      this.acceleration.add(forceRepulsion, true);
      // Applies this acceleration to the boid's velocity instantaneously
      this.velocity.add(this.acceleration, true);
    }
    this.velocity.setLength(BOID_SPEED);
    this.velocity.length() < 3 && console.log(this.velocity.length())
    this.position.add(this.velocity, true);

    // Loop around Horizontally
    if (this.position.x > WIDTH)
      this.position.x -= WIDTH;
    else if (this.position.x < 0)
      this.position.x += WIDTH;
    // Loop around Vertically
    if (this.position.y > HEIGHT)
      this.position.y -= HEIGHT;
    else if (this.position.y < 0)
      this.position.y += HEIGHT;
  }
}

export default Banner;
