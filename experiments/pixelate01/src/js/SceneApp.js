// SceneApp.js

// http://jsfiddle.net/PerroAZUL/zdaY8/1/

import alfrid, { Scene, GL, WebglNumber } from 'alfrid';
import Assets from './Assets';
import Settings from './Settings';
import Config from './Config';


// import ViewCube from './ViewCube';
import ARVideoRenderer from './ARVideoRenderer';
import { isARKit } from './ARUtils';

import ViewBg from './ViewBg';
import ViewRing from './ViewRing';
import ViewPixels from './ViewPixels';
import ViewSave from './ViewSave';
import ViewColor from './ViewColor';
import ViewPixelated from './ViewPixelated';

import FboPingPong from './FboPingPong';
import NoiseTexture from './NoiseTexture';

import fsPosition from 'shaders/update-pos.frag';
import fsColor from 'shaders/update-color.frag';
import fsExtra from 'shaders/update-extra.frag';

const NUM_SETS = 12;

var random = function(min, max) { return min + Math.random() * (max - min);	}

class SceneApp extends Scene {
	constructor() {
		// Settings.init();
		Config.numParticles = window.ARDisplay ? 128 : 256;

		super();
		this.resize();
		GL.enableAlphaBlending();
		this.camera.id = 'test';
		this.orbitalControl.radius.setTo(0.5);

		this.cameraAR = new alfrid.CameraPerspective();
		this._mHit = mat4.create();
		this._mCenter = mat4.create();


		if(ARDisplay) {
			this._frameData = new VRFrameData();
			// mat4.translate(this._mHit, this._mHit, vec3.fromValues(999, 999, 999));
		} 

		this._hasClicked = false;
		this.particleScale = new alfrid.EaseNumber(0, 0.05);
		this.cameraPos = vec3.create();

		GL.canvas.addEventListener('touchstart', (e)=>this._onClick(e));

		this._initWorld();
	}

	_initTextures() {
		this._fboMask = new alfrid.FrameBuffer(GL.width, GL.height, {type:GL.FLOAT});
		this._fboBg = new alfrid.FrameBuffer(GL.width, GL.height);

		this._noiseTexture = new NoiseTexture();
	}


	_initViews() {
		console.log('init views');
		this._vBg = new ViewBg();
		this._vRing = new ViewRing();
		this._vPixelated = new ViewPixelated();

		this._vPixels = new ViewPixels();
		this._vColor = new ViewColor();

		this._bCopy = new alfrid.BatchCopy();
		this._bBall = new alfrid.BatchBall();
		this.mesh = alfrid.Geom.bigTriangle();

		if(ARDisplay) {
			this._vAR = new ARVideoRenderer(ARDisplay, GL.gl);	
		} 

		GL.setMatrices(this.camera);


		this.shaderPos = new alfrid.GLShader(alfrid.ShaderLibs.bigTriangleVert, fsPosition);
		this.shaderColor = new alfrid.GLShader(alfrid.ShaderLibs.bigTriangleVert, fsColor);
		this.shaderExtra = new alfrid.GLShader(alfrid.ShaderLibs.bigTriangleVert, fsExtra);

	}

	_initWorld() {
		const { numParticles } = Config;
		const fboSettings = {
			minFilter:GL.NEAREST,
			magFilter:GL.NEAREST,
			type:GL.FLOAT
		}

		let numSets = NUM_SETS;

		this._sets = [];

		const vSave = new ViewSave();
		GL.setMatrices(this.cameraOrtho);

		while(numSets--) {
			const fboPos = new FboPingPong(numParticles, numParticles, fboSettings);
			const fboColor = new FboPingPong(numParticles, numParticles, fboSettings);
			const fboExtra = new FboPingPong(numParticles, numParticles, fboSettings);

			this._sets.push({
				fboPos,
				fboColor,
				fboExtra
			});


			vSave.reset();

			fboPos.write.bind();
			GL.clear(0, 0, 0, 1);
			vSave.render(0);
			fboPos.write.unbind();
			fboPos.swap();

			fboColor.write.bind();
			GL.clear(0, 0, 0, 1);
			vSave.render(1);
			fboColor.write.unbind();
			fboColor.swap();

			fboExtra.write.bind();
			GL.clear(0, 0, 0, 1);
			vSave.render(2);
			fboExtra.write.unbind();
			fboExtra.swap();
		}

		// console.table(this._sets);


		// this._fboPos = new FboPingPong(numParticles, numParticles, fboSettings);
		// this._fboColor = new FboPingPong(numParticles, numParticles, fboSettings);

		// vSave.reset();

		// this._fboPos.write.bind();
		// GL.clear(0, 0, 0, 1);
		// vSave.render(0);
		// this._fboPos.write.unbind();
		// this._fboPos.swap();

		// this._fboColor.write.bind();
		// GL.clear(0, 0, 0, 1);
		// vSave.render(1);
		// this._fboColor.write.unbind();
		// this._fboColor.swap();


		if(!ARDisplay) {
			// this.updateColor(true);
		}

	}

