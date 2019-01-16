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
import ViewCircle from './ViewCircle';

const SCALE_AR = !GL.isMobile ? 0.05 : 0.025;

class SceneApp extends Scene {
	constructor() {
		Settings.init();

		super();
		this.orbitalControl.radius.setTo(0.5);
		

		this._mHit       = mat4.create();
		this._mTransform = mat4.create();
		this._mCenter    = mat4.create();
		this._mOrient	 = mat4.create();
		this._mtx        = mat4.create();
		this._mProj 	 = mat4.create();

		let s = SCALE_AR;
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
		// GL.canvas.addEventListener('mouseup', (e)=>this._onClick(e));
		window.addEventListener('keyup', (e)=> {
			if(e.keyCode === 32) {
				console.log('stop capturing');
				this._updateTexture = false;

				mat4.multiply(this._mProj, this.camera.projection, this.camera.viewMatrix);
				mat4.multiply(this._mProj, this._biasMatrix, this._mProj);
			}
		})

	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._bCopy = new alfrid.BatchCopy();

		if(this.ARDisplay) {
			this._vBg = new ARVideoRenderer(this.ARDisplay, GL.gl);	
		} else {
			this._vBg = new ViewBg();	
		}

		const numRings = 5;
		const ringSize = .5;

		this._circles = [];
		for(let i=0; i<numRings; i++) {
			const c = new ViewCircle(1 + i * ringSize, ringSize, 1 + ringSize*i);
			this._circles.push(c);
		}
	}


	_onClick(e) {
		if(this._hasClicked) {
			//	stop updating texture
			console.log('stop capturing');
			this._updateTexture = false;
			return;
		}

		const hit = ARUtils.hitTest();
		if(hit) {
			mat4.identity(this._mHit, this._mHit);
			mat4.translate(this._mHit, this._mHit, hit.hitPosition);
			this._hasClicked = true;


			//	update project matrix
			mat4.multiply(this._mProj, this.cameraAR.projection, this.cameraAR.viewMatrix);
			mat4.multiply(this._mProj, this._biasMatrix, this._mProj);
		}

		mat4.fromQuat(this._mOrient, ARUtils.orientation);
		// mat4.invert(this._mOrient, this._mOrient);


		console.log('camera pos :', this.cameraAR.position);
		console.log('orientation', ARUtils.orientation);

		console.log('this._mOrient', this._mOrient);
		// mat4.mul(this._mTransform, this._mTransform, vec3.fromValues(0, this.cameraAR.position[1], 0));
	}


	render() {
		GL.clear(0, 0, 0, 0);		

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

		if(Math.random() > .95) {
			// console.log('pose', ARUtils.orientation);	
		}
		
		mat4.mul(this._mtx, this._mHit, this._mTransform);

		GL.rotate(this._mtx);
		this._circles.forEach( c => {
			c.render(this._mOrient, this._mProj, this._fboBg.getTexture());
		})


		let s = 200;
		GL.viewport(0, 0, s, s/GL.aspectRatio);
		this._bCopy.draw(this._fboBg.getTexture());
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