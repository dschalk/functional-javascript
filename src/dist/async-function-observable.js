const isPromise = obj => Boolean(obj) && typeof obj.then === 'function';

const next = (iter, callbacks, prev = undefined) => {
  const { onNext, onCompleted } = callbacks;
  const item = iter.next(prev);
  const value = item.value;

  if (item.done) {
    return onCompleted();
  }

  if (isPromise(value)) {
    value.then(val => {
      onNext(val);
      setImmediate(() => next(iter, callbacks , val));
    });
  } else {
    onNext(value);
    setImmediate(() => next(iter, callbacks, value));
  }
};

const gensync = (fn) => (...args) => ({
  subscribe: (onNext, onError, onCompleted) => {
    next(fn(...args), { onNext, onError, onCompleted });
  }
});


/* How to use gensync() */

const fetchSomething = () => new Promise((resolve) => {
  setTimeout(() => resolve('future value'), 500);
});

const myFunc = function* (param1, param2, param3) {
  const result = yield fetchSomething(); // returns promise

  // waits for promise and uses promise result
  yield result + ' 2';
  yield param1;
  yield param2;
  yield param3;
}

const onNext = val => console.log(val);
const onError = err => console.log(err);
const onCompleted = () => console.log('done.');

const asyncFunc = gensync(myFunc);

// Call the async function and pass params.
asyncFunc('a param', 'another param', 'more params!')
  .subscribe(onNext, onError, onCompleted);
// future value
// future value 2
// a param
// another param
// more params!
// done.