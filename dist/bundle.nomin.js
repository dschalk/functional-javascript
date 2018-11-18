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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var thunk = __webpack_require__(43);
exports.thunk = thunk;
/**
 * A factory for the DOM driver function.
 *
 * Takes a `container` to define the target on the existing DOM which this
 * driver will operate on, and an `options` object as the second argument. The
 * input to this driver is a stream of virtual DOM objects, or in other words,
 * Snabbdom "VNode" objects. The output of this driver is a "DOMSource": a
 * collection of Observables queried with the methods `select()` and `events()`.
 *
 * `DOMSource.select(selector)` returns a new DOMSource with scope restricted to
 * the element(s) that matches the CSS `selector` given.
 *
 * `DOMSource.events(eventType, options)` returns a stream of events of
 * `eventType` happening on the elements that match the current DOMSource. The
 * returned stream is an *xstream* Stream if you use `@cycle/xstream-run` to run
 * your app with this driver, or it is an RxJS Observable if you use
 * `@cycle/rxjs-run`, and so forth. The `options` parameter can have the field
 * `useCapture`, which is by default `false`, except it is `true` for event
 * types that do not bubble. Read more here
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * about the `useCapture` and its purpose.
 *
 * `DOMSource.elements()` returns a stream of the DOM element(s) matched by the
 * selectors in the DOMSource. Also, `DOMSource.select(':root').elements()`
 * returns a stream of DOM element corresponding to the root (or container) of
 * the app on the DOM.
 *
 * @param {(String|HTMLElement)} container the DOM selector for the element
 * (or the element itself) to contain the rendering of the VTrees.
 * @param {DOMDriverOptions} options an object with two optional fields:
 * `transposition: boolean` enables/disables transposition of inner streams in
 * the virtual DOM tree, `modules: array` contains additional Snabbdom modules.
 * @return {Function} the DOM driver function. The function expects a stream of
 * of VNode as input, and outputs the DOMSource object.
 * @function makeDOMDriver
 */
var makeDOMDriver_1 = __webpack_require__(45);
exports.makeDOMDriver = makeDOMDriver_1.makeDOMDriver;
/**
 * A factory for the HTML driver function.
 *
 * Takes an `effect` callback function and an `options` object as arguments. The
 * input to this driver is a stream of virtual DOM objects, or in other words,
 * Snabbdom "VNode" objects. The output of this driver is a "DOMSource": a
 * collection of Observables queried with the methods `select()` and `events()`.
 *
 * The HTML Driver is supplementary to the DOM Driver. Instead of producing
 * elements on the DOM, it generates HTML as strings and does a side effect on
 * those HTML strings. That side effect is described by the `effect` callback
 * function. So, if you want to use the HTML Driver on the server-side to render
 * your application as HTML and send as a response (which is the typical use
 * case for the HTML Driver), you need to pass something like the
 * `html => response.send(html)` function as the `effect` argument. This way,
 * the driver knows what side effect to cause based on the HTML string it just
 * rendered.
 *
 * The HTML driver is useful only for that side effect in the `effect` callback.
 * It can be considered a sink-only driver. However, in order to serve as a
 * transparent replacement to the DOM Driver when rendering from the server, the
 * HTML driver returns a source object that behaves just like the DOMSource.
 * This helps reuse the same application that is written for the DOM Driver.
 * This fake DOMSource returns empty streams when you query it, because there
 * are no user events on the server.
 *
 * `DOMSource.select(selector)` returns a new DOMSource with scope restricted to
 * the element(s) that matches the CSS `selector` given.
 *
 * `DOMSource.events(eventType, options)` returns an empty stream. The returned
 * stream is an *xstream* Stream if you use `@cycle/xstream-run` to run your app
 * with this driver, or it is an RxJS Observable if you use `@cycle/rxjs-run`,
 * and so forth.
 *
 * `DOMSource.elements()` returns the stream of HTML string rendered from your
 * sink virtual DOM stream.
 *
 * @param {Function} effect a callback function that takes a string of rendered
 * HTML as input and should run a side effect, returning nothing.
 * @param {HTMLDriverOptions} options an object with one optional field:
 * `transposition: boolean` enables/disables transposition of inner streams in
 * the virtual DOM tree.
 * @return {Function} the HTML driver function. The function expects a stream of
 * of VNode as input, and outputs the DOMSource object.
 * @function makeHTMLDriver
 */
var makeHTMLDriver_1 = __webpack_require__(109);
exports.makeHTMLDriver = makeHTMLDriver_1.makeHTMLDriver;
/**
 * A factory function to create mocked DOMSource objects, for testing purposes.
 *
 * Takes a `streamAdapter` and a `mockConfig` object as arguments, and returns
 * a DOMSource that can be given to any Cycle.js app that expects a DOMSource in
 * the sources, for testing.
 *
 * The `streamAdapter` parameter is a package such as `@cycle/xstream-adapter`,
 * `@cycle/rxjs-adapter`, etc. Import it as `import a from '@cycle/rx-adapter`,
 * then provide it to `mockDOMSource. This is important so the DOMSource created
 * knows which stream library should it use to export its streams when you call
 * `DOMSource.events()` for instance.
 *
 * The `mockConfig` parameter is an object specifying selectors, eventTypes and
 * their streams. Example:
 *
 * ```js
 * const domSource = mockDOMSource(RxAdapter, {
 *   '.foo': {
 *     'click': Rx.Observable.of({target: {}}),
 *     'mouseover': Rx.Observable.of({target: {}}),
 *   },
 *   '.bar': {
 *     'scroll': Rx.Observable.of({target: {}}),
 *     elements: Rx.Observable.of({tagName: 'div'}),
 *   }
 * });
 *
 * // Usage
 * const click$ = domSource.select('.foo').events('click');
 * const element$ = domSource.select('.bar').elements();
 * ```
 *
 * The mocked DOM Source supports isolation. It has the functions `isolateSink`
 * and `isolateSource` attached to it, and performs simple isolation using
 * classNames. *isolateSink* with scope `foo` will append the class `___foo` to
 * the stream of virtual DOM nodes, and *isolateSource* with scope `foo` will
 * perform a conventional `mockedDOMSource.select('.__foo')` call.
 *
 * @param {Object} mockConfig an object where keys are selector strings
 * and values are objects. Those nested objects have `eventType` strings as keys
 * and values are streams you created.
 * @return {Object} fake DOM source object, with an API containing `select()`
 * and `events()` and `elements()` which can be used just like the DOM Driver's
 * DOMSource.
 *
 * @function mockDOMSource
 */
var mockDOMSource_1 = __webpack_require__(131);
exports.mockDOMSource = mockDOMSource_1.mockDOMSource;
/**
 * The hyperscript function `h()` is a function to create virtual DOM objects,
 * also known as VNodes. Call
 *
 * ```js
 * h('div.myClass', {style: {color: 'red'}}, [])
 * ```
 *
 * to create a VNode that represents a `DIV` element with className `myClass`,
 * styled with red color, and no children because the `[]` array was passed. The
 * API is `h(tagOrSelector, optionalData, optionalChildrenOrText)`.
 *
 * However, usually you should use "hyperscript helpers", which are shortcut
 * functions based on hyperscript. There is one hyperscript helper function for
 * each DOM tagName, such as `h1()`, `h2()`, `div()`, `span()`, `label()`,
 * `input()`. For instance, the previous example could have been written
 * as:
 *
 * ```js
 * div('.myClass', {style: {color: 'red'}}, [])
 * ```
 *
 * There are also SVG helper functions, which apply the appropriate SVG
 * namespace to the resulting elements. `svg()` function creates the top-most
 * SVG element, and `svg.g`, `svg.polygon`, `svg.circle`, `svg.path` are for
 * SVG-specific child elements. Example:
 *
 * ```js
 * svg({width: 150, height: 150}, [
 *   svg.polygon({
 *     attrs: {
 *       class: 'triangle',
 *       points: '20 0 20 150 150 20'
 *     }
 *   })
 * ])
 * ```
 *
 * @function h
 */
var hyperscript_1 = __webpack_require__(17);
exports.h = hyperscript_1.h;
var hyperscript_helpers_1 = __webpack_require__(132);
exports.svg = hyperscript_helpers_1.default.svg;
exports.a = hyperscript_helpers_1.default.a;
exports.abbr = hyperscript_helpers_1.default.abbr;
exports.address = hyperscript_helpers_1.default.address;
exports.area = hyperscript_helpers_1.default.area;
exports.article = hyperscript_helpers_1.default.article;
exports.aside = hyperscript_helpers_1.default.aside;
exports.audio = hyperscript_helpers_1.default.audio;
exports.b = hyperscript_helpers_1.default.b;
exports.base = hyperscript_helpers_1.default.base;
exports.bdi = hyperscript_helpers_1.default.bdi;
exports.bdo = hyperscript_helpers_1.default.bdo;
exports.blockquote = hyperscript_helpers_1.default.blockquote;
exports.body = hyperscript_helpers_1.default.body;
exports.br = hyperscript_helpers_1.default.br;
exports.button = hyperscript_helpers_1.default.button;
exports.canvas = hyperscript_helpers_1.default.canvas;
exports.caption = hyperscript_helpers_1.default.caption;
exports.cite = hyperscript_helpers_1.default.cite;
exports.code = hyperscript_helpers_1.default.code;
exports.col = hyperscript_helpers_1.default.col;
exports.colgroup = hyperscript_helpers_1.default.colgroup;
exports.dd = hyperscript_helpers_1.default.dd;
exports.del = hyperscript_helpers_1.default.del;
exports.dfn = hyperscript_helpers_1.default.dfn;
exports.dir = hyperscript_helpers_1.default.dir;
exports.div = hyperscript_helpers_1.default.div;
exports.dl = hyperscript_helpers_1.default.dl;
exports.dt = hyperscript_helpers_1.default.dt;
exports.em = hyperscript_helpers_1.default.em;
exports.embed = hyperscript_helpers_1.default.embed;
exports.fieldset = hyperscript_helpers_1.default.fieldset;
exports.figcaption = hyperscript_helpers_1.default.figcaption;
exports.figure = hyperscript_helpers_1.default.figure;
exports.footer = hyperscript_helpers_1.default.footer;
exports.form = hyperscript_helpers_1.default.form;
exports.h1 = hyperscript_helpers_1.default.h1;
exports.h2 = hyperscript_helpers_1.default.h2;
exports.h3 = hyperscript_helpers_1.default.h3;
exports.h4 = hyperscript_helpers_1.default.h4;
exports.h5 = hyperscript_helpers_1.default.h5;
exports.h6 = hyperscript_helpers_1.default.h6;
exports.head = hyperscript_helpers_1.default.head;
exports.header = hyperscript_helpers_1.default.header;
exports.hgroup = hyperscript_helpers_1.default.hgroup;
exports.hr = hyperscript_helpers_1.default.hr;
exports.html = hyperscript_helpers_1.default.html;
exports.i = hyperscript_helpers_1.default.i;
exports.iframe = hyperscript_helpers_1.default.iframe;
exports.img = hyperscript_helpers_1.default.img;
exports.input = hyperscript_helpers_1.default.input;
exports.ins = hyperscript_helpers_1.default.ins;
exports.kbd = hyperscript_helpers_1.default.kbd;
exports.keygen = hyperscript_helpers_1.default.keygen;
exports.label = hyperscript_helpers_1.default.label;
exports.legend = hyperscript_helpers_1.default.legend;
exports.li = hyperscript_helpers_1.default.li;
exports.link = hyperscript_helpers_1.default.link;
exports.main = hyperscript_helpers_1.default.main;
exports.map = hyperscript_helpers_1.default.map;
exports.mark = hyperscript_helpers_1.default.mark;
exports.menu = hyperscript_helpers_1.default.menu;
exports.meta = hyperscript_helpers_1.default.meta;
exports.nav = hyperscript_helpers_1.default.nav;
exports.noscript = hyperscript_helpers_1.default.noscript;
exports.object = hyperscript_helpers_1.default.object;
exports.ol = hyperscript_helpers_1.default.ol;
exports.optgroup = hyperscript_helpers_1.default.optgroup;
exports.option = hyperscript_helpers_1.default.option;
exports.p = hyperscript_helpers_1.default.p;
exports.param = hyperscript_helpers_1.default.param;
exports.pre = hyperscript_helpers_1.default.pre;
exports.progress = hyperscript_helpers_1.default.progress;
exports.q = hyperscript_helpers_1.default.q;
exports.rp = hyperscript_helpers_1.default.rp;
exports.rt = hyperscript_helpers_1.default.rt;
exports.ruby = hyperscript_helpers_1.default.ruby;
exports.s = hyperscript_helpers_1.default.s;
exports.samp = hyperscript_helpers_1.default.samp;
exports.script = hyperscript_helpers_1.default.script;
exports.section = hyperscript_helpers_1.default.section;
exports.select = hyperscript_helpers_1.default.select;
exports.small = hyperscript_helpers_1.default.small;
exports.source = hyperscript_helpers_1.default.source;
exports.span = hyperscript_helpers_1.default.span;
exports.strong = hyperscript_helpers_1.default.strong;
exports.style = hyperscript_helpers_1.default.style;
exports.sub = hyperscript_helpers_1.default.sub;
exports.sup = hyperscript_helpers_1.default.sup;
exports.table = hyperscript_helpers_1.default.table;
exports.tbody = hyperscript_helpers_1.default.tbody;
exports.td = hyperscript_helpers_1.default.td;
exports.textarea = hyperscript_helpers_1.default.textarea;
exports.tfoot = hyperscript_helpers_1.default.tfoot;
exports.th = hyperscript_helpers_1.default.th;
exports.thead = hyperscript_helpers_1.default.thead;
exports.title = hyperscript_helpers_1.default.title;
exports.tr = hyperscript_helpers_1.default.tr;
exports.u = hyperscript_helpers_1.default.u;
exports.ul = hyperscript_helpers_1.default.ul;
exports.video = hyperscript_helpers_1.default.video;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(7);

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var symbol_observable_1 = __webpack_require__(48);
var NO = {};
exports.NO = NO;
function noop() { }
function copy(a) {
    var l = a.length;
    var b = Array(l);
    for (var i = 0; i < l; ++i) {
        b[i] = a[i];
    }
    return b;
}
function and(f1, f2) {
    return function andFn(t) {
        return f1(t) && f2(t);
    };
}
function _try(c, t, u) {
    try {
        return c.f(t);
    }
    catch (e) {
        u._e(e);
        return NO;
    }
}
var NO_IL = {
    _n: noop,
    _e: noop,
    _c: noop,
};
exports.NO_IL = NO_IL;
// mutates the input
function internalizeProducer(producer) {
    producer._start =
        function _start(il) {
            il.next = il._n;
            il.error = il._e;
            il.complete = il._c;
            this.start(il);
        };
    producer._stop = producer.stop;
}
var StreamSub = (function () {
    function StreamSub(_stream, _listener) {
        this._stream = _stream;
        this._listener = _listener;
    }
    StreamSub.prototype.unsubscribe = function () {
        this._stream.removeListener(this._listener);
    };
    return StreamSub;
}());
var Observer = (function () {
    function Observer(_listener) {
        this._listener = _listener;
    }
    Observer.prototype.next = function (value) {
        this._listener._n(value);
    };
    Observer.prototype.error = function (err) {
        this._listener._e(err);
    };
    Observer.prototype.complete = function () {
        this._listener._c();
    };
    return Observer;
}());
var FromObservable = (function () {
    function FromObservable(observable) {
        this.type = 'fromObservable';
        this.ins = observable;
        this.active = false;
    }
    FromObservable.prototype._start = function (out) {
        this.out = out;
        this.active = true;
        this._sub = this.ins.subscribe(new Observer(out));
        if (!this.active)
            this._sub.unsubscribe();
    };
    FromObservable.prototype._stop = function () {
        if (this._sub)
            this._sub.unsubscribe();
        this.active = false;
    };
    return FromObservable;
}());
var Merge = (function () {
    function Merge(insArr) {
        this.type = 'merge';
        this.insArr = insArr;
        this.out = NO;
        this.ac = 0;
    }
    Merge.prototype._start = function (out) {
        this.out = out;
        var s = this.insArr;
        var L = s.length;
        this.ac = L;
        for (var i = 0; i < L; i++) {
            s[i]._add(this);
        }
    };
    Merge.prototype._stop = function () {
        var s = this.insArr;
        var L = s.length;
        for (var i = 0; i < L; i++) {
            s[i]._remove(this);
        }
        this.out = NO;
    };
    Merge.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    Merge.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Merge.prototype._c = function () {
        if (--this.ac <= 0) {
            var u = this.out;
            if (u === NO)
                return;
            u._c();
        }
    };
    return Merge;
}());
var CombineListener = (function () {
    function CombineListener(i, out, p) {
        this.i = i;
        this.out = out;
        this.p = p;
        p.ils.push(this);
    }
    CombineListener.prototype._n = function (t) {
        var p = this.p, out = this.out;
        if (out === NO)
            return;
        if (p.up(t, this.i)) {
            out._n(p.vals);
        }
    };
    CombineListener.prototype._e = function (err) {
        var out = this.out;
        if (out === NO)
            return;
        out._e(err);
    };
    CombineListener.prototype._c = function () {
        var p = this.p;
        if (p.out === NO)
            return;
        if (--p.Nc === 0) {
            p.out._c();
        }
    };
    return CombineListener;
}());
var Combine = (function () {
    function Combine(insArr) {
        this.type = 'combine';
        this.insArr = insArr;
        this.out = NO;
        this.ils = [];
        this.Nc = this.Nn = 0;
        this.vals = [];
    }
    Combine.prototype.up = function (t, i) {
        var v = this.vals[i];
        var Nn = !this.Nn ? 0 : v === NO ? --this.Nn : this.Nn;
        this.vals[i] = t;
        return Nn === 0;
    };
    Combine.prototype._start = function (out) {
        this.out = out;
        var s = this.insArr;
        var n = this.Nc = this.Nn = s.length;
        var vals = this.vals = new Array(n);
        if (n === 0) {
            out._n([]);
            out._c();
        }
        else {
            for (var i = 0; i < n; i++) {
                vals[i] = NO;
                s[i]._add(new CombineListener(i, out, this));
            }
        }
    };
    Combine.prototype._stop = function () {
        var s = this.insArr;
        var n = s.length;
        var ils = this.ils;
        for (var i = 0; i < n; i++) {
            s[i]._remove(ils[i]);
        }
        this.out = NO;
        this.ils = [];
        this.vals = [];
    };
    return Combine;
}());
var FromArray = (function () {
    function FromArray(a) {
        this.type = 'fromArray';
        this.a = a;
    }
    FromArray.prototype._start = function (out) {
        var a = this.a;
        for (var i = 0, l = a.length; i < l; i++) {
            out._n(a[i]);
        }
        out._c();
    };
    FromArray.prototype._stop = function () {
    };
    return FromArray;
}());
var FromPromise = (function () {
    function FromPromise(p) {
        this.type = 'fromPromise';
        this.on = false;
        this.p = p;
    }
    FromPromise.prototype._start = function (out) {
        var prod = this;
        this.on = true;
        this.p.then(function (v) {
            if (prod.on) {
                out._n(v);
                out._c();
            }
        }, function (e) {
            out._e(e);
        }).then(noop, function (err) {
            setTimeout(function () { throw err; });
        });
    };
    FromPromise.prototype._stop = function () {
        this.on = false;
    };
    return FromPromise;
}());
var Periodic = (function () {
    function Periodic(period) {
        this.type = 'periodic';
        this.period = period;
        this.intervalID = -1;
        this.i = 0;
    }
    Periodic.prototype._start = function (out) {
        var self = this;
        function intervalHandler() { out._n(self.i++); }
        this.intervalID = setInterval(intervalHandler, this.period);
    };
    Periodic.prototype._stop = function () {
        if (this.intervalID !== -1)
            clearInterval(this.intervalID);
        this.intervalID = -1;
        this.i = 0;
    };
    return Periodic;
}());
var Debug = (function () {
    function Debug(ins, arg) {
        this.type = 'debug';
        this.ins = ins;
        this.out = NO;
        this.s = noop;
        this.l = '';
        if (typeof arg === 'string') {
            this.l = arg;
        }
        else if (typeof arg === 'function') {
            this.s = arg;
        }
    }
    Debug.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    Debug.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Debug.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var s = this.s, l = this.l;
        if (s !== noop) {
            try {
                s(t);
            }
            catch (e) {
                u._e(e);
            }
        }
        else if (l) {
            console.log(l + ':', t);
        }
        else {
            console.log(t);
        }
        u._n(t);
    };
    Debug.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Debug.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Debug;
}());
var Drop = (function () {
    function Drop(max, ins) {
        this.type = 'drop';
        this.ins = ins;
        this.out = NO;
        this.max = max;
        this.dropped = 0;
    }
    Drop.prototype._start = function (out) {
        this.out = out;
        this.dropped = 0;
        this.ins._add(this);
    };
    Drop.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Drop.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        if (this.dropped++ >= this.max)
            u._n(t);
    };
    Drop.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Drop.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Drop;
}());
var EndWhenListener = (function () {
    function EndWhenListener(out, op) {
        this.out = out;
        this.op = op;
    }
    EndWhenListener.prototype._n = function () {
        this.op.end();
    };
    EndWhenListener.prototype._e = function (err) {
        this.out._e(err);
    };
    EndWhenListener.prototype._c = function () {
        this.op.end();
    };
    return EndWhenListener;
}());
var EndWhen = (function () {
    function EndWhen(o, ins) {
        this.type = 'endWhen';
        this.ins = ins;
        this.out = NO;
        this.o = o;
        this.oil = NO_IL;
    }
    EndWhen.prototype._start = function (out) {
        this.out = out;
        this.o._add(this.oil = new EndWhenListener(out, this));
        this.ins._add(this);
    };
    EndWhen.prototype._stop = function () {
        this.ins._remove(this);
        this.o._remove(this.oil);
        this.out = NO;
        this.oil = NO_IL;
    };
    EndWhen.prototype.end = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    EndWhen.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    EndWhen.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    EndWhen.prototype._c = function () {
        this.end();
    };
    return EndWhen;
}());
var Filter = (function () {
    function Filter(passes, ins) {
        this.type = 'filter';
        this.ins = ins;
        this.out = NO;
        this.f = passes;
    }
    Filter.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    Filter.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Filter.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var r = _try(this, t, u);
        if (r === NO || !r)
            return;
        u._n(t);
    };
    Filter.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Filter.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Filter;
}());
var FlattenListener = (function () {
    function FlattenListener(out, op) {
        this.out = out;
        this.op = op;
    }
    FlattenListener.prototype._n = function (t) {
        this.out._n(t);
    };
    FlattenListener.prototype._e = function (err) {
        this.out._e(err);
    };
    FlattenListener.prototype._c = function () {
        this.op.inner = NO;
        this.op.less();
    };
    return FlattenListener;
}());
var Flatten = (function () {
    function Flatten(ins) {
        this.type = 'flatten';
        this.ins = ins;
        this.out = NO;
        this.open = true;
        this.inner = NO;
        this.il = NO_IL;
    }
    Flatten.prototype._start = function (out) {
        this.out = out;
        this.open = true;
        this.inner = NO;
        this.il = NO_IL;
        this.ins._add(this);
    };
    Flatten.prototype._stop = function () {
        this.ins._remove(this);
        if (this.inner !== NO)
            this.inner._remove(this.il);
        this.out = NO;
        this.open = true;
        this.inner = NO;
        this.il = NO_IL;
    };
    Flatten.prototype.less = function () {
        var u = this.out;
        if (u === NO)
            return;
        if (!this.open && this.inner === NO)
            u._c();
    };
    Flatten.prototype._n = function (s) {
        var u = this.out;
        if (u === NO)
            return;
        var _a = this, inner = _a.inner, il = _a.il;
        if (inner !== NO && il !== NO_IL)
            inner._remove(il);
        (this.inner = s)._add(this.il = new FlattenListener(u, this));
    };
    Flatten.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Flatten.prototype._c = function () {
        this.open = false;
        this.less();
    };
    return Flatten;
}());
var Fold = (function () {
    function Fold(f, seed, ins) {
        var _this = this;
        this.type = 'fold';
        this.ins = ins;
        this.out = NO;
        this.f = function (t) { return f(_this.acc, t); };
        this.acc = this.seed = seed;
    }
    Fold.prototype._start = function (out) {
        this.out = out;
        this.acc = this.seed;
        out._n(this.acc);
        this.ins._add(this);
    };
    Fold.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
        this.acc = this.seed;
    };
    Fold.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var r = _try(this, t, u);
        if (r === NO)
            return;
        u._n(this.acc = r);
    };
    Fold.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Fold.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Fold;
}());
var Last = (function () {
    function Last(ins) {
        this.type = 'last';
        this.ins = ins;
        this.out = NO;
        this.has = false;
        this.val = NO;
    }
    Last.prototype._start = function (out) {
        this.out = out;
        this.has = false;
        this.ins._add(this);
    };
    Last.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
        this.val = NO;
    };
    Last.prototype._n = function (t) {
        this.has = true;
        this.val = t;
    };
    Last.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Last.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        if (this.has) {
            u._n(this.val);
            u._c();
        }
        else {
            u._e('TODO show proper error');
        }
    };
    return Last;
}());
var MapFlattenListener = (function () {
    function MapFlattenListener(out, op) {
        this.out = out;
        this.op = op;
    }
    MapFlattenListener.prototype._n = function (r) {
        this.out._n(r);
    };
    MapFlattenListener.prototype._e = function (err) {
        this.out._e(err);
    };
    MapFlattenListener.prototype._c = function () {
        this.op.inner = NO;
        this.op.less();
    };
    return MapFlattenListener;
}());
var MapFlatten = (function () {
    function MapFlatten(mapOp) {
        this.type = mapOp.type + "+flatten";
        this.ins = mapOp.ins;
        this.out = NO;
        this.mapOp = mapOp;
        this.inner = NO;
        this.il = NO_IL;
        this.open = true;
    }
    MapFlatten.prototype._start = function (out) {
        this.out = out;
        this.inner = NO;
        this.il = NO_IL;
        this.open = true;
        this.mapOp.ins._add(this);
    };
    MapFlatten.prototype._stop = function () {
        this.mapOp.ins._remove(this);
        if (this.inner !== NO)
            this.inner._remove(this.il);
        this.out = NO;
        this.inner = NO;
        this.il = NO_IL;
    };
    MapFlatten.prototype.less = function () {
        if (!this.open && this.inner === NO) {
            var u = this.out;
            if (u === NO)
                return;
            u._c();
        }
    };
    MapFlatten.prototype._n = function (v) {
        var u = this.out;
        if (u === NO)
            return;
        var _a = this, inner = _a.inner, il = _a.il;
        var s = _try(this.mapOp, v, u);
        if (s === NO)
            return;
        if (inner !== NO && il !== NO_IL)
            inner._remove(il);
        (this.inner = s)._add(this.il = new MapFlattenListener(u, this));
    };
    MapFlatten.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    MapFlatten.prototype._c = function () {
        this.open = false;
        this.less();
    };
    return MapFlatten;
}());
var MapOp = (function () {
    function MapOp(project, ins) {
        this.type = 'map';
        this.ins = ins;
        this.out = NO;
        this.f = project;
    }
    MapOp.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    MapOp.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    MapOp.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var r = _try(this, t, u);
        if (r === NO)
            return;
        u._n(r);
    };
    MapOp.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    MapOp.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return MapOp;
}());
var FilterMapFusion = (function (_super) {
    __extends(FilterMapFusion, _super);
    function FilterMapFusion(passes, project, ins) {
        _super.call(this, project, ins);
        this.type = 'filter+map';
        this.passes = passes;
    }
    FilterMapFusion.prototype._n = function (t) {
        if (!this.passes(t))
            return;
        var u = this.out;
        if (u === NO)
            return;
        var r = _try(this, t, u);
        if (r === NO)
            return;
        u._n(r);
    };
    return FilterMapFusion;
}(MapOp));
var Remember = (function () {
    function Remember(ins) {
        this.type = 'remember';
        this.ins = ins;
        this.out = NO;
    }
    Remember.prototype._start = function (out) {
        this.out = out;
        this.ins._add(out);
    };
    Remember.prototype._stop = function () {
        this.ins._remove(this.out);
        this.out = NO;
    };
    return Remember;
}());
var ReplaceError = (function () {
    function ReplaceError(replacer, ins) {
        this.type = 'replaceError';
        this.ins = ins;
        this.out = NO;
        this.f = replacer;
    }
    ReplaceError.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    ReplaceError.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    ReplaceError.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    ReplaceError.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        try {
            this.ins._remove(this);
            (this.ins = this.f(err))._add(this);
        }
        catch (e) {
            u._e(e);
        }
    };
    ReplaceError.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return ReplaceError;
}());
var StartWith = (function () {
    function StartWith(ins, val) {
        this.type = 'startWith';
        this.ins = ins;
        this.out = NO;
        this.val = val;
    }
    StartWith.prototype._start = function (out) {
        this.out = out;
        this.out._n(this.val);
        this.ins._add(out);
    };
    StartWith.prototype._stop = function () {
        this.ins._remove(this.out);
        this.out = NO;
    };
    return StartWith;
}());
var Take = (function () {
    function Take(max, ins) {
        this.type = 'take';
        this.ins = ins;
        this.out = NO;
        this.max = max;
        this.taken = 0;
    }
    Take.prototype._start = function (out) {
        this.out = out;
        this.taken = 0;
        if (this.max <= 0) {
            out._c();
        }
        else {
            this.ins._add(this);
        }
    };
    Take.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Take.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var m = ++this.taken;
        if (m < this.max) {
            u._n(t);
        }
        else if (m === this.max) {
            u._n(t);
            u._c();
        }
    };
    Take.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Take.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Take;
}());
var Stream = (function () {
    function Stream(producer) {
        this._prod = producer || NO;
        this._ils = [];
        this._stopID = NO;
        this._dl = NO;
        this._d = false;
        this._target = NO;
        this._err = NO;
    }
    Stream.prototype._n = function (t) {
        var a = this._ils;
        var L = a.length;
        if (this._d)
            this._dl._n(t);
        if (L == 1)
            a[0]._n(t);
        else {
            var b = copy(a);
            for (var i = 0; i < L; i++)
                b[i]._n(t);
        }
    };
    Stream.prototype._e = function (err) {
        if (this._err !== NO)
            return;
        this._err = err;
        var a = this._ils;
        var L = a.length;
        this._x();
        if (this._d)
            this._dl._e(err);
        if (L == 1)
            a[0]._e(err);
        else {
            var b = copy(a);
            for (var i = 0; i < L; i++)
                b[i]._e(err);
        }
        if (!this._d && L == 0)
            throw this._err;
    };
    Stream.prototype._c = function () {
        var a = this._ils;
        var L = a.length;
        this._x();
        if (this._d)
            this._dl._c();
        if (L == 1)
            a[0]._c();
        else {
            var b = copy(a);
            for (var i = 0; i < L; i++)
                b[i]._c();
        }
    };
    Stream.prototype._x = function () {
        if (this._ils.length === 0)
            return;
        if (this._prod !== NO)
            this._prod._stop();
        this._err = NO;
        this._ils = [];
    };
    Stream.prototype._stopNow = function () {
        // WARNING: code that calls this method should
        // first check if this._prod is valid (not `NO`)
        this._prod._stop();
        this._err = NO;
        this._stopID = NO;
    };
    Stream.prototype._add = function (il) {
        var ta = this._target;
        if (ta !== NO)
            return ta._add(il);
        var a = this._ils;
        a.push(il);
        if (a.length > 1)
            return;
        if (this._stopID !== NO) {
            clearTimeout(this._stopID);
            this._stopID = NO;
        }
        else {
            var p = this._prod;
            if (p !== NO)
                p._start(this);
        }
    };
    Stream.prototype._remove = function (il) {
        var _this = this;
        var ta = this._target;
        if (ta !== NO)
            return ta._remove(il);
        var a = this._ils;
        var i = a.indexOf(il);
        if (i > -1) {
            a.splice(i, 1);
            if (this._prod !== NO && a.length <= 0) {
                this._err = NO;
                this._stopID = setTimeout(function () { return _this._stopNow(); });
            }
            else if (a.length === 1) {
                this._pruneCycles();
            }
        }
    };
    // If all paths stemming from `this` stream eventually end at `this`
    // stream, then we remove the single listener of `this` stream, to
    // force it to end its execution and dispose resources. This method
    // assumes as a precondition that this._ils has just one listener.
    Stream.prototype._pruneCycles = function () {
        if (this._hasNoSinks(this, [])) {
            this._remove(this._ils[0]);
        }
    };
    // Checks whether *there is no* path starting from `x` that leads to an end
    // listener (sink) in the stream graph, following edges A->B where B is a
    // listener of A. This means these paths constitute a cycle somehow. Is given
    // a trace of all visited nodes so far.
    Stream.prototype._hasNoSinks = function (x, trace) {
        if (trace.indexOf(x) !== -1) {
            return true;
        }
        else if (x.out === this) {
            return true;
        }
        else if (x.out && x.out !== NO) {
            return this._hasNoSinks(x.out, trace.concat(x));
        }
        else if (x._ils) {
            for (var i = 0, N = x._ils.length; i < N; i++) {
                if (!this._hasNoSinks(x._ils[i], trace.concat(x))) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    };
    Stream.prototype.ctor = function () {
        return this instanceof MemoryStream ? MemoryStream : Stream;
    };
    /**
     * Adds a Listener to the Stream.
     *
     * @param {Listener} listener
     */
    Stream.prototype.addListener = function (listener) {
        listener._n = listener.next || noop;
        listener._e = listener.error || noop;
        listener._c = listener.complete || noop;
        this._add(listener);
    };
    /**
     * Removes a Listener from the Stream, assuming the Listener was added to it.
     *
     * @param {Listener<T>} listener
     */
    Stream.prototype.removeListener = function (listener) {
        this._remove(listener);
    };
    /**
     * Adds a Listener to the Stream returning a Subscription to remove that
     * listener.
     *
     * @param {Listener} listener
     * @returns {Subscription}
     */
    Stream.prototype.subscribe = function (listener) {
        this.addListener(listener);
        return new StreamSub(this, listener);
    };
    /**
     * Add interop between most.js and RxJS 5
     *
     * @returns {Stream}
     */
    Stream.prototype[symbol_observable_1.default] = function () {
        return this;
    };
    /**
     * Creates a new Stream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {Stream}
     */
    Stream.create = function (producer) {
        if (producer) {
            if (typeof producer.start !== 'function'
                || typeof producer.stop !== 'function') {
                throw new Error('producer requires both start and stop functions');
            }
            internalizeProducer(producer); // mutates the input
        }
        return new Stream(producer);
    };
    /**
     * Creates a new MemoryStream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {MemoryStream}
     */
    Stream.createWithMemory = function (producer) {
        if (producer) {
            internalizeProducer(producer); // mutates the input
        }
        return new MemoryStream(producer);
    };
    /**
     * Creates a Stream that does nothing when started. It never emits any event.
     *
     * Marble diagram:
     *
     * ```text
     *          never
     * -----------------------
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    Stream.never = function () {
        return new Stream({ _start: noop, _stop: noop });
    };
    /**
     * Creates a Stream that immediately emits the "complete" notification when
     * started, and that's it.
     *
     * Marble diagram:
     *
     * ```text
     * empty
     * -|
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    Stream.empty = function () {
        return new Stream({
            _start: function (il) { il._c(); },
            _stop: noop,
        });
    };
    /**
     * Creates a Stream that immediately emits an "error" notification with the
     * value you passed as the `error` argument when the stream starts, and that's
     * it.
     *
     * Marble diagram:
     *
     * ```text
     * throw(X)
     * -X
     * ```
     *
     * @factory true
     * @param error The error event to emit on the created stream.
     * @return {Stream}
     */
    Stream.throw = function (error) {
        return new Stream({
            _start: function (il) { il._e(error); },
            _stop: noop,
        });
    };
    /**
     * Creates a stream from an Array, Promise, or an Observable.
     *
     * @factory true
     * @param {Array|Promise|Observable} input The input to make a stream from.
     * @return {Stream}
     */
    Stream.from = function (input) {
        if (typeof input[symbol_observable_1.default] === 'function') {
            return Stream.fromObservable(input);
        }
        else if (typeof input.then === 'function') {
            return Stream.fromPromise(input);
        }
        else if (Array.isArray(input)) {
            return Stream.fromArray(input);
        }
        throw new TypeError("Type of input to from() must be an Array, Promise, or Observable");
    };
    /**
     * Creates a Stream that immediately emits the arguments that you give to
     * *of*, then completes.
     *
     * Marble diagram:
     *
     * ```text
     * of(1,2,3)
     * 123|
     * ```
     *
     * @factory true
     * @param a The first value you want to emit as an event on the stream.
     * @param b The second value you want to emit as an event on the stream. One
     * or more of these values may be given as arguments.
     * @return {Stream}
     */
    Stream.of = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        return Stream.fromArray(items);
    };
    /**
     * Converts an array to a stream. The returned stream will emit synchronously
     * all the items in the array, and then complete.
     *
     * Marble diagram:
     *
     * ```text
     * fromArray([1,2,3])
     * 123|
     * ```
     *
     * @factory true
     * @param {Array} array The array to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromArray = function (array) {
        return new Stream(new FromArray(array));
    };
    /**
     * Converts a promise to a stream. The returned stream will emit the resolved
     * value of the promise, and then complete. However, if the promise is
     * rejected, the stream will emit the corresponding error.
     *
     * Marble diagram:
     *
     * ```text
     * fromPromise( ----42 )
     * -----------------42|
     * ```
     *
     * @factory true
     * @param {Promise} promise The promise to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromPromise = function (promise) {
        return new Stream(new FromPromise(promise));
    };
    /**
     * Converts an Observable into a Stream.
     *
     * @factory true
     * @param {any} observable The observable to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromObservable = function (observable) {
        return new Stream(new FromObservable(observable));
    };
    /**
     * Creates a stream that periodically emits incremental numbers, every
     * `period` milliseconds.
     *
     * Marble diagram:
     *
     * ```text
     *     periodic(1000)
     * ---0---1---2---3---4---...
     * ```
     *
     * @factory true
     * @param {number} period The interval in milliseconds to use as a rate of
     * emission.
     * @return {Stream}
     */
    Stream.periodic = function (period) {
        return new Stream(new Periodic(period));
    };
    Stream.prototype._map = function (project) {
        var p = this._prod;
        var ctor = this.ctor();
        if (p instanceof Filter) {
            return new ctor(new FilterMapFusion(p.f, project, p.ins));
        }
        return new ctor(new MapOp(project, this));
    };
    /**
     * Transforms each event from the input Stream through a `project` function,
     * to get a Stream that emits those transformed events.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7------
     *    map(i => i * 10)
     * --10--30-50----70-----
     * ```
     *
     * @param {Function} project A function of type `(t: T) => U` that takes event
     * `t` of type `T` from the input Stream and produces an event of type `U`, to
     * be emitted on the output Stream.
     * @return {Stream}
     */
    Stream.prototype.map = function (project) {
        return this._map(project);
    };
    /**
     * It's like `map`, but transforms each input event to always the same
     * constant value on the output Stream.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7-----
     *       mapTo(10)
     * --10--10-10----10----
     * ```
     *
     * @param projectedValue A value to emit on the output Stream whenever the
     * input Stream emits any value.
     * @return {Stream}
     */
    Stream.prototype.mapTo = function (projectedValue) {
        var s = this.map(function () { return projectedValue; });
        var op = s._prod;
        op.type = op.type.replace('map', 'mapTo');
        return s;
    };
    /**
     * Only allows events that pass the test given by the `passes` argument.
     *
     * Each event from the input stream is given to the `passes` function. If the
     * function returns `true`, the event is forwarded to the output stream,
     * otherwise it is ignored and not forwarded.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2--3-----4-----5---6--7-8--
     *     filter(i => i % 2 === 0)
     * ------2--------4---------6----8--
     * ```
     *
     * @param {Function} passes A function of type `(t: T) +> boolean` that takes
     * an event from the input stream and checks if it passes, by returning a
     * boolean.
     * @return {Stream}
     */
    Stream.prototype.filter = function (passes) {
        var p = this._prod;
        if (p instanceof Filter) {
            return new Stream(new Filter(and(p.f, passes), p.ins));
        }
        return new Stream(new Filter(passes, this));
    };
    /**
     * Lets the first `amount` many events from the input stream pass to the
     * output stream, then makes the output stream complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *    take(3)
     * --a---b--c|
     * ```
     *
     * @param {number} amount How many events to allow from the input stream
     * before completing the output stream.
     * @return {Stream}
     */
    Stream.prototype.take = function (amount) {
        return new (this.ctor())(new Take(amount, this));
    };
    /**
     * Ignores the first `amount` many events from the input stream, and then
     * after that starts forwarding events from the input stream to the output
     * stream.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *       drop(3)
     * --------------d---e--
     * ```
     *
     * @param {number} amount How many events to ignore from the input stream
     * before forwarding all events from the input stream to the output stream.
     * @return {Stream}
     */
    Stream.prototype.drop = function (amount) {
        return new Stream(new Drop(amount, this));
    };
    /**
     * When the input stream completes, the output stream will emit the last event
     * emitted by the input stream, and then will also complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c--d----|
     *       last()
     * -----------------d|
     * ```
     *
     * @return {Stream}
     */
    Stream.prototype.last = function () {
        return new Stream(new Last(this));
    };
    /**
     * Prepends the given `initial` value to the sequence of events emitted by the
     * input stream. The returned stream is a MemoryStream, which means it is
     * already `remember()`'d.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3---
     *   startWith(0)
     * 0--1---2-----3---
     * ```
     *
     * @param initial The value or event to prepend.
     * @return {MemoryStream}
     */
    Stream.prototype.startWith = function (initial) {
        return new MemoryStream(new StartWith(this, initial));
    };
    /**
     * Uses another stream to determine when to complete the current stream.
     *
     * When the given `other` stream emits an event or completes, the output
     * stream will complete. Before that happens, the output stream will behaves
     * like the input stream.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3--4----5----6---
     *   endWhen( --------a--b--| )
     * ---1---2-----3--4--|
     * ```
     *
     * @param other Some other stream that is used to know when should the output
     * stream of this operator complete.
     * @return {Stream}
     */
    Stream.prototype.endWhen = function (other) {
        return new (this.ctor())(new EndWhen(other, this));
    };
    /**
     * "Folds" the stream onto itself.
     *
     * Combines events from the past throughout
     * the entire execution of the input stream, allowing you to accumulate them
     * together. It's essentially like `Array.prototype.reduce`. The returned
     * stream is a MemoryStream, which means it is already `remember()`'d.
     *
     * The output stream starts by emitting the `seed` which you give as argument.
     * Then, when an event happens on the input stream, it is combined with that
     * seed value through the `accumulate` function, and the output value is
     * emitted on the output stream. `fold` remembers that output value as `acc`
     * ("accumulator"), and then when a new input event `t` happens, `acc` will be
     * combined with that to produce the new `acc` and so forth.
     *
     * Marble diagram:
     *
     * ```text
     * ------1-----1--2----1----1------
     *   fold((acc, x) => acc + x, 3)
     * 3-----4-----5--7----8----9------
     * ```
     *
     * @param {Function} accumulate A function of type `(acc: R, t: T) => R` that
     * takes the previous accumulated value `acc` and the incoming event from the
     * input stream and produces the new accumulated value.
     * @param seed The initial accumulated value, of type `R`.
     * @return {MemoryStream}
     */
    Stream.prototype.fold = function (accumulate, seed) {
        return new MemoryStream(new Fold(accumulate, seed, this));
    };
    /**
     * Replaces an error with another stream.
     *
     * When (and if) an error happens on the input stream, instead of forwarding
     * that error to the output stream, *replaceError* will call the `replace`
     * function which returns the stream that the output stream will replicate.
     * And, in case that new stream also emits an error, `replace` will be called
     * again to get another stream to start replicating.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2-----3--4-----X
     *   replaceError( () => --10--| )
     * --1---2-----3--4--------10--|
     * ```
     *
     * @param {Function} replace A function of type `(err) => Stream` that takes
     * the error that occurred on the input stream or on the previous replacement
     * stream and returns a new stream. The output stream will behave like the
     * stream that this function returns.
     * @return {Stream}
     */
    Stream.prototype.replaceError = function (replace) {
        return new (this.ctor())(new ReplaceError(replace, this));
    };
    /**
     * Flattens a "stream of streams", handling only one nested stream at a time
     * (no concurrency).
     *
     * If the input stream is a stream that emits streams, then this operator will
     * return an output stream which is a flat stream: emits regular events. The
     * flattening happens without concurrency. It works like this: when the input
     * stream emits a nested stream, *flatten* will start imitating that nested
     * one. However, as soon as the next nested stream is emitted on the input
     * stream, *flatten* will forget the previous nested one it was imitating, and
     * will start imitating the new nested one.
     *
     * Marble diagram:
     *
     * ```text
     * --+--------+---------------
     *   \        \
     *    \       ----1----2---3--
     *    --a--b----c----d--------
     *           flatten
     * -----a--b------1----2---3--
     * ```
     *
     * @return {Stream}
     */
    Stream.prototype.flatten = function () {
        var p = this._prod;
        return new Stream(p instanceof MapOp && !(p instanceof FilterMapFusion) ?
            new MapFlatten(p) :
            new Flatten(this));
    };
    /**
     * Passes the input stream to a custom operator, to produce an output stream.
     *
     * *compose* is a handy way of using an existing function in a chained style.
     * Instead of writing `outStream = f(inStream)` you can write
     * `outStream = inStream.compose(f)`.
     *
     * @param {function} operator A function that takes a stream as input and
     * returns a stream as well.
     * @return {Stream}
     */
    Stream.prototype.compose = function (operator) {
        return operator(this);
    };
    /**
     * Returns an output stream that behaves like the input stream, but also
     * remembers the most recent event that happens on the input stream, so that a
     * newly added listener will immediately receive that memorised event.
     *
     * @return {MemoryStream}
     */
    Stream.prototype.remember = function () {
        return new MemoryStream(new Remember(this));
    };
    /**
     * Returns an output stream that identically behaves like the input stream,
     * but also runs a `spy` function fo each event, to help you debug your app.
     *
     * *debug* takes a `spy` function as argument, and runs that for each event
     * happening on the input stream. If you don't provide the `spy` argument,
     * then *debug* will just `console.log` each event. This helps you to
     * understand the flow of events through some operator chain.
     *
     * Please note that if the output stream has no listeners, then it will not
     * start, which means `spy` will never run because no actual event happens in
     * that case.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3-----4--
     *         debug
     * --1----2-----3-----4--
     * ```
     *
     * @param {function} labelOrSpy A string to use as the label when printing
     * debug information on the console, or a 'spy' function that takes an event
     * as argument, and does not need to return anything.
     * @return {Stream}
     */
    Stream.prototype.debug = function (labelOrSpy) {
        return new (this.ctor())(new Debug(this, labelOrSpy));
    };
    /**
     * *imitate* changes this current Stream to emit the same events that the
     * `other` given Stream does. This method returns nothing.
     *
     * This method exists to allow one thing: **circular dependency of streams**.
     * For instance, let's imagine that for some reason you need to create a
     * circular dependency where stream `first$` depends on stream `second$`
     * which in turn depends on `first$`:
     *
     * <!-- skip-example -->
     * ```js
     * import delay from 'xstream/extra/delay'
     *
     * var first$ = second$.map(x => x * 10).take(3);
     * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
     * ```
     *
     * However, that is invalid JavaScript, because `second$` is undefined
     * on the first line. This is how *imitate* can help solve it:
     *
     * ```js
     * import delay from 'xstream/extra/delay'
     *
     * var secondProxy$ = xs.create();
     * var first$ = secondProxy$.map(x => x * 10).take(3);
     * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
     * secondProxy$.imitate(second$);
     * ```
     *
     * We create `secondProxy$` before the others, so it can be used in the
     * declaration of `first$`. Then, after both `first$` and `second$` are
     * defined, we hook `secondProxy$` with `second$` with `imitate()` to tell
     * that they are "the same". `imitate` will not trigger the start of any
     * stream, it just binds `secondProxy$` and `second$` together.
     *
     * The following is an example where `imitate()` is important in Cycle.js
     * applications. A parent component contains some child components. A child
     * has an action stream which is given to the parent to define its state:
     *
     * <!-- skip-example -->
     * ```js
     * const childActionProxy$ = xs.create();
     * const parent = Parent({...sources, childAction$: childActionProxy$});
     * const childAction$ = parent.state$.map(s => s.child.action$).flatten();
     * childActionProxy$.imitate(childAction$);
     * ```
     *
     * Note, though, that **`imitate()` does not support MemoryStreams**. If we
     * would attempt to imitate a MemoryStream in a circular dependency, we would
     * either get a race condition (where the symptom would be "nothing happens")
     * or an infinite cyclic emission of values. It's useful to think about
     * MemoryStreams as cells in a spreadsheet. It doesn't make any sense to
     * define a spreadsheet cell `A1` with a formula that depends on `B1` and
     * cell `B1` defined with a formula that depends on `A1`.
     *
     * If you find yourself wanting to use `imitate()` with a
     * MemoryStream, you should rework your code around `imitate()` to use a
     * Stream instead. Look for the stream in the circular dependency that
     * represents an event stream, and that would be a candidate for creating a
     * proxy Stream which then imitates the target Stream.
     *
     * @param {Stream} target The other stream to imitate on the current one. Must
     * not be a MemoryStream.
     */
    Stream.prototype.imitate = function (target) {
        if (target instanceof MemoryStream) {
            throw new Error('A MemoryStream was given to imitate(), but it only ' +
                'supports a Stream. Read more about this restriction here: ' +
                'https://github.com/staltz/xstream#faq');
        }
        this._target = target;
        for (var ils = this._ils, N = ils.length, i = 0; i < N; i++) {
            target._add(ils[i]);
        }
        this._ils = [];
    };
    /**
     * Forces the Stream to emit the given value to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param value The "next" value you want to broadcast to all listeners of
     * this Stream.
     */
    Stream.prototype.shamefullySendNext = function (value) {
        this._n(value);
    };
    /**
     * Forces the Stream to emit the given error to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param {any} error The error you want to broadcast to all the listeners of
     * this Stream.
     */
    Stream.prototype.shamefullySendError = function (error) {
        this._e(error);
    };
    /**
     * Forces the Stream to emit the "completed" event to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     */
    Stream.prototype.shamefullySendComplete = function () {
        this._c();
    };
    /**
     * Adds a "debug" listener to the stream. There can only be one debug
     * listener, that's why this is 'setDebugListener'. To remove the debug
     * listener, just call setDebugListener(null).
     *
     * A debug listener is like any other listener. The only difference is that a
     * debug listener is "stealthy": its presence/absence does not trigger the
     * start/stop of the stream (or the producer inside the stream). This is
     * useful so you can inspect what is going on without changing the behavior
     * of the program. If you have an idle stream and you add a normal listener to
     * it, the stream will start executing. But if you set a debug listener on an
     * idle stream, it won't start executing (not until the first normal listener
     * is added).
     *
     * As the name indicates, we don't recommend using this method to build app
     * logic. In fact, in most cases the debug operator works just fine. Only use
     * this one if you know what you're doing.
     *
     * @param {Listener<T>} listener
     */
    Stream.prototype.setDebugListener = function (listener) {
        if (!listener) {
            this._d = false;
            this._dl = NO;
        }
        else {
            this._d = true;
            listener._n = listener.next || noop;
            listener._e = listener.error || noop;
            listener._c = listener.complete || noop;
            this._dl = listener;
        }
    };
    /**
     * Blends multiple streams together, emitting events from all of them
     * concurrently.
     *
     * *merge* takes multiple streams as arguments, and creates a stream that
     * behaves like each of the argument streams, in parallel.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b----c---d------
     *            merge
     * --1-a--2--b--3-c---d--4---
     * ```
     *
     * @factory true
     * @param {Stream} stream1 A stream to merge together with other streams.
     * @param {Stream} stream2 A stream to merge together with other streams. Two
     * or more streams may be given as arguments.
     * @return {Stream}
     */
    Stream.merge = function merge() {
        var streams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            streams[_i - 0] = arguments[_i];
        }
        return new Stream(new Merge(streams));
    };
    /**
     * Combines multiple input streams together to return a stream whose events
     * are arrays that collect the latest events from each input stream.
     *
     * *combine* internally remembers the most recent event from each of the input
     * streams. When any of the input streams emits an event, that event together
     * with all the other saved events are combined into an array. That array will
     * be emitted on the output stream. It's essentially a way of joining together
     * the events from multiple streams.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b-----c--d------
     *          combine
     * ----1a-2a-2b-3b-3c-3d-4d--
     * ```
     *
     * Note: to minimize garbage collection, *combine* uses the same array
     * instance for each emission.  If you need to compare emissions over time,
     * cache the values with `map` first:
     *
     * ```js
     * import pairwise from 'xstream/extra/pairwise'
     *
     * const stream1 = xs.of(1);
     * const stream2 = xs.of(2);
     *
     * xs.combine(stream1, stream2).map(
     *   combinedEmissions => ([ ...combinedEmissions ])
     * ).compose(pairwise)
     * ```
     *
     * @factory true
     * @param {Stream} stream1 A stream to combine together with other streams.
     * @param {Stream} stream2 A stream to combine together with other streams.
     * Multiple streams, not just two, may be given as arguments.
     * @return {Stream}
     */
    Stream.combine = function combine() {
        var streams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            streams[_i - 0] = arguments[_i];
        }
        return new Stream(new Combine(streams));
    };
    return Stream;
}());
exports.Stream = Stream;
var MemoryStream = (function (_super) {
    __extends(MemoryStream, _super);
    function MemoryStream(producer) {
        _super.call(this, producer);
        this._has = false;
    }
    MemoryStream.prototype._n = function (x) {
        this._v = x;
        this._has = true;
        _super.prototype._n.call(this, x);
    };
    MemoryStream.prototype._add = function (il) {
        var ta = this._target;
        if (ta !== NO)
            return ta._add(il);
        var a = this._ils;
        a.push(il);
        if (a.length > 1) {
            if (this._has)
                il._n(this._v);
            return;
        }
        if (this._stopID !== NO) {
            if (this._has)
                il._n(this._v);
            clearTimeout(this._stopID);
            this._stopID = NO;
        }
        else if (this._has)
            il._n(this._v);
        else {
            var p = this._prod;
            if (p !== NO)
                p._start(this);
        }
    };
    MemoryStream.prototype._stopNow = function () {
        this._has = false;
        _super.prototype._stopNow.call(this);
    };
    MemoryStream.prototype._x = function () {
        this._has = false;
        _super.prototype._x.call(this);
    };
    MemoryStream.prototype.map = function (project) {
        return this._map(project);
    };
    MemoryStream.prototype.mapTo = function (projectedValue) {
        return _super.prototype.mapTo.call(this, projectedValue);
    };
    MemoryStream.prototype.take = function (amount) {
        return _super.prototype.take.call(this, amount);
    };
    MemoryStream.prototype.endWhen = function (other) {
        return _super.prototype.endWhen.call(this, other);
    };
    MemoryStream.prototype.replaceError = function (replace) {
        return _super.prototype.replaceError.call(this, replace);
    };
    MemoryStream.prototype.remember = function () {
        return this;
    };
    MemoryStream.prototype.debug = function (labelOrSpy) {
        return _super.prototype.debug.call(this, labelOrSpy);
    };
    return MemoryStream;
}(Stream));
exports.MemoryStream = MemoryStream;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Stream;
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_1 = __webpack_require__(2);
var XStreamAdapter = {
    adapt: function (originStream, originStreamSubscribe) {
        if (XStreamAdapter.isValidStream(originStream)) {
            return originStream;
        }
        ;
        var dispose = null;
        return xstream_1.default.create({
            start: function (out) {
                var observer = out;
                dispose = originStreamSubscribe(originStream, observer);
            },
            stop: function () {
                if (typeof dispose === 'function') {
                    dispose();
                }
            },
        });
    },
    makeSubject: function () {
        var stream = xstream_1.default.create();
        var observer = {
            next: function (x) { stream.shamefullySendNext(x); },
            error: function (err) { stream.shamefullySendError(err); },
            complete: function () { stream.shamefullySendComplete(); },
        };
        return { observer: observer, stream: stream };
    },
    remember: function (stream) {
        return stream.remember();
    },
    isValidStream: function (stream) {
        return (typeof stream.addListener === 'function' &&
            typeof stream.shamefullySendNext === 'function');
    },
    streamSubscribe: function (stream, observer) {
        stream.addListener(observer);
        return function () { return stream.removeListener(observer); };
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = XStreamAdapter;
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(87)() ? Symbol : __webpack_require__(88);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign        = __webpack_require__(18)
  , normalizeOpts = __webpack_require__(30)
  , isCallable    = __webpack_require__(83)
  , contains      = __webpack_require__(31)

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(26)(); // Support ES3 engines

module.exports = function (val) {
 return (val !== _undefined) && (val !== null);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(obj) {
    return typeof HTMLElement === "object" ?
        obj instanceof HTMLElement || obj instanceof DocumentFragment :
        obj && typeof obj === "object" && obj !== null &&
            (obj.nodeType === 1 || obj.nodeType === 11) &&
            typeof obj.nodeName === "string";
}
exports.SCOPE_PREFIX = "$$CYCLEDOM$$-";
function getElement(selectors) {
    var domElement = typeof selectors === 'string' ?
        document.querySelector(selectors) :
        selectors;
    if (typeof selectors === 'string' && domElement === null) {
        throw new Error("Cannot render into unknown element `" + selectors + "`");
    }
    else if (!isElement(domElement)) {
        throw new Error("Given container is not a DOM element neither a " +
            "selector string.");
    }
    return domElement;
}
exports.getElement = getElement;
function getScope(namespace) {
    return namespace
        .filter(function (c) { return c.indexOf(exports.SCOPE_PREFIX) > -1; })
        .slice(-1) // only need the latest, most specific, isolated boundary
        .join("");
}
exports.getScope = getScope;
function getSelectors(namespace) {
    return namespace.filter(function (c) { return c.indexOf(exports.SCOPE_PREFIX) === -1; }).join(" ");
}
exports.getSelectors = getSelectors;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(28)()
	? Object.setPrototypeOf
	: __webpack_require__(29);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString
  , id = objToString.call(
	(function () {
		return arguments;
	})()
);

module.exports = function (value) {
	return objToString.call(value) === id;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call("");

module.exports = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString.call(value) === id)) ||
		false
	);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_1 = __webpack_require__(2);
function fromEvent(element, eventName, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    return xstream_1.Stream.create({
        element: element,
        next: null,
        start: function start(listener) {
            this.next = function next(event) { listener.next(event); };
            this.element.addEventListener(eventName, this.next, useCapture);
        },
        stop: function stop() {
            this.element.removeEventListener(eventName, this.next, useCapture);
        },
    });
}
exports.fromEvent = fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var proto = Element.prototype;
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var is = __webpack_require__(9);
var vnode = __webpack_require__(14);
function isGenericStream(x) {
    return !Array.isArray(x) && typeof x.map === "function";
}
function mutateStreamWithNS(vNode) {
    addNS(vNode.data, vNode.children, vNode.sel);
    return vNode;
}
function addNS(data, children, selector) {
    data.ns = "http://www.w3.org/2000/svg";
    if (selector !== "foreignObject" && typeof children !== 'undefined' && is.array(children)) {
        for (var i = 0; i < children.length; ++i) {
            if (isGenericStream(children[i])) {
                children[i] = children[i].map(mutateStreamWithNS);
            }
            else {
                addNS(children[i].data, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {};
    var children;
    var text;
    if (arguments.length === 3) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
    }
    else if (arguments.length === 2) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        children = children.filter(function (x) { return x; });
        for (var i = 0; i < children.length; ++i) {
            if (is.primitive(children[i])) {
                children[i] = vnode(undefined, undefined, undefined, children[i]);
            }
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
        addNS(data, children, sel);
    }
    return vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
//# sourceMappingURL=hyperscript.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(78)()
	? Object.assign
	: __webpack_require__(79);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clear    = __webpack_require__(25)
  , assign   = __webpack_require__(18)
  , callable = __webpack_require__(4)
  , value    = __webpack_require__(1)
  , d        = __webpack_require__(6)
  , autoBind = __webpack_require__(95)
  , Symbol   = __webpack_require__(5);

var defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, Iterator;

module.exports = Iterator = function (list, context) {
	if (!(this instanceof Iterator)) throw new TypeError("Constructor requires 'new'");
	defineProperties(this, {
		__list__: d("w", value(list)),
		__context__: d("w", context),
		__nextIndex__: d("w", 0)
	});
	if (!context) return;
	callable(context.on);
	context.on("_add", this._onAdd);
	context.on("_delete", this._onDelete);
	context.on("_clear", this._onClear);
};

// Internal %IteratorPrototype% doesn't expose its constructor
delete Iterator.prototype.constructor;

defineProperties(
	Iterator.prototype,
	assign(
		{
			_next: d(function () {
				var i;
				if (!this.__list__) return undefined;
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) return i;
				}
				if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
				this._unBind();
				return undefined;
			}),
			next: d(function () {
				return this._createResult(this._next());
			}),
			_createResult: d(function (i) {
				if (i === undefined) return { done: true, value: undefined };
				return { done: false, value: this._resolve(i) };
			}),
			_resolve: d(function (i) {
				return this.__list__[i];
			}),
			_unBind: d(function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) return;
				this.__context__.off("_add", this._onAdd);
				this.__context__.off("_delete", this._onDelete);
				this.__context__.off("_clear", this._onClear);
				this.__context__ = null;
			}),
			toString: d(function () {
				return "[object " + (this[Symbol.toStringTag] || "Object") + "]";
			})
		},
		autoBind({
			_onAdd: d(function (index) {
				if (index >= this.__nextIndex__) return;
				++this.__nextIndex__;
				if (!this.__redo__) {
					defineProperty(this, "__redo__", d("c", [index]));
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) this.__redo__[i] = ++redo;
				}, this);
				this.__redo__.push(index);
			}),
			_onDelete: d(function (index) {
				var i;
				if (index >= this.__nextIndex__) return;
				--this.__nextIndex__;
				if (!this.__redo__) return;
				i = this.__redo__.indexOf(index);
				if (i !== -1) this.__redo__.splice(i, 1);
				this.__redo__.forEach(function (redo, j) {
					if (redo > index) this.__redo__[j] = --redo;
				}, this);
			}),
			_onClear: d(function () {
				if (this.__redo__) clear.call(this.__redo__);
				this.__nextIndex__ = 0;
			})
		})
	)
);

