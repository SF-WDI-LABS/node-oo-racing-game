/**
 * Creates a new Child.
 * @constructor Child
 * @param {object} config
 *   - @attribute {string} name
 *   - @attribute {integer} age
 */

function Child(config){
  this.name = config.name || "";
  this.age = config.age || 0;
  this._energyLevel = 2; /* @private {integer} _energyLevel */
}

/**
 * @method hasEnergy
 * checks current energy level is greater than zero
 * @return {boolean}
 */
Child.prototype.hasEnergy = function(){

}

/**
 * @method jump
 * decrements the child's energy level by 1 (unless they are already at zero).
 * @return {boolean} --> indicating whether or not the child jumped
*/
Child.prototype.jump = function(){

}

/**
  @method takeNap
  replenishes the child's energy level back to two (but only if the child has zero energy)
  @return {boolean} --> indicating that the nap occured
*/
Child.prototype.takeNap = function(){

}



module.exports = Child;
