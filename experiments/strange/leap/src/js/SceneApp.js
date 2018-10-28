// SceneApp.js

import alfrid, { Scene, GL } from 'alfrid';
import Assets from './Assets';
import Settings from './Settings';
import Config from './Config';
import Leap from 'leapjs';

let TARGET_SERVER_IP = 'localhost';
let socket = require('./lib/socket.io-client')(TARGET_SERVER_IP + ':9876');

class SceneApp extends Scene {
	constructor() {
		Settings.init();

		super();
		this.resize();
		GL.enableAlphaBlending();
		// this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
		this.orbitalControl.radius.value = 10;

		var controllerOptions = {};

		Leap.loop({}, frame => this._onFrame(frame));


		this.posPalm = vec3.create();
		this.palmDir = vec3.create();
		this.palmNormal = vec3.create();
	}

	_initTextures() {
		console.log('init textures');
	}


	_initViews() {
		console.log('init views');

		this._bCopy = new alfrid.BatchCopy();
		this._bAxis = new alfrid.BatchAxis();
		this._bDots = new alfrid.BatchDotsPlane();
		this._bBall = new alfrid.BatchBall();

		this._bLine = new alfrid.BatchLine();
	}


	_onFrame(frame) {
		if(frame.hands.length == 0) {
			this._hand = null;
			return;
		}


		const handRight = frame.hands.filter( hand => hand.type === 'right')[0];

		console.log('handRight', handRight);

		if(!handRight) {
			vec3.set(this.posPalm, 899, 999, 999);
			return;
		}

		const scale = 0.001;
		const useStablized = true;
		const posPalm = useStablized ? handRight.stabilizedPalmPosition : handRight.palmPosition;
		vec3.scale(this.posPalm, posPalm, scale);

		vec3.copy(this.palmDir, handRight.direction);
		vec3.copy(this.palmNormal, handRight.palmNormal);

		// socket.emit('leapFrame', {
		// 	indexFingerLeft:this._indexFingerLeft,
		// 	indexFingerRight:this._indexFingerRight,
		// 	thumbLeft:this._thumbLeft,
		// 	thumbRight:this._thumbRight,
		// 	handRight
		// });

		console.log('Grab :', handRight.grabStrength);

		socket.emit('leapFrame', {
			grabStrength:handRight.grabStrength,
			palmNormal:handRight.palmNormal,
			palmDir:handRight.direction,
			palmPos:this.posPalm
		});
	}


	render() {
		GL.clear(0, 0, 0, 0);

		this._bAxis.draw();
		this._bDots.draw();


		let s = .05;
		this._bBall.draw(this.posPalm, [s, s, s], [1, 1, 1])

		const posDir = vec3.clone(this.palmDir);
		vec3.add(posDir, posDir, this.posPalm);

		const posNormal = vec3.clone(this.palmNormal);
		vec3.add(posNormal, posNormal, this.posPalm);

		this._bBall.draw(posDir, [s, s, s], [1, 0, 0]);
		this._bBall.draw(posNormal, [s, s, s], [0, 0, 1]);
	}


	resize() {
		const { innerWidth, innerHeight, devicePixelRatio } = window;
		GL.setSize(innerWidth, innerHeight);
		this.camera.setAspectRatio(GL.aspectRatio);
	}
}


export default SceneApp;