	updateFbo() {
		if (!this._hasClicked) {
			return;
		}

		GL.setMatrices(this.cameraAR);

		this._sets.forEach( set => {

			//	update position -> if needUpdate, pick up new position
			const { fboPos, fboColor, fboExtra } = set;

//*/
			fboPos.write.bind();
			GL.clear(0, 0, 0, 0);
			this.shaderPos.bind();

			this.shaderPos.uniform("texturePos", "uniform1i", 0);
			fboPos.readTexture.bind(0);

			this.shaderPos.uniform("textureExtra", "uniform1i", 1);
			fboExtra.readTexture.bind(1);

			this.shaderPos.uniform("uCameraPos", "vec3", this.cameraPos);
			this.shaderPos.uniform("uRange", "float", Config.range);
			GL.draw(this.mesh);

			fboPos.write.unbind();
			fboPos.swap();
//*/
			
			//	update color -> if needUpdate, pick up color from current fboBF
//*/			
			fboColor.write.bind();

			GL.clear(0, 0, 0, 0);
			this.shaderColor.bind();

			this.shaderColor.uniform("textureColor", "uniform1i", 0);
			fboColor.readTexture.bind(0);

			this.shaderColor.uniform("texturePos", "uniform1i", 1);
			fboPos.readTexture.bind(1);

			this.shaderColor.uniform("textureExtra", "uniform1i", 2);
			fboExtra.readTexture.bind(2);

			this.shaderColor.uniform("textureBg", "uniform1i", 3);
			this.texBackground.bind(3);

			GL.draw(this.mesh)

			fboColor.write.unbind();
			fboColor.swap();
//*/

			//	update flags

//*/
			fboExtra.write.bind();
			GL.clear(0, 0, 0, 0);

			this.shaderExtra.bind();

			this.shaderExtra.uniform("texturePos", "uniform1i", 0);
			fboPos.readTexture.bind(0);

			this.shaderExtra.uniform("textureExtra", "uniform1i", 1);
			fboExtra.readTexture.bind(1);

			this.shaderExtra.uniform("uCameraPos", "vec3", this.cameraPos);
			this.shaderExtra.uniform("uRange", "float", Config.range);

			GL.draw(this.mesh);

			fboExtra.write.unbind();
			fboExtra.swap();
//*/

		});


	}

/*
	updateColor(mForce=false) {
		// this._fboColor.write.bind();
		// GL.clear(0, 0, 0, 0);
		// GL.setMatrices(this.camera);
		// if(ARDisplay) {
		// 	GL.setMatrices(this.cameraAR);
		// }

		// GL.rotate(this._mHit);
		// this._vColor.render(
		// 	this.texColor,
		// 	this.texPosition,
		// 	this.texBackground,
		// 	mForce
		// )

		// this._fboColor.write.unbind();
		// this._fboColor.swap();
		GL.setMatrices(this.cameraAR);

		this._sets.forEach( set => {
			const { fboColor, fboPos, fboExtra } = set;

			fboColor.write.bind();
			GL.clear(0, 0, 0, 0);
			

			GL.rotate(this._mHit);
			this._vColor.render(
				fboColor.readTexture,
				fboPos.readTexture,
				fboExtra.readTexture,
				this.texBackground,
				mForce
			)

			fboColor.write.unbind();
			fboColor.swap();
		});
	}
*/

