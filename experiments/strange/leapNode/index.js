// index.js

const PORT_SOCKET = 9876;
let app    = require('express')();
let server = app.listen(PORT_SOCKET);
let io     = require('socket.io')(server);
const Leap = require('leapjs');


Leap.loop( frame => onFrame(frame));
console.log('Leap :', Leap);
io.on('connection', (socket)=>_onConnected(socket));

const nameMap = ["thumb", "index", "middle", "ring", "pinky"];

function onFrame(frame) {
	const handRight = frame.hands.filter( hand => hand.type === 'right')[0];
	const handLeft = frame.hands.filter( hand => hand.type === 'left')[0];

	const output = {};

	if(handRight) {
		const fingers = handRight.fingers.map( finger => {
			return {
				tipPosition:finger.tipPosition,
				extended:finger.extended,
				fingerName:nameMap[finger.type],
				type:finger.type
			};
		});

		output.handRight = {
			palmPosition:handRight.palmPosition,
			fingers
		}
	}

	if(handLeft) {
		const fingers = handLeft.fingers.map( finger => {
			return {
				tipPosition:finger.tipPosition,
				extended:finger.extended,
				fingerName:nameMap[finger.type],
				type:finger.type
			};
		});

		output.handLeft = {
			palmPosition:handLeft.palmPosition,
			fingers
		}
	}

	console.log('on frame :');

	io.emit('leapFrame', output);
	// console.log('Hand right :', handRight);
	// console.log('Hand right :', handLeft);
}




function _onConnected(socket) {
	console.log('A user is connected : ', socket.id);

	socket.on('disconnect', ()=>_onDisconnected() );
}


function _onDisconnected() {
	console.log(' A user has disconnected');
}
