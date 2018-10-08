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

		//	shadow map
		this._cameraLight = new alfrid.CameraOrtho();
		const s = Config.maxRadius/2;
		this._cameraLight.ortho(-s, s, -s, s, 1, 50);
		this._cameraLight.lookAt([0, 10, 0], [0, 0, 0], [0, 0, -1]);

		this._biasMatrix = mat4.fromValues(
			0.5, 0.0, 0.0, 0.0,
			0.0, 0.5, 0.0, 0.0,
			0.0, 0.0, 0.5, 0.0,
			0.5, 0.5, 0.5, 1.0
		);
		this._shadowMatrix = mat4.create();
		mat4.multiply(this._shadowMatrix, this._cameraLight.projection, this._cameraLight.viewMatrix);
		mat4.multiply(this._shadowMatrix, this._biasMatrix, this._shadowMatrix);

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

		const shadowMapSize = 2048;
		this._fboShadow = new alfrid.FrameBuffer(shadowMapSize, shadowMapSize, {minFilter:GL.LINEAR, magFilter:GL.LINEAR});
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


	renderShadow() {
		//	update shadow matrix
		//	copy touch.xz to camera.xz
		//	move floor.xz to touch.xz
		
		this._fboShadow.bind();
		GL.clear(0, 0, 0, 0);
		GL.setMatrices(this._cameraLight);
		GL.rotate(this._mHit);
		this._vFishes.render(this._koiSim.texture, this._koiSim.textureExtra, 0);
		this._fboShadow.unbind();

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
			this._touchForce.value = 1;
			vec3.copy(this._center, hit.hitPosition);
			vec3.sub(this._center, this._center, this._centerOrg);
			vec3.copy(this._hit, this._center);
		} else {
			this._vRing.close();
			this._touchForce.value = 0;
		}

		this._koiSim.update(this._hit, this._touchForce.value, this._center);
		this.renderShadow();


		let s = this._touchForce.value * 0.025;

		GL.setMatrices(this.camera);
		GL.rotate(this._mHit);
		
		this._vFloor.render(this._shadowMatrix, this._fboShadow.getTexture());
		this._vFishes.render(this._koiSim.texture, this._koiSim.textureExtra);
		this._bBall.draw(this._hit, [s, s, s], [1, 0, 0]);

		

		if (this.ARDisplay) {
			GL.rotate(this._mCenter);
			this._vRing.render();	
		}

		s = 256;
		GL.viewport(0, 0, s, s);
		this._bCopy.draw(this._fboShadow.getTexture());
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