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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/debug/debug.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alfrid/src/alfrid.js":
/*!*******************************************!*\
  !*** ./node_modules/alfrid/src/alfrid.js ***!
  \*******************************************/
/*! exports provided: GL, GLTool, GLShader, Mesh, GLTexture, FrameBuffer, GLCubeTexture, Camera, CameraOrtho, CameraPerspective, Ray, Draw, DrawAxis, DrawDotsPlane, DrawLine, DrawBall, DrawCopy, DrawCamera, Geom, Object3D, FboArray, FboPingPong, loadBinary, loadHdr, loadDds, loadObj, checkWebGL2, EaseNumber, TweenNumber, SpringNumber, OrbitalControl, BitSwitch, HitTestor, Scene, parseHdr, parseDds, parseObj, WebGLNumber, WebGLConst, ShaderLibs */
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

/* harmony import */ var _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./utils/WebGLNumber */ "./node_modules/alfrid/src/utils/WebGLNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLNumber", function() { return _utils_WebGLNumber__WEBPACK_IMPORTED_MODULE_36__["WebGLNumber"]; });

/* harmony import */ var _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./utils/WebGLConst */ "./node_modules/alfrid/src/utils/WebGLConst.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLConst", function() { return _utils_WebGLConst__WEBPACK_IMPORTED_MODULE_37__["WebGLConst"]; });

/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shader */ "./node_modules/alfrid/src/shader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShaderLibs", function() { return _shader__WEBPACK_IMPORTED_MODULE_38__["ShaderLibs"]; });

/* harmony import */ var _utils_polyfixes__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./utils/polyfixes */ "./node_modules/alfrid/src/utils/polyfixes.js");
/* harmony import */ var _utils_polyfixes__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfixes__WEBPACK_IMPORTED_MODULE_39__);
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
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/node-libs-browser/node_modules/events/events.js");
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
      if (mSource instanceof WebGL2RenderingContext) {
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
        gl.drawElements(drawType, mMesh.numItems, gl.UNSIGNED_SHORT, 0);
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
          gl.texImage2D(
            target,
            level,
            this._params.internalFormat,
            this._params.format,
            this._params.type,
            this._source[index]
          );
        } else {
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
/* harmony import */ var _shader_basic_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shader/basic.vert */ "./node_modules/alfrid/src/shader/basic.vert");
/* harmony import */ var _shader_basic_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shader/basic.frag */ "./node_modules/alfrid/src/shader/basic.frag");






function GLShader(mVertexShader, mFragmentShader) {
  this.vertexShader = mVertexShader || _shader_basic_vert__WEBPACK_IMPORTED_MODULE_3__["default"];
  this.fragmentShader = mFragmentShader || _shader_basic_frag__WEBPACK_IMPORTED_MODULE_4__["default"];
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
/*! exports provided: GLTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTexture", function() { return GLTexture; });
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
    _indices = new Uint16Array(mData);
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
/* harmony import */ var _shader_axis_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shader/axis.vert */ "./node_modules/alfrid/src/shader/axis.vert");
/* harmony import */ var _shader_axis_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader/axis.frag */ "./node_modules/alfrid/src/shader/axis.frag");




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
      .useProgram(_shader_axis_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _shader_axis_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
/* harmony import */ var _shader_dots_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shader/dots.vert */ "./node_modules/alfrid/src/shader/dots.vert");
/* harmony import */ var _shader_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader/simpleColor.frag */ "./node_modules/alfrid/src/shader/simpleColor.frag");




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
      .useProgram(_shader_dots_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _shader_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
/* harmony import */ var _shader_line_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shader/line.vert */ "./node_modules/alfrid/src/shader/line.vert");
/* harmony import */ var _shader_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shader/simpleColor.frag */ "./node_modules/alfrid/src/shader/simpleColor.frag");




