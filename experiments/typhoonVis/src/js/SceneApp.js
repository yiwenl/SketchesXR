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
import ViewGlobe from './ViewGlobe';
import ViewTyphoons from './ViewTyphoons';
import ViewShadow from './ViewShadow';
import data from './typhoons.json';

class SceneApp extends Scene {
	constructor() {
		// Settings.init();

		super();
		this.orbitalControl.radius.setTo(0.5);
		

		this._mHit     = mat4.create();
		this._mTranslate = mat4.create();
		this._mCenter  = mat4.create();

		if(ARUtils.hasARDisplay) {
			this._frameData = new VRFrameData();
			mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
			this.cameraAR = new alfrid.CameraPerspective();
			this.camera = this.cameraAR;
		} 

		this._hasClicked = false;

		this.offset = new alfrid.TweenNumber(0, 'expIn', 0.01)
		this._mode = 'plane';

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));
		window.addEventListener('keydown', (e)=> {
			if(e.keyCode === 32) {
				this.toggle();
			}
		});
	}


	toggle() {
		this._mode = this._mode === 'plane' ? 'sphere' : 'plane';

		this.offset.easing = this._mode === 'plane' ? 'cubicInOut' : 'cubicIn';
		this.offset.value = this._mode === 'plane' ? 0 : 1;
		const RAD = Math.PI / 180;

		this.orbitalControl.rx.value = this._mode === 'plane' ? 1.5 : 0.3;
		this.orbitalControl.ry.value = this._mode === 'plane' ? 0.0 : -15 * RAD;

		const delay = this._mode === 'plane' ? 2.5 : 0;

		if(this._mode === 'sphere') {
			this.orbitalControl.radius.value = 6;
		} else {
			this.orbitalControl.radius.value = 7;
			const delay = 0.5;
			setTimeout(()=> {
				this.orbitalControl.radius.value = 3;
			}, delay * 1000);			
		}

	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._bCopy = new alfrid.BatchCopy();
		this._vGlobe = new ViewGlobe();
		this._vTyphoons = new ViewTyphoons();
		this._vShadow = new ViewShadow();

		if(this.ARDisplay) {
			this._vBg = new ARVideoRenderer(this.ARDisplay, GL.gl);	
		} else {
			this._vBg = new ViewBg();	
		}
	}


	_onClick(e) {
		if(this._hasClicked) {
			this.toggle();
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


		mat4.identity(this._mTranslate);
		mat4.translate(
			this._mTranslate, 
			this._mTranslate, 
			vec3.fromValues(0, this.offset.value * 0.2, 0) 
		);

		mat4.mul(this._mTranslate, this._mTranslate, this._mHit);

		GL.rotate(this._mTranslate);

		this._vGlobe.render(this.offset.value);
		this._vTyphoons.render(this.offset.value);
		this._vShadow.render(this.offset.value);
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