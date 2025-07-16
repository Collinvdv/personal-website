/**
 * Imports
 * =============================================================================
 */

import {
	Hamburger,
	Slideshow,
} from "./modules";

import { dom } from "./utils";
import { Document } from "./managers";

/**
 * Main initialise
 * initialise the different components for the general styleguide
 * =============================================================================
 */

/*
* These functions will wait until the dom is ready
*/
const initDocument = () => {
	dom.init({ selector: ".js-hamburger", Module: Hamburger });
	dom.init({ selector: ".js-slideshow", Module: Slideshow });
};

/**
 * Execute main initialise when the Document is ready
 * =============================================================================
 */
(() => {
	Document.handleReadyState(initDocument);
})();
