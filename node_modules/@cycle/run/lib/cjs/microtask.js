"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inspired by https://github.com/yoshuawuyts/nanotask, this function manages
 * a queue of microtasks. It returns a "scheduleMicrotask" helper.
 *
 * Uses MutationObserver in the browser, supported by many browsers, including
 * IE11.
 *
 * Uses process.nextTick in Node.js.
 *
 * Uses setTimeout otherwise.
 */
function microtask() {
    if (typeof MutationObserver !== 'undefined') {
        var node_1 = document.createTextNode('');
        var queue_1 = [];
        var i_1 = 0;
        new MutationObserver(function () {
            while (queue_1.length) {
                queue_1.shift()();
            }
        }).observe(node_1, { characterData: true });
        return function (fn) {
            queue_1.push(fn);
            node_1.data = i_1 = 1 - i_1;
        };
    }
    else if (typeof process !== 'undefined') {
        return process.nextTick;
    }
    else {
        return setTimeout;
    }
}
exports.default = microtask;
//# sourceMappingURL=microtask.js.map