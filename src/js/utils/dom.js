// =============================================================================
// Init
// =============================================================================

/**
 * Init
 * -----
 * Initialise multiple instance of a JS class based on the passed selector. The
 * element is passed to the instance with, if they are defined, parameters. If
 * multiple elements are found, an array of the instances is returned. If only
 * one is found, the one instance is returned.
 *
 * Params
 * -----
 * @param {*} selector CSS Selector to select the element in the DOM
 * @param {*} jsClass Class where an instance is created from
 * @param {*} params Object with parameters to be passed to the instance
 */

const init = ({ selector = null, Module = null, params = {} } = {}) => {
	if (!selector || !Module || typeof selector !== "string" || typeof Module !== "function") {
		return null;
	}

	const els = document.querySelectorAll(selector);

	if (!els || els.length <= 0) {
		return null;
	}

	const instances = [...els].map((el) => new Module(el, params));

	return instances.length === 1
		? instances[0]
		: instances;
};

// =============================================================================
// Is in view
// =============================================================================

/**
 * Info
 * -----
 * Check if an element passed to the function is in the viewport or not.
 *
 * Params
 * -----
 * @param {*} el DOM element that should be checked, whether its in view or not
 */

const isInView = ({ el = "" } = {}) => {
	const bounding = el.getBoundingClientRect();

	return (
		bounding.top <= window.innerHeight &&
		bounding.top + bounding.height > 0
	);
};

/* ========================================================================== */
/* :: Get Bounding box  */
/* ========================================================================== */

/**
 * Info
 * -----
 * Returns the bounding box and its properties from the passed element.
 *
 * Params
 * -----
 * @param {*} el DOM element that the bounding box is retrieved from.
 */

const getElBoundingBox = (el, keys = []) => {
	if (!el) {
		return;
	}

	const bounds = el.getBoundingClientRect() || {};
	const result = {};

	if (keys.length === 0) {
		return bounds;
	}

	keys.forEach((k) => {
		if (bounds[k]) {
			result[k] = bounds[k];
		}
	});

	return keys.length === 1
		? bounds[keys[0]]
		: result;
};

// =============================================================================
// Exports
// =============================================================================
export default {
	init,
	isInView,
	getElBoundingBox,
};
