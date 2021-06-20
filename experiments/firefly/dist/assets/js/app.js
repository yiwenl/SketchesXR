/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alfrid/src/alfrid.js":
/*!*******************************************!*\
  !*** ./node_modules/alfrid/src/alfrid.js ***!
  \*******************************************/
/*! exports provided: GL, GLTool, GLShader, Mesh, GLTexture, FrameBuffer, GLCubeTexture, Camera, CameraOrtho, CameraPerspective, Ray, Draw, DrawAxis, DrawDotsPlane, DrawLine, DrawBall, DrawCopy, DrawCamera, Geom, Object3D, FboArray, FboPingPong, loadBinary, loadHdr, loadDds, loadObj, checkWebGL2, EaseNumber, TweenNumber, SpringNumber, OrbitalControl, BitSwitch, HitTestor, Scene, parseHdr, parseDds, parseObj, getColorTexture, WebGLNumber, WebGLConst, ShaderLibs, BasicColorShader, DiffuseLightShader, PBRShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GL", function() { return _core_GL__WEBPACK_IMPORTED_MODULE_0__["GL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTool", function() { return _core_GL__WEBPACK_IMPORTED_MODULE_0__["GLTool"]; });

/* harmony import */ var _core_GLShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/GLShader */ "./node_modules/alfrid/src/core/GLShader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLShader", function() { return _core_GLShader__WEBPACK_IMPORTED_MODULE_1__["GLShader"]; });

/* harmony import */ var _core_Mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Mesh */ "./node_modules/alfrid/src/core/Mesh.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _core_Mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"]; });

/* harmony import */ var _core_GLTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/GLTexture */ "./node_modules/alfrid/src/core/GLTexture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTexture", function() { return _core_GLTexture__WEBPACK_IMPORTED_MODULE_3__["GLTexture"]; });

/* harmony import */ var _core_FrameBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/FrameBuffer */ "./node_modules/alfrid/src/core/FrameBuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameBuffer", function() { return _core_FrameBuffer__WEBPACK_IMPORTED_MODULE_4__["FrameBuffer"]; });

/* harmony import */ var _core_GLCubeTexture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/GLCubeTexture */ "./node_modules/alfrid/src/core/GLCubeTexture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLCubeTexture", function() { return _core_GLCubeTexture__WEBPACK_IMPORTED_MODULE_5__["GLCubeTexture"]; });

/* harmony import */ var _camera_Camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera/Camera */ "./node_modules/alfrid/src/camera/Camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _camera_Camera__WEBPACK_IMPORTED_MODULE_6__["Camera"]; });

/* harmony import */ var _camera_CameraOrtho__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./camera/CameraOrtho */ "./node_modules/alfrid/src/camera/CameraOrtho.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraOrtho", function() { return _camera_CameraOrtho__WEBPACK_IMPORTED_MODULE_7__["CameraOrtho"]; });

/* harmony import */ var _camera_CameraPerspective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./camera/CameraPerspective */ "./node_modules/alfrid/src/camera/CameraPerspective.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPerspective", function() { return _camera_CameraPerspective__WEBPACK_IMPORTED_MODULE_8__["CameraPerspective"]; });

/* harmony import */ var _math_Ray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math/Ray */ "./node_modules/alfrid/src/math/Ray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ray", function() { return _math_Ray__WEBPACK_IMPORTED_MODULE_9__["Ray"]; });

/* harmony import */ var _helper_Draw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helper/Draw */ "./node_modules/alfrid/src/helper/Draw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return _helper_Draw__WEBPACK_IMPORTED_MODULE_10__["Draw"]; });

/* harmony import */ var _helper_DrawAxis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helper/DrawAxis */ "./node_modules/alfrid/src/helper/DrawAxis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawAxis", function() { return _helper_DrawAxis__WEBPACK_IMPORTED_MODULE_11__["DrawAxis"]; });

/* harmony import */ var _helper_DrawDotsPlane__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helper/DrawDotsPlane */ "./node_modules/alfrid/src/helper/DrawDotsPlane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawDotsPlane", function() { return _helper_DrawDotsPlane__WEBPACK_IMPORTED_MODULE_12__["DrawDotsPlane"]; });

/* harmony import */ var _helper_DrawLine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper/DrawLine */ "./node_modules/alfrid/src/helper/DrawLine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawLine", function() { return _helper_DrawLine__WEBPACK_IMPORTED_MODULE_13__["DrawLine"]; });

/* harmony import */ var _helper_DrawBall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper/DrawBall */ "./node_modules/alfrid/src/helper/DrawBall.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawBall", function() { return _helper_DrawBall__WEBPACK_IMPORTED_MODULE_14__["DrawBall"]; });

/* harmony import */ var _helper_DrawCopy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helper/DrawCopy */ "./node_modules/alfrid/src/helper/DrawCopy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawCopy", function() { return _helper_DrawCopy__WEBPACK_IMPORTED_MODULE_15__["DrawCopy"]; });

/* harmony import */ var _helper_DrawCamera__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helper/DrawCamera */ "./node_modules/alfrid/src/helper/DrawCamera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawCamera", function() { return _helper_DrawCamera__WEBPACK_IMPORTED_MODULE_16__["DrawCamera"]; });

/* harmony import */ var _helper_Geom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helper/Geom */ "./node_modules/alfrid/src/helper/Geom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geom", function() { return _helper_Geom__WEBPACK_IMPORTED_MODULE_17__["Geom"]; });

/* harmony import */ var _helper_Object3D__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helper/Object3D */ "./node_modules/alfrid/src/helper/Object3D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Object3D", function() { return _helper_Object3D__WEBPACK_IMPORTED_MODULE_18__["Object3D"]; });

/* harmony import */ var _helper_FboArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helper/FboArray */ "./node_modules/alfrid/src/helper/FboArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FboArray", function() { return _helper_FboArray__WEBPACK_IMPORTED_MODULE_19__["FboArray"]; });

/* harmony import */ var _helper_FboPingPong__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helper/FboPingPong */ "./node_modules/alfrid/src/helper/FboPingPong.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FboPingPong", function() { return _helper_FboPingPong__WEBPACK_IMPORTED_MODULE_20__["FboPingPong"]; });

/* harmony import */ var _loader_loadBinary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loader/loadBinary */ "./node_modules/alfrid/src/loader/loadBinary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadBinary", function() { return _loader_loadBinary__WEBPACK_IMPORTED_MODULE_21__["loadBinary"]; });

/* harmony import */ var _loader_loadHdr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loader/loadHdr */ "./node_modules/alfrid/src/loader/loadHdr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadHdr", function() { return _loader_loadHdr__WEBPACK_IMPORTED_MODULE_22__["loadHdr"]; });

/* harmony import */ var _loader_loadDds__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loader/loadDds */ "./node_modules/alfrid/src/loader/loadDds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadDds", function() { return _loader_loadDds__WEBPACK_IMPORTED_MODULE_23__["loadDds"]; });

/* harmony import */ var _loader_loadObj__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./loader/loadObj */ "./node_modules/alfrid/src/loader/loadObj.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadObj", function() { return _loader_loadObj__WEBPACK_IMPORTED_MODULE_24__["loadObj"]; });

/* harmony import */ var _utils_checkWebGL2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/checkWebGL2 */ "./node_modules/alfrid/src/utils/checkWebGL2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkWebGL2", function() { return _utils_checkWebGL2__WEBPACK_IMPORTED_MODULE_25__["checkWebGL2"]; });

/* harmony import */ var _utils_EaseNumber__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/EaseNumber */ "./node_modules/alfrid/src/utils/EaseNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EaseNumber", function() { return _utils_EaseNumber__WEBPACK_IMPORTED_MODULE_26__["EaseNumber"]; });

/* harmony import */ var _utils_TweenNumber__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/TweenNumber */ "./node_modules/alfrid/src/utils/TweenNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenNumber", function() { return _utils_TweenNumber__WEBPACK_IMPORTED_MODULE_27__["TweenNumber"]; });

/* harmony import */ var _utils_SpringNumber__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils/SpringNumber */ "./node_modules/alfrid/src/utils/SpringNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpringNumber", function() { return _utils_SpringNumber__WEBPACK_IMPORTED_MODULE_28__["SpringNumber"]; });

/* harmony import */ var _utils_OrbitalControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/OrbitalControl */ "./node_modules/alfrid/src/utils/OrbitalControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrbitalControl", function() { return _utils_OrbitalControl__WEBPACK_IMPORTED_MODULE_29__["OrbitalControl"]; });

/* harmony import */ var _utils_BitSwitch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/BitSwitch */ "./node_modules/alfrid/src/utils/BitSwitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitSwitch", function() { return _utils_BitSwitch__WEBPACK_IMPORTED_MODULE_30__["BitSwitch"]; });

/* harmony import */ var _utils_HitTestor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./utils/HitTestor */ "./node_modules/alfrid/src/utils/HitTestor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HitTestor", function() { return _utils_HitTestor__WEBPACK_IMPORTED_MODULE_31__["HitTestor"]; });

/* harmony import */ var _utils_Scene__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./utils/Scene */ "./node_modules/alfrid/src/utils/Scene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _utils_Scene__WEBPACK_IMPORTED_MODULE_32__["Scene"]; });

/* harmony import */ var _utils_parseHdr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utils/parseHdr */ "./node_modules/alfrid/src/utils/parseHdr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseHdr", function() { return _utils_parseHdr__WEBPACK_IMPORTED_MODULE_33__["parseHdr"]; });

/* harmony import */ var _utils_parseDds__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils/parseDds */ "./node_modules/alfrid/src/utils/parseDds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDds", function() { return _utils_parseDds__WEBPACK_IMPORTED_MODULE_34__["parseDds"]; });

/* harmony import */ var _utils_parseObj__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./utils/parseObj */ "./node_modules/alfrid/src/utils/parseObj.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseObj", function() { return _utils_parseObj__WEBPACK_IMPORTED_MODULE_35__["parseObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorTexture", function() { return _core_GLTexture__WEBPACK_IMPORTED_MODULE_3__["getColorTexture"]; });

/* harmony import */ var _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./utils/WebGLNumber */ "./node_modules/alfrid/src/utils/WebGLNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLNumber", function() { return _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_36__["WebGLNumber"]; });

/* harmony import */ var _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./utils/WebGLConst */ "./node_modules/alfrid/src/utils/WebGLConst.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLConst", function() { return _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_37__["WebGLConst"]; });

/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shader */ "./node_modules/alfrid/src/shader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShaderLibs", function() { return _shader__WEBPACK_IMPORTED_MODULE_38__["ShaderLibs"]; });

/* harmony import */ var _shader_BasicColorShader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shader/BasicColorShader */ "./node_modules/alfrid/src/shader/BasicColorShader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicColorShader", function() { return _shader_BasicColorShader__WEBPACK_IMPORTED_MODULE_39__["BasicColorShader"]; });

/* harmony import */ var _shader_DiffuseLightShader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shader/DiffuseLightShader */ "./node_modules/alfrid/src/shader/DiffuseLightShader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiffuseLightShader", function() { return _shader_DiffuseLightShader__WEBPACK_IMPORTED_MODULE_40__["DiffuseLightShader"]; });

/* harmony import */ var _shader_PBRShader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shader/PBRShader */ "./node_modules/alfrid/src/shader/PBRShader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PBRShader", function() { return _shader_PBRShader__WEBPACK_IMPORTED_MODULE_41__["PBRShader"]; });

/* harmony import */ var _utils_polyfixes__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./utils/polyfixes */ "./node_modules/alfrid/src/utils/polyfixes.js");
/* harmony import */ var _utils_polyfixes__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfixes__WEBPACK_IMPORTED_MODULE_42__);
// core







// cameras




// maths


// helpers












// loaders





// utils
















// shader





// polyfill fixes



/***/ }),

/***/ "./node_modules/alfrid/src/camera/Camera.js":
/*!**************************************************!*\
  !*** ./node_modules/alfrid/src/camera/Camera.js ***!
  \**************************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");


class Camera {
  constructor() {
    this._mtxView = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
    this._mtxProj = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
    this._near = 0;
    this._far = 0;
    this._lookDir = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  }

  /**
   * Update the view matrix with look At function
   *
   * @param {vec3} mEye the position of the camera
   * @param {vec3} mCenter the target of the camera looking at
   * @param {vec3} mUp the up vector
   */
  lookAt(mEye, mCenter, mUp = [0, 1, 0]) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].lookAt(this._mtxView, mEye, mCenter, mUp);
  }

  /**
   * Set the camera from view & projection matrix
   *
   * @param {mat4} mView the view matrix
   * @param {mat4} mProj the projection matrix
   */
  setFromViewProjection(mView, mProj) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].copy(this._mtxView, mView);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].copy(this._mtxProj, mProj);
  }

  /**
   * Update the view matrix of the camera
   *
   * @param {mat4} mMtx the view matrix
   */
  setViewMatrix(mMtx) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].copy(this._mtxView, mMtx);
  }

  /**
   * Update the projection matrix of the camera
   *
   * @param {mat4} mMtx the projection matrix
   */
  setProjectionMatrix(mMtx) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].copy(this._mtxProj, mMtx);
  }

  /**
   * Update the matrices of the camera, to be overwriten
   *
   */
  _updateMatrices() {}

  /**
   * Get view matrix from camera
   *
   * @returns {mat4} the view matrix
   */
  get viewMatrix() {
    return this._mtxView;
  }

  /**
   * Get view matrix from camera
   *
   * @returns {mat4} the view matrix
   */
  get view() {
    return this._mtxView;
  }

  /**
   * Get projection matrix from camera
   *
   * @returns {mat4} the projection matrix
   */
  get projectionMatrix() {
    return this._mtxProj;
  }

  /**
   * Get projection matrix from camera
   *
   * @returns {mat4} the projection matrix
   */
  get projection() {
    return this._mtxProj;
  }

  /**
   * Get the position of the camera
   *
   * @returns {vec3} the position of the camera
   */
  get position() {
    const mtxInvert = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].invert(mtxInvert, this._mtxView);
    return [mtxInvert[12], mtxInvert[13], mtxInvert[14]];
  }

  /**
   * Get the pointing direction of the camera
   *
   * @returns {vec3} the pointing direction of the camera
   */
  get direction() {
    const mtxRot = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat3"].create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat3"].fromMat4(mtxRot, this._mtxView);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat3"].transpose(mtxRot, mtxRot);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].transformMat3(this._lookDir, [0, 0, -1], mtxRot);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].normalize(this._lookDir, this._lookDir);

    return this._lookDir;
  }

  /**
   * Set the near clip plane of the camera
   *
   * @param {float} mValue the near clip plane distance
   */
  set near(mValue) {
    this._near = mValue;
    this._updateMatrices();
  }

  /**
   * Get the near clip plane of the camera
   *
   * @returns {float} near clip plane distance
   */
  get near() {
    return this._near;
  }

  /**
   * Set the far clip plane of the camera
   *
   * @param {float} mValue the far clip plane distance
   */
  set far(mValue) {
    this._far = mValue;
    this._updateMatrices();
  }

  /**
   * Get the far clip plane of the camera
   *
   * @returns {float} far clip plane distance
   */
  get far() {
    return this._far;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/camera/CameraOrtho.js":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/camera/CameraOrtho.js ***!
  \*******************************************************/
/*! exports provided: CameraOrtho */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraOrtho", function() { return CameraOrtho; });
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ "./node_modules/alfrid/src/camera/Camera.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");



class CameraOrtho extends _Camera__WEBPACK_IMPORTED_MODULE_0__["Camera"] {
  constructor(left, right, top, bottom, near = 0.1, far = 100) {
    super();

    this._left = 0;
    this._right = 0;
    this._top = 0;
    this._bottom = 0;

    this.ortho(left, right, top, bottom, near, far);
  }

  /**
   * Update the projection matrix with orthogonal function
   *
   * @param {float} left the left boundary
   * @param {float} right the right boundary
   * @param {float} top the top boundary
   * @param {float} bottom the bottom boundary
   * @param {float} near the near clip plane distance
   * @param {float} far the far clip plane distance
   */
  ortho(left, right, top, bottom, near = 0.1, far = 100) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].ortho(this._mtxProj, left, right, bottom, top, near, far);

    // save state
    this._left = left;
    this._right = right;
    this._top = top;
    this._bottom = bottom;
    this._near = near;
    this._far = far;
  }

  /**
   * Update the matrices after resetting the near or far clip plane
   *
   */
  _updateMatrices() {
    this.ortho(
      this._left,
      this._right,
      this._top,
      this._bottom,
      this._near,
      this._far
    );
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/camera/CameraPerspective.js":
/*!*************************************************************!*\
  !*** ./node_modules/alfrid/src/camera/CameraPerspective.js ***!
  \*************************************************************/
/*! exports provided: CameraPerspective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPerspective", function() { return CameraPerspective; });
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ "./node_modules/alfrid/src/camera/Camera.js");
/* harmony import */ var _math_Ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Ray */ "./node_modules/alfrid/src/math/Ray.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");




class CameraPerspective extends _Camera__WEBPACK_IMPORTED_MODULE_0__["Camera"] {
  constructor(mFov, mAspectRatio, mNear, mFar) {
    super();
    this._fov = 0;
    this._ratio = 0;
    this.setPerspective(mFov, mAspectRatio, mNear, mFar);
  }

  /**
   * Update the projection matrix with perspective function
   *
   * @param {float} mFov the field of view
   * @param {float} mAspectRatio the aspect ratio
   * @param {float} mNear the near clip plane distance
   * @param {float} mFar the far clip plane distance
   */
  setPerspective(mFov, mAspectRatio, mNear, mFar) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].perspective(this._mtxProj, mFov, mAspectRatio, mNear, mFar);
    this._near = mNear;
    this._far = mFar;
    this._fov = mFov;
    this._ratio = mAspectRatio;
  }

  /**
   * Set the aspect ratio of the camera
   *
   * @param {float} mAspectRatio the aspect ratio
   */
  setAspectRatio(mAspectRatio) {
    this._ratio = mAspectRatio;
    this._updateMatrices();
  }

  /**
   * Generate a ray from the camera
   *
   * @param {vec3} mScreenPosition the screen space position
   * @param {Ray} mRay the ray to overwrite
   * @returns {Ray} the ray
   */
  generateRay(mScreenPosition, mRay) {
    const mInverseViewProj = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].create();
    const cameraDir = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].create();

    const proj = this._mtxProj;
    const view = this._mtxView;

    gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].multiply(mInverseViewProj, proj, view);
    gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].invert(mInverseViewProj, mInverseViewProj);

    gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].transformMat4(cameraDir, mScreenPosition, mInverseViewProj);
    gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].sub(cameraDir, cameraDir, this.position);
    gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].normalize(cameraDir, cameraDir);

    if (!mRay) {
      mRay = new _math_Ray__WEBPACK_IMPORTED_MODULE_1__["Ray"](this.position, cameraDir);
    } else {
      mRay.origin = this.position;
      mRay.direction = cameraDir;
    }

    return mRay;
  }

  /**
   * Update the matrices after resetting the near or far clip plane
   *
   */
  _updateMatrices() {
    this.setPerspective(this._fov, this._ratio, this._near, this._far);
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/core/FrameBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/alfrid/src/core/FrameBuffer.js ***!
  \*****************************************************/
/*! exports provided: FrameBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameBuffer", function() { return FrameBuffer; });
/* harmony import */ var _GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _GLTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GLTexture */ "./node_modules/alfrid/src/core/GLTexture.js");
/* harmony import */ var _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WebGLNumber */ "./node_modules/alfrid/src/utils/WebGLNumber.js");
/* harmony import */ var _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/WebGLConst */ "./node_modules/alfrid/src/utils/WebGLConst.js");
/* harmony import */ var _utils_LogError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/LogError */ "./node_modules/alfrid/src/utils/LogError.js");






function FrameBuffer(mWidth, mHeight, mParameters = {}, mNumTargets = 1) {
  let _GL;
  let _frameBuffer;
  const _width = mWidth;
  const _height = mHeight;
  const _parameters = mParameters;
  const _numTargets = mNumTargets;
  const _textures = [];
  let _depthTexture;

  /**
   * Bind the frame buffer
   *
   * @param {GL} mGL the GLTool instance
   * @param {boolean} mAutoSetViewport automatically set the viewport to framebuffer's viewport
   */
  this.bind = function(mGL, mAutoSetViewport = true) {
    if (mGL !== undefined && _GL !== undefined && mGL !== _GL) {
      Object(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["default"])(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["Errors"].FRAMEBUFFER_CONTEXT, _GL.id);
      return;
    }

    _GL = mGL || _GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    const { gl } = _GL;

    if (_numTargets > 1 && !_GL.multiRenderTargetSupport) {
      Object(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["default"])(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["Errors"].DRAW_BUFFERS, _GL.id);
    }

    if (!_frameBuffer) {
      _initFrameBuffer();
    }

    if (mAutoSetViewport) {
      _GL.viewport(0, 0, _width, _height);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, _frameBuffer);
  };

  /**
   * Unbind the frame buffer
   *
   * @param {boolean} mAutoSetViewport automatically set the viewport back to GL's viewport
   */
  this.unbind = function(mAutoSetViewport = true) {
    if (mAutoSetViewport) {
      _GL.viewport(0, 0, _GL.width, _GL.height);
    }
    const { gl } = _GL;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    _textures.forEach((texture) => {
      texture.generateMipmap();
    });
  };

  /**
   * Get the texture
   *
   * @param {number} mIndex the index of the texture
   */
  this.getTexture = function(mIndex = 0) {
    return _textures[mIndex];
  };

  /**
   * Destroy the framebuffer
   *
   */
  this.destroy = function() {
    const { gl } = _GL;

    // delete all textures
    _textures.forEach((t) => t.destroy());

    // delete depth texture
    _depthTexture.destroy();

    // delete framebuffer
    gl.deleteFramebuffer(_frameBuffer);

    _GL.frameBufferCount--;
  };

  /**
   * Initialize the framebuffer
   *
   */
  const _initFrameBuffer = () => {
    // create textures
    _initTextures();

    const { gl } = _GL;
    _frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, _frameBuffer);
    _GL.frameBufferCount++;

    const target = _GL.webgl2 ? gl.DRAW_FRAMEBUFFER : gl.FRAMEBUFFER;

    const buffers = [];
    for (let i = 0; i < _numTargets; i++) {
      gl.framebufferTexture2D(
        target,
        gl.COLOR_ATTACHMENT0 + i,
        gl.TEXTURE_2D,
        _textures[i].texture,
        0
      );
      buffers.push(_utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__["WebGLConst"][`COLOR_ATTACHMENT${i}`]);
    }

    // multi render targets
    if (_GL.multiRenderTargetSupport) {
      gl.drawBuffers(buffers);
    }

    // depth texture
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.TEXTURE_2D,
      _depthTexture.texture,
      0
    );

    // UNBIND
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  };

  /**
   * Initialize the textures
   *
   */
  const _initTextures = () => {
    for (let i = 0; i < _numTargets; i++) {
      _textures.push(_createTexture());
    }

    const { gl } = _GL;

    const internalFormat = _GL.webgl2
      ? gl.DEPTH_COMPONENT16
      : gl.DEPTH_COMPONENT;

    // depth texture
    _depthTexture = _createTexture(
      internalFormat,
      _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__["WebGLConst"].UNSIGNED_INT,
      _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__["WebGLConst"].DEPTH_COMPONENT,
      {
        minFilter: _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__["WebGLConst"].NEAREST,
        magFilter: _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__["WebGLConst"].NEAREST,
        mipmap: false,
      }
    );
  };

  /**
   * Create texture
   *
   * @param {GLenum} mInternalformat GLenum value of the internal format
   * @param {GLenum} mTexelType GLenum value of texel type
   * @param {GLenum} mFormat GLenum value of the format
   * @param {object} mParameters the texture parameters
   */
  const _createTexture = (
    mInternalformat,
    mTexelType,
    mFormat,
    mParameters = {}
  ) => {
    const parameters = Object.assign({}, _parameters);

    if (!mFormat) {
      mFormat = mInternalformat;
    }

    parameters.internalFormat = mInternalformat || _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__["WebGLConst"].RGBA;
    parameters.format = mFormat || _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__["WebGLConst"].RGBA;
    parameters.type = mTexelType || parameters.type;
    // if (
    //   mTexelType === WebGLConst.UNSIGNED_SHORT ||
    //   mTexelType === WebGLConst.UNSIGNED_INT
    // ) {
    //   // fix for depth textures
    //   parameters.type = mTexelType;
    // }
    Object.assign(parameters, mParameters);

    const texture = new _GLTexture__WEBPACK_IMPORTED_MODULE_1__["GLTexture"](null, parameters, _width, _height);

    // force to create glTexture
    texture.createTexture(_GL);
    return texture;
  };

  // getter & setters

  /**
   * Get the first texture
   *
   * @returns {GLTexture} the texture
   */
  this.__defineGetter__("texture", function() {
    return _textures[0];
  });

  /**
   * Get the depth texture
   *
   * @returns {GLTexture} the depth texture
   */
  this.__defineGetter__("depthTexture", function() {
    return _depthTexture;
  });

  /**
   * Get the width
   *
   * @returns {number} the width
   */
  this.__defineGetter__("width", function() {
    return _width;
  });

  /**
   * Get the height
   *
   * @returns {number} the height
   */
  this.__defineGetter__("height", function() {
    return _height;
  });
}



/***/ }),

/***/ "./node_modules/alfrid/src/core/GL.js":
/*!********************************************!*\
  !*** ./node_modules/alfrid/src/core/GL.js ***!
  \********************************************/
/*! exports provided: GL, GLTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GL", function() { return GL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTool", function() { return GLTool; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/alfrid/src/utils/index.js");
/* harmony import */ var _utils_exposeGLProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/exposeGLProperties */ "./node_modules/alfrid/src/utils/exposeGLProperties.js");
/* harmony import */ var _defaultGLParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultGLParameters */ "./node_modules/alfrid/src/core/defaultGLParameters.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");







let _idTable = 0;

function GLTool() {
  // PRIVATE PROPERTIES
  let _viewport = [0, 0, 0, 0];
  let _aspectRatio = 0;
  let _shader;
  let _camera;
  let _width = 0;
  let _height = 0;
  let _webgl2 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkWebGL2"])();
  let _isMobile = _utils__WEBPACK_IMPORTED_MODULE_2__["isMobile"];

  // matrices
  let _matrixStacks = [];
  const _matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].create();
  const _identityMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].create();
  const _modelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].create();
  const _normalMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat3"].create();
  const _inverselViewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].create();
  const _inverseModelViewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat3"].create();

  // PUBLIC PROPERTIES
  this.id = `WebGLContext${_idTable++}`;
  this.canvas;
  this.gl;

  // EVENTS
  this.CONTEXT_LOST = "contextLost";
  this.CONTEXT_RESTORED = "contextRestored";

  // Resources
  this.shaderCount = 0;
  this.bufferCount = 0;
  this.textureCount = 0;
  this.frameBufferCount = 0;

  this.maxAnisotropy = 0;

  // Multi render targets
  this.multiRenderTargetSupport = false;
  this.maxMultiRenderTargets = 0;

  // PUBLIC METHODS

  /**
   * Initialize the WebGL Context
   *
   * @param {undefined|Canvas|WebGLRenderingContext|WebGL2RenderingContext} mSource the source element
   */
  this.init = function(mSource, mParameters = {}) {
    const params = object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, _defaultGLParameters__WEBPACK_IMPORTED_MODULE_4__["default"], mParameters);

    if (mSource === undefined) {
      const canvas = document.createElement("canvas");
      this.init(canvas, params);
      return;
    } else if (mSource instanceof HTMLCanvasElement) {
      this.canvas = mSource;
      let target = _webgl2 ? "webgl2" : "webgl";
      if (mParameters.webgl1) {
        // force using WebGL1
        target = "webgl";
        _webgl2 = false;
      }
      this.gl = mSource.getContext(target, params);
    } else {
      if (
        window.WebGL2RenderingContext &&
        mSource instanceof WebGL2RenderingContext
      ) {
        _webgl2 = true;
        this.gl = mSource;
        this.canvas = mSource.canvas;
      } else if (mSource instanceof WebGLRenderingContext) {
        _webgl2 = false;
        this.gl = mSource;
        this.canvas = mSource.canvas;
      } else {
        console.error(
          "The source has to be one of the following : Canvas, WebGLRenderingContext or WebGL2RenderingContext"
        );
      }
    }

    // context event handling
    this.canvas.addEventListener("webglcontextlost", onContextLost);
    this.canvas.addEventListener("webglcontextrestored", onContextRestored);

    // Enable extensions
    this.extensions = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getExtensions"])(this);

    // Expose GL properties
    Object(_utils_exposeGLProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(this);

    // Set size
    this.setSize(this.canvas.width, this.canvas.height);

    // Set default blending to alpha blending
    this.enable(this.BLEND);
    this.enableAlphaBlending();

    // Enable Depth Test & Cull face by default
    this.enable(this.DEPTH_TEST);
    this.enable(this.CULL_FACE);

    // Set the default culling
    this.cullFace(GL.BACK);
  };

  /**
   * Clear WebGL Context
   *
   * @param {number} r the red value
   * @param {number} g the green value
   * @param {number} b the blue value
   * @param {number} a the alpha value
   */
  this.clear = function(r = 0, g = 0, b = 0, a = 0) {
    const { gl } = this;
    gl.clearColor(r, g, b, a);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  };

  /**
   * Set WebGL size
   *
   * @param {number} mWidth the width
   * @param {number} mHeight the height
   */
  this.setSize = function(mWidth, mHeight) {
    _width = Math.floor(mWidth);
    _height = Math.floor(mHeight);
    this.canvas.width = _width;
    this.canvas.height = _height;
    _aspectRatio = _width / _height;

    this.viewport(0, 0, _width, _height);
  };

  /**
   * Set WebGL Viewport
   *
   * @param {number} x the x value
   * @param {number} y the y value
   * @param {number} w the width
   * @param {number} h the height
   */
  this.viewport = function(x, y, w, h) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["equals"])(_viewport, [x, y, w, h])) {
      _viewport = [x, y, w, h];
      this.gl.viewport(x, y, w, h);
    }
  };

  /**
   * Set WebGL size
   *
   * @returns {vec4} the WebGL viewport
   */
  this.getViewport = function() {
    return _viewport;
  };

  /**
   * get WebGL canvas aspect ratio
   *
   * @returns {number} the aspect ratio
   */
  this.getAspectRatio = function() {
    return _aspectRatio;
  };

  /**
   * enable specific WebGL capabilities for this context.
   * @param {GLenum} the GLenum value of the capability
   */
  this.enable = function(mParameter) {
    this.gl.enable(mParameter);
  };

  /**
   * disable specific WebGL capabilities for this context.
   * @param {GLenum} mParameter the GLenum value of the capability
   */
  this.disable = function(mParameter) {
    this.gl.disable(mParameter);
  };

  /**
   * Set the culling of the WebGL Context
   * @param {GLenum} mValue the GLenum value of the culling
   */
  this.cullFace = function(mValue) {
    this.gl.cullFace(mValue);
  };

  /**
   * Set WebGL blending to Alpha blending
   *
   */
  this.enableAlphaBlending = function() {
    const { gl } = this;
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  };

  /**
   * Set WebGL blending to Additive blending
   *
   */
  this.enableAdditiveBlending = function() {
    const { gl } = this;
    gl.blendFunc(gl.ONE, gl.ONE);
  };

  /**
   * Set Camera
   *
   * @param {Camera} mCamera the camera going to be used
   */
  this.setMatrices = function(mCamera) {
    _camera = mCamera;
    this.setModelMatrix(_identityMatrix);
  };

  /**
   * Set the model matrix
   *
   * @param {mat4} mModelMatrix the model matrix
   */
  this.setModelMatrix = function(mModelMatrix) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].copy(_modelMatrix, mModelMatrix);
    if (_camera !== undefined) {
      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].multiply(_matrix, _camera.viewMatrix, _modelMatrix);
      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat3"].fromMat4(_normalMatrix, _matrix);
      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat3"].invert(_normalMatrix, _normalMatrix);
      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat3"].transpose(_normalMatrix, _normalMatrix);

      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat3"].fromMat4(_inverseModelViewMatrix, _matrix);
      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat3"].invert(_inverseModelViewMatrix, _inverseModelViewMatrix);
      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].invert(_inverselViewMatrix, _camera.viewMatrix);
    }
  };

  /**
   * Set Active Shader
   *
   * @param {GLShader} mShader the shader going to be use
   */
  this.useShader = function(mShader) {
    _shader = mShader;
    this.shaderProgram = mShader.shaderProgram;
    this.gl.useProgram(this.shaderProgram);
  };

  /**
   * Draw elements
   *
   * @param {Mesh|[Mesh]} mMesh the meshes that is going to be drawn
   */
  this.draw = function(mMesh) {
    if (mMesh.length) {
      mMesh.forEach((m) => this.draw(m));
      return;
    }

    // update the uniform values
    _setupDefaultUniforms();
    _shader.updateUniforms();

    mMesh.bind(this);
    const { drawType } = mMesh;
    const { gl } = this;

    if (mMesh.isInstanced) {
      // DRAWING
      gl.drawElementsInstanced(
        mMesh.drawType,
        mMesh.numItems,
        gl.UNSIGNED_SHORT,
        0,
        mMesh.numInstance
      );
    } else {
      if (drawType === gl.POINTS) {
        gl.drawArrays(drawType, 0, mMesh.vertexSize);
      } else {
        gl.drawElements(drawType, mMesh.numItems, gl.UNSIGNED_INT, 0);
      }
    }

    mMesh.unbind();
  };

  /**
   * Get the current camera
   *
   * @returns {Camera} the camera that is using now
   */
  this.getCamera = function() {
    return _camera;
  };

  /**
   * Destroy WebGL Context
   *
   */
  this.destroy = function(mRemove = true) {
    this.gl.getExtension("WEBGL_lose_context").loseContext();
    if (mRemove && this.canvas.parentNode !== undefined) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  };

  // getter and setters

  /**
   * Get the width of the WebGLContext
   *
   * @returns {number} the width
   */
  this.__defineGetter__("width", function() {
    return _width;
  });

  /**
   * Get the height of the WebGLContext
   *
   * @returns {number} the height
   */
  this.__defineGetter__("height", function() {
    return _height;
  });

  /**
   * Get if the context is WebGL 2 rendering context
   *
   * @returns {bool} if context is WebGL 2
   */
  this.__defineGetter__("webgl2", function() {
    return _webgl2;
  });

  /**
   * Get if it's running on a mobile browser
   *
   * @returns {bool} if is mobile browser
   */
  this.__defineGetter__("isMobile", function() {
    return _isMobile;
  });

  /**
   * Get WebGL context's aspect ratio
   *
   * @returns {number} the aspect ratio
   */
  this.__defineGetter__("aspectRatio", function() {
    return _aspectRatio;
  });

  /**
   * Setup the default matrices uniforms of the camera
   *
   */
  const _setupDefaultUniforms = () => {
    if (_camera !== undefined) {
      _shader.uniform("uProjectionMatrix", "mat4", _camera.projectionMatrix);
      _shader.uniform("uViewMatrix", "mat4", _camera.viewMatrix);
      _shader.uniform("uNormalMatrix", "mat3", _normalMatrix);
      _shader.uniform(
        "uModelViewMatrixInverse",
        "mat3",
        _inverseModelViewMatrix
      );
    }

    _shader.uniform("uModelMatrix", "mat4", _modelMatrix);
  };

  /**
   * Event Listener for context lost
   *
   */
  const onContextLost = () => {
    this.emit(this.CONTEXT_LOST);
  };

  /**
   * Event Listener for context restored
   *
   */
  const onContextRestored = () => {
    this.emit(this.CONTEXT_RESTORED);
    /*
    At the point that setupWebGLStateAndResources is called the browser has reset all state to the default WebGL state and all previously allocated resources are invalid. So, you need to re-create textures, buffers, framebuffers, renderbuffers, shaders, programs, and setup your state (clearColor, blendFunc, depthFunc, etc...)
    */
  };
}

GLTool.prototype = Object.assign(Object.create(events__WEBPACK_IMPORTED_MODULE_0___default.a.prototype), {
  constructor: GLTool,
});
const GL = new GLTool();



/***/ }),

/***/ "./node_modules/alfrid/src/core/GLCubeTexture.js":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/core/GLCubeTexture.js ***!
  \*******************************************************/
/*! exports provided: GLCubeTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLCubeTexture", function() { return GLCubeTexture; });
/* harmony import */ var _GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/TextureUtils */ "./node_modules/alfrid/src/utils/TextureUtils.js");
/* harmony import */ var _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WebGLNumber */ "./node_modules/alfrid/src/utils/WebGLNumber.js");
/* harmony import */ var _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/WebGLConst */ "./node_modules/alfrid/src/utils/WebGLConst.js");
/* harmony import */ var _utils_LogError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/LogError */ "./node_modules/alfrid/src/utils/LogError.js");






