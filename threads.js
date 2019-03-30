process.env.UV_THREADPOOL_SIZE = 6;
const crypto = require('crypto');

const start = Date.now();

function doHash(n) {
	crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
		console.log(n, Date.now() - start);
	});
}

doHash(1);
doHash(2);
doHash(3);
doHash(4);
doHash(5);
doHash(6);
doHash(7);
doHash(8);
doHash(9);