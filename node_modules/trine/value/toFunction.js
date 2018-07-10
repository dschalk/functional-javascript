/**
 * Returns a function that always returns the given value.
 *
 * @this {T} The value the function should return.
 * @example Basic Usage
 *
 * ```javascript
 * let fn = 1::toFunction();
 * fn() // returns 1
 * fn() // returns 1
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFunction = toFunction;

function toFunction() {
  var _this = this;

  return function () {
    return _this;
  };
}

;