class GLCubeTexture {
  constructor(mSource, mParam = {}, mWidth = 0, mHeight = 0) {
    this._source = mSource;
    this._isHtmlElement = Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["isSourceHtmlElement"])(this._source[0]);
    this._getDimension(mSource, mWidth, mHeight);
    this._params = Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["getTextureParameters"])(mParam, this._width, this._height);
    this._checkMipmap();
  }

  /**
   * Bind the texture
   *
   * @param {number} mIndex the binding target
   * @param {GL} mGL the GLTool instance
   */
  bind(mIndex, mGL) {
    this.createTexture(mGL);

    const { gl } = this.GL;
    gl.activeTexture(gl.TEXTURE0 + mIndex);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this._texture);
  }

  /**
   * Unbind the texture
   *
   */
  unbind() {
    this.GL.gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
  }

  /**
   * Create the texture
   *
   */
  createTexture(mGL) {
    if (mGL !== undefined && this.GL !== undefined && mGL !== this.GL) {
      Object(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["default"])(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["Errors"].CUBE_TEXTURE_CONTEXT, this.GL.id);
      return;
    }

    this.GL = mGL || _GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    if (!this._texture) {
      Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["webgl2TextureCheck"])(this.GL, this._params);
      this._uploadTexture();
    }
  }

  /**
   * Display the properties of the texture
   *
   */
  showProperties() {
    console.log("Dimension :", this._width, this._height);
    for (const s in this._params) {
      console.log(s, _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_2__["WebGLNumber"][this._params[s]] || this._params[s]);
    }
  }

  /**
   * Upload and create the texture
   *
   */
  _uploadTexture() {
    const { gl } = this.GL;

    const targets = [
      gl.TEXTURE_CUBE_MAP_POSITIVE_X,
      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
    ];

    let numLevels = 1;
    let index = 0;
    numLevels = this._source.length / 6;
    this.numLevels = numLevels;

    this._texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this._texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

    let w = this._width;
    let h = this._height;

    for (let level = 0; level < numLevels; level++) {
      targets.forEach((target, i) => {
        index = i * numLevels + level;

        if (this._isHtmlElement && !this.GL.webgl2) {
          // cmft irradiance dds missing data
          if (this._source[index].length > 0) {
            gl.texImage2D(
              target,
              level,
              this._params.internalFormat,
              this._params.format,
              this._params.type,
              this._source[index]
            );
          }
        } else {
          if (this._source[index].length > 0) {
            gl.texImage2D(
              target,
              level,
              this._params.internalFormat,
              w,
              h,
              0,
              this._params.format,
              this._params.type,
              this._source[index]
            );
          }
        }
      });

      w = w >> 1;
      h = h >> 1;
    }

    if (this._generateMipmap) {
      gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    }

    // texture parameters
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_MAG_FILTER,
      this._params.magFilter
    );
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_MIN_FILTER,
      this._params.minFilter
    );
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_WRAP_S,
      this._params.wrapS
    );
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_WRAP_T,
      this._params.wrapT
    );
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha);

    // unbind the texture
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
  }

  /**
   * Check if the texture could have mipmap
   *
   */
  _checkMipmap() {
    this._generateMipmap = this._params.mipmap;

    if (!(Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(this._width) && Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(this._height))) {
      this._generateMipmap = false;
    }

    const minFilter = _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_2__["WebGLNumber"][this._params.minFilter];
    if (minFilter.indexOf("MIPMAP") === -1) {
      this._generateMipmap = false;
    }
  }

  /**
   * Getting the dimension of the source
   *
   */
  _getDimension(mSource, mWidth, mHeight) {
    if (mSource) {
      // for html image / video element
      this._width = mSource[0].width || mSource[0].videoWidth;
      this._height = mSource[0].height || mSource[0].videoWidth;

      // for manual width / height settings
      this._width = this._width || mWidth;
      this._height = this._height || mHeight;

      // auto detect ( data array) ? not sure is good idea ?
      // todo : check HDR
      if (!this._width || !this._height) {
        this._width = this._height = Math.sqrt(mSource[0].length / 4);
        // console.log('Auto detect, data dimension : ', this._width, this._height);
      }
    } else {
      this._width = mWidth;
      this._height = mHeight;
    }
  }

  // getter & setters

  /**
   * Get the glTexture
   *
   * @returns {glTexture} the webgl texture
   */
  get texture() {
    return this._texture;
  }

  /**
   * Get the width of the texture
   *
   * @returns {number} the width of the texture
   */
  get width() {
    return this._width;
  }

  /**
   * Get the height of the texture
   *
   * @returns {number} the height of the texture
   */
  get height() {
    return this._height;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/core/GLShader.js":
/*!**************************************************!*\
  !*** ./node_modules/alfrid/src/core/GLShader.js ***!
  \**************************************************/
/*! exports provided: GLShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLShader", function() { return GLShader; });
/* harmony import */ var _GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ShaderUtils */ "./node_modules/alfrid/src/utils/ShaderUtils.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ */ "./node_modules/alfrid/src/utils/index.js");
/* harmony import */ var _shader_glsl_basic_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shader/glsl/basic.vert */ "./node_modules/alfrid/src/shader/glsl/basic.vert");
/* harmony import */ var _shader_glsl_basic_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shader/glsl/basic.frag */ "./node_modules/alfrid/src/shader/glsl/basic.frag");






function GLShader(mVertexShader, mFragmentShader) {
  this.vertexShader = mVertexShader || _shader_glsl_basic_vert__WEBPACK_IMPORTED_MODULE_3__["default"];
  this.fragmentShader = mFragmentShader || _shader_glsl_basic_frag__WEBPACK_IMPORTED_MODULE_4__["default"];
  this.shaderProgram;

  let _GL;
  let _uniformCache = {};

  /**
   * Bind the current shader
   *
   * @param {GL} mGL the GLTool instance
   */
  this.bind = function(mGL) {
    if (mGL !== undefined && _GL !== undefined && mGL !== _GL) {
      console.error(
        "this shader has been bind to a different WebGL Rendering Context",
        _GL.id
      );
      return;
    }

    _GL = mGL || _GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    if (!this.shaderProgram) {
      const vsShader = createShaderProgram(this.vertexShader, true);
      const fsShader = createShaderProgram(this.fragmentShader, false);
      attachShaderProgram(vsShader, fsShader);
    }

    _GL.useShader(this);
  };

  /**
   * Set the uniform of the shader
   *
   * @param {string|object} mName the name of the uniform
   * @param {string} mType the type of the uniform
   * @param {number|[numbers]} mValue the value of the uniform
   */
  this.uniform = function(mName, mType, mValue) {
    let value;
    let type;
    if (mValue === undefined) {
      type = Object(_utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_1__["getUniformType"])(mType);
      value = mType;
    } else {
      type = mType;
      value = mValue;
    }
    const uniformType = _utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_1__["uniformMapping"][type];

    if (!_uniformCache[mName]) {
      _uniformCache[mName] = {
        type,
        uniformType,
        value: Object(_utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_1__["cloneValue"])(value),
        changed: true,
      };
    } else {
      const oUniform = _uniformCache[mName];
      if (!Object(_utils___WEBPACK_IMPORTED_MODULE_2__["equals"])(oUniform.value, value)) {
        oUniform.value = Object(_utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_1__["cloneValue"])(value);
        oUniform.changed = true;
      }
    }
    return this;
  };

  /**
   * Destroy the current shader
   *
   */
  this.updateUniforms = function() {
    if (!_GL) {
      console.warn(
        "No WebGL Context has been set yet, please call shader.bind() first"
      );
      return;
    }
    const { gl } = _GL;

    for (let s in _uniformCache) {
      const oUniform = _uniformCache[s];
      if (oUniform.changed) {
        const name = s;

        if (!oUniform.uniformLoc) {
          oUniform.uniformLoc = gl.getUniformLocation(this.shaderProgram, name);
        }
        const { uniformLoc, uniformType, value } = oUniform;
        if (uniformLoc !== null) {
          if (uniformType.indexOf("Matrix") === -1) {
            gl[uniformType](uniformLoc, value);
          } else {
            gl[uniformType](uniformLoc, false, value);
          }
        }

        oUniform.changed = false;
      }
    }
  };

  /**
   * Destroy the current shader
   *
   */
  this.destroy = function() {
    const { gl } = _GL;
    gl.deleteProgram(this.shaderProgram);
    _GL.shaderCount--;
  };

  /**
   * Create & Compile shader
   *
   * @param {string} mShaderStr the shader program text
   * @param {boolean} isVertexShader is vertex shader or not
   */
  const createShaderProgram = (mShaderStr, isVertexShader) => {
    const { gl } = _GL;
    const shaderType = isVertexShader ? _GL.VERTEX_SHADER : _GL.FRAGMENT_SHADER;
    const shader = gl.createShader(shaderType);

    gl.shaderSource(shader, mShaderStr);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn("Error in Shader : ", gl.getShaderInfoLog(shader));
      console.log(Object(_utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_1__["addLineNumbers"])(mShaderStr));
      return null;
    }

    return shader;
  };

  /**
   * Attach shader
   *
   * @param {glShader} mVertexShader the vertex shader
   * @param {glShader} mFragmentShader the fragment shader
   */
  const attachShaderProgram = (mVertexShader, mFragmentShader) => {
    const { gl } = _GL;

    this.shaderProgram = gl.createProgram();
    gl.attachShader(this.shaderProgram, mVertexShader);
    gl.attachShader(this.shaderProgram, mFragmentShader);
    gl.deleteShader(mVertexShader);
    gl.deleteShader(mFragmentShader);

    gl.linkProgram(this.shaderProgram);
    _GL.shaderCount++;
  };
}




/***/ }),

/***/ "./node_modules/alfrid/src/core/GLTexture.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/core/GLTexture.js ***!
  \***************************************************/
/*! exports provided: GLTexture, getColorTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTexture", function() { return GLTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorTexture", function() { return getColorTexture; });
/* harmony import */ var _GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/TextureUtils */ "./node_modules/alfrid/src/utils/TextureUtils.js");
/* harmony import */ var _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WebGLNumber */ "./node_modules/alfrid/src/utils/WebGLNumber.js");
/* harmony import */ var _utils_BitSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/BitSwitch */ "./node_modules/alfrid/src/utils/BitSwitch.js");
/* harmony import */ var _utils_LogError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/LogError */ "./node_modules/alfrid/src/utils/LogError.js");






const MIN_FILTER = 0;
const MAG_FILTER = 1;
const WRAP_S = 2;
const WRAP_T = 3;

class GLTexture {
  constructor(mSource, mParam = {}, mWidth = 0, mHeight = 0) {
    this._source = mSource;
    this._isHtmlElement = Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["isSourceHtmlElement"])(this._source);
    if (!this._isHtmlElement && mSource) {
      if (!Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["checkSource"])(mSource, mParam)) {
        return;
      }
    }

    this._getDimension(mSource, mWidth, mHeight);
    this._params = Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["getTextureParameters"])(mParam, this._width, this._height);
    this._checkMipmap();

    // states
    this._parametersState = new _utils_BitSwitch__WEBPACK_IMPORTED_MODULE_3__["BitSwitch"](0);
  }

  /**
   * Bind the texture
   *
   * @param {number} mIndex the binding target
   * @param {GL} mGL the GLTool instance
   */
  bind(mIndex, mGL) {
    if (mGL !== undefined && this.GL !== undefined && mGL !== this.GL) {
      Object(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["default"])(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["Errors"].TEXTURE_CONTEXT, this.GL.id);
      return;
    }

    this.GL = mGL || _GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    const { gl } = this.GL;

    this.createTexture(this.GL);

    gl.activeTexture(gl.TEXTURE0 + mIndex);
    gl.bindTexture(gl.TEXTURE_2D, this._texture);

    this._checkParameters();
  }

  /**
   * Create the texture
   *
   */
  createTexture(mGL) {
    if (mGL !== undefined && this.GL !== undefined && mGL !== this.GL) {
      Object(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["default"])(_utils_LogError__WEBPACK_IMPORTED_MODULE_4__["Errors"].TEXTURE_CONTEXT, this.GL.id);
      return;
    }

    this.GL = mGL || _GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    if (!this._texture) {
      Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["webgl2TextureCheck"])(this.GL, this._params);
      this._uploadTexture();
    }
  }

  /**
   * Update the texture
   *
   * @param {object} mSource the texture source
   */
  updateTexture(mSource) {
    this._source = mSource;
    this._uploadTexture();
  }

  /**
   * Generate the mipmap of the texture
   *
   */
  generateMipmap() {
    if (!this._generateMipmap) {
      return;
    }
    const { gl } = this.GL;
    gl.bindTexture(gl.TEXTURE_2D, this._texture);
    gl.generateMipmap(gl.TEXTURE_2D);
  }

  /**
   * Destroy the texture
   *
   */
  destroy() {
    const { gl } = this.GL;
    gl.deleteTexture(this._texture);
    this.GL.textureCount--;
  }

  /**
   * Display the properties of the texture
   *
   */
  showProperties() {
    console.log("Dimension :", this._width, this._height);
    for (const s in this._params) {
      console.log(s, _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_2__["WebGLNumber"][this._params[s]] || this._params[s]);
    }
  }

  /**
   * Upload and create the texture
   *
   */
  _uploadTexture() {
    const { gl } = this.GL;

    if (!this._texture) {
      this._texture = gl.createTexture();
      this.GL.textureCount++;
    }
    gl.bindTexture(gl.TEXTURE_2D, this._texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    if (this._isHtmlElement && !this.GL.webgl2) {
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        this._params.internalFormat,
        this._params.format,
        this._params.type,
        this._source
      );
    } else {
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        this._params.internalFormat,
        this._width,
        this._height,
        0,
        this._params.format,
        this._params.type,
        this._source
      );
    }

    // texture parameters
    gl.texParameteri(
      gl.TEXTURE_2D,
      gl.TEXTURE_MAG_FILTER,
      this._params.magFilter
    );
    gl.texParameteri(
      gl.TEXTURE_2D,
      gl.TEXTURE_MIN_FILTER,
      this._params.minFilter
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._params.wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._params.wrapT);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha);

    // const ext = this.GL.extensions["EXT_texture_filter_anisotropic"];
    // if (ext) {
    //   const level = this._params.anisotropy || this.GL.maxAnisotropy;
    //   gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, level);
    // }

    if (this._generateMipmap) {
      gl.generateMipmap(gl.TEXTURE_2D);
    }

    // gl.bindTexture(gl.TEXTURE_2D, null);
  }

  /**
   * Check if the paramets has changed
   *
   */
  _checkParameters() {
    const { gl } = this.GL;
    if (this._parametersState.value > 0) {
      if (this._parametersState.get(MIN_FILTER)) {
        gl.texParameteri(
          gl.TEXTURE_2D,
          gl.TEXTURE_MIN_FILTER,
          this._params.minFilter
        );
      } else if (this._parametersState.get(MAG_FILTER)) {
        gl.texParameteri(
          gl.TEXTURE_2D,
          gl.TEXTURE_MAG_FILTER,
          this._params.magFilter
        );
      } else if (this._parametersState.get(WRAP_S)) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._params.wrapS);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._params.wrapT);
      }
    }
    this._parametersState.reset(0);
  }

  /**
   * Getting the dimension of the source
   *
   */
  _getDimension(mSource, mWidth, mHeight) {
    if (mSource) {
      // for html image / video element
      this._width = mSource.width || mSource.videoWidth;
      this._height = mSource.height || mSource.videoWidth;

      // for manual width / height settings
      this._width = this._width || mWidth;
      this._height = this._height || mHeight;

      // auto detect ( data array) ? not sure is good idea ?
      // todo : check HDR
      if (!this._width || !this._height) {
        this._width = this._height = Math.sqrt(mSource.length / 4);
        // console.log('Auto detect, data dimension : ', this._width, this._height);
      }
    } else {
      this._width = mWidth;
      this._height = mHeight;
    }
  }

  /**
   * Check if the texture could have mipmap
   *
   */
  _checkMipmap() {
    this._generateMipmap = this._params.mipmap;

    if (!(Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(this._width) && Object(_utils_TextureUtils__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(this._height))) {
      this._generateMipmap = false;
    }

    const minFilter = _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_2__["WebGLNumber"][this._params.minFilter];
    if (minFilter.indexOf("MIPMAP") === -1) {
      this._generateMipmap = false;
    }
  }

  // getter & setters

  /**
   * Get the glTexture
   *
   * @returns {glTexture} the webgl texture
   */
  get texture() {
    return this._texture;
  }

  /**
   * Set the min filter of the texture
   *
   * @param {GLenum} mValue GLenum value of the min filter
   */
  set minFilter(mValue) {
    this._params.minFilter = mValue;
    this._parametersState.set(MIN_FILTER, 1);
    // webgl2FilterCheck(this._params);
  }

  /**
   * Get the min filter of the texture
   *
   * @returns {GLenum} the min filter value
   */
  get minFilter() {
    return this._params.minFilter;
  }

  /**
   * Set the mag filter of the texture
   *
   * @param {GLenum} mValue GLenum value of the mag filter
   */
  set magFilter(mValue) {
    this._params.magFilter = mValue;
    this._parametersState.set(MAG_FILTER, 1);
    // webgl2FilterCheck(this._params);
  }

  /**
   * Get the mag filter of the texture
   *
   * @returns {GLenum} the mag filter value
   */
  get magFilter() {
    return this._params.magFilter;
  }

  /**
   * Set the s-coordinate of the wrapping
   *
   * @param {GLenum} mValue GLenum value of the wrapping
   */
  set wrapS(mValue) {
    this._params.wrapS = mValue;
    this._parametersState.set(WRAP_S, 1);
  }

  /**
   * Get the s-coordinate of the wrapping
   *
   * @returns {GLenum} the value of s-coordinate of the wrapping
   */
  get wrapS() {
    return this._params.wrapS;
  }

  /**
   * Set the t-coordinate of the wrapping
   *
   * @param {GLenum} mValue GLenum value of the wrapping
   */
  set wrapT(mValue) {
    this._params.wrapT = mValue;
    this._parametersState.set(WRAP_T, 1);
  }

  /**
   * Get the t-coordinate of the wrapping
   *
   * @returns {GLenum} the value of t-coordinate of the wrapping
   */
  get wrapT() {
    return this._params.wrapT;
  }

  /**
   * Get the width of the texture
   *
   * @returns {number} the width of the texture
   */
  get width() {
    return this._width;
  }

  /**
   * Get the height of the texture
   *
   * @returns {number} the height of the texture
   */
  get height() {
    return this._height;
  }
}



