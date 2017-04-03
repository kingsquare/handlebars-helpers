'use strict';

/**
 * Generate a random number between two values
 *
 * @param  {Number} `min`
 * @param  {Number} `max`
 * @return {Sring}
 */
module.exports = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
