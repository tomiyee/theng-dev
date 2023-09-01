class Vector2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Adds the other vector to this vector. Unless told otherwise, will NOT override
   * this vector and will instead return a different vector.
   */
  add(other: Vector2D, override = false) {
    if (!override) return new Vector2D(this.x + other.x, this.y + other.y);
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  /** Subtracts the other vector from the current one */
  subtract(other: Vector2D, override = false) {
    if (!override) return new Vector2D(this.x - other.x, this.y - other.y);
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  /**
   * Calculates the Euclidean distance between vectors
   */
  distanceTo(other: Vector2D) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }

  /** Returns true if the values in the vectors are identical */
  equals(other: Vector2D) {
    return this.x === other.x && this.y === other.y;
  }

  /** Returns an identical vecotr with all the properties */
  copy() {
    return new Vector2D(this.x, this.y);
  }

  /** Randomly generates the x and y components */
  randomize(maxX: number, maxY: number) {
    this.x = Math.random() * maxX;
    this.y = Math.random() * maxY;
    return this;
  }

  /**
   * Finds the angle of this vector relative to a given vector,
   * beginning with the other vector and going counter-clockwise
   * until hitting the current angle
   */
  getRelativeAngle(other: Vector2D) {
    // finds the angles of the vectors relative to the horizontal
    // then subtracts these angles to get the angle of this vector
    // relative to the other vector
    const relAngle =
      (this.y > 0 ? 1 : -1) * Math.acos(this.x / this.length()) -
      (other.y > 0 ? 1 : -1) * Math.acos(other.x / other.length());
    return relAngle;
  }

  /** Determines the smallest positive angle between the two vectors */
  getAngle(other: Vector2D) {
    return Math.acos(this.dot(other) / (this.length() * other.length()));
  }

  /** Scales the values of this vector by the given scaling factor */
  scale(factor: number) {
    this.x *= factor;
    this.y *= factor;
    return this;
  }

  /** Returns the Euclidean length of the vector */
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  setLength(targetLength: number) {
    const len = Math.sqrt(this.x ** 2 + this.y ** 2);
    this.x *= targetLength / len;
    this.y *= targetLength / len;
  }

  setMax(maxLength: number) {
    const len = Math.sqrt(this.x ** 2 + this.y ** 2);
    if (len > maxLength) {
      this.x *= maxLength / len;
      this.y *= maxLength / len;
    }
  }

  /** Returns the dot product between this vector and the other */
  dot(other: Vector2D) {
    return this.x * other.x + this.y * other.y;
  }

  /** A representation of this vector */
  toString() {
    return `Vector2D <${this.x}, ${this.y}>`;
  }
}

export default Vector2D;
