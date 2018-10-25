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
import ViewBelt from './ViewBelt';

class SceneApp extends Scene {
	constructor() {
		if(!GL.isMobile) {
			Settings.init();	
		}
		

		super();
		this.orbitalControl.radius.setTo(0.5);

		if(!GL.isMobile) {
			this.orbitalControl.radius.setTo(5.5);			
			this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.8;
		}
		

		this._mHit     = mat4.create();
		this._mCenter  = mat4.create();
		this._mtx      = mat4.create();
		this._mtxScale = mat4.create();

		let s = GL.isMobile ? 0.05 : 1.0;
		mat4.scale(this._mtxScale, this._mtxScale, vec3.fromValues(s, s, s));

		if(ARUtils.hasARDisplay) {
			this._frameData = new VRFrameData();
			mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
			this.cameraAR = new alfrid.CameraPerspective();
			this.camera = this.cameraAR;
		} 

		this._hasClicked = false;

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));
	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._bCopy = new alfrid.BatchCopy();
		this._vBelt = new ViewBelt();

		if(this.ARDisplay) {
			this._vBg = new ARVideoRenderer(this.ARDisplay, GL.gl);	
		} else {
			this._vBg = new ViewBg();	
		}
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


		mat4.mul(this._mtx, this._mHit, this._mtxScale);
		GL.rotate(this._mtx);

		this._vBelt.render();
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