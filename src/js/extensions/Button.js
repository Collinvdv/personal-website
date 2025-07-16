// =============================================================================
// Definition
// =============================================================================
class Button {

	// Constructor
	// -------------------------------------------------------------------------
	constructor(el, {
		clickCb = () => null,
	} = {}) {
		this.el = el;
		this.clickCb = clickCb;

		this.initEvents();
	}

	// Inits
	// -------------------------------------------------------------------------
	initEvents() {
		this.el.addEventListener("click", (e) => this.handleClick(e));
	}

	// Handlers
	// -------------------------------------------------------------------------
	handleClick(e) {
		if (e) {
			e.preventDefault();
		}

		if (this.clickCb) {
			this.clickCb();
		}
	}

	// Life cycle
	// -------------------------------------------------------------------------
	destroy() {
		this.el.removeEventListener("click", (e) => this.handleClick(e));
	}
}

export default Button;
