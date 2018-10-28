// SceneApp.js

// http://jsfiddle.net/PerroAZUL/zdaY8/1/

import alfrid, { Scene, GL, WebglNumber } from 'alfrid';
import Assets from './Assets';
import Settings from './Settings';
import Config from './Config';

import ARVideoRenderer from './ARVideoRenderer';
import ARUtils, { ARDisplay } from './ARUtils';

import FboPingPong from './FboPingPong';
import { createParticles } from './utils';

import ViewBg from './ViewBg';
import ViewRing from './ViewRing';
import ViewRender from './ViewRender';
import ViewFloor from './ViewFloor';
import ViewDisk from './ViewDisk';
import ViewCompose from './ViewCompose';
import fsSim from 'shaders/sim.frag';

class SceneApp extends Scene {
	constructor() {
		if(!GL.isMobile) {
			Settings.init();	
		}
		

		super();
		this.orbitalControl.radius.setTo(0.5);
		if(!GL.isMobile) {
			this.orbitalControl.radius.value = 10;
			// this.orbitalControl.rx.value = this.orbitalControl.rx.value = .5;
			this.orbitalControl.rx.value = .5;

			this.orbitalControl.center[1] = this.orbitalControl.positionOffset[1] = 2;
		}
		


		this._opening = new alfrid.TweenNumber(0, 'cubicInOut', 0.03);

		this._mHit     = mat4.create();
		this._mCenter  = mat4.create();

		this._mtx = mat4.create();
		this._mScale = mat4.create();

		let s = GL.isMobile ? 0.05 : 1;
		mat4.scale(this._mScale, this._mScale, vec3.fromValues(s, s, s));

		if(ARUtils.hasARDisplay) {
			this._frameData = new VRFrameData();
			mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
			this.cameraAR = new alfrid.CameraPerspective();
			this.camera = this.cameraAR;
		} 

		this._hasClicked = false;

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));
		if(!GL.isMobile) {
			this._opening.value = 1;
		}
	}


	_initTextures() {
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);
		this._fboMask = new alfrid.FrameBuffer(GL.width, GL.height);


		const { numParticles } = Config;

		this.textureOrg = createParticles();
		this.fboParticles = new FboPingPong(numParticles * 2, numParticles * 2, {
			minFilter:GL.NEAREST,
			magFilter:GL.NEAREST,
			type:GL.FLOAT
		});

		//	get particle pos / vel texture
		//	copy to fbo
	}


	_initViews() {
		this._vRing = new ViewRing();
		this._bCopy = new alfrid.BatchCopy();
		this._vRender = new ViewRender();
		this._vFloor = new ViewFloor();
		this._vDisk = new ViewDisk();
		this._vCompose = new ViewCompose();

		this._bBall = new alfrid.BatchBall();

		if(this.ARDisplay) {
			this._vBg = new ARVideoRenderer(this.ARDisplay, GL.gl);	
		} else {
			this._vBg = new ViewBg();	
		}


		this.fboParticles.read.bind();
		GL.clear(0, 0, 0, 0);
		this._bCopy.draw(this.textureOrg);
		this.fboParticles.read.unbind();

		this.fboParticles.write.bind();
		GL.clear(0, 0, 0, 0);
		this._bCopy.draw(this.textureOrg);
		this.fboParticles.write.unbind();

		this.shader = new alfrid.GLShader(alfrid.ShaderLibs.bigTriangleVert, fsSim);
		// this.shader = new alfrid.GLShader(alfrid.ShaderLibs.bigTriangleVert, alfrid.ShaderLibs.copyFrag);
		this.meshTri = alfrid.Geom.bigTriangle();
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
			this._opening.value = 1;
		}
	}


	updateParticles() {
		this.fboParticles.write.bind();

		GL.clear(0, 0, 0, 0);
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		this.fboParticles.readTexture.bind(0);
		this.shader.uniform("textureOrg", "uniform1i", 1);
		this.textureOrg.bind(1);
		this.shader.uniform("uTime", "float", alfrid.Scheduler.deltaTime);
		this.shader.uniform("uInitY", "float", Config.initY);
		this.shader.uniform("uOpening", "float", this._opening.value);
		GL.draw(this.meshTri);

		this.fboParticles.write.unbind();


		this.fboParticles.swap();
	}


	render() {
		mat4.mul(this._mtx, this._mHit, this._mScale);
		this.updateParticles();

		GL.clear(0, 0, 0, 0);		

		ARUtils.updateCamera(this.cameraAR);
		GL.setMatrices(this.camera);


		

		this._fboBg.bind();
		GL.clear(0, 0, 0, 0);
		this._vBg.render();
		this._fboBg.unbind();

		this._fboMask.bind();
		GL.clear(0, 0, 0, 0);
		GL.rotate(this._mtx);
		this._vDisk.render();
		this._fboMask.unbind();


		if(GL.isMobile) {
			GL.disable(GL.DEPTH_TEST);
			this._vCompose.render(this._fboBg.getTexture(), this._fboMask.getTexture());
			GL.enable(GL.DEPTH_TEST);	
		}
		



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


		// this._vDisk.render();

		this._vRender.render(
			this.fboParticles.readTexture, 
			this.textureOrg
		);


		let s = 0.1;
		s = 200;

		// GL.viewport(0, 0, s, s);
		// this._bCopy.draw(this._fboBg.getTexture());
		// GL.viewport(s, 0, s, s);
		// this._bCopy.draw(this._fboMask.getTexture());
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