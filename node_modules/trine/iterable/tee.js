/**
 * Yields forks of the original iterator, caching the items as needed.
 *
 * @this {Iterable<T>}
 * @example Basic Usage
 *
 * ```javascript
 * const source = [1,2,3]::map(function () { return this * 2});
 * const forks = source::tee();
 * const a = forks.next().value;
 * const b = forks.next().value;
 * [...a] // [1,2,3]
 * [...b] // [1,2,3]
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tee = tee;
var marked0$0 = [tee].map(_regeneratorRuntime.mark);

function tee() {
    var source, indices, buffer, readIndex, done, _loop;

    return _regeneratorRuntime.wrap(function tee$(context$1$0) {
        var _this = this;

        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                source = _getIterator(this);
                indices = [];
                buffer = [];
                readIndex = 0;
                done = false;
                _loop = _regeneratorRuntime.mark(function callee$1$0() {
                    var iteratorIndex;
                    return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
                        while (1) switch (context$2$0.prev = context$2$0.next) {
                            case 0:
                                if (!(readIndex > 0)) {
                                    context$2$0.next = 2;
                                    break;
                                }

                                throw new TypeError("Can't tee the iterator after the iteration has started");

                            case 2:
                                iteratorIndex = indices.length;

                                indices.push(0);

                                context$2$0.next = 6;
                                return _regeneratorRuntime.mark(function callee$2$0() {
                                    var offset, chunk, lowestOffset, step;
                                    return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                                        while (1) switch (context$3$0.prev = context$3$0.next) {
                                            case 0:
                                                if (!true) {
                                                    context$3$0.next = 19;
                                                    break;
                                                }

                                                offset = indices[iteratorIndex] - readIndex;

                                                if (!(offset < 0)) {
                                                    context$3$0.next = 9;
                                                    break;
                                                }

                                                indices[iteratorIndex] = readIndex;
                                                chunk = buffer.slice(offset);
                                                lowestOffset = Math.min.apply(Math, indices) - readIndex;

                                                if (lowestOffset < 0) {
                                                    buffer = buffer.slice(lowestOffset);
                                                } else {
                                                    buffer = [];
                                                }

                                                return context$3$0.delegateYield(chunk, "t0", 8);

                                            case 8:
                                                return context$3$0.abrupt("continue", 0);

                                            case 9:
                                                if (!done) {
                                                    context$3$0.next = 11;
                                                    break;
                                                }

                                                return context$3$0.abrupt("return");

                                            case 11:
                                                step = source.next();

                                                done = step.done;

                                                if (!done) {
                                                    context$3$0.next = 15;
                                                    break;
                                                }

                                                return context$3$0.abrupt("return");

                                            case 15:

                                                buffer.push(step.value);
                                                readIndex += 1;
                                                context$3$0.next = 0;
                                                break;

                                            case 19:
                                            case "end":
                                                return context$3$0.stop();
                                        }
                                    }, callee$2$0, this);
                                })();

                            case 6:
                            case "end":
                                return context$2$0.stop();
                        }
                    }, callee$1$0, _this);
                });

            case 6:
                if (!true) {
                    context$1$0.next = 10;
                    break;
                }

                return context$1$0.delegateYield(_loop(), "t0", 8);

            case 8:
                context$1$0.next = 6;
                break;

            case 10:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;