const getColorTexture = (mColor) => {
  const _colors = mColor.map((v) => Math.floor(v * 255));
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 4;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `rgba(${_colors[0]}, ${_colors[1]}, ${_colors[2]}, 1)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return new GLTexture(canvas);
};


/***/ }),

/***/ "./node_modules/alfrid/src/core/Mesh.js":
/*!**********************************************!*\
  !*** ./node_modules/alfrid/src/core/Mesh.js ***!
  \**********************************************/
/*! exports provided: Mesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony import */ var _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/WebGLConst */ "./node_modules/alfrid/src/utils/WebGLConst.js");
/* harmony import */ var _utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/BufferUtils */ "./node_modules/alfrid/src/utils/BufferUtils.js");



function Mesh(mDrawType = _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].TRIANGLES) {
  this.drawType = mDrawType;

  // PUBLIC PROPERTIES
  this.numItems = 0;

  // PRIVATE PROPERTIES
  let _attributes = [];
  let _bufferChanged = [];
  let _faces = [];
  let _hasIndexBufferChanged = true;
  let _isInstanced = false;
  let _numInstance = 0;

  let _vao;
  let _usage;
  let _indices;
  let _indexBuffer;
  let _GL;

  /**
   * add or update an attribute
   *
   * @param {array} mData the data of the attribute, array of array
   * @param {string} mName the name of the attribute
   * @param {number} mItemSize the size of each element
   * @param {GLenum} mUsage the usage of the attribute, static or dynamic
   * @param {GLenum} isInstanced if the attribute is an instanced attrbute
   */
  this.bufferData = function(
    mData,
    mName,
    mItemSize,
    mUsage = _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].STATIC_DRAW,
    isInstanced = false
  ) {
    let bufferData;
    let orgData = [];
    if (typeof mData[0] === "number") {
      bufferData = mData;
      if (mItemSize === undefined) {
        console.error("Missing element size for flatten data :", mName);
        return this;
      }

      for (let i = 0; i < bufferData.length; i += mItemSize) {
        const a = [];
        for (let j = 0; j < mItemSize; j++) {
          a.push(bufferData[i + j]);
        }
        orgData.push(a);
      }
    } else {
      orgData = mData;
      bufferData = Object(_utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(mData);
    }

    const itemSize = mItemSize === undefined ? mData[0].length : mItemSize;
    return bufferFlattenData(
      bufferData,
      mData,
      mName,
      itemSize,
      mUsage,
      isInstanced
    );
  };

  /**
   * Add an instanced attribute
   *
   * @param {array} mData the data
   * @param {GLenum} mName the name of the attribute
   */
  this.bufferInstance = function(mData, mName) {
    // Assumption that mData is array of array
    // worth checking for full proof ?
    const itemSize = mData[0].length;
    _numInstance = mData.length;

    return this.bufferData(
      mData,
      mName,
      itemSize,
      _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].STATIC_DRAW,
      true
    );
  };

  /**
   * Add or Update the vertex position attribute
   *
   * @param {array} mData the data of the vertex positions
   * @param {GLenum} mUsage the usage of the attribute, static or dynamic
   */
  this.bufferVertex = function(mData, mUsage = _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].STATIC_DRAW) {
    return this.bufferData(mData, "aVertexPosition", 3, mUsage);
  };

  /**
   * Add or Update the texture coordinate attribute
   *
   * @param {array} mData the data of the texture coordinate
   * @param {GLenum} mUsage the usage of the attribute, static or dynamic
   */
  this.bufferTexCoord = function(mData, mUsage = _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].STATIC_DRAW) {
    return this.bufferData(mData, "aTextureCoord", 2, mUsage);
  };

  /**
   * Add or Update the vertex normal attribute
   *
   * @param {array} mData the data of the normal
   * @param {GLenum} mUsage the usage of the attribute, static or dynamic
   */
  this.bufferNormal = function(mData, mUsage = _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].STATIC_DRAW) {
    return this.bufferData(mData, "aNormal", 3, mUsage);
  };

  /**
   * Add or Update the index buffer
   *
   * @param {array} mData the data of the index buffer
   * @param {GLenum} mUsage the usage of the attribute, static or dynamic
   */
  this.bufferIndex = function(mData, mUsage = _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].STATIC_DRAW) {
    _usage = mUsage;
    _indices = new Uint32Array(mData);
    this.numItems = _indices.length;
    _hasIndexBufferChanged = true;
    return this;
  };

  /**
   * Bind the buffers of current Mesh
   *
   * @param {GL} mGL the GLTool instance
   */
  this.bind = function(mGL) {
    if (mGL !== undefined && _GL !== undefined && mGL !== _GL) {
      console.error(
        "this mesh has been bind to a different WebGL Rendering Context"
      );
      return;
    }

    _GL = mGL || GL;
    const { gl } = _GL;
    generateBuffers();
    gl.bindVertexArray(_vao);

    this.vertexSize = this.getSource("aVertexPosition").length;
  };

  this.unbind = function() {};

  /**
   * Find an attribute by name
   *
   * @param {string} mName the name of the attribute
   * @returns {object} the attribute object
   */
  this.getAttribute = function(mName) {
    return _attributes.find((a) => a.name === mName);
  };

  /**
   * get all attribtues
   *
   * @returns {array} the array of attributes
   */
  this.getAttributes = function() {
    return _attributes;
  };

  /**
   * Find data source by name
   *
   * @param {string} mName the name of the attribute
   * @returns {[array]} the source data of the attribute ( array of arrays )
   */
  this.getSource = function(mName) {
    const attr = this.getAttribute(mName);
    return attr ? attr.source : [];
  };

  /**
   * Compute the face data of the mesh
   *
   */
  this.generateFaces = function() {
    _faces = [];
    let ia, ib, ic;
    let a, b, c;
    const { vertices } = this;

    for (let i = 0; i < _indices.length; i += 3) {
      ia = _indices[i];
      ib = _indices[i + 1];
      ic = _indices[i + 2];

      a = vertices[ia];
      b = vertices[ib];
      c = vertices[ic];

      const face = {
        indices: [ia, ib, ic],
        vertices: [a, b, c],
      };

      _faces.push(face);
    }
  };

  /**
   * Destroy all buffers
   *
   */
  this.destroy = function() {
    const { gl } = _GL;
    _attributes.forEach((attr) => {
      gl.deleteBuffer(attr.buffer);
      attr.source = [];
      attr.dataArray = [];
      _GL.bufferCount--;
    });
    if (_indexBuffer) {
      gl.deleteBuffer(_indexBuffer);
      _GL.bufferCount--;
    }
    gl.deleteVertexArray(_vao);

    // resetting
    _attributes = [];
    _indices = [];
    _bufferChanged = [];
    // _enabledVertexAttribute = [];
  };

  // getters and setters
  /**
   * Get the vertices data
   *
   * @returns {array} the vetices data
   */
  this.__defineGetter__("vertices", function() {
    return this.getSource("aVertexPosition");
  });

  /**
   * Get the texture coordinate data
   *
   * @returns {array} the texture coordinate data
   */
  this.__defineGetter__("coords", function() {
    return this.getSource("aTextureCoord");
  });

  /**
   * Get the normal data
   *
   * @returns {array} the normal data
   */
  this.__defineGetter__("normal", function() {
    return this.getSource("aNormal");
  });

  /**
   * Get the indices data
   *
   * @returns {array} the indices data
   */
  this.__defineGetter__("indices", function() {
    return _indices;
  });

  /**
   * Get the face data
   *
   * @returns {array} the face data
   */
  this.__defineGetter__("faces", function() {
    return _faces;
  });

  /**
   * Get if the mesh has instance rendering
   *
   * @returns {bool} if has instances
   */
  this.__defineGetter__("isInstanced", function() {
    return _isInstanced;
  });

  /**
   * Get the number of instances
   *
   * @returns {number} if has instances
   */
  this.__defineGetter__("numInstance", function() {
    return _numInstance;
  });

  /**
   * add or update an attribute
   *
   * @param {array} mData the data of the attribute
   * @param {string} mName the name of the attribute
   * @param {number} mItemSize the size of each element
   * @param {GLenum} mUsage the usage of the attribute, static or dynamic
   * @param {GLenum} isInstanced if the attribute is an instanced attrbute
   */
  const bufferFlattenData = (
    mData,
    mDataOrg,
    mName,
    mItemSize,
    mUsage = _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].STATIC_DRAW,
    isInstanced = false
  ) => {
    const usage = mUsage;
    _isInstanced = isInstanced || _isInstanced;

    const dataArray = new Float32Array(mData);
    const attribute = this.getAttribute(mName);

    if (attribute) {
      //	attribute existed, replace with new data
      attribute.itemSize = mItemSize;
      attribute.dataArray = dataArray;
      attribute.source = mDataOrg;
    } else {
      //	attribute not exist yet, create new attribute object
      _attributes.push({
        name: mName,
        source: mDataOrg,
        itemSize: mItemSize,
        usage,
        dataArray,
        isInstanced,
      });
    }

    _bufferChanged.push(mName);
    return this;
  };

  /**
   * Generate new buffers
   *
   */
  const generateBuffers = () => {
    const { shaderProgram, gl } = _GL;
    if (_bufferChanged.length == 0) {
      return;
    }

    if (!_vao) {
      _vao = gl.createVertexArray();
    }

    gl.bindVertexArray(_vao);

    //	UPDATE BUFFERS
    _attributes.forEach((attrObj) => {
      if (_bufferChanged.indexOf(attrObj.name) !== -1) {
        const buffer = Object(_utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__["getBuffer"])(attrObj, _GL);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, attrObj.dataArray, attrObj.usage);

        const attrPosition = Object(_utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__["getAttribLoc"])(gl, shaderProgram, attrObj.name);
        if (attrPosition >= 0) {
          gl.enableVertexAttribArray(attrPosition);
          gl.vertexAttribPointer(
            attrPosition,
            attrObj.itemSize,
            gl.FLOAT,
            false,
            0,
            0
          );
        }
        attrObj.attrPosition = attrPosition;

        if (attrObj.isInstanced) {
          gl.vertexAttribDivisor(attrPosition, 1);
        }
      }
    });

    //	check index buffer
    _updateIndexBuffer();

    //	UNBIND VAO
    gl.bindVertexArray(null);

    _hasIndexBufferChanged = false;
    _bufferChanged = [];
  };

  /**
   * Update Index Buffer
   *
   */
  const _updateIndexBuffer = () => {
    const { gl } = _GL;
    if (_hasIndexBufferChanged) {
      if (!_indexBuffer) {
        _indexBuffer = gl.createBuffer();
        _GL.bufferCount++;
      }
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, _indices, _usage);
    }
  };
}




/***/ }),

/***/ "./node_modules/alfrid/src/core/defaultGLParameters.js":
/*!*************************************************************!*\
  !*** ./node_modules/alfrid/src/core/defaultGLParameters.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  alpha: false,
  depth: true,
  premultipliedAlpha: false,
});


/***/ }),

/***/ "./node_modules/alfrid/src/helper/Draw.js":
/*!************************************************!*\
  !*** ./node_modules/alfrid/src/helper/Draw.js ***!
  \************************************************/
/*! exports provided: Draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony import */ var _core_GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _core_Mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Mesh */ "./node_modules/alfrid/src/core/Mesh.js");
/* harmony import */ var _core_GLShader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/GLShader */ "./node_modules/alfrid/src/core/GLShader.js");
/* harmony import */ var _utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ShaderUtils */ "./node_modules/alfrid/src/utils/ShaderUtils.js");





class Draw {
  constructor(mGL) {
    this._GL = mGL || _core_GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    this._uniforms = {};
    this._uniformTextures = [];
    this._fbo;

    this._clearColor = { r: 0, g: 0, b: 0, a: 0 };

    return this;
  }

  setClearColor(r = 0, g = 0, b = 0, a = 0) {
    this._clearColor.r = r;
    this._clearColor.g = g;
    this._clearColor.b = b;
    this._clearColor.a = a;
    return this;
  }

  useProgram(vs, fs) {
    if (vs instanceof _core_GLShader__WEBPACK_IMPORTED_MODULE_2__["GLShader"]) {
      this._shader = vs;
    } else {
      this._shader = new _core_GLShader__WEBPACK_IMPORTED_MODULE_2__["GLShader"](vs, fs);
    }

    return this;
  }

  setMesh(mMesh) {
    this._mesh = mMesh;
    return this;
  }

  createMesh(mType) {
    this._mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_1__["Mesh"](mType);
    return this;
  }

  bufferVertex(mArrayVertices) {
    if (!this._mesh) {
      this._mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_1__["Mesh"]();
    }
    this._mesh.bufferVertex(mArrayVertices);
    return this;
  }

  bufferTexCoord(mArrayTexCoords) {
    if (!this._mesh) {
      this._mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_1__["Mesh"]();
    }
    this._mesh.bufferTexCoord(mArrayTexCoords);
    return this;
  }

  bufferNormal(mArrayNormals) {
    if (!this._mesh) {
      this._mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_1__["Mesh"]();
    }
    this._mesh.bufferNormal(mArrayNormals);
    return this;
  }

  bufferIndex(mIndices) {
    if (!this._mesh) {
      this._mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_1__["Mesh"]();
    }
    this._mesh.bufferIndex(mIndices);
    return this;
  }

  bufferInstance(mData, mName) {
    if (!this._mesh) {
      console.warn("Need to create mesh first");
      return this;
    }

    this._mesh.bufferInstance(mData, mName);

    return this;
  }

  bufferData(mArrayData, mName) {
    if (!this._mesh) {
      this._mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_1__["Mesh"]();
    }
    this._mesh.bufferData(mArrayData, mName);
    return this;
  }

  uniform(mName, mType, mValue) {
    const name = mName;
    let value;
    let type;
    if (mValue === undefined) {
      type = Object(_utils_ShaderUtils__WEBPACK_IMPORTED_MODULE_3__["getUniformType"])(mType);
      value = mType;
    } else {
      type = mType;
      value = mValue;
    }

    this._uniforms[name] = {
      type,
      value,
    };

    return this;
  }

  uniformTexture(name, texture, index) {
    return this.bindTexture(name, texture, index);
  }

  bindTexture(name, texture, index) {
    if (index !== undefined) {
      this._uniformTextures[index] = {
        name,
        texture,
      };
    } else {
      this._uniformTextures.push({
        name,
        texture,
      });
    }

    return this;
  }

  bindFrameBuffer(fbo) {
    this._fbo = fbo;
    return this;
  }

  draw() {
    if (!this._shader) {
      console.warn("No GLShader assigned for draw call");
      return;
    }
    if (!this._mesh) {
      console.warn("No Mesh assigned for draw call");
      return;
    }

    if (this._fbo) {
      const { r, g, b, a } = this._clearColor;
      this._fbo.bind(this._GL);
      this._GL.clear(r, g, b, a);
    }

    this._shader.bind(this._GL);
    for (const s in this._uniforms) {
      const o = this._uniforms[s];
      this._shader.uniform(s, o.type, o.value);
    }

    this._uniformTextures.forEach((o, i) => {
      if (o !== undefined) {
        this._shader.uniform(o.name, "int", i);
        o.texture.bind(i, this._GL);
      }
    });

    this._GL.draw(this._mesh);

    if (this._fbo) {
      this._fbo.unbind();
    }

    return this;
  }

  get shader() {
    return this._shader;
  }

  get framebuffer() {
    return this._fbo;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/DrawAxis.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/helper/DrawAxis.js ***!
  \****************************************************/
/*! exports provided: DrawAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawAxis", function() { return DrawAxis; });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./node_modules/alfrid/src/helper/Draw.js");
/* harmony import */ var _shader_glsl_axis_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shader/glsl/axis.vert */ "./node_modules/alfrid/src/shader/glsl/axis.vert");
/* harmony import */ var _shader_glsl_axis_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader/glsl/axis.frag */ "./node_modules/alfrid/src/shader/glsl/axis.frag");




class DrawAxis extends _Draw__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor(mGL) {
    super(mGL);

    const GL = this._GL;
    const r = 1000;
    const positions = [
      [-r, 0, 0],
      [r, 0, 0],
      [0, -r, 0],
      [0, r, 0],
      [0, 0, -r],
      [0, 0, r],
    ];
    const colors = [
      [1, 0, 0],
      [1, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 1],
      [0, 0, 1],
    ];

    const indices = [0, 1, 2, 3, 4, 5];
    this.createMesh(GL.LINES)
      .bufferVertex(positions)
      .bufferData(colors, "aColor")
      .bufferIndex(indices)
      .useProgram(_shader_glsl_axis_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _shader_glsl_axis_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

    this.opacity = 0.75;
  }

  draw() {
    this.uniform("uOpacity", this.opacity);
    super.draw();
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/DrawBall.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/helper/DrawBall.js ***!
  \****************************************************/
/*! exports provided: DrawBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawBall", function() { return DrawBall; });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./node_modules/alfrid/src/helper/Draw.js");
/* harmony import */ var _Geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geom */ "./node_modules/alfrid/src/helper/Geom.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader */ "./node_modules/alfrid/src/shader/index.js");




class DrawBall extends _Draw__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor(mGL) {
    super(mGL);

    this.setMesh(_Geom__WEBPACK_IMPORTED_MODULE_1__["Geom"].sphere(1, 12))
      .useProgram(_shader__WEBPACK_IMPORTED_MODULE_2__["ShaderLibs"].generalVert, _shader__WEBPACK_IMPORTED_MODULE_2__["ShaderLibs"].simpleColorFrag)
      .uniform("uRotation", [0, 0, 0]);
  }

  draw(mPos, mScale = [1, 1, 1], mColor = [1, 1, 1], mOpacity = 1) {
    this.uniform("uTranslate", mPos)
      .uniform("uScale", mScale)
      .uniform("uColor", mColor)
      .uniform("uOpacity", mOpacity);
    super.draw(0);
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/DrawCamera.js":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/helper/DrawCamera.js ***!
  \******************************************************/
/*! exports provided: DrawCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawCamera", function() { return DrawCamera; });
/* harmony import */ var _core_GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _DrawLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawLine */ "./node_modules/alfrid/src/helper/DrawLine.js");
/* harmony import */ var _DrawBall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawBall */ "./node_modules/alfrid/src/helper/DrawBall.js");



const { mat4, vec4 } = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");

class DrawCamera {
  constructor(mGL) {
    const _GL = mGL || _core_GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    this._dLine = new _DrawLine__WEBPACK_IMPORTED_MODULE_1__["DrawLine"](_GL);
    this._dBall = new _DrawBall__WEBPACK_IMPORTED_MODULE_2__["DrawBall"](_GL);

    this.mtx = mat4.create();

    this.color = [1, 1, 1];
    this.opacity = 0.75;

    this._points = [
      [1, 1, -1, 1],
      [-1, 1, -1, 1],
      [1, -1, -1, 1],
      [-1, -1, -1, 1],

      [1, 1, 1, 1],
      [-1, 1, 1, 1],
      [1, -1, 1, 1],
      [-1, -1, 1, 1],
    ];

    this._lines = [
      [0, 1],
      [1, 3],
      [3, 2],
      [2, 0],

      [4, 5],
      [5, 7],
      [7, 6],
      [6, 4],

      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];
  }

  draw(mCamera, mColor, mOpacity) {
    const color = mColor || this.color;
    const opacity = mOpacity || this.opacity;

    mat4.identity(this.mtx, this.mtx);
    mat4.mul(this.mtx, mCamera.projection, mCamera.view);
    mat4.invert(this.mtx, this.mtx);

    const points = this._points.map((pos) => {
      const p = vec4.clone(pos);
      vec4.transformMat4(p, p, this.mtx);

      p[0] /= p[3];
      p[1] /= p[3];
      p[2] /= p[3];
      return [p[0], p[1], p[2]];
    });

    const s = 0.02;
    points.forEach((p) => {
      this._dBall.draw(p, [s, s, s], color, opacity);
    });

    this._lines.forEach((l) => {
      this._dLine.draw(points[l[0]], points[l[1]], color, opacity);
    });
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/DrawCopy.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/helper/DrawCopy.js ***!
  \****************************************************/
/*! exports provided: DrawCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawCopy", function() { return DrawCopy; });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./node_modules/alfrid/src/helper/Draw.js");
/* harmony import */ var _Geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geom */ "./node_modules/alfrid/src/helper/Geom.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader */ "./node_modules/alfrid/src/shader/index.js");




class DrawCopy extends _Draw__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor(mGL) {
    super(mGL);

    this.setMesh(_Geom__WEBPACK_IMPORTED_MODULE_1__["Geom"].bigTriangle()).useProgram(
      _shader__WEBPACK_IMPORTED_MODULE_2__["ShaderLibs"].bigTriangleVert,
      _shader__WEBPACK_IMPORTED_MODULE_2__["ShaderLibs"].copyFrag
    );
  }

  draw(mTex) {
    this.bindTexture("texture", mTex, 0);
    super.draw(0);
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/DrawDotsPlane.js":
/*!*********************************************************!*\
  !*** ./node_modules/alfrid/src/helper/DrawDotsPlane.js ***!
  \*********************************************************/
/*! exports provided: DrawDotsPlane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawDotsPlane", function() { return DrawDotsPlane; });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./node_modules/alfrid/src/helper/Draw.js");
/* harmony import */ var _shader_glsl_dots_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shader/glsl/dots.vert */ "./node_modules/alfrid/src/shader/glsl/dots.vert");
/* harmony import */ var _shader_glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader/glsl/simpleColor.frag */ "./node_modules/alfrid/src/shader/glsl/simpleColor.frag");




class DrawDotsPlane extends _Draw__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor(mGL) {
    super(mGL);

    const GL = this._GL;

    const positions = [];
    const indices = [];
    let index = 0;
    const size = 100;
    let i, j;

    for (i = -size; i < size; i += 1) {
      for (j = -size; j < size; j += 1) {
        positions.push([i, j, 0]);
        indices.push(index);
        index++;

        positions.push([i, 0, j]);
        indices.push(index);
        index++;
      }
    }

    this.createMesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferIndex(indices)
      .useProgram(_shader_glsl_dots_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _shader_glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

    this.color = [1, 1, 1];
    this.opacity = 0.5;
    this.pointScale = 1;
    this.scale = 1;
  }

  draw() {
    const { width, height } = this._GL;
    this.uniform("uColor", this.color)
      .uniform("uOpacity", this.opacity)
      .uniform("uScale", this.scale)
      .uniform("uPointScale", this.pointScale)
      .uniform("uViewport", [width, height]);
    super.draw();
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/DrawLine.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/helper/DrawLine.js ***!
  \****************************************************/
/*! exports provided: DrawLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawLine", function() { return DrawLine; });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./node_modules/alfrid/src/helper/Draw.js");
/* harmony import */ var _shader_glsl_line_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shader/glsl/line.vert */ "./node_modules/alfrid/src/shader/glsl/line.vert");
/* harmony import */ var _shader_glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader/glsl/simpleColor.frag */ "./node_modules/alfrid/src/shader/glsl/simpleColor.frag");




class DrawLine extends _Draw__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor(mGL) {
    super(mGL);

    const GL = this._GL;
    const positions = [[0, 0, 0], [1, 0, 0]];

    const indices = [0, 1];
    this.createMesh(GL.LINES)
      .bufferVertex(positions)
      .bufferIndex(indices)
      .useProgram(_shader_glsl_line_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _shader_glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

    this.color = [1, 1, 1];
    this.opacity = 0.75;
  }

  draw(mA, mB, mColor, mOpacity) {
    this.uniform("uPosA", mA)
      .uniform("uPosB", mB)
      .uniform("uOpacity", mOpacity || this.opacity)
      .uniform("uColor", mColor || this.color);
    super.draw();
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/FboArray.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/helper/FboArray.js ***!
  \****************************************************/
/*! exports provided: FboArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FboArray", function() { return FboArray; });
/* harmony import */ var _core_FrameBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/FrameBuffer */ "./node_modules/alfrid/src/core/FrameBuffer.js");


class FboArray {
  constructor(mNum, width, height, params = {}, mNumTargets = 1) {
    this._fbos = [];

    for (let i = 0; i < mNum; i++) {
      const fbo = new _core_FrameBuffer__WEBPACK_IMPORTED_MODULE_0__["FrameBuffer"](width, height, params, mNumTargets);
      this._fbos.push(fbo);
    }
  }

  /**
   * Swap the Fbo, taking the first one and push back to the last
   *
   */
  swap() {
    const a = this._fbos.shift();
    this._fbos.push(a);
  }

  /**
   * Return the last fbo
   *
   * @returns {FrameBuffer} the fbo
   */
  get read() {
    return this._fbos[this._fbos.length - 1];
  }

  /**
   * Return the first fbo
   *
   * @returns {FrameBuffer} the fbo
   */
  get write() {
    return this._fbos[0];
  }

  /**
   * Return all the fbo
   *
   * @returns {array} the array of fbos
   */
  get all() {
    return this._fbos;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/FboPingPong.js":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/helper/FboPingPong.js ***!
  \*******************************************************/
/*! exports provided: FboPingPong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FboPingPong", function() { return FboPingPong; });
/* harmony import */ var _FboArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FboArray */ "./node_modules/alfrid/src/helper/FboArray.js");
// FboPingPong.js



class FboPingPong extends _FboArray__WEBPACK_IMPORTED_MODULE_0__["FboArray"] {
  constructor(width, height, params = {}, mNumTargets = 1) {
    super(2, width, height, params, mNumTargets);
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/helper/Geom.js":
/*!************************************************!*\
  !*** ./node_modules/alfrid/src/helper/Geom.js ***!
  \************************************************/
/*! exports provided: Geom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geom", function() { return Geom; });
/* harmony import */ var _core_Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Mesh */ "./node_modules/alfrid/src/core/Mesh.js");

const Geom = {
  plane: (width, height, numSegments, axis = "xy") => {
    const positions = [];
    const coords = [];
    const indices = [];
    const normals = [];

    const gapX = width / numSegments;
    const gapY = height / numSegments;
    const gapUV = 1 / numSegments;
    const sx = -width * 0.5;
    const sy = -height * 0.5;
    let index = 0;

    for (let i = 0; i < numSegments; i++) {
      for (let j = 0; j < numSegments; j++) {
        const tx = gapX * i + sx;
        const ty = gapY * j + sy;

        const u = i / numSegments;
        const v = j / numSegments;

        if (axis === "xz") {
          positions.push([tx, 0, ty + gapY]);
          positions.push([tx + gapX, 0, ty + gapY]);
          positions.push([tx + gapX, 0, ty]);
          positions.push([tx, 0, ty]);

          coords.push([u, 1.0 - (v + gapUV)]);
          coords.push([u + gapUV, 1.0 - (v + gapUV)]);
          coords.push([u + gapUV, 1.0 - v]);
          coords.push([u, 1.0 - v]);

          normals.push([0, 1, 0]);
          normals.push([0, 1, 0]);
          normals.push([0, 1, 0]);
          normals.push([0, 1, 0]);
        } else if (axis === "yz") {
          positions.push([0, ty, tx]);
          positions.push([0, ty, tx + gapX]);
          positions.push([0, ty + gapY, tx + gapX]);
          positions.push([0, ty + gapY, tx]);

          coords.push([u, v]);
          coords.push([u + gapUV, v]);
          coords.push([u + gapUV, v + gapUV]);
          coords.push([u, v + gapUV]);

          normals.push([1, 0, 0]);
          normals.push([1, 0, 0]);
          normals.push([1, 0, 0]);
          normals.push([1, 0, 0]);
        } else {
          positions.push([tx, ty, 0]);
          positions.push([tx + gapX, ty, 0]);
          positions.push([tx + gapX, ty + gapY, 0]);
          positions.push([tx, ty + gapY, 0]);

          coords.push([u, v]);
          coords.push([u + gapUV, v]);
          coords.push([u + gapUV, v + gapUV]);
          coords.push([u, v + gapUV]);

          normals.push([0, 0, 1]);
          normals.push([0, 0, 1]);
          normals.push([0, 0, 1]);
          normals.push([0, 0, 1]);
        }

        indices.push(index * 4 + 0);
        indices.push(index * 4 + 1);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 0);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 3);

        index++;
      }
    }

    const mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_0__["Mesh"]()
      .bufferVertex(positions)
      .bufferTexCoord(coords)
      .bufferIndex(indices)
      .bufferNormal(normals);

    return mesh;
  },
  cube: (w, h, d, isInvert = false) => {
    h = h || w;
    d = d || w;

    const x = w / 2;
    const y = h / 2;
    const z = d / 2;

    const positions = [];
    const coords = [];
    const indices = [];
    const normals = [];
    let count = 0;

    // BACK
    positions.push([-x, y, -z]);
    positions.push([x, y, -z]);
    positions.push([x, -y, -z]);
    positions.push([-x, -y, -z]);

    normals.push([0, 0, -1]);
    normals.push([0, 0, -1]);
    normals.push([0, 0, -1]);
    normals.push([0, 0, -1]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // RIGHT
    positions.push([x, y, -z]);
    positions.push([x, y, z]);
    positions.push([x, -y, z]);
    positions.push([x, -y, -z]);

    normals.push([1, 0, 0]);
    normals.push([1, 0, 0]);
    normals.push([1, 0, 0]);
    normals.push([1, 0, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // FRONT
    positions.push([x, y, z]);
    positions.push([-x, y, z]);
    positions.push([-x, -y, z]);
    positions.push([x, -y, z]);

    normals.push([0, 0, 1]);
    normals.push([0, 0, 1]);
    normals.push([0, 0, 1]);
    normals.push([0, 0, 1]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // LEFT
    positions.push([-x, y, z]);
    positions.push([-x, y, -z]);
    positions.push([-x, -y, -z]);
    positions.push([-x, -y, z]);

    normals.push([-1, 0, 0]);
    normals.push([-1, 0, 0]);
    normals.push([-1, 0, 0]);
    normals.push([-1, 0, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // TOP
    positions.push([x, y, -z]);
    positions.push([-x, y, -z]);
    positions.push([-x, y, z]);
    positions.push([x, y, z]);

    normals.push([0, 1, 0]);
    normals.push([0, 1, 0]);
    normals.push([0, 1, 0]);
    normals.push([0, 1, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // BOTTOM
    positions.push([x, -y, z]);
    positions.push([-x, -y, z]);
    positions.push([-x, -y, -z]);
    positions.push([x, -y, -z]);

    normals.push([0, -1, 0]);
    normals.push([0, -1, 0]);
    normals.push([0, -1, 0]);
    normals.push([0, -1, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    if (isInvert) {
      indices.reverse();
    }

    const mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_0__["Mesh"]()
      .bufferVertex(positions)
      .bufferTexCoord(coords)
      .bufferIndex(indices)
      .bufferNormal(normals);

    return mesh;
  },
  sphere: (size, numSegments, isInvert = false) => {
    const positions = [];
    const coords = [];
    const indices = [];
    const normals = [];
    const gapUV = 1 / numSegments;
    let index = 0;

    function getPosition(i, j, isNormal = false) {
      //	rx : -90 ~ 90 , ry : 0 ~ 360
      const rx = (i / numSegments) * Math.PI - Math.PI * 0.5;
      const ry = (j / numSegments) * Math.PI * 2;
      const r = isNormal ? 1 : size;
      const pos = [];
      pos[1] = Math.sin(rx) * r;
      const t = Math.cos(rx) * r;
      pos[0] = Math.cos(ry) * t;
      pos[2] = Math.sin(ry) * t;

      const precision = 10000;
      pos[0] = Math.floor(pos[0] * precision) / precision;
      pos[1] = Math.floor(pos[1] * precision) / precision;
      pos[2] = Math.floor(pos[2] * precision) / precision;

      return pos;
    }

    for (let i = 0; i < numSegments; i++) {
      for (let j = 0; j < numSegments; j++) {
        positions.push(getPosition(i, j));
        positions.push(getPosition(i + 1, j));
        positions.push(getPosition(i + 1, j + 1));
        positions.push(getPosition(i, j + 1));

        normals.push(getPosition(i, j, true));
        normals.push(getPosition(i + 1, j, true));
        normals.push(getPosition(i + 1, j + 1, true));
        normals.push(getPosition(i, j + 1, true));

        const u = j / numSegments;
        const v = i / numSegments;

        coords.push([1.0 - u, v]);
        coords.push([1.0 - u, v + gapUV]);
        coords.push([1.0 - u - gapUV, v + gapUV]);
        coords.push([1.0 - u - gapUV, v]);

        indices.push(index * 4 + 0);
        indices.push(index * 4 + 1);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 0);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 3);

        index++;
      }
    }

    if (isInvert) {
      indices.reverse();
    }

    const mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_0__["Mesh"]()
      .bufferVertex(positions)
      .bufferTexCoord(coords)
      .bufferIndex(indices)
      .bufferNormal(normals);

    return mesh;
  },
  bigTriangle: () => {
    const indices = [2, 1, 0];
    const positions = [[-1, -1], [-1, 4], [4, -1]];

    const meshTri = new _core_Mesh__WEBPACK_IMPORTED_MODULE_0__["Mesh"]()
      .bufferData(positions, "aPosition", 2)
      .bufferIndex(indices);

    return meshTri;
  },
};




/***/ }),

/***/ "./node_modules/alfrid/src/helper/Object3D.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/helper/Object3D.js ***!
  \****************************************************/
/*! exports provided: Object3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3D", function() { return Object3D; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");

function Object3D() {
  let _position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  let _rotation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  let _scale = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].fromValues(1, 1, 1);

  let _matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
  let _matrixParent = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
  let _matrixTranslation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
  let _matrixRotation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
  let _matrixScale = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
  let _matrixQuaternion = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
  let _quat = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].create();

  let _children = [];
  let _needUpdate = true;

  /**
   * Force calling update the matrix
   *
   * @param {mat4} mParentMatrix the parent matrix
   */
  this.update = function(mParentMatrix) {
    if (mParentMatrix !== undefined) {
      gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].copy(_matrixParent, mParentMatrix);
    }
    _needUpdate = true;
    _updateMatrix();
  };

  /**
   * Add child to the scene graph
   *
   * @param {Object3D} mChild the child
   */
  this.addChild = function(mChild) {
    _children.push(mChild);
  };

  /**
   * Remove child from the scene graph
   *
   * @param {Object3D} mChild the child
   */
  this.removeChild = function(mChild) {
    const index = _children.indexOf(mChild);
    if (index == -1) {
      console.warn("Child no exist");
      return;
    }

    _children.splice(index, 1);
  };

  /**
   * Set the rotation from quaternion
   *
   * @param {Object3D} mQuat the quaternion value
   */
  this.setRotationFromQuaternion = function(mQuat) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].copy(_quat, mQuat);
    _needUpdate = true;
  };

  /**
   * Update the matrix
   *
   */
  const _updateMatrix = () => {
    if (!_needUpdate) {
      return;
    }

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].identity(_matrixTranslation, _matrixTranslation);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].identity(_matrixScale, _matrixScale);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].identity(_matrixRotation, _matrixRotation);

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].rotateX(_matrixRotation, _matrixRotation, _rotation[0]);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].rotateY(_matrixRotation, _matrixRotation, _rotation[1]);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].rotateZ(_matrixRotation, _matrixRotation, _rotation[2]);

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].fromQuat(_matrixQuaternion, _quat);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].mul(_matrixRotation, _matrixQuaternion, _matrixRotation);

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].scale(_matrixScale, _matrixScale, _scale);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].translate(_matrixTranslation, _matrixTranslation, _position);

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].mul(_matrix, _matrixTranslation, _matrixRotation);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].mul(_matrix, _matrix, _matrixScale);
    // mat4.mul(this._matrix, this._matrix, this._matrixParent);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].mul(_matrix, _matrixParent, _matrix);

    // update the children
    _children.forEach((child) => {
      child.update(_matrix);
    });

    _needUpdate = false;
  };

  // getters & setters
  /**
   * Get the matrix
   *
   * @returns {mat4} the matrix
   */
  this.__defineGetter__("matrix", function() {
    _updateMatrix();
    return _matrix;
  });

  /**
   * Set the x value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("x", function(mValue) {
    _position[0] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the x value of the object
   *
   * @returns {number} the x value
   */
  this.__defineGetter__("x", function() {
    return _position[0];
  });

  /**
   * Set the y value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("y", function(mValue) {
    _position[1] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the y value of the object
   *
   * @returns {number} the y value
   */
  this.__defineGetter__("y", function() {
    return _position[1];
  });

  /**
   * Set the z value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("z", function(mValue) {
    _position[2] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the z value of the object
   *
   * @returns {number} the z value
   */
  this.__defineGetter__("z", function() {
    return _position[2];
  });

  /**
   * Set the scale x value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("scaleX", function(mValue) {
    _scale[0] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the scale x value of the object
   *
   * @returns {number} the scale x value
   */
  this.__defineGetter__("scaleX", function() {
    return _scale[0];
  });

  /**
   * Set the scale y value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("scaleY", function(mValue) {
    _scale[1] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the scale y value of the object
   *
   * @returns {number} the scale y value
   */
  this.__defineGetter__("scaleY", function() {
    return _scale[1];
  });

  /**
   * Set the scale z value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("scaleZ", function(mValue) {
    _scale[2] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the scale z value of the object
   *
   * @returns {number} the scale z value
   */
  this.__defineGetter__("scaleZ", function() {
    return _scale[2];
  });

  /**
   * Set the rotation x value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("rotationX", function(mValue) {
    _rotation[0] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the rotation x value of the object
   *
   * @returns {number} the rotation x value
   */
  this.__defineGetter__("rotationX", function() {
    return _rotation[0];
  });

  /**
   * Set the rotation y value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("rotationY", function(mValue) {
    _rotation[1] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the rotation y value of the object
   *
   * @returns {number} the rotation y value
   */
  this.__defineGetter__("rotationY", function() {
    return _rotation[1];
  });

  /**
   * Set the rotation z value of the object
   *
   * @param {number} mValue the value
   */
  this.__defineSetter__("rotationZ", function(mValue) {
    _rotation[2] = mValue;
    _needUpdate = true;
  });

  /**
   * Get the rotation z value of the object
   *
   * @returns {number} the rotation z value
   */
  this.__defineGetter__("rotationZ", function() {
    return _rotation[2];
  });

  /**
   * Get the children of the object
   *
   */
  this.__defineGetter__("children", function() {
    return _children;
  });
}




/***/ }),

/***/ "./node_modules/alfrid/src/loader/loadBinary.js":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/loader/loadBinary.js ***!
  \******************************************************/
/*! exports provided: loadBinary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBinary", function() { return loadBinary; });
const loadBinary = (mUrl, mIsArrayBuffer = false) =>
  new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener("load", (o) => {
      resolve(req.response);
    });
    if (mIsArrayBuffer) {
      req.responseType = "arraybuffer";
    }

    req.open("GET", mUrl);
    req.send();
  });




/***/ }),

/***/ "./node_modules/alfrid/src/loader/loadDds.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/loader/loadDds.js ***!
  \***************************************************/
/*! exports provided: loadDds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDds", function() { return loadDds; });
/* harmony import */ var _loadBinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadBinary */ "./node_modules/alfrid/src/loader/loadBinary.js");
/* harmony import */ var _utils_parseDds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseDds */ "./node_modules/alfrid/src/utils/parseDds.js");



const loadDds = (mUrl) =>
  new Promise((resolve, reject) => {
    Object(_loadBinary__WEBPACK_IMPORTED_MODULE_0__["loadBinary"])(mUrl, true).then(
      (o) => {
        resolve(Object(_utils_parseDds__WEBPACK_IMPORTED_MODULE_1__["parseDds"])(o));
      },
      (err) => {
        reject(err);
      }
    );
  });




/***/ }),

/***/ "./node_modules/alfrid/src/loader/loadHdr.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/loader/loadHdr.js ***!
  \***************************************************/
/*! exports provided: loadHdr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHdr", function() { return loadHdr; });
/* harmony import */ var _loadBinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadBinary */ "./node_modules/alfrid/src/loader/loadBinary.js");
/* harmony import */ var _utils_parseHdr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseHdr */ "./node_modules/alfrid/src/utils/parseHdr.js");



const loadHdr = (mUrl) =>
  new Promise((resolve, reject) => {
    Object(_loadBinary__WEBPACK_IMPORTED_MODULE_0__["loadBinary"])(mUrl, true).then(
      (o) => {
        resolve(Object(_utils_parseHdr__WEBPACK_IMPORTED_MODULE_1__["parseHdr"])(o));
      },
      (err) => {
        reject(err);
      }
    );
  });




/***/ }),

/***/ "./node_modules/alfrid/src/loader/loadObj.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/loader/loadObj.js ***!
  \***************************************************/
/*! exports provided: loadObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadObj", function() { return loadObj; });
/* harmony import */ var _loadBinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadBinary */ "./node_modules/alfrid/src/loader/loadBinary.js");
/* harmony import */ var _utils_parseObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseObj */ "./node_modules/alfrid/src/utils/parseObj.js");



const loadObj = (mUrl) =>
  new Promise((resolve, reject) => {
    Object(_loadBinary__WEBPACK_IMPORTED_MODULE_0__["loadBinary"])(mUrl, false).then(
      (o) => {
        resolve(Object(_utils_parseObj__WEBPACK_IMPORTED_MODULE_1__["parseObj"])(o));
      },
      (err) => {
        reject(err);
      }
    );
  });




/***/ }),

/***/ "./node_modules/alfrid/src/math/Ray.js":
/*!*********************************************!*\
  !*** ./node_modules/alfrid/src/math/Ray.js ***!
  \*********************************************/
/*! exports provided: Ray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ray", function() { return Ray; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");


function Ray(mOrigin, mDirection) {
  this.origin = mOrigin;
  this.direction = mDirection;

  // private properties
  const a = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  const b = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  const c = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  const target = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  const edge1 = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  const edge2 = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  const normal = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
  const diff = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();

  this.at = function(t) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(target, this.direction);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scale(target, target, t);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].add(target, target, this.origin);

    return target;
  };

  this.lookAt = function(mTarget) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].sub(this.direction, mTarget, this.origin);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].normalize(this.origin, this.origin);
  };

  this.closestPointToPoint = function(mPoint) {
    const result = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].sub(mPoint, this.origin);
    const directionDistance = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(result, this.direction);

    if (directionDistance < 0) {
      return gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].clone(this.origin);
    }

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(result, this.direction);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scale(result, result, directionDistance);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].add(result, result, this.origin);

    return result;
  };

  this.distanceToPoint = function(mPoint) {
    return Math.sqrt(this.distanceSqToPoint(mPoint));
  };

  this.distanceSqToPoint = function(mPoint) {
    const v1 = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].sub(v1, mPoint, this.origin);
    const directionDistance = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(v1, this.direction);

    if (directionDistance < 0) {
      return gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].squaredDistance(this.origin, mPoint);
    }

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(v1, this.direction);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scale(v1, v1, directionDistance);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].add(v1, v1, this.origin);
    return gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].squaredDistance(v1, mPoint);
  };

  this.intersectsSphere = function(mCenter, mRadius) {
    return this.distanceToPoint(mCenter) <= mRadius;
  };

  this.intersectSphere = function(mCenter, mRadius) {
    const v1 = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].sub(v1, mCenter, this.origin);
    const tca = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(v1, this.direction);
    const d2 = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(v1, v1) - tca * tca;
    const radius2 = mRadius * mRadius;

    if (d2 > radius2) return null;

    const thc = Math.sqrt(radius2 - d2);

    const t0 = tca - thc;

    const t1 = tca + thc;

    if (t0 < 0 && t1 < 0) return null;

    if (t0 < 0) return this.at(t1);

    return this.at(t0);
  };

  this.intersectTriangle = function(mPA, mPB, mPC, backfaceCulling = true) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(a, mPA);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(b, mPB);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(c, mPC);

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].sub(edge1, b, a);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].sub(edge2, c, a);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(normal, edge1, edge2);

    let DdN = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(this.direction, normal);
    let sign;

    if (DdN > 0) {
      if (backfaceCulling) {
        return null;
      }
      sign = 1;
    } else if (DdN < 0) {
      sign = -1;
      DdN = -DdN;
    } else {
      return null;
    }

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].sub(diff, this.origin, a);

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(edge2, diff, edge2);
    const DdQxE2 = sign * gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(this.direction, edge2);
    if (DdQxE2 < 0) {
      return null;
    }

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(edge1, edge1, diff);
    const DdE1xQ = sign * gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(this.direction, edge1);
    if (DdE1xQ < 0) {
      return null;
    }

    if (DdQxE2 + DdE1xQ > DdN) {
      return null;
    }

    const Qdn = -sign * gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(diff, normal);
    if (Qdn < 0) {
      return null;
    }

    return this.at(Qdn / DdN);
  };
}




/***/ }),

/***/ "./node_modules/alfrid/src/shader/BasicColorShader.js":
/*!************************************************************!*\
  !*** ./node_modules/alfrid/src/shader/BasicColorShader.js ***!
  \************************************************************/
/*! exports provided: BasicColorShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicColorShader", function() { return BasicColorShader; });
/* harmony import */ var _core_GLShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/GLShader */ "./node_modules/alfrid/src/core/GLShader.js");
/* harmony import */ var _glsl_basic_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glsl/basic.vert */ "./node_modules/alfrid/src/shader/glsl/basic.vert");
/* harmony import */ var _glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glsl/simpleColor.frag */ "./node_modules/alfrid/src/shader/glsl/simpleColor.frag");





class BasicColorShader extends _core_GLShader__WEBPACK_IMPORTED_MODULE_0__["GLShader"] {
  constructor(mColor = [1, 1, 1], mOpacity = 1) {
    super(_glsl_basic_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

    this.color = mColor;
    this.opacity = mOpacity;
  }

  get color() {
    return this._color;
  }

  set color(mValue) {
    this._color = mValue;
    this.uniform("uColor", this._color);
  }

  get opacity() {
    return this._opacity;
  }

  set opacity(mValue) {
    this._opacity = mValue;
    this.uniform("uOpacity", this._opacity);
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/shader/DiffuseLightShader.js":
/*!**************************************************************!*\
  !*** ./node_modules/alfrid/src/shader/DiffuseLightShader.js ***!
  \**************************************************************/
/*! exports provided: DiffuseLightShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffuseLightShader", function() { return DiffuseLightShader; });
/* harmony import */ var _core_GLShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/GLShader */ "./node_modules/alfrid/src/core/GLShader.js");
/* harmony import */ var _glsl_basic_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glsl/basic.vert */ "./node_modules/alfrid/src/shader/glsl/basic.vert");
/* harmony import */ var _glsl_diffuse_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glsl/diffuse.frag */ "./node_modules/alfrid/src/shader/glsl/diffuse.frag");





class DiffuseLightShader extends _core_GLShader__WEBPACK_IMPORTED_MODULE_0__["GLShader"] {
  constructor(mColor = [1, 1, 1], mLight = [1, 1, 1], mIntensity = 0.5) {
    super(_glsl_basic_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _glsl_diffuse_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

    this.color = mColor;
    this.light = mLight;
    this.intensity = mIntensity;
  }

  get color() {
    return this._color;
  }

  set color(mValue) {
    this._color = mValue;
    this.uniform("uColor", this._color);
  }

  get light() {
    return this._light;
  }

  set light(mValue) {
    this._light = mValue;
    this.uniform("uLight", this._light);
  }

  get intensity() {
    return this._intensity;
  }

  set intensity(mValue) {
    this._intensity = mValue;
    this.uniform("uLightIntensity", this._intensity);
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/shader/PBRShader.js":
/*!*****************************************************!*\
  !*** ./node_modules/alfrid/src/shader/PBRShader.js ***!
  \*****************************************************/
/*! exports provided: PBRShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBRShader", function() { return PBRShader; });
/* harmony import */ var _core_GL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _core_GLTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/GLTexture */ "./node_modules/alfrid/src/core/GLTexture.js");
/* harmony import */ var _core_GLShader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/GLShader */ "./node_modules/alfrid/src/core/GLShader.js");
/* harmony import */ var _glsl_pbr_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glsl/pbr.vert */ "./node_modules/alfrid/src/shader/glsl/pbr.vert");
/* harmony import */ var _glsl_pbr_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glsl/pbr.frag */ "./node_modules/alfrid/src/shader/glsl/pbr.frag");







class PBRShader extends _core_GLShader__WEBPACK_IMPORTED_MODULE_2__["GLShader"] {
  constructor() {
    super(_glsl_pbr_vert__WEBPACK_IMPORTED_MODULE_3__["default"], _glsl_pbr_frag__WEBPACK_IMPORTED_MODULE_4__["default"]);

    // placeholder textures
    this.textureWhite = Object(_core_GLTexture__WEBPACK_IMPORTED_MODULE_1__["getColorTexture"])([1, 1, 1]);

    // look up textures
    this._textureLut = this.textureWhite;

    // Roughness
    this._roughness = 1.0;

    // Metallic
    this._metallic = 1.0;

    // color
    this._textureColor = this.textureWhite;
    this._baseColor = [1, 1, 1];

    // normal
    this._textureNormal = this.textureWhite;
    this._normalScale = 0;

    // ao
    this._textureORM = this.textureWhite;
    this._aoStrength = 1.0;

    // emissive
    this._textureEmissive = this.textureWhite;
    this._emissiveColor = [0, 0, 0];

    // exposure
    this._exposure = 2.2;

    // camera position
    this._cameraPos = [0, 0, 1];

    // uniforms
    this.uniform("uBRDFMap", "int", 0);
    this.uniform("uRadianceMap", "int", 1);
    this.uniform("uIrradianceMap", "int", 2);
    this.uniform("uColorMap", "int", 3);
    this.uniform("uNormalMap", "int", 4);
    this.uniform("uORMMap", "int", 5);
    this.uniform("uEmissiveMap", "int", 6);

    // setup uniforms
    this.uniform("uRoughness", this._roughness);
    this.uniform("uMetallic", this._metallic);
    this.uniform("uBaseColor", this._baseColor);
    this.uniform("uNormalScale", this._normalScale);
    this.uniform("uOcclusionStrength", this._aoStrength);
    this.uniform("uEmissiveFactor", this._emissiveColor);
    this.uniform("uCameraPos", this._cameraPos);

    this.uniform("uScaleDiffBaseMR", [0, 0, 0, 0]);
    this.uniform("uScaleFGDSpec", [0, 0, 0, 0]);
    this.uniform("uScaleIBLAmbient", [1, 1, 1, 1]);
    this.uniform("uExposure", this._exposure);

    // offset for diffuse light
    this.diffuseOffset = 0;
  }

  bindAllTextures(mGL) {
    const _GL = mGL || _core_GL__WEBPACK_IMPORTED_MODULE_0__["GL"];
    this._textureLut.bind(0, _GL);

    if (this._textureRad) {
      this._textureRad.bind(1, _GL);
    } else {
      console.log("No Radiance Texture found");
    }
    if (this._textureIrr) {
      this._textureIrr.bind(2, _GL);
    } else {
      console.log("No Irradiance Texture found");
    }

    this._textureColor.bind(3);
    this._textureNormal.bind(4);
    this._textureORM.bind(5);
    this._textureEmissive.bind(6);
  }

  set lutMap(mTex) {
    this._textureLut = mTex;
  }

  set radianceMap(mTex) {
    this._textureRad = mTex;
  }

  set irradianceMap(mTex) {
    this._textureIrr = mTex;
  }

  // getters & setters for parameters

  set roughness(mValue) {
    this._roughness = mValue;
    this.uniform("uRoughness", this._roughness);
    const t =
      Math.pow((1.0 - this._roughness) * (1.0 - this._metallic), 2.0) *
      this.diffuseOffset;
    this.uniform("uScaleDiffBaseMR", [t, 0, 0, 0]);
  }

  get roughness() {
    return this._roughness;
  }

  set metallic(mValue) {
    this._metallic = mValue;
    this.uniform("uMetallic", this._metallic);
  }

  get metallic() {
    return this._metallic;
  }

  set baseColor(mValue) {
    this._baseColor = mValue;
    this.uniform("uBaseColor", this._baseColor);
  }

  get baseColor() {
    return this._baseColor;
  }

  set normalScale(mValue) {
    this._normalScale = mValue;
    this.uniform("uNormalScale", this._normalScale);
  }

  get normalScale() {
    return this._normalScale;
  }

  set aoStrength(mValue) {
    this._aoStrength = mValue;
    this.uniform("uOcclusionStrength", this._aoStrength);
  }

  get aoStrength() {
    return this._aoStrength;
  }

  set emissiveColor(mValue) {
    this._emissiveColor = mValue;
    this.uniform("uEmissiveFactor", this._emissiveColor);
  }

  get emissiveColor() {
    return this._emissiveColor;
  }

  set cameraPosition(mValue) {
    this._cameraPos = mValue;
    this.uniform("uCameraPos", this._cameraPos);
  }

  get cameraPosition() {
    return this._cameraPos;
  }

  set exposure(mValue) {
    this._exposure = mValue;
    this.uniform("uExposure", this._exposure);
  }

  get exposure() {
    return this._exposure;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/axis.frag":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/axis.frag ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nuniform float uOpacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(vColor, uOpacity);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/axis.vert":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/axis.vert ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\n\nvoid main(void) {\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n  vColor = aColor;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/basic.frag":
/*!********************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/basic.frag ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\n// varying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_FragColor = vec4(1.0);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/basic.vert":
/*!********************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/basic.vert ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/bigTriangle.vert":
/*!**************************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/bigTriangle.vert ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/copy.frag":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/copy.frag ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/diffuse.frag":
/*!**********************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/diffuse.frag ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vNormal;\n\nuniform vec3 uColor;\nuniform vec3 uLight;\nuniform float uLightIntensity;\n\nfloat diffuse(vec3 n, vec3 l) {\n  float d = dot(normalize(n), normalize(l));\n  return max(d, 0.0);\n}\n\nfloat diffuse(vec3 n, vec3 l, float t) {\n  float d = dot(normalize(n), normalize(l));\n  return mix(1.0, max(d, 0.0), t);\n}\n\nvoid main(void) {\n    float g = diffuse(vNormal, uLight, uLightIntensity);\n    gl_FragColor = vec4(uColor * g, 1.0);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/dots.vert":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/dots.vert ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uViewport;\nuniform float uScale;\nuniform float uPointScale;\n\nconst float radius = 0.008;\n\nvoid main(void) {\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition * uScale, 1.0);\n\n\tfloat distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n  gl_PointSize = distOffset * uPointScale;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/general.vert":
/*!**********************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/general.vert ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec3 uTranslate;\nuniform vec3 uScale;\nuniform vec3 uRotation;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvec2 rotate(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, s, -s, c);\n\treturn m * v;\n}\n\nvoid main(void) {\n  vec3 pos = aVertexPosition * uScale;\n  pos.yz = rotate(pos.yz, uRotation.x);\n  pos.xz = rotate(pos.xz, uRotation.y);\n  pos.xy = rotate(pos.xy, uRotation.z);\n  pos += uTranslate;\n\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n  vTextureCoord = aTextureCoord;\n  vNormal = aNormal;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/line.vert":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/line.vert ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec3 uPosA;\nuniform vec3 uPosB;\n\nvoid main(void) {\n  vec3 pos = mix(uPosA, uPosB, aVertexPosition.x);\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/pbr.frag":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/pbr.frag ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n#define SHADER_NAME pbr_frag\n\n// #extension GL_EXT_shader_texture_lod: enable\n// #extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D \tuBRDFMap;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\n// color\nuniform vec3 uBaseColor;\nuniform sampler2D uColorMap;\n\n// ORM - Occlusion, Roughness, Metallic\nuniform sampler2D uORMMap;\nuniform float uOcclusionStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uExposure;\n\n// normal\nuniform sampler2D uNormalMap;\nuniform float uNormalScale;\n\n// emissive\nuniform sampler2D uEmissiveMap;\nuniform vec3 uEmissiveFactor;\n\n// light color\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\n\nuniform vec3 uCameraPos;\n\nuniform vec4 uScaleDiffBaseMR;\nuniform vec4 uScaleFGDSpec;\nuniform vec4 uScaleIBLAmbient;\n\nin vec2 vTextureCoord;\nin vec3 vNormal;\nin vec3 vPosition;\n\nout vec4 oColor;\n\n//\tFrom GLTF WebGL PBR :\n//\thttps://github.com/KhronosGroup/glTF-WebGL-PBR\n\n// Encapsulate the various inputs used by the various functions in the shading equation\n// We store values in this struct to simplify the integration of alternative implementations\n// of the shading terms, outlined in the Readme.MD Appendix.\nstruct PBRInfo\n{\n\tfloat NdotL;                  // cos angle between normal and light direction\n\tfloat NdotV;                  // cos angle between normal and view direction\n\tfloat NdotH;                  // cos angle between normal and half vector\n\tfloat LdotH;                  // cos angle between light direction and half vector\n\tfloat VdotH;                  // cos angle between view direction and half vector\n\tfloat perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)\n\tfloat metalness;              // metallic value at the surface\n\tvec3 reflectance0;            // full reflectance color (normal incidence angle)\n\tvec3 reflectance90;           // reflectance color at grazing angle\n\tfloat alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])\n\tvec3 diffuseColor;            // color contribution from diffuse lighting\n\tvec3 specularColor;           // color contribution from specular lighting\n};\n\nconst float M_PI = 3.141592653589793;\nconst float c_MinRoughness = 0.04;\n\nvec4 SRGBtoLINEAR(vec4 srgbIn)\n{\n\t#ifdef MANUAL_SRGB\n\t#ifdef SRGB_FAST_APPROXIMATION\n\tvec3 linOut = pow(srgbIn.xyz,vec3(2.2));\n\t#else //SRGB_FAST_APPROXIMATION\n\tvec3 bLess = step(vec3(0.04045),srgbIn.xyz);\n\tvec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );\n\t#endif //SRGB_FAST_APPROXIMATION\n\treturn vec4(linOut,srgbIn.w);;\n\t#else //MANUAL_SRGB\n\treturn srgbIn;\n\t#endif //MANUAL_SRGB\n}\n\nvec3 getNormal() {\n\tvec3 pos_dx = dFdx(vPosition);\n\tvec3 pos_dy = dFdy(vPosition);\n\tvec3 tex_dx = dFdx(vec3(vTextureCoord, 0.0));\n\tvec3 tex_dy = dFdy(vec3(vTextureCoord, 0.0));\n\tvec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);\n\n\tvec3 ng = normalize(vNormal);\n\n\tt = normalize(t - ng * dot(ng, t));\n\tvec3 b = normalize(cross(ng, t));\n\tmat3 tbn = mat3(t, b, ng);\n\n\tvec3 n = texture(uNormalMap, vTextureCoord).rgb;\n\tn = normalize(tbn * ((2.0 * n - 1.0) * vec3(uNormalScale, uNormalScale, 1.0)));\n\treturn n;\n}\n\nvec3 getIBLContribution(PBRInfo pbrInputs, vec3 n, vec3 reflection)\n{\n\tfloat mipCount = 7.0; // resolution of 512x512\n\tfloat lod = (pbrInputs.perceptualRoughness * mipCount);\n\t// retrieve a scale and bias to F0. See [1], Figure 3\n\tvec3 brdf = SRGBtoLINEAR(texture(uBRDFMap, vec2(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness))).rgb;\n\tvec3 diffuseLight = SRGBtoLINEAR(texture(uIrradianceMap, n)).rgb;\n\n\t\n\t#ifdef USE_TEX_LOD\n\t\tvec3 specularLight = SRGBtoLINEAR(textureCubeLodEXT(uRadianceMap, reflection, lod)).rgb;\n\t    // vec3 specularLight = SRGBtoLINEAR(textureCubeLodEXT(u_SpecularEnvSampler, reflection, lod)).rgb;\n\t#else\n\t\tvec3 specularLight = SRGBtoLINEAR(texture(uRadianceMap, reflection)).rgb;\n\t    // vec3 specularLight = SRGBtoLINEAR(textureCube(u_SpecularEnvSampler, reflection)).rgb;\n\t#endif\n\n\tvec3 diffuse = diffuseLight * pbrInputs.diffuseColor;\n\tvec3 specular = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);\n\n\t// For presentation, this allows us to disable IBL terms\n\tdiffuse *= uScaleIBLAmbient.x;\n\tspecular *= uScaleIBLAmbient.y;\n\n\treturn diffuse + specular;\n}\n\nvec3 diffuse(PBRInfo pbrInputs)\n{\n\treturn pbrInputs.diffuseColor / M_PI;\n}\n\nvec3 specularReflection(PBRInfo pbrInputs)\n{\n\treturn pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);\n}\n\nfloat geometricOcclusion(PBRInfo pbrInputs)\n{\n\tfloat NdotL = pbrInputs.NdotL;\n\tfloat NdotV = pbrInputs.NdotV;\n\tfloat r = pbrInputs.alphaRoughness;\n\n\tfloat attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));\n\tfloat attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));\n\treturn attenuationL * attenuationV;\n}\n\nfloat microfacetDistribution(PBRInfo pbrInputs)\n{\n\tfloat roughnessSq = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;\n\tfloat f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;\n\treturn roughnessSq / (M_PI * f * f);\n}\n\nvoid main(void) {\n\tvec4 orm = texture(uORMMap, vTextureCoord);\n\n\tfloat perceptualRoughness   = uRoughness * orm.g;\n\tfloat metallic              = uMetallic * orm.b;\n\tperceptualRoughness         = clamp(perceptualRoughness, c_MinRoughness, 1.0);\n\tmetallic                    = clamp(metallic, 0.0, 1.0);\n\tfloat alphaRoughness        = perceptualRoughness * perceptualRoughness;\n\n\tvec4 baseColor = SRGBtoLINEAR(texture(uColorMap, vTextureCoord));\n\tbaseColor.rgb *= uBaseColor;\n\n\tvec3 f0                     = vec3(0.04);\n\tvec3 diffuseColor           = baseColor.rgb * (vec3(1.0) - f0);\n\tdiffuseColor                *= 1.0 - metallic;\n\tvec3 specularColor          = mix(f0, baseColor.rgb, metallic);\n\t\n\t// Compute reflectance.\n\tfloat reflectance           = max(max(specularColor.r, specularColor.g), specularColor.b);\n\t\n\t// For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.\n\t// For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.\n\tfloat reflectance90         = clamp(reflectance * 25.0, 0.0, 1.0);\n\tvec3 specularEnvironmentR0  = specularColor.rgb;\n\tvec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;\n\t\n\tvec3 n                      = getNormal();                             // normal at surface point\n\tvec3 v                      = normalize(uCameraPos - vPosition);        // Vector from surface point to camera\n\tvec3 l                      = normalize(uLightDirection);             // Vector from surface point to light\n\tvec3 h                      = normalize(l+v);                          // Half vector between both l and v\n\tvec3 reflection             = -normalize(reflect(v, n));\n\t\n\tfloat NdotL                 = clamp(dot(n, l), 0.001, 1.0);\n\tfloat NdotV                 = abs(dot(n, v)) + 0.001;\n\tfloat NdotH                 = clamp(dot(n, h), 0.0, 1.0);\n\tfloat LdotH                 = clamp(dot(l, h), 0.0, 1.0);\n\tfloat VdotH                 = clamp(dot(v, h), 0.0, 1.0);\n\n\tPBRInfo pbrInputs = PBRInfo(\n\t\tNdotL,\n\t\tNdotV,\n\t\tNdotH,\n\t\tLdotH,\n\t\tVdotH,\n\t\tperceptualRoughness,\n\t\tmetallic,\n\t\tspecularEnvironmentR0,\n\t\tspecularEnvironmentR90,\n\t\talphaRoughness,\n\t\tdiffuseColor,\n\t\tspecularColor\n\t);\n\n\t// Calculate the shading terms for the microfacet specular shading model\n\tvec3 F              = specularReflection(pbrInputs);\n\tfloat G             = geometricOcclusion(pbrInputs);\n\tfloat D             = microfacetDistribution(pbrInputs);\n\t\n\t// Calculation of analytical lighting contribution\n\tvec3 diffuseContrib = (1.0 - F) * diffuse(pbrInputs);\n\tvec3 specContrib    = F * G * D / (4.0 * NdotL * NdotV);\n\t// Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)\n\tvec3 color          = NdotL * uLightColor * (diffuseContrib + specContrib);\n\n\tcolor += getIBLContribution(pbrInputs, n, reflection);\n\tcolor               = mix(color, color * orm.r, uOcclusionStrength);\n\n\tvec3 emissive = SRGBtoLINEAR(texture(uEmissiveMap, vTextureCoord)).rgb * uEmissiveFactor;\n\tcolor += emissive;\n\n\t// This section uses mix to override final color for reference app visualization\n\t// of various parameters in the lighting equation.\n\tcolor               = mix(color, F, uScaleFGDSpec.x);\n\tcolor               = mix(color, vec3(G), uScaleFGDSpec.y);\n\tcolor               = mix(color, vec3(D), uScaleFGDSpec.z);\n\tcolor               = mix(color, specContrib, uScaleFGDSpec.w);\n\t\n\tcolor               = mix(color, diffuseContrib, uScaleDiffBaseMR.x);\n\tcolor               = mix(color, baseColor.rgb, uScaleDiffBaseMR.y);\n\tcolor               = mix(color, vec3(metallic), uScaleDiffBaseMR.z);\n\tcolor               = mix(color, vec3(perceptualRoughness), uScaleDiffBaseMR.w);\n\t\n\t// output the fragment color\n\toColor        = vec4(pow(color,vec3(1.0/uExposure)), baseColor.a);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/pbr.vert":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/pbr.vert ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\n#define SHADER_NAME pbr_vert\n\nprecision highp float;\n#define GLSLIFY 1\nin vec3 aVertexPosition;\nin vec2 aTextureCoord;\nin vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nout vec2 vTextureCoord;\nout vec3 vNormal;\nout vec3 vPosition;\n\nvoid main(void) {\n\tvec4 position = uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvPosition     = position.xyz / position.w;\n\t\n\tvNormal       = normalize(vec3(uModelMatrix * vec4(aNormal, 0.0)));\n\tvTextureCoord = aTextureCoord;\n\t\n\tgl_Position   = uProjectionMatrix * uViewMatrix * position;\n}\n");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/simpleColor.frag":
/*!**************************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/simpleColor.frag ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\n\nuniform vec3 uColor;\nuniform float uOpacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(uColor, uOpacity);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/glsl/skybox.vert":
/*!*********************************************************!*\
  !*** ./node_modules/alfrid/src/shader/glsl/skybox.vert ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// skybox.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n\tgl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\t\n\tvVertex = aVertexPosition;\n\t// vVertex = normalize(aVertexPosition);\n\tvNormal = aNormal;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/index.js":
/*!*************************************************!*\
  !*** ./node_modules/alfrid/src/shader/index.js ***!
  \*************************************************/
/*! exports provided: ShaderLibs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderLibs", function() { return ShaderLibs; });
/* harmony import */ var _glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl/simpleColor.frag */ "./node_modules/alfrid/src/shader/glsl/simpleColor.frag");
/* harmony import */ var _glsl_copy_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glsl/copy.frag */ "./node_modules/alfrid/src/shader/glsl/copy.frag");
/* harmony import */ var _glsl_general_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glsl/general.vert */ "./node_modules/alfrid/src/shader/glsl/general.vert");
/* harmony import */ var _glsl_bigTriangle_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glsl/bigTriangle.vert */ "./node_modules/alfrid/src/shader/glsl/bigTriangle.vert");
/* harmony import */ var _glsl_skybox_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glsl/skybox.vert */ "./node_modules/alfrid/src/shader/glsl/skybox.vert");






const ShaderLibs = {
  simpleColorFrag: _glsl_simpleColor_frag__WEBPACK_IMPORTED_MODULE_0__["default"],
  copyFrag: _glsl_copy_frag__WEBPACK_IMPORTED_MODULE_1__["default"],
  bigTriangleVert: _glsl_bigTriangle_vert__WEBPACK_IMPORTED_MODULE_3__["default"],
  generalVert: _glsl_general_vert__WEBPACK_IMPORTED_MODULE_2__["default"],
  skyboxVert: _glsl_skybox_vert__WEBPACK_IMPORTED_MODULE_4__["default"],
};




/***/ }),

/***/ "./node_modules/alfrid/src/utils/BitSwitch.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/utils/BitSwitch.js ***!
  \****************************************************/
/*! exports provided: BitSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitSwitch", function() { return BitSwitch; });
// bit-switch.js

class BitSwitch {
  constructor(mValue) {
    this._value = mValue;
  }

  set(mNumDigit, mValue = 1) {
    this._value = this._value;

    if (mValue === 0) {
      this._value = this._value & (0 << mNumDigit);
    } else {
      this._value = this._value | (1 << mNumDigit);
    }
  }

  get(mNumDigit) {
    let value = this._value & (1 << mNumDigit);
    value = value >> mNumDigit;

    return value === 1;
  }

  reset(mValue) {
    this._value = mValue;
  }

  get value() {
    return this._value;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/BufferUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/utils/BufferUtils.js ***!
  \******************************************************/
/*! exports provided: getBuffer, formBuffer, getAttribLoc, flatten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuffer", function() { return getBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formBuffer", function() { return formBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttribLoc", function() { return getAttribLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
const getBuffer = function(attr, GL) {
  let buffer;
  const { gl } = GL;

  if (attr.buffer !== undefined) {
    buffer = attr.buffer;
  } else {
    buffer = gl.createBuffer();
    attr.buffer = buffer;
    GL.bufferCount++;
  }

  return buffer;
};

const formBuffer = function(mData, mNum) {
  const ary = [];

  for (let i = 0; i < mData.length; i += mNum) {
    const o = [];
    for (let j = 0; j < mNum; j++) {
      o.push(mData[i + j]);
    }

    ary.push(o);
  }

  return ary;
};

const getAttribLoc = (gl, shaderProgram, name) => {
  if (shaderProgram.cacheAttribLoc === undefined) {
    shaderProgram.cacheAttribLoc = {};
  }
  if (shaderProgram.cacheAttribLoc[name] === undefined) {
    shaderProgram.cacheAttribLoc[name] = gl.getAttribLocation(
      shaderProgram,
      name
    );
  }

  return shaderProgram.cacheAttribLoc[name];
};

const flatten = (mValues) => {
  // console.log("flatten", mValues, mValues[0] instanceof Float32Array);
  if (mValues[0] instanceof Float32Array) {
    const b = mValues.reduce((total, curr) => {
      for (let i = 0; i < curr.length; i++) {
        total.push(curr[i]);
      }
      return total;
    }, []);

    return b;
  } else {
    return mValues.flat();
  }
};


/***/ }),

/***/ "./node_modules/alfrid/src/utils/EaseNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/alfrid/src/utils/EaseNumber.js ***!
  \*****************************************************/
/*! exports provided: EaseNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EaseNumber", function() { return EaseNumber; });
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/build/scheduler.js");


class EaseNumber {
  constructor(mValue, mEasing = 0.1) {
    this.easing = mEasing;
    this._value = mValue;
    this._targetValue = mValue;
    this._efIndex = scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].addEF(() => this._update());
  }

  _update() {
    const MIN_DIFF = 0.0001;
    this._checkLimit();
    this._value += (this._targetValue - this._value) * this.easing;
    if (Math.abs(this._targetValue - this._value) < MIN_DIFF) {
      this._value = this._targetValue;
    }
  }

  setTo(mValue) {
    this._targetValue = this._value = mValue;
  }

  add(mAdd) {
    this._targetValue += mAdd;
  }

  limit(mMin, mMax) {
    if (mMin > mMax) {
      this.limit(mMax, mMin);
      return;
    }

    this._min = mMin;
    this._max = mMax;

    this._checkLimit();
  }

  _checkLimit() {
    if (this._min !== undefined && this._targetValue < this._min) {
      this._targetValue = this._min;
    }

    if (this._max !== undefined && this._targetValue > this._max) {
      this._targetValue = this._max;
    }
  }

  destroy() {
    scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].removeEF(this._efIndex);
  }

  //	GETTERS / SETTERS

  set value(mValue) {
    this._targetValue = mValue;
  }

  get value() {
    return this._value;
  }

  get targetValue() {
    return this._targetValue;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/HitTestor.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/utils/HitTestor.js ***!
  \****************************************************/
/*! exports provided: HitTestor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitTestor", function() { return HitTestor; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _math_Ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Ray */ "./node_modules/alfrid/src/math/Ray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/alfrid/src/utils/index.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");





function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

class HitTestor extends events__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor(
    mMesh,
    mCamera,
    mResolution,
    mSkipMoveCheck = false,
    mListenerTarget = window
  ) {
    super();

    this._mesh = mMesh;
    this._mesh.generateFaces();
    this._camera = mCamera;
    this.faceVertices = mMesh.faces.map((face) => face.vertices);
    this.clickTolerance = 8;

    this._ray = new _math_Ray__WEBPACK_IMPORTED_MODULE_1__["Ray"]([0, 0, 0], [0, 0, -1]);
    this._hit = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].fromValues(-999, -999, -999);
    this._lastPos;
    this._firstPos;
    this.modelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["mat4"].create();
    this.resolution = mResolution || [window.innerWidth, window.innerHeight];

    this._listenerTarget = mListenerTarget;
    this._skippingMove = mSkipMoveCheck;

    this._onMoveBind = (e) => this._onMove(e);
    this._onDownBind = (e) => this._onDown(e);
    this._onUpBind = () => this._onUp();

    this.connect();
  }

  connect() {
    this._listenerTarget.addEventListener("mousedown", this._onDownBind);
    this._listenerTarget.addEventListener("mousemove", this._onMoveBind);
    this._listenerTarget.addEventListener("mouseup", this._onUpBind);
  }

  disconnect() {
    this._listenerTarget.removeEventListener("mousedown", this._onDownBind);
    this._listenerTarget.removeEventListener("mousemove", this._onMoveBind);
    this._listenerTarget.removeEventListener("mouseup", this._onUpBind);
  }

  _checkHit(mType = "onHit") {
    const camera = this._camera;
    if (!camera) {
      return;
    }

    const mx = (this._lastPos.x / this.resolution[0]) * 2.0 - 1.0;
    const my = -(this._lastPos.y / this.resolution[1]) * 2.0 + 1.0;

    camera.generateRay([mx, my, 0], this._ray);

    let hit;
    const v0 = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].create();
    const v1 = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].create();
    const v2 = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].create();
    let dist = 0;

    const getVector = (v, target) => {
      gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].transformMat4(target, v, this.modelMatrix);
    };

    for (let i = 0; i < this.faceVertices.length; i++) {
      const vertices = this.faceVertices[i];
      getVector(vertices[0], v0);
      getVector(vertices[1], v1);
      getVector(vertices[2], v2);
      const t = this._ray.intersectTriangle(v0, v1, v2);

      if (t) {
        if (hit) {
          const distToCam = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].dist(t, camera.position);
          if (distToCam < dist) {
            hit = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].clone(t);
            dist = distToCam;
          }
        } else {
          hit = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].clone(t);
          dist = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].dist(hit, camera.position);
        }
      }
    }

    if (hit) {
      this._hit = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].clone(hit);
      this.emit(mType, { hit });
    } else {
      this.emit("onUp");
    }
  }

  _onDown(e) {
    this._firstPos = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getMouse"])(e);
    this._lastPos = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getMouse"])(e);
    this._checkHit("onDown");
  }

  _onMove(e) {
    this._lastPos = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getMouse"])(e);
    if (!this._skippingMove) {
      this._checkHit();
    }
  }

  _onUp() {
    const dist = distance(this._firstPos, this._lastPos);
    if (dist < this.clickTolerance) {
      this._checkHit();
    }
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/LogError.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/utils/LogError.js ***!
  \***************************************************/
/*! exports provided: default, Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
const Errors = {
  DRAW_BUFFERS: `This browser doesn't support multi render targets : WEBGL_draw_buffers`,
  FRAMEBUFFER_CONTEXT: `This framebuffer has been bind to a different WebGL Rendering Context`,
  SHADER_CONTEXT: `This shader has been bind to a different WebGL Rendering Context`,
  TEXTURE_CONTEXT: `This texture has been bind to a different WebGL Rendering Context`,
  CUBE_TEXTURE_CONTEXT: `This cube texture has been bind to a different WebGL Rendering Context`,
};

