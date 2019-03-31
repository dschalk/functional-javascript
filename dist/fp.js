
module.exports = {
  compose,
  concat,
};

function apply(x, f) {
  return f(x);
}

function compose(...funcs) {
  return x => funcs.reduceRight(apply, x);
}

function concat(xs, val) {
  return xs.concat(val);
}
 run.js
// local imports
const { compose, concat } = require('./fp');

// input data
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// transformations
const add1 = x => x + 1;
const doubleIt = x => x * 2;
const add = (x, y) => x + y;

// predicates
const isEven = x => x % 2 === 0;
const isOdd = x => !isEven(x);

const mapResult1 = nums
  .map(add1)
  .map(add1)
  .map(add1)
  .map(add1)
  .map(add1)
  .map(doubleIt);

const transform = compose(doubleIt, add1, add1, add1, add1, add1);
const mapResult2 = nums.map(transform);
// console.log(mapResult1);
// console.log(mapResult2);

const filterResult1 = nums.filter(isEven).filter(isOdd);

const excludeAll = x => isEven(x) && isOdd(x);
const filterResult2 = nums.filter(excludeAll);
// console.log(filterResult1);
// console.log(filterResult2);

const result1 = nums // -> [1,2,3,4,5,6,7,8,9,10]
  .map(add1) //         -> [2,3,4,5,6,7,8,9,10,11]
  .filter(isEven) //    -> [2,4,6,8,10]
  .reduce(add, 0); //   -> 30

const transformFilterReduce1 = compose(add, isEven, add1);
const result2 = nums.reduce(transformFilterReduce1);
// console.log(result1);
// console.log(result2);

// something like this is the goal
// const transformFilterReduce2 = compose(reduce(add), filter(isEven), map(add1))
// transformFilterReduce2(nums)

function mapWithReduce1(xs, f) {
  return xs.reduce((acc, val) => {
    return concat(acc, f(val));
  }, []);
}

const mapWithReduceResult1 = mapWithReduce1(nums, add1);
// console.log(mapWithReduceResult1);

function mapWithReduce2(f) {
  return (acc, val) => {
    return concat(acc, f(val));
  };
}

const mapWithReduceResult2 = nums.reduce(mapWithReduce2(add1), []);
// console.log(mapWithReduceResult2);

function filterWithReduce1(xs, p) {
  return xs.reduce((acc, val) => {
    return p(val) ? concat(acc, val) : acc;
  }, []);
}

const filterWithReduceResult1 = filterWithReduce1(nums, isOdd);
// console.log(filterWithReduceResult1);

function filterWithReduce2(p) {
  return (acc, val) => {
    return p(val) ? concat(acc, val) : acc;
  };
}

const filterWithReduceResult2 = nums.reduce(filterWithReduce2(isOdd), []);
// console.log(filterWithReduceResult2);

// commonality between these two functions is 'concat'
// used for 'combining' or 'reducing' two things into one

// generalize the 'mapping' concept, without the concat...
function mapping(f) {
  return function(rf) {
    // this takes 2 things and makes them 1
    return (acc, val) => {
      return rf(acc, f(val)); // <-- rf replaces 'concat'
    };
  };
}

const mapWithRf = mapping(add1);
const mappingResult = nums.reduce(mapWithRf(concat), []);
// console.log(mappingResult);

// generalize the 'filtering' concept, without the concat...
function filtering(p) {
  return function(rf) {
    // this takes 2 things and makes them 1
    return (acc, val) => {
      return p(val) ? rf(acc, val) : acc; // <-- rf replaces 'concat'
    };
  };
}

const filterWithRf = filtering(isOdd);
const filteringResult = nums.reduce(filterWithRf(concat), []);
// console.log(filteringResult);

// rf takes 2 things and makes them into 1 thing
// mapping(fn) returns a function expecting an rf
// filtering(p) returns a function expecting an rf
// mapping(fn)(rf) returns an rf
// filtering(p)(rf) returns an rf

// so... mapping(fn) can receive as its rf, the returned rf from filtering(p)(rf)
// and vice-versa

// these are transducers
// they expect an rf and return an rf
// allowing them to be composed together

// this was the goal
// const transformFilterReduce2 = compose(map(add1), filter(isEven), reduce(add));
const transformFilterReduce2 = compose(mapping(add1), filtering(isEven));
const transformFilterReduceResult1 = nums.reduce(
  transformFilterReduce2(concat), // <-- concat is an rf... so is add
  [], // concat returns an array -- this is the init value for an array
);
// notice output is even numbers, meaning filtering was applied second
// console.log(transformFilterReduceResult1); // [ 2, 4, 6, 8, 10 ]

const transformFilterReduceResult2 = nums.reduce(
  transformFilterReduce2(add),
  0, // add returns a number -- this is the init value for a number
);
// console.log(transformFilterReduceResult2);

// transduce helper you'll see in a library...
function transduce(xf, rf, init, xs) {
  // call reduce on the data structure internally (abstract it away)
  // pass the rf to the composed transformation
  // pass in the initial value
  return xs.reduce(xf(rf), init);
}

const transduceResult1 = transduce(transformFilterReduce2, add, 0, nums);
// console.log(transduceResult1);

// another example -- return an array
const xform = compose(
  // reminder: these are transducers
  // composition of transducers returns a new transducer
  mapping(add1),
  filtering(isEven),
  mapping(doubleIt),
  mapping(add1),
);
const transduceResult2 = transduce(xform, concat, [], nums);
// console.log(transduceResult2);

// because we provide transduce with the 'join' logic -- concat
// and the initial value -- []
// the transduction is decoupled from the data structure
// mapping & filtering don't know about arrays
// so... transduce works for any data structure with an implementation of 'reduce' & 'concat'
// in clojure examples, 'concat' is called 'conj'

// super lame example of implementing reduce on another data structure
const dataStructure = {};
dataStructure.reduce = function(rf, init) {
  return this.value.reduce(rf, init);
};
dataStructure.concat = function(x) {
  return Object.assign(this, { value: this.value.concat(x) });
};
dataStructure.of = function(...xs) {
  const value = xs === undefined ? [] : xs;
  return Object.assign({}, dataStructure, { value });
};

const newNums = dataStructure.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// examples of using new dataStructure reduce
// console.log(newNums.reduce(add, 0));
// console.log(newNums.reduce(mapWithReduce2(add1), dataStructure.of()));

const transduceRandomDataStructure1 = transduce(
  xform, //   <-- same xform used on array of numbers
  add, //     <-- newNums contains numbers
  0, //       <-- init value for addition
  newNums, // <-- dataStructure of range 1..10
);
const transduceNums1 = transduce(
  xform,
  add,
  0,
  nums, // <-- the only difference
);

// compare this output of transducing newNums
// console.log(transduceRandomDataStructure1);
// to this output of transducing nums
// console.log(transduceNums1);

// transduce random new data structure
const transduceRandomDataStructure2 = transduce(
  xform, //              <-- same xform used on array of numbers
  concat, //             <-- dataStructure implements concat method, which concat function uses
  dataStructure.of(), // <-- return init value
  newNums, //            <-- dataStructure of range 1..10
);
const transduceNums2 = transduce(
  xform, // <-- reused every single time, regardless of data structure or rf
  concat,
  [],
  nums,
);
// compare .value of transducing a dataStructure of range 1..10
// console.log(transduceRandomDataStructure2.value);
// to return value of transducing an array of range 1..10
// console.log(transduceNums2);