defineProperty(
	Iterator.prototype,
	Symbol.iterator,
	d(function () {
		return this;
	})
);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
  ? exports
  : undefined;

/** Detect free variable `module`. */
var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
  ? module
  : undefined;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(objectTypes[typeof self] && self);

/** Detect free variable `window`. */
var freeWindow = checkGlobal(objectTypes[typeof window] && window);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal ||
  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
    freeSelf || thisGlobal || Function('return this')();

/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return (value && value.Object === Object) ? value : null;
}

module.exports = root;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(119)(module), __webpack_require__(10)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ScopeChecker = (function () {
    function ScopeChecker(scope, isolateModule) {
        this.scope = scope;
        this.isolateModule = isolateModule;
    }
    ScopeChecker.prototype.isStrictlyInRootScope = function (leaf) {
        for (var el = leaf; el; el = el.parentElement) {
            var scope = this.isolateModule.isIsolatedElement(el);
            if (scope && scope !== this.scope) {
                return false;
            }
            if (scope) {
                return true;
            }
        }
        return true;
    };
    return ScopeChecker;
}());
exports.ScopeChecker = ScopeChecker;
//# sourceMappingURL=ScopeChecker.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectorParser;

var _browserSplit = __webpack_require__(23);

var _browserSplit2 = _interopRequireDefault(_browserSplit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

function selectorParser() {
  var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  var tagName = void 0;
  var id = '';
  var classes = [];

  var tagParts = (0, _browserSplit2.default)(selector, classIdSplit);

  if (notClassId.test(tagParts[1]) || selector === '') {
    tagName = 'div';
  }

  var part = void 0;
  var type = void 0;
  var i = void 0;

  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];

    if (!part) {
      continue;
    }

    type = part.charAt(0);

    if (!tagName) {
      tagName = part;
    } else if (type === '.') {
      classes.push(part.substring(1, part.length));
    } else if (type === '#') {
      id = part.substring(1, part.length);
    }
  }

  return {
    tagName: tagName,
    id: id,
    className: classes.join(' ')
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(66)() ? Map : __webpack_require__(67);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Inspired by Google Closure:
// http://closure-library.googlecode.com/svn/docs/
// closure_goog_array_array.js.html#goog.array.clear



var value = __webpack_require__(1);

module.exports = function () {
	value(this).length = 0;
	return this;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(72)

  , max = Math.max;

module.exports = function (value) {
 return max(0, toInteger(value));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};

module.exports = function (/* CustomCreate*/) {
	var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
	if (typeof setPrototypeOf !== "function") return false;
	return getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint no-proto: "off" */

// Big thanks to @WebReflection for sorting this out
// https://gist.github.com/WebReflection/5593554



var isObject        = __webpack_require__(76)
  , value           = __webpack_require__(1)
  , objIsPrototypeOf = Object.prototype.isPrototypeOf
  , defineProperty  = Object.defineProperty
  , nullDesc        = {
	configurable: true,
	enumerable: false,
	writable: true,
	value: undefined
}
  , validate;

validate = function (obj, prototype) {
	value(obj);
	if (prototype === null || isObject(prototype)) return obj;
	throw new TypeError("Prototype must be null or an object");
};

module.exports = (function (status) {
	var fn, set;
	if (!status) return null;
	if (status.level === 2) {
		if (status.set) {
			set = status.set;
			fn = function (obj, prototype) {
				set.call(validate(obj, prototype), prototype);
				return obj;
			};
		} else {
			fn = function (obj, prototype) {
				validate(obj, prototype).__proto__ = prototype;
				return obj;
			};
		}
	} else {
		fn = function self(obj, prototype) {
			var isNullBase;
			validate(obj, prototype);
			isNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);
			if (isNullBase) delete self.nullPolyfill.__proto__;
			if (prototype === null) prototype = self.nullPolyfill;
			obj.__proto__ = prototype;
			if (isNullBase) defineProperty(self.nullPolyfill, "__proto__", nullDesc);
			return obj;
		};
	}
	return Object.defineProperty(fn, "level", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: status.level
	});
}(
	(function () {
		var tmpObj1 = Object.create(null)
		  , tmpObj2 = {}
		  , set
		  , desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

		if (desc) {
			try {
				set = desc.set; // Opera crashes at this point
				set.call(tmpObj1, tmpObj2);
			} catch (ignore) {}
			if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };
		}

		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };

		tmpObj1 = {};
		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };

		return false;
	})()
));

__webpack_require__(77);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(7);

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(84)()
	? String.prototype.contains
	: __webpack_require__(85);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isIterable = __webpack_require__(91);

module.exports = function (value) {
	if (!isIterable(value)) throw new TypeError(value + " is not iterable");
	return value;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_adapter_1 = __webpack_require__(3);
var xstream_1 = __webpack_require__(2);
function createVTree(vnode, children) {
    return {
        sel: vnode.sel,
        data: vnode.data,
        text: vnode.text,
        elm: vnode.elm,
        key: vnode.key,
        children: children,
    };
}
function makeTransposeVNode(runStreamAdapter) {
    function internalTransposeVNode(vnode) {
        if (!vnode) {
            return null;
        }
        else if (vnode && vnode.data && vnode.data.static) {
            return xstream_1.default.of(vnode);
        }
        else if (runStreamAdapter.isValidStream(vnode)) {
            var xsStream = xstream_adapter_1.default.adapt(vnode, runStreamAdapter.streamSubscribe);
            return xsStream.map(internalTransposeVNode).flatten();
        }
        else if (typeof vnode === "object") {
            if (!vnode.children || vnode.children.length === 0) {
                return xstream_1.default.of(vnode);
            }
            var vnodeChildren = vnode.children
                .map(internalTransposeVNode)
                .filter(function (x) { return x !== null; });
            if (vnodeChildren.length === 0) {
                return xstream_1.default.of(createVTree(vnode, []));
            }
            else {
                return xstream_1.default.combine.apply(xstream_1.default, vnodeChildren)
                    .map(function (children) { return createVTree(vnode, children.slice()); });
            }
        }
        else {
            throw new Error("Unhandled vTree Value");
        }
    }
    ;
    return function transposeVNode(vnode) {
        return internalTransposeVNode(vnode);
    };
}
exports.makeTransposeVNode = makeTransposeVNode;
//# sourceMappingURL=transposition.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


// https://github.com/Matt-Esch/virtual-dom/blob/master/virtual-hyperscript/parse-tag.js

var split = __webpack_require__(23);

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = function parseSelector(selector, upper) {
  selector = selector || '';
  var tagName;
  var id = '';
  var classes = [];

  var tagParts = split(selector, classIdSplit);

  if (notClassId.test(tagParts[1]) || selector === '') {
    tagName = 'div';
  }

  var part, type, i;

  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];

    if (!part) {
      continue;
    }

    type = part.charAt(0);

    if (!tagName) {
      tagName = part;
    } else if (type === '.') {
      classes.push(part.substring(1, part.length));
    } else if (type === '#') {
      id = part.substring(1, part.length);
    }
  }

  return {
    tagName: upper === true ? tagName.toUpperCase() : tagName,
    id: id,
    className: classes.join(' ')
  };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseFor = __webpack_require__(116),
    bindCallback = __webpack_require__(117),
    keys = __webpack_require__(118);

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

/**
 * Creates a function for `_.forOwn` or `_.forOwnRight`.
 *
 * @private
 * @param {Function} objectFunc The function to iterate over an object.
 * @returns {Function} Returns the new each function.
 */
function createForOwn(objectFunc) {
  return function(object, iteratee, thisArg) {
    if (typeof iteratee != 'function' || thisArg !== undefined) {
      iteratee = bindCallback(iteratee, thisArg, 3);
    }
    return objectFunc(object, iteratee);
  };
}

/**
 * Iterates over own enumerable properties of an object invoking `iteratee`
 * for each property. The `iteratee` is bound to `thisArg` and invoked with
 * three arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'a' and 'b' (iteration order is not guaranteed)
 */
var forOwn = createForOwn(baseForOwn);

module.exports = forOwn;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeHtmlChar(chr) {
  return htmlEscapes[chr];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value.
 * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
 * for more details.
 *
 * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
 * to reduce XSS vectors.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var base_1 = __webpack_require__(133);
var xstream_adapter_1 = __webpack_require__(3);
/**
 * Takes a `main` function and circularly connects it to the given collection
 * of driver functions.
 *
 * **Example:**
 * ```js
 * import {run} from '@cycle/xstream-run';
 * const dispose = run(main, drivers);
 * // ...
 * dispose();
 * ```
 *
 * The `main` function expects a collection of "source" streams (returned from
 * drivers) as input, and should return a collection of "sink" streams (to be
 * given to drivers). A "collection of streams" is a JavaScript object where
 * keys match the driver names registered by the `drivers` object, and values
 * are the streams. Refer to the documentation of each driver to see more
 * details on what types of sources it outputs and sinks it receives.
 *
 * @param {Function} main a function that takes `sources` as input and outputs
 * `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Function} a dispose function, used to terminate the execution of the
 * Cycle.js program, cleaning up resources used.
 * @function run
 */
function run(main, drivers) {
    var _a = base_1.default(main, drivers, { streamAdapter: xstream_adapter_1.default }), run = _a.run, sinks = _a.sinks;
    if (typeof window !== 'undefined' && window['CyclejsDevTool_startGraphSerializer']) {
        window['CyclejsDevTool_startGraphSerializer'](sinks);
    }
    return run();
}
exports.run = run;
/**
 * A function that prepares the Cycle application to be executed. Takes a `main`
 * function and prepares to circularly connects it to the given collection of
 * driver functions. As an output, `Cycle()` returns an object with three
 * properties: `sources`, `sinks` and `run`. Only when `run()` is called will
 * the application actually execute. Refer to the documentation of `run()` for
 * more details.
 *
 * **Example:**
 * ```js
 * import Cycle from '@cycle/xstream-run';
 * const {sources, sinks, run} = Cycle(main, drivers);
 * // ...
 * const dispose = run(); // Executes the application
 * // ...
 * dispose();
 * ```
 *
 * @param {Function} main a function that takes `sources` as input and outputs
 * `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Object} an object with three properties: `sources`, `sinks` and
 * `run`. `sources` is the collection of driver sources, `sinks` is the
 * collection of driver sinks, these can be used for debugging or testing. `run`
 * is the function that once called will execute the application.
 * @function Cycle
 */
var Cycle = function (main, drivers) {
    var out = base_1.default(main, drivers, { streamAdapter: xstream_adapter_1.default });
    if (typeof window !== 'undefined' && window['CyclejsDevTool_startGraphSerializer']) {
        window['CyclejsDevTool_startGraphSerializer'](out.sinks);
    }
    return out;
};
Cycle.run = run;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cycle;
//# sourceMappingURL=index.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var h = __webpack_require__(44);

function copyToThunk(vnode, thunk) {
  thunk.elm = vnode.elm;
  vnode.data.fn = thunk.data.fn;
  vnode.data.args = thunk.data.args;
  thunk.data = vnode.data;
  thunk.children = vnode.children;
  thunk.text = vnode.text;
  thunk.elm = vnode.elm;
}

function init(thunk) {
  var i, cur = thunk.data;
  var vnode = cur.fn.apply(undefined, cur.args);
  copyToThunk(vnode, thunk);
}

function prepatch(oldVnode, thunk) {
  var i, old = oldVnode.data, cur = thunk.data, vnode;
  var oldArgs = old.args, args = cur.args;
  if (old.fn !== cur.fn || oldArgs.length !== args.length) {
    copyToThunk(cur.fn.apply(undefined, args), thunk);
  }
  for (i = 0; i < args.length; ++i) {
    if (oldArgs[i] !== args[i]) {
      copyToThunk(cur.fn.apply(undefined, args), thunk);
      return;
    }
  }
  copyToThunk(oldVnode, thunk);
}

module.exports = function(sel, key, fn, args) {
  if (args === undefined) {
    args = fn;
    fn = key;
    key = undefined;
  }
  return h(sel, {
    key: key,
    hook: {init: init, prepatch: prepatch},
    fn: fn,
    args: args
  });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var VNode = __webpack_require__(14);
var is = __webpack_require__(9);

function addNS(data, children) {
  data.ns = 'http://www.w3.org/2000/svg';
  if (children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      addNS(children[i].data, children[i].children);
    }
  }
}

module.exports = function h(sel, b, c) {
  var data = {}, children, text, i;
  if (c !== undefined) {
    data = b;
    if (is.array(c)) { children = c; }
    else if (is.primitive(c)) { text = c; }
  } else if (b !== undefined) {
    if (is.array(b)) { children = b; }
    else if (is.primitive(b)) { text = b; }
    else { data = b; }
  }
  if (is.array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
    }
  }
  if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
    addNS(data, children);
  }
  return VNode(sel, data, children, text, undefined);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var snabbdom_1 = __webpack_require__(46);