const logError = (mMessage, mExtra = "") => {
  console.error(mMessage, mExtra);
};

/* harmony default export */ __webpack_exports__["default"] = (logError);



/***/ }),

/***/ "./node_modules/alfrid/src/utils/OrbitalControl.js":
/*!*********************************************************!*\
  !*** ./node_modules/alfrid/src/utils/OrbitalControl.js ***!
  \*********************************************************/
/*! exports provided: OrbitalControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitalControl", function() { return OrbitalControl; });
/* harmony import */ var _EaseNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EaseNumber */ "./node_modules/alfrid/src/utils/EaseNumber.js");
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/build/scheduler.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
// OrbitalControl.js




const getMouse = function(mEvent, mTarget) {
  const o = mTarget || {};
  if (mEvent.touches) {
    o.x = mEvent.touches[0].pageX;
    o.y = mEvent.touches[0].pageY;
  } else {
    o.x = mEvent.clientX;
    o.y = mEvent.clientY;
  }

  return o;
};

class OrbitalControl {
  constructor(mTarget, mListenerTarget = window, mRadius = 10) {
    this._target = mTarget;
    this._listenerTarget = mListenerTarget;
    this._mouse = {};
    this._preMouse = {};
    this.center = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].create();
    this._up = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].fromValues(0, 1, 0);
    this.radius = new _EaseNumber__WEBPACK_IMPORTED_MODULE_0__["EaseNumber"](mRadius);
    this.position = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].fromValues(0, 0, this.radius.value);
    this.positionOffset = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].create();
    this._rx = new _EaseNumber__WEBPACK_IMPORTED_MODULE_0__["EaseNumber"](0);
    this._rx.limit(-Math.PI / 2, Math.PI / 2);
    this._ry = new _EaseNumber__WEBPACK_IMPORTED_MODULE_0__["EaseNumber"](0);
    this._preRX = 0;
    this._preRY = 0;

    this._isLockZoom = false;
    this._isLockRotation = false;
    this._isInvert = false;
    this.sensitivity = 1.0;

    this._wheelBind = (e) => this._onWheel(e);
    this._downBind = (e) => this._onDown(e);
    this._moveBind = (e) => this._onMove(e);
    this._upBind = () => this._onUp();

    this.connect();
    scheduling__WEBPACK_IMPORTED_MODULE_1__["default"].addEF(() => this._loop());
  }

  connect() {
    this.disconnect();

    this._listenerTarget.addEventListener("mousewheel", this._wheelBind);
    this._listenerTarget.addEventListener("DOMMouseScroll", this._wheelBind);
    this._listenerTarget.addEventListener("mousedown", this._downBind);
    this._listenerTarget.addEventListener("touchstart", this._downBind);
    this._listenerTarget.addEventListener("mousemove", this._moveBind);
    this._listenerTarget.addEventListener("touchmove", this._moveBind);
    window.addEventListener("touchend", this._upBind);
    window.addEventListener("mouseup", this._upBind);
  }

  disconnect() {
    this._listenerTarget.removeEventListener("mousewheel", this._wheelBind);
    this._listenerTarget.removeEventListener("DOMMouseScroll", this._wheelBind);

    this._listenerTarget.removeEventListener("mousedown", this._downBind);
    this._listenerTarget.removeEventListener("touchstart", this._downBind);
    this._listenerTarget.removeEventListener("mousemove", this._moveBind);
    this._listenerTarget.removeEventListener("touchmove", this._moveBind);
    window.removeEventListener("touchend", this._upBind);
    window.removeEventListener("mouseup", this._upBind);
  }

  //	PUBLIC METHODS

  lock(mValue = true) {
    this._isLockZoom = mValue;
    this._isLockRotation = mValue;
    this._isMouseDown = false;
  }

  lockZoom(mValue = true) {
    this._isLockZoom = mValue;
  }

  lockRotation(mValue = true) {
    this._isLockRotation = mValue;
  }

  inverseControl(isInvert = true) {
    this._isInvert = isInvert;
  }

  //	EVENT HANDLERES
  _onDown(mEvent) {
    if (this._isLockRotation) {
      return;
    }
    this._isMouseDown = true;
    getMouse(mEvent, this._mouse);
    getMouse(mEvent, this._preMouse);
    this._preRX = this._rx.targetValue;
    this._preRY = this._ry.targetValue;
  }

  _onMove(mEvent) {
    if (this._isLockRotation) {
      return;
    }
    getMouse(mEvent, this._mouse);
    if (mEvent.touches) {
      mEvent.preventDefault();
    }

    if (this._isMouseDown) {
      let diffX = -(this._mouse.x - this._preMouse.x);
      if (this._isInvert) {
        diffX *= -1;
      }
      this._ry.value = this._preRY - diffX * 0.01 * this.sensitivity;

      let diffY = -(this._mouse.y - this._preMouse.y);
      if (this._isInvert) {
        diffY *= -1;
      }
      this._rx.value = this._preRX - diffY * 0.01 * this.sensitivity;
    }
  }

  _onUp() {
    if (this._isLockRotation) {
      return;
    }
    this._isMouseDown = false;
  }

  _onWheel(mEvent) {
    if (this._isLockZoom) {
      return;
    }
    const w = mEvent.wheelDelta;
    const d = mEvent.detail;
    let value = 0;
    if (d) {
      if (w) {
        value = (w / d / 40) * d > 0 ? 1 : -1; // Opera
      } else {
        value = -d / 3; // Firefox;         TODO: do not /3 for OS X
      }
    } else {
      value = w / 120;
    }

    this.radius.add(-value * 2);
    if (this.radius.targetValue < 0) {
      this.radius.value = 0.0001;
    }
  }

  //	PRIVATE METHODS

  _loop() {
    this._updatePosition();

    if (this._target) {
      this._updateCamera();
    }
  }

  update() {
    this._updatePosition();
  }

  _updatePosition() {
    this.position[1] = Math.sin(this._rx.value) * this.radius.value;
    const tr = Math.cos(this._rx.value) * this.radius.value;
    this.position[0] = Math.cos(this._ry.value + Math.PI * 0.5) * tr;
    this.position[2] = Math.sin(this._ry.value + Math.PI * 0.5) * tr;
    gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].add(this.position, this.position, this.positionOffset);
  }

  _updateCamera() {
    this._target.lookAt(this.position, this.center, this._up);
  }

  //	GETTER / SETTER

  get rx() {
    return this._rx;
  }

  get ry() {
    return this._ry;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/Scene.js":
/*!************************************************!*\
  !*** ./node_modules/alfrid/src/utils/Scene.js ***!
  \************************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/build/scheduler.js");
/* harmony import */ var _core_GL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/GL */ "./node_modules/alfrid/src/core/GL.js");
/* harmony import */ var _camera_CameraPerspective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../camera/CameraPerspective */ "./node_modules/alfrid/src/camera/CameraPerspective.js");
/* harmony import */ var _utils_OrbitalControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/OrbitalControl */ "./node_modules/alfrid/src/utils/OrbitalControl.js");





class Scene {
  constructor(mGL) {
    this._GL = mGL || _core_GL__WEBPACK_IMPORTED_MODULE_1__["GL"];

    // setup camera
    this.camera = new _camera_CameraPerspective__WEBPACK_IMPORTED_MODULE_2__["CameraPerspective"]();
    this.camera.setPerspective((45 * Math.PI) / 180, _core_GL__WEBPACK_IMPORTED_MODULE_1__["GL"].aspectRatio, 0.1, 100);
    this.orbitalControl = new _utils_OrbitalControl__WEBPACK_IMPORTED_MODULE_3__["OrbitalControl"](this.camera, window, 15);
    this.orbitalControl.radius.value = 10;
    this._isRunning = true;

    this._initTextures();
    this._initViews();

    window.addEventListener("resize", () => this.resize());
    this._efIndex = scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].addEF(() => this._loop());
  }

  stop() {
    this._isRunning = false;
  }

  resume() {
    this._isRunning = true;
  }

  _initTextures() {}

  _initViews() {}

  update() {}

  render() {}

  _loop() {
    if (!this._isRunning) {
      return;
    }
    this.update();

    this._GL.viewport(0, 0, this._GL.width, this._GL.height);
    this._GL.setMatrices(this.camera);
    this.render();
  }

  resize() {
    this._GL.setSize(window.innerWidth, window.innerHeight);
    this.camera.setAspectRatio(this._GL.aspectRatio);
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/ShaderUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/utils/ShaderUtils.js ***!
  \******************************************************/
/*! exports provided: addLineNumbers, uniformMapping, cloneValue, getUniformType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLineNumbers", function() { return addLineNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniformMapping", function() { return uniformMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneValue", function() { return cloneValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniformType", function() { return getUniformType; });
const addLineNumbers = (string) => {
  const lines = string.split("\n");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = `${i + 1}: ${lines[i]}`;
  }
  return lines.join("\n");
};

const uniformMapping = {
  float: "uniform1f",
  vec2: "uniform2fv",
  vec3: "uniform3fv",
  vec4: "uniform4fv",
  int: "uniform1i",
  ivec2: "uniform2i",
  ivec3: "uniform3i",
  ivec4: "uniform4i",
  mat2: "uniformMatrix2fv",
  mat3: "uniformMatrix3fv",
  mat4: "uniformMatrix4fv",
};

const cloneValue = (mValue) => {
  if (typeof mValue === "number") {
    return mValue;
  }
  if (mValue.slice) {
    return mValue.slice(0);
  } else {
    return new Float32Array(mValue);
  }
};

const getUniformType = (mValue) => {
  const isArray = typeof mValue === "object";

  const getArrayUniformType = function(mValue) {
    if (mValue.length === 9) {
      return "mat3";
    } else if (mValue.length === 16) {
      return "mat4";
    } else {
      return `vec${mValue.length}`;
    }
  };

  if (!isArray) {
    return "float";
  } else {
    return getArrayUniformType(mValue);
  }
};


/***/ }),

/***/ "./node_modules/alfrid/src/utils/SpringNumber.js":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/utils/SpringNumber.js ***!
  \*******************************************************/
/*! exports provided: SpringNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringNumber", function() { return SpringNumber; });
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/build/scheduler.js");


class SpringNumber {
  constructor(mValue, mSpeed = 0.1, mDecreaseRate = 0.9) {
    this._value = mValue;
    this._targetValue = mValue;
    this.speed = mSpeed;
    this.decreaseRate = mDecreaseRate;

    this._velocity = 0;

    this._efIndex = scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].addEF(() => this._update());
  }

  _update() {
    const MIN_DIFF = 0.0001;
    this._checkLimit();
    if (Math.abs(this._targetValue - this._value) < MIN_DIFF) {
      this._value = this._targetValue;
      return;
    }

    this._velocity += (this._targetValue - this._value) * this.speed;

    this._value += this._velocity;
    this._velocity *= this.decreaseRate;

    if (Math.abs(this._targetValue - this._value) < MIN_DIFF) {
      this._value = this._targetValue;
    }
  }

  limit(mMin, mMax) {
    if (mMin > mMax) {
      this.limit(mMax, mMin);
      return;
    }

    this._min = mMin;
    this._max = mMax;

    this._checkLimit();
  }

  _checkLimit() {
    if (this._min !== undefined && this._targetValue < this._min) {
      this._targetValue = this._min;
    }

    if (this._max !== undefined && this._targetValue > this._max) {
      this._targetValue = this._max;
    }
  }

  destroy() {
    scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].removeEF(this._efIndex);
  }

  set value(mValue) {
    this._targetValue = mValue;
  }

  get value() {
    return this._value;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/TextureUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/alfrid/src/utils/TextureUtils.js ***!
  \*******************************************************/
/*! exports provided: isPowerOfTwo, getTextureParameters, isSourceHtmlElement, checkSource, webgl2TextureCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPowerOfTwo", function() { return isPowerOfTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextureParameters", function() { return getTextureParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSourceHtmlElement", function() { return isSourceHtmlElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSource", function() { return checkSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webgl2TextureCheck", function() { return webgl2TextureCheck; });
/* harmony import */ var _WebGLConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLConst */ "./node_modules/alfrid/src/utils/WebGLConst.js");
/* harmony import */ var _WebGLNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebGLNumber */ "./node_modules/alfrid/src/utils/WebGLNumber.js");



const isPowerOfTwo = (x) => {
  return x !== 0 && !(x & (x - 1));
};

const getTextureParameters = function(mParams, mWidth, mHeight) {
  if (!mParams.minFilter) {
    let minFilter = _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].LINEAR;
    if (mWidth && mWidth) {
      if (isPowerOfTwo(mWidth) && isPowerOfTwo(mHeight)) {
        minFilter = _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].NEAREST_MIPMAP_LINEAR;
      }
    }

    mParams.minFilter = minFilter;
  }

  mParams.mipmap = mParams.mipmap === undefined ? true : mParams.mipmap;
  mParams.magFilter = mParams.magFilter || _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].LINEAR;
  mParams.wrapS = mParams.wrapS || _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].CLAMP_TO_EDGE;
  mParams.wrapT = mParams.wrapT || _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].CLAMP_TO_EDGE;
  mParams.internalFormat = mParams.internalFormat || _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].RGBA;
  mParams.format = mParams.format || _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].RGBA;
  mParams.premultiplyAlpha =
    mParams.premultiplyAlpha === undefined ? false : mParams.premultiplyAlpha;
  mParams.level = mParams.level || 0;
  mParams.type = mParams.type || _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].UNSIGNED_BYTE;

  // // default filter to NEAREST for floating point textures
  // if (mParams.type !== WebGLConst.UNSIGNED_BYTE) {
  //   mParams.minFilter = WebGLConst.NEAREST_MIPMAP_LINEAR;
  //   mParams.magFilter = WebGLConst.LINEAR;
  // }

  // webgl2FilterCheck(mParams);
  return mParams;
};

const isSourceHtmlElement = (mSource) => {
  return (
    mSource instanceof HTMLImageElement ||
    mSource instanceof HTMLCanvasElement ||
    mSource instanceof HTMLVideoElement
  );
};

const checkSource = (mSource, mParams) => {
  let flag = true;

  // source check
  if (mSource.constructor.name === "Array") {
    console.error(
      "Please convert texture source to Unit8Array or Float32Array"
    );
    flag = false;
  }

  // type check
  if (mParams.type === undefined) {
    if (mSource.constructor.name !== "Uint8Array") {
      console.error(
        "Using none Unit8Array, pleaes specify type in the texture parameters"
      );
    }
  }

  return flag;
};

const webgl2TextureCheck = (mGL, mParams) => {
  if (!mGL.webgl2) {
    return;
  }

  // if (mParams.type !== WebGLConst.UNSIGNED_BYTE) {
  // floating point texture
  if (mParams.type === _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].HALF_FLOAT) {
    /**
     * enum OES_HALF_FLOAT  !== webgl2.HALF_FLOAT
     *
     */
    mParams.type = mGL.gl.HALF_FLOAT;
    mParams.internalFormat = _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].RGBA16F;
  } else if (mParams.type === _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].FLOAT) {
    mParams.internalFormat = _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"].RGBA32F;
  }
  // }
};

/*
export const webgl2FilterCheck = (mParams) => {
  const { type, minFilter, magFilter } = mParams;

  if (type !== WebGLConst.UNSIGNED_BYTE) {
    if (minFilter !== WebGLConst.NEAREST || magFilter !== WebGLConst.NEAREST) {
      console.warn(
        "Trying to set min / mag filter to non NEAREST on floating point textures",
        `minFilter: ${WebGLNumber[minFilter]}`,
        `magFilter: ${WebGLNumber[magFilter]}`
      );
      return false;
    } else {
      return true;
    }
  }
};
*/


/***/ }),

/***/ "./node_modules/alfrid/src/utils/TweenNumber.js":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/utils/TweenNumber.js ***!
  \******************************************************/
/*! exports provided: TweenNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenNumber", function() { return TweenNumber; });
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/build/scheduler.js");


const Easing = {
  Linear: {
    None(k) {
      return k;
    },
  },
  Quadratic: {
    In(k) {
      return k * k;
    },
    Out(k) {
      return k * (2 - k);
    },
    InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }
      return -0.5 * (--k * (k - 2) - 1);
    },
  },
  Cubic: {
    In(k) {
      return k * k * k;
    },
    Out(k) {
      return --k * k * k + 1;
    },
    InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }
      return 0.5 * ((k -= 2) * k * k + 2);
    },
  },
  Quartic: {
    In(k) {
      return k * k * k * k;
    },
    Out(k) {
      return 1 - --k * k * k * k;
    },
    InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k;
      }
      return -0.5 * ((k -= 2) * k * k * k - 2);
    },
  },
  Quintic: {
    In(k) {
      return k * k * k * k * k;
    },
    Out(k) {
      return --k * k * k * k * k + 1;
    },
    InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }
      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
  },
  Sinusoidal: {
    In(k) {
      return 1 - Math.cos((k * Math.PI) / 2);
    },
    Out(k) {
      return Math.sin((k * Math.PI) / 2);
    },
    InOut(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    },
  },
  Exponential: {
    In(k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    Out(k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    InOut(k) {
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if ((k *= 2) < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }
      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    },
  },
  Circular: {
    In(k) {
      return 1 - Math.sqrt(1 - k * k);
    },
    Out(k) {
      return Math.sqrt(1 - --k * k);
    },
    InOut(k) {
      if ((k *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
  },
  Elastic: {
    In(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      return -(
        a *
        Math.pow(2, 10 * (k -= 1)) *
        Math.sin(((k - s) * (2 * Math.PI)) / p)
      );
    },
    Out(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      return (
        a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1
      );
    },
    InOut(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      if ((k *= 2) < 1) {
        return (
          -0.5 *
          (a *
            Math.pow(2, 10 * (k -= 1)) *
            Math.sin(((k - s) * (2 * Math.PI)) / p))
        );
      }
      return (
        a *
          Math.pow(2, -10 * (k -= 1)) *
          Math.sin(((k - s) * (2 * Math.PI)) / p) *
          0.5 +
        1
      );
    },
  },
  Back: {
    In(k) {
      const s = 1.70158;
      return k * k * ((s + 1) * k - s);
    },
    Out(k) {
      const s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    },
    InOut(k) {
      const s = 1.70158 * 1.525;
      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }
      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },
  },
  Bounce: {
    in(k) {
      return 1 - Easing.Bounce.out(1 - k);
    },
    out(k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },
    inOut(k) {
      if (k < 0.5) {
        return Easing.Bounce.in(k * 2) * 0.5;
      }
      return Easing.Bounce.out(k * 2 - 1) * 0.5 + 0.5;
    },
  },
};

function getFunc(mEasing) {
  switch (mEasing) {
    default:
    case "linear":
      return Easing.Linear.None;
    case "expIn":
      return Easing.Exponential.In;
    case "expOut":
      return Easing.Exponential.Out;
    case "expInOut":
      return Easing.Exponential.InOut;

    case "cubicIn":
      return Easing.Cubic.In;
    case "cubicOut":
      return Easing.Cubic.Out;
    case "cubicInOut":
      return Easing.Cubic.InOut;

    case "quarticIn":
      return Easing.Quartic.In;
    case "quarticOut":
      return Easing.Quartic.Out;
    case "quarticInOut":
      return Easing.Quartic.InOut;

    case "quinticIn":
      return Easing.Quintic.In;
    case "quinticOut":
      return Easing.Quintic.Out;
    case "quinticInOut":
      return Easing.Quintic.InOut;

    case "sinusoidalIn":
      return Easing.Sinusoidal.In;
    case "sinusoidalOut":
      return Easing.Sinusoidal.Out;
    case "sinusoidalInOut":
      return Easing.Sinusoidal.InOut;

    case "circularIn":
      return Easing.Circular.In;
    case "circularOut":
      return Easing.Circular.Out;
    case "circularInOut":
      return Easing.Circular.InOut;

    case "elasticIn":
      return Easing.Elastic.In;
    case "elasticOut":
      return Easing.Elastic.Out;
    case "elasticInOut":
      return Easing.Elastic.InOut;

    case "backIn":
      return Easing.Back.In;
    case "backOut":
      return Easing.Back.Out;
    case "backInOut":
      return Easing.Back.InOut;

    case "bounceIn":
      return Easing.Bounce.in;
    case "bounceOut":
      return Easing.Bounce.out;
    case "bounceInOut":
      return Easing.Bounce.inOut;
  }
}

class TweenNumber {
  constructor(mValue, mEasing = "expOut", mSpeed = 0.01) {
    this._value = mValue;
    this._startValue = mValue;
    this._targetValue = mValue;
    this._counter = 1;
    this.speed = mSpeed;
    this.easing = mEasing;
    this._needUpdate = true;

    this._efIndex = scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].addEF(() => this._update());
  }

  _update() {
    let newCounter = this._counter + this.speed;
    if (newCounter > 1) {
      newCounter = 1;
    }
    if (this._counter === newCounter) {
      this._needUpdate = false;
      return;
    }

    this._counter = newCounter;
    this._needUpdate = true;
  }

  limit(mMin, mMax) {
    if (mMin > mMax) {
      this.limit(mMax, mMin);
      return;
    }

    this._min = mMin;
    this._max = mMax;

    this._checkLimit();
  }

  setTo(mValue) {
    this._value = mValue;
    this._targetValue = mValue;
    this._counter = 1;
  }

  _checkLimit() {
    if (this._min !== undefined && this._targetValue < this._min) {
      this._targetValue = this._min;
    }

    if (this._max !== undefined && this._targetValue > this._max) {
      this._targetValue = this._max;
    }
  }

  destroy() {
    scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].removeEF(this._efIndex);
  }

  //	GETTERS / SETTERS

  set value(mValue) {
    this._startValue = this._value;
    this._targetValue = mValue;
    this._checkLimit();
    this._counter = 0;
  }

  get value() {
    if (this._needUpdate) {
      const f = getFunc(this.easing);
      const p = f(this._counter);
      this._value =
        this._startValue + p * (this._targetValue - this._startValue);
      this._needUpdate = false;
    }
    return this._value;
  }

  get targetValue() {
    return this._targetValue;
  }
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/WebGLConst.js":
/*!*****************************************************!*\
  !*** ./node_modules/alfrid/src/utils/WebGLConst.js ***!
  \*****************************************************/
