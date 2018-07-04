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
import ViewCubes from './ViewCubes';

window.random = function(min, max) { return min + Math.random() * (max - min);	}

class SceneApp extends Scene {
	constructor() {
		Settings.init();

		super();
		this.orbitalControl.radius.setTo(0.1);
		// this.orbitalControl.lockZoom(true);
		

		this._mHit     = mat4.create();
		this._mCenter  = mat4.create();

		if(ARUtils.hasARDisplay) {
			this._frameData = new VRFrameData();
			// mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
			this.cameraAR = new alfrid.CameraPerspective();
			this.camera = this.cameraAR;
		} 

		this._hasClicked = false;

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));
		GL.canvas.addEventListener('mouseup', (e)=>this._onClick(e));
	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);
		this._fboWorld = new alfrid.FrameBuffer(GL.width, GL.height);
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._bCopy = new alfrid.BatchCopy();
		this._bBall = new alfrid.BatchBall();

		if(this.ARDisplay) {
			this._vBg = new ARVideoRenderer(this.ARDisplay, GL.gl);	
		} else {
			this._vBg = new ViewBg(Assets.get('vatican'));	
		}


		this._vWorld2 = new ViewBg(Assets.get('desert'));
		//	project
		this._vCubes = new ViewCubes();
	}


	_onClick(e) {
		console.log('click');
		if(this._hasClicked) {
			return;
		}

		const hit = ARUtils.hitTest();
		if(hit) {
			// mat4.identity(this._mHit, this._mHit);
			// mat4.translate(this._mHit, this._mHit, hit.hitPosition);
		}

		this._hasClicked = true;
		this._getSideCamera();
	}


	_getSideCamera() {
		console.log('Getting side camera', this.camera.position);
		this.orgCameraPos = vec3.clone(this.camera.position);
		this.sideCameraPos = vec3.clone(this.camera.position);
		let m = mat4.create();
		mat4.rotateY(m, m, Math.PI * 0.5);
		vec3.transformMat4(this.sideCameraPos, this.sideCameraPos, m);
	}



	render() {
		GL.clear(0, 0, 0, 0);		

		ARUtils.updateCamera(this.cameraAR);
		GL.setMatrices(this.camera);

		this._fboBg.bind();
		GL.clear(0, 0, 0, 0);
		this._vBg.render();
		this._fboBg.unbind();

		this._fboWorld.bind();
		GL.clear(0, 0, 0, 0);
		this._vWorld2.render();
		this._fboWorld.unbind();

		// GL.disable(GL.DEPTH_TEST);
		
		// GL.enable(GL.DEPTH_TEST);

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

		GL.rotate(this._mHit);
		GL.disable(GL.DEPTH_TEST);
		this._bCopy.draw(this.textureBg);
		GL.enable(GL.DEPTH_TEST);

		if(!this.sideCameraPos) {
			return;
		}
		this._vCubes.render(this.textureBg, this.textureWorld, this.sideCameraPos, this.camera.position);

		let s = 0.005;
		this._bBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
		s = 0.01;
		this._bBall.draw(this.orgCameraPos, [s, s, s], [0, 1, 0]);
		this._bBall.draw(this.sideCameraPos, [s, s, s], [1, 0, 0]);
	}


	resize() {
		const { innerWidth, innerHeight, devicePixelRatio } = window;
		GL.setSize(innerWidth * devicePixelRatio, innerHeight * devicePixelRatio);
		this.camera.setAspectRatio(GL.aspectRatio);
	}


	get ARDisplay() {
		return ARUtils.ARDisplay;
	}

	get textureBg() {
		return this._fboBg.getTexture();
	}


	get textureWorld() {
		return this._fboWorld.getTexture();
	}

}


export default SceneApp;