var xstream_1 = __webpack_require__(2);
var MainDOMSource_1 = __webpack_require__(50);
var VNodeWrapper_1 = __webpack_require__(56);
var utils_1 = __webpack_require__(8);
var modules_1 = __webpack_require__(58);
var isolateModule_1 = __webpack_require__(65);
var transposition_1 = __webpack_require__(33);
var xstream_adapter_1 = __webpack_require__(3);
var MapPolyfill = __webpack_require__(24);
function makeDOMDriverInputGuard(modules) {
    if (!Array.isArray(modules)) {
        throw new Error("Optional modules option must be " +
            "an array for snabbdom modules");
    }
}
function domDriverInputGuard(view$) {
    if (!view$
        || typeof view$.addListener !== "function"
        || typeof view$.fold !== "function") {
        throw new Error("The DOM driver function expects as input a Stream of " +
            "virtual DOM elements");
    }
}
function makeDOMDriver(container, options) {
    if (!options) {
        options = {};
    }
    var transposition = options.transposition || false;
    var modules = options.modules || modules_1.default;
    var isolateModule = new isolateModule_1.IsolateModule((new MapPolyfill()));
    var patch = snabbdom_1.init([isolateModule.createModule()].concat(modules));
    var rootElement = utils_1.getElement(container);
    var vnodeWrapper = new VNodeWrapper_1.VNodeWrapper(rootElement);
    var delegators = new MapPolyfill();
    makeDOMDriverInputGuard(modules);
    function DOMDriver(vnode$, runStreamAdapter, name) {
        domDriverInputGuard(vnode$);
        var transposeVNode = transposition_1.makeTransposeVNode(runStreamAdapter);
        var preprocessedVNode$ = (transposition ? vnode$.map(transposeVNode).flatten() : vnode$);
        var sanitation$ = xstream_1.default.create();
        var rootElement$ = xstream_1.default.merge(preprocessedVNode$.endWhen(sanitation$), sanitation$)
            .map(function (vnode) { return vnodeWrapper.call(vnode); })
            .fold(patch, rootElement)
            .drop(1)
            .map(function unwrapElementFromVNode(vnode) { return vnode.elm; })
            .compose(function (stream) { return xstream_1.default.merge(stream, xstream_1.default.never()); }) // don't complete this stream
            .startWith(rootElement);
        rootElement$.addListener({ next: function () { }, error: function () { }, complete: function () { } });
        return new MainDOMSource_1.MainDOMSource(rootElement$, sanitation$, runStreamAdapter, [], isolateModule, delegators, name);
    }
    ;
    DOMDriver.streamAdapter = xstream_adapter_1.default;
    return DOMDriver;
}
exports.makeDOMDriver = makeDOMDriver;
//# sourceMappingURL=makeDOMDriver.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// jshint newcap: false
/* global require, module, document, Node */


var VNode = __webpack_require__(14);
var is = __webpack_require__(9);
var domApi = __webpack_require__(47);

function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }

var emptyNode = VNode('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules, api) {
  var i, j, cbs = {};

  if (isUndef(api)) api = domApi;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function emptyNodeAt(elm) {
    return VNode(api.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    return function() {
      if (--listeners === 0) {
        var parent = api.parentNode(childElm);
        api.removeChild(parent, childElm);
      }
    };
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode);
        data = vnode.data;
      }
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (isDef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                                                          : api.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          api.appendChild(elm, createElm(children[i], insertedVnodeQueue));
        }
      } else if (is.primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = api.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      api.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
            i(ch, rm);
          } else {
            rm();
          }
        } else { // Text node
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
          oldCh[idxInOld] = undefined;
          api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (!sameVnode(oldVnode, vnode)) {
      var parentElm = api.parentNode(oldVnode.elm);
      elm = createElm(vnode, insertedVnodeQueue);
      api.insertBefore(parentElm, elm, oldVnode.elm);
      removeVnodes(parentElm, [oldVnode], 0, 0);
      return;
    }
    if (isDef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      api.setTextContent(elm, vnode.text);
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();

    if (isUndef(oldVnode.sel)) {
      oldVnode = emptyNodeAt(oldVnode);
    }

    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);

      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

function createElement(tagName){
  return document.createElement(tagName);
}

function createElementNS(namespaceURI, qualifiedName){
  return document.createElementNS(namespaceURI, qualifiedName);
}

function createTextNode(text){
  return document.createTextNode(text);
}


function insertBefore(parentNode, newNode, referenceNode){
  parentNode.insertBefore(newNode, referenceNode);
}


function removeChild(node, child){
  node.removeChild(child);
}

function appendChild(node, child){
  node.appendChild(child);
}

function parentNode(node){
  return node.parentElement;
}

function nextSibling(node){
  return node.nextSibling;
}

function tagName(node){
  return node.tagName;
}

function setTextContent(node, text){
  node.textContent = text;
}

module.exports = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  appendChild: appendChild,
  removeChild: removeChild,
  insertBefore: insertBefore,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10), __webpack_require__(49)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
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
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_adapter_1 = __webpack_require__(3);
var DocumentDOMSource_1 = __webpack_require__(51);
var BodyDOMSource_1 = __webpack_require__(52);
var xstream_1 = __webpack_require__(2);
var ElementFinder_1 = __webpack_require__(53);
var fromEvent_1 = __webpack_require__(15);
var isolate_1 = __webpack_require__(54);
var EventDelegator_1 = __webpack_require__(55);
var utils_1 = __webpack_require__(8);
var matchesSelector;
try {
    matchesSelector = __webpack_require__(16);
}
catch (e) {
    matchesSelector = Function.prototype;
}
var eventTypesThatDontBubble = [
    "blur",
    "canplay",
    "canplaythrough",
    "change",
    "durationchange",
    "emptied",
    "ended",
    "focus",
    "load",
    "loadeddata",
    "loadedmetadata",
    "mouseenter",
    "mouseleave",
    "pause",
    "play",
    "playing",
    "ratechange",
    "reset",
    "scroll",
    "seeked",
    "seeking",
    "stalled",
    "submit",
    "suspend",
    "timeupdate",
    "unload",
    "volumechange",
    "waiting",
];
function determineUseCapture(eventType, options) {
    var result = false;
    if (typeof options.useCapture === 'boolean') {
        result = options.useCapture;
    }
    if (eventTypesThatDontBubble.indexOf(eventType) !== -1) {
        result = true;
    }
    return result;
}
function filterBasedOnIsolation(domSource, scope) {
    return function filterBasedOnIsolationOperator(rootElement$) {
        return rootElement$
            .fold(function shouldPass(state, element) {
            var hasIsolated = !!domSource._isolateModule.getIsolatedElement(scope);
            var shouldPass = hasIsolated && !state.hadIsolatedMutable;
            return { hadIsolatedMutable: hasIsolated, shouldPass: shouldPass, element: element };
        }, { hadIsolatedMutable: false, shouldPass: false, element: null })
            .drop(1)
            .filter(function (s) { return s.shouldPass; })
            .map(function (s) { return s.element; });
    };
}
var MainDOMSource = (function () {
    function MainDOMSource(_rootElement$, _sanitation$, _runStreamAdapter, _namespace, _isolateModule, _delegators, _name) {
        if (_namespace === void 0) { _namespace = []; }
        this._rootElement$ = _rootElement$;
        this._sanitation$ = _sanitation$;
        this._runStreamAdapter = _runStreamAdapter;
        this._namespace = _namespace;
        this._isolateModule = _isolateModule;
        this._delegators = _delegators;
        this._name = _name;
        this.__JANI_EVAKALLIO_WE_WILL_MISS_YOU_PLEASE_COME_BACK_EVENTUALLY = false;
        this.isolateSource = isolate_1.isolateSource;
        this.isolateSink = isolate_1.isolateSink;
        this.__JANI_EVAKALLIO_WE_WILL_MISS_YOU_PLEASE_COME_BACK_EVENTUALLY = true;
    }
    MainDOMSource.prototype.elements = function () {
        var output$;
        if (this._namespace.length === 0) {
            output$ = this._rootElement$;
        }
        else {
            var elementFinder_1 = new ElementFinder_1.ElementFinder(this._namespace, this._isolateModule);
            output$ = this._rootElement$.map(function (el) { return elementFinder_1.call(el); });
        }
        var runSA = this._runStreamAdapter;
        var out = runSA.remember(runSA.adapt(output$, xstream_adapter_1.default.streamSubscribe));
        out._isCycleSource = this._name;
        return out;
    };
    Object.defineProperty(MainDOMSource.prototype, "namespace", {
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    MainDOMSource.prototype.select = function (selector) {
        if (typeof selector !== 'string') {
            throw new Error("DOM driver's select() expects the argument to be a " +
                "string as a CSS selector");
        }
        if (selector === 'document') {
            return new DocumentDOMSource_1.DocumentDOMSource(this._runStreamAdapter, this._name);
        }
        if (selector === 'body') {
            return new BodyDOMSource_1.BodyDOMSource(this._runStreamAdapter, this._name);
        }
        var trimmedSelector = selector.trim();
        var childNamespace = trimmedSelector === ":root" ?
            this._namespace :
            this._namespace.concat(trimmedSelector);
        return new MainDOMSource(this._rootElement$, this._sanitation$, this._runStreamAdapter, childNamespace, this._isolateModule, this._delegators, this._name);
    };
    MainDOMSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        if (typeof eventType !== "string") {
            throw new Error("DOM driver's events() expects argument to be a " +
                "string representing the event type to listen for.");
        }
        var useCapture = determineUseCapture(eventType, options);
        var namespace = this._namespace;
        var scope = utils_1.getScope(namespace);
        var keyParts = [eventType, useCapture];
        if (scope) {
            keyParts.push(scope);
        }
        var key = keyParts.join('~');
        var domSource = this;
        var rootElement$;
        if (scope) {
            rootElement$ = this._rootElement$
                .compose(filterBasedOnIsolation(domSource, scope));
        }
        else {
            rootElement$ = this._rootElement$.take(2);
        }
        var event$ = rootElement$
            .map(function setupEventDelegatorOnTopElement(rootElement) {
            // Event listener just for the root element
            if (!namespace || namespace.length === 0) {
                return fromEvent_1.fromEvent(rootElement, eventType, useCapture);
            }
            // Event listener on the top element as an EventDelegator
            var delegators = domSource._delegators;
            var top = domSource._isolateModule.getIsolatedElement(scope) || rootElement;
            var delegator;
            if (delegators.has(key)) {
                delegator = delegators.get(key);
                delegator.updateTopElement(top);
            }
            else {
                delegator = new EventDelegator_1.EventDelegator(top, eventType, useCapture, domSource._isolateModule);
                delegators.set(key, delegator);
            }
            if (scope) {
                domSource._isolateModule.addEventDelegator(scope, delegator);
            }
            var destinationId = delegator.createDestinationId();
            var subject = xstream_1.default.create({
                start: function () { },
                stop: function () {
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(function () {
                            delegator.removeDestinationId(destinationId);
                        });
                    }
                    else {
                        delegator.removeDestinationId(destinationId);
                    }
                },
            });
            delegator.addDestination(subject, namespace, destinationId);
            return subject;
        })
            .flatten();
        var out = this._runStreamAdapter.adapt(event$, xstream_adapter_1.default.streamSubscribe);
        out._isCycleSource = domSource._name;
        return out;
    };
    MainDOMSource.prototype.dispose = function () {
        this._sanitation$.shamefullySendNext('');
        this._isolateModule.reset();
    };
    return MainDOMSource;
}());
exports.MainDOMSource = MainDOMSource;
//# sourceMappingURL=MainDOMSource.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_1 = __webpack_require__(2);
var xstream_adapter_1 = __webpack_require__(3);
var fromEvent_1 = __webpack_require__(15);
var DocumentDOMSource = (function () {
    function DocumentDOMSource(_runStreamAdapter, _name) {
        this._runStreamAdapter = _runStreamAdapter;
        this._name = _name;
    }
    DocumentDOMSource.prototype.select = function (selector) {
        // This functionality is still undefined/undecided.
        return this;
    };
    DocumentDOMSource.prototype.elements = function () {
        var runSA = this._runStreamAdapter;
        var out = runSA.remember(runSA.adapt(xstream_1.default.of(document), xstream_adapter_1.default.streamSubscribe));
        out._isCycleSource = this._name;
        return out;
    };
    DocumentDOMSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        var stream;
        if (options && typeof options.useCapture === 'boolean') {
            stream = fromEvent_1.fromEvent(document, eventType, options.useCapture);
        }
        else {
            stream = fromEvent_1.fromEvent(document, eventType);
        }
        var out = this._runStreamAdapter.adapt(stream, xstream_adapter_1.default.streamSubscribe);
        out._isCycleSource = this._name;
        return out;
    };
    return DocumentDOMSource;
}());
exports.DocumentDOMSource = DocumentDOMSource;
//# sourceMappingURL=DocumentDOMSource.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_1 = __webpack_require__(2);
var xstream_adapter_1 = __webpack_require__(3);
var fromEvent_1 = __webpack_require__(15);
var BodyDOMSource = (function () {
    function BodyDOMSource(_runStreamAdapter, _name) {
        this._runStreamAdapter = _runStreamAdapter;
        this._name = _name;
    }
    BodyDOMSource.prototype.select = function (selector) {
        // This functionality is still undefined/undecided.
        return this;
    };
    BodyDOMSource.prototype.elements = function () {
        var runSA = this._runStreamAdapter;
        var out = runSA.remember(runSA.adapt(xstream_1.default.of(document.body), xstream_adapter_1.default.streamSubscribe));
        out._isCycleSource = this._name;
        return out;
    };
    BodyDOMSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        var stream;
        if (options && typeof options.useCapture === 'boolean') {
            stream = fromEvent_1.fromEvent(document.body, eventType, options.useCapture);
        }
        else {
            stream = fromEvent_1.fromEvent(document.body, eventType);
        }
        var out = this._runStreamAdapter.adapt(stream, xstream_adapter_1.default.streamSubscribe);
        out._isCycleSource = this._name;
        return out;
    };
    return BodyDOMSource;
}());
exports.BodyDOMSource = BodyDOMSource;
//# sourceMappingURL=BodyDOMSource.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ScopeChecker_1 = __webpack_require__(21);
var utils_1 = __webpack_require__(8);
var matchesSelector;
try {
    matchesSelector = __webpack_require__(16);
}
catch (e) {
    matchesSelector = Function.prototype;
}
function toElArray(input) {
    return Array.prototype.slice.call(input);
}
var ElementFinder = (function () {
    function ElementFinder(namespace, isolateModule) {
        this.namespace = namespace;
        this.isolateModule = isolateModule;
    }
    ElementFinder.prototype.call = function (rootElement) {
        var namespace = this.namespace;
        if (namespace.join("") === "") {
            return rootElement;
        }
        var scope = utils_1.getScope(namespace);
        var scopeChecker = new ScopeChecker_1.ScopeChecker(scope, this.isolateModule);
        var selector = utils_1.getSelectors(namespace);
        var topNode = rootElement;
        var topNodeMatches = [];
        if (scope.length > 0) {
            topNode = this.isolateModule.getIsolatedElement(scope) || rootElement;
            if (selector && matchesSelector(topNode, selector)) {
                topNodeMatches.push(topNode);
            }
        }
        return toElArray(topNode.querySelectorAll(selector))
            .filter(scopeChecker.isStrictlyInRootScope, scopeChecker)
            .concat(topNodeMatches);
    };
    return ElementFinder;
}());
exports.ElementFinder = ElementFinder;
//# sourceMappingURL=ElementFinder.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils_1 = __webpack_require__(8);
function isolateSource(source, scope) {
    return source.select(utils_1.SCOPE_PREFIX + scope);
}
exports.isolateSource = isolateSource;
function isolateSink(sink, scope) {
    return sink.map(function (vTree) {
        if (vTree.data && vTree.data.isolate) {
            var existingScope = parseInt(vTree.data.isolate.split(utils_1.SCOPE_PREFIX + 'cycle')[1]);
            var _scope = parseInt(scope.split('cycle')[1]);
            if (isNaN(existingScope) || isNaN(_scope) || existingScope > _scope) {
                return vTree;
            }
        }
        vTree.data = vTree.data || {};
        vTree.data.isolate = utils_1.SCOPE_PREFIX + scope;
        if (typeof vTree.key === 'undefined') {
            vTree.key = utils_1.SCOPE_PREFIX + scope;
        }
        return vTree;
    });
}
exports.isolateSink = isolateSink;
//# sourceMappingURL=isolate.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ScopeChecker_1 = __webpack_require__(21);
var utils_1 = __webpack_require__(8);
var matchesSelector;
try {
    matchesSelector = __webpack_require__(16);
}
catch (e) {
    matchesSelector = Function.prototype;
}
var gDestinationId = 0;
function findDestinationId(arr, searchId) {
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    var currentIndex;
    var currentElement;
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0; // tslint:disable-line:no-bitwise
        currentElement = arr[currentIndex];
        var currentId = currentElement.destinationId;
        if (currentId < searchId) {
            minIndex = currentIndex + 1;
        }
        else if (currentId > searchId) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
/**
 * Attaches an actual event listener to the DOM root element,
 * handles "destinations" (interested DOMSource output subjects), and bubbling.
 */
var EventDelegator = (function () {
    function EventDelegator(topElement, eventType, useCapture, isolateModule) {
        var _this = this;
        this.topElement = topElement;
        this.eventType = eventType;
        this.useCapture = useCapture;
        this.isolateModule = isolateModule;
        this.destinations = [];
        this.roof = topElement.parentElement;
        if (useCapture) {
            this.domListener = function (ev) { return _this.capture(ev); };
        }
        else {
            this.domListener = function (ev) { return _this.bubble(ev); };
        }
        topElement.addEventListener(eventType, this.domListener, useCapture);
    }
    EventDelegator.prototype.bubble = function (rawEvent) {
        if (!document.body.contains(rawEvent.currentTarget)) {
            return;
        }
        var ev = this.patchEvent(rawEvent);
        for (var el = ev.target; el && el !== this.roof; el = el.parentElement) {
            if (!document.body.contains(el)) {
                ev.stopPropagation();
            }
            if (ev.propagationHasBeenStopped) {
                return;
            }
            this.matchEventAgainstDestinations(el, ev);
        }
    };
    EventDelegator.prototype.matchEventAgainstDestinations = function (el, ev) {
        for (var i = 0, n = this.destinations.length; i < n; i++) {
            var dest = this.destinations[i];
            if (!dest.scopeChecker.isStrictlyInRootScope(el)) {
                continue;
            }
            if (matchesSelector(el, dest.selector)) {
                this.mutateEventCurrentTarget(ev, el);
                dest.subject._n(ev);
            }
        }
    };
    EventDelegator.prototype.capture = function (ev) {
        for (var i = 0, n = this.destinations.length; i < n; i++) {
            var dest = this.destinations[i];
            if (matchesSelector(ev.target, dest.selector)) {
                dest.subject._n(ev);
            }
        }
    };
    EventDelegator.prototype.addDestination = function (subject, namespace, destinationId) {
        var scope = utils_1.getScope(namespace);
        var selector = utils_1.getSelectors(namespace);
        var scopeChecker = new ScopeChecker_1.ScopeChecker(scope, this.isolateModule);
        this.destinations.push({ subject: subject, scopeChecker: scopeChecker, selector: selector, destinationId: destinationId });
    };
    EventDelegator.prototype.createDestinationId = function () {
        return gDestinationId++;
    };
    EventDelegator.prototype.removeDestinationId = function (destinationId) {
        var i = findDestinationId(this.destinations, destinationId);
        if (i >= 0) {
            this.destinations.splice(i, 1);
        }
    };
    EventDelegator.prototype.patchEvent = function (event) {
        var pEvent = event;
        pEvent.propagationHasBeenStopped = false;
        var oldStopPropagation = pEvent.stopPropagation;
        pEvent.stopPropagation = function stopPropagation() {
            oldStopPropagation.call(this);
            this.propagationHasBeenStopped = true;
        };
        return pEvent;
    };
    EventDelegator.prototype.mutateEventCurrentTarget = function (event, currentTargetElement) {
        try {
            Object.defineProperty(event, "currentTarget", {
                value: currentTargetElement,
                configurable: true,
            });
        }
        catch (err) {
            console.log("please use event.ownerTarget");
        }
        event.ownerTarget = currentTargetElement;
    };
    EventDelegator.prototype.updateTopElement = function (newTopElement) {
        this.topElement.removeEventListener(this.eventType, this.domListener, this.useCapture);
        newTopElement.addEventListener(this.eventType, this.domListener, this.useCapture);
        this.topElement = newTopElement;
    };
    return EventDelegator;
}());
exports.EventDelegator = EventDelegator;
//# sourceMappingURL=EventDelegator.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hyperscript_1 = __webpack_require__(17);
var classNameFromVNode_1 = __webpack_require__(57);
var selectorParser_1 = __webpack_require__(22);
var VNodeWrapper = (function () {
    function VNodeWrapper(rootElement) {
        this.rootElement = rootElement;
    }
    VNodeWrapper.prototype.call = function (vnode) {
        var _a = selectorParser_1.default(vnode.sel), selectorTagName = _a.tagName, selectorId = _a.id;
        var vNodeClassName = classNameFromVNode_1.default(vnode);
        var vNodeData = vnode.data || {};
        var vNodeDataProps = vNodeData.props || {};
        var _b = vNodeDataProps.id, vNodeId = _b === void 0 ? selectorId : _b;
        var isVNodeAndRootElementIdentical = vNodeId.toUpperCase() === this.rootElement.id.toUpperCase() &&
            selectorTagName.toUpperCase() === this.rootElement.tagName.toUpperCase() &&
            vNodeClassName.toUpperCase() === this.rootElement.className.toUpperCase();
        if (isVNodeAndRootElementIdentical) {
            return vnode;
        }
        var _c = this.rootElement, tagName = _c.tagName, id = _c.id, className = _c.className;
        var elementId = id ? "#" + id : "";
        var elementClassName = className ?
            "." + className.split(" ").join(".") : "";
        return hyperscript_1.h("" + tagName.toLowerCase() + elementId + elementClassName, {}, [
            vnode,
        ]);
    };
    return VNodeWrapper;
}());
exports.VNodeWrapper = VNodeWrapper;
//# sourceMappingURL=VNodeWrapper.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = classNameFromVNode;

var _selectorParser2 = __webpack_require__(22);

var _selectorParser3 = _interopRequireDefault(_selectorParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function classNameFromVNode(vNode) {
  var _selectorParser = (0, _selectorParser3.default)(vNode.sel);

  var cn = _selectorParser.className;


  if (!vNode.data) {
    return cn;
  }

  var _vNode$data = vNode.data;
  var dataClass = _vNode$data.class;
  var props = _vNode$data.props;


  if (dataClass) {
    var c = Object.keys(vNode.data.class).filter(function (cl) {
      return vNode.data.class[cl];
    });
    cn += ' ' + c.join(' ');
  }

  if (props && props.className) {
    cn += ' ' + props.className;
  }

  return cn.trim();
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ClassModule = __webpack_require__(59);
exports.ClassModule = ClassModule;
var PropsModule = __webpack_require__(60);
exports.PropsModule = PropsModule;
var AttrsModule = __webpack_require__(61);
exports.AttrsModule = AttrsModule;
var EventsModule = __webpack_require__(62);
exports.EventsModule = EventsModule;
var StyleModule = __webpack_require__(63);
exports.StyleModule = StyleModule;
var HeroModule = __webpack_require__(64);
exports.HeroModule = HeroModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [StyleModule, ClassModule, PropsModule, AttrsModule];
//# sourceMappingURL=modules.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports) {

function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class || {},
      klass = vnode.data.class || {};
  for (name in oldClass) {
    if (!klass[name]) {
      elm.classList.remove(name);
    }
  }
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
  for (key in oldProps) {
    if (!props[key]) {
      delete elm[key];
    }
  }
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", 
                "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable", 
                "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", 
                "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", 
                "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate", 
                "truespeed", "typemustmatch", "visible"];
    
var booleanAttrsDict = {};
for(var i=0, len = booleanAttrs.length; i < len; i++) {
  booleanAttrsDict[booleanAttrs[i]] = true;
}
    
function updateAttrs(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldAttrs = oldVnode.data.attrs || {}, attrs = vnode.data.attrs || {};
  
  // update modified attributes, add new attributes
  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      // TODO: add support to namespaced attributes (setAttributeNS)
      if(!cur && booleanAttrsDict[key])
        elm.removeAttribute(key);
      else
        elm.setAttribute(key, cur);
    }
  }
  //remove removed attributes
  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
  // the other option is to remove all attributes with value == undefined
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}

module.exports = {create: updateAttrs, update: updateAttrs};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(9);

function arrInvoker(arr) {
  return function() {
    if (!arr.length) return;
    // Special case when length is two, for performance
    arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
  };
}

function fnInvoker(o) {
  return function(ev) { 
    if (o.fn === null) return;
    o.fn(ev); 
  };
}

function updateEventListeners(oldVnode, vnode) {
  var name, cur, old, elm = vnode.elm,
      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
  if (!on) return;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (old === undefined) {
      if (is.array(cur)) {
        elm.addEventListener(name, arrInvoker(cur));
      } else {
        cur = {fn: cur};
        on[name] = cur;
        elm.addEventListener(name, fnInvoker(cur));
      }
    } else if (is.array(old)) {
      // Deliberately modify old array since it's captured in closure created with `arrInvoker`
      old.length = cur.length;
      for (var i = 0; i < old.length; ++i) old[i] = cur[i];
      on[name]  = old;
    } else {
      old.fn = cur;
      on[name] = old;
    }
  }
  if (oldOn) {
    for (name in oldOn) {
      if (on[name] === undefined) {
        var old = oldOn[name];
        if (is.array(old)) {
          old.length = 0;
        }
        else {
          old.fn = null;
        }
      }
    }
  }
}

module.exports = {create: updateEventListeners, update: updateEventListeners};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style || {},
      style = vnode.data.style || {},
      oldHasDel = 'delayed' in oldStyle;
  for (name in oldStyle) {
    if (!style[name]) {
      elm.style[name] = '';
    }
  }
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0, applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function getTextNodeRect(textNode) {
  var rect;
  if (document.createRange) {
    var range = document.createRange();
    range.selectNodeContents(textNode);
    if (range.getBoundingClientRect) {
        rect = range.getBoundingClientRect();
    }
  }
  return rect;
}

function calcTransformOrigin(isTextNode, textRect, boundingRect) {
  if (isTextNode) {
    if (textRect) {
      //calculate pixels to center of text from left edge of bounding box
      var relativeCenterX = textRect.left + textRect.width/2 - boundingRect.left;
      var relativeCenterY = textRect.top + textRect.height/2 - boundingRect.top;
      return relativeCenterX + 'px ' + relativeCenterY + 'px';
    }
  }
  return '0 0'; //top left
}

function getTextDx(oldTextRect, newTextRect) {
  if (oldTextRect && newTextRect) {
    return ((oldTextRect.left + oldTextRect.width/2) - (newTextRect.left + newTextRect.width/2));
  }
  return 0;
}
function getTextDy(oldTextRect, newTextRect) {
  if (oldTextRect && newTextRect) {
    return ((oldTextRect.top + oldTextRect.height/2) - (newTextRect.top + newTextRect.height/2));
  }
  return 0;
}

function isTextElement(elm) {
  return elm.childNodes.length === 1 && elm.childNodes[0].nodeType === 3;
}

var removed, created;

function pre(oldVnode, vnode) {
  removed = {};
  created = [];
}

function create(oldVnode, vnode) {
  var hero = vnode.data.hero;
  if (hero && hero.id) {
    created.push(hero.id);
    created.push(vnode);
  }
}

function destroy(vnode) {
  var hero = vnode.data.hero;
  if (hero && hero.id) {
    var elm = vnode.elm;
    vnode.isTextNode = isTextElement(elm); //is this a text node?
    vnode.boundingRect = elm.getBoundingClientRect(); //save the bounding rectangle to a new property on the vnode
    vnode.textRect = vnode.isTextNode ? getTextNodeRect(elm.childNodes[0]) : null; //save bounding rect of inner text node
    var computedStyle = window.getComputedStyle(elm, null); //get current styles (includes inherited properties)
    vnode.savedStyle = JSON.parse(JSON.stringify(computedStyle)); //save a copy of computed style values
    removed[hero.id] = vnode;
  }
}

function post() {
  var i, id, newElm, oldVnode, oldElm, hRatio, wRatio,
      oldRect, newRect, dx, dy, origTransform, origTransition,
      newStyle, oldStyle, newComputedStyle, isTextNode,
      newTextRect, oldTextRect;
  for (i = 0; i < created.length; i += 2) {
    id = created[i];
    newElm = created[i+1].elm;
    oldVnode = removed[id];
    if (oldVnode) {
      isTextNode = oldVnode.isTextNode && isTextElement(newElm); //Are old & new both text?
      newStyle = newElm.style;
      newComputedStyle = window.getComputedStyle(newElm, null); //get full computed style for new element
      oldElm = oldVnode.elm;
      oldStyle = oldElm.style;
      //Overall element bounding boxes
      newRect = newElm.getBoundingClientRect();
      oldRect = oldVnode.boundingRect; //previously saved bounding rect
      //Text node bounding boxes & distances
      if (isTextNode) {
        newTextRect = getTextNodeRect(newElm.childNodes[0]);
        oldTextRect = oldVnode.textRect;
        dx = getTextDx(oldTextRect, newTextRect);
        dy = getTextDy(oldTextRect, newTextRect);
      } else {
        //Calculate distances between old & new positions
        dx = oldRect.left - newRect.left;
        dy = oldRect.top - newRect.top;
      }
      hRatio = newRect.height / (Math.max(oldRect.height, 1));
      wRatio = isTextNode ? hRatio : newRect.width / (Math.max(oldRect.width, 1)); //text scales based on hRatio
      // Animate new element
      origTransform = newStyle.transform;
      origTransition = newStyle.transition;
      if (newComputedStyle.display === 'inline') //inline elements cannot be transformed
        newStyle.display = 'inline-block';        //this does not appear to have any negative side effects
      newStyle.transition = origTransition + 'transform 0s';
      newStyle.transformOrigin = calcTransformOrigin(isTextNode, newTextRect, newRect);
      newStyle.opacity = '0';
      newStyle.transform = origTransform + 'translate('+dx+'px, '+dy+'px) ' +
                               'scale('+1/wRatio+', '+1/hRatio+')';
      setNextFrame(newStyle, 'transition', origTransition);
      setNextFrame(newStyle, 'transform', origTransform);
      setNextFrame(newStyle, 'opacity', '1');
      // Animate old element
      for (var key in oldVnode.savedStyle) { //re-apply saved inherited properties
        if (parseInt(key) != key) {
          var ms = key.substring(0,2) === 'ms';
          var moz = key.substring(0,3) === 'moz';
          var webkit = key.substring(0,6) === 'webkit';
      	  if (!ms && !moz && !webkit) //ignore prefixed style properties
        	  oldStyle[key] = oldVnode.savedStyle[key];
        }
      }
      oldStyle.position = 'absolute';
      oldStyle.top = oldRect.top + 'px'; //start at existing position
      oldStyle.left = oldRect.left + 'px';
      oldStyle.width = oldRect.width + 'px'; //Needed for elements who were sized relative to their parents
      oldStyle.height = oldRect.height + 'px'; //Needed for elements who were sized relative to their parents
      oldStyle.margin = 0; //Margin on hero element leads to incorrect positioning
      oldStyle.transformOrigin = calcTransformOrigin(isTextNode, oldTextRect, oldRect);
      oldStyle.transform = '';
      oldStyle.opacity = '1';
      document.body.appendChild(oldElm);
      setNextFrame(oldStyle, 'transform', 'translate('+ -dx +'px, '+ -dy +'px) scale('+wRatio+', '+hRatio+')'); //scale must be on far right for translate to be correct
      setNextFrame(oldStyle, 'opacity', '0');
      oldElm.addEventListener('transitionend', function(ev) {
        if (ev.propertyName === 'transform')
          document.body.removeChild(ev.target);
      });
    }
  }
  removed = created = undefined;
}

module.exports = {pre: pre, create: create, destroy: destroy, post: post};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MapPolyfill = __webpack_require__(24);
var IsolateModule = (function () {
    function IsolateModule(isolatedElements) {
        this.isolatedElements = isolatedElements;
        this.eventDelegators = new MapPolyfill();
    }
    IsolateModule.prototype.setScope = function (elm, scope) {
        this.isolatedElements.set(scope, elm);
    };
    IsolateModule.prototype.removeScope = function (scope) {
        this.isolatedElements.delete(scope);
    };
    IsolateModule.prototype.cleanupVNode = function (_a) {
        var data = _a.data, elm = _a.elm;
        data = data || {};
        var scope = data.isolate || '';
        var isCurrentElm = this.isolatedElements.get(scope) === elm;
        if (scope && isCurrentElm) {
            this.removeScope(scope);
            if (this.eventDelegators.get(scope)) {
                this.eventDelegators.set(scope, []);
            }
        }
    };
    IsolateModule.prototype.getIsolatedElement = function (scope) {
        return this.isolatedElements.get(scope);
    };
    IsolateModule.prototype.isIsolatedElement = function (elm) {
        var iterator = this.isolatedElements.entries();
        for (var result = iterator.next(); !!result.value; result = iterator.next()) {
            var _a = result.value, scope = _a[0], element = _a[1];
            if (elm === element) {
                return scope;
            }
        }
        return false;
    };
    IsolateModule.prototype.addEventDelegator = function (scope, eventDelegator) {
        var delegators = this.eventDelegators.get(scope);
        if (!delegators) {
            delegators = [];
            this.eventDelegators.set(scope, delegators);
        }
        delegators[delegators.length] = eventDelegator;
    };
    IsolateModule.prototype.reset = function () {
        this.isolatedElements.clear();
    };
    IsolateModule.prototype.createModule = function () {
        var self = this;
        return {
            create: function (oldVNode, vNode) {
                var _a = oldVNode.data, oldData = _a === void 0 ? {} : _a;
                var elm = vNode.elm, _b = vNode.data, data = _b === void 0 ? {} : _b;
                var oldScope = oldData.isolate || "";
                var scope = data.isolate || "";
                if (scope) {
                    if (oldScope) {
                        self.removeScope(oldScope);
                    }
                    self.setScope(elm, scope);
                    var delegators = self.eventDelegators.get(scope);
                    if (delegators) {
                        for (var i = 0, len = delegators.length; i < len; ++i) {
                            delegators[i].updateTopElement(elm);
                        }
                    }
                    else if (delegators === void 0) {
                        self.eventDelegators.set(scope, []);
                    }
                }
                if (oldScope && !scope) {
                    self.removeScope(scope);
                }
            },
            update: function (oldVNode, vNode) {
                var _a = oldVNode.data, oldData = _a === void 0 ? {} : _a;
                var elm = vNode.elm, _b = vNode.data, data = _b === void 0 ? {} : _b;
                var oldScope = oldData.isolate || "";
                var scope = data.isolate || "";
                if (scope && scope !== oldScope) {
                    if (oldScope) {
                        self.removeScope(oldScope);
                    }
                    self.setScope(elm, scope);
                }
                if (oldScope && !scope) {
                    self.removeScope(scope);
                }
            },
            remove: function (vNode, cb) {
                self.cleanupVNode(vNode);
                cb();
            },
            destroy: function (vNode) {
                self.cleanupVNode(vNode);
            },
        };
    };
    return IsolateModule;
}());
exports.IsolateModule = IsolateModule;
//# sourceMappingURL=isolateModule.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var map, iterator, result;
	if (typeof Map !== 'function') return false;
	try {
		// WebKit doesn't support arguments and crashes
		map = new Map([['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]);
	} catch (e) {
		return false;
	}
	if (String(map) !== '[object Map]') return false;
	if (map.size !== 3) return false;
	if (typeof map.clear !== 'function') return false;
	if (typeof map.delete !== 'function') return false;
	if (typeof map.entries !== 'function') return false;
	if (typeof map.forEach !== 'function') return false;
	if (typeof map.get !== 'function') return false;
	if (typeof map.has !== 'function') return false;
	if (typeof map.keys !== 'function') return false;
	if (typeof map.set !== 'function') return false;
	if (typeof map.values !== 'function') return false;

	iterator = map.entries();
	result = iterator.next();
	if (result.done !== false) return false;
	if (!result.value) return false;
	if (result.value[0] !== 'raz') return false;
	if (result.value[1] !== 'one') return false;

	return true;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clear          = __webpack_require__(25)
  , eIndexOf       = __webpack_require__(68)
  , setPrototypeOf = __webpack_require__(11)
  , callable       = __webpack_require__(4)
  , validValue     = __webpack_require__(1)
  , d              = __webpack_require__(6)
  , ee             = __webpack_require__(86)
  , Symbol         = __webpack_require__(5)
  , iterator       = __webpack_require__(32)
  , forOf          = __webpack_require__(92)
  , Iterator       = __webpack_require__(105)
  , isNative       = __webpack_require__(108)

  , call = Function.prototype.call
  , defineProperties = Object.defineProperties, getPrototypeOf = Object.getPrototypeOf
  , MapPoly;

module.exports = MapPoly = function (/*iterable*/) {
	var iterable = arguments[0], keys, values, self;
	if (!(this instanceof MapPoly)) throw new TypeError('Constructor requires \'new\'');
	if (isNative && setPrototypeOf && (Map !== MapPoly)) {
		self = setPrototypeOf(new Map(), getPrototypeOf(this));
	} else {
		self = this;
	}
	if (iterable != null) iterator(iterable);
	defineProperties(self, {
		__mapKeysData__: d('c', keys = []),
		__mapValuesData__: d('c', values = [])
	});
	if (!iterable) return self;
	forOf(iterable, function (value) {
		var key = validValue(value)[0];
		value = value[1];
		if (eIndexOf.call(keys, key) !== -1) return;
		keys.push(key);
		values.push(value);
	}, self);
	return self;
};

if (isNative) {
	if (setPrototypeOf) setPrototypeOf(MapPoly, Map);
	MapPoly.prototype = Object.create(Map.prototype, {
		constructor: d(MapPoly)
	});
}

ee(defineProperties(MapPoly.prototype, {
	clear: d(function () {
		if (!this.__mapKeysData__.length) return;
		clear.call(this.__mapKeysData__);
		clear.call(this.__mapValuesData__);
		this.emit('_clear');
	}),
	delete: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return false;
		this.__mapKeysData__.splice(index, 1);
		this.__mapValuesData__.splice(index, 1);
		this.emit('_delete', index, key);
		return true;
	}),
	entries: d(function () { return new Iterator(this, 'key+value'); }),
	forEach: d(function (cb/*, thisArg*/) {
		var thisArg = arguments[1], iterator, result;
		callable(cb);
		iterator = this.entries();
		result = iterator._next();
		while (result !== undefined) {
			call.call(cb, thisArg, this.__mapValuesData__[result],
				this.__mapKeysData__[result], this);
			result = iterator._next();
		}
	}),
	get: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return;
		return this.__mapValuesData__[index];
	}),
	has: d(function (key) {
		return (eIndexOf.call(this.__mapKeysData__, key) !== -1);
	}),
	keys: d(function () { return new Iterator(this, 'key'); }),
	set: d(function (key, value) {
		var index = eIndexOf.call(this.__mapKeysData__, key), emit;
		if (index === -1) {
			index = this.__mapKeysData__.push(key) - 1;
			emit = true;
		}
		this.__mapValuesData__[index] = value;
		if (emit) this.emit('_add', index, key);
		return this;
	}),
	size: d.gs(function () { return this.__mapKeysData__.length; }),
	values: d(function () { return new Iterator(this, 'value'); }),
	toString: d(function () { return '[object Map]'; })
}));
Object.defineProperty(MapPoly.prototype, Symbol.iterator, d(function () {
	return this.entries();
}));
Object.defineProperty(MapPoly.prototype, Symbol.toStringTag, d('c', 'Map'));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN       = __webpack_require__(69)
  , toPosInt          = __webpack_require__(27)
  , value             = __webpack_require__(1)
  , indexOf           = Array.prototype.indexOf
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , abs               = Math.abs
  , floor             = Math.floor;

