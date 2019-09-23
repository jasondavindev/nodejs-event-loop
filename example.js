test().then((value) => console.log(value));
setTimeout(() => console.log('1')); // tick 2

setTimeout(() => {
	console.log('2'); // tick 2
	setTimeout(() => console.log('3')); // tick 3
});

setImmediate(() => console.log('4')); // tick 2

process.nextTick(() => console.log('5')); // tick 1

setImmediate(() => {
	process.nextTick(() => console.log('6')); // tick 2
});

process.nextTick(() => setImmediate(() => console.log('7'))); // tick 2

function test() {
	return new Promise((resolve) => resolve('0'));
}

/**
 * saida
 * 5
 * 1
 * 2
 * 4
 * 7
 * 6
 * 3
 */

/**
 * process.nextTick insere no inicio da fila
 * setImmediate insere logo após a ultima callback de I/O
 */

/**
 * Deve-se tomar cuidado quanto ao uso de process.nextTick
 * Como nextTick é executado imediatamente após a chamada atual,
 * todos timers e setImmediate serão prorrogados, perdendo a efetividade
 * do loop.
 * Caso queira substituir funções recursivas por callback, utilize setImmediate.
 */