class DrawLine extends _Draw__WEBPACK_IMPORTED_MODULE_0__["Draw"] {
  constructor(mGL) {
    super(mGL);

    const GL = this._GL;
    const positions = [[0, 0, 0], [1, 0, 0]];

    const indices = [0, 1];
    this.createMesh(GL.LINES)
      .bufferVertex(positions)
      .bufferIndex(indices)
      .useProgram(_shader_line_vert__WEBPACK_IMPORTED_MODULE_1__["default"], _shader_simpleColor_frag__WEBPACK_IMPORTED_MODULE_2__["default"]);

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

/***/ "./node_modules/alfrid/src/shader/axis.frag":
/*!**************************************************!*\
  !*** ./node_modules/alfrid/src/shader/axis.frag ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nuniform float uOpacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(vColor, uOpacity);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/axis.vert":
/*!**************************************************!*\
  !*** ./node_modules/alfrid/src/shader/axis.vert ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\n\nvoid main(void) {\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n  vColor = aColor;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/basic.frag":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/shader/basic.frag ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\n// varying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_FragColor = vec4(1.0);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/basic.vert":
/*!***************************************************!*\
  !*** ./node_modules/alfrid/src/shader/basic.vert ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n// attribute vec3 aNormal;\n\n// uniform mat4 uModelMatrix;\n// uniform mat4 uViewMatrix;\n// uniform mat4 uProjectionMatrix;\n\n// varying vec2 vTextureCoord;\n// varying vec3 vNormal;\n\nvoid main(void) {\n  gl_Position = vec4(aVertexPosition, 1.0);\n  // vTextureCoord = aTextureCoord;\n  // vNormal = aNormal;\n\n  // gl_PointSize = 5.0;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/bigTriangle.vert":
/*!*********************************************************!*\
  !*** ./node_modules/alfrid/src/shader/bigTriangle.vert ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/copy.frag":
/*!**************************************************!*\
  !*** ./node_modules/alfrid/src/shader/copy.frag ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/dots.vert":
/*!**************************************************!*\
  !*** ./node_modules/alfrid/src/shader/dots.vert ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uViewport;\nuniform float uScale;\nuniform float uPointScale;\n\nconst float radius = 0.008;\n\nvoid main(void) {\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition * uScale, 1.0);\n\n\tfloat distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n  gl_PointSize = distOffset * uPointScale;\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/general.vert":
/*!*****************************************************!*\
  !*** ./node_modules/alfrid/src/shader/general.vert ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec3 uTranslate;\nuniform vec3 uScale;\nuniform vec3 uRotation;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvec2 rotate(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, s, -s, c);\n\treturn m * v;\n}\n\nvoid main(void) {\n  vec3 pos = aVertexPosition * uScale;\n  pos.yz = rotate(pos.yz, uRotation.x);\n  pos.xz = rotate(pos.xz, uRotation.y);\n  pos.xy = rotate(pos.xy, uRotation.z);\n  pos += uTranslate;\n\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n  vTextureCoord = aTextureCoord;\n  vNormal = aNormal;\n}");

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
/* harmony import */ var _simpleColor_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simpleColor.frag */ "./node_modules/alfrid/src/shader/simpleColor.frag");
/* harmony import */ var _copy_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy.frag */ "./node_modules/alfrid/src/shader/copy.frag");
/* harmony import */ var _general_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.vert */ "./node_modules/alfrid/src/shader/general.vert");
/* harmony import */ var _bigTriangle_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bigTriangle.vert */ "./node_modules/alfrid/src/shader/bigTriangle.vert");
/* harmony import */ var _skybox_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skybox.vert */ "./node_modules/alfrid/src/shader/skybox.vert");






const ShaderLibs = {
  simpleColorFrag: _simpleColor_frag__WEBPACK_IMPORTED_MODULE_0__["default"],
  copyFrag: _copy_frag__WEBPACK_IMPORTED_MODULE_1__["default"],
  bigTriangleVert: _bigTriangle_vert__WEBPACK_IMPORTED_MODULE_3__["default"],
  generalVert: _general_vert__WEBPACK_IMPORTED_MODULE_2__["default"],
  skyboxVert: _skybox_vert__WEBPACK_IMPORTED_MODULE_4__["default"],
};




