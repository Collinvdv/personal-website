// =============================================================================
// Imports
// =============================================================================
import Emitter from "eventemitter3";

// =============================================================================
// Definition
// =============================================================================
let instance = null;

class EventEmitter extends Emitter {

	constructor() {
		super();

		if (!instance) {
			instance = this;
		}

		return instance;
	}
}

export default new EventEmitter();
