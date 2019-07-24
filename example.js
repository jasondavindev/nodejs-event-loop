// Qual a sequencia que vai ser mostrada?

setTimeout(() => console.log('1')); // tick 2

setTimeout(() => {
	console.log('2'); // tick 2
	setTimeout(() => console.log('3')); // tick 3
});

setImmediate(() => console.log('4')); // tick 2

process.nextTick(() => console.log('5'));  // tick 1

setImmediate(() => {
	process.nextTick(() => console.log('6')); // tick 2
});

process.nextTick(() => setImmediate(() => console.log('7'))); // tick 2

/**
 * Exibição
 * 5
 * 1
 * 2
 * 4
 * 7
 * 6
 * 3
 */

/**
 * Por que 6 - 7 e não 7 - 6 ?
 * nextTick é executado no final do tick atual
 * setImmediate é executado antes de nextTick
 */

/**
 * Sequencia real
 * timers
 * immediate
 * nextTick
 */