/*! exports provided: WebGLConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLConst", function() { return WebGLConst; });
// WebglConst.js

// stolen there https://github.com/mattdesl/gl-constants thanks @mattdesl ^^

const WebGLConst = {
  ACTIVE_ATTRIBUTES: 35721,
  ACTIVE_ATTRIBUTE_MAX_LENGTH: 35722,
  ACTIVE_TEXTURE: 34016,
  ACTIVE_UNIFORMS: 35718,
  ACTIVE_UNIFORM_MAX_LENGTH: 35719,
  ALIASED_LINE_WIDTH_RANGE: 33902,
  ALIASED_POINT_SIZE_RANGE: 33901,
  ALPHA: 6406,
  ALPHA_BITS: 3413,
  ALWAYS: 519,
  ARRAY_BUFFER: 34962,
  ARRAY_BUFFER_BINDING: 34964,
  ATTACHED_SHADERS: 35717,
  BACK: 1029,
  BLEND: 3042,
  BLEND_COLOR: 32773,
  BLEND_DST_ALPHA: 32970,
  BLEND_DST_RGB: 32968,
  BLEND_EQUATION: 32777,
  BLEND_EQUATION_ALPHA: 34877,
  BLEND_EQUATION_RGB: 32777,
  BLEND_SRC_ALPHA: 32971,
  BLEND_SRC_RGB: 32969,
  BLUE_BITS: 3412,
  BOOL: 35670,
  BOOL_VEC2: 35671,
  BOOL_VEC3: 35672,
  BOOL_VEC4: 35673,
  BROWSER_DEFAULT_WEBGL: 37444,
  BUFFER_SIZE: 34660,
  BUFFER_USAGE: 34661,
  BYTE: 5120,
  CCW: 2305,
  CLAMP_TO_EDGE: 33071,
  COLOR_ATTACHMENT0: 36064,
  COLOR_BUFFER_BIT: 16384,
  COLOR_CLEAR_VALUE: 3106,
  COLOR_WRITEMASK: 3107,
  COMPILE_STATUS: 35713,
  COMPRESSED_TEXTURE_FORMATS: 34467,
  CONSTANT_ALPHA: 32771,
  CONSTANT_COLOR: 32769,
  CONTEXT_LOST_WEBGL: 37442,
  CULL_FACE: 2884,
  CULL_FACE_MODE: 2885,
  CURRENT_PROGRAM: 35725,
  CURRENT_VERTEX_ATTRIB: 34342,
  CW: 2304,
  DECR: 7683,
  DECR_WRAP: 34056,
  DELETE_STATUS: 35712,
  DEPTH_ATTACHMENT: 36096,
  DEPTH_BITS: 3414,
  DEPTH_BUFFER_BIT: 256,
  DEPTH_CLEAR_VALUE: 2931,
  DEPTH_COMPONENT: 6402,
  RED: 6403,
  DEPTH_COMPONENT16: 33189,
  DEPTH_FUNC: 2932,
  DEPTH_RANGE: 2928,
  DEPTH_STENCIL: 34041,
  DEPTH_STENCIL_ATTACHMENT: 33306,
  DEPTH_TEST: 2929,
  DEPTH_WRITEMASK: 2930,
  DITHER: 3024,
  DONT_CARE: 4352,
  DST_ALPHA: 772,
  DST_COLOR: 774,
  DYNAMIC_DRAW: 35048,
  ELEMENT_ARRAY_BUFFER: 34963,
  ELEMENT_ARRAY_BUFFER_BINDING: 34965,
  EQUAL: 514,
  FASTEST: 4353,
  FLOAT: 5126,
  FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  FRAGMENT_SHADER: 35632,
  FRAMEBUFFER: 36160,
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
  FRAMEBUFFER_BINDING: 36006,
  FRAMEBUFFER_COMPLETE: 36053,
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
  FRAMEBUFFER_UNSUPPORTED: 36061,
  FRONT: 1028,
  FRONT_AND_BACK: 1032,
  FRONT_FACE: 2886,
  FUNC_ADD: 32774,
  FUNC_REVERSE_SUBTRACT: 32779,
  FUNC_SUBTRACT: 32778,
  GENERATE_MIPMAP_HINT: 33170,
  GEQUAL: 518,
  GREATER: 516,
  GREEN_BITS: 3411,
  HALF_FLOAT: 36193,
  HIGH_FLOAT: 36338,
  HIGH_INT: 36341,
  INCR: 7682,
  INCR_WRAP: 34055,
  INFO_LOG_LENGTH: 35716,
  INT: 5124,
  INT_VEC2: 35667,
  INT_VEC3: 35668,
  INT_VEC4: 35669,
  INVALID_ENUM: 1280,
  INVALID_FRAMEBUFFER_OPERATION: 1286,
  INVALID_OPERATION: 1282,
  INVALID_VALUE: 1281,
  INVERT: 5386,
  KEEP: 7680,
  LEQUAL: 515,
  LESS: 513,
  LINEAR: 9729,
  LINEAR_MIPMAP_LINEAR: 9987,
  LINEAR_MIPMAP_NEAREST: 9985,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  LINE_WIDTH: 2849,
  LINK_STATUS: 35714,
  LOW_FLOAT: 36336,
  LOW_INT: 36339,
  LUMINANCE: 6409,
  LUMINANCE_ALPHA: 6410,
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
  MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
  MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
  MAX_RENDERBUFFER_SIZE: 34024,
  MAX_TEXTURE_IMAGE_UNITS: 34930,
  MAX_TEXTURE_SIZE: 3379,
  MAX_VARYING_VECTORS: 36348,
  MAX_VERTEX_ATTRIBS: 34921,
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
  MAX_VERTEX_UNIFORM_VECTORS: 36347,
  MAX_VIEWPORT_DIMS: 3386,
  MEDIUM_FLOAT: 36337,
  MEDIUM_INT: 36340,
  MIRRORED_REPEAT: 33648,
  NEAREST: 9728,
  NEAREST_MIPMAP_LINEAR: 9986,
  NEAREST_MIPMAP_NEAREST: 9984,
  NEVER: 512,
  NICEST: 4354,
  NONE: 0,
  NOTEQUAL: 517,
  NO_ERROR: 0,
  NUM_COMPRESSED_TEXTURE_FORMATS: 34466,
  ONE: 1,
  ONE_MINUS_CONSTANT_ALPHA: 32772,
  ONE_MINUS_CONSTANT_COLOR: 32770,
  ONE_MINUS_DST_ALPHA: 773,
  ONE_MINUS_DST_COLOR: 775,
  ONE_MINUS_SRC_ALPHA: 771,
  ONE_MINUS_SRC_COLOR: 769,
  OUT_OF_MEMORY: 1285,
  PACK_ALIGNMENT: 3333,
  POINTS: 0,
  POLYGON_OFFSET_FACTOR: 32824,
  POLYGON_OFFSET_FILL: 32823,
  POLYGON_OFFSET_UNITS: 10752,
  RED_BITS: 3410,
  RENDERBUFFER: 36161,
  RENDERBUFFER_ALPHA_SIZE: 36179,
  RENDERBUFFER_BINDING: 36007,
  RENDERBUFFER_BLUE_SIZE: 36178,
  RENDERBUFFER_DEPTH_SIZE: 36180,
  RENDERBUFFER_GREEN_SIZE: 36177,
  RENDERBUFFER_HEIGHT: 36163,
  RENDERBUFFER_INTERNAL_FORMAT: 36164,
  RENDERBUFFER_RED_SIZE: 36176,
  RENDERBUFFER_STENCIL_SIZE: 36181,
  RENDERBUFFER_WIDTH: 36162,
  RENDERER: 7937,
  REPEAT: 10497,
  REPLACE: 7681,
  RGB: 6407,
  RGB5_A1: 32855,
  RGB565: 36194,
  RGBA: 6408,
  RGBA4: 32854,
  SAMPLER_2D: 35678,
  SAMPLER_CUBE: 35680,
  SAMPLES: 32937,
  SAMPLE_ALPHA_TO_COVERAGE: 32926,
  SAMPLE_BUFFERS: 32936,
  SAMPLE_COVERAGE: 32928,
  SAMPLE_COVERAGE_INVERT: 32939,
  SAMPLE_COVERAGE_VALUE: 32938,
  SCISSOR_BOX: 3088,
  SCISSOR_TEST: 3089,
  SHADER_COMPILER: 36346,
  SHADER_SOURCE_LENGTH: 35720,
  SHADER_TYPE: 35663,
  SHADING_LANGUAGE_VERSION: 35724,
  SHORT: 5122,
  SRC_ALPHA: 770,
  SRC_ALPHA_SATURATE: 776,
  SRC_COLOR: 768,
  STATIC_DRAW: 35044,
  STENCIL_ATTACHMENT: 36128,
  STENCIL_BACK_FAIL: 34817,
  STENCIL_BACK_FUNC: 34816,
  STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
  STENCIL_BACK_PASS_DEPTH_PASS: 34819,
  STENCIL_BACK_REF: 36003,
  STENCIL_BACK_VALUE_MASK: 36004,
  STENCIL_BACK_WRITEMASK: 36005,
  STENCIL_BITS: 3415,
  STENCIL_BUFFER_BIT: 1024,
  STENCIL_CLEAR_VALUE: 2961,
  STENCIL_FAIL: 2964,
  STENCIL_FUNC: 2962,
  STENCIL_INDEX: 6401,
  STENCIL_INDEX8: 36168,
  STENCIL_PASS_DEPTH_FAIL: 2965,
  STENCIL_PASS_DEPTH_PASS: 2966,
  STENCIL_REF: 2967,
  STENCIL_TEST: 2960,
  STENCIL_VALUE_MASK: 2963,
  STENCIL_WRITEMASK: 2968,
  STREAM_DRAW: 35040,
  SUBPIXEL_BITS: 3408,
  TEXTURE: 5890,
  TEXTURE0: 33984,
  TEXTURE1: 33985,
  TEXTURE2: 33986,
  TEXTURE3: 33987,
  TEXTURE4: 33988,
  TEXTURE5: 33989,
  TEXTURE6: 33990,
  TEXTURE7: 33991,
  TEXTURE8: 33992,
  TEXTURE9: 33993,
  TEXTURE10: 33994,
  TEXTURE11: 33995,
  TEXTURE12: 33996,
  TEXTURE13: 33997,
  TEXTURE14: 33998,
  TEXTURE15: 33999,
  TEXTURE16: 34000,
  TEXTURE17: 34001,
  TEXTURE18: 34002,
  TEXTURE19: 34003,
  TEXTURE20: 34004,
  TEXTURE21: 34005,
  TEXTURE22: 34006,
  TEXTURE23: 34007,
  TEXTURE24: 34008,
  TEXTURE25: 34009,
  TEXTURE26: 34010,
  TEXTURE27: 34011,
  TEXTURE28: 34012,
  TEXTURE29: 34013,
  TEXTURE30: 34014,
  TEXTURE31: 34015,
  TEXTURE_2D: 3553,
  TEXTURE_BINDING_2D: 32873,
  TEXTURE_BINDING_CUBE_MAP: 34068,
  TEXTURE_CUBE_MAP: 34067,
  TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
  TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
  TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
  TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
  TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
  TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
  TEXTURE_MAG_FILTER: 10240,
  TEXTURE_MIN_FILTER: 10241,
  TEXTURE_WRAP_S: 10242,
  TEXTURE_WRAP_T: 10243,
  TRIANGLES: 4,
  TRIANGLE_FAN: 6,
  TRIANGLE_STRIP: 5,
  UNPACK_ALIGNMENT: 3317,
  UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
  UNPACK_FLIP_Y_WEBGL: 37440,
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_INT: 5125,
  UNSIGNED_SHORT: 5123,
  UNSIGNED_SHORT_4_4_4_4: 32819,
  UNSIGNED_SHORT_5_5_5_1: 32820,
  UNSIGNED_SHORT_5_6_5: 33635,
  VALIDATE_STATUS: 35715,
  VENDOR: 7936,
  VERSION: 7938,
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
  VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
  VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
  VERTEX_ATTRIB_ARRAY_POINTER: 34373,
  VERTEX_ATTRIB_ARRAY_SIZE: 34339,
  VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
  VERTEX_ATTRIB_ARRAY_TYPE: 34341,
  VERTEX_SHADER: 35633,
  VIEWPORT: 2978,
  ZERO: 0,
  R8: 33321,
};


/***/ }),

/***/ "./node_modules/alfrid/src/utils/WebGLNumber.js":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/utils/WebGLNumber.js ***!
  \******************************************************/
/*! exports provided: WebGLNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLNumber", function() { return WebGLNumber; });
const WebGLNumber = {
  0: "NONE",
  1: "ONE",
  2: "LINE_LOOP",
  3: "LINE_STRIP",
  4: "TRIANGLES",
  5: "TRIANGLE_STRIP",
  6: "TRIANGLE_FAN",
  256: "DEPTH_BUFFER_BIT",
  512: "NEVER",
  513: "LESS",
  514: "EQUAL",
  515: "LEQUAL",
  516: "GREATER",
  517: "NOTEQUAL",
  518: "GEQUAL",
  519: "ALWAYS",
  768: "SRC_COLOR",
  769: "ONE_MINUS_SRC_COLOR",
  770: "SRC_ALPHA",
  771: "ONE_MINUS_SRC_ALPHA",
  772: "DST_ALPHA",
  773: "ONE_MINUS_DST_ALPHA",
  774: "DST_COLOR",
  775: "ONE_MINUS_DST_COLOR",
  776: "SRC_ALPHA_SATURATE",
  1024: "STENCIL_BUFFER_BIT",
  1028: "FRONT",
  1029: "BACK",
  1032: "FRONT_AND_BACK",
  1280: "INVALID_ENUM",
  1281: "INVALID_VALUE",
  1282: "INVALID_OPERATION",
  1285: "OUT_OF_MEMORY",
  1286: "INVALID_FRAMEBUFFER_OPERATION",
  2304: "CW",
  2305: "CCW",
  2849: "LINE_WIDTH",
  2884: "CULL_FACE",
  2885: "CULL_FACE_MODE",
  2886: "FRONT_FACE",
  2928: "DEPTH_RANGE",
  2929: "DEPTH_TEST",
  2930: "DEPTH_WRITEMASK",
  2931: "DEPTH_CLEAR_VALUE",
  2932: "DEPTH_FUNC",
  2960: "STENCIL_TEST",
  2961: "STENCIL_CLEAR_VALUE",
  2962: "STENCIL_FUNC",
  2963: "STENCIL_VALUE_MASK",
  2964: "STENCIL_FAIL",
  2965: "STENCIL_PASS_DEPTH_FAIL",
  2966: "STENCIL_PASS_DEPTH_PASS",
  2967: "STENCIL_REF",
  2968: "STENCIL_WRITEMASK",
  2978: "VIEWPORT",
  3024: "DITHER",
  3042: "BLEND",
  3088: "SCISSOR_BOX",
  3089: "SCISSOR_TEST",
  3106: "COLOR_CLEAR_VALUE",
  3107: "COLOR_WRITEMASK",
  3317: "UNPACK_ALIGNMENT",
  3333: "PACK_ALIGNMENT",
  3379: "MAX_TEXTURE_SIZE",
  3386: "MAX_VIEWPORT_DIMS",
  3408: "SUBPIXEL_BITS",
  3410: "RED_BITS",
  3411: "GREEN_BITS",
  3412: "BLUE_BITS",
  3413: "ALPHA_BITS",
  3414: "DEPTH_BITS",
  3415: "STENCIL_BITS",
  3553: "TEXTURE_2D",
  4352: "DONT_CARE",
  4353: "FASTEST",
  4354: "NICEST",
  5120: "BYTE",
  5121: "UNSIGNED_BYTE",
  5122: "SHORT",
  5123: "UNSIGNED_SHORT",
  5124: "INT",
  5125: "UNSIGNED_INT",
  5126: "FLOAT",
  5386: "INVERT",
  5890: "TEXTURE",
  6401: "STENCIL_INDEX",
  6402: "DEPTH_COMPONENT",
  6403: "RED",
  6406: "ALPHA",
  6407: "RGB",
  6408: "RGBA",
  6409: "LUMINANCE",
  6410: "LUMINANCE_ALPHA",
  7680: "KEEP",
  7681: "REPLACE",
  7682: "INCR",
  7683: "DECR",
  7936: "VENDOR",
  7937: "RENDERER",
  7938: "VERSION",
  9728: "NEAREST",
  9729: "LINEAR",
  9984: "NEAREST_MIPMAP_NEAREST",
  9985: "LINEAR_MIPMAP_NEAREST",
  9986: "NEAREST_MIPMAP_LINEAR",
  9987: "LINEAR_MIPMAP_LINEAR",
  10240: "TEXTURE_MAG_FILTER",
  10241: "TEXTURE_MIN_FILTER",
  10242: "TEXTURE_WRAP_S",
  10243: "TEXTURE_WRAP_T",
  10497: "REPEAT",
  10752: "POLYGON_OFFSET_UNITS",
  16384: "COLOR_BUFFER_BIT",
  32769: "CONSTANT_COLOR",
  32770: "ONE_MINUS_CONSTANT_COLOR",
  32771: "CONSTANT_ALPHA",
  32772: "ONE_MINUS_CONSTANT_ALPHA",
  32773: "BLEND_COLOR",
  32774: "FUNC_ADD",
  32777: "BLEND_EQUATION_RGB",
  32778: "FUNC_SUBTRACT",
  32779: "FUNC_REVERSE_SUBTRACT",
  32819: "UNSIGNED_SHORT_4_4_4_4",
  32820: "UNSIGNED_SHORT_5_5_5_1",
  32823: "POLYGON_OFFSET_FILL",
  32824: "POLYGON_OFFSET_FACTOR",
  32854: "RGBA4",
  32855: "RGB5_A1",
  32873: "TEXTURE_BINDING_2D",
  32926: "SAMPLE_ALPHA_TO_COVERAGE",
  32928: "SAMPLE_COVERAGE",
  32936: "SAMPLE_BUFFERS",
  32937: "SAMPLES",
  32938: "SAMPLE_COVERAGE_VALUE",
  32939: "SAMPLE_COVERAGE_INVERT",
  32968: "BLEND_DST_RGB",
  32969: "BLEND_SRC_RGB",
  32970: "BLEND_DST_ALPHA",
  32971: "BLEND_SRC_ALPHA",
  33071: "CLAMP_TO_EDGE",
  33170: "GENERATE_MIPMAP_HINT",
  33189: "DEPTH_COMPONENT16",
  33306: "DEPTH_STENCIL_ATTACHMENT",
  33321: "R8",
  33635: "UNSIGNED_SHORT_5_6_5",
  33648: "MIRRORED_REPEAT",
  33901: "ALIASED_POINT_SIZE_RANGE",
  33902: "ALIASED_LINE_WIDTH_RANGE",
  33984: "TEXTURE0",
  33985: "TEXTURE1",
  33986: "TEXTURE2",
  33987: "TEXTURE3",
  33988: "TEXTURE4",
  33989: "TEXTURE5",
  33990: "TEXTURE6",
  33991: "TEXTURE7",
  33992: "TEXTURE8",
  33993: "TEXTURE9",
  33994: "TEXTURE10",
  33995: "TEXTURE11",
  33996: "TEXTURE12",
  33997: "TEXTURE13",
  33998: "TEXTURE14",
  33999: "TEXTURE15",
  34000: "TEXTURE16",
  34001: "TEXTURE17",
  34002: "TEXTURE18",
  34003: "TEXTURE19",
  34004: "TEXTURE20",
  34005: "TEXTURE21",
  34006: "TEXTURE22",
  34007: "TEXTURE23",
  34008: "TEXTURE24",
  34009: "TEXTURE25",
  34010: "TEXTURE26",
  34011: "TEXTURE27",
  34012: "TEXTURE28",
  34013: "TEXTURE29",
  34014: "TEXTURE30",
  34015: "TEXTURE31",
  34016: "ACTIVE_TEXTURE",
  34024: "MAX_RENDERBUFFER_SIZE",
  34041: "DEPTH_STENCIL",
  34055: "INCR_WRAP",
  34056: "DECR_WRAP",
  34067: "TEXTURE_CUBE_MAP",
  34068: "TEXTURE_BINDING_CUBE_MAP",
  34069: "TEXTURE_CUBE_MAP_POSITIVE_X",
  34070: "TEXTURE_CUBE_MAP_NEGATIVE_X",
  34071: "TEXTURE_CUBE_MAP_POSITIVE_Y",
  34072: "TEXTURE_CUBE_MAP_NEGATIVE_Y",
  34073: "TEXTURE_CUBE_MAP_POSITIVE_Z",
  34074: "TEXTURE_CUBE_MAP_NEGATIVE_Z",
  34076: "MAX_CUBE_MAP_TEXTURE_SIZE",
  34338: "VERTEX_ATTRIB_ARRAY_ENABLED",
  34339: "VERTEX_ATTRIB_ARRAY_SIZE",
  34340: "VERTEX_ATTRIB_ARRAY_STRIDE",
  34341: "VERTEX_ATTRIB_ARRAY_TYPE",
  34342: "CURRENT_VERTEX_ATTRIB",
  34373: "VERTEX_ATTRIB_ARRAY_POINTER",
  34466: "NUM_COMPRESSED_TEXTURE_FORMATS",
  34467: "COMPRESSED_TEXTURE_FORMATS",
  34660: "BUFFER_SIZE",
  34661: "BUFFER_USAGE",
  34816: "STENCIL_BACK_FUNC",
  34817: "STENCIL_BACK_FAIL",
  34818: "STENCIL_BACK_PASS_DEPTH_FAIL",
  34819: "STENCIL_BACK_PASS_DEPTH_PASS",
  34877: "BLEND_EQUATION_ALPHA",
  34921: "MAX_VERTEX_ATTRIBS",
  34922: "VERTEX_ATTRIB_ARRAY_NORMALIZED",
  34930: "MAX_TEXTURE_IMAGE_UNITS",
  34962: "ARRAY_BUFFER",
  34963: "ELEMENT_ARRAY_BUFFER",
  34964: "ARRAY_BUFFER_BINDING",
  34965: "ELEMENT_ARRAY_BUFFER_BINDING",
  34975: "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",
  35040: "STREAM_DRAW",
  35044: "STATIC_DRAW",
  35048: "DYNAMIC_DRAW",
  35632: "FRAGMENT_SHADER",
  35633: "VERTEX_SHADER",
  35660: "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
  35661: "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
  35663: "SHADER_TYPE",
  35664: "FLOAT_VEC2",
  35665: "FLOAT_VEC3",
  35666: "FLOAT_VEC4",
  35667: "INT_VEC2",
  35668: "INT_VEC3",
  35669: "INT_VEC4",
  35670: "BOOL",
  35671: "BOOL_VEC2",
  35672: "BOOL_VEC3",
  35673: "BOOL_VEC4",
  35674: "FLOAT_MAT2",
  35675: "FLOAT_MAT3",
  35676: "FLOAT_MAT4",
  35678: "SAMPLER_2D",
  35680: "SAMPLER_CUBE",
  35712: "DELETE_STATUS",
  35713: "COMPILE_STATUS",
  35714: "LINK_STATUS",
  35715: "VALIDATE_STATUS",
  35716: "INFO_LOG_LENGTH",
  35717: "ATTACHED_SHADERS",
  35718: "ACTIVE_UNIFORMS",
  35719: "ACTIVE_UNIFORM_MAX_LENGTH",
  35720: "SHADER_SOURCE_LENGTH",
  35721: "ACTIVE_ATTRIBUTES",
  35722: "ACTIVE_ATTRIBUTE_MAX_LENGTH",
  35724: "SHADING_LANGUAGE_VERSION",
  35725: "CURRENT_PROGRAM",
  36003: "STENCIL_BACK_REF",
  36004: "STENCIL_BACK_VALUE_MASK",
  36005: "STENCIL_BACK_WRITEMASK",
  36006: "FRAMEBUFFER_BINDING",
  36007: "RENDERBUFFER_BINDING",
  36048: "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",
  36049: "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",
  36050: "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",
  36051: "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",
  36053: "FRAMEBUFFER_COMPLETE",
  36054: "FRAMEBUFFER_INCOMPLETE_ATTACHMENT",
  36055: "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",
  36057: "FRAMEBUFFER_INCOMPLETE_DIMENSIONS",
  36061: "FRAMEBUFFER_UNSUPPORTED",
  36064: "COLOR_ATTACHMENT0",
  36096: "DEPTH_ATTACHMENT",
  36128: "STENCIL_ATTACHMENT",
  36160: "FRAMEBUFFER",
  36161: "RENDERBUFFER",
  36162: "RENDERBUFFER_WIDTH",
  36163: "RENDERBUFFER_HEIGHT",
  36164: "RENDERBUFFER_INTERNAL_FORMAT",
  36168: "STENCIL_INDEX8",
  36176: "RENDERBUFFER_RED_SIZE",
  36177: "RENDERBUFFER_GREEN_SIZE",
  36178: "RENDERBUFFER_BLUE_SIZE",
  36179: "RENDERBUFFER_ALPHA_SIZE",
  36180: "RENDERBUFFER_DEPTH_SIZE",
  36181: "RENDERBUFFER_STENCIL_SIZE",
  36193: "HALF_FLOAT",
  36194: "RGB565",
  36336: "LOW_FLOAT",
  36337: "MEDIUM_FLOAT",
  36338: "HIGH_FLOAT",
  36339: "LOW_INT",
  36340: "MEDIUM_INT",
  36341: "HIGH_INT",
  36346: "SHADER_COMPILER",
  36347: "MAX_VERTEX_UNIFORM_VECTORS",
  36348: "MAX_VARYING_VECTORS",
  36349: "MAX_FRAGMENT_UNIFORM_VECTORS",
  37440: "UNPACK_FLIP_Y_WEBGL",
  37441: "UNPACK_PREMULTIPLY_ALPHA_WEBGL",
  37442: "CONTEXT_LOST_WEBGL",
  37443: "UNPACK_COLORSPACE_CONVERSION_WEBGL",
  37444: "BROWSER_DEFAULT_WEBGL",
};


/***/ }),

/***/ "./node_modules/alfrid/src/utils/checkWebGL2.js":
/*!******************************************************!*\
  !*** ./node_modules/alfrid/src/utils/checkWebGL2.js ***!
  \******************************************************/
/*! exports provided: checkWebGL2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWebGL2", function() { return checkWebGL2; });
const checkWebGL2 = () => {
  const canvas = document.createElement("canvas");
  const ctx =
    canvas.getContext("experimental-webgl2") || canvas.getContext("webgl2");
  return !!ctx;
};




/***/ }),

/***/ "./node_modules/alfrid/src/utils/exposeGLProperties.js":
/*!*************************************************************!*\
  !*** ./node_modules/alfrid/src/utils/exposeGLProperties.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebGLConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLConst */ "./node_modules/alfrid/src/utils/WebGLConst.js");
/* harmony import */ var _WebGLNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebGLNumber */ "./node_modules/alfrid/src/utils/WebGLNumber.js");



const exposeGLProperties = (GL) => {
  // console.log(GL);
  for (const s in _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"]) {
    if (!GL[s]) {
      GL[s] = _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"][s];
    } else {
      // if (s !== "FLOAT") console.log("already exist : ", s);
      console.log("already exist : ", s);
    }
  }

  if (GL.webgl2) {
    const check = /^[^a-z]*$/;
    for (const s in GL.gl) {
      if (check.test(s) && s.indexOf("FLOAT") === -1) {
        GL[s] = GL.gl[s];
        _WebGLConst__WEBPACK_IMPORTED_MODULE_0__["WebGLConst"][s] = GL.gl[s];
        _WebGLNumber__WEBPACK_IMPORTED_MODULE_1__["WebGLNumber"][GL[s]] = s;
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (exposeGLProperties);


/***/ }),

/***/ "./node_modules/alfrid/src/utils/getAndApplyExtension.js":
/*!***************************************************************!*\
  !*** ./node_modules/alfrid/src/utils/getAndApplyExtension.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAndApplyExtension; });
// VertexArrayObject.js

function getAndApplyExtension(gl, name) {
  const ext = gl.getExtension(name);
  if (!ext) {
    return false;
  }
  const suffix = name.split("_")[0];
  const suffixRE = new RegExp(`${suffix}$`);

  for (const key in ext) {
    const val = ext[key];
    if (typeof val === "function") {
      const unsuffixedKey = key.replace(suffixRE, "");
      if (key.substring) {
        gl[unsuffixedKey] = ext[key].bind(ext);
        // console.log("Replacing :", key, "=>", unsuffixedKey);
      }
    }
  }

  return true;
}


/***/ }),

/***/ "./node_modules/alfrid/src/utils/getExtensions.js":
/*!********************************************************!*\
  !*** ./node_modules/alfrid/src/utils/getExtensions.js ***!
  \********************************************************/
/*! exports provided: getExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtensions", function() { return getExtensions; });
/* harmony import */ var _getAndApplyExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAndApplyExtension */ "./node_modules/alfrid/src/utils/getAndApplyExtension.js");


const extensionsWebGL = [
  "EXT_shader_texture_lod",
  "EXT_sRGB",
  "EXT_frag_depth",
  "OES_texture_float",
  "OES_texture_half_float",
  "OES_texture_float_linear",
  "OES_texture_half_float_linear",
  "OES_standard_derivatives",
  "OES_element_index_uint",
  "EXT_texture_filter_anisotropic",
  "EXT_color_buffer_half_float",
  "OES_vertex_array_object",
  "WEBGL_depth_texture",
  "ANGLE_instanced_arrays",
  "WEBGL_color_buffer_float",
  "WEBGL_draw_buffers",
  "EXT_color_buffer_float",
];

// const extensionsWebGL2 = [
//   "EXT_color_buffer_float",
//   "EXT_texture_filter_anisotropic",
//   "OES_element_index_uint",
//   "OES_texture_float_linear",
//   "OES_texture_half_float_linear",
// ];

/**
 * Clear WebGL Context
 *
 * @param {object} mGL the GLTool Instance
 * @returns {object} the object contains all extensions
 */

const getExtensions = (mGL) => {
  const { gl } = mGL;
  const isWebGL2 =
    window.WebGL2RenderingContext && gl instanceof WebGL2RenderingContext;
  const extensions = {};
  const extensionsList = extensionsWebGL;
  extensionsList.forEach((ext) => {
    extensions[ext] = gl.getExtension(ext);
  });

  if (!isWebGL2) {
    // only IE not support
    // caniuse.com/?search=OES_vertex_array_object
    if (!extensions["OES_vertex_array_object"]) {
      console.error("OES_vertex_array_object extension is not supported");
    }
    Object(_getAndApplyExtension__WEBPACK_IMPORTED_MODULE_0__["default"])(gl, "OES_vertex_array_object");
    Object(_getAndApplyExtension__WEBPACK_IMPORTED_MODULE_0__["default"])(gl, "ANGLE_instanced_arrays");
    Object(_getAndApplyExtension__WEBPACK_IMPORTED_MODULE_0__["default"])(gl, "WEBGL_draw_buffers");
  }

  // ANISOTROPY Filter Check
  const extAnisotropic = extensions["EXT_texture_filter_anisotropic"];
  if (extAnisotropic) {
    mGL.maxAnisotropy = gl.getParameter(
      extAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT
    );
  }

  // Draw Buffers
  mGL.multiRenderTargetSupport = !!mGL.gl.drawBuffers;

  if (mGL.multiRenderTargetSupport) {
    const MAX_DRAW_BUFFERS =
      mGL.gl.MAX_DRAW_BUFFERS ||
      extensions["WEBGL_draw_buffers"].MAX_DRAW_BUFFERS_WEBGL;
    mGL.maxMultiRenderTargets = gl.getParameter(MAX_DRAW_BUFFERS);
  }

  return extensions;
};




/***/ }),

/***/ "./node_modules/alfrid/src/utils/index.js":
/*!************************************************!*\
  !*** ./node_modules/alfrid/src/utils/index.js ***!
  \************************************************/
/*! exports provided: checkWebGL2, getExtensions, isMobile, checkViewport, equals, getMouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkViewport", function() { return checkViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMouse", function() { return getMouse; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
/* harmony import */ var _checkWebGL2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkWebGL2 */ "./node_modules/alfrid/src/utils/checkWebGL2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkWebGL2", function() { return _checkWebGL2__WEBPACK_IMPORTED_MODULE_1__["checkWebGL2"]; });

/* harmony import */ var _getExtensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getExtensions */ "./node_modules/alfrid/src/utils/getExtensions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtensions", function() { return _getExtensions__WEBPACK_IMPORTED_MODULE_2__["getExtensions"]; });

/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isMobile */ "./node_modules/alfrid/src/utils/isMobile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _isMobile__WEBPACK_IMPORTED_MODULE_3__["isMobile"]; });






const checkViewport = (viewport, x, y, w, h) => {
  let hasChanged = false;
  if (x !== viewport[0]) {
    hasChanged = true;
  }
  if (y !== viewport[1]) {
    hasChanged = true;
  }
  if (w !== viewport[2]) {
    hasChanged = true;
  }
  if (h !== viewport[3]) {
    hasChanged = true;
  }
  return hasChanged;
};

const equals = (a, b) => {
  if (typeof a === "number") {
    return gl_matrix__WEBPACK_IMPORTED_MODULE_0__["glMatrix"].equals(a, b);
  }

  if (a.length !== b.length) {
    return false;
  }

  let _isEqual = true;
  a.forEach((v, i) => {
    _isEqual = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["glMatrix"].equals(v, b[i]) && _isEqual;
  });
  return _isEqual;
};

const getMouse = (e) => {
  let x, y;

  if (e.touches) {
    x = e.touches[0].pageX;
    y = e.touches[0].pageY;
  } else {
    x = e.clientX;
    y = e.clientY;
  }

  return {
    x,
    y,
  };
};

/*
mat4.log = function(m) {
  const a = [];
  for (let i = 0; i < 4; i++) {
    const b = [];
    for (let j = 0; j < 4; j++) {
      b.push(m[i * 4 + j]);
    }
    a.push(b);
  }
  console.table(a);
};
*/


/***/ }),

/***/ "./node_modules/alfrid/src/utils/isMobile.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/utils/isMobile.js ***!
  \***************************************************/
/*! exports provided: isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
const mobileCheck = () => {
  let isMobile = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }

  return isMobile;
};

const isMobile = mobileCheck();




/***/ }),

/***/ "./node_modules/alfrid/src/utils/parseDds.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/utils/parseDds.js ***!
  \***************************************************/
/*! exports provided: parseDds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDds", function() { return parseDds; });
/* harmony import */ var parse_dds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse-dds */ "./node_modules/parse-dds/index.js");
/* harmony import */ var parse_dds__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse_dds__WEBPACK_IMPORTED_MODULE_0__);


const DDSD_MIPMAPCOUNT = 0x20000;
const OFF_MIPMAPCOUNT = 7;
const headerLengthInt = 31;

const parseDds = function(mArrayBuffer) {
  //	CHECKING MIP MAP LEVELS
  const ddsInfos = parse_dds__WEBPACK_IMPORTED_MODULE_0___default()(mArrayBuffer);
  const { flags } = ddsInfos;
  const header = new Int32Array(mArrayBuffer, 0, headerLengthInt);
  let mipmapCount = 1;
  if (flags & DDSD_MIPMAPCOUNT) {
    mipmapCount = Math.max(1, header[OFF_MIPMAPCOUNT]);
  }
  const sources = ddsInfos.images.map((img) => {
    const faceData = new Float32Array(
      mArrayBuffer.slice(img.offset, img.offset + img.length)
    );
    return {
      data: faceData,
      shape: img.shape,
      mipmapCount,
    };
  });

  return sources;
};




/***/ }),

/***/ "./node_modules/alfrid/src/utils/parseHdr.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/utils/parseHdr.js ***!
  \***************************************************/
/*! exports provided: parseHdr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHdr", function() { return parseHdr; });
// Code ported by Marcin Ignac (2014)
// Based on Java implementation from
// https://code.google.com/r/cys12345-research/source/browse/hdr/image_processor/RGBE.java?r=7d84e9fd866b24079dbe61fa0a966ce8365f5726
// const radiancePattern = "#\\?RADIANCE";
// const commentPattern = "#.*";
// let gammaPattern = 'GAMMA=';
const exposurePattern = "EXPOSURE=\\s*([0-9]*[.][0-9]*)";
const formatPattern = "FORMAT=32-bit_rle_rgbe";
const widthHeightPattern = "-Y ([0-9]+) \\+X ([0-9]+)";

// http://croquetweak.blogspot.co.uk/2014/08/deconstructing-floats-frexp-and-ldexp.html
// function ldexp(mantissa, exponent) {
//     return exponent > 1023 ? mantissa * Math.pow(2, 1023) * Math.pow(2, exponent - 1023) : exponent < -1074 ? mantissa * Math.pow(2, -1074) * Math.pow(2, exponent + 1074) : mantissa * Math.pow(2, exponent);
// }

function readPixelsRawRLE(
  buffer,
  data,
  offset,
  fileOffset,
  scanlineWidth,
  numScanlines
) {
  const rgbe = new Array(4);
  let scanlineBuffer = null;
  let ptr;
  let ptrEnd;
  let count;
  const buf = new Array(2);
  const bufferLength = buffer.length;

  function readBuf(buf) {
    let bytesRead = 0;
    do {
      buf[bytesRead++] = buffer[fileOffset];
    } while (++fileOffset < bufferLength && bytesRead < buf.length);
    return bytesRead;
  }

  function readBufOffset(buf, offset, length) {
    let bytesRead = 0;
    do {
      buf[offset + bytesRead++] = buffer[fileOffset];
    } while (++fileOffset < bufferLength && bytesRead < length);
    return bytesRead;
  }

  function readPixelsRaw(buffer, data, offset, numpixels) {
    const numExpected = 4 * numpixels;
    const numRead = readBufOffset(data, offset, numExpected);
    if (numRead < numExpected) {
      throw new Error(
        `Error reading raw pixels: got ${numRead} bytes, expected ${numExpected}`
      );
    }
  }

  while (numScanlines > 0) {
    if (readBuf(rgbe) < rgbe.length) {
      throw new Error(`Error reading bytes: expected ${rgbe.length}`);
    }

    if (rgbe[0] !== 2 || rgbe[1] !== 2 || (rgbe[2] & 0x80) !== 0) {
      // this file is not run length encoded
      data[offset++] = rgbe[0];
      data[offset++] = rgbe[1];
      data[offset++] = rgbe[2];
      data[offset++] = rgbe[3];
      readPixelsRaw(buffer, data, offset, scanlineWidth * numScanlines - 1);
      return;
    }

    if ((((rgbe[2] & 0xff) << 8) | (rgbe[3] & 0xff)) !== scanlineWidth) {
      throw new Error(
        `Wrong scanline width ${((rgbe[2] & 0xff) << 8) |
          (rgbe[3] & 0xff)}, expected ${scanlineWidth}`
      );
    }

    if (scanlineBuffer === null) {
      scanlineBuffer = new Array(4 * scanlineWidth);
    }

    ptr = 0;
    /* read each of the four channels for the scanline into the buffer */
    for (let i = 0; i < 4; i++) {
      ptrEnd = (i + 1) * scanlineWidth;
      while (ptr < ptrEnd) {
        if (readBuf(buf) < buf.length) {
          throw new Error("Error reading 2-byte buffer");
        }
        if ((buf[0] & 0xff) > 128) {
          /* a run of the same value */
          count = (buf[0] & 0xff) - 128;
          if (count === 0 || count > ptrEnd - ptr) {
            throw new Error("Bad scanline data");
          }
          while (count-- > 0) {
            scanlineBuffer[ptr++] = buf[1];
          }
        } else {
          /* a non-run */
          count = buf[0] & 0xff;
          if (count === 0 || count > ptrEnd - ptr) {
            throw new Error("Bad scanline data");
          }
          scanlineBuffer[ptr++] = buf[1];
          if (--count > 0) {
            if (readBufOffset(scanlineBuffer, ptr, count) < count) {
              throw new Error("Error reading non-run data");
            }
            ptr += count;
          }
        }
      }
    }

    /* copy byte data to output */
    for (let i = 0; i < scanlineWidth; i++) {
      data[offset + 0] = scanlineBuffer[i];
      data[offset + 1] = scanlineBuffer[i + scanlineWidth];
      data[offset + 2] = scanlineBuffer[i + 2 * scanlineWidth];
      data[offset + 3] = scanlineBuffer[i + 3 * scanlineWidth];
      offset += 4;
    }

    numScanlines--;
  }
}

