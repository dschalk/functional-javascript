// Helpers
function isObject(val) {
  return val !== null && typeof val === 'object'
}

function isIterable (x) {
  return typeof x[Symbol.iterator] === 'function';
}

function compose (...funcs) {
  return function (arg) {
    for (let i = funcs.length - 1; i >= 0; i--) {
      const func = funcs[i];
      arg = func(arg);
    }
    return arg;
  }
}

// Step-reducers
function arrayPush (arr, val) {
  arr.push(val);
  return arr;
};

function objPush (obj, [key, value]) {
  obj[key] = value;
  return obj;
}

/* Map and filter take a unary function and (optionally) a collection.
If passed a collection, each will immediately return a new collection by calling the function on every element in the old collection. If one argument is given, map and filter return a transducer. */

function map (transform, coll) {
  if (arguments.length === 1) {
    const transducer = function (reducer) {
      return function (result, val) {
        return reducer(result, transform(val))
      }
    }
    transducer.isTransducer = true;
    return transducer;
  } return reduce(coll, map(transform))
}

function filter (predicate, coll) {
  if (arguments.length === 1) {
    const transducer = function (reducer) {
      return function(result, input) {
       return predicate(input)
        ? reducer(result, input)
        : result
      }
    }
    transducer.isTransducer = true;
    return transducer
  } return reduce(coll, filter(predicate))
}

function reduce(coll, transducer, init) {
  if (Array.isArray(coll)) {
    return arrayReduce(coll, transducer, init)
  }
  else if(isIterable(coll)) {
    return iterableReduce(coll, transducer, init);
  }
  else if (isObject(coll)) {
   return plainObjectReduce(coll, transducer, init)
  }
}

function arrayReduce (arr, transducer, init = []) {
  const applyTransform = transducer.isTransducer ? transducer(arrayPush) : transducer;
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result = applyTransform(result, arr[i])
  }
  return result;
}

function plainObjectReduce (obj, transducer, init = {}) {
  let result = init;
  const applyTransform = transducer(arrayPush);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let kv = applyTransform([key], obj[key])
      if (kv.length === 2) {
        objPush(result, kv) // Only if not filtered out
      }
    }
  }
  return result;
}

function iterableReduce (iterable, applyTransform, init) {
  if (applyTransform.isTransducer) {
    throw new Error('Transformation must be configured with a reducer before calling reduce')
  }
  let result = init;
  for (let elem of iterable) {
    applyTransform(result, elem)
  }
  return result;
}

module.exports = {
  map,
  filter,
  reduce,
  compose,
  arrayPush
}