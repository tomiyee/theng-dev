/**
 * A Simple Vector
 */
class Vector2D {
  x: number;
  y: number;
  readonly dimensions = 2;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Adds the other vector to this vector. Unless told otherwise, will NOT override
   * this vector and will instead return a different vector.
   *
   * @param other - The second vector
   * @param override - false by default, if true, will override this vector's values
   * @ returns {Vector} Returns a new vector with the result of the addition, otherwise returns this
   */
  add(other: Vector2D, override?: boolean): Vector2D {
    if (!override) return new Vector2D(this.x + other.x, this.y + other.y);
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  subtract(other: Vector2D, override?: boolean): Vector2D {
    if (!override) return new Vector2D(this.x - other.x, this.y - other.y);
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  /**
   * Calculates the Euclidean distance between vectors
   * @param {Vector} other - The other vector
   * @returns {number} distance between the two vectors
   */
  distanceTo(other: Vector2D): number {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }

  /**
   * Returns true if the values in the vectors are identical
   * @param other - The other vector
   * @returns true if the vectors are the same, false otherwise
   */
  equals(other: Vector2D): boolean {
    return this.x === other.x && this.y === other.y;
  }

  /** @returns a copy of this vector  */
  copy(): Vector2D {
    return new Vector2D(this.x, this.y);
  }

  /**
   * Randomly generates the x and y components
   * @param maxX - The maximum value for the x component to take
   * @param maxY - The maximum value for the y component to take
   * @returns  This vector for chaining
   */
  randomize(maxX: number, maxY: number): Vector2D {
    this.x = Math.random() * maxX;
    this.y = Math.random() * maxY;
    return this;
  }

  /**
   * Finds the angle of this vector relative to a given vector,
   * beginning with the other vector and going counter-clockwise
   * until hitting the current angle
   *
   * @param other - The other vector
   * @return The relative angle in radians
   */
  getRelativeAngle(other: Vector2D): number {
    // finds the angles of the vectors relative to the horizontal
    // then subtracts these angles to get the angle of this vector
    // relative to the other vector
    const relAngle =
      (this.y > 0 ? 1 : -1) * Math.acos(this.x / this.length()) -
      (other.y > 0 ? 1 : -1) * Math.acos(other.x / other.length());
    return relAngle;
  }

  /**
   * Determines the smallest positive angle between the two vectors
   *
   * @param other - The other vector
   * @return the angle between the vectors in radians
   */
  getAngle(other: Vector2D): number {
    return Math.acos(this.dot(other) / (this.length() * other.length()));
  }

  /**
   * Scales the values of this vector by the given scaling factor
   * @param factor - The magnitude to be scaled
   * @returns This vector
   */
  scale(factor: number): Vector2D {
    this.x *= factor;
    this.y *= factor;
    return this;
  }

  /** @returns The Euclidean len of the vector */
  length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  setLength(l: number): Vector2D {
    const len = Math.sqrt(this.x ** 2 + this.y ** 2);
    this.x *= l / len;
    this.y *= l / len;
    return this;
  }

  setMax(l: number): Vector2D {
    const len = Math.sqrt(this.x ** 2 + this.y ** 2);
    if (len > l) {
      this.x *= l / len;
      this.y *= l / len;
    }
    return this;
  }

  /**
   * Returns the dot product between this vector and the other
   * @param {Vector2D} other - the other vector to be dot product-ing(?)
   * @returns {number} The dot product of the two 2D vectors
   */
  dot(other: Vector2D): number {
    return this.x * other.x + this.y * other.y;
  }

  /** @returns A string repr of this vector */
  toString(): string {
    return `Vector2D <${this.x}, ${this.y}>`;
  }
}

export default Vector2D;
