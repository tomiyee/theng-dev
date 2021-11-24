
/**
 * A Simple Vector
 */
 class Vector2D {


  constructor (x, y) {
    this.dimensions = 2;
    this.x = x;
    this.y = y;
  }

  /**
   * Adds the other vector to this vector. Unless told otherwise, will NOT override
   * this vector and will instead return a different vector.
   *
   * @param {Vector} other - The second vector
   * @param {Boolean} [override] - false by default, if true, will override this vector's values
   * @ returns {Vector} Returns a new vector with the result of the addition, otherwise returns this
   */
  add (other, override) {

    if (!override) 
      return new Vector2D(this.x + other.x, this.y + other.y);
    this.x += other.x;
    this.y += other.y;
    return this;
  }



  /**
   * Subtracts the other vector from the current one
   *
   * @param  {Vector} other - The other vector
   * @param  {type} [override] - Default falseIf true, overr
   * @return {Vector} A new vector that is the result of subtraction.
   */
  subtract (other, override) {
    if (!override) 
      return new Vector2D(this.x - other.x, this.y - other.y);
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }



  /**
   * Calculates the Euclidean distance between vectors
   * @param {Vector(this.y - other.y) ** 2} other - The other vector
   * @returns {number} distance between the two vectors
   */
  distanceTo(other) {
    return Math.sqrt((this.x - other.x)**2 + (this.y - other.y)**2);
  }

  /**
   * Returns true if the values in the vectors are identical
   * @param {Vector} other - The other vector
   * @returns {Boolean} true if the vectors are the same, false otherwise
   */
  equals (other){
    return this.x === other.x && this.y === other.y;
  }

  /**
   * Returns an identical vecotr with all the properties
   * @returns {Vector2D} a copy of this vector
   */
  copy () {
    return new Vector2D(this.x, this.y);
  }

  /**
   * Randomly generates the x and y components
   * @param {number} maxX - The maximum value for the x component to take
   * @param {number} maxY - The maximum value for the y component to take
   * @returns {Vector2D} This vector for chaining
   */
  randomize (maxX, maxY) {
    this.x = Math.random() * maxX;
    this.y = Math.random() * maxY;
    return this;
  }

  /**
   * Finds the angle of this vector relative to a given vector,
   * beginning with the other vector and going counter-clockwise
   * until hitting the current angle
   *
   * @param  {Vector2D} other - The other vector
   * @return {Number} The relative angle in radians
   */
  getRelativeAngle(other) {
    // finds the angles of the vectors relative to the horizontal
    // then subtracts these angles to get the angle of this vector
    // relative to the other vector
    const relAngle = (this.y > 0 ? 1 : -1) * Math.acos(this.x/this.length()) -
                     (other.y > 0 ? 1 : -1) * Math.acos(other.x/other.length());
    return relAngle;
  }

  /**
   * Determines the smallest positive angle between the two vectors
   *
   * @param  {Vector2D} other - The other vector
   * @return {Number} the angle between the vectors in radians
   */
  getAngle(other) {
    return Math.acos(this.dot(other)/(this.length()*other.length()))
  }

  /**
   * Scales the values of this vector by the given scaling factor
   * @param {Number} factor - The magnitude to be scaled
   * @returns {Vector} This vector
   */
  scale (factor) {
    this.x *= factor;
    this.y *= factor;
    return this;
  }

  /**
   * Returns the Euclidean length of the vector
   * 
   * @returns {number} The length of the vector
   */
  length () {
    return Math.sqrt( this.x**2 + this.y**2 );
  }

  setLength (l) {
    this.scale(l/this.length());
  }

  setMax (l) {
    if (this.length() > l)
      this.setLength(l)
  }


  /**
   * Returns the dot product between this vector and the other
   * @param {Vector2D} other - the other vector to be dot product-ing(?)
   * @returns {number} The dot product of the two 2D vectors
   */
  dot (other) {
    return this.x*other.x+this.y*other.y;
  }

  /**
   * @returns {String}  A representation of this vector
   */
  toString () {
    return `Vector2D <${this.x}, ${this.y}>`
  }
}

export default Vector2D