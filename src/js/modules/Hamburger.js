// =============================================================================
// Imports
// =============================================================================
import { Toggle } from "./../extensions";
import { EventEmitter } from "./../managers";

// =============================================================================
// Definition
// =============================================================================
class Hamburger extends Toggle {

	// Constructor
	// -------------------------------------------------------------------------
	constructor(el) {
		super({
			el,
			toggleClass: "is-closed",
		});

		this.initEvents();
	}

	// Inits
	// -------------------------------------------------------------------------
	initEvents() {
		this.el.addEventListener("click", (e) => this.handleClick(e));
		EventEmitter.on("js-header-mobile:disabled", () => super.disable());
	}

	// Handlers
	// -------------------------------------------------------------------------
	handleClick(e = {}) {
		if (e) {
			e.preventDefault();
		}

		this.toggle();

		// emit event open nav
		EventEmitter.emit("js-header:toggle-mobile");
	}

	toggle() {
		super.toggle();

		if (this.isToggled) {
			this.el.setAttribute("aria-expanded", true);
		} else {
			this.el.setAttribute("aria-expanded", false);
		}
	}

	// Life cycle
	// -------------------------------------------------------------------------
	destroy() {
		this.el.removeEventListener("click", (e) => this.handleClick(e));
	}
}

export default Hamburger;