	_onClick(e) {
		if(this._hasClicked) {
			return;
		}

		const hit = ARDisplay.hitTest(0.5, 0.5);
		if(hit && hit.length > 0) {
			const {modelMatrix} = hit[0];

			this._posSphere = vec3.fromValues(modelMatrix[12], modelMatrix[13], modelMatrix[14]);

			mat4.identity(this._mHit, this._mHit);
			// mat4.translate(this._mHit, this._mHit, this._posSphere);
			this.particleScale.value = 2;
			//	get first color map
			//	set needUpdate to false

			// this.updateColor(true);
			this._hasClicked = true;
			
		} else {
			return;
		}

		
	}



	render() {
		GL.viewport(0, 0, GL.width, GL.height);
		this.updateFbo();

		GL.setMatrices(this.camera);

		// const this.cameraPos = vec3.create();;
		const vDir = vec3.fromValues(0, 0, -1);
		
		if(ARDisplay) {
			ARDisplay.getFrameData(this._frameData);
			const dir = 'left';
			const projection = this._frameData[`${dir}ProjectionMatrix`];
			const matrix = this._frameData[`${dir}ViewMatrix`];	

			mat4.copy(this.cameraAR.matrix, matrix);
			mat4.copy(this.cameraAR.projection, projection);
			GL.setMatrices(this.cameraAR);

			const { pose } = this._frameData;
			vec3.copy(this.cameraPos, pose.position);

			const ori = quat.clone(pose.orientation);
			const mtxDir = mat4.create();
			mat4.fromQuat(mtxDir, ori);

			vec3.transformQuat(vDir, vDir, ori);

		} else {
			vec3.copy(this.cameraPos, this.camera.position);
		}


		GL.clear(0, 0, 0, 0);

		GL.disable(GL.DEPTH_TEST);

		if(ARDisplay) {
			if (isARKit(this.vrDisplay) && !window.WebARonARKitSendsCameraFrames) {
	      		// return;
	    	} else {
	    		this._fboBg.bind();
	    		GL.clear(0, 0, 0, 0);
	    		this._vAR.render();
	    		this._fboBg.unbind();
	    	}	

	    	
		} else {
			this._fboBg.bind();
			GL.clear(0, 0, 0, 0);
			this._vBg.render();
			this._fboBg.unbind();
		}

		// this._bCopy.draw(this._fboBg.getTexture());
		this._vPixelated.render(this._fboBg.getTexture(), this._noiseTexture.texture);

		GL.enable(GL.DEPTH_TEST);

		if(ARDisplay) {
			const hit = ARDisplay.hitTest(0.5, 0.5);
			if(hit && hit.length > 0) {
				const {modelMatrix} = hit[0]
				mat4.copy(this._mCenter, modelMatrix);
				this._vRing.opacity.value = 1;	

			} else {
				this._vRing.opacity.value = 0;	
			}
		}


		if (!this._hasClicked && ARDisplay) {
			GL.rotate(this._mCenter);
			this._vRing.render();	
		}

		GL.rotate(this._mHit);
		// this._vPixels.render(
		// 	this.texPosition,
		// 	this.texColor,
		// 	this.particleScale.value
		// );

		console.log(this._sets.length);
		this._sets.forEach( set => {
			const { fboPos, fboColor } = set;
			this._vPixels.render(
				fboPos.readTexture,
				fboColor.readTexture,
				this.particleScale.value,
				this.cameraPos,
				vDir
			)
		});

		let s = 0.001;
		// this._bBall.draw(vDir, [s, s, s], [1, 0, 0])

		GL.disable(GL.DEPTH_TEST);

		// let s = 200;
		// const { fboPos, fboColor, fboExtra} = this._sets[0]
		// GL.viewport(0, 0, s, s);
		// this._bCopy.draw(fboPos.readTexture);

		// GL.viewport(s, 0, s, s);
		// this._bCopy.draw(fboColor.readTexture);

		// GL.viewport(s * 2, 0, s, s);
		// this._bCopy.draw(fboExtra.readTexture);
		// // this._bCopy.draw(this.texPosition);

		// GL.enable(GL.DEPTH_TEST);

		// GL.viewport(s, 0, s, s);
		// this._bCopy.draw(this.texColor);

	}


	//	getter / setter

	get texBackground() {
		return this._fboBg.getTexture();
	}


	resize() {
		const { innerWidth, innerHeight, devicePixelRatio } = window;
		GL.setSize(innerWidth * devicePixelRatio, innerHeight * devicePixelRatio);
		this.camera.setAspectRatio(GL.aspectRatio);
	}
}


export default SceneApp;