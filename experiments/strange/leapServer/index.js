// index.js
'use strict';
const PORT_SOCKET = 9876;
let app    = require('express')();
let server = app.listen(PORT_SOCKET);
let io     = require('socket.io')(server);


//	OSC EMITTER

const PORT_EMIT_OSC = 8885;
const OscEmitter = require("osc-emitter");

let emitter = new OscEmitter();
emitter.add('localhost', PORT_EMIT_OSC);
emitter.add('localhost', PORT_EMIT_OSC+1);


//	WEB SOCKETS

io.on('connection', (socket)=>_onConnected(socket));

function _onConnected(socket) {
	console.log('A user is connected : ', socket.id);

	socket.on('disconnect', ()=>_onDisconnected() );

	// socket.on('virtualkeyboard', (key)=>_onKey(key));
	socket.on('leapFrame', (frame) => _onFrame(frame));
	// socket.on('leap', (numHands)=>_onLeap(numHands));
	// socket.on('clapping', (dist)=>_onClap(dist));
	// socket.on('idleStart', ()=>_onIdleStart());
	// socket.on('idleEnd', ()=>_onIdleEnd());
}

function _onFrame(frame) {
	console.log('Frame :', frame);

	io.emit('frame', frame);
}




// function _onKey(key) {
// 	console.log('On key :', key);
// 	io.emit('onVirtualKey', key);
// }


// function _onIdleStart() {
// 	console.log('on Idle start');
// 	io.emit('onIdleStart');
// }


// function _onIdleEnd() {
// 	console.log('on Idle end');
// 	io.emit('onIdleEnd');
// }


// function _onLeap(frame) {
// 	// if(Math.random() > .99) console.log('Number of hands : ', frame);

// 	io.emit('onLeap', frame);
// }

function _onDisconnected() {
	console.log(' A user has disconnected');
}


// function _onClap() {
// 	io.emit('onClap');
// }