var window = {};

function Comp ( AR = [] )  {
  var ar , x, ob, f_ , p ;
  if (Array.isArray(AR)) ar = AR.slice()
  else ar = AR;
  if (ar.length) {x = ar[ar.length-1]};
    return  ob = {ar: ar, run: function run (x) {
        if (x instanceof Promise) x.then(y =>
          {if (y != undefined && y !== false && y !== NaN &&
          y.toString() != "NaN" && y.name !== "f_" ) {
            ar.push(y);
        }})
        else if (x != undefined && x !== false &&
        x.toString() != "NaN" && x.name !== "f_" ) {
            ar.push(x);
        };
        return function f_ (func) {
            if (func === 'stop') return ar;
            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise)
                p = x.then(v => func(v));
            else p = func(x);
            return run(p);
        };
    }}
}

var fork = ob => string => {
    window[string] = Comp(ob.ar.slice());
    return window[string].run(window[string].ar.pop());
}


function add1(v) { return v + 1; };
function isOdd(v) { return v % 2 == 1; };
function sum(total,v) { return total + v; };
function cube(v) { return v**3; };
function compose(...fns) {
  const n = fns.length;

  return function $compose(...args) {
    let $args = args;

    for (let i = n - 1; i >= 0; i -= 1) {
      $args = [fns[i].call(null, ...$args)];
    }

    return $args[0];
  };
}

var isEven = x => x % 2 === 0;
var not = x => !x;
var isOdd2 = compose(not, isEven);

isOdd2(9) // true

function curry(fn) {
  var arity = fn.length;
  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }
    return fn.call(null, ...args);
  };
}

var map = f => ar => ar.map(v=>f(v));
var filter = p => ar => ar.filter(p);
var reduce = f => ar => v => ar.reduce(f,v)
function apply(x, f) {return f(x);}
function compose(...funcs) {return x => funcs.reduceRight(apply, x);}
function concat(xs, val) {return xs.concat(val);}

var transduce = curry((step, initial, xform, foldable) =>
  foldable.reduce(xform(step), initial)
);
var ar = [0,1,2,3,4,5,6,7,8,9];

function mapWR (f) {
  return (acc, val) => {
    return concat(acc, f(val));
  }
}

var resMap = ar.reduce(mapWR(x=>x**3), []);

function filterWR (p) {
  return (acc, val) => {
    return p(val) ? concat(acc, val) : acc;
  }
}

var resFilter = ar.reduce(filterWR(isOdd), [])

// console.log("resMap and resFilter",resMap, resFilter)

function mapping(f) {
  return function(rf) {
    return (acc, val) => {
      return rf(acc, f(val));
    }
  }
}

var mapWRf = mapping(cube);
mapRes = ar.reduce(mapWRf(concat), []);
var arf = ar.reduce(mapping(cube)(concat), []);
console.log("arf is", arf);
console.log("mapRes is", mapRes);

function filtering(p) {
  return function(rf) {
    return (acc, val) => {
      return p(val) ? rf(acc, val) : acc;
    };
  };
};

var filterWRf = filtering(isOdd);
var filterRes = ar.reduce(filterWRf(concat), []);
console.log(filterRes);
var add = (a,b) => a + b;
var transformFR = compose(filtering(isOdd), mapping(cube));
var transformFRRes = ar.reduce(transformFR(concat), []);
console.log("transformFRRes", transformFRRes);
var abc = ar.reduce(transformFR(add));
console.log("abc", abc);

function trd(xf, rf, init, xs) {
  return xs.reduce(xf(rf), init)
}

var trdRes = trd(transformFR, add, 0, ar);
console.log("trdRes", trdRes);

var xform = compose(
  mapping(x=>x*x),
  filtering(isEven),
  mapping(x=>x+x),
  mapping(x=>x+1),
);

var trdRes2 = trd(xform, concat, [], ar);
console.log(trdRes2);

var ob = Comp([0,1,2,3,4,5,6,7]);
console.log("ob", ob);
ob.run(ob.ar)(x=>x.reduce(mapping(cube)(concat), []))(x=>x.reduce(filtering(isEven)(concat), []));
console.log("ob", ob);

var ob2 = Comp();
ob2.run([1,2,3,4,5,6,7,8,9])(x=>x.reduce(xform(concat),[]));
console.log("ob2.ar", ob2.ar);
