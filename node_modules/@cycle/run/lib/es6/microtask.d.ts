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
export default function microtask(): (fn: Function) => void;
