// process.env.UV_THREADPOOL_SIZE = 6;

const { request } = require('http');
const { pbkdf2 } = require('crypto');
const fs = require('fs');

const start = Date.now();

function doHash(n) {
	pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
		console.log(n, 'hash', Date.now() - start);
	});
}

function doRequest() {
	request('http://www.google.com', (res) => {
		res.on('data', () => {});
		res.on('end', () => console.log('request', Date.now() - start));
	}).end();
}

function readFile() {
	fs.readFile('./event_loop.js', 'utf-8', () => console.log('fs', Date.now() - start));
}

doRequest();
readFile();
doHash(1);
doHash(2);
doHash(3);
doHash(4);
