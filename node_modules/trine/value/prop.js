/**
 * Returns the value of the property by given key.
 *
 * @this {any}
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::prop("length") // 3
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prop = prop;

function prop(key) {
    return this[key];
}

;