// Returns data as floats and flipped along Y by default
function parseHdr(buffer) {
  if (buffer instanceof ArrayBuffer) {
    buffer = new Uint8Array(buffer);
  }

  let fileOffset = 0;
  const bufferLength = buffer.length;

  const NEW_LINE = 10;

  function readLine() {
    let buf = "";
    do {
      const b = buffer[fileOffset];
      if (b === NEW_LINE) {
        ++fileOffset;
        break;
      }
      buf += String.fromCharCode(b);
    } while (++fileOffset < bufferLength);
    return buf;
  }

  let width = 0;
  let height = 0;
  let exposure = 1;
  const gamma = 1;
  let rle = false;

  for (let i = 0; i < 20; i++) {
    const line = readLine();
    let match;
    if ((match = line.match(formatPattern))) {
      rle = true;
    } else if ((match = line.match(exposurePattern))) {
      exposure = Number(match[1]);
    } else if ((match = line.match(widthHeightPattern))) {
      height = Number(match[1]);
      width = Number(match[2]);
      break;
    }
  }

  if (!rle) {
    throw new Error("File is not run length encoded!");
  }

  const data = new Uint8Array(width * height * 4);
  const scanlineWidth = width;
  const numScanlines = height;

  readPixelsRawRLE(buffer, data, 0, fileOffset, scanlineWidth, numScanlines);

  // TODO: Should be Float16
  const floatData = new Float32Array(width * height * 4);
  for (let offset = 0; offset < data.length; offset += 4) {
    let r = data[offset + 0] / 255;
    let g = data[offset + 1] / 255;
    let b = data[offset + 2] / 255;
    const e = data[offset + 3];
    const f = Math.pow(2.0, e - 128.0);

    r *= f;
    g *= f;
    b *= f;

    const floatOffset = offset;

    floatData[floatOffset + 0] = r;
    floatData[floatOffset + 1] = g;
    floatData[floatOffset + 2] = b;
    floatData[floatOffset + 3] = 1.0;
  }

  return {
    shape: [width, height],
    exposure,
    gamma,
    data: floatData,
  };
}




/***/ }),

/***/ "./node_modules/alfrid/src/utils/parseObj.js":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/utils/parseObj.js ***!
  \***************************************************/
/*! exports provided: parseObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseObj", function() { return parseObj; });
/* harmony import */ var _core_Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Mesh */ "./node_modules/alfrid/src/core/Mesh.js");


const parseObj = (objStr) => {
  const lines = objStr.split("\n");

  const positions = [];
  const coords = [];
  const finalNormals = [];
  const vertices = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  let count = 0;
  let result;

  // v float float float
  const vertexPattern = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

  // vn float float float
  const normalPattern = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

  // vt float float
  const uvPattern = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

  // f vertex vertex vertex ...
  const facePattern1 = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/;

  // f vertex/uv vertex/uv vertex/uv ...
  const facePattern2 = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/;

  // f vertex/uv/normal vertex/uv/normal vertex/uv/normal ...
  const facePattern3 = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/;

  // f vertex//normal vertex//normal vertex//normal ...
  const facePattern4 = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/;

  function parseVertexIndex(value) {
    const index = parseInt(value);
    return (index >= 0 ? index - 1 : index + vertices.length / 3) * 3;
  }

  function parseNormalIndex(value) {
    const index = parseInt(value);
    return (index >= 0 ? index - 1 : index + normals.length / 3) * 3;
  }

  function parseUVIndex(value) {
    const index = parseInt(value);
    return (index >= 0 ? index - 1 : index + uvs.length / 2) * 2;
  }

  function addVertex(a, b, c) {
    positions.push([vertices[a], vertices[a + 1], vertices[a + 2]]);
    positions.push([vertices[b], vertices[b + 1], vertices[b + 2]]);
    positions.push([vertices[c], vertices[c + 1], vertices[c + 2]]);

    indices.push(count * 3 + 0);
    indices.push(count * 3 + 1);
    indices.push(count * 3 + 2);

    count++;
  }

  function addUV(a, b, c) {
    coords.push([uvs[a], uvs[a + 1]]);
    coords.push([uvs[b], uvs[b + 1]]);
    coords.push([uvs[c], uvs[c + 1]]);
  }

  function addNormal(a, b, c) {
    finalNormals.push([normals[a], normals[a + 1], normals[a + 2]]);
    finalNormals.push([normals[b], normals[b + 1], normals[b + 2]]);
    finalNormals.push([normals[c], normals[c + 1], normals[c + 2]]);
  }

  function addFace(a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {
    let ia = parseVertexIndex(a);
    let ib = parseVertexIndex(b);
    let ic = parseVertexIndex(c);
    let id;

    if (d === undefined) {
      addVertex(ia, ib, ic);
    } else {
      id = parseVertexIndex(d);

      addVertex(ia, ib, id);
      addVertex(ib, ic, id);
    }

    if (ua !== undefined) {
      ia = parseUVIndex(ua);
      ib = parseUVIndex(ub);
      ic = parseUVIndex(uc);

      if (d === undefined) {
        addUV(ia, ib, ic);
      } else {
        id = parseUVIndex(ud);

        addUV(ia, ib, id);
        addUV(ib, ic, id);
      }
    }

    if (na !== undefined) {
      ia = parseNormalIndex(na);
      ib = parseNormalIndex(nb);
      ic = parseNormalIndex(nc);

      if (d === undefined) {
        addNormal(ia, ib, ic);
      } else {
        id = parseNormalIndex(nd);

        addNormal(ia, ib, id);
        addNormal(ib, ic, id);
      }
    }
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    line = line.trim();

    if (line.length === 0 || line.charAt(0) === "#") {
      continue;
    } else if ((result = vertexPattern.exec(line)) !== null) {
      vertices.push(
        parseFloat(result[1]),
        parseFloat(result[2]),
        parseFloat(result[3])
      );
    } else if ((result = normalPattern.exec(line)) !== null) {
      normals.push(
        parseFloat(result[1]),
        parseFloat(result[2]),
        parseFloat(result[3])
      );
    } else if ((result = uvPattern.exec(line)) !== null) {
      uvs.push(parseFloat(result[1]), parseFloat(result[2]));
    } else if ((result = facePattern1.exec(line)) !== null) {
      addFace(result[1], result[2], result[3], result[4]);
    } else if ((result = facePattern2.exec(line)) !== null) {
      addFace(
        result[2],
        result[5],
        result[8],
        result[11],
        result[3],
        result[6],
        result[9],
        result[12]
      );
    } else if ((result = facePattern3.exec(line)) !== null) {
      addFace(
        result[2],
        result[6],
        result[10],
        result[14],
        result[3],
        result[7],
        result[11],
        result[15],
        result[4],
        result[8],
        result[12],
        result[16]
      );
    } else if ((result = facePattern4.exec(line)) !== null) {
      addFace(
        result[2],
        result[5],
        result[8],
        result[11],
        undefined,
        undefined,
        undefined,
        undefined,
        result[3],
        result[6],
        result[9],
        result[12]
      );
    }
  }

  return generateMeshes({
    positions,
    coords,
    normals: finalNormals,
    indices,
  });
};

const generateMeshes = (o) => {
  const maxNumVertices = 65535;
  const hasNormals = o.normals.length > 0;
  const hasUVs = o.coords.length > 0;
  let mesh;

  if (o.positions.length > maxNumVertices) {
    const meshes = [];
    let lastIndex = 0;

    const oCopy = {};
    oCopy.positions = o.positions.concat();
    oCopy.coords = o.coords.concat();
    oCopy.indices = o.indices.concat();
    oCopy.normals = o.normals.concat();

    while (o.indices.length > 0) {
      const sliceNum = Math.min(maxNumVertices, o.positions.length);
      const indices = o.indices.splice(0, sliceNum);
      const positions = [];
      const coords = [];
      const normals = [];
      let index,
        tmpIndex = 0;

      for (let i = 0; i < indices.length; i++) {
        if (indices[i] > tmpIndex) {
          tmpIndex = indices[i];
        }

        index = indices[i];

        positions.push(oCopy.positions[index]);
        if (hasUVs) {
          coords.push(oCopy.coords[index]);
        }
        if (hasNormals) {
          normals.push(oCopy.normals[index]);
        }

        indices[i] -= lastIndex;
      }

      lastIndex = tmpIndex + 1;

      mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_0__["Mesh"]();
      mesh.bufferVertex(positions);
      if (hasUVs) {
        mesh.bufferTexCoord(coords);
      }

      mesh.bufferIndex(indices);
      if (hasNormals) {
        mesh.bufferNormal(normals);
      }

      meshes.push(mesh);
    }

    return meshes;
  } else {
    mesh = new _core_Mesh__WEBPACK_IMPORTED_MODULE_0__["Mesh"]();
    mesh.bufferVertex(o.positions);
    if (hasUVs) {
      mesh.bufferTexCoord(o.coords);
    }
    mesh.bufferIndex(o.indices);
    if (hasNormals) {
      mesh.bufferNormal(o.normals);
    }

    return mesh;
  }

  return null;
};




/***/ }),

/***/ "./node_modules/alfrid/src/utils/polyfixes.js":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/utils/polyfixes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.prototype.flat) {
  Object.defineProperty(Array.prototype, "flat", {
    configurable: true,
    value: function flat() {
      var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);

      return depth
        ? Array.prototype.reduce.call(
            this,
            function(acc, cur) {
              if (Array.isArray(cur)) {
                acc.push.apply(acc, flat.call(cur, depth - 1));
              } else {
                acc.push(cur);
              }

              return acc;
            },
            []
          )
        : Array.prototype.slice.call(this);
    },
    writable: true,
  });
}


/***/ }),

/***/ "./node_modules/assets-loader/src/browser-has-blob.js":
/*!************************************************************!*\
  !*** ./node_modules/assets-loader/src/browser-has-blob.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function() {
    try {
        return !!new Blob();
    } catch (e) {
        return false;
    }
}());


/***/ }),

/***/ "./node_modules/assets-loader/src/emitter.js":
/*!***************************************************!*\
  !*** ./node_modules/assets-loader/src/emitter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

function Emitter() {
    EventEmitter.call(this);
    this.setMaxListeners(20);
}

Emitter.prototype = Object.create(EventEmitter.prototype);
Emitter.prototype.constructor = Emitter;

Emitter.prototype.off = function(type, listener) {
    if (listener) {
        return this.removeListener(type, listener);
    }
    if (type) {
        return this.removeAllListeners(type);
    }
    return this.removeAllListeners();
};

module.exports = Emitter;


/***/ }),

/***/ "./node_modules/assets-loader/src/group.js":
/*!*************************************************!*\
  !*** ./node_modules/assets-loader/src/group.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Emitter = __webpack_require__(/*! ./emitter.js */ "./node_modules/assets-loader/src/emitter.js");
var createLoader = __webpack_require__(/*! ./loader */ "./node_modules/assets-loader/src/loader.js");
var autoId = 0;

module.exports = function createGroup(config) {
    var group;
    var map = {};
    var assets = [];
    var queue = [];
    var numLoaded = 0;
    var numTotal = 0;
    var loaders = {};

    var add = function(options) {
        // console.debug('add', options);
        if (Array.isArray(options)) {
            options.forEach(add);
            return group;
        }
        var isGroup = !!options.assets && Array.isArray(options.assets);
        // console.debug('isGroup', isGroup);
        var loader;
        if (isGroup) {
            loader = createGroup(configure(options, config));
        } else {
            loader = createLoader(configure(options, config));
        }
        loader.once('destroy', destroyHandler);
        queue.push(loader);
        loaders[loader.id] = loader;
        return group;
    };

    var get = function(id) {
        if (!arguments.length) {
            return assets;
        }
        if (map[id]) {
            return map[id];
        }
        return loaders[id];
    };

    var find = function(id) {
        if (get(id)) {
            return get(id);
        }
        var found = null;
        Object.keys(loaders).some(function(key) {
            found = loaders[key].find && loaders[key].find(id);
            return !!found;
        });
        return found;
    };

    var getExtension = function(url) {
        return url && url.split('?')[0].split('.').pop().toLowerCase();
    };

    var configure = function(options, defaults) {
        if (typeof options === 'string') {
            var url = options;
            options = {
                url: url
            };
        }

        if (options.isTouchLocked === undefined) {
            options.isTouchLocked = defaults.isTouchLocked;
        }

        if (options.blob === undefined) {
            options.blob = defaults.blob;
        }

        if (options.basePath === undefined) {
            options.basePath = defaults.basePath;
        }

        options.id = options.id || options.url || String(++autoId);
        options.type = options.type || getExtension(options.url);
        options.crossOrigin = options.crossOrigin || defaults.crossOrigin;
        options.webAudioContext = options.webAudioContext || defaults.webAudioContext;
        options.log = defaults.log;

        return options;
    };

    var start = function() {
        numTotal = queue.length;

        queue.forEach(function(loader) {
            loader
                .on('progress', progressHandler)
                .once('complete', completeHandler)
                .once('error', errorHandler)
                .start();
        });

        queue = [];

        return group;
    };

    var progressHandler = function(progress) {
        var loaded = numLoaded + progress;
        group.emit('progress', loaded / numTotal);
    };

    var completeHandler = function(asset, id, type) {
        if (Array.isArray(asset)) {
            asset = { id: id, file: asset, type: type };
        }
        numLoaded++;
        group.emit('progress', numLoaded / numTotal);
        map[asset.id] = asset.file;
        assets.push(asset);
        group.emit('childcomplete', asset);
        checkComplete();
    };

    var errorHandler = function(err) {
        numTotal--;
        if (group.listeners('error').length) {
            group.emit('error', err);
        } else {
            console.error(err);
        }
        checkComplete();
    };

    var destroyHandler = function(id) {
        loaders[id] = null;
        delete loaders[id];

        map[id] = null;
        delete map[id];

        assets.some(function(asset, i) {
            if (asset.id === id) {
                assets.splice(i, 1);
                return true;
            }
        });
    };

    var checkComplete = function() {
        if (numLoaded >= numTotal) {
            group.emit('complete', assets, map, config.id, 'group');
        }
    };

    var destroy = function() {
        while (queue.length) {
            queue.pop().destroy();
        }
        group.off('error');
        group.off('progress');
        group.off('complete');
        assets = [];
        map = {};
        config.webAudioContext = null;
        numTotal = 0;
        numLoaded = 0;

        Object.keys(loaders).forEach(function(key) {
            loaders[key].destroy();
        });
        loaders = {};

        group.emit('destroy', group.id);

        return group;
    };

    // emits: progress, error, complete, destroy

    group = Object.create(Emitter.prototype, {
        _events: {
            value: {}
        },
        id: {
            get: function() {
                return config.id;
            }
        },
        add: {
            value: add
        },
        start: {
            value: start
        },
        get: {
            value: get
        },
        find: {
            value: find
        },
        getLoader: {
            value: function(id) {
                return loaders[id];
            }
        },
        loaded: {
            get: function() {
                return numLoaded >= numTotal;
            }
        },
        file: {
            get: function() {
                return assets;
            }
        },
        destroy: {
            value: destroy
        }
    });

    config = configure(config || {}, {
        basePath: '',
        blob: false,
        touchLocked: false,
        crossOrigin: null,
        webAudioContext: null,
        log: false
    });

    if (Array.isArray(config.assets)) {
        add(config.assets);
    }

    return group;
};


/***/ }),

/***/ "./node_modules/assets-loader/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/assets-loader/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assetsLoader = __webpack_require__(/*! ./group */ "./node_modules/assets-loader/src/group.js");
assetsLoader.stats = __webpack_require__(/*! ./stats */ "./node_modules/assets-loader/src/stats.js");

module.exports = assetsLoader;


/***/ }),

/***/ "./node_modules/assets-loader/src/loader.js":
/*!**************************************************!*\
  !*** ./node_modules/assets-loader/src/loader.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Emitter = __webpack_require__(/*! ./emitter.js */ "./node_modules/assets-loader/src/emitter.js");
var browserHasBlob = __webpack_require__(/*! ./browser-has-blob.js */ "./node_modules/assets-loader/src/browser-has-blob.js");
var stats = __webpack_require__(/*! ./stats */ "./node_modules/assets-loader/src/stats.js");

module.exports = function(options) {
    var id = options.id;
    var basePath = options.basePath || '';
    var url = options.url;
    var type = options.type;
    var crossOrigin = options.crossOrigin;
    var isTouchLocked = options.isTouchLocked;
    var blob = options.blob && browserHasBlob;
    var webAudioContext = options.webAudioContext;
    var log = options.log;

    var loader;
    var loadHandler;
    var request;
    var startTime;
    var timeout;
    var file;

    var start = function() {
        startTime = Date.now();

        switch (type) {
            case 'json':
                loadJSON();
                break;
            case 'jpg':
            case 'png':
            case 'gif':
            case 'webp':
            case 'svg':
                loadImage();
                break;
            case 'mp3':
            case 'ogg':
            case 'opus':
            case 'wav':
            case 'm4a':
                loadAudio();
                break;
            case 'ogv':
            case 'mp4':
            case 'webm':
            case 'hls':
                loadVideo();
                break;
            case 'bin':
            case 'binary':
                loadXHR('arraybuffer');
                break;
            case 'txt':
            case 'text':
                loadXHR('text');
                break;
            default:
                throw 'AssetsLoader ERROR: Unknown type for file with URL: ' + basePath + url + ' (' + type + ')';
        }
    };

    var dispatchComplete = function(data) {
        if (!data) {
            return;
        }
        file = {id: id, file: data, type: type};
        loader.emit('progress', 1);
        loader.emit('complete', file, id, type);
        removeListeners();
    };

    var loadXHR = function(responseType, customLoadHandler) {
        loadHandler = customLoadHandler || completeHandler;

        request = new XMLHttpRequest();
        request.open('GET', basePath + url, true);
        request.responseType = responseType;
        request.addEventListener('progress', progressHandler);
        request.addEventListener('load', loadHandler);
        request.addEventListener('error', errorHandler);
        request.send();
    };

    var progressHandler = function(event) {
        if (event.lengthComputable) {
            loader.emit('progress', event.loaded / event.total);
        }
    };

    var completeHandler = function() {
        if (success()) {
            dispatchComplete(request.response);
        }
    };

    var success = function() {
        // console.log('success', url, request.status);
        if (request && request.status < 400) {
            stats.update(request, startTime, url, log);
            return true;
        }
        errorHandler(request && request.statusText);
        return false;
    };

    // json

    var loadJSON = function() {
        loadXHR('json', function() {
            if (success()) {
                var data = request.response;
                if (typeof data === 'string') {
                    data = JSON.parse(data);
                }
                dispatchComplete(data);
            }
        });
    };

    // image

    var loadImage = function() {
        if (blob) {
            loadImageBlob();
        } else {
            loadImageElement();
        }
    };

    var loadImageElement = function() {
        request = new Image();
        if (crossOrigin) {
            request.crossOrigin = 'anonymous';
        }
        request.addEventListener('error', errorHandler, false);
        request.addEventListener('load', elementLoadHandler, false);
        request.src = basePath + url;
    };

    var elementLoadHandler = function(event) {
        window.clearTimeout(timeout);
        if (!event && (request.error || !request.readyState)) {
            errorHandler();
            return;
        }
        dispatchComplete(request);
    };

    var loadImageBlob = function() {
        loadXHR('blob', function() {
            if (success()) {
                request = new Image();
                request.addEventListener('error', errorHandler, false);
                request.addEventListener('load', imageBlobHandler, false);
                request.src = window.URL.createObjectURL(request.response);
            }
        });
    };

    var imageBlobHandler = function() {
        window.URL.revokeObjectURL(request.src);
        dispatchComplete(request);
    };

    // audio

    var loadAudio = function() {
        if (webAudioContext) {
            loadAudioBuffer();
        } else {
            loadMediaElement('audio');
        }
    };

    // video

    var loadVideo = function() {
        if (blob) {
            loadXHR('blob');
        } else {
            loadMediaElement('video');
        }
    };

    // audio buffer

    var loadAudioBuffer = function() {
        loadXHR('arraybuffer', function() {
            if (success()) {
                webAudioContext.decodeAudioData(
                    request.response,
                    function(buffer) {
                        request = null;
                        dispatchComplete(buffer);
                    },
                    function(e) {
                        errorHandler(e);
                    }
                );
            }
        });
    };

    // media element

    var loadMediaElement = function(tagName) {
        request = document.createElement(tagName);

        if (!isTouchLocked) {
            // timeout because sometimes canplaythrough doesn't fire
            window.clearTimeout(timeout);
            timeout = window.setTimeout(elementLoadHandler, 2000);
            request.addEventListener('canplaythrough', elementLoadHandler, false);
        }

        request.addEventListener('error', errorHandler, false);
        request.preload = 'auto';
        request.src = basePath + url;
        request.load();

        if (isTouchLocked) {
            dispatchComplete(request);
        }
    };

    // error

    var errorHandler = function(err) {
        // console.log('errorHandler', url, err);
        window.clearTimeout(timeout);

        var message = err;

        if (request && request.tagName && request.error) {
            var ERROR_STATE = ['', 'ABORTED', 'NETWORK', 'DECODE', 'SRC_NOT_SUPPORTED'];
            message = 'MediaError: ' + ERROR_STATE[request.error.code] + ' ' + request.src;
        } else if (request && request.statusText) {
            message = request.statusText;
        } else if (err && err.message) {
            message = err.message;
        } else if (err && err.type) {
            message = err.type;
        }

        loader.emit('error', 'Error loading "' + basePath + url + '" ' + message);

        destroy();
    };

    // clean up

    var removeListeners = function() {
        loader.off('error');
        loader.off('progress');
        loader.off('complete');

        if (request) {
            request.removeEventListener('progress', progressHandler);
            request.removeEventListener('load', loadHandler);
            request.removeEventListener('error', errorHandler);
            request.removeEventListener('load', elementLoadHandler);
            request.removeEventListener('canplaythrough', elementLoadHandler);
            request.removeEventListener('load', imageBlobHandler);
        }
    };

    var destroy = function() {
        removeListeners();

        if (request && request.abort && request.readyState < 4) {
            request.abort();
        }

        request = null;
        webAudioContext = null;
        file = null;

        window.clearTimeout(timeout);

        loader.emit('destroy', id);
    };

    // emits: progress, error, complete

    loader = Object.create(Emitter.prototype, {
        _events: {
            value: {}
        },
        id: {
            value: options.id
        },
        start: {
            value: start
        },
        loaded: {
            get: function() {
                return !!file;
            }
        },
        file: {
            get: function() {
                return file;
            }
        },
        destroy: {
            value: destroy
        }
    });

    return loader;
};


/***/ }),

/***/ "./node_modules/assets-loader/src/stats.js":
/*!*************************************************!*\
  !*** ./node_modules/assets-loader/src/stats.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    mbs: 0,
    secs: 0,
    update: function(request, startTime, url, log) {
        var length;
        var headers = request.getAllResponseHeaders();
        if (headers) {
            var match = headers.match(/content-length: (\d+)/i);
            if (match && match.length) {
                length = match[1];
            }
        }
        // var length = request.getResponseHeader('Content-Length');
        if (length) {
            length = parseInt(length, 10);
            var mbs = length / 1024 / 1024;
            var secs = (Date.now() - startTime) / 1000;
            this.secs += secs;
            this.mbs += mbs;
            if (log) {
                this.log(url, mbs, secs);
            }
        } else if(log) {
            console.warn.call(console, 'Can\'t get Content-Length:', url);
        }
    },
    log: function(url, mbs, secs) {
        if (url) {
            var file = 'File loaded: ' +
                url.substr(url.lastIndexOf('/') + 1) +
                ' size:' + mbs.toFixed(2) + 'mb' +
                ' time:' + secs.toFixed(2) + 's' +
                ' speed:' + (mbs / secs).toFixed(2) + 'mbps';

            console.log.call(console, file);
        }
        var total = 'Total loaded: ' + this.mbs.toFixed(2) + 'mb' +
            ' time:' + this.secs.toFixed(2) + 's' +
            ' speed:' + this.getMbps().toFixed(2) + 'mbps';
        console.log.call(console, total);
    },
    getMbps: function() {
        return this.mbs / this.secs;
    }
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/global.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/global.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  position: fixed;\n  background: black; }\n\nhtml {\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none; }\n\nh1,\nh2,\nh3,\nh4,\ntext,\np,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-webkit-font-smoothing: antialiased;\n  font-family: \"Open Sans\", sans-serif; }\n\nvideo {\n  top: 0;\n  left: 0;\n  position: absolute; }\n\n.Main-Canvas {\n  top: 0;\n  left: 0;\n  user-select: none;\n  opacity: 1;\n  transition: opacity 0.5s ease-out 0.25s; }\n  .isLoading .Main-Canvas {\n    opacity: 0; }\n\n.container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 98; }\n\n.Message {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  top: calc(50% - 50px);\n  text-align: center;\n  letter-spacing: 11px;\n  color: white;\n  opacity: 0;\n  transition: opacity 0.5s ease-out, letter-spacing 0.5s ease-out; }\n  .isLoading .Message {\n    letter-spacing: 10px;\n    opacity: 1; }\n\n.Loading-Bar {\n  position: absolute;\n  z-index: 998;\n  width: 0%;\n  height: 1px;\n  top: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: width 0.5s ease-out, opacity 0.5s ease-out; }\n  .isLoading .Loading-Bar {\n    opacity: 1; }\n\n.env {\n  position: fixed;\n  width: 100%;\n  z-index: 9999;\n  color: white;\n  top: 100px;\n  font-size: 24px;\n  padding: 20px; }\n\n.container-button {\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.btnAR {\n  width: 200px;\n  height: 50px;\n  position: fixed;\n  bottom: 20vh;\n  font-size: 15px;\n  letter-spacing: 2px;\n  border-radius: 5px;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0s ease-in-out; }\n  .has-xr .btnAR {\n    transition: opacity 0.5s ease-in-out;\n    pointer-events: auto;\n    opacity: 1; }\n  .xr-started .btnAR {\n    opacity: 0; }\n\n.text-no-webgl2 {\n  color: white;\n  font-size: 14px;\n  letter-spacing: 6px;\n  text-align: center;\n  z-index: 99;\n  position: absolute;\n  top: 45%;\n  transition: opacity 0.5s ease-in-out;\n  pointer-events: none;\n  opacity: 0; }\n  .no-webgl2 .text-no-webgl2 {\n    opacity: 1; }\n  .hide-messages .text-no-webgl2 {\n    opacity: 0; }\n\n.text-no-support {\n  color: white;\n  font-size: 14px;\n  letter-spacing: 6px;\n  text-align: center;\n  z-index: 99;\n  position: absolute;\n  bottom: 5vh;\n  transition: opacity 0.5s ease-in-out;\n  pointer-events: none;\n  opacity: 0; }\n  .no-xr .text-no-support {\n    opacity: 1; }\n  .hide-messages .text-no-support {\n    opacity: 0; }\n\n@media (max-width: 615px) {\n  .text-no-support {\n    letter-spacing: 2px; } }\n\n.top-layer {\n  z-index: 200; }\n\n.webcam {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  width: 40%;\n  height: 40%; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/fast-url-parser/src/urlparser.js":
/*!*******************************************************!*\
  !*** ./node_modules/fast-url-parser/src/urlparser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014 Petka Antonov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
function Url() {
    //For more efficient internal representation and laziness.
    //The non-underscore versions of these properties are accessor functions
    //defined on the prototype.
    this._protocol = null;
    this._href = "";
    this._port = -1;
    this._query = null;

    this.auth = null;
    this.slashes = null;
    this.host = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;

    this._prependSlash = false;
}

var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

Url.queryString = querystring;

Url.prototype.parse =
function Url$parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
    if (typeof str !== "string") {
        throw new TypeError("Parameter 'url' must be a string, not " +
            typeof str);
    }
    var start = 0;
    var end = str.length - 1;

    //Trim leading and trailing ws
    while (str.charCodeAt(start) <= 0x20 /*' '*/) start++;
    while (str.charCodeAt(end) <= 0x20 /*' '*/) end--;

    start = this._parseProtocol(str, start, end);

    //Javascript doesn't have host
    if (this._protocol !== "javascript") {
        start = this._parseHost(str, start, end, hostDenotesSlash);
        var proto = this._protocol;
        if (!this.hostname &&
            (this.slashes || (proto && !slashProtocols[proto]))) {
            this.hostname = this.host = "";
        }
    }

    if (start <= end) {
        var ch = str.charCodeAt(start);

        if (ch === 0x2F /*'/'*/ || ch === 0x5C /*'\'*/) {
            this._parsePath(str, start, end, disableAutoEscapeChars);
        }
        else if (ch === 0x3F /*'?'*/) {
            this._parseQuery(str, start, end, disableAutoEscapeChars);
        }
        else if (ch === 0x23 /*'#'*/) {
          this._parseHash(str, start, end, disableAutoEscapeChars);
        }
        else if (this._protocol !== "javascript") {
            this._parsePath(str, start, end, disableAutoEscapeChars);
        }
        else { //For javascript the pathname is just the rest of it
            this.pathname = str.slice(start, end + 1 );
        }

    }

    if (!this.pathname && this.hostname &&
        this._slashProtocols[this._protocol]) {
        this.pathname = "/";
    }

    if (parseQueryString) {
        var search = this.search;
        if (search == null) {
            search = this.search = "";
        }
        if (search.charCodeAt(0) === 0x3F /*'?'*/) {
            search = search.slice(1);
        }
        //This calls a setter function, there is no .query data property
        this.query = Url.queryString.parse(search);
    }
};

Url.prototype.resolve = function Url$resolve(relative) {
    return this.resolveObject(Url.parse(relative, false, true)).format();
};

Url.prototype.format = function Url$format() {
    var auth = this.auth || "";

    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ":");
        auth += "@";
    }

    var protocol = this.protocol || "";
    var pathname = this.pathname || "";
    var hash = this.hash || "";
    var search = this.search || "";
    var query = "";
    var hostname = this.hostname || "";
    var port = this.port || "";
    var host = false;
    var scheme = "";

    //Cache the result of the getter function
    var q = this.query;
    if (q && typeof q === "object") {
        query = Url.queryString.stringify(q);
    }

    if (!search) {
        search = query ? "?" + query : "";
    }

    if (protocol && protocol.charCodeAt(protocol.length - 1) !== 0x3A /*':'*/)
        protocol += ":";

    if (this.host) {
        host = auth + this.host;
    }
    else if (hostname) {
        var ip6 = hostname.indexOf(":") > -1;
        if (ip6) hostname = "[" + hostname + "]";
        host = auth + hostname + (port ? ":" + port : "");
    }

    var slashes = this.slashes ||
        ((!protocol ||
        slashProtocols[protocol]) && host !== false);


    if (protocol) scheme = protocol + (slashes ? "//" : "");
    else if (slashes) scheme = "//";

    if (slashes && pathname && pathname.charCodeAt(0) !== 0x2F /*'/'*/) {
        pathname = "/" + pathname;
    }
    if (search && search.charCodeAt(0) !== 0x3F /*'?'*/)
        search = "?" + search;
    if (hash && hash.charCodeAt(0) !== 0x23 /*'#'*/)
        hash = "#" + hash;

    pathname = escapePathName(pathname);
    search = escapeSearch(search);

    return scheme + (host === false ? "" : host) + pathname + search + hash;
};

Url.prototype.resolveObject = function Url$resolveObject(relative) {
    if (typeof relative === "string")
        relative = Url.parse(relative, false, true);

    var result = this._clone();

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there"s nothing left to do here.
    if (!relative.href) {
        result._href = "";
        return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative._protocol) {
        relative._copyPropsTo(result, true);

        if (slashProtocols[result._protocol] &&
            result.hostname && !result.pathname) {
            result.pathname = "/";
        }
        result._href = "";
        return result;
    }

    if (relative._protocol && relative._protocol !== result._protocol) {
        // if it"s a known url protocol, then changing
        // the protocol does weird things
        // first, if it"s not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that"s known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashProtocols[relative._protocol]) {
            relative._copyPropsTo(result, false);
            result._href = "";
            return result;
        }

        result._protocol = relative._protocol;
        if (!relative.host && relative._protocol !== "javascript") {
            var relPath = (relative.pathname || "").split("/");
            while (relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = "";
            if (!relative.hostname) relative.hostname = "";
            if (relPath[0] !== "") relPath.unshift("");
            if (relPath.length < 2) relPath.unshift("");
            result.pathname = relPath.join("/");
        } else {
            result.pathname = relative.pathname;
        }

        result.search = relative.search;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result._port = relative._port;
        result.slashes = result.slashes || relative.slashes;
        result._href = "";
        return result;
    }

    var isSourceAbs =
        (result.pathname && result.pathname.charCodeAt(0) === 0x2F /*'/'*/);
    var isRelAbs = (
            relative.host ||
            (relative.pathname &&
            relative.pathname.charCodeAt(0) === 0x2F /*'/'*/)
        );
    var mustEndAbs = (isRelAbs || isSourceAbs ||
                        (result.host && relative.pathname));

    var removeAllDots = mustEndAbs;

    var srcPath = result.pathname && result.pathname.split("/") || [];
    var relPath = relative.pathname && relative.pathname.split("/") || [];
    var psychotic = result._protocol && !slashProtocols[result._protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
        result.hostname = "";
        result._port = -1;
        if (result.host) {
            if (srcPath[0] === "") srcPath[0] = result.host;
            else srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative._protocol) {
            relative.hostname = "";
            relative._port = -1;
            if (relative.host) {
                if (relPath[0] === "") relPath[0] = relative.host;
                else relPath.unshift(relative.host);
            }
            relative.host = "";
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }

    if (isRelAbs) {
        // it"s absolute.
        result.host = relative.host ?
            relative.host : result.host;
        result.hostname = relative.hostname ?
            relative.hostname : result.hostname;
        result.search = relative.search;
        srcPath = relPath;
        // fall through to the dot-handling below.
    } else if (relPath.length) {
        // it"s relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
    } else if (relative.search) {
        // just pull out the search.
        // like href="?foo".
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            //occationaly the auth can get stuck only in host
            //this especialy happens in cases like
            //url.resolveObject("mailto:local1@domain1", "local2@domain2")
            var authInHost = result.host && result.host.indexOf("@") > 0 ?
                result.host.split("@") : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
            }
        }
        result.search = relative.search;
        result._href = "";
        return result;
    }

    if (!srcPath.length) {
        // no path at all.  easy.
        // we"ve already handled the other stuff above.
        result.pathname = null;
        result._href = "";
        return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (
        (result.host || relative.host) && (last === "." || last === "..") ||
        last === "");

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
            srcPath.splice(i, 1);
        } else if (last === "..") {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
            srcPath.unshift("..");
        }
    }

    if (mustEndAbs && srcPath[0] !== "" &&
        (!srcPath[0] || srcPath[0].charCodeAt(0) !== 0x2F /*'/'*/)) {
        srcPath.unshift("");
    }

    if (hasTrailingSlash && (srcPath.join("/").substr(-1) !== "/")) {
        srcPath.push("");
    }

    var isAbsolute = srcPath[0] === "" ||
        (srcPath[0] && srcPath[0].charCodeAt(0) === 0x2F /*'/'*/);

    // put the host back
    if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" :
            srcPath.length ? srcPath.shift() : "";
        //occationaly the auth can get stuck only in host
        //this especialy happens in cases like
        //url.resolveObject("mailto:local1@domain1", "local2@domain2")
        var authInHost = result.host && result.host.indexOf("@") > 0 ?
            result.host.split("@") : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
        }
    }

    mustEndAbs = mustEndAbs || (result.host && srcPath.length);

    if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
    }

    result.pathname = srcPath.length === 0 ? null : srcPath.join("/");
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result._href = "";
    return result;
};

var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
Url.prototype._hostIdna = function Url$_hostIdna(hostname) {
    // IDNA Support: Returns a punycoded representation of "domain".
    // It only converts parts of the domain name that
    // have non-ASCII characters, i.e. it doesn't matter if
    // you call it with a domain that already is ASCII-only.
    return punycode.toASCII(hostname);
};

var escapePathName = Url.prototype._escapePathName =
function Url$_escapePathName(pathname) {
    if (!containsCharacter2(pathname, 0x23 /*'#'*/, 0x3F /*'?'*/)) {
        return pathname;
    }
    //Avoid closure creation to keep this inlinable
    return _escapePath(pathname);
};

var escapeSearch = Url.prototype._escapeSearch =
function Url$_escapeSearch(search) {
    if (!containsCharacter2(search, 0x23 /*'#'*/, -1)) return search;
    //Avoid closure creation to keep this inlinable
    return _escapeSearch(search);
};

Url.prototype._parseProtocol = function Url$_parseProtocol(str, start, end) {
    var doLowerCase = false;
    var protocolCharacters = this._protocolCharacters;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x3A /*':'*/) {
            var protocol = str.slice(start, i);
            if (doLowerCase) protocol = protocol.toLowerCase();
            this._protocol = protocol;
            return i + 1;
        }
        else if (protocolCharacters[ch] === 1) {
            if (ch < 0x61 /*'a'*/)
                doLowerCase = true;
        }
        else {
            return start;
        }

    }
    return start;
};

Url.prototype._parseAuth = function Url$_parseAuth(str, start, end, decode) {
    var auth = str.slice(start, end + 1);
    if (decode) {
        auth = decodeURIComponent(auth);
    }
    this.auth = auth;
};

Url.prototype._parsePort = function Url$_parsePort(str, start, end) {
    //Internal format is integer for more efficient parsing
    //and for efficient trimming of leading zeros
    var port = 0;
    //Distinguish between :0 and : (no port number at all)
    var hadChars = false;
    var validPort = true;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/) {
            port = (10 * port) + (ch - 0x30 /*'0'*/);
            hadChars = true;
        }
        else {
            validPort = false;
            if (ch === 0x5C/*'\'*/ || ch === 0x2F/*'/'*/) {
                validPort = true;
            }
            break;
        }

    }
    if ((port === 0 && !hadChars) || !validPort) {
        if (!validPort) {
            this._port = -2;
        }
        return 0;
    }

    this._port = port;
    return i - start;
};

