// =============================================================================
// Imports
// =============================================================================
import { Toggle } from "./../../extensions";

// =============================================================================
// Definition
// =============================================================================
class Item extends Toggle {

	constructor(el, {
		index,
		prevCb = () => null,
		nextCb = () => null,
	}) {
		super({
			el,
			toggleClass: "is-active",
		});

		this.el = el;
		this.prevCb = prevCb;
		this.nextCb = nextCb;
		this.index = index;

		this.initBinds();
		this.init();
		this.initEvents();
	}

	// Inits
	// -------------------------------------------------------------------------
	initBinds() {
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	init() {
		this.prev = this.el.querySelector(".c-slideshow__navigator--prev");
		this.next = this.el.querySelector(".c-slideshow__navigator--next");
	}

	initEvents() {
		this.prev.addEventListener("click", this.handlePrev);
		this.next.addEventListener("click", this.handleNext);
	}

	// Handlers
	// -------------------------------------------------------------------------
	handlePrev(e) {
		if (e) {
			e.preventDefault();
		}

		this.prevCb();
	}

	handleNext(e) {
		if (e) {
			e.preventDefault();
		}

		this.nextCb();
	}
}

export default Item;
