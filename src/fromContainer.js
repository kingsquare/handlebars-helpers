/**
 *
 * @param {Object} container
 * @param {Array} nibbles
 */
var traverseNibbles = function(container, nibbles) {
	var nextNibble = nibbles.shift();
	var nextValue = container[nextNibble];

	if (nextValue && nibbles.length) {
		return traverseNibbles(nextValue, nibbles);
	}

  if (Array.isArray(nextValue)) {
    // output as string with spaces else HBS outputs the array as X,Y,Z which will not be wrapped by the browser
    return nextValue.join(', ');
  }

	return nextValue || "";
};

/**
 *
 * @param {Object} container
 * @param {string} key
 * @returns {*}
 */
module.exports = function fromContainer(container, key) {
	if (!container || !key) {
		return "";
	}

	if (container[key]) {
		return container[key];
	}

	if (key.split) {
		var nibbles = (key.split('.'));
		if (nibbles.length > 1) {
			return traverseNibbles(container, nibbles);
		}
	}
	return '';
};