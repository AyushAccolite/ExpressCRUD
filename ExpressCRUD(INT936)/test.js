//console.log('This is index file');
// console.log(__filename);
// console.log(__dirname);

// console.log(module);
// module.exports = exports;

// // IIFE

// // (function(__filename, __dirname, exports, module, require) {

// // });
// const logger = require('./logger');

// logger.test();
// logger.log();

// const fs = require('fs').promises;

//const value = fs.readFileSync('./hello.txt', 'utf-8');

// async function hello() {
// 	const value = await fs.readFile('./hello.txt', 'utf-8');
// 	console.log(value);
// }
// hello();

// console.log('EOF');

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('somethingHappend', (...args) => {
// 	console.log(args);
// });

// emitter.emit('somethingHappend', 1, 2, 3);

// const http = require('http');

// const server = http.createServer((req, res) => {
// 	console.log(req, res);
// 	if (req.url === '/') {
// 		res.write('Hello World');
// 		res.end();
// 	}
// 	if (req.url === '/api/courses') {
// 		res.write(JSON.stringy(['JS']));
// 		res.end();
// 	}
// });

// server.on('connection', () => console.log('New Connection'));

// server.listen(4000);

const express = require("express");
const app = express();

// app.get('/', (req, res) => {
// 	res.send('Hello World');
// });

const courses = ["Javascrip", "Node JS", "Angular"];
const fs = require("fs").promises;

app.get("/", (req, res) => {
  async function htmlRead() {
    const html = await fs.readFile("./index.html", "utf-8");
    res.send(html);
  }
  htmlRead();
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id/:value", (req, res) => {
  res.send(req.params);
});

app.listen(4000, () => console.log("Connection started"));
