// =============================================================================
// Imports
// =============================================================================
import Item from "./Item";

// =============================================================================
// Definition
// =============================================================================
class Slideshow {

	// Constructor
	// -------------------------------------------------------------------------
	constructor(el) {
		this.el = el;

		this.initBinds();
		this.init();
		this.initEvents();
	}

	// Inits
	// -------------------------------------------------------------------------
	init() {
		this.active = 0;
		this.items = this.initItems();
	}

	initBinds() {
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	initEvents() {
		if (this.items.length > 1) {
			setInterval(this.handleNext, 5000);
		}
	}

	initItems() {
		const els = this.el.querySelectorAll(".c-slideshow__item");
		const result = [];

		for (let i = 0; i < els.length; i++) {
			const el = els[i];

			result.push(new Item(el, {
				index: i,
				prevCb: this.handlePrev,
				nextCb: this.handleNext,
			}));
		}

		return result;
	}

	// Handlers
	// -------------------------------------------------------------------------
	handlePrev() {
		this.items[this.active].disable();

		this.active = this.active <= 0
			? this.items.length - 1
			: this.active - 1;

		this.items[this.active].enable();
	}

	handleNext() {
		this.items[this.active].disable();

		this.active = this.active >= this.items.length - 1
			? 0
			: this.active + 1;

		this.items[this.active].enable();
	}

	handleClickItem(index) {
		this.active = index;
	}
}

export default Slideshow;