/***/ }),

/***/ "./node_modules/alfrid/src/shader/line.vert":
/*!**************************************************!*\
  !*** ./node_modules/alfrid/src/shader/line.vert ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec3 uPosA;\nuniform vec3 uPosB;\n\nvoid main(void) {\n  vec3 pos = mix(uPosA, uPosB, aVertexPosition.x);\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/simpleColor.frag":
/*!*********************************************************!*\
  !*** ./node_modules/alfrid/src/shader/simpleColor.frag ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#define GLSLIFY 1\n\nuniform vec3 uColor;\nuniform float uOpacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(uColor, uOpacity);\n}");

/***/ }),

/***/ "./node_modules/alfrid/src/shader/skybox.vert":
/*!****************************************************!*\
  !*** ./node_modules/alfrid/src/shader/skybox.vert ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// skybox.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n\tgl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\t\n\tvVertex = aVertexPosition;\n\t// vVertex = normalize(aVertexPosition);\n\tvNormal = aNormal;\n}");

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
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/src/scheduler.js");


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
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/node-libs-browser/node_modules/events/events.js");
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
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/src/scheduler.js");
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
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/src/scheduler.js");
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
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/src/scheduler.js");


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
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/src/scheduler.js");


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


const extensionsWebGL1 = [
  "EXT_shader_texture_lod",
  "EXT_sRGB",
  "EXT_frag_depth",
  "OES_texture_float",
  "OES_texture_half_float",
  "OES_texture_float_linear",
  "OES_texture_half_float_linear",
  "OES_standard_derivatives",
  "EXT_texture_filter_anisotropic",
  "EXT_color_buffer_half_float",
  "OES_vertex_array_object",
  "WEBGL_depth_texture",
  "ANGLE_instanced_arrays",
  "WEBGL_color_buffer_float",
  "WEBGL_draw_buffers",
];

const extensionsWebGL2 = [
  "EXT_color_buffer_float",
  "EXT_texture_filter_anisotropic",
  "OES_texture_float_linear",
  "OES_texture_half_float_linear",
];

/**
 * Clear WebGL Context
 *
 * @param {object} mGL the GLTool Instance
 * @returns {object} the object contains all extensions
 */

