/**
 * Determine if the bound value is the same as the specified value.
 *
 * @this {any}
 * @param value The value to compare the bound value to.
 * @example Basic Usage
 *
 * ```javascript
 * "foo"::is("foo") // true
 * "foo"::is("bar") // false
 * ```
*/
"use strict";

var _Object$is = require("babel-runtime/core-js/object/is")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.is = is;

function is(value) {
    return _Object$is(this, value);
}

;