Url.prototype._parseHost =
function Url$_parseHost(str, start, end, slashesDenoteHost) {
    var hostEndingCharacters = this._hostEndingCharacters;
    var first = str.charCodeAt(start);
    var second = str.charCodeAt(start + 1);
    if ((first === 0x2F /*'/'*/ || first === 0x5C /*'\'*/) &&
        (second === 0x2F /*'/'*/ || second === 0x5C /*'\'*/)) {
        this.slashes = true;

        //The string starts with //
        if (start === 0) {
            //The string is just "//"
            if (end < 2) return start;
            //If slashes do not denote host and there is no auth,
            //there is no host when the string starts with //
            var hasAuth =
                containsCharacter(str, 0x40 /*'@'*/, 2, hostEndingCharacters);
            if (!hasAuth && !slashesDenoteHost) {
                this.slashes = null;
                return start;
            }
        }
        //There is a host that starts after the //
        start += 2;
    }
    //If there is no slashes, there is no hostname if
    //1. there was no protocol at all
    else if (!this._protocol ||
        //2. there was a protocol that requires slashes
        //e.g. in 'http:asd' 'asd' is not a hostname
        slashProtocols[this._protocol]
    ) {
        return start;
    }

    var doLowerCase = false;
    var idna = false;
    var hostNameStart = start;
    var hostNameEnd = end;
    var lastCh = -1;
    var portLength = 0;
    var charsAfterDot = 0;
    var authNeedsDecoding = false;

    var j = -1;

    //Find the last occurrence of an @-sign until hostending character is met
    //also mark if decoding is needed for the auth portion
    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x40 /*'@'*/) {
            j = i;
        }
        //This check is very, very cheap. Unneeded decodeURIComponent is very
        //very expensive
        else if (ch === 0x25 /*'%'*/) {
            authNeedsDecoding = true;
        }
        else if (hostEndingCharacters[ch] === 1) {
            break;
        }
    }

    //@-sign was found at index j, everything to the left from it
    //is auth part
    if (j > -1) {
        this._parseAuth(str, start, j - 1, authNeedsDecoding);
        //hostname starts after the last @-sign
        start = hostNameStart = j + 1;
    }

    //Host name is starting with a [
    if (str.charCodeAt(start) === 0x5B /*'['*/) {
        for (var i = start + 1; i <= end; ++i) {
            var ch = str.charCodeAt(i);

            //Assume valid IP6 is between the brackets
            if (ch === 0x5D /*']'*/) {
                if (str.charCodeAt(i + 1) === 0x3A /*':'*/) {
                    portLength = this._parsePort(str, i + 2, end) + 1;
                }
                var hostname = str.slice(start + 1, i).toLowerCase();
                this.hostname = hostname;
                this.host = this._port > 0 ?
                    "[" + hostname + "]:" + this._port :
                    "[" + hostname + "]";
                this.pathname = "/";
                return i + portLength + 1;
            }
        }
        //Empty hostname, [ starts a path
        return start;
    }

    for (var i = start; i <= end; ++i) {
        if (charsAfterDot > 62) {
            this.hostname = this.host = str.slice(start, i);
            return i;
        }
        var ch = str.charCodeAt(i);

        if (ch === 0x3A /*':'*/) {
            portLength = this._parsePort(str, i + 1, end) + 1;
            hostNameEnd = i - 1;
            break;
        }
        else if (ch < 0x61 /*'a'*/) {
            if (ch === 0x2E /*'.'*/) {
                //Node.js ignores this error
                /*
                if (lastCh === DOT || lastCh === -1) {
                    this.hostname = this.host = "";
                    return start;
                }
                */
                charsAfterDot = -1;
            }
            else if (0x41 /*'A'*/ <= ch && ch <= 0x5A /*'Z'*/) {
                doLowerCase = true;
            }
            //Valid characters other than ASCII letters -, _, +, 0-9
            else if (!(ch === 0x2D /*'-'*/ ||
                       ch === 0x5F /*'_'*/ ||
                       ch === 0x2B /*'+'*/ ||
                       (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/))
                ) {
                if (hostEndingCharacters[ch] === 0 &&
                    this._noPrependSlashHostEnders[ch] === 0) {
                    this._prependSlash = true;
                }
                hostNameEnd = i - 1;
                break;
            }
        }
        else if (ch >= 0x7B /*'{'*/) {
            if (ch <= 0x7E /*'~'*/) {
                if (this._noPrependSlashHostEnders[ch] === 0) {
                    this._prependSlash = true;
                }
                hostNameEnd = i - 1;
                break;
            }
            idna = true;
        }
        lastCh = ch;
        charsAfterDot++;
    }

    //Node.js ignores this error
    /*
    if (lastCh === DOT) {
        hostNameEnd--;
    }
    */

    if (hostNameEnd + 1 !== start &&
        hostNameEnd - hostNameStart <= 256) {
        var hostname = str.slice(hostNameStart, hostNameEnd + 1);
        if (doLowerCase) hostname = hostname.toLowerCase();
        if (idna) hostname = this._hostIdna(hostname);
        this.hostname = hostname;
        this.host = this._port > 0 ? hostname + ":" + this._port : hostname;
    }

    return hostNameEnd + 1 + portLength;

};

Url.prototype._copyPropsTo = function Url$_copyPropsTo(input, noProtocol) {
    if (!noProtocol) {
        input._protocol = this._protocol;
    }
    input._href = this._href;
    input._port = this._port;
    input._prependSlash = this._prependSlash;
    input.auth = this.auth;
    input.slashes = this.slashes;
    input.host = this.host;
    input.hostname = this.hostname;
    input.hash = this.hash;
    input.search = this.search;
    input.pathname = this.pathname;
};

Url.prototype._clone = function Url$_clone() {
    var ret = new Url();
    ret._protocol = this._protocol;
    ret._href = this._href;
    ret._port = this._port;
    ret._prependSlash = this._prependSlash;
    ret.auth = this.auth;
    ret.slashes = this.slashes;
    ret.host = this.host;
    ret.hostname = this.hostname;
    ret.hash = this.hash;
    ret.search = this.search;
    ret.pathname = this.pathname;
    return ret;
};

Url.prototype._getComponentEscaped =
function Url$_getComponentEscaped(str, start, end, isAfterQuery) {
    var cur = start;
    var i = start;
    var ret = "";
    var autoEscapeMap = isAfterQuery ?
        this._afterQueryAutoEscapeMap : this._autoEscapeMap;
    for (; i <= end; ++i) {
        var ch = str.charCodeAt(i);
        var escaped = autoEscapeMap[ch];

        if (escaped !== "" && escaped !== undefined) {
            if (cur < i) ret += str.slice(cur, i);
            ret += escaped;
            cur = i + 1;
        }
    }
    if (cur < i + 1) ret += str.slice(cur, i);
    return ret;
};

Url.prototype._parsePath =
function Url$_parsePath(str, start, end, disableAutoEscapeChars) {
    var pathStart = start;
    var pathEnd = end;
    var escape = false;
    var autoEscapeCharacters = this._autoEscapeCharacters;
    var prePath = this._port === -2 ? "/:" : "";

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);
        if (ch === 0x23 /*'#'*/) {
          this._parseHash(str, i, end, disableAutoEscapeChars);
            pathEnd = i - 1;
            break;
        }
        else if (ch === 0x3F /*'?'*/) {
            this._parseQuery(str, i, end, disableAutoEscapeChars);
            pathEnd = i - 1;
            break;
        }
        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
            escape = true;
        }
    }

    if (pathStart > pathEnd) {
        this.pathname = prePath === "" ? "/" : prePath;
        return;
    }

    var path;
    if (escape) {
        path = this._getComponentEscaped(str, pathStart, pathEnd, false);
    }
    else {
        path = str.slice(pathStart, pathEnd + 1);
    }
    this.pathname = prePath === ""
        ? (this._prependSlash ? "/" + path : path)
        : prePath + path;
};

Url.prototype._parseQuery = function Url$_parseQuery(str, start, end, disableAutoEscapeChars) {
    var queryStart = start;
    var queryEnd = end;
    var escape = false;
    var autoEscapeCharacters = this._autoEscapeCharacters;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x23 /*'#'*/) {
            this._parseHash(str, i, end, disableAutoEscapeChars);
            queryEnd = i - 1;
            break;
        }
        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
            escape = true;
        }
    }

    if (queryStart > queryEnd) {
        this.search = "";
        return;
    }

    var query;
    if (escape) {
        query = this._getComponentEscaped(str, queryStart, queryEnd, true);
    }
    else {
        query = str.slice(queryStart, queryEnd + 1);
    }
    this.search = query;
};

Url.prototype._parseHash = function Url$_parseHash(str, start, end, disableAutoEscapeChars) {
    if (start > end) {
        this.hash = "";
        return;
    }

    this.hash = disableAutoEscapeChars ?
        str.slice(start, end + 1) : this._getComponentEscaped(str, start, end, true);
};

Object.defineProperty(Url.prototype, "port", {
    get: function() {
        if (this._port >= 0) {
            return ("" + this._port);
        }
        return null;
    },
    set: function(v) {
        if (v == null) {
            this._port = -1;
        }
        else {
            this._port = parseInt(v, 10);
        }
    }
});

Object.defineProperty(Url.prototype, "query", {
    get: function() {
        var query = this._query;
        if (query != null) {
            return query;
        }
        var search = this.search;

        if (search) {
            if (search.charCodeAt(0) === 0x3F /*'?'*/) {
                search = search.slice(1);
            }
            if (search !== "") {
                this._query = search;
                return search;
            }
        }
        return search;
    },
    set: function(v) {
        this._query = v;
    }
});

Object.defineProperty(Url.prototype, "path", {
    get: function() {
        var p = this.pathname || "";
        var s = this.search || "";
        if (p || s) {
            return p + s;
        }
        return (p == null && s) ? ("/" + s) : null;
    },
    set: function() {}
});

Object.defineProperty(Url.prototype, "protocol", {
    get: function() {
        var proto = this._protocol;
        return proto ? proto + ":" : proto;
    },
    set: function(v) {
        if (typeof v === "string") {
            var end = v.length - 1;
            if (v.charCodeAt(end) === 0x3A /*':'*/) {
                this._protocol = v.slice(0, end);
            }
            else {
                this._protocol = v;
            }
        }
        else if (v == null) {
            this._protocol = null;
        }
    }
});

Object.defineProperty(Url.prototype, "href", {
    get: function() {
        var href = this._href;
        if (!href) {
            href = this._href = this.format();
        }
        return href;
    },
    set: function(v) {
        this._href = v;
    }
});

Url.parse = function Url$Parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
    if (str instanceof Url) return str;
    var ret = new Url();
    ret.parse(str, !!parseQueryString, !!hostDenotesSlash, !!disableAutoEscapeChars);
    return ret;
};

Url.format = function Url$Format(obj) {
    if (typeof obj === "string") {
        obj = Url.parse(obj);
    }
    if (!(obj instanceof Url)) {
        return Url.prototype.format.call(obj);
    }
    return obj.format();
};

Url.resolve = function Url$Resolve(source, relative) {
    return Url.parse(source, false, true).resolve(relative);
};

Url.resolveObject = function Url$ResolveObject(source, relative) {
    if (!source) return relative;
    return Url.parse(source, false, true).resolveObject(relative);
};

function _escapePath(pathname) {
    return pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
    });
}

function _escapeSearch(search) {
    return search.replace(/#/g, function(match) {
        return encodeURIComponent(match);
    });
}

//Search `char1` (integer code for a character) in `string`
//starting from `fromIndex` and ending at `string.length - 1`
//or when a stop character is found
function containsCharacter(string, char1, fromIndex, stopCharacterTable) {
    var len = string.length;
    for (var i = fromIndex; i < len; ++i) {
        var ch = string.charCodeAt(i);

        if (ch === char1) {
            return true;
        }
        else if (stopCharacterTable[ch] === 1) {
            return false;
        }
    }
    return false;
}

//See if `char1` or `char2` (integer codes for characters)
//is contained in `string`
function containsCharacter2(string, char1, char2) {
    for (var i = 0, len = string.length; i < len; ++i) {
        var ch = string.charCodeAt(i);
        if (ch === char1 || ch === char2) return true;
    }
    return false;
}

//Makes an array of 128 uint8's which represent boolean values.
//Spec is an array of ascii code points or ascii code point ranges
//ranges are expressed as [start, end]

//Create a table with the characters 0x30-0x39 (decimals '0' - '9') and
//0x7A (lowercaseletter 'z') as `true`:
//
//var a = makeAsciiTable([[0x30, 0x39], 0x7A]);
//a[0x30]; //1
//a[0x15]; //0
//a[0x35]; //1
function makeAsciiTable(spec) {
    var ret = new Uint8Array(128);
    spec.forEach(function(item){
        if (typeof item === "number") {
            ret[item] = 1;
        }
        else {
            var start = item[0];
            var end = item[1];
            for (var j = start; j <= end; ++j) {
                ret[j] = 1;
            }
        }
    });

    return ret;
}


var autoEscape = ["<", ">", "\"", "`", " ", "\r", "\n",
    "\t", "{", "}", "|", "\\", "^", "`", "'"];

var autoEscapeMap = new Array(128);



for (var i = 0, len = autoEscapeMap.length; i < len; ++i) {
    autoEscapeMap[i] = "";
}

for (var i = 0, len = autoEscape.length; i < len; ++i) {
    var c = autoEscape[i];
    var esc = encodeURIComponent(c);
    if (esc === c) {
        esc = escape(c);
    }
    autoEscapeMap[c.charCodeAt(0)] = esc;
}
var afterQueryAutoEscapeMap = autoEscapeMap.slice();
autoEscapeMap[0x5C /*'\'*/] = "/";

var slashProtocols = Url.prototype._slashProtocols = {
    http: true,
    https: true,
    gopher: true,
    file: true,
    ftp: true,

    "http:": true,
    "https:": true,
    "gopher:": true,
    "file:": true,
    "ftp:": true
};

//Optimize back from normalized object caused by non-identifier keys
function f(){}
f.prototype = slashProtocols;

Url.prototype._protocolCharacters = makeAsciiTable([
    [0x61 /*'a'*/, 0x7A /*'z'*/],
    [0x41 /*'A'*/, 0x5A /*'Z'*/],
    0x2E /*'.'*/, 0x2B /*'+'*/, 0x2D /*'-'*/
]);

Url.prototype._hostEndingCharacters = makeAsciiTable([
    0x23 /*'#'*/, 0x3F /*'?'*/, 0x2F /*'/'*/, 0x5C /*'\'*/
]);

Url.prototype._autoEscapeCharacters = makeAsciiTable(
    autoEscape.map(function(v) {
        return v.charCodeAt(0);
    })
);

//If these characters end a host name, the path will not be prepended a /
Url.prototype._noPrependSlashHostEnders = makeAsciiTable(
    [
        "<", ">", "'", "`", " ", "\r",
        "\n", "\t", "{", "}", "|",
        "^", "`", "\"", "%", ";"
    ].map(function(v) {
        return v.charCodeAt(0);
    })
);

Url.prototype._autoEscapeMap = autoEscapeMap;
Url.prototype._afterQueryAutoEscapeMap = afterQueryAutoEscapeMap;

module.exports = Url;

Url.replace = function Url$Replace() {
    __webpack_require__.c.url = {
        exports: Url
    };
};


/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/index.js ***!
  \*********************************************/
/*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return _common_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./node_modules/gl-matrix/esm/mat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return _mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./node_modules/gl-matrix/esm/mat2d.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return _mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return _quat_js__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./node_modules/gl-matrix/esm/quat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function() { return _quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _vec4_js__WEBPACK_IMPORTED_MODULE_9__; });












/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, transpose, invert, adjoint, determinant, multiply, rotate, scale, fromRotation, fromScaling, str, frob, LDU, add, subtract, exactEquals, equals, multiplyScalar, multiplyScalarAndAdd, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function() { return LDU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2d.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2d.js ***!
  \*********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, invert, determinant, multiply, rotate, scale, translate, fromRotation, fromScaling, fromTranslation, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, getAngle, multiply, rotateX, rotateY, rotateZ, calculateW, exp, ln, pow, slerp, random, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ln", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat2.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat2.js ***!
  \*********************************************/
/*! exports provided: create, clone, fromValues, fromRotationTranslationValues, fromRotationTranslation, fromTranslation, fromRotation, fromMat4, copy, identity, set, getReal, getDual, setReal, setDual, getTranslation, translate, rotateX, rotateY, rotateZ, rotateByQuatAppend, rotateByQuatPrepend, rotateAroundAxis, add, multiply, mul, scale, dot, lerp, invert, conjugate, length, len, squaredLength, sqrLen, normalize, str, exactEquals, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function() { return fromRotationTranslationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function() { return getReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function() { return getDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function() { return setReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function() { return setDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function() { return rotateByQuatAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function() { return rotateByQuatPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function() { return rotateAroundAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, zero, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat4, transformQuat, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/parse-dds/index.js":
/*!*****************************************!*\
  !*** ./node_modules/parse-dds/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// All values and structures referenced from:
// http://msdn.microsoft.com/en-us/library/bb943991.aspx/
//
// DX10 Cubemap support based on
// https://github.com/dariomanesku/cmft/issues/7#issuecomment-69516844
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb943983(v=vs.85).aspx
// https://github.com/playcanvas/engine/blob/master/src/resources/resources_texture.js

var DDS_MAGIC = 0x20534444
var DDSD_MIPMAPCOUNT = 0x20000
var DDPF_FOURCC = 0x4

var FOURCC_DXT1 = fourCCToInt32('DXT1')
var FOURCC_DXT3 = fourCCToInt32('DXT3')
var FOURCC_DXT5 = fourCCToInt32('DXT5')
var FOURCC_DX10 = fourCCToInt32('DX10')
var FOURCC_FP32F = 116 // DXGI_FORMAT_R32G32B32A32_FLOAT

var DDSCAPS2_CUBEMAP = 0x200
var D3D10_RESOURCE_DIMENSION_TEXTURE2D = 3
var DXGI_FORMAT_R32G32B32A32_FLOAT = 2

// The header length in 32 bit ints
var headerLengthInt = 31

// Offsets into the header array
var off_magic = 0
var off_size = 1
var off_flags = 2
var off_height = 3
var off_width = 4
var off_mipmapCount = 7
var off_pfFlags = 20
var off_pfFourCC = 21
var off_caps2 = 28

module.exports = parseHeaders

function parseHeaders (arrayBuffer) {
  var header = new Int32Array(arrayBuffer, 0, headerLengthInt)

  if (header[off_magic] !== DDS_MAGIC) {
    throw new Error('Invalid magic number in DDS header')
  }

  if (!header[off_pfFlags] & DDPF_FOURCC) {
    throw new Error('Unsupported format, must contain a FourCC code')
  }

  var blockBytes
  var format
  var fourCC = header[off_pfFourCC]
  switch (fourCC) {
    case FOURCC_DXT1:
      blockBytes = 8
      format = 'dxt1'
      break
    case FOURCC_DXT3:
      blockBytes = 16
      format = 'dxt3'
      break
    case FOURCC_DXT5:
      blockBytes = 16
      format = 'dxt5'
      break
    case FOURCC_FP32F:
      format = 'rgba32f'
      break
    case FOURCC_DX10:
      var dx10Header = new Uint32Array(arrayBuffer.slice(128, 128 + 20))
      format = dx10Header[0]
      var resourceDimension = dx10Header[1]
      var miscFlag = dx10Header[2]
      var arraySize = dx10Header[3]
      var miscFlags2 = dx10Header[4]

      if (resourceDimension === D3D10_RESOURCE_DIMENSION_TEXTURE2D && format === DXGI_FORMAT_R32G32B32A32_FLOAT) {
        format = 'rgba32f'
      } else {
        throw new Error('Unsupported DX10 texture format ' + format)
      }
      break
    default:
      throw new Error('Unsupported FourCC code: ' + int32ToFourCC(fourCC))
  }

  var flags = header[off_flags]
  var mipmapCount = 1

  if (flags & DDSD_MIPMAPCOUNT) {
    mipmapCount = Math.max(1, header[off_mipmapCount])
  }

  var cubemap = false
  var caps2 = header[off_caps2]
  if (caps2 & DDSCAPS2_CUBEMAP) {
    cubemap = true
  }

  var width = header[off_width]
  var height = header[off_height]
  var dataOffset = header[off_size] + 4
  var texWidth = width
  var texHeight = height
  var images = []
  var dataLength

  if (fourCC === FOURCC_DX10) {
    dataOffset += 20
  }

  if (cubemap) {
    for (var f = 0; f < 6; f++) {
      if (format !== 'rgba32f') {
        throw new Error('Only RGBA32f cubemaps are supported')
      }
      var bpp = 4 * 32 / 8

      width = texWidth
      height = texHeight

      // cubemap should have all mipmap levels defined
      // Math.log2(width) + 1
      var requiredMipLevels = Math.log(width) / Math.log(2) + 1

      for (var i = 0; i < requiredMipLevels; i++) {
        dataLength = width * height * bpp
        images.push({
          offset: dataOffset,
          length: dataLength,
          shape: [ width, height ]
        })
        // Reuse data from the previous level if we are beyond mipmapCount
        // This is hack for CMFT not publishing full mipmap chain https://github.com/dariomanesku/cmft/issues/10
        if (i < mipmapCount) {
          dataOffset += dataLength
        }
        width = Math.floor(width / 2)
        height = Math.floor(height / 2)
      }
    }
  } else {
    for (var i = 0; i < mipmapCount; i++) {
      dataLength = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockBytes

      images.push({
        offset: dataOffset,
        length: dataLength,
        shape: [ width, height ]
      })
      dataOffset += dataLength
      width = Math.floor(width / 2)
      height = Math.floor(height / 2)
    }
  }

  return {
    shape: [ texWidth, texHeight ],
    images: images,
    format: format,
    flags: flags,
    cubemap: cubemap
  }
}

function fourCCToInt32 (value) {
  return value.charCodeAt(0) +
    (value.charCodeAt(1) << 8) +
    (value.charCodeAt(2) << 16) +
    (value.charCodeAt(3) << 24)
}

function int32ToFourCC (value) {
  return String.fromCharCode(
    value & 0xff,
    (value >> 8) & 0xff,
    (value >> 16) & 0xff,
    (value >> 24) & 0xff
  )
}


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/querystringparser/js/querystringparser.js":
/*!****************************************************************!*\
  !*** ./node_modules/querystringparser/js/querystringparser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var QueryStringSerializer = __webpack_require__(/*! ./querystringserializer.js */ "./node_modules/querystringparser/js/querystringserializer.js");
module.exports = QueryStringParser;

var rplus = /\+/g;
var rint = /^[0-9]+$/;
var isArray = Array.isArray;
var haveProp = {}.hasOwnProperty;

function QueryStringParser() {
    this.containsSparse = false;
    this.cacheKey = "";
    this.cacheVal = null;
}

QueryStringParser.maxLength = 32768;
QueryStringParser.maxDepth = 4;
QueryStringParser.maxKeys = 256;

QueryStringParser.parse = function QueryStringParser$Parse(str) {
    if (typeof str === "string") {
        var maxLength = QueryStringParser.maxLength;
        if (str.length > maxLength) {
            throw new RangeError(
                "str is too large (" +
                "QueryStringParser.maxLength=" + maxLength + ")"
            );
        }
        var parser = new QueryStringParser();
        return parser.parseString(str, false);
    }
    else if (str !== null && typeof str === "object") {
        var parser = new QueryStringParser();
        return parser.parseObject(str);
    }
    return {};
};

QueryStringParser.stringify =
function QueryStringParser$Stringify(value) {
    var serializer = new QueryStringSerializer();
    return serializer.serialize(value);
};

QueryStringParser.prototype.decode =
function QueryStringParser$decode(str, shouldDecode, containsPlus) {
    if (shouldDecode === false) return str;
    if (containsPlus === true) str = str.replace(rplus, " ");
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
};

QueryStringParser.prototype.maybeArrayIndex =
function QueryStringParser$maybeArrayIndex(str, arrayLength) {
    var len = str.length;
    if (len === 0) {
        return arrayLength;
    }
    var ch = str.charCodeAt(0);

    if (ch === 48) {
        return len > 1 ? -1 : 0;
    }
    else if (48 <= ch && ch <= 57) {
        if (len === 1) {
            return ch - 48;
        }
        else if (rint.test(str)) {
            var v = parseInt(str, 10);
            if (0 < v && v <= 1073741822) {
                return v;
            }
        }
    }
    return -1;
};

QueryStringParser.prototype.getSlot =
function QueryStringParser$getSlot(dictionary, prevKey, curKey) {
    var slot;
    if (!(haveProp.call(dictionary, prevKey))) {
        var index = this.maybeArrayIndex(curKey, 0);
        if (index > -1) {
            slot = [];
        }
        else {
            slot = {};
        }
        dictionary[prevKey] = slot;
    }
    else {
        slot = dictionary[prevKey];
    }
    return slot;
};

QueryStringParser.prototype.placeNestedValue =
function QueryStringParser$placeNestedValue
(dictionary, key, value, i, prevKey, curKey) {
    var slot = this.getSlot(dictionary, prevKey, curKey);
    var index = -1;

    if (isArray(slot)) {
        index = this.maybeArrayIndex(curKey, slot.length);
    }

    var len = key.length;
    var depth = 2;
    var maxDepth = QueryStringParser.maxDepth;
    var start = -1;
    for (; i < len; ++i) {
        var ch = key.charCodeAt(i);
        if (ch === 91) {
            start = i + 1;
        }
        else if (ch === 93 &&
                start > -1) {
            prevKey = curKey;
            curKey = start === i ? "" : key.substring(start, i);
            start = -1;
            depth++;
            if (depth > maxDepth) {
                throw new RangeError("Nesting depth of keys is too large " +
                    "(QueryStringParser.maxDepth="+maxDepth+")" );
            }
            slot = this.getSlot(slot, prevKey, curKey);

            index = isArray(slot)
                ? this.maybeArrayIndex(curKey, slot.length)
                : -1;
        }
    }

    if(index > -1) {
        if (value !== "") {
            if (index === slot.length) {
                slot.push(value);
            }
            else {
                this.containsSparse = true;
                slot[index] = value;
            }
        }
    }
    else {
        this.insert(slot, curKey, value);
    }
};

QueryStringParser.prototype.insert =
function QueryStringParser$insert(dictionary, key, value) {
    var ret = null;
    if (haveProp.call(dictionary, key)) {
        var prev = dictionary[key];
        if( isArray(prev) ) {
            prev.push(value);
            ret = prev;
        }
        else {
            ret = [prev, value];
            dictionary[key] = ret;
        }
    }
    else {
        dictionary[key] = value;
    }
    return ret;
};

QueryStringParser.prototype.push =
function QueryStringParser$push(dictionary, key, value) {
    var ret = null;
    if (haveProp.call(dictionary, key)) {
        var prev = dictionary[key];
        prev.push(value);
        ret = prev;
    }
    else {
        ret = [value];
        dictionary[key] = ret;
    }
    return ret;
};

QueryStringParser.prototype.maybePlaceNestedValue =
function QueryStringParser$maybePlaceNestedValue(dictionary, key, value) {
    var len = key.length;
    if (key.charCodeAt(len - 1) !== 93) {
        this.placeValue(dictionary, key, value, false);
        return;
    }
    var start = -1;

    var i = 0;
    var curKey;
    var prevKey;

    for (; i < len; ++i) {
        var ch = key.charCodeAt(i);

        if (ch === 91) {
            start = i + 1;
            prevKey = key.slice(0, i);
        }
        else if (ch === 93) {
            if (start < 0) {
                this.placeValue(dictionary, key, value, false);
                return;
            }
            curKey = start === i ? "" : key.slice(start, i);
            i++;
            break;
        }
    }

    if (curKey === void 0) {
        this.placeValue(dictionary, key, value, false);
        return;
    }

    if (curKey === "" && value !== "" && i === len) {
        if (key === this.cacheKey) {
            this.cacheVal.push(value);
        }
        else {
            this.cacheKey = key;
            this.cacheVal = this.push(dictionary, prevKey, value);
        }
    }
    else {
        this.placeNestedValue(dictionary, key, value, i, prevKey, curKey);
    }
};

QueryStringParser.prototype.placeValue =
function QueryStringParser$placeValue(dictionary, key, value, possiblyNested) {
    if (possiblyNested === true) {
        this.maybePlaceNestedValue(dictionary, key, value);
        return;
    }
    if (key === this.cacheKey) {
        this.cacheVal.push(value);
        return;
    }
    var cache = this.insert(dictionary, key, value);
    if (cache !== null) {
        this.cacheKey = key;
        this.cacheVal = cache;
    }
};

QueryStringParser.prototype.compact =
function QueryStringParser$compact(obj) {
    if (isArray(obj)) {
        var ret = [];
        var keys = Object.keys(obj);
        for( var i = 0, len = keys.length; i < len; ++i ) {
            ret.push(obj[keys[i]]);
        }
        return ret;
    }
    else if (typeof obj === "object") {
        var keys = Object.keys(obj);
        for( var i = 0, len = keys.length; i < len; ++i ) {
            var key = keys[i];
            obj[key] = this.compact(obj[key]);
        }
    }
    else {
        return obj;
    }
};

QueryStringParser.prototype.parseObject =
function QueryStringParser$parseObject(obj) {
    var keys = Object.keys(obj);
    var len = keys.length;
    if (len === 0) {
        return {};
    }
    len--;
    var ret = "";
    var key;
    for( var i = 0; i < len; ++i ) {
        key = keys[i];
        ret += key + "=" + obj[key] + "&";
    }
    key = keys[i];
    ret += key + "=" + obj[key];
    return this.parseString(ret, true);
};

QueryStringParser.prototype.parseString =
function QueryStringParser$parseString(str, noDecode) {
    var maxKeys = QueryStringParser.maxKeys;
    var keys = 0;
    var decodeKey = false;
    var decodeValue = false;
    var possiblyNested = false;
    var len = str.length;
    var i = 0;
    var dictionary = {};
    var keyStart = 0;
    var keyEnd = 0;
    var valueStart = 0;
    var valueEnd = 0;
    var left = 0;
    var lastIndex = len - 1;
    var containsPlus = false;


    for (; i < len; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 91) {
            left++;
        }
        else if (left > 0 && ch === 93) {
            possiblyNested = true;
            left--;
        }
        else if (left === 0 && ch === 61) {
            var j = i + 1;

            keyEnd = i - 1;
            valueEnd = valueStart = j;
            var key = str.slice(keyStart, keyEnd + 1);
            key = this.decode(key, decodeKey, containsPlus);
            decodeKey = false;

            for (; j < len; ++j) {
                ch = str.charCodeAt(j);
                if ((ch === 43 || ch === 37) && !noDecode) {
                    if (ch === 43) containsPlus = true;
                    decodeValue = true;
                }
                if (ch === 38 || j === lastIndex) {
                    valueEnd = j;
                    i = j;

                    if (ch === 38) {
                        valueEnd--;
                    }

                    var value = str.slice(valueStart, valueEnd + 1);
                    value = this.decode(value, decodeValue, containsPlus);

                    this.placeValue(dictionary, key, value, possiblyNested);

                    containsPlus = decodeValue = false;
                    possiblyNested = false;

                    keyStart = j + 1;
                    keys++;
                    if (keys > maxKeys) {
                        throw new RangeError("Amount of keys is too large " +
                            "(QueryStringParser.maxKeys=" + maxKeys + ")");
                    }
                    break;
                }
            }
        }
        else if ((ch === 43 || ch === 37) && !noDecode) {
            if (ch === 43) containsPlus = true;
            decodeKey = true;
        }
    }
    if (keyStart !== len) {
        var value = "";
        var key = str.slice(keyStart, len);
        key = this.decode(key, decodeKey, containsPlus);
        this.placeValue(dictionary, key, value, possiblyNested);
    }


    if (this.containsSparse) {
        this.compact(dictionary);
    }

    return dictionary;
};


/***/ }),

/***/ "./node_modules/querystringparser/js/querystringserializer.js":
/*!********************************************************************!*\
  !*** ./node_modules/querystringparser/js/querystringserializer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

module.exports = QueryStringSerializer;
var enc = encodeURIComponent;
var ARRAY = [];
var isArray = Array.isArray;
var getProto = Object.getPrototypeOf;
var oProto = getProto({});

function isObject(obj) {
    if (isArray(obj)) {
        return true;
    }
    if (obj === null || typeof obj !== "object") {
        return false;
    }
    var proto = getProto(obj);

    return proto === oProto || proto === null;
}

function QueryStringSerializer() {

}

QueryStringSerializer.prototype.serialize =
function QueryStringSerializer$serialize(obj) {
    if (obj === null ||
        typeof obj !== "object") {
        throw new TypeError("the obj to stringify must be an object");
    }
    var keys = Object.keys(obj);
    var len = keys.length;
    var array = ARRAY;
    var stack = [];
    var ret = [];
    var cur = obj;
    var keyPrefix = "";

    for (var i = 0; i < len; ++i) {
        var key = keys === array ? i : keys[i];
        var value = cur[key];
        if (isObject(value)) {
            stack.push(keyPrefix, cur, keys, len, i);

            if (keyPrefix === "") {
                keyPrefix = key;
            }
            else {
                keyPrefix = keyPrefix + "[" + enc(key) + "]";
            }

            if (isArray(value)) {
                keys = array;
                len = value.length;
            }
            else {
                keys = Object.keys(value);
                len = keys.length;
            }
            i = -1;
            cur = value;
        }
        else {
            if (typeof value !== "string") {
                value = "" + value;
            }

            var serializedKey = keyPrefix === ""
                                ? enc(key)
                                : keyPrefix + "[" + enc(key) + "]";
            ret.push(serializedKey + "=" + enc(value));
        }

        if(i === len - 1 && stack.length > 0) {
            i = stack.pop();
            len = stack.pop();
            keys = stack.pop();
            cur = stack.pop();
            keyPrefix = stack.pop();
        }
    }

    return ret.join("&");
};


/***/ }),

/***/ "./node_modules/randomutils/index.js":
/*!*******************************************!*\
  !*** ./node_modules/randomutils/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// index.js

var random = function(a, b) {
    if(b === undefined) {
        b = 0;
    }
    return a + Math.random() * (b - a);
}


var randomFloor = function(a, b) {
    return Math.floor(random(a, b));
}


var randomGaussian = function(n) {
    if( n === undefined) n = 6;
    var rand = 0;
  
    for (var i = 0; i < n; i += 1) {
        rand += Math.random();
    }
  
    return rand / n
}

var getRandomElement = function(ary) {
    return ary[randomFloor(ary.length)];
}


var map = function(v, a, b, c, d) {
    let p = (v - a) / ( b - a);
    return c + (d - c) * p;
}


var randomUtils = {
    random,
    randomFloor,
    randomGaussian,
    map,
    getRandomElement
}


module.exports = randomUtils;

/***/ }),

/***/ "./node_modules/scheduling/build/scheduler.js":
/*!****************************************************!*\
  !*** ./node_modules/scheduling/build/scheduler.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let n=window,e=60,r=performance.now(),t=0,o=0,f=r;const u=[],c=[],a=[],i=[];let s=[],l=[],m=-1,g=0;function p(){!function(){let n,m=0,g=1e3/e,p=0;for(m=0;m<u.length;m++)n=u[m],null!=n&&n.func(n.args);for(;s.length>0;)n=s.pop(),n.func(n.args);let h=performance.now();for(o=(h-r)/1e3,t=h-f,m=0;m<c.length;m++)n=c[m],h-n.time>n.delay&&(n.func(n.args),c.splice(m,1));for(h=performance.now();a.length>0;){if(n=a.shift(),p=performance.now(),!(p-h<g)){a.unshift(n);break}n.func(n.args)}for(h=performance.now();i.length>0;)n=i.shift(),p=performance.now(),p-h<g&&n.func(n.args);f=h,s=s.concat(l),l=[]}(),m=n.requestAnimationFrame(p)}p();var h={addEF:function(n,e){const r=++g;return u[r]={func:n,args:e},r},removeEF:function(n){return void 0!==u[n]&&(u[n]=null),-1},delay:function(n,e,r){const t=performance.now();c.push({func:n,args:e,delay:r,time:t})},next:function(n,e){l.push({func:n,args:e})},defer:function(n,e){a.push({func:n,args:e})},usurp:function(n,e){i.push({func:n,args:e})},setRequestAnimationFrameSource:function(e){m>-1&&window.cancelAnimationFrame(m),n=e,p()},setFrameRate:function(n){e=n},getElapsedTime:function(){return o},getDeltaTime:function(){return t}};/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/ARUtils.js":
/*!***************************!*\
  !*** ./src/js/ARUtils.js ***!
  \***************************/
/*! exports provided: isARSupported, session, canvas, gl, checkSupported, init, setCamera, bind, hitTest, onSessionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isARSupported", function() { return isARSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSupported", function() { return checkSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCamera", function() { return setCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitTest", function() { return hitTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSessionEnd", function() { return onSessionEnd; });
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/build/scheduler.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");


let isARSupported = false; // webgl

let canvas;
let gl; // xr

let session;
let xrRefSpace;
let xrViewerSpace;
let xrHitTestSource;
let frame;
let cbSessionEnd;
let mtxHit = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create();

const checkSupported = function checkSupported() {
  return new Promise((resolve, reject) => {
    if (!navigator.xr) {
      resolve(false);
    } else {
      navigator.xr.isSessionSupported("immersive-ar").then(supported => {
        isARSupported = supported;
        resolve(supported);
      });
    }
  });
};

const makeXRCompatible = mSession => {
  session = mSession;
  return new Promise((resolve, reject) => {
    gl.makeXRCompatible().then(() => {
      session.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl)
      });
      resolve();
    });
  });
};

const initHitTesting = () => {
  return new Promise((resolve, reject) => {
    session.requestReferenceSpace("viewer").then(refSpace => {
      xrViewerSpace = refSpace;
      session.requestHitTestSource({
        space: xrViewerSpace
      }).then(hitTestSource => {
        xrHitTestSource = hitTestSource;
        resolve();
      });
    });
  });
};

const init = function (mGl) {
  gl = mGl;
  return new Promise((resolve, reject) => {
    navigator.xr.requestSession("immersive-ar", {
      optionalFeatures: ["dom-overlay"],
      domOverlay: {
        root: document.querySelector(".container")
      },
      requiredFeatures: ["local", "hit-test"]
    }).then(makeXRCompatible).then(initHitTesting).then(() => {
      // session end handling
      session.onend = () => {
        cbSessionEnd && cbSessionEnd();
      };

      session.requestReferenceSpace("local").then(refSpace => {
        xrRefSpace = refSpace;
        loop(); // set animation frame source

        scheduling__WEBPACK_IMPORTED_MODULE_0__["default"].setRequestAnimationFrameSource(session);
        resolve(gl);
      });
    }).catch(e => {
      reject(e);
    });
  });
}; // animation frame


function loop(t, mFrame) {
  frame = mFrame;
  session.requestAnimationFrame((t, frame) => loop(t, frame));
} // binding the framebuffer to draw


function bind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer);
} // set the camera from XRFrame.pose


function setCamera(GL, mCamera, mBind = true) {
  if (!session || !frame) {
    return;
  }

  const pose = frame.getViewerPose(xrRefSpace);

  if (pose) {
    const view = pose.views[0]; // ar has only 1 view

    const {
      x,
      y,
      width,
      height
    } = session.renderState.baseLayer.getViewport(view);
    mCamera.setFromViewProjection(view.transform.inverse.matrix, view.projectionMatrix);
    GL.setMatrices(mCamera);
    GL.viewport(x, y, width, height);

    if (mBind) {
      bind();
    }
  }
} // get hit test result


function hitTest() {
  if (!frame || !xrHitTestSource) {
    return null;
  }

  const hitTestResults = frame.getHitTestResults(xrHitTestSource);

  if (hitTestResults.length > 0) {
    const pose = hitTestResults[0].getPose(xrRefSpace);
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].copy(mtxHit, pose.transform.matrix);
    return mtxHit;
  } else {
    return null;
  }
} // session end callback


function onSessionEnd(mCb) {
  cbSessionEnd = mCb;
}



/***/ }),