module.exports = function (searchElement /*, fromIndex*/) {
	var i, length, fromIndex, val;
	if (!numberIsNaN(searchElement)) return indexOf.apply(this, arguments);

	length = toPosInt(value(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

	for (i = fromIndex; i < length; ++i) {
		if (objHasOwnProperty.call(this, i)) {
			val = this[i];
			if (numberIsNaN(val)) return i; // Jslint: ignore
		}
	}
	return -1;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(70)()
	? Number.isNaN
	: __webpack_require__(71);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var numberIsNaN = Number.isNaN;
	if (typeof numberIsNaN !== "function") return false;
	return !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	// eslint-disable-next-line no-self-compare
	return value !== value;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sign = __webpack_require__(73)

  , abs = Math.abs, floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if ((value === 0) || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(74)()
	? Math.sign
	: __webpack_require__(75);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") return false;
	return (sign(10) === 1) && (sign(-20) === -1);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) return value;
	return value > 0 ? 1 : -1;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(7);

var map = { function: true, object: true };

module.exports = function (value) {
	return (isValue(value) && map[typeof value]) || false;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Workaround for http://code.google.com/p/v8/issues/detail?id=2804



var create = Object.create, shim;

if (!__webpack_require__(28)()) {
	shim = __webpack_require__(29);
}

module.exports = (function () {
	var nullObject, polyProps, desc;
	if (!shim) return create;
	if (shim.level !== 1) return create;

	nullObject = {};
	polyProps = {};
	desc = {
		configurable: false,
		enumerable: false,
		writable: true,
		value: undefined
	};
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === "__proto__") {
			polyProps[name] = {
				configurable: true,
				enumerable: false,
				writable: true,
				value: undefined
			};
			return;
		}
		polyProps[name] = desc;
	});
	Object.defineProperties(nullObject, polyProps);

	Object.defineProperty(shim, "nullPolyfill", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: nullObject
	});

	return function (prototype, props) {
		return create(prototype === null ? nullObject : prototype, props);
	};
}());


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(80)
  , value = __webpack_require__(1)
  , max   = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(81)() ? Object.keys : __webpack_require__(82);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(7);

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
 return typeof obj === "function";
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d        = __webpack_require__(6)
  , callable = __webpack_require__(4)

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d              = __webpack_require__(6)
  , validateSymbol = __webpack_require__(89)

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(90);

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments = __webpack_require__(12)
  , isValue     = __webpack_require__(7)
  , isString    = __webpack_require__(13);

var iteratorSymbol = __webpack_require__(5).iterator
  , isArray        = Array.isArray;

