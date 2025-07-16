// =============================================================================
// Definition
// =============================================================================
class Toggle {

	// Constructor
	// -------------------------------------------------------------------------
	constructor({
		el = "",
		toggleClass = "",
	} = {}) {
		this.el = el;
		this.toggleClass = toggleClass;

		this.isToggled = this.el.classList.contains(this.toggleClass);
	}

	// Handlers
	// -------------------------------------------------------------------------
	toggle(e = null) {
		if (e) {
			e.preventDefault();
		}

		this.isToggled = !this.isToggled;

		if (this.isToggled) {
			this.enable();
		} else {
			this.disable();
		}
	}

	enable() {
		this.el.classList.add(this.toggleClass);

		this.isToggled = true;
	}

	disable() {
		this.el.classList.remove(this.toggleClass);

		this.isToggled = false;
	}
}

export default Toggle;
