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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheet_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylesheet_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__starsBackground_jpg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__starsBackground_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__starsBackground_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainTheme_mp3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainTheme_mp3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mainTheme_mp3__);
// var audio = require('simple-audio');





var load = (function() {
    // Function which returns a function: https://davidwalsh.name/javascript-functions
    function _load(tag) {
        return function(url) {
            // This promise will be used by Promise.all to determine success or failure
            return new Promise(function(resolve, reject) {
                var element = document.createElement(tag);
                var parent = 'body';
                var attr = 'src';

                // Important success and error for the promise
                switch(tag){
                default:
                    element.onload = function() {
                        console.log('onload');
                        resolve(element);
                    };
                    break;
                case 'audio':
                    element.oncanplay = function() {
                        console.log('oncanplay');
                        resolve(element);
                    };
                }
                element.onerror = function() {
                    console.log('onerror');
                    reject(url);
                };


                // Need to set different attributes depending on tag type
                switch(tag) {
                case 'script':
                    element.async = true;
                    break;
                case 'link':
                    element.type = 'text/css';
                    element.rel = 'stylesheet';
                    attr = 'href';
                    parent = 'head';
                    break;
                case 'audio':
                    element.type = 'audio/mpeg';
                }

                // // Inject into document to kick off loading
                element[attr] = url;
                // document[parent].appendChild(element);
            });
        };
    }

    return {
        css: _load('link'),
        js: _load('script'),
        img: _load('img'),
        audio: _load('audio')
    }
})();

// Usage:  Load different file types with one callback
Promise.all([
    load.img(__WEBPACK_IMPORTED_MODULE_1__starsBackground_jpg___default.a),
    load.audio(__WEBPACK_IMPORTED_MODULE_2__mainTheme_mp3___default.a)
]).then(function(elements) {
    console.log('Everything has loaded!');
    behave(elements);
}).catch(function() {
    console.log('Oh no, epic failure!');
});

function blockchainAlliance() {
    var element = document.createElement('div');
    element.innerHTML = '<h1>BLOCKCHAIN ALLIANCE FOR GOOD<sub>The Blockchain Manifesto</sub></h1>';
    return element;
}
function shortTimeAgo() {
    var element = document.createElement('div');
    element.innerHTML = '<p id="startA">A short time ago in a browser very,<BR> very close....</p>';
    return element;
}
function background(backgroundElement) {
    var element = document.createElement('div');
    // Add the image to our existing div.
    element.appendChild(backgroundElement);
    return element;
}


