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

import KoiSimulation from './KoiSimulation';
import ViewFloor from './ViewFloor';
import ViewFish from './ViewFish';

class SceneApp extends Scene {
	constructor() {
		Settings.init();

		super();
		this.orbitalControl.radius.setTo(0.5);

		this._koiSim = new KoiSimulation();
		

		this._mHit     = mat4.create();
		this._mCenter  = mat4.create();

		this._hit = vec3.create();
		this._touch = vec3.create();
		this._center = vec3.create();
		this._centerOrg = vec3.create();
		this._touchForce = new alfrid.EaseNumber(0, 0.01);

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
		this._vRing   = new ViewRing();
		this._bCopy   = new alfrid.BatchCopy();
		this._bBall   = new alfrid.BatchBall();
		this._vFloor  = new ViewFloor();
		this._vFishes = new ViewFish();

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
			vec3.copy(this._centerOrg, hit.hitPosition);
		}
	}


	render() {
		this._koiSim.update(this._hit, this._touchForce.value, this._center);

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
			this._touchForce.value = 1;
			vec3.copy(this._center, hit.hitPosition);
			vec3.sub(this._center, this._center, this._centerOrg);
			vec3.copy(this._hit, this._center);
		} else {
			this._vRing.close();
			this._touchForce.value = 0;
		}


		let s = this._touchForce.value * 0.025;
		GL.rotate(this._mHit);
		this._vFishes.render(this._koiSim.texture, this._koiSim.textureExtra);
		this._bBall.draw(this._center, [s, s, s], [1, 0, 0]);

		if (this.ARDisplay) {
			GL.rotate(this._mCenter);
			this._vRing.render();	
		}
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