/***/ "./src/js/Assets.js":
/*!**************************!*\
  !*** ./src/js/Assets.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
let _assets;



const init = mAssets => {
  _assets = mAssets.map(({
    id,
    file,
    type
  }) => {
    const source = file;

    let _file;

    switch (type) {
      case "jpg":
      case "png":
        _file = new alfrid__WEBPACK_IMPORTED_MODULE_0__["GLTexture"](file);
        break;

      case "text":
        _file = Object(alfrid__WEBPACK_IMPORTED_MODULE_0__["parseObj"])(file);
        break;
    }

    return {
      id,
      source,
      type,
      file: _file
    };
  });
  console.table(_assets);
};

const get = mName => {
  const asset = _assets.find(o => o.id === mName);

  if (!asset) {
    return null;
  }

  return asset.file;
};

const Assets = {
  init,
  get
};
/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ }),

/***/ "./src/js/Config.js":
/*!**************************!*\
  !*** ./src/js/Config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Config.js
/* harmony default export */ __webpack_exports__["default"] = ({
  numParticles: 64,
  envSize: 20,
  numTrees: 20,
  autoSave: false,
  debug: false
});

/***/ }),

/***/ "./src/js/DrawFloor.js":
/*!*****************************!*\
  !*** ./src/js/DrawFloor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var shaders_floor_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shaders/floor.vert */ "./src/shaders/floor.vert");
/* harmony import */ var shaders_floor_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shaders/floor.frag */ "./src/shaders/floor.frag");





class DrawFloor extends alfrid__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor() {
    super();
    const s = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].envSize;
    this.setMesh(alfrid__WEBPACK_IMPORTED_MODULE_0__["Geom"].plane(s, s, 1, "xz")).useProgram(shaders_floor_vert__WEBPACK_IMPORTED_MODULE_2__["default"], shaders_floor_frag__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DrawFloor);

/***/ }),

/***/ "./src/js/DrawMark.js":
/*!****************************!*\
  !*** ./src/js/DrawMark.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var shaders_mark_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shaders/mark.vert */ "./src/shaders/mark.vert");
/* harmony import */ var shaders_mark_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shaders/mark.frag */ "./src/shaders/mark.frag");




class DrawMark extends alfrid__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor() {
    super();
    const s = 0.1;
    const mesh = alfrid__WEBPACK_IMPORTED_MODULE_0__["Geom"].plane(s, s, 1, "xz");
    this.setMesh(mesh).useProgram(shaders_mark_vert__WEBPACK_IMPORTED_MODULE_1__["default"], shaders_mark_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DrawMark);

/***/ }),

/***/ "./src/js/DrawRender.js":
/*!******************************!*\
  !*** ./src/js/DrawRender.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var shaders_render_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shaders/render.vert */ "./src/shaders/render.vert");
/* harmony import */ var shaders_render_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shaders/render.frag */ "./src/shaders/render.frag");





class DrawRender extends alfrid__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor() {
    super();
    const {
      numParticles: num
    } = _Config__WEBPACK_IMPORTED_MODULE_1__["default"];
    const positions = [];
    const indices = [];
    let count = 0;

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push([i / num, j / num, Math.random()]);
        indices.push(count);
        count++;
      }
    }

    const mesh = new alfrid__WEBPACK_IMPORTED_MODULE_0__["Mesh"](alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].POINTS).bufferVertex(positions).bufferIndex(indices);
    this.setMesh(mesh).useProgram(shaders_render_vert__WEBPACK_IMPORTED_MODULE_2__["default"], shaders_render_frag__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DrawRender);

/***/ }),

/***/ "./src/js/DrawSave.js":
/*!****************************!*\
  !*** ./src/js/DrawSave.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var randomutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! randomutils */ "./node_modules/randomutils/index.js");
/* harmony import */ var randomutils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomutils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shaders_save_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shaders/save.vert */ "./src/shaders/save.vert");
/* harmony import */ var shaders_save_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shaders/save.frag */ "./src/shaders/save.frag");






class DrawSave extends alfrid__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor() {
    super();
    const {
      numParticles: num,
      envSize
    } = _Config__WEBPACK_IMPORTED_MODULE_1__["default"];
    const positions = [];
    const uvs = [];
    const normals = [];
    const data = [];
    const indices = [];
    let count = 0;

    const getPos = () => {
      const x = (Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])() - 0.5) * envSize;
      const z = (Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])() - 0.5) * envSize;
      const y = 0.1 + Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])() * 2.0;
      return [x, y, z];
    };

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        uvs.push([i / num * 2 - 1, j / num * 2 - 1]);
        normals.push([Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])(), Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])(), Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])()]);
        data.push([Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["random"])(Math.PI * 2), Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])(), Object(randomutils__WEBPACK_IMPORTED_MODULE_2__["randomGaussian"])()]);
        indices.push(count);
        count++;
      }
    }

    const mesh = new alfrid__WEBPACK_IMPORTED_MODULE_0__["Mesh"](alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].POINTS).bufferVertex(positions).bufferTexCoord(uvs).bufferNormal(normals).bufferData(data, "aData", 3).bufferIndex(indices);
    this.setMesh(mesh).useProgram(shaders_save_vert__WEBPACK_IMPORTED_MODULE_3__["default"], shaders_save_frag__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DrawSave);

/***/ }),

/***/ "./src/js/SceneApp.js":
/*!****************************!*\
  !*** ./src/js/SceneApp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils/index.js");
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/build/scheduler.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var _ARUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ARUtils */ "./src/js/ARUtils.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
/* harmony import */ var _utils_TouchScale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/TouchScale */ "./src/js/utils/TouchScale.js");
/* harmony import */ var _DrawMark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DrawMark */ "./src/js/DrawMark.js");
/* harmony import */ var _DrawSave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DrawSave */ "./src/js/DrawSave.js");
/* harmony import */ var _DrawFloor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DrawFloor */ "./src/js/DrawFloor.js");
/* harmony import */ var _DrawRender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DrawRender */ "./src/js/DrawRender.js");
/* harmony import */ var shaders_pass_vert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shaders/pass.vert */ "./src/shaders/pass.vert");
/* harmony import */ var shaders_sim_frag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shaders/sim.frag */ "./src/shaders/sim.frag");
/* harmony import */ var shaders_color_frag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shaders/color.frag */ "./src/shaders/color.frag");






 // draw calls




 // shaders




const DEFAULT_Y = 0.2;

class SceneApp extends alfrid__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
  constructor() {
    super(); // camera

    this.orbitalControl.rx.setTo(0.8);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(10); // hit

    this.mtxHit = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].translate(this.mtxHit, this.mtxHit, [0, -DEFAULT_Y, 0]);
    this._containerWorld = new alfrid__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
    this._globalScale = new _utils_TouchScale__WEBPACK_IMPORTED_MODULE_6__["default"](0.5, 0.1);
    this._seed = Math.random() * 0xffff; // states

    this._offsetHit = new alfrid__WEBPACK_IMPORTED_MODULE_0__["EaseNumber"](0);
    this._offsetOpen = new alfrid__WEBPACK_IMPORTED_MODULE_0__["EaseNumber"](1);
    this._hasStarted = false;
    this._particleScale = 1;
    this._hasPresented = false; // set size

    this.resize();
  }

  present() {
    window.addEventListener("touchstart", e => this._onTouch());
    this._particleScale = 1.5;

    this._offsetOpen.setTo(0);

    this._hasPresented = true;
  }

  _initTextures() {
    const {
      numParticles: num
    } = _Config__WEBPACK_IMPORTED_MODULE_3__["default"];
    const type = _utils__WEBPACK_IMPORTED_MODULE_1__["iOS"] ? alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].HALF_FLOAT : alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].FLOAT;
    const oSettings = {
      type,
      minFilter: alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].NEAREST,
      magFilter: alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].NEAREST
    };
    this._fbo = new alfrid__WEBPACK_IMPORTED_MODULE_0__["FboPingPong"](num, num, oSettings, 4);
  }

  _initViews() {
    this._dCopy = new alfrid__WEBPACK_IMPORTED_MODULE_0__["DrawCopy"]();
    this._dBall = new alfrid__WEBPACK_IMPORTED_MODULE_0__["DrawBall"]();
    this._dMark = new _DrawMark__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._drawFloor = new _DrawFloor__WEBPACK_IMPORTED_MODULE_9__["default"]();
    this._drawCover = new alfrid__WEBPACK_IMPORTED_MODULE_0__["Draw"]().setMesh(alfrid__WEBPACK_IMPORTED_MODULE_0__["Geom"].bigTriangle()).useProgram(shaders_pass_vert__WEBPACK_IMPORTED_MODULE_11__["default"], shaders_color_frag__WEBPACK_IMPORTED_MODULE_13__["default"]).uniform("uColor", [0, 0, 0.05]).uniform("uOpacity", 0.9);
    this._drawRender = new _DrawRender__WEBPACK_IMPORTED_MODULE_10__["default"]();
    new _DrawSave__WEBPACK_IMPORTED_MODULE_8__["default"]().setClearColor(0, 0, 0, 1).bindFrameBuffer(this._fbo.read).draw();
    this._drawSim = new alfrid__WEBPACK_IMPORTED_MODULE_0__["Draw"]().setMesh(alfrid__WEBPACK_IMPORTED_MODULE_0__["Geom"].bigTriangle()).useProgram(shaders_pass_vert__WEBPACK_IMPORTED_MODULE_11__["default"], shaders_sim_frag__WEBPACK_IMPORTED_MODULE_12__["default"]).setClearColor(0, 0, 0, 1).uniform("uNum", "int", parseInt(_Config__WEBPACK_IMPORTED_MODULE_3__["default"].numParticles)).uniform("uMaxRadius", "float", _Config__WEBPACK_IMPORTED_MODULE_3__["default"].envSize);
  }

  _onTouch() {
    if (this._hasStarted) return;
    const mtxHit = Object(_ARUtils__WEBPACK_IMPORTED_MODULE_4__["hitTest"])();

    if (mtxHit !== null) {
      gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this._offsetOpen.value = 1;
    }
  }

  _checkHit() {
    if (!this._hasStarted) {
      const mtxHit = Object(_ARUtils__WEBPACK_IMPORTED_MODULE_4__["hitTest"])();

      if (mtxHit !== null) {
        this._offsetHit.value = 1;
        gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].copy(this.mtxHit, mtxHit);
      }
    }
  }

  update() {
    this._containerWorld.scaleX = this._containerWorld.scaleY = this._containerWorld.scaleZ = this._globalScale.value;

    this._drawSim.bindFrameBuffer(this._fbo.write).bindTexture("uPosMap", this._fbo.read.getTexture(0), 0).bindTexture("uVelMap", this._fbo.read.getTexture(1), 1).bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2).bindTexture("uDataMap", this._fbo.read.getTexture(3), 3).uniform("uTime", scheduling__WEBPACK_IMPORTED_MODULE_2__["default"].getElapsedTime() + this._seed).draw();

    this._fbo.swap();
  }

  render() {
    this.update();
    let s;

    if (!_ARUtils__WEBPACK_IMPORTED_MODULE_4__["isARSupported"]) {
      const g = 0.9;
      alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].clear(g, g, g, 1);
    } else {
      Object(_ARUtils__WEBPACK_IMPORTED_MODULE_4__["setCamera"])(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"], this.camera);

      this._checkHit();
    }

    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].disable(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].DEPTH_TEST);

    this._drawCover.draw();

    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].enable(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].DEPTH_TEST);
    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;

    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);

    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    const mtx = gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_5__["mat4"].mul(mtx, this.mtxHit, this._containerWorld.matrix);
    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].setModelMatrix(mtx);
    !this._hasPresented && this._drawFloor.draw();
    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].disable(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].DEPTH_TEST);
    const particleScale = this._containerWorld.scaleX * this._particleScale;

    this._drawRender.bindTexture("uPosMap", this._fbo.read.getTexture(0), 0).bindTexture("uDataMap", this._fbo.read.getTexture(3), 3).uniform("uViewport", [alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].width, alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].height]).uniform("uParticleScale", particleScale).draw();

    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].enable(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].DEPTH_TEST);
  }

  resize() {
    if (alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].isMobile || !_Config__WEBPACK_IMPORTED_MODULE_3__["default"].autoSave) {
      const {
        innerWidth,
        innerHeight
      } = window;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["resize"])(innerWidth, innerHeight);
      this.camera.setAspectRatio(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].aspectRatio);
    } else {
      const pixelRatio = 2.0;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["resize"])(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].aspectRatio);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SceneApp);

/***/ }),

/***/ "./src/js/Settings.js":
/*!****************************!*\
  !*** ./src/js/Settings.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var fast_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-url-parser */ "./node_modules/fast-url-parser/src/urlparser.js");
/* harmony import */ var fast_url_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_url_parser__WEBPACK_IMPORTED_MODULE_1__);
// Settings.js


fast_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.queryString = __webpack_require__(/*! querystringparser */ "./node_modules/querystringparser/js/querystringparser.js");
let enabled = true;

const reload = () => {
  if (!enabled) {
    return;
  }

  window.location.href = window.location.origin + window.location.pathname + '?config=' + JSON.stringify(_Config__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

const refresh = () => {
  if (!enabled) {
    return;
  }

  window.history.pushState('experiment', 'Title', window.location.origin + window.location.pathname + '?config=' + JSON.stringify(_Config__WEBPACK_IMPORTED_MODULE_0__["default"]));
};

const reset = () => {
  window.location.href = window.location.origin + window.location.pathname;
};

let delayIndex = -1;

const delayReload = () => {
  if (!enabled) {
    return;
  }

  window.clearTimeout(delayIndex);
  delayIndex = window.setTimeout(() => {
    window.location.href = window.location.origin + window.location.pathname + '?config=' + JSON.stringify(_Config__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }, 500);
};

const init = (mEnabled = true) => {
  enabled = mEnabled;
  const parsed = fast_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.location.search, true);
  let parsedJson = {};

  if (parsed.query.config) {
    parsedJson = JSON.parse(parsed.query.config);
  }

  Object.assign(_Config__WEBPACK_IMPORTED_MODULE_0__["default"], parsedJson);
  refresh();
};

/* harmony default export */ __webpack_exports__["default"] = ({
  enabled,
  reload,
  reset,
  refresh,
  delayReload,
  init
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/global.scss */ "./src/scss/global.scss");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Capture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Capture */ "./src/js/utils/Capture.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var _ARUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ARUtils */ "./src/js/ARUtils.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings */ "./src/js/Settings.js");
/* harmony import */ var _SceneApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SceneApp */ "./src/js/SceneApp.js");
/* harmony import */ var _utils_preload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/preload */ "./src/js/utils/preload.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/js/utils/index.js");
/* harmony import */ var _debug_addControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debug/addControls */ "./src/js/debug/addControls.js");









let canvas;
let container;
let scene;

if (document.body) {
  _init();
} else {
  window.addEventListener("DOMContentLoaded", _init);
}

function _init() {
  Object(_utils_preload__WEBPACK_IMPORTED_MODULE_6__["default"])().then(_init3D, _utils__WEBPACK_IMPORTED_MODULE_7__["logError"]);
}

function _init3D() {
  canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  container = document.querySelector(".container");
  container.appendChild(canvas);
  canvas.className = "Main-Canvas";
  const preserveDrawingBuffer =  true && !alfrid__WEBPACK_IMPORTED_MODULE_2__["GL"].isMobile;
  const webgl1 = false;
  alfrid__WEBPACK_IMPORTED_MODULE_2__["GL"].init(canvas, {
    webgl1,
    preserveDrawingBuffer
  });

  if (!alfrid__WEBPACK_IMPORTED_MODULE_2__["GL"].webgl2) {
    document.body.classList.add("no-webgl2");
    return;
  }

  if ( true && !_ARUtils__WEBPACK_IMPORTED_MODULE_3__["isARSupported"]) {
    _Settings__WEBPACK_IMPORTED_MODULE_4__["default"].init();
  }

  scene = new _SceneApp__WEBPACK_IMPORTED_MODULE_5__["default"]();

  if (true) {
    Object(_debug_addControls__WEBPACK_IMPORTED_MODULE_8__["default"])(scene);
  }

  checkAR();
}

function checkAR() {
  _ARUtils__WEBPACK_IMPORTED_MODULE_3__["checkSupported"]().then(supported => {
    if (!supported) {
      document.body.classList.add("no-xr");
    } else {
      document.body.classList.add("has-xr");
      initStartButton();
    }
  });
  setTimeout(() => {
    document.body.classList.add("hide-messages");
  }, 5000);
}

function initStartButton() {
  const btnAR = document.body.querySelector(".btnAR");
  btnAR.addEventListener("click", () => {
    _ARUtils__WEBPACK_IMPORTED_MODULE_3__["init"](alfrid__WEBPACK_IMPORTED_MODULE_2__["GL"].gl).then(gl => {
      container.removeChild(canvas);
      scene.present();
      _ARUtils__WEBPACK_IMPORTED_MODULE_3__["onSessionEnd"](() => {
        console.log("session end");
        window.location.reload();
      });
    });
  });
}

/***/ }),

/***/ "./src/js/asset-list.js":
/*!******************************!*\
  !*** ./src/js/asset-list.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const assetsToLoad = [];
/* harmony default export */ __webpack_exports__["default"] = (assetsToLoad);

/***/ }),

/***/ "./src/js/debug/addControls.js":
/*!*************************************!*\
  !*** ./src/js/debug/addControls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Settings */ "./src/js/Settings.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/js/Config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var _ARUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ARUtils */ "./src/js/ARUtils.js");
// addControls.js






const addControls = scene => {
  const oControl = {
    save: () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["saveJson"])(_Config__WEBPACK_IMPORTED_MODULE_1__["default"], "Settings");
    },
    webgl2: alfrid__WEBPACK_IMPORTED_MODULE_3__["GL"].webgl2.toString()
  };
  setTimeout(() => {
    gui.add(_Config__WEBPACK_IMPORTED_MODULE_1__["default"], "numParticles", [16, 32, 64, 128]).onFinishChange(_Settings__WEBPACK_IMPORTED_MODULE_0__["default"].reload);
    gui.add(_ARUtils__WEBPACK_IMPORTED_MODULE_4__, "isARSupported").listen();
    gui.add(oControl, "webgl2").listen();
    gui.add(_Config__WEBPACK_IMPORTED_MODULE_1__["default"], "debug").onFinishChange(_Settings__WEBPACK_IMPORTED_MODULE_0__["default"].refresh); // gui.add(Config, "autoSave").onFinishChange(Settings.refresh);
    // gui.add(oControl, "save").name("Save Settings");

    gui.add(_Settings__WEBPACK_IMPORTED_MODULE_0__["default"], "reset").name("Reset Default");
  }, 200);
};

/* harmony default export */ __webpack_exports__["default"] = (addControls);

/***/ }),

/***/ "./src/js/utils/Capture.js":
/*!*********************************!*\
  !*** ./src/js/utils/Capture.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/js/utils/index.js");
// Capture.js



String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};

const capture = () => {
  window.addEventListener("keydown", e => {
    let toCapture = false;

    if (window.navigator.userAgent.indexOf("Macintosh") > -1) {
      toCapture = e.keyCode === 83 && e.metaKey;
    } else {
      toCapture = e.keyCode === 83 && e.ctrlKey;
    }

    if (toCapture) {
      e.preventDefault();
      const date = new Date();
      let strDate = `${date.getFullYear()}.` + `${date.getMonth() + 1}.` + `${date.getDate()}-` + `${date.getHours()}.` + `${date.getMinutes()}.` + `${date.getSeconds()}`;
      Object(___WEBPACK_IMPORTED_MODULE_1__["saveImage"])(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].canvas, strDate);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (capture());

/***/ }),

/***/ "./src/js/utils/TouchScale.js":
/*!************************************!*\
  !*** ./src/js/utils/TouchScale.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");



const getTouchPos = (e, i) => {
  return [e.touches[i].pageX, e.touches[i].pageY];
};

class TouchScale {
  constructor(mScale = 1, mSensitivity = 1) {
    this._isScaling = false;
    this._scale = new alfrid__WEBPACK_IMPORTED_MODULE_1__["EaseNumber"](mScale);
    this._sensitivity = mSensitivity;
    this._initDistance = 0;
    this._initScale = 1;
    window.addEventListener("touchstart", e => this._onTouchStart(e));
    window.addEventListener("touchend", e => this._onTouchStart(e));
    window.addEventListener("touchmove", e => this._onTouchMove(e));
  }

  _onTouchStart(e) {
    if (e.touches.length < 2) {
      this._isScaling = false;
      return;
    }

    this._initScale = this._scale.value;
    const a = getTouchPos(e, 0);
    const b = getTouchPos(e, 1);
    this._initDistance = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].distance(a, b);
    this._isScaling = true;
  }

  _onTouchMove(e) {
    if (e.touches.length < 2) {
      this._isScaling = false;
      return;
    }

    const a = getTouchPos(e, 0);
    const b = getTouchPos(e, 1);
    const dist = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].distance(a, b);
    const delta = dist - this._initDistance;
    this._scale.value = this._initScale + delta * 0.01 * this._sensitivity;
  }

  _onTouchEnd() {}

  get value() {
    return this._scale.value;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TouchScale);

/***/ }),

/***/ "./src/js/utils/getDateString.js":
/*!***************************************!*\
  !*** ./src/js/utils/getDateString.js ***!
  \***************************************/
/*! exports provided: getDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateString", function() { return getDateString; });
const getDateString = () => {
  const date = new Date();
  const strDate = `${date.getFullYear()}.` + `${date.getMonth() + 1}.` + `${date.getDate()}-` + `${date.getHours()}.` + `${date.getMinutes()}.` + `${date.getSeconds()}`;
  return strDate;
};



/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/*! exports provided: saveImage, saveJson, resize, getDateString, logError, biasMatrix, iOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "biasMatrix", function() { return biasMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOS", function() { return iOS; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
/* harmony import */ var _saveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveImage */ "./src/js/utils/saveImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return _saveImage__WEBPACK_IMPORTED_MODULE_1__["saveImage"]; });

/* harmony import */ var _saveJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveJson */ "./src/js/utils/saveJson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveJson", function() { return _saveJson__WEBPACK_IMPORTED_MODULE_2__["saveJson"]; });

/* harmony import */ var _resizeCanavs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resizeCanavs */ "./src/js/utils/resizeCanavs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return _resizeCanavs__WEBPACK_IMPORTED_MODULE_3__["resize"]; });

/* harmony import */ var _getDateString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDateString */ "./src/js/utils/getDateString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateString", function() { return _getDateString__WEBPACK_IMPORTED_MODULE_4__["getDateString"]; });

// index.js





const logError = e => {
  console.error(e);
};
const biasMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].fromValues(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);
const iOS = function () {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}();

/***/ }),

/***/ "./src/js/utils/preload.js":
/*!*********************************!*\
  !*** ./src/js/utils/preload.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset-list */ "./src/js/asset-list.js");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets */ "./src/js/Assets.js");
/* harmony import */ var assets_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets-loader */ "./node_modules/assets-loader/src/index.js");
/* harmony import */ var assets_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_loader__WEBPACK_IMPORTED_MODULE_2__);
// preload.js




const loadAssets = gl => new Promise((resolve, reject) => {
  const loader = document.body.querySelector(".Loading-Bar");
  console.log("Load Assets", _asset_list__WEBPACK_IMPORTED_MODULE_0__["default"]);

  if (_asset_list__WEBPACK_IMPORTED_MODULE_0__["default"].length > 0) {
    document.body.classList.add("isLoading");
    new assets_loader__WEBPACK_IMPORTED_MODULE_2___default.a({
      assets: _asset_list__WEBPACK_IMPORTED_MODULE_0__["default"]
    }).on("error", error => {
      console.log("Error :", error);
    }).on("progress", p => {
      if (loader) loader.style.width = `${p * 100}%`;
    }).on("complete", o => {
      if (loader) loader.style.width = `100%`;
      _Assets__WEBPACK_IMPORTED_MODULE_1__["default"].init(o);
      setTimeout(() => {
        document.body.classList.remove("isLoading");
        resolve(gl);
      }, 500);
    }).start();
  } else {
    resolve(gl);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (loadAssets);

/***/ }),

/***/ "./src/js/utils/resizeCanavs.js":
/*!**************************************!*\
  !*** ./src/js/utils/resizeCanavs.js ***!
  \**************************************/
/*! exports provided: resize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
// resizeCanavs.js


const resize = (w, h) => {
  const {
    innerWidth,
    innerHeight
  } = window;
  w = w || innerWidth;
  h = h || innerHeight;
  alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].setSize(w, h);
  let tw = Math.min(w, innerWidth);
  let th = Math.min(h, innerHeight);
  const sx = innerWidth / w;
  const sy = innerHeight / h;
  const scale = Math.min(sx, sy);
  tw = w * scale;
  th = h * scale;
  alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].canvas.style.width = `${tw}px`;
  alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].canvas.style.height = `${th}px`;
};



/***/ }),

/***/ "./src/js/utils/saveImage.js":
/*!***********************************!*\
  !*** ./src/js/utils/saveImage.js ***!
  \***********************************/
/*! exports provided: saveImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
// saveImage.js
// const FILE_EXTENTION = 'jpg'
// const MIME_TYPE = 'image/jpeg'
const dataURLtoBlob = dataurl => {
  var arr = dataurl.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {
    type: mime
  });
};

const saveImage = (canvas, filename) => {
  var link = document.createElement('a');
  var imgData = canvas.toDataURL({
    format: 'png',
    multiplier: 4
  }); // var strDataURI = imgData.substr(22, imgData.length);

  var blob = dataURLtoBlob(imgData);
  var objurl = URL.createObjectURL(blob);
  link.download = `${filename}.png`;
  link.href = objurl;
  link.click();
};



/***/ }),

/***/ "./src/js/utils/saveJson.js":
/*!**********************************!*\
  !*** ./src/js/utils/saveJson.js ***!
  \**********************************/
/*! exports provided: saveJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveJson", function() { return saveJson; });
// saveJson.js
const saveJson = (obj, mName = 'dagta', mPretty = true) => {
  var str = mPretty ? JSON.stringify(obj, null, 4) : JSON.stringify(obj);
  var data = encode(str);
  var blob = new Blob([data], {
    type: 'application/octet-stream'
  });
  var url = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${mName}.json`);
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
  link.dispatchEvent(event);
};

const encode = s => {
  var out = [];

  for (var i = 0; i < s.length; i++) {
    out[i] = s.charCodeAt(i);
  }

  return new Uint8Array(out);
};



/***/ }),

/***/ "./src/scss/global.scss":
/*!******************************!*\
  !*** ./src/scss/global.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/shaders/color.frag":
/*!********************************!*\
  !*** ./src/shaders/color.frag ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uOpacity;\n\nout vec4 oColor;\n\nvoid main(void) {\n    oColor = vec4(uColor, uOpacity);\n}");

/***/ }),

/***/ "./src/shaders/floor.frag":
/*!********************************!*\
  !*** ./src/shaders/floor.frag ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\n#define DARK_BLUE vec3(16.0, 19.0, 46.0)/255.0 * 0.5\n\nvoid main(void) {\n    // gl_FragColor = vec4(vTextureCoord, 0.0, 1.0);\n    gl_FragColor = vec4(vec3(0.1), 1.0);\n    // gl_FragColor = vec4(DARK_BLUE, 1.0);\n}");

/***/ }),

/***/ "./src/shaders/floor.vert":
/*!********************************!*\
  !*** ./src/shaders/floor.vert ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}");

/***/ }),

/***/ "./src/shaders/mark.frag":
/*!*******************************!*\
  !*** ./src/shaders/mark.frag ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float uOffset;\n\nvoid main(void) {\n    float d = distance(vTextureCoord, vec2(.5))/.5;\n    \n    float t = distance(d, uOffset - 0.06);\n    t = smoothstep(0.06, 0.05, t);\n    if(t <= 0.0001) {discard;}\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, t);\n}");

/***/ }),

/***/ "./src/shaders/mark.vert":
/*!*******************************!*\
  !*** ./src/shaders/mark.vert ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}");

/***/ }),

/***/ "./src/shaders/pass.vert":
/*!*******************************!*\
  !*** ./src/shaders/pass.vert ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\nin vec2 aPosition;\nout vec2 vTextureCoord;\n\nvoid main(void){\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition *.5 + .5;\n}");

/***/ }),

/***/ "./src/shaders/render.frag":
/*!*********************************!*\
  !*** ./src/shaders/render.frag ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\nin vec3 vColor;\nout vec4 oColor;\n\nvoid main(void) {\n    float d = distance(gl_PointCoord, vec2(.5));\n    float a = smoothstep(0.5, 0.0, d);\n    if(a <= 0.00001) {\n        discard;\n    }\n    \n    oColor = vec4(vColor, a);\n}");

/***/ }),

/***/ "./src/shaders/render.vert":
/*!*********************************!*\
  !*** ./src/shaders/render.vert ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\nin vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform sampler2D uPosMap;\nuniform sampler2D uDataMap;\nuniform vec2 uViewport;\nuniform float uParticleScale;\n\nout vec3 vColor;\n\nconst float radius = 0.02;\nfloat particleSize(vec4 screenPos, mat4 mtxProj, vec2 viewport, float radius) {\n\treturn viewport.y * mtxProj[1][1] * radius / screenPos.w;\n}\n\n#define PI 3.141592653\n\n#define YELLOW vec3(1.0)\n// #define YELLOW vec3(202.0, 187.0, 55.0)/255.0\n\nvoid main(void) {\n    vec3 pos = texture(uPosMap, aVertexPosition.xy).xyz;\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\n    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * mix(1.0, 2.0, aVertexPosition.z) * uParticleScale;\n\n    vec3 data = texture(uDataMap, aVertexPosition.xy).rgb;\n    float cycle = data.x;\n\n    float g = abs(cycle - PI);\n    g = smoothstep(0.7, 0.2, g);\n    g = sin(g * PI * 0.5);\n\n    g = mix(g, 1.0, .3);\n\n    vColor = vec3(g) * YELLOW * 1.2;\n}");

/***/ }),

/***/ "./src/shaders/save.frag":
/*!*******************************!*\
  !*** ./src/shaders/save.frag ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\nin vec3 vPosition;\nin vec3 vNormal;\nin vec3 vData;\n\nlayout (location = 0) out vec4 oFragColor0;\nlayout (location = 1) out vec4 oFragColor1;\nlayout (location = 2) out vec4 oFragColor2;\nlayout (location = 3) out vec4 oFragColor3;\n\nvec3 _normalize(vec3 v) {\n    if(length(v) <= 0.0) {\n        return vec3(0.0);\n    } else {\n        return normalize(v);\n    }\n}\n\nvoid main(void) {\n    vec3 vel = _normalize(vNormal.yxz - vData.yxz) * 0.01;\n    oFragColor0 = vec4(vPosition, 1.0);\n    oFragColor1 = vec4(vel, 1.0);\n    oFragColor2 = vec4(vNormal, 1.0);\n    oFragColor3 = vec4(vData, 1.0);\n}");

/***/ }),

/***/ "./src/shaders/save.vert":
/*!*******************************!*\
  !*** ./src/shaders/save.vert ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\nin vec3 aVertexPosition;\nin vec2 aTextureCoord;\nin vec3 aNormal;\nin vec3 aData;\n\nout vec3 vPosition;\nout vec3 vNormal;\nout vec3 vData;\n\nvoid main(void) {\n    gl_Position = vec4(aTextureCoord, 0.0, 1.0);\n    vPosition = aVertexPosition;\n    vNormal = aNormal;\n    vData = aData;\n\n    gl_PointSize = 2.0;\n}");

/***/ }),

/***/ "./src/shaders/sim.frag":
/*!******************************!*\
  !*** ./src/shaders/sim.frag ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\nin vec2 vTextureCoord;\n\nuniform sampler2D uPosMap;\nuniform sampler2D uVelMap;\nuniform sampler2D uExtraMap;\nuniform sampler2D uDataMap;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nuniform float uTime;\nuniform float uMaxRadius;\nuniform int uNum;\n\nlayout (location = 0) out vec4 oFragColor0;\nlayout (location = 1) out vec4 oFragColor1;\nlayout (location = 2) out vec4 oFragColor2;\nlayout (location = 3) out vec4 oFragColor3;\n\n// curlNoise.glsl\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\n// snoise.glsl\nvec4 permute(vec4 x) {  return mod(((x*34.0)+1.0)*x, 289.0);    }\nvec4 taylorInvSqrt(vec4 r) {    return 1.79284291400159 - 0.85373472095314 * r; }\n\nfloat snoise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 = v - i + dot(i, C.xxx) ;\n    \n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n    \n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n    \n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n    \n    float n_ = 1.0/7.0;\n    vec3  ns = n_ * D.wyz - D.xzx;\n    \n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n    \n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );\n    \n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n    \n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n    \n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n    \n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n    \n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n    \n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    \n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise(float x, float y, float z){\n    return snoise(vec3(x, y, z));\n}\n\nvec3 snoiseVec3( vec3 x ){\n\n\tfloat s  = snoise(vec3( x ));\n\tfloat s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n\tfloat s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n\tvec3 c = vec3( s , s1 , s2 );\n\treturn c;\n\n}\n\nvec3 curlNoise( vec3 p ){\n\t\n\tconst float e = .1;\n\tvec3 dx = vec3( e   , 0.0 , 0.0 );\n\tvec3 dy = vec3( 0.0 , e   , 0.0 );\n\tvec3 dz = vec3( 0.0 , 0.0 , e   );\n\n\tvec3 p_x0 = snoiseVec3( p - dx );\n\tvec3 p_x1 = snoiseVec3( p + dx );\n\tvec3 p_y0 = snoiseVec3( p - dy );\n\tvec3 p_y1 = snoiseVec3( p + dy );\n\tvec3 p_z0 = snoiseVec3( p - dz );\n\tvec3 p_z1 = snoiseVec3( p + dz );\n\n\tfloat x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n\tfloat y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n\tfloat z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n\tconst float divisor = 1.0 / ( 2.0 * e );\n\treturn normalize( vec3( x , y , z ) * divisor );\n\n}\n\nfloat map(float v, float a, float b, float c, float d) {\n    float p = (v - a) / ( b - a);\n    return c + ( d - c) * p;\n}\n\nvec3 _normalize(vec3 v) {\n    if(length(v) <= 0.0) {\n        return vec3(0.0);\n    } else {\n        return normalize(v);\n    }\n}\n\n#define radius 3.0\n#define minThres 0.1\n#define maxThres 0.7\n\n#define PI 3.141592653\n#define PI2 PI * 2.0\n\nvoid main(void) {\n    vec3 pos = texture(uPosMap, vTextureCoord).xyz;\n    vec3 vel = texture(uVelMap, vTextureCoord).xyz;\n    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;\n    vec3 data = texture(uDataMap, vTextureCoord).xyz;\n\n    vec3 dirSelf = _normalize(vel);\n    float cycle = data.x;\n\n    // force\n    vec3 acc = vec3(0.0);\n\n    // noise\n    vec3 noise = curlNoise(pos * 0.2 + uTime * 0.05);\n    noise.y += extra.y * 0.5;\n    acc += noise * 0.5;\n    acc.y += noise.y * 0.5;\n\n    vec2 uvParticle;\n    vec3 posParticle, dirParticle, dir;\n    float dist, t, p, f, _radius, cycleParticle, diff;\n\n    float num = float(uNum);\n    _radius = radius * mix(0.5, 2.0, extra.x) * 0.5;\n\n    float cycleSync = 0.0;\n    \n\n    for(int i=0 ; i<uNum; i++) {\n        for(int j=0 ; j<uNum; j++) {\n            uvParticle = vec2(float(i) / num, float(j) / num);\n\n            \n            posParticle = texture(uPosMap, uvParticle).xyz;\n            dist = distance(posParticle, pos);\n\n            if(dist > 0.0 && dist < _radius) {\n\n                // getting particle data\n                cycleParticle = texture(uDataMap, uvParticle).x;\n                dirParticle = _normalize(texture(uVelMap, uvParticle).xyz);\n                dir = normalize(pos - posParticle);\n\n                p = dist / radius;\n\n                // repel\n                f = smoothstep(minThres, 0.0, p);\n                acc += dir * f;\n\n                // pulling\n                f = smoothstep(maxThres, 1.0, p);\n                acc -= dir * f * 0.001;\n\n                // alignment\n                dir = _normalize(dirSelf + dirParticle);\n                f = smoothstep(minThres, maxThres, p);\n                f = sin(f * PI);\n                acc += dir * f * 0.01;\n            }\n\n            // Entrainment\n            if(dist > 0.0 && dist < _radius * 0.3) {\n\n                diff = cycleParticle - cycle;\n                if(diff > PI) {\n                    diff -= PI2;\n                } \n                if(diff < -PI) {\n                    diff += PI2;\n                }\n                cycleSync += diff;\n            }\n        }\n    }\n\n    // pulling back to center\n    dist = length(pos.xz);\n    f = smoothstep(uMaxRadius * 0.25, uMaxRadius * 0.8, dist);\n    dir = _normalize(vec3(pos.x, 0.0, pos.z));\n    acc -= dir * f;    \n\n    f = smoothstep(0.2, 0.0, pos.y);\n    acc.y += f * mix(0.5, 1.0, data.y);\n\n    f = smoothstep(0.5, 3.5, pos.y);\n    acc.y -= f * mix(0.5, 1.0, data.z);\n\n    acc.y *= 0.5;\n\n    float speedOffset = mix(1.0, 2.0, extra.y);\n    vel += acc * 0.0001 * speedOffset * 32.0 / num;\n\n    pos += vel;\n    vel *= 0.956;\n\n    // write back cycle\n    cycle += (mix(0.1, 0.12, extra.z) + cycleSync * 0.0005 * mix(0.5, 1.0, extra.x)) * 0.5;\n    cycle = mod(cycle, PI * 2.0);\n    data.x = cycle;\n\n    oFragColor0 = vec4(pos, 1.0);\n    oFragColor1 = vec4(vel, 1.0);\n    oFragColor2 = vec4(extra, 1.0);\n    oFragColor3 = vec4(data, 1.0);\n}");

/***/ })

/******/ });