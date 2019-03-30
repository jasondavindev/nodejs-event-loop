// node myFile.js

const pendingTimers = [];
const pendingOSTaks = [];
const pendingOperations = [];

// New timers, taks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
	// Check 1: Any pending setTimeout, setInterval, setImmediate?
	// Check 2: Any pending OS tasks? (Like server listening to port)
	// Check 3: Any pending long running operations? (Like fs module)

	return pendingTimers.length || pendingOSTaks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
	/**
     * 1) Node looks at pendingTimers and sees if any functions
     * are ready to be called. setTimeout, setInterval
     */
	/**
     * 2) Node looks at pendingOSTaks and pendingOperations
     * and calls relevants callbacks
     */
	/**
     * 3) Pause execution. Continue when...
     * - a new pendingOSTaks is done
     * - a new pendingOperations is done
     * - a timer is about to complete
     */
	/**
     * 4) Look at pendingTimers. Call any setImmediate
     */
	/**
     * Handle any 'close' events
     */
}

// exit to terminal