module.exports = function (value) {
	if (!isValue(value)) return false;
	if (isArray(value)) return true;
	if (isString(value)) return true;
	if (isArguments(value)) return true;
	return typeof value[iteratorSymbol] === "function";
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments = __webpack_require__(12)
  , callable    = __webpack_require__(4)
  , isString    = __webpack_require__(13)
  , get         = __webpack_require__(93);

var isArray = Array.isArray, call = Function.prototype.call, some = Array.prototype.some;

module.exports = function (iterable, cb /*, thisArg*/) {
	var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
	if (isArray(iterable) || isArguments(iterable)) mode = "array";
	else if (isString(iterable)) mode = "string";
	else iterable = get(iterable);

	callable(cb);
	doBreak = function () {
		broken = true;
	};
	if (mode === "array") {
		some.call(iterable, function (value) {
			call.call(cb, thisArg, value, doBreak);
			return broken;
		});
		return;
	}
	if (mode === "string") {
		length = iterable.length;
		for (i = 0; i < length; ++i) {
			char = iterable[i];
			if (i + 1 < length) {
				code = char.charCodeAt(0);
				if (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];
			}
			call.call(cb, thisArg, char, doBreak);
			if (broken) break;
		}
		return;
	}
	result = iterable.next();

	while (!result.done) {
		call.call(cb, thisArg, result.value, doBreak);
		if (broken) return;
		result = iterable.next();
	}
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments    = __webpack_require__(12)
  , isString       = __webpack_require__(13)
  , ArrayIterator  = __webpack_require__(94)
  , StringIterator = __webpack_require__(104)
  , iterable       = __webpack_require__(32)
  , iteratorSymbol = __webpack_require__(5).iterator;

module.exports = function (obj) {
	if (typeof iterable(obj)[iteratorSymbol] === "function") return obj[iteratorSymbol]();
	if (isArguments(obj)) return new ArrayIterator(obj);
	if (isString(obj)) return new StringIterator(obj);
	return new ArrayIterator(obj);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setPrototypeOf = __webpack_require__(11)
  , contains       = __webpack_require__(31)
  , d              = __webpack_require__(6)
  , Symbol         = __webpack_require__(5)
  , Iterator       = __webpack_require__(19);

var defineProperty = Object.defineProperty, ArrayIterator;

ArrayIterator = module.exports = function (arr, kind) {
	if (!(this instanceof ArrayIterator)) throw new TypeError("Constructor requires 'new'");
	Iterator.call(this, arr);
	if (!kind) kind = "value";
	else if (contains.call(kind, "key+value")) kind = "key+value";
	else if (contains.call(kind, "key")) kind = "key";
	else kind = "value";
	defineProperty(this, "__kind__", d("", kind));
};
if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete ArrayIterator.prototype.constructor;

ArrayIterator.prototype = Object.create(Iterator.prototype, {
	_resolve: d(function (i) {
		if (this.__kind__ === "value") return this.__list__[i];
		if (this.__kind__ === "key+value") return [i, this.__list__[i]];
		return i;
	})
});
defineProperty(ArrayIterator.prototype, Symbol.toStringTag, d("c", "Array Iterator"));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var copy             = __webpack_require__(96)
  , normalizeOptions = __webpack_require__(30)
  , ensureCallable   = __webpack_require__(4)
  , map              = __webpack_require__(101)
  , callable         = __webpack_require__(4)
  , validValue       = __webpack_require__(1)

  , bind = Function.prototype.bind, defineProperty = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , define;

define = function (name, desc, options) {
	var value = validValue(desc) && callable(desc.value), dgs;
	dgs = copy(desc);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;
		desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
		defineProperty(this, name, desc);
		return this[name];
	};
	return dgs;
};

module.exports = function (props/*, options*/) {
	var options = normalizeOptions(arguments[1]);
	if (options.resolveContext != null) ensureCallable(options.resolveContext);
	return map(props, function (desc, name) { return define(name, desc, options); });
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFrom  = __webpack_require__(97)
  , assign = __webpack_require__(18)
  , value  = __webpack_require__(1);

module.exports = function (obj/*, propertyNames, options*/) {
	var copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
	if (copy !== obj && !propertyNames) return copy;
	var result = {};
	if (propertyNames) {
		aFrom(propertyNames, function (propertyName) {
			if (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];
		});
	} else {
		assign(result, obj);
	}
	return result;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(98)()
	? Array.from
	: __webpack_require__(99);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") return false;
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && (result !== arr) && (result[1] === "dwa"));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iteratorSymbol = __webpack_require__(5).iterator
  , isArguments    = __webpack_require__(12)
  , isFunction     = __webpack_require__(100)
  , toPosInt       = __webpack_require__(27)
  , callable       = __webpack_require__(4)
  , validValue     = __webpack_require__(1)
  , isValue        = __webpack_require__(7)
  , isString       = __webpack_require__(13)
  , isArray        = Array.isArray
  , call           = Function.prototype.call
  , desc           = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty = Object.defineProperty;

// eslint-disable-next-line complexity
module.exports = function (arrayLike /*, mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) callable(mapFn);
	if (!this || this === Array || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray(arrayLike)) {
				// Source: Array
				arr = new Array(length = arrayLike.length);
				for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			// Source: Iterator
			iterator = callable(getIterator).call(arrayLike);
			if (Context) arr = new Context();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) arr = new Context();
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInt(arrayLike.length);
		if (Context) arr = new Context(length);
		for (i = 0; i < length; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call(__webpack_require__(26));

module.exports = function (value) {
	return typeof value === "function" && objToString.call(value) === id;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callable = __webpack_require__(4)
  , forEach  = __webpack_require__(102)
  , call     = Function.prototype.call;

module.exports = function (obj, cb /*, thisArg*/) {
	var result = {}, thisArg = arguments[2];
	callable(cb);
	forEach(obj, function (value, key, targetObj, index) {
		result[key] = call.call(cb, thisArg, value, key, targetObj, index);
	});
	return result;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(103)("forEach");


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order



var callable                = __webpack_require__(4)
  , value                   = __webpack_require__(1)
  , bind                    = Function.prototype.bind
  , call                    = Function.prototype.call
  , keys                    = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (method, defVal) {
	return function (obj, cb /*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(value(obj));
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
		}
		if (typeof method !== "function") method = list[method];
		return call.call(method, list, function (key, index) {
			if (!objPropertyIsEnumerable.call(obj, key)) return defVal;
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Thanks @mathiasbynens
// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols



var setPrototypeOf = __webpack_require__(11)
  , d              = __webpack_require__(6)
  , Symbol         = __webpack_require__(5)
  , Iterator       = __webpack_require__(19);

var defineProperty = Object.defineProperty, StringIterator;

StringIterator = module.exports = function (str) {
	if (!(this instanceof StringIterator)) throw new TypeError("Constructor requires 'new'");
	str = String(str);
	Iterator.call(this, str);
	defineProperty(this, "__length__", d("", str.length));
};
if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete StringIterator.prototype.constructor;

StringIterator.prototype = Object.create(Iterator.prototype, {
	_next: d(function () {
		if (!this.__list__) return undefined;
		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
		this._unBind();
		return undefined;
	}),
	_resolve: d(function (i) {
		var char = this.__list__[i], code;
		if (this.__nextIndex__ === this.__length__) return char;
		code = char.charCodeAt(0);
		if (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];
		return char;
	})
});
defineProperty(StringIterator.prototype, Symbol.toStringTag, d("c", "String Iterator"));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setPrototypeOf    = __webpack_require__(11)
  , d                 = __webpack_require__(6)
  , Iterator          = __webpack_require__(19)
  , toStringTagSymbol = __webpack_require__(5).toStringTag
  , kinds             = __webpack_require__(106)

  , defineProperties = Object.defineProperties
  , unBind = Iterator.prototype._unBind
  , MapIterator;

MapIterator = module.exports = function (map, kind) {
	if (!(this instanceof MapIterator)) return new MapIterator(map, kind);
	Iterator.call(this, map.__mapKeysData__, map);
	if (!kind || !kinds[kind]) kind = 'key+value';
	defineProperties(this, {
		__kind__: d('', kind),
		__values__: d('w', map.__mapValuesData__)
	});
};
if (setPrototypeOf) setPrototypeOf(MapIterator, Iterator);

MapIterator.prototype = Object.create(Iterator.prototype, {
	constructor: d(MapIterator),
	_resolve: d(function (i) {
		if (this.__kind__ === 'value') return this.__values__[i];
		if (this.__kind__ === 'key') return this.__list__[i];
		return [this.__list__[i], this.__values__[i]];
	}),
	_unBind: d(function () {
		this.__values__ = null;
		unBind.call(this);
	}),
	toString: d(function () { return '[object Map Iterator]'; })
});
Object.defineProperty(MapIterator.prototype, toStringTagSymbol,
	d('c', 'Map Iterator'));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(107)('key',
	'value', 'key+value');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = Array.prototype.forEach, create = Object.create;

// eslint-disable-next-line no-unused-vars
module.exports = function (arg /*, …args*/) {
	var set = create(null);
	forEach.call(arguments, function (name) {
		set[name] = true;
	});
	return set;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Exports true if environment provides native `Map` implementation,
// whatever that is.



module.exports = (function () {
	if (typeof Map === 'undefined') return false;
	return (Object.prototype.toString.call(new Map()) === '[object Map]');
}());


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_adapter_1 = __webpack_require__(3);
var transposition_1 = __webpack_require__(33);
var HTMLSource_1 = __webpack_require__(110);
var toHTML = __webpack_require__(111);
var noop = function () { };
function makeHTMLDriver(effect, options) {
    if (!options) {
        options = {};
    }
    var transposition = options.transposition || false;
    function htmlDriver(vnode$, runStreamAdapter, name) {
        var transposeVNode = transposition_1.makeTransposeVNode(runStreamAdapter);
        var preprocessedVNode$ = (transposition ? vnode$.map(transposeVNode).flatten() : vnode$);
        var html$ = preprocessedVNode$.map(toHTML);
        html$.addListener({
            next: effect || noop,
            error: noop,
            complete: noop,
        });
        return new HTMLSource_1.HTMLSource(html$, runStreamAdapter, name);
    }
    ;
    htmlDriver.streamAdapter = xstream_adapter_1.default;
    return htmlDriver;
}
exports.makeHTMLDriver = makeHTMLDriver;
//# sourceMappingURL=makeHTMLDriver.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_1 = __webpack_require__(2);
var xstream_adapter_1 = __webpack_require__(3);
var HTMLSource = (function () {
    function HTMLSource(html$, runSA, _name) {
        this.runSA = runSA;
        this._name = _name;
        this._html$ = html$;
        this._empty$ = runSA.adapt(xstream_1.default.empty(), xstream_adapter_1.default.streamSubscribe);
    }
    HTMLSource.prototype.elements = function () {
        var out = this.runSA.adapt(this._html$, xstream_adapter_1.default.streamSubscribe);
        out._isCycleSource = this._name;
        return out;
    };
    HTMLSource.prototype.select = function (selector) {
        return new HTMLSource(xstream_1.default.empty(), this.runSA, this._name);
    };
    HTMLSource.prototype.events = function (eventType, options) {
        var out = this._empty$;
        out._isCycleSource = this._name;
        return out;
    };
    return HTMLSource;
}());
exports.HTMLSource = HTMLSource;
//# sourceMappingURL=HTMLSource.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {


var init = __webpack_require__(112);

module.exports = init([__webpack_require__(115), __webpack_require__(127)]);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


var parseSelector = __webpack_require__(34);
var VOID_ELEMENTS = __webpack_require__(113);
var CONTAINER_ELEMENTS = __webpack_require__(114);

module.exports = function init(modules) {
  function parse(data) {
    return modules.reduce(function (arr, fn) {
      arr.push(fn(data));
      return arr;
    }, []).filter(function (result) {
      return result !== '';
    });
  }

  return function renderToString(vnode) {
    if (!vnode.sel && vnode.text) {
      return vnode.text;
    }

    vnode.data = vnode.data || {};

    // Support thunks
    if (typeof vnode.sel === 'string' && vnode.sel.slice(0, 5) === 'thunk') {
      vnode = vnode.data.fn.apply(null, vnode.data.args);
    }

    var tagName = parseSelector(vnode.sel).tagName;
    var attributes = parse(vnode);
    var svg = vnode.data.ns === 'http://www.w3.org/2000/svg';
    var tag = [];

    // Open tag
    tag.push('<' + tagName);
    if (attributes.length) {
      tag.push(' ' + attributes.join(' '));
    }
    if (svg && CONTAINER_ELEMENTS[tagName] !== true) {
      tag.push(' /');
    }
    tag.push('>');

    // Close tag, if needed
    if (VOID_ELEMENTS[tagName] !== true && !svg || svg && CONTAINER_ELEMENTS[tagName] === true) {
      if (vnode.data.props && vnode.data.props.innerHTML) {
        tag.push(vnode.data.props.innerHTML);
      } else if (vnode.text) {
        tag.push(vnode.text);
      } else if (vnode.children) {
        vnode.children.forEach(function (child) {
          tag.push(renderToString(child));
        });
      }
      tag.push('</' + tagName + '>');
    }

    return tag.join('');
  };
};

/***/ }),
/* 113 */
/***/ (function(module, exports) {


// http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements

module.exports = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

/***/ }),
/* 114 */
/***/ (function(module, exports) {


// All SVG children elements, not in this list, should self-close

module.exports = {
  // http://www.w3.org/TR/SVG/intro.html#TermContainerElement
  'a': true,
  'defs': true,
  'glyph': true,
  'g': true,
  'marker': true,
  'mask': true,
  'missing-glyph': true,
  'pattern': true,
  'svg': true,
  'switch': true,
  'symbol': true,

  // http://www.w3.org/TR/SVG/intro.html#TermDescriptiveElement
  'desc': true,
  'metadata': true,
  'title': true
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {


var forOwn = __webpack_require__(35);
var escape = __webpack_require__(39);
var union = __webpack_require__(120);

var parseSelector = __webpack_require__(34);

// data.attrs, data.props, data.class

module.exports = function attributes(vnode) {
  var selector = parseSelector(vnode.sel);
  var parsedClasses = selector.className.split(' ');

  var attributes = [];
  var classes = [];
  var values = {};

  if (selector.id) {
    values.id = selector.id;
  }

  setAttributes(vnode.data.props, values);
  setAttributes(vnode.data.attrs, values); // `attrs` override `props`, not sure if this is good so

  if (vnode.data.class) {
    // Omit `className` attribute if `class` is set on vnode
    values.class = undefined;
  }
  forOwn(vnode.data.class, function (value, key) {
    if (value === true) {
      classes.push(key);
    }
  });
  classes = union(classes, values.class, parsedClasses).filter(function (x) {
    return x !== '';
  });

  if (classes.length) {
    values.class = classes.join(' ');
  }

  forOwn(values, function (value, key) {
    attributes.push(value === true ? key : key + '="' + escape(value) + '"');
  });

  return attributes.length ? attributes.join(' ') : '';
};

function setAttributes(values, target) {
  forOwn(values, function (value, key) {
    if (key === 'htmlFor') {
      target['for'] = value;
      return;
    }
    if (key === 'className') {
      target['class'] = value.split(' ');
      return;
    }
    if (key === 'innerHTML') {
      return;
    }
    target[key] = value;
  });
}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * Creates a base function for methods like `_.forIn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = baseFor;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(36),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(38);

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ }),
/* 119 */
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseFlatten = __webpack_require__(121),
    baseUniq = __webpack_require__(122),
    restParam = __webpack_require__(126);

/**
 * Creates an array of unique values, in order, of the provided arrays using
 * `SameValueZero` for equality comparisons.
 *
 * **Note:** [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
 * comparisons are like strict equality comparisons, e.g. `===`, except that
 * `NaN` matches `NaN`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([1, 2], [4, 2], [2, 1]);
 * // => [1, 2, 4]
 */
var union = restParam(function(arrays) {
  return baseUniq(baseFlatten(arrays, false, true));
});

module.exports = union;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var isArguments = __webpack_require__(37),
    isArray = __webpack_require__(38);

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.flatten` with added support for restricting
 * flattening and specifying the start index.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {boolean} [isDeep] Specify a deep flatten.
 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, isDeep, isStrict, result) {
  result || (result = []);

  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index];
    if (isObjectLike(value) && isArrayLike(value) &&
        (isStrict || isArray(value) || isArguments(value))) {
      if (isDeep) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, isDeep, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = baseFlatten;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseIndexOf = __webpack_require__(123),
    cacheIndexOf = __webpack_require__(124),
    createCache = __webpack_require__(125);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniq` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the new duplicate-value-free array.
 */
function baseUniq(array, iteratee) {
  var index = -1,
      indexOf = baseIndexOf,
      length = array.length,
      isCommon = true,
      isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
      seen = isLarge ? createCache() : null,
      result = [];

  if (seen) {
    indexOf = cacheIndexOf;
    isCommon = false;
  } else {
    isLarge = false;
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value, index, array) : value;

    if (isCommon && value === value) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (indexOf(seen, computed, 0) < 0) {
      if (iteratee || isLarge) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/**
 * lodash 3.1.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `_.indexOf` without support for binary searches.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * Gets the index at which the first occurrence of `NaN` is found in `array`.
 * If `fromRight` is provided elements of `array` are iterated from right to left.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
 */
function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 0 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    var other = array[index];
    if (other !== other) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is in `cache` mimicking the return signature of
 * `_.indexOf` by returning `0` if the value is found, else `-1`.
 *
 * @private
 * @param {Object} cache The cache to search.
 * @param {*} value The value to search for.
 * @returns {number} Returns `0` if `value` is found, else `-1`.
 */
function cacheIndexOf(cache, value) {
  var data = cache.data,
      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

  return result ? 0 : -1;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = cacheIndexOf;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(36);

/** Native method references. */
var Set = getNative(global, 'Set');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCreate = getNative(Object, 'create');

/**
 *
 * Creates a cache object to store unique values.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var length = values ? values.length : 0;

  this.data = { 'hash': nativeCreate(null), 'set': new Set };
  while (length--) {
    this.push(values[length]);
  }
}

/**
 * Adds `value` to the cache.
 *
 * @private
 * @name push
 * @memberOf SetCache
 * @param {*} value The value to cache.
 */
function cachePush(value) {
  var data = this.data;
  if (typeof value == 'string' || isObject(value)) {
    data.set.add(value);
  } else {
    data.hash[value] = true;
  }
}

/**
 * Creates a `Set` cache object to optimize linear searches of large arrays.
 *
 * @private
 * @param {Array} [values] The values to cache.
 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
 */
function createCache(values) {
  return (nativeCreate && Set) ? new SetCache(values) : null;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

// Add functions to the `Set` cache.
SetCache.prototype.push = cachePush;

module.exports = createCache;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var forOwn = __webpack_require__(35);
var escape = __webpack_require__(39);
var kebabCase = __webpack_require__(128);

// style
  // data.style

module.exports = function style(vnode) {
  var styles = [];
  var style = vnode.data.style || {};

  // merge in `delayed` properties
  if (style.delayed) {
    _extends(style, style.delayed);
  }

  forOwn(style, function (value, key) {
    // omit hook objects
    if (typeof value === 'string') {
      styles.push(kebabCase(key) + ': ' + escape(value));
    }
  });

  return styles.length ? 'style="' + styles.join('; ') + '"' : '';
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var deburr = __webpack_require__(129),
    words = __webpack_require__(130);

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string)), callback, '');
  };
}

/**
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__foo_bar__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match latin-1 supplementary letters (excluding mathematical operators). */
var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0';

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to map latin-1 supplementary letters to basic latin letters. */
var deburredLetters = {
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss'
};

/**
 * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
function deburrLetter(letter) {
  return deburredLetters[letter];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsQuoteRange = '\\u2018\\u2019\\u201c\\u201d',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsQuoteRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match non-compound words composed of alphanumeric characters. */
var reBasicWord = /[a-zA-Z0-9]+/g;

/** Used to match complex or compound words. */
var reComplexWord = RegExp([
  rsUpper + '?' + rsLower + '+(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+',
  rsUpper + '+',
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasComplexWord = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var xstream_adapter_1 = __webpack_require__(3);
var xstream_1 = __webpack_require__(2);
var SCOPE_PREFIX = '___';
var MockedDOMSource = (function () {
    function MockedDOMSource(_streamAdapter, _mockConfig) {
        this._streamAdapter = _streamAdapter;
        this._mockConfig = _mockConfig;
        if (_mockConfig.elements) {
            this._elements = _mockConfig.elements;
        }
        else {
            this._elements = _streamAdapter.adapt(xstream_1.default.empty(), xstream_adapter_1.default.streamSubscribe);
        }
    }
    MockedDOMSource.prototype.elements = function () {
        var out = this._elements;
        out._isCycleSource = 'MockedDOM';
        return out;
    };
    MockedDOMSource.prototype.events = function (eventType, options) {
        var mockConfig = this._mockConfig;
        var keys = Object.keys(mockConfig);
        var keysLen = keys.length;
        for (var i = 0; i < keysLen; i++) {
            var key = keys[i];
            if (key === eventType) {
                var out_1 = mockConfig[key];
                out_1._isCycleSource = 'MockedDOM';
                return out_1;
            }
        }
        var out = this._streamAdapter.adapt(xstream_1.default.empty(), xstream_adapter_1.default.streamSubscribe);
        out._isCycleSource = 'MockedDOM';
        return out;
    };
    MockedDOMSource.prototype.select = function (selector) {
        var mockConfig = this._mockConfig;
        var keys = Object.keys(mockConfig);
        var keysLen = keys.length;
        for (var i = 0; i < keysLen; i++) {
            var key = keys[i];
            if (key === selector) {
                return new MockedDOMSource(this._streamAdapter, mockConfig[key]);
            }
        }
        return new MockedDOMSource(this._streamAdapter, {});
    };
    MockedDOMSource.prototype.isolateSource = function (source, scope) {
        return source.select('.' + SCOPE_PREFIX + scope);
    };
    MockedDOMSource.prototype.isolateSink = function (sink, scope) {
        return sink.map(function (vnode) {
            if (vnode.sel && vnode.sel.indexOf(SCOPE_PREFIX + scope) !== -1) {
                return vnode;
            }
            else {
                vnode.sel += "." + SCOPE_PREFIX + scope;
                return vnode;
            }
        });
    };
    return MockedDOMSource;
}());
exports.MockedDOMSource = MockedDOMSource;
function mockDOMSource(streamAdapter, mockConfig) {
    return new MockedDOMSource(streamAdapter, mockConfig);
}
exports.mockDOMSource = mockDOMSource;
//# sourceMappingURL=mockDOMSource.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hyperscript_1 = __webpack_require__(17);
function isValidString(param) {
    return typeof param === 'string' && param.length > 0;
}
function isSelector(param) {
    return isValidString(param) && (param[0] === '.' || param[0] === '#');
}
function createTagFunction(tagName) {
    return function hyperscript(first, b, c) {
        if (isSelector(first)) {
            if (typeof b !== 'undefined' && typeof c !== 'undefined') {
                return hyperscript_1.h(tagName + first, b, c);
            }
            else if (typeof b !== 'undefined') {
                return hyperscript_1.h(tagName + first, b);
            }
            else {
                return hyperscript_1.h(tagName + first, {});
            }
        }
        else if (!!b) {
            return hyperscript_1.h(tagName, first, b);
        }
        else if (!!first) {
            return hyperscript_1.h(tagName, first);
        }
        else {
            return hyperscript_1.h(tagName, {});
        }
    };
}
var SVG_TAG_NAMES = [
    'a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
    'animateMotion', 'animateTransform', 'circle', 'clipPath', 'colorProfile',
    'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
    'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
    'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
    'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
    'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
    'feSpotlight', 'feTile', 'feTurbulence', 'filter', 'font', 'fontFace',
    'fontFaceFormat', 'fontFaceName', 'fontFaceSrc', 'fontFaceUri',
    'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
    'linearGradient', 'marker', 'mask', 'metadata', 'missingGlyph', 'mpath',
    'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script',
    'set', 'stop', 'style', 'switch', 'symbol', 'text', 'textPath', 'title',
    'tref', 'tspan', 'use', 'view', 'vkern',
];
var svg = createTagFunction('svg');
SVG_TAG_NAMES.forEach(function (tag) {
    svg[tag] = createTagFunction(tag);
});
var TAG_NAMES = [
    'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base',
    'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption',
    'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'dfn', 'dir', 'div', 'dl',
    'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
    'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend',
    'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'nav', 'noscript',
    'object', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'progress', 'q',
    'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small',
    'source', 'span', 'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td',
    'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'u', 'ul', 'video',
];
var exported = { SVG_TAG_NAMES: SVG_TAG_NAMES, TAG_NAMES: TAG_NAMES, svg: svg, isSelector: isSelector, createTagFunction: createTagFunction };
TAG_NAMES.forEach(function (n) {
    exported[n] = createTagFunction(n);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exported;
//# sourceMappingURL=hyperscript-helpers.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function logToConsoleError(err) {
    var target = err.stack || err;
    if (console && console.error) {
        console.error(target);
    }
    else if (console && console.log) {
        console.log(target);
    }
}
function makeSinkProxies(drivers, streamAdapter) {
    var sinkProxies = {};
    for (var name_1 in drivers) {
        if (drivers.hasOwnProperty(name_1)) {
            var subject = streamAdapter.makeSubject();
            var driverStreamAdapter = drivers[name_1].streamAdapter || streamAdapter;
            var stream = driverStreamAdapter.adapt(subject.stream, streamAdapter.streamSubscribe);
            sinkProxies[name_1] = {
                stream: stream,
                observer: subject.observer,
            };
        }
    }
    return sinkProxies;
}
function callDrivers(drivers, sinkProxies, streamAdapter) {
    var sources = {};
    for (var name_2 in drivers) {
        if (drivers.hasOwnProperty(name_2)) {
            var driverOutput = drivers[name_2](sinkProxies[name_2].stream, streamAdapter, name_2);
            var driverStreamAdapter = drivers[name_2].streamAdapter;
            if (driverStreamAdapter && driverStreamAdapter.isValidStream(driverOutput)) {
                sources[name_2] = streamAdapter.adapt(driverOutput, driverStreamAdapter.streamSubscribe);
            }
            else {
                sources[name_2] = driverOutput;
            }
            if (sources[name_2] && typeof sources[name_2] === 'object') {
                sources[name_2]._isCycleSource = name_2;
            }
        }
    }
    return sources;
}
function replicateMany(sinks, sinkProxies, streamAdapter) {
    var sinkNames = Object.keys(sinks).filter(function (name) { return !!sinkProxies[name]; });
    var buffers = {};
    var replicators = {};
    sinkNames.forEach(function (name) {
        buffers[name] = { next: [], error: [], complete: [] };
        replicators[name] = {
            next: function (x) { return buffers[name].next.push(x); },
            error: function (x) { return buffers[name].error.push(x); },
            complete: function (x) { return buffers[name].complete.push(x); },
        };
    });
    var subscriptions = sinkNames.map(function (name) {
        return streamAdapter.streamSubscribe(sinks[name], {
            next: function (x) {
                replicators[name].next(x);
            },
            error: function (err) {
                logToConsoleError(err);
                replicators[name].error(err);
            },
            complete: function (x) {
                replicators[name].complete(x);
            },
        });
    });
    var disposeFunctions = subscriptions
        .filter(function (fn) { return typeof fn === 'function'; });
    sinkNames.forEach(function (name) {
        var observer = sinkProxies[name].observer;
        var next = observer.next;
        var error = observer.error;
        var complete = observer.complete;
        buffers[name].next.forEach(next);
        buffers[name].error.forEach(error);
        buffers[name].complete.forEach(complete);
        replicators[name].next = next;
        replicators[name].error = error;
        replicators[name].complete = complete;
    });
    return function () {
        disposeFunctions.forEach(function (dispose) { return dispose(); });
    };
}
function disposeSources(sources) {
    for (var k in sources) {
        if (sources.hasOwnProperty(k) && sources[k]
            && typeof sources[k].dispose === 'function') {
            sources[k].dispose();
        }
    }
}
var isObjectEmpty = function (obj) { return Object.keys(obj).length === 0; };
function Cycle(main, drivers, options) {
    if (typeof main !== "function") {
        throw new Error("First argument given to Cycle must be the 'main' " +
            "function.");
    }
    if (typeof drivers !== "object" || drivers === null) {
        throw new Error("Second argument given to Cycle must be an object " +
            "with driver functions as properties.");
    }
    if (isObjectEmpty(drivers)) {
        throw new Error("Second argument given to Cycle must be an object " +
            "with at least one driver function declared as a property.");
    }
    var streamAdapter = options.streamAdapter;
    if (!streamAdapter || isObjectEmpty(streamAdapter)) {
        throw new Error("Third argument given to Cycle must be an options object " +
            "with the streamAdapter key supplied with a valid stream adapter.");
    }
    var sinkProxies = makeSinkProxies(drivers, streamAdapter);
    var sources = callDrivers(drivers, sinkProxies, streamAdapter);
    var sinks = main(sources);
    if (typeof window !== 'undefined') {
        window.Cyclejs = { sinks: sinks };
    }
    var run = function () {
        var disposeReplication = replicateMany(sinks, sinkProxies, streamAdapter);
        return function () {
            disposeSources(sources);
            disposeReplication();
        };
    };
    return { sinks: sinks, sources: sources, run: run };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cycle;
//# sourceMappingURL=index.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adaptStream = function (x) { return x; };
function setAdapt(f) {
    adaptStream = f;
}
exports.setAdapt = setAdapt;
function adapt(stream) {
    return adaptStream(stream);
}
exports.adapt = adapt;

},{}],2:[function(require,module,exports){
(function (global){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = (typeof window !== "undefined" ? window['xstream'] : typeof global !== "undefined" ? global['xstream'] : null);
var adapt_1 = require("./adapt");
function logToConsoleError(err) {
    var target = err.stack || err;
    if (console && console.error) {
        console.error(target);
    }
    else if (console && console.log) {
        console.log(target);
    }
}
function makeSinkProxies(drivers) {
    var sinkProxies = {};
    for (var name_1 in drivers) {
        if (drivers.hasOwnProperty(name_1)) {
            sinkProxies[name_1] = xstream_1.default.createWithMemory();
        }
    }
    return sinkProxies;
}
function callDrivers(drivers, sinkProxies) {
    var sources = {};
    for (var name_2 in drivers) {
        if (drivers.hasOwnProperty(name_2)) {
            sources[name_2] = drivers[name_2](sinkProxies[name_2], name_2);
            if (sources[name_2] && typeof sources[name_2] === 'object') {
                sources[name_2]._isCycleSource = name_2;
            }
        }
    }
    return sources;
}
// NOTE: this will mutate `sources`.
function adaptSources(sources) {
    for (var name_3 in sources) {
        if (sources.hasOwnProperty(name_3)
            && sources[name_3]
            && typeof sources[name_3]['shamefullySendNext'] === 'function') {
            sources[name_3] = adapt_1.adapt(sources[name_3]);
        }
    }
    return sources;
}
function replicateMany(sinks, sinkProxies) {
    var sinkNames = Object.keys(sinks).filter(function (name) { return !!sinkProxies[name]; });
    var buffers = {};
    var replicators = {};
    sinkNames.forEach(function (name) {
        buffers[name] = { _n: [], _e: [] };
        replicators[name] = {
            next: function (x) { return buffers[name]._n.push(x); },
            error: function (err) { return buffers[name]._e.push(err); },
            complete: function () { },
        };
    });
    var subscriptions = sinkNames
        .map(function (name) { return xstream_1.default.fromObservable(sinks[name]).subscribe(replicators[name]); });
    sinkNames.forEach(function (name) {
        var listener = sinkProxies[name];
        var next = function (x) { listener._n(x); };
        var error = function (err) { logToConsoleError(err); listener._e(err); };
        buffers[name]._n.forEach(next);
        buffers[name]._e.forEach(error);
        replicators[name].next = next;
        replicators[name].error = error;
        // because sink.subscribe(replicator) had mutated replicator to add
        // _n, _e, _c, we must also update these:
        replicators[name]._n = next;
        replicators[name]._e = error;
    });
    buffers = null; // free up for GC
    return function disposeReplication() {
        subscriptions.forEach(function (s) { return s.unsubscribe(); });
        sinkNames.forEach(function (name) { return sinkProxies[name]._c(); });
    };
}
function disposeSources(sources) {
    for (var k in sources) {
        if (sources.hasOwnProperty(k) && sources[k] && sources[k].dispose) {
            sources[k].dispose();
        }
    }
}
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}
/**
 * A function that prepares the Cycle application to be executed. Takes a `main`
 * function and prepares to circularly connects it to the given collection of
 * driver functions. As an output, `setup()` returns an object with three
 * properties: `sources`, `sinks` and `run`. Only when `run()` is called will
 * the application actually execute. Refer to the documentation of `run()` for
 * more details.
 *
 * **Example:**
 * ```js
 * import {setup} from '@cycle/run';
 * const {sources, sinks, run} = setup(main, drivers);
 * // ...
 * const dispose = run(); // Executes the application
 * // ...
 * dispose();
 * ```
 *
 * @param {Function} main a function that takes `sources` as input and outputs
 * `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Object} an object with three properties: `sources`, `sinks` and
 * `run`. `sources` is the collection of driver sources, `sinks` is the
 * collection of driver sinks, these can be used for debugging or testing. `run`
 * is the function that once called will execute the application.
 * @function setup
 */
function setup(main, drivers) {
    if (typeof main !== "function") {
        throw new Error("First argument given to Cycle must be the 'main' " +
            "function.");
    }
    if (typeof drivers !== "object" || drivers === null) {
        throw new Error("Second argument given to Cycle must be an object " +
            "with driver functions as properties.");
    }
    if (isObjectEmpty(drivers)) {
        throw new Error("Second argument given to Cycle must be an object " +
            "with at least one driver function declared as a property.");
    }
    var sinkProxies = makeSinkProxies(drivers);
    var sources = callDrivers(drivers, sinkProxies);
    var adaptedSources = adaptSources(sources);
    var sinks = main(adaptedSources);
    if (typeof window !== 'undefined') {
        window.Cyclejs = window.Cyclejs || {};
        window.Cyclejs.sinks = sinks;
    }
    function run() {
        var disposeReplication = replicateMany(sinks, sinkProxies);
        return function dispose() {
            disposeSources(sources);
            disposeReplication();
        };
    }
    ;
    return { sinks: sinks, sources: sources, run: run };
}
exports.setup = setup;
/**
 * Takes a `main` function and circularly connects it to the given collection
 * of driver functions.
 *
 * **Example:**
 * ```js
 * import run from '@cycle/run';
 * const dispose = run(main, drivers);
 * // ...
 * dispose();
 * ```
 *
 * The `main` function expects a collection of "source" streams (returned from
 * drivers) as input, and should return a collection of "sink" streams (to be
 * given to drivers). A "collection of streams" is a JavaScript object where
 * keys match the driver names registered by the `drivers` object, and values
 * are the streams. Refer to the documentation of each driver to see more
 * details on what types of sources it outputs and sinks it receives.
 *
 * @param {Function} main a function that takes `sources` as input and outputs
 * `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Function} a dispose function, used to terminate the execution of the
 * Cycle.js program, cleaning up resources used.
 * @function run
 */
function run(main, drivers) {
    var _a = setup(main, drivers), run = _a.run, sinks = _a.sinks;
    if (typeof window !== 'undefined' && window['CyclejsDevTool_startGraphSerializer']) {
        window['CyclejsDevTool_startGraphSerializer'](sinks);
    }
    return run();
}
exports.run = run;
exports.default = run;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./adapt":1}]},{},[2])(2)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@cycle/dom/lib/index.js
var lib = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@cycle/xstream-run/lib/index.js
var xstream_run_lib = __webpack_require__(41);
var xstream_run_lib_default = /*#__PURE__*/__webpack_require__.n(xstream_run_lib);

// CONCATENATED MODULE: ./code.js

var code_score = 0;
var goals = 0;
var operator = 'add';

var code_Monad = function Monad(z = 42, g = 'generic') {
    this.x = z;
    this.id = g;
    this.bnd = function (func, ...args) {
      var m = func(this.x, ...args)
      var mon;
      if (m instanceof Monad) {
        mon = testPrefix(args,this.id);
        return window[mon] = new Monad(m.x, mon);
      }
      else return m;
    };
    this.ret = function (a) {
      return window[_this.id] = new Monad(a,_this.id);
    };
  };

  function testPrefix (x,y) {
    var t = y;
    var s;
    if (Array.isArray(x)) {
      x.some(v => {
        if (typeof v === 'string' && v.charAt() === '$') {
           t = v.slice(1, v.length);
        }
      })
    }
    return t;
  }  

var primes= Object(lib["h"])('pre',  `    function MonadState(g, state) {
      this.id = g;
      this.s = state;
      this.bnd = (func, ...args) => func(this.s, ...args);  
    };

    var primesMonad = new MonadState('primesMonad', [3, [], 3, [2,3]]);
    Object.freeze(primesMonad);

    function isPrime(n) {
       if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
       var m = Math.sqrt(n);
       for (var i=2;i<=m;i++) if (n%i==0) return false;
       return true;
    }

    function *gen(x) {
      var x = x
      while(true) {
        if(isPrime(x)) yield x;
        x++;
      }
    }

    var primesIt = gen(primesMonad.s[2]+1);

    function execP (state, num) {   // This function is used to update primesMonad.
      var x = state[2];
      var primes = state[3].slice();
      if (x < num) {
        var end = 0;
        while (end < num) {
          primes.push(primesIt.next().value);
          end = primes[primes.length - 1];
        }
        return [end, primes, end, primes]
      }
      else {
        var number = primes.indexOf(num) + 1;
        var newP = primes.slice(number);
        return [newP[newP.length - 1], newP, x, primes];
      }
    }  `  )

var primes2 = Object(lib["h"])('pre',  `    const workerB$ = sources.WWB.map(m => {
      console.log('In workerB$ stream in the main thread. m, m[3] ', m, m.data[3] );
      if (m.data[3] === 'color') {  // Updates the color display.
        fill1Monad.ret(m.data[0]);
        fill2Monad.ret(m.data[1]);
        fill3Monad.ret(m.data[2]);
        mMprimeBlurb.ret(m.data[5]);
        mMfibBlurb.ret(m.data[4]);
        mMprimeFibBlurb.ret(m.data[6]);  
      }
      else {
        console.log('m.data[3] ********************', m.data[3] );
        mMelapsed.ret(elapsed(m.data[0][3]))
        .bnd(v =>  console.log(v));
        mMres.ret(m.data[0])
        window['primesMonad'] = new MonadState('primesMonad', m.data[1], primes_state);
      }
    }); `  )

var primes3 = Object(lib["h"])('pre',  `    var fibKeyPress5$ = sources.DOM
        .select('input#fib92').events('keyup');

    var primeFib$ = fibKeyPress5$.map(e => {
      workerB.postMessage([primesMonad.s, e.target.value]);
    });   `  )

var primes4 = Object(lib["h"])('pre',  `    execF(ar[1]).bnd(fpTransformer, ar[0], x)  `  )

const monadIt = Object(lib["h"])('pre', {style: {color: '#AFEEEE' }}, `  var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
      return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
      return this.p = func;
    };
  }; ` )
  
  var quad = Object(lib["h"])('pre',  `  var solve = function solve () {
     mMZ3.bnd(a => {
     mMquad4.ret('');
     mMquad6.ret('');
     mMquad5.ret(a + " * x * x ")
     mMZ3.bnd(b => {
     mMquad6.ret(b + ' * x ')
     mMZ3.bnd(c => {
     mMtemp.ret([a,b,c])
    .bnd(gMap, qS4,'mMtemp2')
    .bnd(result => {
      let x = result[0]
      let y = result[1]
      if (x === 0) {
        mMquad5.ret('No solution', mMtemp)
        mMquad6.ret(' ');
        solve();
        return;
      }
      if (y === 0) {
        mMquad5.ret('No solution')
        mMquad6.ret(' ')
        solve();
        return;
      };
      mMquad4.ret("Solutiions for " + a + ", " + b + " and " + c + " are " + x + " and  " + y)
      mMquad5.ret(p(a).text + " * " + x + " * " + x + " + " + p(b).text +
              " * " + x + " " + p(c).text + " = 0")
      mMquad6.ret(p(a).text + " * " + y + " * " + y + " + " + p(b).text +
              " * " + y + " " + p(c).text + " = 0")
      solve();   // Continuing the endless loop.
      }) }) }) })
  };
  solve(); `)

  var quad2 = Object(lib["h"])('pre', `  function gMap(x, f, id) {
    var mon = new Monad(f(x), id);
    window[id] = mon;
    return mon;
  }

  var qS1 = function qS1(a, b, c) {
      var n = (b * (-1)) + (Math.sqrt(b * b - 4 * a * c));
      if (n != n) {
          return 0;
      }
      return n / (2 * a);
  };
  var qS2 = function qS2(a, b, c) {
      var n = (b * (-1)) - (Math.sqrt(b * b - 4 * a * c));
      if (n != n) {
          return 0;
      }
      return n / (2 * a);
  };
  var qS3 = function qS3(a, b, c) {
      return [qS1(a, b, c), qS2(a, b, c)];
  };
      var qS4 = function qS4 ([x,y,z]) {
        let [a,b,c] = [numProtect(x),numProtect(y),numProtect(z)]
        return [qS1(a,b,c), qS2(a,b,c)]
      }

  var qS4 = function qS4(_a) {
      var x = _a[0], y = _a[1], z = _a[2];
      var _b = [x, y, z], a = _b[0], b = _b[1], c = _b[2];
      return qS3(a, b, c);
  };

  var quad$ = sources.DOM
      .select('#quad').events('keypress');

  var quadAction$ = quad$.map(function (e) {
      if (e.keyCode === 13) {
          mMZ3.release(e.target.value);
          document.getElementById('quad').value = null;
      }
  }); `  )



var monad = Object(lib["h"])('div',  [
Object(lib["h"])('h1', 'The Monads'),
Object(lib["h"])('p', ' The definition of Monad, which is the basic monad constructor, is a little complicated. It isn\'t intended as a puzzle, so a little explanation is in order. ' ),
Object(lib["h"])('p', ' The term "monad" will mean "instance of Monad". Monad could have been defined as a class, but the current definition suffices. ' ),
Object(lib["h"])('p', ' Monads are created by code such as "const m = new Monad("anything", "m")". The arguments will be the values of m.x and m.id. The first argument can be any Javascript value, such as string, array, or monad. The second argument should be the name of the monad. ' ),
Object(lib["h"])('p', ' A monad, say "m", can be replaced by another monad named "m" in the global space through the use of the method "ret()". It looks like m.x gets mutated, but that isn\'t what happens. Previously defined references to m retain their values, as demonstrated below: '),

Object(lib["h"])('pre',
`var m = new Monad (5, 'm');
var arr = [m];
var p = m;
m.ret(100);
console.log(m.x, arr[0].x, p.x);
// 100, 5, 5
` ),

Object(lib["h"])('p', ' In global scope (window in the browser), m.x changed to 100; but p and arr still refer to 5, the previous value of m.x. Similarly, when a monad uses its bnd() method to modify its x attribute, the change is seen globally, but nowhere else. Previous references to the monad remain stable, as this example illustrates: ' ),

Object(lib["h"])('pre',
`var m = new Monad (5, 'm');
var arr = [m];
var p = m;
m.bnd(add,95);
console.log(m.x, arr[0].x, p.x);
// 100, 5, 5
` ),

Object(lib["h"])('p', ' Had there been no reference to m, the previous instance would have been subject to removal by the garbage collector. ' ),
Object(lib["h"])('p', ' It is possible to mutate monads with code such as m.x = 888. That might be a good thing to do in a function with many recursions, but it seems like a misuse of monads. Monads are never mutated on this website. Object.freeze() is used to prevent mutation in the definition of primesMonad (shown below). '),
  Object(lib["h"])('p', ' The bnd() method can leave the calling monad\'s global value unchanged while assigning a value (in the global space) to another previously defined monad, or to a freshly created monad. So regardless of whether or not "m2" is defined, m.ret(4).bnd(cube,"$m2") causes m.x === 4 and m2.x === 64 to both return true. ' ),

Object(lib["h"])('pre',
`m.ret(4).bnd(cube,"$m2")
console.log(m.x, m2.x)   // 4 64
m.ret(0).bnd(add,3,"$m2").bnd(cube,"$m3")
console.log(m.x, m2.x, m3.x)  // 0 3 27
` ),

Object(lib["h"])('p', ' The definition of Monad (below) shows how bnd() checks to see if func(m.x, ...args) returns a monad. If it does, "testPrefix" looks for a pattern that matches "$val" in the arguments that were provided to m.bnd(func, ...args). If the pattern is found, the global space acquires a monad named "val" with val.x === func(m.x, ...args). If no monad named "val" previously existed, one is created. Otherwise, val\'s global definition gets superseded. val can be any sequence of characters that constitute a valid javascript identifier. ' ),
Object(lib["h"])('p', ' Instances of Monad facilitate changing values without mutation. They also provide a way to chain function calls. For example, m.ret(2).bnd(add, 1).bnd(cube) causes m.x === 27 to return true. This works because ret(), add, and cube all return monads when they are applied to m.x. The definition of add and cube are shown below and can be found in the Github repository. ' ),
Object(lib["h"])('p', ' If the three numbers from the previous sequence were all that we required, we could obtain them more efficiently by running: ' ),
Object(lib["h"])('pre',
`var demoResult = ret(0).bnd(x => add(x, 3).bnd(y => cube(y).bnd(z => [x,y,z])));
console.log('We started with', demoResult[0], 
    'and got', demoResult[1], 'and', demoResult[2]);
The console displays "We started with 0 and got 3 and 27"
` ),
Object(lib["h"])('p', ' Doing it that was leaves only one monad - the one named "temp" - for the garbage collector. It also eliminates concern about name collisions among the monads. There is little danger that a monad named "temp" is being used to store a value somewhere else in the application code. The temp monad is obviously not a monad for preserving values. The result could have been logged to the console or used in further computations without creating a reference to it.' ),
Object(lib["h"])('pre',
`ret(0).bnd(x => add(x, 3).bnd(y => cube(y).bnd(z =>
console.log('We started with', x, 'and got', y, 'and', z))));
The console displays "We started with 0 and got 3 and 27"
` ),
Object(lib["h"])('p', ' More complex, multi-stage computations in sequenced monads are demonstrated later in this presentation. If such monads don\'t depend on information that exists outside of their scope, their effects in a running application are easier to grasp, and opportunities for unintended behavior in edge cases are minimized. Developers can gain further control and confidence in their applications by allowing only the last monad in any sequence to make changes in global scope. Code is easier to write and maintain when you can readily pinpoint a minimal number of places where an application\'s state gets updated. ' ),
Object(lib["h"])('p', ' So, with that out of the way, here are the definitions of Monad and testPrefix: ' ),

Object(lib["h"])('h3', ' Monad '),
Object(lib["h"])('pre',  `  var Monad = function Monad(z = 42, g = 'generic') {
    this.x = z;
    this.id = g;
    this.bnd = function (func, ...args) {
      var m = func(this.x, ...args)
      var mon;
      if (m instanceof Monad) {
        mon = testPrefix(args,this.id);
        return window[mon] = new Monad(m.x, mon);
      }
      else return m;
    };
    this.ret = function (a) {
      return window[_this.id] = new Monad(a,_this.id);
    };
  };
  function testPrefix (x,y) {
    var t = y;
    var s;
    if (Array.isArray(x)) {
      x.some(v => {
        if (typeof v === 'string' && v.charAt() === '$') {
           t = v.slice(1, v.length);
        }
      })
    }
    return t;
  }  `  ) ])

var variations = Object(lib["h"])('div',  [
Object(lib["h"])('h3', 'Variations on the Theme' ),
Object(lib["h"])('p', ' Variations on the Monad theme serve diverse purposes. Instances of MonadState preserve computations so they won\'t have to be performed again. An instance of MonadState2 keeps a record of game play allowing players to back up and resume play from a previous display of numbers. It also keeps the current game parameters - score, goals, operator, selected numbers, and remaining numbers - in a single array which is stored in the archive whenever a new state is created. MonadItter instances are used to parse websockets messages and organize the callbacks neatly. MonadEr catches NaN and prefents crashes when undefined variables are encountered. I defined a message emitting monad but it seemed useless in this Cycle application where reactivity is pervasive. When you want to emit and listen for messages, it is better to build a driver and merge its stream of messages into the application cycle. '),

Object(lib["h"])('p', ' The various monad constructors demonstrate a way of encapsulating procedures and state in chainable objects. You might incorporate Monad or one of the other constructors presented here in your application, but I think the thing that is most valuable is the general concept. I prefer Cycle.js, but I think the monads might make Node, React and some of the other frameworks more manageable. ' ),

Object(lib["h"])('h3', 'Computations' ),
Object(lib["h"])('p', ' Computations are easy to link if each result is returned in an instance of Monad. Here are a few examples of functions that return instances of Monad: '),
  Object(lib["h"])('pre',  `  function ret(v, id = 'temp') {
      window[id] = new Monad(v, id);
      return window[id];
    }
    function cube (v, id) {
      return ret(v * v * v);
    };
    function add (x, b) {
      return ret(parseInt(x,10) + parseInt(b,10) );
    };
    function log(x,y) {
        console.log(y)
        return ret(x);
    };  `  ),
Object(lib["h"])('p', ' The "$" prefix provides control over the destination of computation results. In the following example, m1, m2, and m3 have already been declared. Here is a comparison of the results obtained when the "$" prefix is used and when it is omitted: ' ),

Object(lib["h"])('pre', `    m1.ret(7).bnd(m2.ret).bnd(m3.ret)  // All three monads get the value 7.
    m1.ret(0).bnd(add,3,'m2').bnd(cube,'m3')  // \'m1\', \'m2\', and \'m3\' are ignored` ),
Object(lib["h"])('pre', `    Result: m1.x === 27
            m2.x === 7
            m3.x === 7  ` ),
Object(lib["h"])('pre', `    m1.ret(0).bnd(add,3,'$m2').bnd(cube,'$m3')   ` ),
Object(lib["h"])('pre', `    Result: m1.x === 0
            m2.x === 3
            m3.x === 27  ` ),
Object(lib["h"])('p', ' If the prefix "$" is absent, bnd() ignores the string argument. But when the "$" prefix is present, m1 retains its initial value, m2 retains the value it gets from from adding m\'s value (which is 0) to 3, and m3.x is the result of applying "cube" to m2.x. Both forms could be useful. ' ),
Object(lib["h"])('p', ' The following example shows lambda expressions sending variables v1 and v2 through a sequence of computations and v3 sending the final result to the string that is logged. It also shows monads a, b, c, d, e, f, and g being updated and preserved in an array that is not affected by further updates. That is because calling the ret() method does not mutate a monad; it creates a fresh instance with the same name. Here is the example, shown in a screen shot of the Chrome console:. ' ),
Object(lib["h"])('img.image', {props: {src: "demo_000.png"}}  ),
Object(lib["h"])('h3', ' The Monad Laws '),
Object(lib["h"])('p', ' In the following discussion, "x === y" signifies that the expression x === y returns true. Let J be the collection of all Javascript values, including functions, instances of Monad, etc, and let F be the collection of all functions mapping values in J to instances of Monad with references (names) matching their ids; that is, with window[id] === m.id for some id which is a valid es2015 variable name. The collection of all such instances of Monad along and all of the functions in F is called "M". For any instances of Monad m, m1, and m2 in M and any functions f and g in F, the following relationships follow easily from the definition of Monad: '),
Object(lib["h"])('div', 'Left Identity ' ),
Object(lib["h"])('pre', `    m.ret(v, ...args).bnd(f, ...args).x === f(v, ...args).x
    ret(v, ...args).bnd(f, ...args).x === f(v, ...args).x
    Examples: m.ret(3).bnd(cube).x === cube(3).x  Tested and verified
    ret(3).bnd(cube).x === cube(3).x     Tested and verified
    Haskell monad law: (return x) >>= f \u2261 f x  ` ),
Object(lib["h"])('div#discussion', ' Right Identity  ' ),
Object(lib["h"])('pre', `    m.bnd(m.ret) === m      Tested and verified
    m.bnd(m.ret) === m   Tested and verified
    m.bnd(ret) === m  Tested and verified
    Haskell monad law: m >>= return \u2261 m `  ),
    Object(lib["h"])('div', ' Commutivity  ' ),
    Object(lib["h"])('pre', `    m.bnd(f1, ...args).bnd(f2, ...args).x === m.bnd(v => f1(v, ...args).bnd(f2, ...args)).x
    Example: m.ret(0).bnd(add, 3).bnd(cube).x ===
    m.ret(0).bnd(v => add(v,3).bnd(cube)).x  Tested amd verified
    Haskell monad law: (m >>= f) >>= g \u2261 m >>= ( \\x -> (f x >>= g) ) `),
Object(lib["h"])('a', { props: { href: '#top' } }, 'Back To The Top'),
Object(lib["h"])('h3', ' Disussion ' ),
Object(lib["h"])('span.tao', ' The Haskell statement ' ),
Object(lib["h"])('span.turk6', `f \u2261 g` ),
Object(lib["h"])('span', ' means that f x == g x for all Haskell values x of the appropriate type. That is the test applied to Javascript expressions in the "Monad Laws" section (above). Neither the == nor the === operator would provide useful information about the behavior of instances of Monad, which are objects. Those operators test objects for location in memory. If the left and right sides of predicates create new instances of m, then the left side m and the right side m wind up in different locations in memory. So we expect m.ret(3) === m.ret(3) to return false, and it does. The question we want answered is the question \u2261 answers in Haskell: Can the left and right sides be substituted for one another and still yield the same results.'),
Object(lib["h"])('br' ),
Object(lib["h"])('br' ),
Object(lib["h"])('span.tao', ' The Haskell programming language borrowed the term "monad" from the branch of mathematics known as category theory. This was apropriate because Haskell monads, along with the function return and the operator >>=, behave quite a bit like category theory monads, and the inspiration for them came out of category theory. For Haskell monads to actually be category theory monads, they would need to reside in a category-theory category. They don\'t, although the Haskell mystique tends to give newcommers to the language the impression that they do. See ' ),
Object(lib["h"])('a', { props: { href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/", target: "_blank" } }, 'Hask is not a category.'),
Object(lib["h"])('br' ),
Object(lib["h"])('p', ' Research into ways of defining a Haskell category appears to be ongoing. It involves tinkering with special constraints, omitted features, and definitions of morphisms that are not Haskell functions. When a definition of the category is established, Haskell monads are then shown to be, in some contrived context, category-theory monads. Devising such schemes are instructive academic exercises, but I don\'t think they can provide anything useful to programmers working on applications for industry, commerce, and the Internet. ' ),
Object(lib["h"])('p', ' However, imitating definitions and patterns found in category theory, as Haskell does in defining the functor, monoid, and monad type classes, was a stroke of genius that vastly enriched the Haskell programming language and brought it into the mainstream as a viable alternative to java, c++, etc.  This website runs efficiently on a Haskell websockets server. The modified Haskell Wai Websockets server has proven to be extraordinarily easy to maintain as new requirements become necessary. For example, modifying the server to send chat messages and shared todo lists only to members of the same group was a trivial task. It required just a tiny amount of pattern-matching code. Category theory patterns make the Haskell interface to the Cycle front end robust, versitile, and reliable. Those are the qualities that I strive to emulate with JS-monads.'  ) ])

var p503j = Object(lib["h"])('pre',  `
`  )

var cycle = Object(lib["h"])('div',  [
Object(lib["h"])('h3', {style: {textAlign: "center"}}, ' A Few Words About Cycle.js ' ),
Object(lib["h"])('p', ' Opinionated frameworks tend to annoy and frustrate me. Cycle, on the other hand, is easy on my mind. I love it.' ),
Object(lib["h"])('p', ' In the early stages of developing this website, I had functions that mutated global variables. Sometimes, I directly mutated values in the DOM with statements like "document.getElementById(\'id\').innerHTML = newValue". Cycle didn\'t object. Over time, mutating variables and manhandling the DOM gave way to gentler techniques.  ' ),
Object(lib["h"])('p', ' Handling events is a breeze. Drivers eliminate the need to name event emitters or observers. Driver output in main() is available to any function or block of code that is interested. The result of any callback is in an event in a stream of events that automatically merge with the other streams that define main\'s return value, which is a blueprint for the updated user interface. This is breathtakingly elegant. main() is called only once, when the application loads. After that, the application hums like an enchanted perpetual motion machine. ' ),


Object(lib["h"])('pre', `function workerDriver () {
  return xs.create({
    start: listener => { worker.onmessage = msg => listener.next(msg)},
    stop: () => { worker.terminate() }
  });
};
function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)},
    stop: () => { socket.close() }
  });
};   ` )      ])


/* harmony default export */ var code = ({quad, quad2, monadIt, primes, primes2, primes3, primes4, monad});


// EXTERNAL MODULE: ./cycle-run.js
var cycle_run = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/ws/browser.js
var browser = __webpack_require__(42);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./main.js
  
  
  // import {makeHTTPDriver} from '@cycle/http';
  
  
  
  sock = browser_default.a;

  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& sock', sock);


console.log('WebSocket', WebSocket);
console.log('socket', socket);

// socket = new WebSocket("ws://localhost:3055");
socket = new WebSocket("ws://204.48.16.214:3055");

function bNode (arr) {
  var x = styl(arr.length);
  var node = Object(lib["h"])('div#bNode', [
    Object(lib["h"])('button#0.num', { style: { display: x[0] }}, ' ' + arr[0] + ' '),
    Object(lib["h"])('button#1.num', { style: { display: x[1] }}, ' ' + arr[1] + ' '),
    Object(lib["h"])('button#2.num', { style: { display: x[2] }}, ' ' + arr[2] + ' '),
    Object(lib["h"])('button#3.num', { style: { display: x[3] }}, ' ' + arr[3] + ' ')
  ]);
  return node;
}

MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice(),
  playerName = pMname.x,
  playerGroup = pMgroup.x
]) {
  pMscore.ret(score);
  pMgoals.ret(goals);
  pMgroup.ret(playerGroup);
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display, playerName, playerGroup])
  this.s = newState;
  buttonNode = bNode(display);
  return window['gameMonad'] = new MonadState('gameMonad', newState);
}

function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);ar
  if (result === 18 || result === 20) {
    score(result);
  }
  else {
    var a = gameMonad.fetch4().slice();
    a.push(result);
    gameMonad.run([,,0,[],a,,]);
  }
};

function process (a) { //Assembles the HTML for display.
  var arr = a;
  commentMonad.html = [];
  var n = -1;
  arr.map(a => { 
    var x = a.split("<o>");
    if (x.length != 2) x = ['malfunction', '8888']
    x[1] = x[1].replace(/<<>>/g, ',');
    var show = showFunc(x[0], pMname.x);
    n+=1;
    commentMonad.html.push(Object(lib["h"])('div#'+n, [
      Object(lib["h"])('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
      Object(lib["h"])('br'),
      Object(lib["h"])('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      Object(lib["h"])('button#deleteB', {props: {innerHTML: 'delete'}, style: {display: show, fontSize:14}}),
      Object(lib["h"])('br' ),
      Object(lib["h"])('span', '***************************************************************')
    ]))
  })
}

function pfactors (primes, n) {
  var ar = [];
  while (n != 1) {
    primes.map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  }
  return ar;
}

MonadState3.prototype.init = function (str) { // All comments delivered on load.
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  result444 = process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  console.log('this.s[1]',this.s[1]);  
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  console.log(this.s[1]);
  this.s[1] = this.s[1].filter(v => v!== '');
  console.log(this.s[1]);
  this.s[1].splice(num,1);
  console.log(this.s[1]);
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  this.s[0] = this.s[1].join("<@>");
  process(this.s[1]);
};

MonadState3.prototype.init = function (str) { // All comments delivered on load.
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  result444 = process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  console.log('this.s[1]',this.s[1]);  
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  console.log(this.s[1]);
  this.s[1] = this.s[1].filter(v => v!== '');
  console.log(this.s[1]);
  this.s[1].splice(num,1);
  console.log(this.s[1]);
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  this.s[0] = this.s[1].join("<@>");
  process(this.s[1]);
};

var it7 = () => mMZ52.bnd(string => {
  callOrder = callOrder > 24 ? 1 : callOrder + 1;
  if (callOrder === 1) start77 = Date.now(); 
  m42_.push(callOrder + "  ");
  m42_.push(string)
  m42_.push(Object(lib["h"])('br'));
  if (callOrder === 25) m42_.push('Elapsed time: ' + (Date.now() - start77) + " ms");
});

var funcP = () => {
  var fred = [];
  bind(1)(addP(2))(cubeC)(addC(3))(multP(2))(multC(3))
  (addC(30))(multP(1/5))(it4)(it6)(it7)(terminate).slice(1,9)
  .map(v => v.then(q => {
    fred.push(q.x);
    freday = fred.join(' ')
    diffRender()
  }))
}

function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)},
    stop: () => { socket.close() }
  });
};

socket.onclose = function (event) {
    console.log('<><><> ALERT - socket is closing. <><><> ', event);
};

  login();
  function login () {
    console.log('00000000000000000000000000000000 Entering login', socket.readyState);
    setTimeout(function () {
      if (socket.readyState === 1) {
        console.log('readyState is',socket.readyState);
        var v = Math.random().toString().substring(5);
        var v2 = v.toString().substring(2);
        var v2 = "password"
        playerName = v;
        playerGroup = "solo";
        pMname.ret(v);
        pMoldName.ret(v);
        pMgroup.ret('solo');
        gameMonad.run([0,0,0,[],[7,7,7,7],v,"solo"]);
        var combo = v + '<o>' + v2;
        socket.send('CC#$42' + combo );
        pMcombo.ret(combo);
        pMclicked.ret([]);
        socket.send(`GZ#$42,solo,${v}`);
      }
      else {
        login();
      }
    },1000 )
  }

  function main(sources) {
   console.log('0^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got to main()');

   const messages$ = sources.WS.map( e => {
     var v = e.data.split(',')
     var group = v[1]
     var sender =  v[2];
     var extra = v[3];
     var extra2 = v[4];

     mMZ9.bnd( () => {
       console.log("sender is",sender);
       console.log("extra is", extra);
       console.log("The full message is", e);
       console.log("v is", v);
     });

     mMZ10.bnd( () => {
       if (sender === pMname.x) {
         gameMonad.run([v[7], v[8], 0, [], [v[3], v[4], v[5], v[6]]]);
       }
       else gameMonad.run([, , , [], [v[3], v[4], v[5], v[6]]]);
     });

     mMZ11.bnd( () => {
       console.log('The message arrived', messages$);
       var message = v.slice(3,v.length).join(', ');
       var str = v[2] + ': ' + message;
       messages.unshift(Object(lib["h"])('span', str ), Object(lib["h"])('br'));
       console.log('The message was typeof ar', typeof str );
     });

     mMZ12.bnd( () => {
       mMgoals2.ret('The winner is ' + v[2]);
       setTimeout( function () {mMgoals2.ret('')},700);
     });

     mMZ13.bnd( () => {
       mMgoals2.ret('A player named ' + v[2] +
         ' is currently logged in. Page will refresh in 4 seconds.')
       refresh() });

     mMZ14.bnd( () => {
       var ar = e.data.split("<$>")[1];
       console.log("In mZ14.bnd - - ar is", ar);
       console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzztaskMonad',taskMonad);
       return taskMonad.init(ar);
     });

     mMZ15.bnd( () => {
       var ar = [];
       var arr = v[3].slice();
       var arr2 = arr.split("<$!$>");
       var arr3  = arr2.map(v => {
         console.log('In mMZ15.bnd ar, arr, arr2, and arr3 are', ar, arr, arr2, arr3),
         ar.push(v);
         ar.push(Object(lib["h"])('br'));
       });
       gameData = ar;
     });

     mMZ16.bnd( () => {                          // Prefix RR#$42
       var str = mMcommentStr.x;
       if (extra2 === "code1") {
         mMregister.ret('The registered name ' + extra + ' and the associated password were recognized. ' );
         socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
       }
       if (extra2 === "code2") {
         mMregister.ret('The new name ' + extra + ' was registered.' );
         socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
       }
       if (extra2 === "code3") {
         pMname.ret(sender);
         mMregister.ret('The password you entered is not the password that is registered for ' + tempName + '.' );
         mMshowRegister.ret('inline');
       }
     });

     mMZ17.bnd( () => {                          // Prefix GZ#$42
       var newStr = extra.substring(0, extra.length-3);
       newStr = newStr.replace(/<@><@>/g, "<@>");
       newStr = newStr.replace(/↵/g, '');
       if (newStr === "") return;
       commentMonad.init(newStr);
     });

     mMZ18.bnd( () => {                          // Prefix GN#$42  NEW COMMENT
       commentMonad.append(extra);
     });

     mMZ19.bnd( () => {                          // Prefix GE#$42  EDIT A COMMENT
       commentMonad.edit(extra, extra2);
       console.log('In mMZ19 to edit a comment. <><><><><><><> extra, extra2:',extra,extra2);
     });

     mMZ20.bnd( () => {                         // Prefix GD#$42  DELETE A COMMENT
       commentMonad.remove(parseInt(extra,10));
     });
    // ******************************************************* TASKS
     mMZ21.bnd( () => {        // add a new a task
       console.log('ooooooooooooooooooo New task from the server', extra);
       taskMonad.append(extra);
     });

     mMZ22.bnd( () => {        // edit a task
       taskMonad.edit(v[3],v[4]);
     });

     mMZ23.bnd( () => {
       console.log('In mMZ23 -- v[3] is', v[3]);
       taskMonad.toggle(v[3]);
     });

     mMZ24.bnd( () => {        //Delete a task
       taskMonad.delete(v[3]);
     });

     mMZ25.bnd( () => {        // Receive tasks when group changes
       console.log('QQQQQQ  Bingo! extra is QQQQQQQWWWWWWWWWWQQQQQQQQ in mMZ25.bnd. ',extra);
       taskMonad.html = taskMonad.init(extra);
     });

     mMZ27.bnd( () => {
       mMZ38.release(v[3]);
     });

     mMZ28.bnd( () => {
       if (playerName === sender) mMZ40.release(v[3]);
       else console.log('message from sender to BC#$42')
     });

     ret(v[0])
    .bnd(next, 'CC#$42', mMZ9)
    .bnd(next, 'CA#$42', mMZ10) // Dice roll
    .bnd(next, 'CD#$42', mMZ11)
    .bnd(next, 'CE#$42', mMZ12)
    .bnd(next, 'EE#$42', mMZ13)
    .bnd(next, 'TD#$42', mMZ14)
    .bnd(next, 'NN#$42', mMZ15)
    .bnd(next, 'RR#$42', mMZ16)
    .bnd(next, 'GZ#$42', mMZ17) // Comments automatically arrive after the app loads
    .bnd(next, 'GN#$42', mMZ18)
    .bnd(next, 'GE#$42', mMZ19)
    .bnd(next, 'GD#$42', mMZ20)
    .bnd(next, 'TA#$42', mMZ21)  // Automatic task list load on group change
    .bnd(next, 'TE#$42', mMZ22)  // edit a task
    .bnd(next, 'TT#$42', mMZ23)  // chechbox
    .bnd(next, 'TX#$42', mMZ24)  // delete button
    .bnd(next, 'TI#$42', mMZ25)  // group change
    .bnd(next, 'BB#$42', mMZ27)  // works in conjunction with it4
    .bnd(next, 'BC#$42', mMZ28)  // works in conjunction with it4
   });

function next(x, y, instance, z) {
  if (x == y) {
      instance.release(z);
  }
  return ret(x);
};

var itterResult = Object(lib["h"])('div', 'ready' );
var doubleResult = Object(lib["h"])('div', 'ready' );

var comment$ = sources.DOM.select('#comment').events('keydown');

var commentAction$ = comment$.map(e => {
  if (e.keyCode == 13) {
    e.preventDefault();
    var comment = e.target.value.replace(/,/g, "<<>>");
    comment = pMname.x + "<o>" + comment
    socket.send(`GN#$42,${pMgroup.x},${pMname.x},<@>${comment}<@>`);
  }
});

var deleteClick2$ = sources.DOM
    .select('#deleteB').events('click');

var deleteAction2$ = deleteClick2$.map(function (e) {
    var index = parseInt(e.target.parentElement.id, 10);
    var old = commentMonad.s[1].slice(index,index+1)[0];
    socket.send(`GD#$42,${pMgroup.x},${pMname.x},${index},${old}`);
});

var editB$ = sources.DOM
    .select('textarea#commit').events('keydown');

var editBAction$ = editB$.map( function (e) {
  if (e.keyCode == 13) {
    var index = parseInt(e.target.parentElement.id, 10);
    var w = e.target.value.split(",");
    var nu = pMname.x + "<o>" + w.join('<<>>');
    var old = commentMonad.s[1].slice(index,index+1)[0];
    socket.send(`GE#$42,${pMgroup.x},${pMname.x},${index},${old},${nu}`);
  }
})

var abcde = 'inline';
var fghij = 'inline';

var registerPress$ = sources.DOM
    .select('input.register').events('keypress');

var registerPressAction$ = registerPress$.map(e => {
  mMerror.ret('');
  var str = e.target.value;
  var count = (str.match(/,/g) || []).length;
  if (count === 0) nameMess = "Please enter a name, a comma, and a password";
  else if (count > 1) nameMess = "Commas are not allowed in names or passwords";
  else nameMess = '';
  var art = str.split(',');
  if (e.keyCode === 13) {
    mMerror.ret('');
    if (art.length != 2) {
      mMerror.ret(' There should be one and only one comma' );
      return;
    }
    else {
      var name = art[0];
      pMname.ret(art[0]);
      tempName = name;
      var x = art.join('<o>');
      mMshowRegister.ret('none');
      playerName = name;
      console.log('pMname.x is', pMname.x );
      console.log(pMname.x === playerName);
      socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`); }
      setTimeout(function () {
        socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
      },700);
  }
});

    var groupPress$ = sources.DOM
        .select('input#group').events('keypress');

    var groupPressAction$ = groupPress$.map(e => {
      if (e.keyCode === 13 && e.target.value ) {
        var g = e.target.value.replace(/,/g, '');
        send("CO#$42", g);
        gameMonad.run([0,0,0,[],[0,0,0,0],,g]);
        socket.send(`TI#$42,${g},${pMname.x}`);
      }
    });

var messagePress$ = sources.DOM
    .select('input.inputMessage').events('keydown');

var messagePressAction$ = messagePress$.map(function (e) {
    if (e.keyCode === 13) {
        socket.send(`CD#$42,${pMgroup.x},${pMname.x},${e.target.value}`);
        e.target.value = '';
    }
});

var updatePlayers = function updatePlayers (data) {
  sMplayers.s.clear();
  var namesL = data.split("<br>");
  namesList = namesL.slice(1);
  updateScore(namesList);
  namesList.forEach(player => sMplayers.s.add(player.trim()));
}

function updateScore(v) {
  var g = [];
  for (let k of v) {
      g.push(Object(lib["h"])('div', '  ' + k));
  };
  return g
};

var m80Change$ = sources.DOM
  .select('#m80').events('change');

var m80Action$ = m80Change$.map(() => {
});

//******************************************************** MATRIX

/*
var rNumsDS = [0,1,2,3]
console.log('rNumsDS', rNumsDS);
var rADS = [];

var rDataDS = [
  h('button#mR0', 0 ),
  h('button#mR1', 1 ),
  h('button#mR2', 2 ),
  h('button#mR3', 3 )
];

function rFuncDS (j,k,r) {
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  return r;
}  

function makeRDS (arr) {
  var r = arr.slice();
  return [
    h('button#mR0', r[0] ), 
    h('button#mR2', r[1] ),
    h('button#mR1', r[2] ), 
    h('button#mR3', r[3] ) 
  ];
};
*/


//****************************************************************** START MATRIX
var indexDS = 0;

function rMatrixF (a) {
  var cw1 = Math.sqrt(a[0]*a[5] + a[1]*a[4]);
  var cw2 = Math.sqrt(a[2]*a[7] + a[3]*a[6]);
  var cw3 = Math.sqrt(a[8]*a[13] + a[9]*a[12]);
  var cw4 = Math.sqrt(a[10]*a[15] + a[14]*a[11]);
  var cw = Math.sqrt(cw1*cw4 + cw2*cw3);
  return cw
}



var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var ArrDS = [ [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ];

function makeRDS (arr) {
  var r = arr;
  return [
    Object(lib["h"])('button#mR0.mR', r[0] ), 
    Object(lib["h"])('button#mR1.mR', r[1] ),
    Object(lib["h"])('button#mR2.mR', r[2] ), 
    Object(lib["h"])('button#mR3.mR', r[3] ), 
    Object(lib["h"])('button#mR4.mR', r[4] ), 
    Object(lib["h"])('button#mR5.mR', r[5] ),
    Object(lib["h"])('button#mR6.mR', r[6] ), 
    Object(lib["h"])('button#mR7.mR', r[7] ), 
    Object(lib["h"])('button#mR8.mR', r[8] ), 
    Object(lib["h"])('button#mR9.mR', r[9] ),
    Object(lib["h"])('button#mR10.mR', r[10] ), 
    Object(lib["h"])('button#mR11.mR', r[11] ), 
    Object(lib["h"])('button#mR12.mR', r[12] ), 
    Object(lib["h"])('button#mR13.mR', r[13] ),
    Object(lib["h"])('button#mR14.mR', r[14] ), 
    Object(lib["h"])('button#mR15.mR', r[15] ) 
  ];
};

var rDataDS = [
  Object(lib["h"])('button#mR0.mR', 0 ),
  Object(lib["h"])('button#mR1.mR', 1 ),
  Object(lib["h"])('button#mR2.mR', 2 ),
  Object(lib["h"])('button#mR3.mR', 3 ),
  Object(lib["h"])('button#mR4.mR', 4 ),
  Object(lib["h"])('button#mR5.mR', 5 ),
  Object(lib["h"])('button#mR6.mR', 6 ),
  Object(lib["h"])('button#mR7.mR', 7 ),
  Object(lib["h"])('button#mR8.mR', 8 ),
  Object(lib["h"])('button#mR9.mR', 9 ),
  Object(lib["h"])('button#mR10.mR', 10 ),
  Object(lib["h"])('button#mR11.mR', 11 ),
  Object(lib["h"])('button#mR12.mR', 12 ),
  Object(lib["h"])('button#mR13.mR', 13 ),
  Object(lib["h"])('button#mR14.mR', 14 ),
  Object(lib["h"])('button#mR15.mR', 15 )
];

function rExchange (j, k, rN=rNumsDS, AR=ArrDS, rD = rDataDS, i = mMindexDS) {
  console.log("In rExchange i is", i);
  var r = rN;
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  console.log(r);
  var g = r.slice();
  AR.splice(i.x, 0, g);
  console.log(AR)
  rD = makeRDS(r); 
  return rD;
} 

var horseDS = rDataDS;
//****************************************************************** END MATRIX

var rNuS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var rGrid$ = rNuS => xs.of(rNuS);

function gridDriver () {
  return xs.create({
    start: listener => { rGrid$ = ar => listener.next(ar)},
    stop: () => {}
  })
};

/*  Highest possible number: 17.3
 *  rNumsDS: 6, 9, 4, 11, 8, 7, 10, 5, 2, 13, 0, 15, 12, 3, 14, 1
    rMatrixF(rNumsDS: 17.3160677686392   */

function rExDS ([, rN=rNumsDS, AR=ArrDS, rD = rDataDS, i = mMindexDS]) {
  console.log("In rExchange i is", i);
  var j = ar[0];
  var k = ar[1];
  var r = rN;
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  console.log(r);
  var g = r.slice();
  AR.splice(i.x, 0, g);
  console.log(AR)
  rD = makeRDS(r); 
  return rD;
} 


function rClick () {document.getElementById('rNums').click()};

var indexDS = 0;

var m80$ = sources.DOM
.select('#mR0').events('click')
.map(e => {
  console.log("e is",e);
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m81$ = sources.DOM
.select('button#mR1.mR').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m82$ = sources.DOM
.select('#mR2.mR').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m83$ = sources.DOM
.select('button#mR3').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m84$ = sources.DOM
.select('button#mR4').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m85$ = sources.DOM
.select('button#mR5').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m86$ = sources.DOM
.select('button#mR6').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m87$ = sources.DOM
.select('button#mR7').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m88$ = sources.DOM
.select('button#mR8').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m89$ = sources.DOM
.select('button#mR9').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m810$ = sources.DOM
.select('button#mR10').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m811$ = sources.DOM
.select('button#mR11').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m812$ = sources.DOM
.select('button#mR12').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m813$ = sources.DOM
.select('button#mR13').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m814$ = sources.DOM
.select('button#mR14').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m815$ = sources.DOM
.select('button#mR15').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4))); 
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});
function rGridFunc (a=rADS, i=mMindexDS) {
  i.ret(i.x + 1);
  rExchange (a[0], a[1]); 
  a = [];
};

var gridCh$ = sources.DOM
.select('#gridInput').events('change');

/*function rExchange (k,n,ar=rNumsDS,AR=ArrDS) {
  var a = ar[k];
  ar[k] = ar[n];
  ar[n] = a;
  return makeRDS(rNumsDS);
}; */

var backCl$ = sources.DOM
  .select('#gridBack').events('click')

var bAction$ = backCl$.map(() => {
  if(mMindexDS.x > 0) {
    mMindexDS.ret(mMindexDS.x - 1);
    console.log("Blow me");
    rNumsDS = ArrDS[mMindexDS.x].slice();
  };
});

var forwardCl$ = sources.DOM
  .select('#gridForward').events('click')

var fAction$ = forwardCl$.map(() => {
  if(mMindexDS.x+1 < ArrDS.length) {
    mMindexDS.ret(mMindexDS.x + 1);
    rNumsDS = ArrDS[mMindexDS.x].slice();
  };
});






//*********************** ZULU ********************************* END MATRIX




var rollClick$ = sources.DOM
  .select('#roll').events('click');

var rollClickAction$ = rollClick$.map(() => {
  var a = gameMonad.fetch0() - 1;
  var b = gameMonad.fetch1();
  socket.send(`CA#$42,${pMgroup.x},${pMname.x},6,6,12,20,${a},${b}`);
});

var numClick$ = sources.DOM
    .select('.num').events('click');

var numClickAction$ = numClick$.map(e => {
  if (gameMonad.fetch3().length < 2)  {
    var a = gameMonad.fetch3();
    var b = gameMonad.fetch4();
    a.push(b.splice(e.target.id, 1)[0]);
    gameMonad.run([,,,a,b,,]);
    if (a.length === 2 && gameMonad.fetch2() != 0) {
      updateCalc(a, gameMonad.fetch2())
    }
  }
}).startWith([0, 0, 0, 0]);

var opClick$ = sources.DOM
    .select('.op').events('click');

var opClickAction$ = opClick$.map(e => {
  var s3 = gameMonad.fetch3();
  if (s3.length === 2) {
    updateCalc(s3, e.target.innerHTML);
  }
  else {
    gameMonad.run([,,e.target.innerHTML,,,,]);
  }
});

var forwardClick$ = sources.DOM
  .select('#ahead.tao1').events('click')

var backClick$ = sources.DOM
  .select('#back.tao100').events('click');

var backAction$ = backClick$.map(() => {
  if (gameMonad.s[1] > 0) {
    gameMonad.dec();
  }
});

var forwardAction$ = forwardClick$.map(() => {
  if (gameMonad.s[1] < gameMonad.s[0].length - 1) {
    gameMonad.inc();
  }
});

// ******************************************************************** <><><><><><> -> End Demos
    var itterPress$ = sources.DOM
        .select('#itter').events('keypress');
    var itterADSction$ = itterPress$.map(e => {
      if (e.keyCode === 13) {
        itterResult = Object(lib["h"])('div', styleFunc(["#FFD700",,"16px",,,]), bind(pInt(e.target.value))(v => v)(() => mMZ23.bnd(v => v*v*v))(()=>3)(x => mMZ23.release(3)+x)(q => q*q/ar[1])(terminate).join(', ') );
      }
    });

    var doublePress$ = sources.DOM
        .select('#double').events('keypress');

    var doubleAction$ = doublePress$.map(e => {
      var dRes = "";
      if (e.keyCode === 13) {
        bind(3)
        (cubeP)(addP(3))(c=>ar[1]
        .then(v => v - 75 + c*ar[0]))(terminate)
        .map(v => v.then ? v.then(s => 
        dRes = dRes + s + ', ') : dRes = dRes + v + ', ')  
      }
    });
    
    // ******************************************************************** <><><><><><> -> End Demos

      var fib2 = function fib2(v) {
          if (v[2] > 1) {
              mMfib.ret([v[1], v[0] + v[1], v[2] - 1]);
          }
          else {
              mM19.ret(v[0]);
          }
      };

      var fibPress$ = sources.DOM
          .select('input#code').events('keydown');

      var fibPressAction$ = fibPress$.map(function (e) { if (e.target.value === '') {
              return;
          }
          ;
          if (e.keyCode === 13) {
              mM21.ret(e.target.value);
              fib2([0, 1, e.target.value]);
          }
      });

      var printingPress$ = sources.DOM
          .select('input#demo2').events('keydown');

      var demo2Action$ = printingPress$.map(function (e) { 
        if (e.target.value === '') return;
        if (e.keyCode === 13) {
        Bind.bind1 = [];
        bind1(e.target.value)(cubeP)
        (() => idP(Bind.bind1[0]-Bind.bind1[1])) 
        (v=>addP(Bind.bind1[1])(v))
        };
      });


      // *******************************************n****************************** ENDOM iginal Fibonacci END

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START PRIME FIB
var topPrime = 2;
var fS = [2]
var pFS = [2];


      
const workerB$ = sources.WWB.map(m => {
  if (m.data[3] === 'color') {
    fill1Monad.ret(m.data[0]);
    fill2Monad.ret(m.data[1]);
    fill3Monad.ret(m.data[2]);
    mMprimeBlurb.ret(m.data[5]);
    mMfibBlurb.ret(m.data[4]);
    mMprimeFibBlurb.ret(m.data[6]);
  }
  else {
    fS = m.data[1].join(', '); 
    pFS = m.data[2].join(', ');
    mMelapsed.ret(elapsed(m.data[3]))
    if (m.data[0].length > primeState2.length) {
      primeState2 = m.data[0];
      fibState = m.data[1];
      prFibState = m.data[2];
      var topP = primeState2.slice(-1);
      topPrime = topP.toString();
    }
  }
});

var fibKeyPress5$ = sources.DOM
    .select('input#fib92').events('keyup');

var primeFib$ = fibKeyPress5$.map(num => {
  var n = num.target.value;
  var j = Math.sqrt(n);
  var k = primeState2.slice(-1)[0];
  if (k > j) {
    var t = Date.now();
    var fibs = fibState.slice(0, fibState.indexOf(fibState.find(e => e > n)));
    fS = fibs.join(', ');
    var prFibs = fibs.filter(n => prFibState.indexOf(n) !== -1);                  
    pFS = prFibs.join(', ');
    mMelapsed.ret(elapsed(t));
    diffRender();
  }
  else { 
    workerB.postMessage([primeState2, fibState, prFibState, n]);
  }
});

var clearprimes$ = sources.DOM
  .select('#clearprimes').events('click')
  .map(() => mMres.ret([mMres.x[0], '', mMres.x[2], mMres.x[3]]));


    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Begin Easy


    //******************************************************************* worker
      m42_RES = [];


var clearClick$ = sources.DOM
    .select('button.clear_P').events('click')
    .map(e => {
      m42_RESULT = [];
      m42_RESULT2 = [];
    })

var factors2Press$ = sources.DOM
    .select('button.factors_P').events('click');

var factors2Action$ = factors2Press$.map(function (e) {
  var factors = [];
  mMfactors3.ret('');
  bind(65)(cubeC)(it4)(it6)(it7);
});

workerG$ = sources.WWG.map(m => {
  m778_RESULT = result778(m.data);
  mMZ38.release(m.data);
  if (m.data) {console.log('GOOD m.data')} else { return "cow" }
    if (m.target) {console.log('GOOD m.target')} else { return "shit" }
      if (m.data[1]) {console.log('GOOD m.data[1]')} else { return 'donkey'}
        if (m.target.ar2) {console.log('GOOD m.data.ar2')} else { return 'dung'}

});

function bind (x, ar=[]) {
  var ar = ar;
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    var p;
    if (x instanceof Promise) {
      p = x.then(v => func(v));
    }
    else p = func(x);
    return bind(p, ar);
  };
};

      var clearClick7$ = sources.DOM
          .select('button.clear_Q').events('click')
          .map((() => {
            m42_ = [];
          }))
  

      var factorsClick7$ = sources.DOM
        .select('button#factors_Q').events('click');

      var factorsAction7$ = factorsClick7$.map( e => {
        m42_ = [];
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);


        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
      });
      

   /*      var sortFactors = ar => ar.sort(function(x,y) {
        return (x - y);
      });

      workerH$ = sources.WWH.map(m => {
        console.log('m.data <D><D><D><D><D><D> ', m.data);
        var promes = m.data[0];
        var factors = m.data[1];
        var p = primeState.concat(primes);
        var z;
        if (factors.length > 1) {
          z = "The prime factors of " + x + " are " + sortFactors(factors).join(', ')
        }
        else z = x + " is a prime number"
        mMZ52.release(z);
      });
*/

      workerH$ = sources.WWH.map(m => {
        mMZ52.release(m.data[1]);
        var w = m.data[0][m.data[0].length - 1];
        if (m.data[0].length > primeState.length) primeState = m.data[0];
      });   
  
      var factors3Press$ = sources.DOM
          .select('input#factors').events('keypress');

      var factors3Action$ = factors3Press$.map(function (e) {
          if (e.keyCode === 13) {
          bind(e.target.value)(it8);
        }
      });

      mMZ40.bnd(v => {
        workerH.postMessage([primeState, v])
      });

    /*  workerH$ = sources.WWH.map(m => {
        console.log('<0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0> In workerH$ m is', m);
        mMZ40.release(m.data);
        // mMZ40.bnd(v => console.log(reduceMult(v), reducePlus));
      });

       if (m.data) {console.log('GOOD m.data')} else { return "cow" }
       if (m.target) {console.log('GOOD m.target')} else { return "shit" }
       if (m.data[1]) {console.log('GOOD m.data[1]')} else { return 'donkey'}
       if (m.target.ar2) {console.log('GOOD m.data.ar2')} else { return 'dung'} */

      const result778 = x => Object(lib["h"])('div', [
        m778_RESULT,
        Object(lib["h"])('br'),
        Object(lib["h"])('span', bigBlue, x[3] ),
        Object(lib["h"])('span', bigGreen, x[0] ),
        Object(lib["h"])('span', bigBlue, x[4] ),
        Object(lib["h"])('span', bigRed, x[5] ),
      ]);

      var m778_RESULT = Object(lib["h"])('div', '' );


        var mMZ33Func = x => mMZ33
          .bnd(x => {
            mMt32 = new Monad(x,'mMt32');
            mMt33.ret(x + ' cubed is ' + x*x*x)
            mMZ33Func(x+1);
          });

        mMZ33Func(0);

        var testZ = sources.DOM
            .select('#testZ').events('click');

        var testZAction$ = testZ.map(function () {
            mMZ33.release(mMt32.x + 1);
        });

        var testQ = sources.DOM
            .select('#testQ').events('click');

        var testQAction$ = testQ.map(() => {
          mMZ33.release(0);
          diffRender();
        });

        var testW = sources.DOM
            .select('#testW').events('keypress');

        var testWAction$ = testW.map(function (e) {
            if (e.keyCode === 13) {
                mMZ33.release(parseInt(e.target.value, 10));
                diffRender();
            }
        });
