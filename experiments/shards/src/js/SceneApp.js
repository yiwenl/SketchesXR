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
import ViewShard from './ViewShard';
import ViewFloor from './ViewFloor';

class SceneApp extends Scene {
	constructor() {
		if(!GL.isMobile) {
			Settings.init();	
		}
		

		super();
		this.orbitalControl.radius.setTo(0.5);

		if(!GL.isMobile) {
			this.orbitalControl.radius.value = 15;
			this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
			this.orbitalControl.center[1] = 4;
			this.orbitalControl.positionOffset[1] = 4;
		}
		

		this._mHit     = mat4.create();
		this._mCenter  = mat4.create();

		this._mtx = mat4.create();
		this._mtxScale = mat4.create();
		// GL.isMobile = true;

		
		let s = GL.isMobile ? 0.025 : 1.0;

		// mat4.translate(this._mtxScale, this._mtxScale, vec3.fromValues(0, t, 0));
		mat4.scale(this._mtxScale, this._mtxScale, vec3.fromValues(s, s, s));

		// console.log('Scale :', s);


		if(ARUtils.hasARDisplay) {
			this._frameData = new VRFrameData();
			mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
			this.cameraAR = new alfrid.CameraPerspective();
			this.camera = this.cameraAR;
		} 

		this._hasClicked = false;

		//	shadow 
		this._cameraLight = new alfrid.CameraOrtho();
		let scale = GL.isMobile ? 0.2 : 1;
		// scale = 1;
		s = 3 * scale;
		this._cameraLight.ortho(-s, s, -s, s, 1, 50);
		this._cameraLight.lookAt([0, 50 * scale, 10 * scale], [0, 0, 0], [0, 1, 0]);
		// this._cameraLight.lookAt([0, 10, 0], [0, 0, 0], [0, 0, -1]);

		this._biasMatrix = mat4.fromValues(
			0.5, 0.0, 0.0, 0.0,
			0.0, 0.5, 0.0, 0.0,
			0.0, 0.0, 0.5, 0.0,
			0.5, 0.5, 0.5, 1.0
		);
		this._shadowMatrix = mat4.create();
		mat4.multiply(this._shadowMatrix, this._cameraLight.projection, this._cameraLight.viewMatrix);
		mat4.multiply(this._shadowMatrix, this._biasMatrix, this._shadowMatrix);

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));
	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);

		const shadowMapSize = 1024;
		this._fboShadow = new alfrid.FrameBuffer(shadowMapSize, shadowMapSize, {minFilter:GL.LINEAR, magFilter:GL.LINEAR});
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._bCopy = new alfrid.BatchCopy();
		this._bAxis = new alfrid.BatchAxis();
		this._vFloor = new ViewFloor;

		if(this.ARDisplay) {
			this._vBg = new ARVideoRenderer(this.ARDisplay, GL.gl);	
		} else {
			this._vBg = new ViewBg();	
		}

		this._shards = [];
		for(let i=0; i<8; i++) {
			const v = new ViewShard(i+1);
			this._shards.push(v);
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


	renderShadow() {

		this._fboShadow.bind();
		GL.clear(0, 0, 0, 0);
		GL.setMatrices(this._cameraLight);

		GL.rotate(this._mtx);
		this._shards.forEach( shard => {
			shard.render();
		});

		this._fboShadow.unbind();
	}


	render() {
		mat4.mul(this._mtx, this._mHit, this._mtxScale);
		this.renderShadow();

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


		GL.rotate(this._mtx);

		

		this._shards.forEach( shard => {
			shard.render();
		});


		GL.disable(GL.DEPTH_TEST);
		this._vFloor.render(this._shadowMatrix, this._fboShadow.getTexture());
		GL.enable(GL.DEPTH_TEST);

		let s = 250;
		GL.viewport(0, 0, s, s);
		// this._bCopy.draw(this._fboShadow.getTexture());
		// GL.viewport(s, 0, s, s);
		// this._bCopy.draw(this._fboShadow.getDepthTexture());
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