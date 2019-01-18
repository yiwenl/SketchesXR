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
import ViewDisk from './ViewDisk';

class SceneApp extends Scene {
	constructor() {
		Settings.init();

		super();
		this.orbitalControl.radius.setTo(0.5);
		
		let s = GL.isMobile ? .2 : 1;
		s *= 0.2;
		this._mHit       = mat4.create();
		this._mCenter    = mat4.create();
		this._mOrient    = mat4.create();
		this._mTransform = mat4.create();
		this._mProj      = mat4.create();
		this._mtx        = mat4.create();
		this._offset     = new alfrid.EaseNumber(0, 0.03);
		mat4.scale(this._mTransform, this._mTransform, vec3.fromValues(s, s, s));

		

		if(ARUtils.hasARDisplay) {
			this._frameData = new VRFrameData();
			mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
			this.cameraAR = new alfrid.CameraPerspective();
			this.camera = this.cameraAR;
		} 

		this._hasClicked = false;
		this._updateTexture = true;
		this._biasMatrix = mat4.fromValues(
			0.5, 0.0, 0.0, 0.0,
			0.0, 0.5, 0.0, 0.0,
			0.0, 0.0, 0.5, 0.0,
			0.5, 0.5, 0.5, 1.0
		);

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));

		window.addEventListener('keyup', (e)=> {
			if(e.keyCode === 32) {
				console.log('stop capturing');
				this._updateTexture = false;

				// mat4.multiply(this._mProj, this.camera.projection, this.camera.viewMatrix);
				// mat4.multiply(this._mProj, this._biasMatrix, this._mProj);
				this._offset.value = 1;
			}
		})
	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._vDisk = new ViewDisk();
		this._bCopy = new alfrid.BatchCopy();

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


			mat4.multiply(this._mProj, this.cameraAR.projection, this.cameraAR.viewMatrix);
			mat4.multiply(this._mProj, this._biasMatrix, this._mProj);


			mat4.fromQuat(this._mOrient, ARUtils.orientation);
			this._updateTexture = false;

			this._offset.value = 1;
		}
		
	}


	render() {
		GL.clear(0, 0, 0, 0);		

		if(!GL.isMobile && this._updateTexture) {
			mat4.multiply(this._mProj, this.camera.projection, this.camera.viewMatrix);
			mat4.multiply(this._mProj, this._biasMatrix, this._mProj);	
		}
		

		ARUtils.updateCamera(this.cameraAR);
		GL.setMatrices(this.camera);


		GL.disable(GL.DEPTH_TEST);
		if(this._updateTexture) {
			this._fboBg.bind();
			GL.clear(0, 0, 0, 0);
			this._vBg.render();
			this._fboBg.unbind();
		}

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


		mat4.mul(this._mtx, this._mHit, this._mTransform);
		// GL.rotate(this._mHit);
		GL.rotate(this._mtx);

		this._vDisk.render(this.background, this._mOrient, this._mProj, this._offset.value);

		// this.shader.bind();
		// GL.draw(this.mesh);
	}


	resize() {
		const { innerWidth, innerHeight, devicePixelRatio } = window;
		GL.setSize(innerWidth * devicePixelRatio, innerHeight * devicePixelRatio);
		this.camera.setAspectRatio(GL.aspectRatio);
	}


	get background() {
		return this._fboBg.getTexture();
	}


	get ARDisplay() {
		return ARUtils.ARDisplay;
	}

}


export default SceneApp;