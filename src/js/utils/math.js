// =============================================================================
// Map */
// =============================================================================

/**
 * Info
 * -----
 * Function that maps a passed value between a certain range and converts it to
 * a value between another range.
 *
 * Params
 * -----
 * @param {*} value The value that should get converted
 * @param {*} low1 The start of the range for the original value
 * @param {*} high1 The end of the range for the original value
 * @param {*} low2 The start of the new range
 * @param {*} high2 The end of the new range
 */

const map = (value, low1, high1, low2, high2) => low2 + (high2 - low2) * (value - low1) / (high1 - low1);

// =============================================================================
// Randombetween */
// =============================================================================

/**
 * Info
 * -----
 * Function that generates a random value between a certain range.
 *
 * Params
 * -----
 * @param {*} min The minimum value from which the random number will be
 * generated.
 * @param {*} max The maximum value from which the random number will be
 * generated.
 */

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// =============================================================================
// Exports */
// =============================================================================
export default {
	map,
	randomBetween,
};