//*********************************** pingpong ***************  START

    
    var ping = n => ar => {
      var k = Math.floor(Math.random() * 5)+1;
      if(ar[0] > 10 || ar[1] > 10) {
        diffRender();
        return;
      }
      setTimeout(() => {
        if (n <= k) {
          ppStyle = !ppStyle;
          incF$(n);
          ping(n+1)(ar);
          diffRender();
        }
        else if (n % 2 === 0) {
          ar[0]+=1;
          m67_RESULT = Object(lib["h"])('pre', ppYR, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  ` )
          ping(0)(ar);
          diffRender();
        }
        else {
          ar[1]+=1
          m67_RESULT = Object(lib["h"])('pre', ppY, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  ` );
          ping(0)(ar);
          diffRender();
        }
      },500);
    }  

var pingD = a => b => c => Object(lib["h"])('div', [
  Object(lib["h"])('pre', a, ` ping        ---> `), 
  Object(lib["h"])('pre', b, `                 <---        pong `), 
  Object(lib["h"])('pre',  `          -- SCORE: ping: ` + c[0]  + ` pong: ` + c[1]  ),
]);

m67_RESULT = pingD(_A1)(_A3)([3,2]); 

PingpongMaker = (name) => {
  var a = _A1;
  var b = _A3;
  var c = [0,0];
  var n = 0;
  var bool = true;
  var k = Math.floor(Math.random() * 7)+1;
  return function train () {
    if (c[0] > 10 || c[1] > 10) return;
    var ms = 400;
    if (a === _A3) {a = _A1; b = _A3}
    else if (a === _A1) {a = _A3; b = _A2};
    if (n <= k) {
      n+=1;
      window[name] = pingD(a)(b)(c);
      diffRender();
    }
    else if (n % 2 === 0) {
      ms = 1200
      n = 0
      c[0]+=1;
      window[name] = pingD(_A1)(_A3)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    else if (n % 2 === 1) {
      ms = 1200;
      n = 0;
      c[1]+=1;
      window[name] = pingD(_A3)(_A2)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    setTimeout( function () {
      train();
    },ms );
  }
}

var makeDisplay = a => b => c => Object(lib["h"])('div', [
  Object(lib["h"])('pre', a, ` ping        ---> `), 
  Object(lib["h"])('pre', b, `                 <---        pong `), 
  Object(lib["h"])('pre',  `          -- SCORE: ping: ` + c[0]  + ` pong: ` + c[1]  ),
]),

pingCompute = bool => aa => bb => cc =>
  dd => {
  var a;
  var b;
  if (a === "serve") {
    a = _A3;

  }
  var a = aa = bool ? _A1 : _A3;
  var b = aa = bool ? _A3 : _A2;
  pingDisplay = makeDisplay(a)(b)(cc)(d);
};

var pingScore = [0,0];

pp4 = ()  => {
  var a = _A3;
  var b = _A2;
  var c = _A3;
  var d = [0,0];
  var random = 0;
  var turns = 0;
  var bool = true;
  var car;
  var ms = 300;
  return car = () => {
    bool = !bool;
    pingCompute(bool)(a)(b)(c)
    diffRender()
    if (random === 0) random = Math.floor(Math.random() * 11)+1;  // New serve flag "random === 0" detected.
    setTimeout( function () {
      if (pingScore[0] >= 11 || pingScore[1] >= 11) { 
        diffRender() 
        turns = 0;
        random = 0;
        pingScore = [0,0];
      };
        if (turns >= random && turns % 2 === 0) {
          pingScore[0]+=1; 
          turns = 0;
          random = 0;  // A signal to compute a new random number when the next message comes in.
          diffRender()
        }
        if (turns >= random && turns % 2 === 1) {
          pingScore[1]+=1; 
          turns = 0;
          random = 0;       
          diffRender()
        } 
        ms = (turns < random) ? 300 : 900;
        turns+=1;
        diffRender()
        car()
    },ms )          
  }
};


// ***************************** start click    

  var pingpong$ = sources.DOM
  .select('button.pingpong').events('click')
  .map(() => {
  PingpongMaker('m67_RESULT')(); 
  PingpongMaker('m68_RESULT')(); 
  PingpongMaker('m69_RESULT')();   
  });


// ******************************* end click    

pingScore = [0,0];
pingScore2 = [0,0];
pingScore3 = [0,0];
// ***************************** start message from workerI    

const otherP = bool => a => b => c =>  {  
  if (typeof bool !== 'boolean') {
    window[a] = window[a] === _A3 ? _A1 : _A3
    window[b] = window[a] === _A3 ? _A2 : _A3
    diffRender()
    return;
  }
  if (bool) {
    window[a] = _A1;
    window[b] = _A3;
    window[c][0] += 1;
    diffRender();
    return;
  }
  window[a] = _A3;
  window[b] = _A2;
  window[c][1] += 1;
  diffRender();
};

const workerI$ = sources.WWI.map(m => { 

  if (m.data === "game over") return;
  otherP(m.data)('ping43')('ping44')('pingScore');
  otherP(m.data)('ping45')('ping46')('pingScore2');
  otherP(m.data)('ping47')('ping48')('pingScore3');
  workerI.postMessage(m.data);
  diffRender();
}); 


// ***************************** end message from workerI    

var pinpon4$ = sources.DOM
    .select('button.pingpong4').events('click')

var pingpong4$ = pinpon4$.map(() => {
 
  pp4('ping43')('ping44')('pingScr1');
 // pp4('ping45')('ping46')('pingScr2'); 
 // pp4('ping47')('ping48')('pingScr3');
});

// *********************************** pingpong ***************  FINISH

        var fredButton = Object(lib["h"])('button#fredButton', "fredButton");
        var diffR = Object(lib["h"])('button#diffRender', "diffRender");

        const fred$ = sources.FD.map(e => {
          freday = e;
        })

        var frd$ = sources.DOM
            .select('div#fredB').events('click')

        var fredAction$ = frd$.map((e) => {
            freday = [];
            diffRender()
        });

        var fredGo$ = sources.DOM
            .select('button#fredB')
            .events('click')
            .map(() => {
              freday = [];
              funcP()
            });



      //******************************************* END pingpong END

      /*
      const redStyle = {style: {color: 'red', marginLeft: '20%', fontSize: '25px'}}
      const yellowStyle = {style: {color: 'yellow', marginLeft: '20%', fontSize:'25px'}}

        var pingpongRecursion = n => ar => bind(n,ar)(ppFna)(pause)(ppFnb)(() => {
          if (n < 15) pingpongRecursion(n+1,ar)
          bind(n+1,ar)(ppFna)(pause)(ppFnb)(terminate)
        });

        var ppFna = n => h('p', redStyle, 'ping' + n);
        var ppFnb = n => h('div', [h('br'),h('p', yellowStyle, 'PONG' + n)]);



          var pingpongAction$ = pingpong$.map(function (e) {  });

        */
          // **********************************************************************

  var bindBD$ = sources.BD.map(m => console.log("Say what?",m))

  const workerC$ = sources.WWC.map(m => {
    console.log('The message arriving from workerC is', m.data);
    mMfactors.ret(m.data[1]);
    var w = m.data[0][m.data[0].length - 1];
    if (m.data[0].length > primeState.length) primeState = m.data[0];
  });

  var factorsP$ = sources.DOM
    .select('input#factors_5').events('keyup');

  var fA$ = factorsP$.map(function (e) {
    mMfactors7.ret('');
    var factors = [];
    if (e.keyCode === 13) {
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
        //workerD.postMessage([primesMonad.s, ar, mMfactors6.x]);
        workerD.postMessage([primesMonad.s, ar, decompMonad.s, 'Happy, happy']);
      }
    }
  });

  const workerD$ = sources.WWD.map(m => {
    mMfactors6.ret(m.data[0][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    mMfactors8.ret(m.data[1]);
  });


  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  End Easy
  const largestFactor = x => bind(1111111)(prm5)(split2)(largest)(terminate).pop()
  
    
    
  var factorsPress_b$ = sources.DOM
      .select('input#factors_1').events('keydown');

  var factorsAction$ = factorsPress_b$.map(function (num) {
    if (num.keyCode === 13) {
  var n = num.target.value;
  var j = Math.sqrt(n);
  var k = primeState.slice(-1)[0];
  if (k > j) {
    var primes = primeState.slice(0, primeState.indexOf(primeState.find(e => e > n)));
  }
  else primes = primeState;
  workerE.postMessage([primes, n]);
}});

  const workerE$ = sources.WWE.map(m => {
    mMfactors.ret(m.data[1]);
   });

  var factorsP_b$ = sources.DOM
    .select('input#factors_5b').events('keyup');

  var fA_b$ = factorsP_b$.map(function (e) {
    mMfactors7.ret('');
    var factors = [];
    if (e.keyCode === 13) {
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
      console.log('In fA$ ar is', ar );
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
        workerF.postMessage([primesMonad.s, ar, decompMonad.s]);
      }
    }
  });

  const workerF$ = sources.WWF.map(m => {
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -> Back in the main thread. m is', m );
    mMfactors6_b.ret(m.data[2][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    window['decompMonad'] = new MonadState('decompMonad', m.data[2], primes_state);
    mMfactors8_b.ret(m.data[1]);
  });

  var factorsP_c$ = sources.DOM
    .select('input#factors800').events('keyup');

  var fA_c$ = factorsP_c$.map(function (e) {
    mMfactors800.ret('');
    var factors = [];
    var ar = (e.target.value).split(',').map(v => parseInt(v,10));
    if (e.keyCode === 13) {
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
      mMfactors800.ret(simpleWay(ar[0], ar[1]));
      }
    }
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDOM prime factors END
  // ?<>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START traversal
  document.onload = function (event) {
    console.log('onload event: ', event);
    mMitterfib5.release(200);
  }

    // document.getElementById('login').focus();
  // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< ENDOM traversal
  // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START Itterator


  function gMap(x, f, id) {
    var mon = new Monad(f(x), id);
    window[id] = mon;
    return mon;
  }

              
  var solve = function solve () {
     mMZ3.bnd(a => {
     mMquad4.ret('');
     mMquad6.ret('');
     mMquad5.ret(a + " * x * x ")
     mMZ3.bnd(b => {
     mMquad6.ret(b + ' * x ')
     mMZ3.bnd(c => {
     mMtemp.ret([a,b,c])
    .bnd(gMap, qS4,'mMtemp2')
    .bnd(result => {
      let x = result[0]
      let y = result[1]
      if (x === 0) {
        mMquad5.ret('No solution', mMtemp)
        mMquad6.ret(' ');
        solve();
        return;
      }
      if (y === 0) {
        mMquad5.ret('No solution')
        mMquad6.ret(' ')
        solve();
        return;
      };
      mMquad4.ret("Solutiions for " + a + ", " + b + " and " + c + " are " + x + " and  " + y)
      mMquad5.ret(Object(lib["p"])(a).text + " * " + x + " * " + x + " + " + Object(lib["p"])(b).text +
              " * " + x + " " + Object(lib["p"])(c).text + " = 0")
      mMquad6.ret(Object(lib["p"])(a).text + " * " + y + " * " + y + " + " + Object(lib["p"])(b).text +
              " * " + y + " " + Object(lib["p"])(c).text + " = 0")
      solve();   // Continuing the endless loop.
      }) }) }) })
  };
  solve();

  var quad$ = sources.DOM
      .select('#quad').events('keypress');

  var quadAction$ = quad$.map(function (e) {
      if (e.keyCode === 13) {
          mMZ3.release(e.target.value);
          document.getElementById('quad').value = null;
      }
  });


  // ******************************************BEGIN TODO LIST

  var task2 = function task2(str) {
      socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
  };

  function comment2(str) {
      socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
  };


  // *****************************************END TODO LIST
  var captionClick$ = sources.DOM
     .select('#caption').events('click');

  var captionClickAction$ = captionClick$.map(function () {
      (get(mMcaptionDiv)  === 'none') ?
          mMcaptionDiv.ret('block') :
          mMcaptionDiv.ret('none')
  });

  var gameClick$ = sources.DOM
      .select('#game').events('click');

  var gameClickAction$ = gameClick$.map(function () {
      (get(mMgameDiv)  === 'none') ?
          mMgameDiv.ret('block') :
          mMgameDiv.ret('none')
  });

  var clearPicked$ = sources.DOM
      .select('#clear').events('click');

  var clearADSction$ = clearPicked$.map( () => {
    gameMonad.clearPicked();
  });

  var elemB$ = sources.DOM.select('input#group').events('keypress')
    .map(e => {
    mM10.ret(e.target.value);
    worker.postMessage([mM9.x, e.target.value]);
  });

  var pr$ = sources.DOM
      .select('#primeNumbers').events('keypress');

  var prADSction$ = pr$.map(function (e) {
      if (e.keyCode === 13) {
        worker.postMessage(["CE#$42", primesMonad.s, e.target.value]);
      }
  });


  // Clicking the checkbox to indicate that a task has been finished.
  var box$ = sources.DOM.select('.box').events('click');

  var boxAction$ = box$.map(e => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('In boxAction$ -- e is', e );
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    var index = parseInt(e.target.parentElement.id, 10);
    var task = taskMonad.s[1].slice(index,index+1)[0];
    var old = task;
    var ar = task.split("<$>");
    ar = ar.filter(v => v !== "");
    ar[1] = ar[1] === "false" ? "true" : "false"
    var newTask = ar.join("<$>");
    socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
  });

  var cbx2$ = sources.DOM.select('.cbx2').events('click');

  var cbx2Action$ = cbx2$.map(e => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('In cbxAction$ -- e is', e );
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    var index = parseInt(e.target.parentNode.id, 10);
    var task = taskMonad.s[1].slice(index,index+1)[0];
    var old = task;
    var ar = task.split("<$>");
    ar = ar.filter(v => v !== "");
    ar[1] = ar[1] === "false" ? "true" : "false"
    var newTask = ar.join("<$>");
    socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
  });


  // Clicking the DELETE button.


  var deleteClick$ = sources.DOM
      .select('#deleteTask').events('click');

  var deleteAction$ = deleteClick$.map(function (e) {
    var index = parseInt(e.target.parentNode.id, 10);
    var old = taskMonad.s[1].slice(index,index+1)[0];
    socket.send(`TX#$42,${pMgroup.x},${pMname.x},${index},${old}`);
  });

  // Editing a task.

  var edit$ = sources.DOM
      .select('#edit2').events('keypress');

  var editAction$ = edit$.map(function (e) {
    var arr;
    var str;
    if (e.keyCode === 13) {
      var index = parseInt(e.target.parentElement.id, 10);
      var old = taskMonad.s[1][index];
      var ar = old.split("<$>");
      var newAr = e.target.value.split(',');
      var newString = newAr.join("<<>>");
      ar.shift();
      ar.unshift(newString);
      var newTask = ar.join("<$>");
      socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
    }
  });

  var newTask$ = sources.DOM
      .select('input.newTask').events('keydown');

  var newTaskAction$ = newTask$.map(function (e) {
    if (e.keyCode === 13) {
    var alert = '';
        var ar = e.target.value.split(',');
      if (ar.length < 2) {
        mMalert.ret('You should enter responsible party then a comma then a task');
        return;
      }
      else {
        var x = ar.shift();
        var y = ar.shift();
        var z = ar.join("<<>>")
        var result = z + '<$>' + 'false' +'<$>' + x + '<$>' + y
        socket.send(`TA#$42,${pMgroup.x},${pMname.x},${result}<@>`)
      }
    }
  });

  console.log('Getting close to calcStream@');

  var chatClick$ = sources.DOM
      .select('#chat2').events('click')
      .map(() => showChatDiv = showChatDiv === "none" ? "block" : "none")

   var todoClick$ = sources.DOM
      .select('#todoButton').events('click')
      .map(() => showTodoDiv = showTodoDiv === "none" ? "block" : "none")

  var result_8$ = sources.DOM
      .select('#res8').events('click');

  var diffR$ = sources.DOM
      .select('#diffRender').events('click')
      .map(() => {
        if (diffRend < 50) {diffRend+=1}
        else diffRend = 0;
      });

   
  var diffRendChange$ = sources.DOM
      .select('input#change').events('onChange')
      .map(e => {
        console.log('diffRend changed <C><C>< Change ><C><C> --> --> e is', e );
      })

  var diffRendClick$ = sources.DOM
      .select('input#change').events('click')
      .map(e => {
        console.log('diffRend changed <C><C>< Click Click Click ><C><C> --> --> e is', e );
      })


  var res8$ = result_8$.map(() => {
    res8_Style = res8_HIDE;
    setTimeout(() => {res8_Style = res8_SHOW,4600;diffRender()},4200);
    RESULT_8 = [];
    bind(1)(addP(2))(cubeC)(addC(3))(multC(2))(multP(3))
    (addC(30))(multC(1/10))(terminate).slice(1,8).map(v => v.then(z => {
      ;RESULT_8.push(z.x+' ');console.log(RESULT_8);diffRender()}))
    });

  console.log('NOW WE ARE AT calcStream@');

  var test5Press$ = sources.DOM
    .select('input#test5').events('keypress');

  var test5Action$ = test5Press$.map(function (e) {
    if (e.keyCode === 13) {
      test5(e.target.value);
    }
  }); 


  var test7Press$ = sources.DOM
    .select('input#test7').events('keypress');

  var test7Action$ = test7Press$.map(function (e) {
    if (e.keyCode === 13) {
      runTestResult = runTest(toInt(e.target.value));
    }
  }); 

counter = function counter(n, acc = 0) {
  var _repeat = true;

  var _n, _acc;

  while (_repeat) {
    _repeat = false;

    if (n === 0) {
      return acc;
    } else {
      _n = n - 1
      _acc = acc + 1
      n = _n
      acc = _acc
      _repeat = true;
      continue;
    }
  }
}

var calcStream$ = xs.merge( gridCh$, fAction$, bAction$, m80$, m81$, m82$, m83$, m84$, m85$, m86$, m87$, m88$, m89$, m810$, m811$, m812$, m813$, m814$, m815$, pingpong$, test5Action$, test7Action$, diffRendChange$, diffRendClick$, demo2Action$, bindBD$, doubleAction$, itterADSction$, fredGo$, fredAction$, diffR$, res8$, m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prADSction$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, workerI$, clearClick$, clearClick7$, workerG$, workerH$, clearADSction$, factorsAction$, factorsAction7$, factorsClick7$, factors2Action$, factors3Action$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$) 

return { DOM: calcStream$.map(() => { 
  return Object(lib["h"])('div.main', [

Object(lib["h"])('div.image_3', [
Object(lib["h"])('img.image_2', {props: {src: "logo.svg" }}  ),
Object(lib["h"])('span', ' ' ),
Object(lib["h"])('a', { props: { href: "https://cycle.js.org/", target: "_blank" } }, 'A Cycle.js application')    ]),
Object(lib["h"])('div', {style: {textAlign:"center", fontWeight: "bold"}}, [
  Object(lib["h"])('br'),  
  Object(lib["h"])('div', {style: {fontSize: "25px", color: "#FFD700",textAlign: "center"}}, 'BETTER THAN MONADS'),
  Object(lib["h"])('div', styleFunc(['#FFF700',,'20px','italic',,'center']), 'Higher-Order Functions In JavaScript'),
]),
Object(lib["h"])('div.content', [


Object(lib["h"])('p', ' This project was originally titled "JavaScript Monads". My monads, like Category Theory monads and Haskell monads, are objects. Monads compose in the Haskell programming language by means of the ">>=" (pronounced "bind") operator. ' ),
Object(lib["h"])('p', '"monad" is not defined in Ecmascript 2018. Loosely speaking, a JavaScript monad "m" (not a Category Theory monad) has a value "m.val" and composes by means of a method "m.b" that operate on functions, say "func1", that operates on m.val returning a monad "m2" such that m2.val is func1(m.val) or, in more sophisticated variations on the theme, func(m.val, ...args). Therefore m2.b(func2) results in a monad, let\'s call it "m3", with m3.val === func2(func(m.val)). "m" can have multiple methods that behave like "b". Lodash and jQuery objects are monads according to this definition. '),
Object(lib["h"])('span.tao', ' My monads are constricted, sort of Haskell-like variations on the theme. They have only one method that behaves like "m.b" (above) and a method "ret" that directly changes a monad\'s value to ret\'s argument. Others, including Douglas Crockford, author of '),
Object(lib["h"])('a', {props: {href: "http://shop.oreilly.com/product/9780596517748.do", target: "_blank" }}, 'Javascript: The Good Parts' ),  
Object(lib["h"])('span', ', have defined monads that are superficially even more Haskell-like. Mr. Crockford explained his in the video presentation ' ),
Object(lib["h"])('a', {props: {href: "https://www.reddit.com/r/haskell/comments/16rsb7/monads_and_gonads_talk_by_douglas_crockford/", target: "_blank" }}, '\"Monads And Gonads\"' ),  
Object(lib["h"])('span', '. ' ),
Object(lib["h"])('p', ' JavaScript has tremendous untapped potential. Procedures and values stored in objects such as String and Array is an essential language feature; but it is a rather pedestrian way of composing functions. JavaScript shines brightly when it works with higher-order functions instead of the ordinary objects. Case in point: compare Ramda (higher-order functions) with Underscore (objects). Or, more starkly and succinctly, compare composition using bind() (next paragraph) with any procedure that links objects à la monads. ' ),
Object(lib["h"])('h3', 'Composing With Higher-Order Functions' ),  
Object(lib["h"])('p', ' The examples below demonstrate function composition with functions instead of object methods. Syntax consists of calling "bind(x)" for some value "x" and then naming or defining the functions to be composed on "x". A \"(terminate)\" flag at the end causes the internal array of return values (or resolution values of Promises) to be returned. Consider:' ), 
Object(lib["h"])('div', styleFunc(["#FFD700","3%","21px",,,]), 'bind(x)(functiona1)(function2) ... (functionN)'),
        Object(lib["h"])('br'),

        Object(lib["h"])('span', styleFunc(["#d3ead5",,"18px",,,]), 'where '),
        Object(lib["h"])('pre', styleFunc(["#FFD700",,"18px",,,]), `  x can be any value,

  there are no restrictions on the functions\' argument types, 

  there are no restrictions on the functions\' return value types,

  functions can even return promises,

  functions have built-in access to all prior functions\' return values,

  functions have built-in access to all prior promises\' resolution values. `),
        Object(lib["h"])('span#lion', '' ),
        Object(lib["h"])('span.tao', styleFunc(["#d3ead5",'3%',"18px",,,]), ' Composition doesn\'t get more flexible and expressive than this. Calling bind(x)(function1)(function2)... creates a sequence of functions consuming functions and returning functions that consume functions. Here is the ' ),      
Object(lib["h"])('a', {props: {href: "#bind" }},  'definition of bind'),

]),

Object(lib["h"])('div#content2', [
Object(lib["h"])('div', {style: {width: '47%', fontSize: '15px', float: 'left'}}, [ // ((************ LEFT PANEL
Object(lib["h"])('br'),

Object(lib["h"])('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 1 - A Simple Example.'),
Object(lib["h"])('span.tao', ' If you understand why "result === Bind.foo" (below) returns true, you have a pretty good grasp of how foo and, more generally, ' ),
Object(lib["h"])('a', {props: {href: "#bind2" }},  "Bind" ),
Object(lib["h"])('span', ' work. ' ),
Object(lib["h"])('br'),
Object(lib["h"])('pre', `  var foo = Bind('foo');

  var result = foo(1)(v=>v+2)(v=>v*v*v)(v=>v+3)
  (v=>v*Bind.foo[1])(z=>z/Bind.foo[3] - 2)(terminate);
 
  console.log(result) // [1, 3, 27, 30, 90, 1]
  console.log(result === Bind.foo) // true  `),
Object(lib["h"])('p', ' In the demonstration on the right, enter a value for "x" in runTest(x) and see the result. ' ),
Object(lib["h"])('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 2 - WebSocket and worker messaging.'),

Object(lib["h"])('span.tao', ' The first demonstration consists of bind(145) followed by a math computation, a function that sends the computation result to the WebSocket server, a function that sends the WebSocket response to a web worker, and a function that uses the worker response to update the browser display and the prime number cache. '), 
Object(lib["h"])('p#defsReturn'),
Object(lib["h"])('span.tao', ' it4() and it6() are asynchronous functions that use "MonadItter" callback handlers in conjunction with Ecmascript 2015 promises. MonadItter is discussed in the '),
Object(lib["h"])('a', {props: {href: "#defs" }},  'appendix'),
Object(lib["h"])('span', '.' ),
Object(lib["h"])('br'),
Object(lib["h"])('p', ' After the first run, caching of prime numbers usually shortens execution time by around 80%. Run times on Firefox 59 are somewhat shorter than on Chrome 65 (both 64 bit) in my Ubuntu 17.10 desktop computer. ' ),



Object(lib["h"])('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 3 - avoiding clashes.'),
Object(lib["h"])('span', ' Demonstration 2 shows the results of computations run sequentially from top to bottom in columns from left to right. Nine similar functions run orthogonally to one another thanks to the constructor "Bind". Bind.bind1, Bind.bind2, ..., Bind.bind9 are inside of nine "div" elements in the virtual DOM. Demonstration 2 shows the arrays as they grow from empty to four-membered arrays. '),  
Object(lib["h"])('span', '. Here is the '), 
Object(lib["h"])('a', {props: {href: "#bind2" }},  "definition of Bind" ),
Object(lib["h"])('p', ' bind1 is a function. Bind.bind1 is an array not of the promises returned by each function, but rather it is an array of the values that are produced as each promise resolves. "Bind.bind1" is a permanent fixture in the virtual DOM description returned by main(). You can watch it and nine similar arrays as their lengths seem to increase in parallel by entering an integer in the right column.'),
Object(lib["h"])('p', ' Demonstration 2 shows that the nine sequences do not interfere with one another. They can\'t corrupt data outside of the namespace created by Bind, nor can they be corrupted by outside processes. '),  
  
Object(lib["h"])('span.tao', {style: {color: "#FFD700"}}, `"bind1(e.target.value)(cubeP)"` ),
Object(lib["h"])('span', ' cubes user inpup. The first element of each Bind array attribute (Bind.bind1, Bind.bind2, etc) is the a number that is encapsulated in a promise. The promise resolves after 1200 ms, providing its resolution value to cubeP. When cubeP resolves, its resolution value becomes the argument of the next promise\'s then method. The delayed identity function "idP" takes the difference of the original value and its cube as its argument. After this resolves, the original value\'s cube is added to its resolution value. '),
Object(lib["h"])('p#backToDem3', '     '), 
Object(lib["h"])('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 4 '),
Object(lib["h"])('span#backToDem2', ' This demonstration uses a closure named "PingpongMaker" instead of Bind to define clones of the function "ping". Three instances of ping operate independently of one another in the demonstration on the right. Here is '),
Object(lib["h"])('a', {props: {href: '#pingmaker'}}, 'more information about Demonstration 3.' ),
Object(lib["h"])('br'),
]),
Object(lib["h"])('div', {style: {width: '47%', fontSize: '15px', float: 'right'}}, [  // ********* RIGHT PANEL

Object(lib["h"])('h3', 'Demonstration 1' ),
Object(lib["h"])('pre', `  function demoFunc(x) {
    return foo(x)(v=>v+2)(v=>v*v*v)
    (v=>v+3)(v=>v*Bind.foo[1])
    (z=>z/Bind.foo[3] - 2)(terminate)
  };

  function runTest(x) {
    Bind.foo = [];
    var u = demoFunc(x); 
    return [u, u === Bind.foo]
  } ` ),

Object(lib["h"])('span', ' runTestResult = runTest(n): Enter n here --> '),
Object(lib["h"])('input#test7', {style: {height: "15px" }} ),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('div', {style: {color: "#9fe0f4" }}, [
  Object(lib["h"])('span', "runTestResult[0]: " ),
  Object(lib["h"])('span', {style: {color: "red"}}, runTestResult[0].join(', ') ),
  Object(lib["h"])('br'),
  Object(lib["h"])('span', "runTestResult[1] === Bind.foo: " ),
  Object(lib["h"])('span', {style: {color: "red"}}, runTestResult[1].toString() )
]),

Object(lib["h"])('h3', 'Demonstration 2' ),
Object(lib["h"])('span', ' Click below to run bind(145)(x=>x\*x\*x)(it4)(it6)(it7) twenty-five times. The left column is the call order.'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('span', styleFunc(["rgb(7, 247, 247)","12%","20px",,,,,]), 'bind(145)(x=>x**3)(it4)(it6)(it7)'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('button#factors_Q', {style: {fontSize: '15px'}}, 'bind(145)(x=>x**3)(it4)(it6)(it7)'),
Object(lib["h"])('span', "~~"),
Object(lib["h"])('button.clear_Q', {style: {fontSize: '15px', marginLeft: "0"}},  'clear results'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('div#demo2', m42_ ),
Object(lib["h"])('br'),
Object(lib["h"])('br'),



Object(lib["h"])('h3', 'Demonstration 3' ),

Object(lib["h"])('pre', `bind1(n+0)(cubeP)(() => idP(Bind.bind1[0] -
Bind.bind1[1]))(v=>addP(Bind.bind1[1])(v));
bind2(n+1)(cubeP)(() => idP(Bind.bind2[0] -
Bind.bind2[1]))(v=>addP(Bind.bind2[1])(v)); 
  . . .
bind9(n+8)(cubeP)(() => idP(Bind.bind9j[0] -
Bind.bind9[1]))(v=>addP(Bind.bind9[1])(v)); `), 

Object(lib["h"])('div', 
  [ Object(lib["h"])('div', bigRed, Bind.bind1.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind2.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind3.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind4.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind5.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind6.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind7.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind8.join(', ') ),
    Object(lib["h"])('div', bigRed, Bind.bind9.join(', ') ), 
  ]
),

Object(lib["h"])('span', ' value of n --> '),
Object(lib["h"])('input#test5', {style: {height: "15px" }} ),
Object(lib["h"])('br'),

Object(lib["h"])('br'),
Object(lib["h"])('br'), 

Object(lib["h"])('h3', 'Demonstration 4' ),
Object(lib["h"])('br'),
Object(lib["h"])('button.pingpong', {style: {fontSize: '17px'}}, 'start pingpong'),
pingDisplay, 
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
  m67_RESULT,
Object(lib["h"])('br'),
  m68_RESULT,
Object(lib["h"])('br'),
  m69_RESULT,
Object(lib["h"])('br'),
Object(lib["h"])('br'),
  
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
]),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
]),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('h1', '_____________________________________________________________________' ),
Object(lib["h"])('br'),
Object(lib["h"])('div.content', [

Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('span.tao', 'Functions that take multiple arguments should be curried, or else their arguments should be contained in single arrays or objects. This is a consequence of the fact that functions can only return single values, and those return values (or resolution values) are the arguments of the functions linked to their right sides. Here are functions that curry and reverse curry multi-argument functions: ' ),
Object(lib["h"])('a', {props: {href: "#curryDef"}}, "curry and reverseCurry " ),
Object(lib["h"])('span', '. curryReverse(parseInt) can be used to define convenient functions like "binaryToInt" and "toInt". ' ),
Object(lib["h"])('pre', `  const binaryToInt = curryReverse(parseInt)(2); 
  binaryToInt("010101")  // 21

  const toInt = curryReverse(parseInt)(10)
  toInt("42")  // 42
`),

Object(lib["h"])('span.tao', ' There are library functions, for example Lodash/fp\'s '),
Object(lib["h"])('br'),
Object(lib["h"])('a', {props: {href: "https://lodash.com/docs/4.17.4#flow"}}, "  .flow" ),
Object(lib["h"])('span', ' and Ramda\'s '),
Object(lib["h"])('a', {props: {href: "http://ramdajs.com/docs/#compose"}}, 'R.compose' ),
Object(lib["h"])('span', ', that facilitate simple function composition; i.e., each function\'s argument is the preceding function\'s return value. bind() does this while also giving every linked function along a chain access to the return values of every function, and the resolution values of every promise that precedes it.  '),
Object(lib["h"])('br'),
Object(lib["h"])('br'),

Object(lib["h"])('span.tao', 'This project was created by and is actively maintained by David Schalk. The code repository is at '),
Object(lib["h"])('a', { props: { href: "https://github.com/dschalk/functional-javascript", target: "_blank" }}, 'functional-javascript'),
Object(lib["h"])('span', '. Please leave a comment in the '),
Object(lib["h"])('a', {props: {href: "#comments"}}, 'comments'),
Object(lib["h"])('span', ' section near the end of this page. You can email me at pyschalk@gmail.com. '),
Object(lib["h"])('p', ' '),
Object(lib["h"])('p', ' The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history. All group members see other members\' scores decrease or increase as they navigate backwards and forwards. ' ),
  
Object(lib["h"])('p', ' Visitors to this site are automatically logged in with pseudo-randomly generated numbers as their user names and passwords. The default "group" is the non-group "solo". '),
Object(lib["h"])('p', ' You can select a persistent name and password. These will make it possible for you to return at any time and delete or edit your comments. '),
Object(lib["h"])('p#gameIntro', ' The demonstration section also has a text box where you can create or join a group by entering a group name. Changing groups resets your game score and goal tally to zeros. ' ),
      Object(lib["h"])('span.tao', ' The game code is fairly concise and intuitive. A quick walk-through is presented at.' ),
Object(lib["h"])('a', { props: { href: '#gameCode' } }, 'here'),
Object(lib["h"])('span', '. To see monadic functionality at work, I suggest that you take a look at the section captioned ' ),
Object(lib["h"])('a', { props: { href: '#asyncExplanation' } }, 'Asynchronous Processes'),
Object(lib["h"])('br'),
Object(lib["h"])('p', ' But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of functional programming, playing with bind() and the monads in the browser console might lift you into the comfort zone you seek. ' ),
Object(lib["h"])('h3', 'The Game'),
Object(lib["h"])('p', 'People who are in the same group, other than the default non-group named "solo", share the same todo list, chat messages, and simulated dice game. '),
Object(lib["h"])('p', ' Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then emptied and the application is ready to start accumulating a new history. '),
Object(lib["h"])('p', ' Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. As mentioned above, Knowing your password facilitates revising or removing comments.' ),


]),
Object(lib["h"])('h1', 'Game, Todo List, Text Messages' ),
Object(lib["h"])('div#gameDiv2', {style: { display: mMgameDiv2.x }}, [
Object(lib["h"])('div#leftPanel', {style: { display: mMgameDiv2.x }}, [
Object(lib["h"])('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time ROLL is clicked, one point is deducted. Three goals wins the game. The code is in an appendix.'),
Object(lib["h"])('p', {style: {color:'red', fontSize:  '20px'}}, mMgoals2.x ),
buttonNode,
Object(lib["h"])('br'),
Object(lib["h"])('button#4.op', 'add'),
Object(lib["h"])('button#5.op', 'subtract'),
Object(lib["h"])('button#6.op', 'mult'),
Object(lib["h"])('button#7.op', 'div'),
Object(lib["h"])('button#8.op', 'concat'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('div#dice', { style: { display: mMdice.x } }, [
Object(lib["h"])('button#roll.tao1', 'ROLL'),
Object(lib["h"])('button#back.tao100', 'BACK'),
Object(lib["h"])('button#ahead.tao1', 'FORWARD'),
Object(lib["h"])('div.tao', `Selected numbers: ${gameMonad.fetch3().join(', ')}` ),
Object(lib["h"])('div.tao', `Operator: ${gameMonad.fetch2()} ` ),
Object(lib["h"])('div.tao', 'Index: ' + gameMonad.s[1] ),
Object(lib["h"])('button#clear', 'Clear selected numbers' ),
Object(lib["h"])('p', ' When traversing the game history, any time there are two selected numbers and a selected operator, a computation will be performed. You can clear the selected numbers and substitute others, and if you don\'t want a selected operator you can select another one.'),
Object(lib["h"])('p', ' Create a group or join an existing group. ' ),
Object(lib["h"])('span', 'Change group: '),
Object(lib["h"])('input#group', 'test' ),
Object(lib["h"])('p', mMsoloAlert.x ),
Object(lib["h"])('p', ' You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file. You can use this combination in the future to edit or delete your saved comments. ' ),
Object(lib["h"])('span.red', mMregister.x ),
Object(lib["h"])('p', {style: {color: "red"}}, nameMess ),
Object(lib["h"])('label', {style: {display: mMshowRegister.x }}, 'Register or log in here:'),
Object(lib["h"])('input.register', {style: {display: mMshowRegister.x }} ),
])]),
Object(lib["h"])('div#rightanel', { style: { display: 'block', float: 'right' } }, [
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('button#todoButton.cow', 'TOGGLE TODO_LIST'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('button#chat2.cow', 'TOGGLE CHAT'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('div', {style: {fontSize: "14 px"}}, 'Name: ' + pMname.x ),
Object(lib["h"])('div', {style: {fontSize: "14 px"}}, 'Group: ' + pMgroup.x ),
Object(lib["h"])('br'),
Object(lib["h"])('div', {style: {fontSize: "14 px"}}, gameData),
Object(lib["h"])('br'),
Object(lib["h"])('div#a100', ' _____________________________________ ' ),
Object(lib["h"])('p.italic', ' Join group "t" if you want to see some previously created tasks. ' ),
Object(lib["h"])('div',  { style: { display: showTodoDiv } }, [
  Object(lib["h"])('div', taskMonad.html ),
  Object(lib["h"])('div', 'Enter author, responsible person, and task here: '),
  Object(lib["h"])('input.newTask') ]),
Object(lib["h"])('br'),
Object(lib["h"])('span#alert', mMalert.x ),
Object(lib["h"])('br'),
Object(lib["h"])('span#alert2'),

Object(lib["h"])('br'),
Object(lib["h"])('div#chatDiv', { style: { display: showChatDiv } }, [
  Object(lib["h"])('div#messages', [
    Object(lib["h"])('span', 'Message: '),
    Object(lib["h"])('input.inputMessage'),
    Object(lib["h"])('div', messages  ),
    Object(lib["h"])('br'),
  ])
])
])
]),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('h1', '________________________________________________' ),
Object(lib["h"])('div.content', [
Object(lib["h"])('a#bind', {props: {href: '#lion'}}, 'Back to the bind discussion.'),

Object(lib["h"])('p', 'CAUTION - SOME OF THE COMMENTARY AFTER THIS POINT STILL LAGS BEHIND RECENT REFACTORING.'),
Object(lib["h"])('p', ' bind() and similar functions are created by the constructor named "Bind". Here is Bind()\'s definition: '),
Object(lib["h"])('pre', {style: {color: "lightBlue"}}, `  function Bind (str) {
    Bind[str] = [];
    return function bindo ( x ) {
      if (x instanceof Promise) x.then(y => {
        Bind[str].push(y);
        diffRender();
      })
      else {
        Bind[str].push(x)
        diffRender();
      }
      return function debug8 (func) {
        var p;
        if (func.name === "terminate") return Bind[str];
        if (x instanceof Promise) {
          p = x.then(v => func(v));
        }
        else p = func(x);
        return bindo(p);
      };
    };
  }; ` ),
Object(lib["h"])('p', ' And here are the definitions of bind() and several similar functions: ' ),
Object(lib["h"])('pre', `  var bind = Bind("bind0");
  var bind1 = Bind("bind1");
  var bind2 = Bind("bind2");
  var bind3 = Bind("bind3");
  var bind4 = Bind("bind4");
  var bind5 = Bind("bind5");
  var bind6 = Bind("bind6");
  var bind7 = Bind("bind7");
  var bind8 = Bind("bind8");
  var bind9 = Bind("bind9"); ` ),
Object(lib["h"])('a', {props: {href: '#content2'}}, 'Back to the preview demos'),
Object(lib["h"])('p', italicYellow, ' Sequences beginning with bind() reveal exactly what is happening while sometimes hiding confusing conglomerations of nested functions, object methods, and promises. They are a flexible way out of "Callback Hell". '),
Object(lib["h"])('p#cycle'),
Object(lib["h"])('a', { props: { href: '#top' } }, 'Back To The Top'),
Object(lib["h"])('br'),
Object(lib["h"])('a', {props: {href: '#cyclet'}}, 'Async Procedures' ),
Object(lib["h"])('p', ' "h(\'div\', m42_RESULT)" is a permanent fixture in the Snabbdom virtual DOM that is returned by main() and updated by calcStream$. When it7() executes, Snabbdom performs its diff and render routine, updating the browser window. '),
Object(lib["h"])('p', ' The asynchronous functions in Demonstration 1 use monadItter instances mMZ40 and mMZ52 instead of Promises. Here\'s the definition of MonadItter: '),
Object(lib["h"])('pre', `  var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
      return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
      return this.p = func;
    };
  }; `),
Object(lib["h"])('p', ' When obtaining data from unreliable sources, adding error checking to MonadItter or using promises\' error- checking feature would be helpful. '),
Object(lib["h"])('h3', 'Reactivity In Cycle.js' ),
Object(lib["h"])('span.tao', ' Reactivity occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andrew Staltz\' '),
Object(lib["h"])('a', { props: { href: "https://egghead.io/courses/cycle-js-fundamentals", target: "_blank" } }, ' Overview of Cycle.js.'),
Object(lib["h"])('span', ' Its elegance might take your breath away. ' ),
Object(lib["h"])('br' ),
Object(lib["h"])('br' ),
Object(lib["h"])('a.tao', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom' ),
Object(lib["h"])('span', ', ' ),
Object(lib["h"])('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,' ),
Object(lib["h"])('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and fun so many of its functions and variable definitions are included in scripts in the index.html page. ' ),
Object(lib["h"])('br' ),

Object(lib["h"])('p', ' The next interactive demonstration accepts user input and executes the following statement in a web worker: ' ),
Object(lib["h"])('pre', `bind(ar[1])(execF)(fpFunc(ar[0])(x)); ` ),
Object(lib["h"])('span', ' The parameters are defined in the ' ),
Object(lib["h"])('a', {props: {href: "fp"}}, 'appendix' ),
Object(lib["h"])('span', '. ' ),
Object(lib["h"])('br'),
Object(lib["h"])('pre', {style: {color: "red", fontStyle: "italic"}} , `Red Indicates An Ongoing Computation` ),

Object(lib["h"])('pre', `Fibonacci numbers   Prime Numbers   Prime Fibonacci Numbers `), 

  Object(lib["h"])('span', mMfibBlurb.x ),
  Object(lib["h"])('span', [
    Object(lib["h"])('svg', {attrs: {width: 50, height: 50}}, [
      Object(lib["h"])('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill1Monad.x }})
    ])
  ]),

  Object(lib["h"])('span', mMprimeBlurb.x  ),
  Object(lib["h"])('span', [
    Object(lib["h"])('svg', {attrs: {width: 50, height: 50}}, [
      Object(lib["h"])('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill2Monad.x }})
    ])
  ]),

  Object(lib["h"])('span', mMprimeFibBlurb.x ),
  Object(lib["h"])('span', [
    Object(lib["h"])('svg', {attrs: {width: 50, height: 50}}, [
      Object(lib["h"])('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill3Monad.x }})
    ])
  ]),
  Object(lib["h"])('br'),
  Object(lib["h"])('br'),
  Object(lib["h"])('p.red',  'The elapsed time is ' + mMelapsed.x + ' milliseconds.' ),
  Object(lib["h"])('input#fib92'),
  Object(lib["h"])('br'),
  Object(lib["h"])('br'),
  Object(lib["h"])('span#PF_7.red6', 'Fibonacci Numbers'),
  Object(lib["h"])('br'),
  Object(lib["h"])('span#PF_9.turk', fS  ),
  Object(lib["h"])('br'),
  Object(lib["h"])('span#PF_8.red6', 'Prime Fibonacci Numbers'),
  Object(lib["h"])('br'),
  Object(lib["h"])('span#primeFibs.turk', pFS  ),
  Object(lib["h"])('br'),
  Object(lib["h"])('span#PF_21.red6', 'The largest generated prime number.'),
  Object(lib["h"])('br'),
  Object(lib["h"])('span.turk', topPrime  ),
  Object(lib["h"])('br'),
  Object(lib["h"])('h3', ' Promises are not needed ' ),
  Object(lib["h"])('p', ' Asynchronous code can be handled without reliance on Ecmascript 2015 promises either explicitly or implicitly (e.g. using async/await). Cycle.js drivers eliminate any need to explicitly use functions from a reactive library, but xstream is an integral component of Cycle.js unless you choose most.js or RxJS. ' ),

  Object(lib["h"])('p', ' The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9\'s, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:' ),
  Object(lib["h"])('input#factors_1'),
  Object(lib["h"])('br'),
  Object(lib["h"])('br'),
  Object(lib["h"])('span', mMfactors.x ),
  Object(lib["h"])('span.tao3', mMfactors23.x ),
  Object(lib["h"])('p', ' primesMonad and the functions primarily involved in its transformation are shown below: ' ),
    code.primes,
    Object(lib["h"])('p', ' primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code: ' ),
    code.primes3,
  Object(lib["h"])('p', ' The user\'s selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling: ' ),
      code.primes4,
  Object(lib["h"])('p', ' execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB. ' ),
      code.primes2,

Object(lib["h"])('h3', 'Type Checking' ),
Object(lib["h"])('p', ' Type checking is useful for avoiding runtime errors and for optimization of user interfaces. For example, if a user enters the wrong type of data it is helpful to display a message explaining why nothing is happening. Not allowing defective user input to be transmitted to a WebSocket server prevents sockets from disconnecting. Some developers like to superimpose strong typing over JavaScript or write code in a strongly typed language that compiles to JavaScript. I leave JavaScript (ES7, to be precise) as it is and check types only where user input is involved. If this project were a team effort, other team members might be users of functions I write so more extensive type-checking would be prudent.'),
Object(lib["h"])('br'),
Object(lib["h"])('a', {props: {href: '#top'}}, 'Back to the top'),
Object(lib["h"])('h3', 'Another Example'),
Object(lib["h"])('p', ' The result of every computation in a chain of synchronous functions is available to every computation that comes after it. This can be seen in the next example where the result of each computation is pushed into Bind.foo: ' ),
Object(lib["h"])('pre', `  var foo = Bind("foo"); 

  var result = foo(1)(v=>v+2)(v=>v*v*v)(v=>v+3)
  (v=>v*Bind.foo[1])(v=>v*Bind.foo[1])(v=>v+30)
  (v=>v*1/(Bind.foo[3]*2))(terminate)

  console.log(result) // [1, 3, 27, 30, 90, 270, 300, 5] 
  console.log(result === Bind.foo) // true  `),

Object(lib["h"])('h2', 'Alternative Monad Functionality' ),
Object(lib["h"])('p', ' Instances of Monad can also link by means of the method "bnd()". It, along with the method "ret()", were made available as follows: ' ),
Object(lib["h"])('pre',  {style: {color: "rgb(236, 242, 186)"   }}, `  Monad.prototype.bnd = function (func, ...args) {
    var m = func(this.x, ...args)
    var ID;
    if (m instanceof Monad) {
      ID = testPrefix(args, this.id);
      window[ID] = new Monad(m.x, ID);
      return window[ID];
    }
    else return m;
  };

  Monad.prototype.ret = function (a) {
    return window[this.id] = new Monad(a, this.id);
  };

  function testPrefix (x,y) {
     var t = y;  // y is the id of the monad calling testPrefix
     if (Array.isArray(x)) {
      x.map(v => {
        if (typeof v == 'string' && v.charADSt() == '$') {
           t = v.slice(1);  // Remove "$"
        }
      })
    }
    return t;
  }; ` ),
Object(lib["h"])('p', ' This is less functional than using bind() in that it doesn\'t pass functions down the chain but instead passes objects with exposed methods. But it has appealing features. Look how values move along the chain until, at the end they combine to yield 42. Explicitly passing values from function to function along a chain is impossible with bind(); but with bind(), all chained functions share an array of return values and the resolution values of returned promises. '),
Object(lib["h"])('br#itter'),
Object(lib["h"])('pre', `  ret(2).bnd(v => add(v,1)
  .bnd(cube).bnd(p => add(p,3)
  .bnd(() => ret(p/3).bnd(add,3)
  .bnd(z => v*z+p-v*p+z))))  //  9 ` ),
     // ************** OOOOOOOOOOOOOO ********    BEGIN ASYNC


  // h('asyncExplanation', ' Asynchronous Processes ' ),

  Object(lib["h"])('a', { props: { href: '#gameIntro' } }, 'Back to the first set of demonstrations.'),


  Object(lib["h"])('h2', 'MonadItter'),
  Object(lib["h"])('p', ' As shown in the "Monads" section (above), the definition of MonadItter is: ' ),
  code.monadIt,
  Object(lib["h"])('p', ' MonadItter instances don\'t link to one another. They exist to facilitate the work of instances of Monad, MonadState, etc. Here\'s how they work: '),
  Object(lib["h"])('p', 'For any instance of MonadItter, say "it", "it.bnd(func)" causes it.p === func. Calling the method "it.release(...args)" causes p(...args) to run, possibly with arguments supplied by the caller. '),
  Object(lib["h"])('p',' MonadItter instances control the routing of incoming WebSocket messages. In one of the demonstrations below, they behave much like ES2015 iterators.'),
  Object(lib["h"])('h3', ' A Basic Iterator '),
  Object(lib["h"])('p', 'The following example illustrates the use of release() with an argument. It also shows a lambda expressions being provided as an argument for the method mMZ1.bnd() (thereby becoming the value of mMZ1.p), and then mMZ1.release providing an arguments for the function mMZ1.p. The code is shown beneath the following two buttons. '),
  Object(lib["h"])('button#testZ', 'mMZ33.release(1)'),
  Object(lib["h"])('p', mMt33.x ),
  Object(lib["h"])('span', 'Refresh button: '),
  Object(lib["h"])('button#testQ', 'mMt33.ret(0) '),
  Object(lib["h"])('span.tao', ' The expression mMt33.x sits permanently in the Motorcycle virtual DOM description. You can call '),
  Object(lib["h"])('span.green', 'mMZ33.release(v)'),
  Object(lib["h"])('span', ' by entering a value for v below: '),
  Object(lib["h"])('br'),
  Object(lib["h"])('span', 'Please enter an integer here: '),
  Object(lib["h"])('input#testW'),
  Object(lib["h"])('p', ' cube() is defined in the Monad section (above). If you click "mMZ1.release(1)" several times, the code (above) will run several times, each time with v === 1. The result, mMt3.x, is shown below the button. mMZ1.p (bnd()\'s argument) remains constant while mMZ1.release(1) is repeatedly called, incrementing the number being cubed each time. '),
                    Object(lib["h"])('p', ' Here is another example. It demonstrates lambda expressions passing values to a remote location for use in a computation. If you enter three numbers consecutively below, call them a, b, and c, then the quadratic equation will be used to find solutions for a*x**2 + b*x + c = 0. The a, b, and c you select might not have a solution. If a and b are positive numbers, you are likely to see solutions if c is a negative number. For example, 12, 12, and -24 yields the solutions 1 and -2. '),
  Object(lib["h"])('p#quad4.red2', mMquad4.x  ),
  Object(lib["h"])('p#quad5.red2', mMquad5.x  ),
  Object(lib["h"])('p#quad6.red2', mMquad6.x  ),
  Object(lib["h"])('p', 'Run mMZ3.release(v) three times for three numbers. The numbers are a, b, and c in ax*x + b*x + c = 0. Remember to press <ENTER> after each number. '),
  Object(lib["h"])('input#quad'),
  Object(lib["h"])('p', ' The function "solve()" is at the center of the algorithm. See how mMZ3.bind() appears three times. Each time a user enters a number, say "x", mMZ3.release(x) executes. After the third number, solve calls itself so the process can start again. I prefer this approach over ES6 generators. Here\'s solve(): '),
  code.quad,
  Object(lib["h"])('p', ' And here are the supporting functions: '),
  code.quad2,
  Object(lib["h"])('p', ' fmap (above) facilitated using qS4 in a monadic sequence. qS4 returns an array, not an instance of Monad, but fmap lifts qS4 into the monadic sequence. '),
  Object(lib["h"])('p', ' The function solve() is recursive. It invokes itself after release() executes three times. The expression "solve()" resets solve to the top, where mMZ3.p becomes a function containing two nested occurrences of mMZ3.bnd. After mMZ3.release() executes, mMZ3.p becomes the function that is the argument to the next occurrence of mMZ3.bnd. That function contains yet another occurrence of mMZ3.bnd. MonadItter is syntactic sugar for nested callbacks. ' ),

Object(lib["h"])('h3', ' Preserve Archives By Sidestepping Mutation '),
Object(lib["h"])('p', ' When you assign a variable to an array, for example "var arr = [1,2,3]", arr points to a location in memory. Suppose you want to preserve a record of previous values of arr. You might try saving them in an array like this: ' ),
Object(lib["h"])('pre', `  var arr = [1,2,3]
  var b = [arr];
  arr.push(4);
  b.push(arr);
  console.log(b[0]);  // [1,2,3,4]
  console.log(b[1]);  // [1,2,3,4]  
  b[0] == b[1]  // true` ),
Object(lib["h"])('p', ' That didn\'t work! b points to [arr] and arr still points to its original location in memory. "arr.push(4)" mutated the value in arr\'s location and "b.push(arr)" added a copy. "b[0] == b[1]" returning true verifies that both elements of b point to the same place in memory because in JavaScript, the "==" operator on objects (including arrays) is defined to return true if and only if the objects\' ' ),
Object(lib["h"])('p', ' Here is what happens when "arr.slice()" is pushed into b: ' ), 
Object(lib["h"])('pre', `  var arr = [1,2,3];
  var b = [arr.slice()];
  arr.push(4);
  b.push(arr.slice());
  console.log(b[0]);  // [1,2,3]
  console.log(b[1]);  // [1,2,3,4] ` ),
Object(lib["h"])('p', ' Success! "arr.slice()" returned a copy of arr assigned to a new location in memory. It is anonymous, so the only way to access it is through b. b[0], b[1], and arr each have unique locations in memory so mutating one has no effect on the others. ' ), 
Object(lib["h"])('p', ' The sixteen-square grid below puts these concepts into practice. If you click two squares, they exchange locations on the grid. If you do this several times, the "BACK" and "FORWARD" buttons will display the result of each pair of clicks. ' ),
Object(lib["h"])('div#donkey', makeRDS( ArrDS[mMindexDS.x] )),
Object(lib["h"])('br'),
Object(lib["h"])('button#gridBack', 'back' ),
Object(lib["h"])('button#gridForward', 'forward' ),
Object(lib["h"])('p', "index: " + mMindexDS.x  ),
Object(lib["h"])('p', "rNumsDS: " + rNumsDS.join(', ') ),
Object(lib["h"])('p', "rMatrixF(rNumsDS: " + rMatrixF(rNumsDS) ),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('p', ' Reactivity is achieved in these demonstrations through Cycle.js rather than RxJS, Bacon, or something else that could work just as well, though perhaps not quite as elegantly. This section provides a glimpse of how I use (some might say, \"misuse\") Cycle.js. '),
Object(lib["h"])('p', ' If you click any two numbers above they will exchange places with one another. The array "rNumsDS" keeps track of the positions of numbers on the grid. ' ),
Object(lib["h"])('pre', `var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] `),
Object(lib["h"])('p', ' Each square on the grid is a button. This is the initial setup: '),
Object(lib["h"])('pre', `  var rDataDS = [
    h('button#mR0.mR', 0 ),
    h('button#mR1.mR', 1 ),
    h('button#mR2.mR', 2 ),
    h('button#mR3.mR', 3 ),
    h('button#mR4.mR', 4 ),
    h('button#mR5.mR', 5 ),
    h('button#mR6.mR', 6 ),
    h('button#mR7.mR', 7 ),
    h('button#mR8.mR', 8 ),
    h('button#mR9.mR', 9 ),
    h('button#mR10.mR', 10 ),
    h('button#mR11.mR', 11 ),
    h('button#mR12.mR', 12 ),
    h('button#mR13.mR', 13 ),
    h('button#mR14.mR', 14 ),
    h('button#mR15.mR', 15 ) ] ` ),
Object(lib["h"])('p', ' The following line of code is a fixture of the virtual DOM. It accounts for the sixteen-square grid shown above: ' ),
Object(lib["h"])('pre', `  h('div#donkey', ArrDS[indexDS] ) `),
Object(lib["h"])('p', ' If you begin exploring the demonstration by clicking the upper right square, this code in main() responds by placing the number 3 in rADS: ' ),
Object(lib["h"])('pre', `  var m83$ = sources.DOM
  .select('button#mR3').events('click')
  .map(e => {
    rADS.push(toInt(e.target.id.slice(2,4)));
    if (rADS.x.length === 2) {
     rDataDS = rExchange (rADS[0], rADS[1]); 
    }
  }) ` ),
Object(lib["h"])('p', ' Then if you click the bottom right square (var m815), rADS expands to contain "3" and "15". This causes rExchange(3,15) to run and return the updated value of rDataDS. ' ),
Object(lib["h"])('pre', `  function rExchange (k,n) {
    var a = rNumsDS[k];
    rNumsDS[k] = rNumsDS[n];
    rNumsDS[n] = a;
    rADS = [];
    return makeRDS(rNumsDS);
  } `),
Object(lib["h"])('p', ' The last line of rExchange is a call to makeRDS, which is defined as follows: ' ),
Object(lib["h"])('pre', `  function makeRDS (arr) {
    var r = arr.slice();
    return [
      h('button#mR0.mR', r[0] ), 
      h('button#mR1.mR', r[1] ),
      h('button#mR2.mR', r[2] ), 
      h('button#mR3.mR', r[3] ), 
      h('button#mR4.mR', r[4] ), 
      h('button#mR5.mR', r[5] ),
      h('button#mR6.mR', r[6] ), 
      h('button#mR7.mR', r[7] ), 
      h('button#mR8.mR', r[8] ), 
      h('button#mR9.mR', r[9] ),
      h('button#mR10.mR', r[10] ), 
      h('button#mR11.mR', r[11] ), 
      h('button#mR12.mR', r[12] ), 
      h('button#mR13.mR', r[13] ),
      h('button#mR14.mR', r[14] ), 
      h('button#mR15.mR', r[15] ) 
    ];
  } `),



Object(lib["h"])('p', ' button#R9.mR has id "#R9" and formatting class "mR". When numbers are rearranged, the id\'s remain in fixed positions. ' ),
Object(lib["h"])('p', ' The process is responsive because r83 and r815 are merged in the stream that feeds the virtual DOM; i.e., the stream returned by main() and fed back into main() by run(). Cycle.run(main, sources) is the last line of the front-end code. ' ),
Object(lib["h"])('p', ' This code undoubtedly deviates from Cycle.js and functional programming recommended practices. After all, rNumsDS and rDataDS are global variables tracking the state of the grid. Cycle.js favors maintaining state in streams and functional aficionados eschew global variables, period. Me, I just like to make things work as neatly and efficiently as I can. Making a state stream would be a hassle and, since this is not a group effort, nobody is going to hijack my variable names. So, for now, grid state will hang out in global scope. ' ),





    Object(lib["h"])('h2', ' MonadEr - An Error-Catching Monad ' ),
    Object(lib["h"])('p', ' Instances of MonadEr function much the same as instances of Monad, but when an instance of MonadEr encounters an error, it ceases to perform any further computations. Instead, it passes through every subsequent stage of a sequence of MonadEr expressions, reporting where it is and repeating the error message. It will continue to do this until it is re-instantiated or until its bnd() method runs on the function clean(). ' ),
    Object(lib["h"])('p', 'Functions used as arguments to the MonadEr bnd() method can be placed in quotation marks to prevent the browser engine from throwing reference errors. Arguments can be protected in the same manner. Using MonadEr can prevent the silent proliferation of NaN results in math computations, and can prevent browser crashes due to attempts to evaluate undefined variables. ' ),
    Object(lib["h"])('p.tao1b', ' The monad laws hold for MonadEr instances. The following relationships were verified in the Chrome console: ' ),
    Object(lib["h"])('pre', `    ret3(0,'t',[])  // t is now an instance of MonadEr with t.x = 0 and t.e = [].

      t.ret(3).bnd(cube3).x === cube(3).x
      ret3(3).bnd(cube3).x === cube3(3).x

      t.bnd(t.ret) === t
      t.bnd(ret) === t

      t.ret(0).bnd(add3, 3).bnd(cube3).x ===
      t.ret(0).bnd(v => add3(v,3).bnd(cube3)).x  ` ),

  Object(lib["h"])('h3', 'Feedback From the Error Monad' ),
  Object(lib["h"])('span#comments' ),
  Object(lib["h"])('img.image', {props: {src: "error2.png"}}  ),
  Object(lib["h"])('div#comment'),
    Object(lib["h"])('h2', {style: {color: "red" }}, 'Comments' ),

  Object(lib["h"])('a', {props: {href: '#top'}}, 'Back to the top'),
    Object(lib["h"])('div#com2',  { style: { display: abcde} } ),
    Object(lib["h"])('p', ' When this page loads in the browser, a user name is automatically generated in order to establish a unique WebSocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password. ' ),
    Object(lib["h"])('p', 'The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made. '),
    Object(lib["h"])('p', ' If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again. ' ),
    Object(lib["h"])('br'),
    Object(lib["h"])('h3', 'Register' ),
    Object(lib["h"])('span.red', mMregister.x ),
    Object(lib["h"])('input.register', {style: {display: mMshowRegister.x }} ),
    Object(lib["h"])('br' ),
    Object(lib["h"])('br' ),
    Object(lib["h"])('h3', 'COMMENTS' ),
    Object(lib["h"])('textarea#comment', '' ),
    Object(lib["h"])('br' ),
    Object(lib["h"])('br' ),
    Object(lib["h"])('div', commentMonad.html ),
    Object(lib["h"])('p', ' When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. '),
    Object(lib["h"])('p', ' When a comment is created, modified, or deleted, a WebSocket message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js. ' ),
  Object(lib["h"])('p', ' The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger. ' ),
  Object(lib["h"])('p', ' commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Immutability is necessary for game history traversal. Here is the entire Comments.js file: ' ),
  Object(lib["h"])('pre', `function showFunc (name, name2)
{return name == name2 ? 'inline-block' : 'none'}

var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
}  

bind2(n)(cubeP)(addP(3))(a=>a+ar[0]+ar[1]-18)(multP(1/3))
  (addP(-11))(()=>ar[1]+ar[2]+ar[3])(terminate) ;

var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

MonadState3.prototype.html = [];

MonadState3.prototype.init = function (str) { // fetch all comments
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  this.s[1] = this.s[1].filter(v => v!== '');
  this.s[1].splice(num,1);
  this.s[0] = this.s[1].join("<@>");
  this.html = process(this.s[1]);
  return this.html;
};

function process (a) { //Assembles the HTML for display.
  var arr = a;
  mMcomments.ret([]);
  var n = -1;
  arr.map(a => {
    var x = a.split("<o>");
    if (x.length != 2) x = ['malfunction', '8888']
    x[1] = x[1].replace(/<<>>/g, ',');
    show = showFunc(x[0], pMname.x);
    n+=1;
    mMcomments.bnd(push, h('div#'+n, [
      h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
      h('br'),
      h('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      h('button#deleteB', {props: {innerHTML: 'delete'},
     style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
} ` ),
Object(lib["h"])('div#curryDef'),
Object(lib["h"])('br'),
Object(lib["h"])('pre', `function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function curryReverse(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args.reverse());
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

} `),

Object(lib["h"])('a', {props: {href: '#top'}}, 'Back to the top'),
  Object(lib["h"])('p', ' *************************************************************************************** ' ),

Object(lib["h"])('h3', ' STATEMENT OF DAVID SCHALK ' ),
Object(lib["h"])('p', styleFunc(["#a2f2e8",,"18px","italic",,]), 'Functional programming aficionados will have noticed by now that I do not scrupulously avoid mutation of variables, variables in global scope, functions that fish data from outside their scopes, or functions that produce side effects before they return. Is there method to my madness? Am I crazy like a fox? Or am I just setting bad examples with sloppy code? Here\'s what I say about all of that: '),
Object(lib["h"])('p', ' For me, functional programming is not a religious cult to whose dogmas I must scrupulously adhere. Mutating variables inside of functions can minimize lines of code and promote efficiency. The global variable that starts out as: '),
Object(lib["h"])('pre', `  var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] `),
Object(lib["h"])('p', ' feels elegant to me. It is a simple proxy for the sixteen square grid that never needs to be operated upon directly because the placement of its numbers are in one-to-one correspondence with the placement of its (rNumsDS\'s) elements. I could have tucked it away in an object or closure, but I like it so much that I dignified it with the designation "window.rNumsDS". I ignored an important rule. I did it more than once, and it isn\'t the only important rule I ignored. But in every case, there was an advantage (if only in efficiency), and I made sure that no harm could come from my deviations. ' ),
Object(lib["h"])('p', ' If I were working in a group, or providing something that would be maintained by anyone other than me, I would code by the book. I\'m not getting paid for this work; I\'m just having fun. Dig it! '),

  Object(lib["h"])('h3', 'Haskell Time'),
  Object(lib["h"])('p', ' This page is for front end developers, but in case anyone is interested, here are the server functions responsible for deleting or amending a comment: ' ),
  Object(lib["h"])('pre', `    removeOne _ []                 = []
  removeOne x (y:ys) | x == y    = ys
                     | otherwise = y : removeOne x ys

  changeOne :: Text -> Text -> [Text] -> [Text]
  changeOne _ _ []                 = []
  changeOne z x (y:ys) | x == y    = z : ys
                       | otherwise = y : changeOne z x ys ` ),

  Object(lib["h"])('a', ' Every message sent to the server is a comma separated string beginning with a prefix, then a group, and then a name. Comma separated items after that are named extra and extra2. ' ),
  Object(lib["h"])('p', ' The code belw is responsible for dealing with comments. As in the browser, WebSocket messages are dealt with according to their six character prefixes. extra and extra2 are the only pertinent data since comments go to all groups ' ),
  Object(lib["h"])('pre', `else if "GZ#$42" \`T.isPrefixOf\` msg
                  -- FETCH AND BROADCAST ALL COMMENTS ON BROWSER LOAD
   then
       do
           st <- atomically $ readTVar state
           broadcast ("GZ#$42," \`mappend\` group \`mappend\` ","
             \`mappend\` sender \`mappend\` "," \`mappend\` comments ) st

else if "GN#$42" \`T.isPrefixOf\` msg
                  -- RECEIVE A NEW COMMENT, UPDATE THE FILE AND THE TVAR,
                  --  AND BROADCAST THE NEW COMMENT
   then
       do
           old <- atomically $ readTVar comms
           lk <- atomically L.new
           let c = old \`mappend\` (T.replace (at \`mappend\` at) at extra)
           let new = T.replace (at \`mappend\` at) at c -- cleanup
           L.with lk $ TIO.writeFile xcomments new -- lock on writing
           atomically $ writeTVar comms new
           st <- atomically $ readTVar state
           broadcast ("GN#$42," \`mappend\` group \`mappend\` ","
               \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

 else if "GD#$42" \`T.isPrefixOf\` msg      -- DELETE A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = removeOne extra2 b
            let d = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments d
            atomically $ writeTVar comms d
            st <- atomically $ readTVar state
            broadcast ("GD#$42," \`mappend\` group \`mappend\` ","
              \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

 else if "GE#$42" \`T.isPrefixOf\` msg      -- EDIT A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = changeOne extra3 extra2 b
            let txt = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments txt
            atomically $ writeTVar comms txt
            st <- atomically $ readTVar state
            broadcast ("GE#$42," \`mappend\` group \`mappend\` com
              \`mappend\` sender \`mappend\` com \`mappend\` extra \`mappend\` com
                 \`mappend\` extra3) st   ` ),
  Object(lib["h"])('a', { props: { href: '#top' } }, 'Back To The Top'),
  Object(lib["h"])('br'),

  Object(lib["h"])('div#reactivity' ),
  Object(lib["h"])('br'),
  Object(lib["h"])('a', {props: {href: "#reactivity2"}}, 'Back to the pingpong demo' ),

  Object(lib["h"])('h3', 'Reactivity in Cycle.js'),

  Object(lib["h"])('p', ' The stream incF$ and the driver pingpongDriver() (both defined below) are essential components of the pingpong demonstration. '),

  Object(lib["h"])('pre', blue, `  var incF$ = n => xs.of(n);

    function pingpongDriver () {
      return xs.create({
        start: listener => {
          incF$ = k => listener.next(k)
        },
        stop: () => {}
      })
    };  `),
  Object(lib["h"])('p', ' Whenever the stream incF$() is called, the stream returned by pingpongDriver is augmented and that causes main() to return an object whose only element is a map from the stream calcStream$ to a virtual DOM node with many children. calcStream$ is produced by merging 48 streams together including ping$ resulting from ping(n) where "n" is the number supplied by pingpongDriver (a/k/a "sources.PP"). The first two lines of main()\'s return value are shown below. ' ),
  Object(lib["h"])('pre', `    return { DOM: calcStream$.map(() => {
      return h('div.main', [  ` ),


  Object(lib["h"])('p', ' merged into it. Each time main returns, Snabbdom\'s diff and render routine executes inside of run(sources,main). run(sources,main) calls main() and furnishes it with the listeners provided by the drivers. New events cause the cycle to repeat. ' ),
  Object(lib["h"])('p', ' ping(-5)([0,0]) is called when the pingpong button is clicked. Here\'s the relevant code:'),
  Object(lib["h"])('pre', `  var pingpong$ = sources.DOM
      .select(\'buttonr#ingpong\').events(\'click\').map(() => ping(0)([0,0]));

    var ppR = {style: {color: 'red',
      marginLeft: '5%', fontSize: "26"}};
    var ppY = {style: {color: 'yellow',
      marginLeft: '42%', fontSize: "26"}};
    var ppRY = {style: {color: 'yellow',
      marginLeft: '5%', fontSize: "26"}};
    var ppYR = {style: {color: 'red',
      marginLeft: '42%', fontSize: "26"}};

    var ppStyle = false;


    var ping = n => ar => {
      var k = Math.floor(Math.random() * 5)+1;
      if(ar[0] > 10 || ar[1] > 10) {
        diffRender();
        return;
      }
      setTimeout(() => {
        if (n <= k) {
          ppStyle = !ppStyle;
          incF$(n);
          ping(n+1)(ar);
        }
        else if (n % 2 === 0) {
          ar[0]+=1;
          m67_RESULT = h('pre', ppYR, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` )W
          ping(0)(ar);
        }
        else {
          ar[1]+=1
          m67_RESULT = h('pre', ppY, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` );
          ping(0)(ar);
        }
      }, 500 )
    }  ` ),
Object(lib["h"])('p', ' The function diffRender() forces Snabbdom to perform one last diff and render. It is defined as follows: ' ),
  Object(lib["h"])('pre', `  const diffRender = () => document.getElementById("testQ").click();`),
  Object(lib["h"])('p', ' The button "testQ" cubes the number 2 in the MonadItter demonstration. It was chosen because it does not significantly affect anything aside from forcing Snabbdom to update the DOM. '),

  Object(lib["h"])('p', ' The stream incF$ and the driver pingpongDrirun(main, sources) are the crucial Cycle.js application functions. sources contains the drivers. sources.PP = pingpongDriver is one of the drivers consumed by run() and made available in main() so information can be sent back to run. Round and round it goes. Here is the definition of ping$. ' ),

  Object(lib["h"])('span.tao', ' The monads do not depend on Cycle.js. They can be used in React, Node, and all other browser-based applications. I happen to prefer Cycle.js working in conjunction with a Haskell WebSocket server. ' ),
  Object(lib["h"])('br'),
  Object(lib["h"])('h2', 'Appendix A - The Game Code' ),
  Object(lib["h"])('pre', `function MonadState(g, state) {
  this.id = g;
  this.s = state;
};  ` ),
  Object(lib["h"])('a', {props: {href: '#gameIntro'}}, 'Back to the first group of demonstrations.'),
  Object(lib["h"])('p'),
  Object(lib["h"])('pre', `MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice()
  playerName = this.s[0][this.s[1]][5] ? this.s[0][this.s[1]][5].slice() : "nobody",
  playerGroup = this.s[0][this.s[1]][6] ? this.s[0][this.s[1]][6].slice() : "solo",
]) {
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display,playerName,playerGroup])
   console.log("[score, goals, operator, picked, display]",
     [score, goals, operator, picked, display,playerName,playerGroup]);
  this.s = newState;
  buttonNode = bNode(display);
  return window['gameMonad'] = new MonadState('gameMonad', newState);
}

var gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[1,2,3,4]],
      [0,0,0,[],[0,0,0,0]]],1 ]);  ` ),
  Object(lib["h"])('p', ' Here is the code that controls what happens when a player clicks a number or an operator: '),
  Object(lib["h"])('pre', `  var numClickAction$ = numClick$.map(e => {
    if (gameMonad.fetch3().length < 2)  {
      var a = gameMonad.fetch3();
      var b = gameMonad.fetch4();
      a.push(b.splice(e.target.id, 1)[0]);
      gameMonad.run([,,,a,b,,]);
      if (a.length === 2 && gameMonad.fetch2() != 0) {
        updateCalc(a, gameMonad.fetch2())
      }
    }
  }).startWith([0, 0, 0, 0]);

  var opClick$ = sources.DOM
      .select('.op').events('click');

  var opClickAction$ = opClick$.map(e => {
    var s3 = gameMonad.fetch3();
    if (s3.length === 2) {
      updateCalc(s3, e.target.innerHTML);
    }
    else {
      gameMonad.run([,,e.target.innerHTML,,,,]);
    }
  });  `),
  Object(lib["h"])('p', ' Notice the empty spaces in the arguments to gameMonad.run(). gameMonad.run()\'s argument is an array to facilitate calling it with default values. In numClickAction$ we are not changing the score, goals, or operator. The default values of these parameters are their current values. In opClickAction$, we are changing only one thing, the operator. Everything else stays as it is. ' ),
  Object(lib["h"])('p', ' When two numbers and an operator have been selected, control passes to updateCalc(). Here\'s the code: ' ),


  Object(lib["h"])('pre', `function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);ar
  if (result === 18 || result === 20) {
    score(result);
  }
  else {
    var a = gameMonad.fetch4().slice();
    a.push(result);
    gameMonad.run([,,0,[],a,,]);  // Display the result and
                                // reset the operator and selected values.
  }
};

function score(result) {
    var sc = parseInt(gameMonad.fetch0());
    var sco = result === 18 ? sc + 3 : sc + 1;
    var scor = sco % 5 === 0 ? sco + 5 : sco;
    var goals = gameMonad.fetch1();
    if (scor === 25 && gameMonad.fetch1() === "2") {  // The player wins.
        mMindex.ret(0);
        gameMonad = new MonadState('gameMonad',
           [[[0,0,0,[],[0,0,0,0]],[0,0,0,[][0,0,0,0]]],0]);
        socket.send(\`CE#$42,${pMgroup.x},${pMname.x}\`);
        // Ask the server to announce the winner to the entire group
        newRoll(0,0);
    }
    else if (scor === 25) {
      newRoll(0, parseInt(goals,10) + 1);
    }
    else newRoll(scor, goals);   // No increase in the number of goals.
};   ` ),
 Object(lib["h"])('span.tao', ' Additional code is available at' ),
 Object(lib["h"])('a', { props: { href: "https://github.com/dschalk/monads-in-JavaScript",
   target: "_blank" } }, 'monads-in-JavaScript.'),
  Object(lib["h"])('p', '.'),
  Object(lib["h"])('p'),

  Object(lib["h"])('h3', 'Appendix B - Curried Functions Used In Several Demonstrations'),

  Object(lib["h"])('pre#wait', ` function square (v) {
    return ret(v*v)
  };

  function cube (v, id) {
    return ret(v*v*v, id);
  };

  function add (a, b, id) {
    return ret((parseInt(a,10) + parseInt(b,10)),id);
  };

  const divCinverse = a => b => ret(e/b);
  const divC = a => b => ret(b/a);
  const addC = a => b => ret(a+b);
  const cubeC = v => ret(v*v*v);
  const multC = a => b => ret(a*b);
  const doubleC = a => ret(a+a);
  const squareC = a => ret(a*a);
  const sqrtC = a => ret(Math.sqrt(a));

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
} h('a#it4', {props: {href: '#top'}}, 'Back to the top'),

async function cubeP (x) {
  await wait(2000)
  return ret(x*x*x);
} 

const addP = x => async y => {
  await wait(2000)
  return ret(x + y);
}

async function squareP (x) {
  await wait(2000)
  return ret(x*x);
}

const divPinverse = a => async b => {
  await wait (2000)
  return ret(a/b);
}

const divP = a => async b => {
  await wait (2000)
  return ret(b/a);
}

const sqrtP = async a => {
  await wait (2000)
  return ret(Math.sqrt(a));
}

const doubleP = async a => {
  await wait (2000)
  return ret(a+a);
}

const multP = x => async y => {
  await wait(2000)
  return ret(x * y);
}

    `),

Object(lib["h"])('p'),
Object(lib["h"])('h3', 'Appendix C - Further Reading ' ),
Object(lib["h"])('p', ' Here is a good resource: '),
Object(lib["h"])('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know JavaScript by Kyle Simpson'),
Object(lib["h"])('span', ' You can support the open-source digital version of this book with Patreon at the above address or purchase hard copies from O\Reily, Amazon, etc. ' ),
Object(lib["h"])('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know JavaScript'),
Object(lib["h"])('span', ' is the thinking developer\'s answer to ' ),
Object(lib["h"])('a',   {props: {href: "http://shop.oreilly.com/product/9780596517748.do", target: "_blank" }},  ' "JavaScript: The Good Parts" by Douglas Crockford ' ),
Object(lib["h"])('p', ' That\'s not to say that Crockford isn\'t a thinking developer. He is a very bright guy. It\'s just that the so called "good parts" are a dumbed down subset of JavaScript that help keep people out of trouble when they don\'t feel inclined understand the JavaScript programming language. ' ),
Object(lib["h"])('span#cyclet', ', which has long been revered as a "must read" JavaScript book. Kyle Simpson recommends learning to use potentially dangerous code intelligently while Douglas Crockford advocates never using it at all. I think the phrase "eval is evil" stems from Crockford\'s book. I find eval() to be very useful from time to time. Kyle Simpson teaches programmers how to safely tap the full potential of JavaScript. ' ),
Object(lib["h"])('p#defs'),
Object(lib["h"])('br'),

Object(lib["h"])('a', {props: {href: '#lion'}}, 'Back to the bind discussion.'),
  
Object(lib["h"])('pre', h3Simulation, 'Asynchronous Processes - A deep dive into Demonstration 1' ),

Object(lib["h"])('p', ' Demonstration 1 begins with the click of a button with id "factors_Q" and ends with fifteen browser updates. The activity after each click is tied together by: ' ),
Object(lib["h"])('pre', `function bind (x, ar=[]) {
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    var p;
    if (x instanceof Promise) {
      p = x.then(v => func(v));
    }
    else p = func(x);
    return bind(p, ar);
  };
}; ` ),
Object(lib["h"])('p', ' Clicking the button with id "factors_Q" creates an event to which factorsClick7$ stream responds by prompting "bind(145)(x=>x*x*x)(it4)(it6)(it7)" to execute fifteen times. The factorsAction7$ stream flows into the virtual DOM where changes cause the Snabbdom diff and render process to update the browser. Here\'s some of the relevant code: ' ),
Object(lib["h"])('pre',  `var factorsClick7$ = sources.DOM
  .select('button#factors_Q').events('click');

var factorsAction7$ = factorsClick7$.map( e => {
  m42_ = [];

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
}); ` ),
    
Object(lib["h"])('p', 'it4() sends the number 3,048,625 to the server which responds by sending back a pseudo-random number between 1 and 3,048,625. '),

Object(lib["h"])('pre', `var it4 = x => {
  if (socket.readyState === 1) socket
  .send(\`BC#$42,${pMgroup.x},${pMname.x},${x}\`);
} `),

Object(lib["h"])('p', 'WS is a driver defined as follows: ' ),

Object(lib["h"])('pre', `function createWebSocket(path) {
    var host = window.location.hostname;
    if (host === '')
        host = 'localhost';
    var uri = 'ws://' + host + ':3055' + path;
    var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

var socket = createWebSocket('/');

function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)}, 
    stop: () => { socket.close() }
  });
}; ` ),

Object(lib["h"])('p', ' The prefix "xs" designates the name space for the xstream library. ' ),

Object(lib["h"])('pre', `function main(sources) {
  const messages$ = sources.WS.map( e => {
    var v = e.data.split(',')  // The string arriving from the server is made into an array.
    ...
    ret(v[0]  // "ret" is defined below:
              // v[0] is the prefix of each message from the server.
    ...
    .bnd(next, 'BC#$42', mMZ28)  // Executes when a "BC$#42"-prefixed message arrives from the server

Instances of Monad2 encapsulate values. Here is the definition:

function Monad2(z = 0) {
  this.x = z;
};

Monad2.prototype.ret = a => new Monad2(a);

Monad2.prototype.bnd = function (func, ...args) {
  return func(this.x, ...args)
}

function ret (val = 0) {  // Similar to Monad2.prototype.ret
  return new Monad2(val);
} ` ),

Object(lib["h"])('p', ' Back to messages$: ' ),

Object(lib["h"])('pre', `ret(v[0])
...
  .bnd(next, 'BC#$42', mMZ28)  
 ) ` ),

Object(lib["h"])('p', ' When anything prefixed by mMZ28 comes in from the server, mMZ28.release executes, causing mMZ40.bnd(r) to execute, where "r" is the random number obtained from the Haskell server. ' ),

Object(lib["h"])('pre', `mMZ28.bnd( () => {
  mMZ40.release(v[3]);
}); ` ),

Object(lib["h"])('p', ' The cached prime numbers and the random number obtained from the server are then sent to workerH. it6 deviates from the functional principle of placing all extraneous data in the arguments. ' ),

Object(lib["h"])('pre', `var it6 = x => {
  mMZ40.bnd(x => workerH.postMessage([primesMonad.s[3], x])); ` ),

Object(lib["h"])('p', 'Here\'s the definition of workerH.js: ' ),

Object(lib["h"])('pre', `function isPrime(n) {
   var m = Math.sqrt(n);
   for (var i=2;i<=m;i++) if (n%i==0) return false;
   return true;
}

function primeNums (p,x) {
  var q = p[p.length - 1];
  var arr = []; 
  for (var i = q; i < Math.ceil(x+1); i+=1) if (isPrime(i)) arr.push(i);
  arr = p.concat(arr)
  return arr
}  

function pfactors (prms, n) {
  var ar = [];
    prms.map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  return ar;
}

sortFactors = ar => ar.sort(function(x,y) {
  return (x - y);
});

var g = p => x => {
  var primes = primeNums(p,x);
  var factors = pfactors(primes,x);
  var z;
  if (factors.length > 1) {
    z = "The prime factors of " + x + " are " + sortFactors(factors).join(', ')
  }
  else z = x + " is a prime number"
  return [primes, z];
}

onmessage = function(m) {
  var a = m.data[0];
  var b = parseInt(m.data[1],10);
  postMessage(g(a)(b));
}  ` ),

Object(lib["h"])('p', ' "mMZ52.bnd(m => { ... " could have been placed anywhere. Putting it at the end of "bind(50)(x => x*x*x)(it4)(it6)(it7)"illustrates the flexibility of bind for the purposes of Example 1, but in production it would also make Demonstration 1 easier to understand by people responsible for maintaining the code. ' ),


Object(lib["h"])('h3', 'MonadItter'),
Object(lib["h"])('p', ' The MonadItter section of the page has a detailed discussion and live demonstrations. This is the definition: '),
Object(lib["h"])('pre', `  var MonadItter = function MonadItter() {
  this.p = function () {};
  this.release = function () {
    return this.p.apply(this, arguments);
  };
  this.bnd = function (func) {
    return this.p = func;
  };
}; `),
Object(lib["h"])('h3', 'Promises'),

Object(lib["h"])('p', ' As the definition of MonadItter shows, bnd() saves functions until release() causes them to execute. MonadItter instances are usually used on this webpage where promises, generators, and async/await could also do the job. '),
Object(lib["h"])('p', 'Here are the Promises-based functions prm4() and prm6() that can be substituted for it4() and it6() in the expression bind(145)(cubeC)(it4)(it6): '),
Object(lib["h"])('pre', `  const prm4 = x => {
  if (socket.readyState === 1) socket.send(\'BB#\$42,pMgroup,pMname,' + x);
  return new Promise( (resolve, reject) => {
     mMZ37.bnd((y) => resolve(ret(y)))
  })
}

const prm6 = x => {
  workerG.postMessage([primesMonad.s, [x]]);
  return "Done"
} `),

Object(lib["h"])('p', ' Error handling is easy when using MonadItter instances, and is entirely optional. '), 
Object(lib["h"])('p', ' After "bind(145)(cubeC)(it4)(it6)(it7) runs, the prime decomposition of the number it recieved arrives from workerG. The workerGDriver (sources.WWG) detects the message and adds it to the workerG$ stream. Here is the definition of workerGDriver:  ' ),
Object(lib["h"])('pre', `  function workerGDriver () {
  return xs.create({
    start: listener => { workerG.onmessage = msg => listener.next(msg)},
    stop: () => { workerG.terminate() }
  });
}; `),
Object(lib["h"])('p', ' Clicking the "decompose fifteen random numbers" button causes factorsRecursion(0) to execute. Here\'s the code: '),
Object(lib["h"])('pre', blue,  `  const factorsRecursion = n => bind(145)(cubeC)(it4)
  (it6)(() => { if (n < 15) factorsRecursion(n+1)}); `),
Object(lib["h"])('p', 'result778(m.data) is called each time a message from workerG arrives. The definition of result778 is:   ' ),
Object(lib["h"])('pre', blue, `var result778 = x => h('div', [
    m778_RESULT,
    h('br'),
    h('span', bigBlue, x[3] ),
    h('span', bigGreen, x[0] ),
    h('span', bigBlue, x[4] ),
    h('span', bigRed, x[5] ),
]); `),
Object(lib["h"])('p', ' The stream that listens for workerG messages adds to the vnode m778_RESULT as follows: '),
Object(lib["h"])('pre', `const workerG$ = sources.WWG.map(m => {
    m778_RESULT = result778(m.data);
    primesMonad = new MonadState('primesMonad', m.data[2]);
    }); `),
  Object(lib["h"])('pre', bigGreen, `const factorsRecursion = n => bind(145)(cubeC)(it4)
  (it6)(pause)(() => { if (n < 15) factorsRecursion(n+1)}); `),

Object(lib["h"])('pre', bigGold, `  var test5 = x => {
  var n = toInt(x);
  Bind.bind1 = []; 
  Bind.bind2 = []; 
  Bind.bind3 = []; 
  
  bind1(n+0)(cubeP)(() => idP(Bind.bind1[0] -
  Bind.bind1[1]))(v=>addP(Bind.bind1[1])(v));

  bind2(n+1)(cubeP)(() => idP(Bind.bind2[0] -
  Bind.bind2[1]))(v=>addP(Bind.bind2[1])(v)); 

  bind3(n+2)(cubeP)(() => idP(Bind.bind3[0] -
  Bind.bind3[1]))(v=>addP(Bind.bind3[1])(v));} `), 
Object(lib["h"])('span#bind2', ''),
Object(lib["h"])('a', {props: {href: '#demo2'}}, 'Back to Demonstration 2'),

Object(lib["h"])('pre',  `function Bind (str) {
  Bind[str] = [];
  return function bindo ( x ) {
    if (x instanceof Promise) x.then(y => {
      Bind[str].push(y);
      diffRender();
      console.log(Bind[str]);
    })
    else {
      Bind[str].push(x)
      diffRender();
    }
    console.log(Bind[str]);
    return function debug8 (func) {
      var p;
      if (func.name === "terminate") return Bind[str];
      if (x instanceof Promise) {
        p = x.then(v => func(v));
      }
      else p = func(x);
      return bindo(p);
    };
  };
};

var bind$ = n => xs.of(n);

function bindDriver () {
  return xs.create({
    start: listener => { bind$ = a => listener.next(a) },
    stop: () => {}
  })
};

var bind1 = Bind("bind1");
var bind2 = Bind("bind2");
var bind3 = Bind("bind3");
var bind4 = Bind("bind4");
var bind5 = Bind("bind5");
var bind6 = Bind("bind6");
var bind7 = Bind("bind7");
var bind8 = Bind("bind8");
var bind9 = Bind("bind9"); ` ),





Object(lib["h"])('p#pingmaker', ' ' ),

Object(lib["h"])('a', {props: {href: '#backToDem2'}}, 'Back to Demonstration 2'),
Object(lib["h"])('br'),
Object(lib["h"])('br'),
Object(lib["h"])('p', ' This is the code involved in the pingpong demonstration. PingpongMaker\'s argument creates a namespace. The demonstration features three such namespaces. It verifies that each game proceeds with its own state, oblivious of the states of the other two games in progress. Bind uses its closure to achieve a similar effect. ' ),
Object(lib["h"])('pre',  `var pingD = a => b => c => h('div', [
  h('pre', a, \` ping        ---> \`), 
  h('pre', b, \`                 <---        pong \`), 
  h('pre',  \`          -- SCORE: ping: \` + c[0]  + \` pong: \` + c[1]  ),
]);

var PingpongMaker = (name) => {
  var a = _A1;
  var b = _A3;
  var c = [0,0];
  var n = 0;
  var bool = true;
  var k = Math.floor(Math.random() * 7)+1;
  return function train () {
    if (c[0] > 10 || c[1] > 10) return;
    var ms = 400;
    console.log('a.style.color, b.style.color, c', a.style.display, b.style.display, c);
    if (a === _A3) {a = _A1; b = _A3}
    else if (a === _A1) {a = _A3; b = _A2};
    if (n <= k) {
      n+=1;
      window[name] = pingD(a)(b)(c);
      diffRender();
    }
    else if (n % 2 === 0) {
      ms = 1200
      n = 0
      c[0]+=1;
      window[name] = pingD(_A1)(_A3)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    else if (n % 2 === 1) {
      ms = 1200;
      n = 0;
      c[1]+=1;
      window[name] = pingD(_A3)(_A2)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    setTimeout( function () {
      train();
    },ms );
  }
}  

PingpongMaker('m67_RESULT')
PingpongMaker('m68_RESULT')
PingpongMaker('m69_RESULT')  `),

Object(lib["h"])('p#monads', ' m67_RESULT, m68_RESULT, and m69_RESULT are permanent fixtures in the virtual DOM description returned by main()'),

Object(lib["h"])('a', {props: {href: '#top'}}, 'Back to the top'),
  Object(lib["h"])('br'),
Object(lib["h"])('h2', 'The >>= operator'),
Object(lib["h"])('p', ' The definition of >>= (pronounced "bind") used below is a variation that uses monads. As you see, encapsulating values in monads works smoothly, but adds nothing of value. Useful monads are in the Haskell server on the backend of this web page. Here it is: ' ), 
Object(lib["h"])('pre', `operator >>= left 11 = (left, right) => {
  return #\`\${right}(\${left}.x)\`;
}; `),
Object(lib["h"])('span', ' >>= and expressions using >>= are compiled to JavaScript code with help from the ' ), 
Object(lib["h"])('a', {props: {href: "https://www.sweetjs.org/"}}, 'sweet.js library'),
Object(lib["h"])('span', '.' ),

Object(lib["h"])('h3', 'Simple Functions' ),  

Object(lib["h"])('p', ' The sweet.js code (orange color) below compiles to the golden Javascript code beneith it: '),
Object(lib["h"])('span', 'sweet.js' ),
Object(lib["h"])('pre', {style: {color: 'orange' }}, `function Monad2(z) {
  this.x = z;
};

function ret (v) {
  return new Monad2(v);
}

var cube = x => ret(x*x*x);
var add = a => b => ret(a+b);
var square = v => ret(v*v); 

operator >>= left 11 = (left, right) => {
  return #\`\${left}.then(\${v => right(v)})\`;
};  

ret(3) >>= cube >>= add(3) >>= square >>= Math.sqrt ), ` ),

Object(lib["h"])('span', 'JavaScript' ),
Object(lib["h"])('pre', {style: {color: "#FFD700", fontSize: "15"}}, `function Monad2(z_146) {
  this.x = z_146;
} 

function ret(v_147) {
  return new Monad2(v_147);
}

var cube_139 = (x_148) => ret(x_148 * x_148 * x_148);
var add_140 = (a_149) => (b_150) => ret(a_149 + b_150);
var square_141 = (v_151) => ret(v_151 * v_151);

Math.sqrt(square_141(add_140(3)(cube_139(ret(3).x).x).x).x);
  // 30  ` ),
Object(lib["h"])('p', ' Notice how sweet.js changes the names of the functions and variables to prevent name clashes. ' ),

Object(lib["h"])('h3', 'Functions That Carry State' ),
Object(lib["h"])('p', ' The following sweet.js code (orange color) compiles to the golden JavaScript code benieth it: ' ),
Object(lib["h"])('span', 'sweet.js' ),
Object(lib["h"])('pre', {style: {color: 'orange' }}, `'lang sweet.js';

function Monad2(z) {
  this.x = z;
};

function ret (v) {
  return new Monad2(v);
}

var id = x => ret(x[0], x[1]);
var cube = x => ret([x[0]*x[0]*x[0], x[1].concat(x[0]*x[0]*x[0])]);
var square = x => ret([x[0]*x[0], x[1].concat(x[0]*x[0])]);
var add = a => b => ret([a+b[0], b[1].concat(a+b[0])]);

operator >>= left 11 = (left, right) => {
  return #\`\${right}(\${left}.x)\`;
};

var a = (ret([3, []]) >>= cube >>= add(3) >>= square).x[1].reduce( (a,b) => a+b );

var b = ( ret([0, []]) >>= add(3) >>= cube >>= 
(x => add(x[1][1])([x[1][1],x[1]])) >>=
(x => add(x[0])([-4 * x[1][0], x[1]]))).x[1]

console.log(a);

console.log(b); ` ),

Object(lib["h"])('span', 'JavaScript' ),
Object(lib["h"])('pre', `function Monad2(z_10) {
  this.x = z_10;
}
function ret(v_11) {
  return new Monad2(v_11);
}
var id_0 = x_12 => ret(x_12[0], x_12[1]);

var cube_1 = x_13 => ret([x_13[0] * x_13[0] * x_13[0], x_13[1].concat(x_13[0] * x_13[0] * x_13[0])]);

var square_2 = x_14 => ret([x_14[0] * x_14[0], x_14[1].concat(x_14[0] * x_14[0])]);
var add_3 = a_15 => b_16 => ret([a_15 + b_16[0], b_16[1].concat(a_15 + b_16[0])]);
var a_8 = square_2(add_3(3)(cube_1(ret([3, []]).x).x).x).x[1].reduce((a_17, b_18) => a_17 + b_18);

var b_9 = (x_19 => add_3(x_19[0])([-4 * x_19[1][0], x_19[1]]))((x_20 => add_3(x_20[1][1])([x_20[1][1], x_20[1]]))(cube_1(add_3(3)(ret([0, []]).x).x).x).x).x[1];

console.log("a_8);

console.log(b_9);  ` ),
  Object(lib["h"])('br'),

Object(lib["h"])('br' ),
      Object(lib["h"])('p', ' Snabbdom, xstream, and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimention and learning. ' ),
      Object(lib["h"])('span.italic', ' Instances of Monad and Monad2 aren\'t Category Theory monads. They are inspired by Haskell monads which, in turn, are inspired by Category Theory. The modified subset of the Haskell Programming Language named "Hask" has true Category Theory monads, but the restrictions on Haskell necessay to make Hask a true Category render it nearly useless. ' ), 
Object(lib["h"])('p', ' Taking inspiration from Category Theory and replicating, to the extent feasable, some of its essential features was the stroke of genius that lifted Haskell into the realm of robust enterprise ready programming languages. Compilers that could infer types and reliably implement fail-safe programs made Haskell the language of choice for several large banks. Now Haskell runs the back ends of a great variety of websites, including websites supporting lots of traffic for major enterprises. The "Functional JavaScript" site that you are on right now has a Cycle.js front end and a Haskell websocket server in the back. It is proving to be very robust, reliable, and easily adaptable to the changing needs of this project. ' ),
      Object(lib["h"])('a', { props: { href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/", target: "_blank" } }, 'Hask is not a category.'),
          Object(lib["h"])('span', ' by Andrej Bauer and the ' ),
          Object(lib["h"])('a', { props: { href: '#discussion' } }, 'Discussion'),
          Object(lib["h"])('span', ' below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws (see below) helps instill confidence that the monads are robust, versatile, and reliable tools for isolating and chaining sequences of javascript functions. ' ),
          Object(lib["h"])('p', ' The demonstrations include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history (all group members see your score decrease or increase as you navegate backwards and forwards). Monads are shown performing lengthy mathematical computations asycronously in web workers. Monads encapsulate state. The error checking monad carries occurances of NaN and runtime errors through sequences of computations much like the Haskell Maybe monad. ' ),






  code.monad,


Object(lib["h"])('span.tao', ' As discussed ' ),
Object(lib["h"])('a', {props: {href: "#haskell"}}, 'above' ), 
Object(lib["h"])('span', ', The Haskell Programming Language (which supports this website\'s server) draws inspiration from Category theory, but contains no rigorous category theory objects or morphisms.'),
Object(lib["h"])('span', ' As discussed ' ),
Object(lib["h"])('a', {props: {href: "#haskell"}}, 'below' ), 
Object(lib["h"])('span', ', tHaskell Programming Language, which supports the back end of this website, draws inspiration from Category theory, but that is as far as it goes. '),

Object(lib["h"])('h3', 'More Random Snippits' ),
Object(lib["h"])('p', '  Libraries and language modifications that impose constraints such as immutability, universal purity of functions, and strict typing can be useful, but this project takes a different approach. The JavaScript used herein is plain, unadorned, unrestricted Ecamascript 2018. ' ),
Object(lib["h"])('p', ' Objects are cloned so past states remain accessible but they are mutated inside of functions for efficiency and to keep the stack from overflowing. Functions ordinarily don\'t interact with the environments outside of their scopes but methods might cause side effects in the objects that contain them. "Functional programming" in this project is about using all that the language offers to create functions that streamline applications and make them readable, maintainable, and robust. Just be sure to cause side effects, alter the contents of specific addresses in memory, and define global variables with the utmost restraint and care.' ),






  Object(lib["h"])('button#fredButton', fredButton ),
Object(lib["h"])('a', {props: {href: '#top'}}, 'Back to the top'),
  Object(lib["h"])('br'),
  Object(lib["h"])('input#change', diffRend ),
  Object(lib["h"])('div#changeDisplay', [diffRend] ),
  Object(lib["h"])('button#diffRender', 'diffRender()' ),
  Object(lib["h"])('br'),
  Object(lib["h"])('br'),
  Object(lib["h"])('br')
        ])
      ]) 
    })
  }
}

diffRender = () => document.getElementById('diffRender').click();
sources.DOM = Object(lib["makeDOMDriver"])('#main-container');
sources.WS = websocketsDriver;
sources.GD = gridDriver;

xstream_run_lib_default.a.run(main, sources);





/***/ })
/******/ ]);