const getExtensions = (mGL) => {
  const { gl } = mGL;
  const isWebGL2 = gl instanceof WebGL2RenderingContext;
  const extensions = {};
  const extensionsList = isWebGL2 ? extensionsWebGL2 : extensionsWebGL1;
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

/***/ "./node_modules/dat.gui/build/dat.gui.module.js":
/*!******************************************************!*\
  !*** ./node_modules/dat.gui/build/dat.gui.module.js ***!
  \******************************************************/
/*! exports provided: color, controllers, dom, gui, GUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controllers", function() { return controllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gui", function() { return gui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI", function() { return GUI$1; });
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (!this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function ()        {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function ()        {
      dom.addClass(this, 'drag').bind(window, 'touchend', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller,                                   {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=dat.gui.module.js.map


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
 * @param {Type} type Array type, such as Float32Array or Array
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
 * @param {mat2} a matrix to clone
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
 * @param {mat2} a the source matrix
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
 * @param {mat2} a the source matrix
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
 * @param {mat2} a the source matrix
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
 * @param {mat2} a the source matrix
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
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
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
 * @param {mat2} a the matrix to rotate
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
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
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
 * @param {vec2} v Scaling vector
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
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
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
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
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
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
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
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
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
 * @param {mat2} a the matrix to scale
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
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
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
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b, c,
 *  d, tx, ty]
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
 * @param {mat2d} a matrix to clone
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
 * @param {mat2d} a the source matrix
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
 * @param {mat2d} a the source matrix
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
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
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
 * @param {mat2d} a the matrix to rotate
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
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
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
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
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
 * @param {vec2} v Scaling vector
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
 * @param {vec2} v Translation vector
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
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
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
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
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
 * @param {mat2d} a the matrix to scale
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
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
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
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
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
 * @param {mat4} a   the source 4x4 matrix
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
 * @param {mat3} a matrix to clone
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
 * @param {mat3} a the source matrix
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
 * @param {mat3} a the source matrix
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
 * @param {mat3} a the source matrix
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
 * @param {mat3} a the source matrix
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
 * @param {mat3} a the source matrix
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
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
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
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
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
 * @param {mat3} a the matrix to rotate
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
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
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
 * @param {vec2} v Translation vector
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
 * @param {vec2} v Scaling vector
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
 * @param {mat2d} a the matrix to copy
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
* @param {quat} q Quaternion to create matrix from
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
* @param {mat4} a Mat4 to derive the normal matrix from
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
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
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
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
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
 * @param {mat3} a the matrix to scale
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
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
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
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
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
 * @param {mat4} a matrix to clone
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
 * @param {mat4} a the source matrix
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
 * @param {mat4} a the source matrix
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
 * @param {mat4} a the source matrix
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
 * @param {mat4} a the source matrix
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
 * @param {mat4} a the source matrix
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
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
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
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
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
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
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
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
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
 * @param {mat4} a the matrix to rotate
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
 * @param {mat4} a the matrix to rotate
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
 * @param {mat4} a the matrix to rotate
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
 * @param {vec3} v Translation vector
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
 * @param {vec3} v Scaling vector
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
 * @param {vec3} axis the axis to rotate around
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
 * @param {vec3} v Translation vector
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
 * @param {quat2} a Dual Quaternion
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
 * @param  {mat4} mat Matrix to be decomposed (input)
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
 * @param  {mat4} mat Matrix to be decomposed (input)
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
 * @param {mat4} mat Matrix to be decomposed (input)
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
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
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
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
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
 * @param {quat} q Quaternion to create matrix from
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
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
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
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
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
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
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
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
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
 * @param {mat4} a the matrix to scale
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
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
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
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
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
 * @param {vec3} axis the axis around which to rotate
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
 * @param  {quat} q     Quaternion to be decomposed
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
 * @param  {quat} a     Origin unit quaternion 
 * @param  {quat} b     Destination unit quaternion
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
 * @param {quat} a the first operand
 * @param {quat} b the second operand
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
 * @param {quat} a quat to rotate
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
 * @param {quat} a quat to rotate
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
 * @param {quat} a quat to rotate
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
 * @param {quat} a quat to calculate W component of
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
 * @param {quat} a quat to calculate the exponential of
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
 * @param {quat} a quat to calculate the exponential of
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
 * @param {quat} a quat to calculate the exponential of
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
 * @param {quat} a the first operand
 * @param {quat} b the second operand
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
 * @param {quat} a quat to calculate inverse of
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
 * @param {quat} a quat to calculate conjugate of
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
 * @param {mat3} m rotation matrix
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
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
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
 * @param {quat} a the source quaternion
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
 * @param {quat} a the first operand
 * @param {quat} b the second operand
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
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
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
 * @param {quat} a vector to calculate squared length of
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
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
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
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
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
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
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
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
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
 * @param {quat2} a dual quaternion to clone
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
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q a normalized quaternion
 * @param {vec3} t tranlation vector
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
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
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
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
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
 * @param {mat4} a the matrix
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
 * @param {quat2} a the source dual quaternion
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
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
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
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
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
 * @param  {quat2} a Dual Quaternion to be decomposed
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
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
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
 * @param {quat2} a the dual quaternion to rotate
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
 * @param {quat2} a the dual quaternion to rotate
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
 * @param {quat2} a the dual quaternion to rotate
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
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
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
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
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
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
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
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
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
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
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
 * @param {quat2} a the dual quat to scale
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
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
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
 * @param {quat2} a dual quat to calculate inverse of
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
 * @param {quat2} a quat to calculate conjugate of
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
 * @param {quat2} a dual quat to calculate length of
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
 * @param {quat2} a dual quat to calculate squared length of
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
 * @param {quat2} a dual quaternion to normalize
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
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
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
 * @param {vec2} a vector to clone
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
 * @param {vec2} a the source vector
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a vector to ceil
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
 * @param {vec2} a vector to floor
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a vector to round
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
 * @param {vec2} a the vector to scale
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a vector to calculate length of
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
 * @param {vec2} a vector to calculate squared length of
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
 * @param {vec2} a vector to negate
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
 * @param {vec2} a vector to invert
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
 * @param {vec2} a vector to normalize
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
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
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
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
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
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
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
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
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
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
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */

function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
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
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
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
 * @param {vec3} a vector to clone
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
 * @param {vec3} a vector to calculate length of
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
 * @param {vec3} a the source vector
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a vector to ceil
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
 * @param {vec3} a vector to floor
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a vector to round
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
 * @param {vec3} a the vector to scale
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a vector to calculate squared length of
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
 * @param {vec3} a vector to negate
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
 * @param {vec3} a vector to invert
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
 * @param {vec3} a vector to normalize
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
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
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
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
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
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
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
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
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
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
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
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
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
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
 * @param {vec4} a vector to clone
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
 * @param {vec4} a the source vector
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a vector to ceil
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
 * @param {vec4} a vector to floor
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a vector to round
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
 * @param {vec4} a the vector to scale
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a vector to calculate length of
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
 * @param {vec4} a vector to calculate squared length of
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
 * @param {vec4} a vector to negate
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
 * @param {vec4} a vector to invert
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
 * @param {vec4} a vector to normalize
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
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
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
;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
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
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
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
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
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
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
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

/***/ "./node_modules/node-libs-browser/node_modules/events/events.js":
/*!**********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/events/events.js ***!
  \**********************************************************************/
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

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

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

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
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

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

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
    m = $getMaxListeners(target);
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
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
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
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

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

/***/ "./node_modules/scheduling/src/scheduler.js":
/*!**************************************************!*\
  !*** ./node_modules/scheduling/src/scheduler.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// animation frame source
let afSource = window;

// expected frame rate, for defer / usurp tasks
let frameRate = 60;

// time
let startTime = performance.now();
let deltaTime = 0;
let elapsedTime = 0;
let prevTime = startTime;

// tasks
const enterframeTasks = [];
const delayTasks = [];
const deferTasks = [];
const usurpTasks = [];
let highTasks = [];
let nextTasks = [];

// animation frame id
let requestAnimationFrameId = -1;

// indexing
let idTable = 0;

/**
 * Add an enterframe task
 *
 * @param {function} mFunc the function to be called in enterframe
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function addEF(mFunc, mArgs) {
  const id = ++idTable;
  enterframeTasks[id] = { func: mFunc, args: mArgs };
  return id;
}

/**
 * Remove an enterframe task
 *
 * @param {number} mIndex the id of the task to be removed
 * @returns {number} return -1
 */
function removeEF(mIndex) {
  if (enterframeTasks[mIndex] !== undefined) {
    enterframeTasks[mIndex] = null;
  }
  return -1;
}

/**
 * Add a delayed task
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @param {number} mDelay the delay time for the task
 * @returns {number} the id of the task
 */
function delay(mFunc, mArgs, mDelay) {
  const time = performance.now();
  delayTasks.push({ func: mFunc, args: mArgs, delay: mDelay, time });
}

/**
 * Add a task for next frame
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function next(mFunc, mArgs) {
  nextTasks.push({ func: mFunc, args: mArgs });
}

/**
 * Add a deffered task that only execute when there's enough time left in the frame.
 * Otherwise try again in the next frame ( Green threading )
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function defer(mFunc, mArgs) {
  deferTasks.push({ func: mFunc, args: mArgs });
}

/**
 * Add an usurp task, that only execute when there's enough time left in the frame, otherwise abandoned.
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function usurp(mFunc, mArgs) {
  usurpTasks.push({ func: mFunc, args: mArgs });
}

/**
 * Get the delta time from last frame
 *
 * @returns {number} the elapsed time from the last frame
 */
function getDeltaTime() {
  return deltaTime;
}

/**
 * Get the elapsed time from the app starts
 *
 * @returns {number} the elapsed tiem of the app ( in sec )
 */
function getElapsedTime() {
  return elapsedTime;
}

/**
 * Set the animation source of the scheduler
 *
 * @param {object} mSource the source of animation frame, e.g. window or XR
 */
function setRequestAnimationFrameSource(mSource) {
  if(requestAnimationFrameId > -1) {
    window.cancelAnimationFrame(requestAnimationFrameId);
  }
  afSource = mSource;
  loop();
}

/**
 * Set the (expected) frame rate for defer / usurp tasks
 *
 * @param {number} mFrameRate the frame rate
 */
function setFrameRate(mFrameRate) {
  frameRate = mFrameRate;
}

/**
 * Process all scheduled tasks
 */
function process() {
  let i = 0;
  let task;
  let interval = 1000 / frameRate;
  let current = 0;

  // enterframe tasks
  for (i = 0; i < enterframeTasks.length; i++) {
    task = enterframeTasks[i];
    if (task !== null && task !== undefined) {
      task.func(task.args);
    }
  }

  // high priority tasks
  while (highTasks.length > 0) {
    task = highTasks.pop();
    task.func(task.args);
  }

  // get current time
  let currentTime = performance.now();
  elapsedTime = (currentTime - startTime) / 1000;
  deltaTime = currentTime - prevTime;

  // delay tasks
  for (i = 0; i < delayTasks.length; i++) {
    task = delayTasks[i];
    if (currentTime - task.time > task.delay) {
      task.func(task.args);
      delayTasks.splice(i, 1);
    }
  }

  // defer tasks
  currentTime = performance.now();
  while (deferTasks.length > 0) {
    task = deferTasks.shift();
    current = performance.now();
    if (current - currentTime < interval) {
      task.func(task.args);
    } else {
      deferTasks.unshift(task);
      break;
    }
  }

  // usurp tasks
  currentTime = performance.now();
  while (usurpTasks.length > 0) {
    task = usurpTasks.shift();
    current = performance.now();
    if (current - currentTime < interval) {
      task.func(task.args);
    }
    // else do nothing, tasks abandoned
  }

  // save time
  prevTime = currentTime;

  // clear tasks
  highTasks = highTasks.concat(nextTasks);
  nextTasks = [];
}

/**
 * Looping
 */
function loop() {
  process();
  requestAnimationFrameId = afSource.requestAnimationFrame(loop);
}

// start the engine
loop();

// exports
/* harmony default export */ __webpack_exports__["default"] = ({
  addEF,
  removeEF,
  delay,
  next,
  defer,
  usurp,
  setRequestAnimationFrameSource,
  setFrameRate,
  getElapsedTime,
  getDeltaTime,
});


/***/ }),

/***/ "./node_modules/stats.js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/stats.js/build/stats.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){ true?module.exports=e():undefined})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});


/***/ }),

/***/ "./src/js/debug/debug.js":
/*!*******************************!*\
  !*** ./src/js/debug/debug.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scheduling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scheduling */ "./node_modules/scheduling/src/scheduler.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/src/alfrid.js");
// debug.js



 // INIT DAT-GUI

window.gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__["default"].GUI({
  width: 300
});
const div = document.body.querySelector(".dg.ac");
div.style.zIndex = "999";

if (alfrid__WEBPACK_IMPORTED_MODULE_3__["GL"].isMobile) {
  dat_gui__WEBPACK_IMPORTED_MODULE_0__["default"].GUI.toggleHide();
} // STATS


const stats = new stats_js__WEBPACK_IMPORTED_MODULE_1___default.a();
!alfrid__WEBPACK_IMPORTED_MODULE_3__["GL"].isMobile && document.body.appendChild(stats.domElement); // document.body.appendChild(stats.domElement);

scheduling__WEBPACK_IMPORTED_MODULE_2__["default"].addEF(() => stats.update());

/***/ })

/******/ });