const timeout = function (delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

async function timer (timeOut) {
    console.log('timer started')
    await Promise.resolve(timeout(timeOut));
    console.log('timer finished')
}

async function behave(elements){
    var theShortTimeAgo = shortTimeAgo();
    document.body.appendChild(theShortTimeAgo);
    await timer(5000);
    document.body.removeChild(theShortTimeAgo);

    // var soundTrack = document.getElementById("soundTrack");
    document.body.appendChild(elements[1]);
    elements[1].play();
    document.body.appendChild(background(elements[0]));

    var theBlockchainAlliance = blockchainAlliance();
    document.body.appendChild(theBlockchainAlliance);
    await timer(5000);
    document.body.removeChild(theBlockchainAlliance);

    // document.body.appendChild(scrollingText());
}

// behave();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./stylesheet.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./stylesheet.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Droid+Sans:400,700);", ""]);

// module
exports.push([module.i, "* { padding: 0; margin: 0; }\r\n\r\nbody, html\r\n{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-family: \"Droid Sans\", arial, verdana, sans-serif;\r\n\tfont-weight: 700;\r\n\tcolor: #b0a100;\r\n\tbackground-color: #000;\r\n\toverflow: hidden;\r\n\tbackground-size: cover;\r\n}\r\n\r\np#startA\r\n {\r\n\t font-size: 35px;\r\n\t font-size: 3.5vw;\r\n\t font-family: \"Calibri Light\";\r\n\t position: relative;\r\n\t text-align: left;\r\n\t width: 100%;\r\n\t /*font-size: 200%;*/\r\n\t /*font-weight: 400;*/\r\n\t margin: 20% 20vw;\r\n\t color: #0a63cb;\r\n\t opacity: 0;\r\n\t z-index: 1;\r\n\t -webkit-animation: intro 5s ease-out;\r\n\t -moz-animation: intro 5s ease-out;\r\n\t -ms-animation: intro 5s ease-out;\r\n\t -o-animation: intro 5s ease-out;\r\n\t animation: intro 5s ease-out;\r\n }\r\n@-webkit-keyframes intro {\r\n\t0% { opacity: 1; }\r\n\t90% { opacity: 1; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\n@-moz-keyframes intro {\r\n\t0% { opacity: 1; }\r\n\t90% { opacity: 1; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\n@-ms-keyframes intro {\r\n\t0% { opacity: 1; }\r\n\t90% { opacity: 1; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\n@-o-keyframes intro {\r\n\t0% { opacity: 1; }\r\n\t90% { opacity: 1; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\n@keyframes intro {\r\n\t0% { opacity: 1; }\r\n\t90% { opacity: 1; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\nh1\r\n{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\t/*left: 50%;*/\r\n\ttop: 25%;\r\n\tfont-size: 100px;\r\n\tfont-size: 10vw;\r\n\t/*font-size: 10em;*/\r\n\ttext-align: center;\r\n\tline-height: 0.8em;\r\n\tletter-spacing: -0.05em;\r\n\tcolor: #000;\r\n\ttext-shadow: -0.2vw -0.2vw 0 #b0a100, 0.2vw -0.2vw 0 #b0a100, -0.2vw 0.2vw 0 #b0a100, 0.2vw 0.2vw 0 #b0a100;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n\t-webkit-animation: logo 5s ease-out 0s;\r\n\t-moz-animation: logo 5s ease-out 0s;\r\n\t-ms-animation: logo 5s ease-out 0s;\r\n\t-o-animation: logo 5s ease-out 0s;\r\n\tanimation: logo 5s ease-out 0s;\r\n}\r\n\r\nh1 sub\r\n{\r\n\tdisplay: block;\r\n\tfont-size: 0.3em;\r\n\tletter-spacing: 0;\r\n\tline-height: 0.8em;\r\n}\r\n\r\n@-webkit-keyframes logo {\r\n\t0% { -webkit-transform: scale(1); opacity: 1; }\r\n\t50% { opacity: 1; }\r\n\t100% { -webkit-transform: scale(0.1); opacity: 0; }\r\n}\r\n\r\n@-moz-keyframes logo {\r\n\t0% { -moz-transform: scale(1); opacity: 1; }\r\n\t50% { opacity: 1; }\r\n\t100% { -moz-transform: scale(0.1); opacity: 0; }\r\n}\r\n\r\n@-ms-keyframes logo {\r\n\t0% { -ms-transform: scale(1); opacity: 1; }\r\n\t50% { opacity: 1; }\r\n\t100% { -ms-transform: scale(0.1); opacity: 0; }\r\n}\r\n\r\n@-o-keyframes logo {\r\n\t0% { -o-transform: scale(1); opacity: 1; }\r\n\t50% { opacity: 1; }\r\n\t100% { -o-transform: scale(0.1); opacity: 0; }\r\n}\r\n\r\n@keyframes logo {\r\n\t0% { transform: scale(1); opacity: 1; }\r\n\t50% { opacity: 1; }\r\n\t100% { transform: scale(0.1); opacity: 0; }\r\n}\r\n\r\n/* the interesting 3D scrolling stuff */\r\n#titles\r\n{\r\n\tposition: absolute;\r\n\t/*width: 18em;*/\r\n\twidth: 100%;\r\n\theight: 50em;\r\n\tbottom: 0;\r\n\t/*left: 50%;*/\r\n\t/*margin-left: -9em;*/\r\n\t/*font-size: 350%;*/\r\n\tfont-size: 60px;\r\n\tfont-size: 6vw;\r\n\ttext-align: justify;\r\n\toverflow: hidden;\r\n\t-webkit-transform-origin: 50% 100%;\r\n\t-moz-transform-origin: 50% 100%;\r\n\t-ms-transform-origin: 50% 100%;\r\n\t-o-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-transform: perspective(30vw) rotateX(25deg);\r\n\t-moz-transform: perspective(30vw) rotateX(25deg);\r\n\t-ms-transform: perspective(30vw) rotateX(25deg);\r\n\t-o-transform: perspective(30vw) rotateX(25deg);\r\n\ttransform: perspective(30vw) rotateX(25deg);\r\n}\r\n\r\n#titles:after\r\n{\r\n\tposition: absolute;\r\n\tcontent: ' ';\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbottom: 60%;\r\n\tbackground-image: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);\r\n\tbackground-image: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);\r\n\tbackground-image: -ms-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);\r\n\tbackground-image: -o-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);\r\n\tbackground-image: linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);\r\n\tpointer-events: none;\r\n}\r\n\r\n#titles p\r\n{\r\n\ttext-align: justify;\r\n\tmargin: 0.8em 0;\r\n}\r\n\r\n#titles p.center\r\n{\r\n\ttext-align: center;\r\n}\r\n\r\n#titles a\r\n{\r\n\tcolor: #b0a100;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n#titlecontent\r\n{\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\t-webkit-animation: scroll 700s linear 8s infinite;\r\n\t-moz-animation: scroll 700s linear 8s infinite;\r\n\t-ms-animation: scroll 700s linear 8s infinite;\r\n\t-o-animation: scroll 700s linear 8s infinite;\r\n\tanimation: scroll 700s linear 8s infinite;\r\n}\r\n\r\n/* animation */\r\n@-webkit-keyframes scroll {\r\n\t0% { top: 100%; }\r\n\t100% { top: -770%; }\r\n}\r\n\r\n@-moz-keyframes scroll {\r\n\t0% { top: 100%; }\r\n\t100% { top: -770%; }\r\n}\r\n\r\n@-ms-keyframes scroll {\r\n\t0% { top: 100%; }\r\n\t100% { top: -770%; }\r\n}\r\n\r\n@-o-keyframes scroll {\r\n\t0% { top: 100%; }\r\n\t100% { top: -770%; }\r\n}\r\n\r\n@keyframes scroll {\r\n\t0% { top: 100%; }\r\n\t100% { top: -770%; }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 5 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e3c6f7846ffbdbf9ddb6546b52710581.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21e5cfecc9198693ec28bef2a0e396a7.mp3";

/***/ })
/******/ ]);