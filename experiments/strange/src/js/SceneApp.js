// SceneApp.js

// http://jsfiddle.net/PerroAZUL/zdaY8/1/

import alfrid, { Scene, GL, WebglNumber } from 'alfrid';
import Assets from './Assets';
import Settings from './Settings';
import Config from './Config';

import ARVideoRenderer from './ARVideoRenderer';
import ARUtils, { ARDisplay } from './ARUtils';

import ViewBg from './ViewBg';
import ViewRing from './ViewRing';
import ViewTest from './ViewTest';
import ViewCircle from './ViewCircle';
import ViewSquare from './ViewSquare';
import ViewStar from './ViewStars';
import State from 'object-states';

let TARGET_SERVER_IP = '192.168.1.164';
let socket = require('./lib/socket.io-client')(TARGET_SERVER_IP + ':9876');	

class SceneApp extends Scene {
	constructor() {
		Settings.init();

		super();
		this.orbitalControl.radius.setTo(0.5);

		if(!GL.isMobile) {
			this.orbitalControl.radius.value = 7;
			// this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
		}
		

		this._mHit     = mat4.create();
		this._mCenter  = mat4.create();
		this.mtx = mat4.create();
		this.mtxPalm = mat4.create();
		this.mtxScale = mat4.create();
		let s = GL.isMobile ? 0.1 : 1;

		mat4.scale(this.mtxScale, this.mtxScale, vec3.fromValues(s, s, s));

		if(ARUtils.hasARDisplay) {
			this._frameData = new VRFrameData();
			mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
			this.cameraAR = new alfrid.CameraPerspective();
			this.camera = this.cameraAR;
		} 

		this._hasClicked = false;

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));
		socket.on('frame', (frame) => this._onFrame(frame));

		this.state = new State({
			grabbed:0
		});

		this.state.grabbed.on('changed', (o)=>this._onGrabChange(o));
		
		this.angle = new alfrid.EaseNumber(0);
		this._isGrabbed = false;
		this.normalGrabbed = vec3.create();
		this.normalPalm = vec3.create();

		this.offset = new alfrid.EaseNumber(0);
	}


	_onGrabChange(grabbed) {
		// console.log('Grab changed :', o);
		if(grabbed) {
			this.angle.value = 0;
			vec3.copy(this.normalGrabbed, this.normalPalm);
			this._isGrabbed = true;
			this.offset.value = 0;
		} else {
			this.angle.value = 0;
			this._isGrabbed = false;
			this.offset.value = 1;
		}
	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._bCopy = new alfrid.BatchCopy();
		this._vTest = new ViewTest();

		if(this.ARDisplay) {
			this._vBg = new ARVideoRenderer(this.ARDisplay, GL.gl);	
		} else {
			this._vBg = new ViewBg();	
		}


		
		this._geoms = [];
		const c0 = new ViewCircle(1);
		const c1 = new ViewCircle(.8);
		const c2 = new ViewCircle(.5);
		const c3 = new ViewCircle(1.05);
		this._geoms.push(c0, c1, c2, c3);

		this.sq0 = new ViewSquare(Math.sqrt(2));
		this.sq1 = new ViewSquare(Math.sqrt(2) * .9);
		this.sq2 = new ViewSquare(Math.sqrt(2) * 0.95);


		this._geoms.push(this.sq0, this.sq1, this.sq2);


		this.star0 = new ViewStar(1, 5);
		
		this.star1 = new ViewStar(.5, 6);
		this.star2 = new ViewStar(.55, 12);
		this.star3 = new ViewStar(1, 4);
		this._geoms.push(this.star0, this.star1, this.star2, this.star3);

	}

	_onFrame(frame) {
		const { palmNormal, palmPos, palmDir } = frame;

		const FRONT = vec3.fromValues(0, 0, -1);
		let axis = vec3.create();
		vec3.cross(axis, FRONT, palmDir);
		let dotValue = vec3.dot(FRONT, palmDir);
		let angle = Math.acos(dotValue);

		let pos = vec3.clone(palmPos);
		pos[2] -= 0.1;

		mat4.identity(this.mtxPalm);
		mat4.translate(this.mtxPalm, this.mtxPalm, pos);
		mat4.rotate(this.mtxPalm, this.mtxPalm, angle, axis);

		vec3.copy(this.normalPalm, palmNormal);

		this.state.setState({
			grabbed: frame.grabStrength >= 0.9 ? 1 : 0
		});

		// console.log(this.state.grabbed._value);

		if(!this._isGrabbed) {
			dotValue = vec3.dot(this.normalPalm, this.normalGrabbed);
			angle = Math.acos(dotValue);
			if(!isNaN(angle)) {
				this.angle.value = angle;	
			}
			
			// console.log('Angle :', angle * 180 / Math.PI);
		}

		// console.log(toLog);
	}

	_onClick(e) {
		if(this._hasClicked) {
			return;
		}

		const hit = ARUtils.hitTest();
		if(hit) {
			mat4.identity(this._mHit, this._mHit);
			mat4.translate(this._mHit, this._mHit, hit.hitPosition);
			this._hasClicked = true;
		}
	}


	render() {
		GL.clear(0, 0, 0, 0);		

		ARUtils.updateCamera(this.cameraAR);
		GL.setMatrices(this.camera);


		GL.disable(GL.DEPTH_TEST);
		this._vBg.render();
		GL.enable(GL.DEPTH_TEST);

		const hit = ARUtils.hitTest();

		if(hit) {
			const {modelMatrix} = hit;
			mat4.copy(this._mCenter, modelMatrix);
			this._vRing.open();
		} else {
			this._vRing.close();
		}


		if (!this._hasClicked && this.ARDisplay) {
			GL.rotate(this._mCenter);
			this._vRing.render();	
		}

		

		mat4.mul(this.mtx, this._mHit, this.mtxPalm);
		mat4.mul(this.mtx, this.mtx, this.mtxScale);
		GL.rotate(this.mtx);
		// this._vTest.render();

		this.sq0.rotation += 0.01;
		this.sq1.rotation += 0.01;
		// this.sq2.rotation -= 0.01;
		this.sq2.rotation = this.angle.value;
		this.star1.rotation = this.angle.value * 1.5;
		this.star2.rotation = this.angle.value * 2;

		console.log('this.offset.value', this.offset.value);

		this._geoms.forEach( circle => circle.render(this.offset.value) );

		
	}


	resize() {
		const { innerWidth, innerHeight, devicePixelRatio } = window;
		GL.setSize(innerWidth * devicePixelRatio, innerHeight * devicePixelRatio);
		this.camera.setAspectRatio(GL.aspectRatio);
	}


	get ARDisplay() {
		return ARUtils.ARDisplay;
	}

}


export default SceneApp;