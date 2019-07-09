#!/usr/bin/env javascript
function diffRender () {};

var window = {};

function isOdd (x) {return new Filt(v => v % 2 === 1)};

/* var ar = [0,1,2,3,4,5,6,7,8,9];

mapRes = ar.reduce(Map(cube)(concat), []);
console.log("mapRes is", mapRes);

var filterRes = ar.reduce(Filter(isOdd)(concat), []);
console.log(filterRes);

var add = (a,b) => a + b;
var transformFR = compose(Filter(isOdd), Map(cube));
var transformFRRes = ar.reduce(transformFR(concat), []);
console.log("transformFRRes", transformFRRes);
var abc = ar.reduce(transformFR(add));
console.log("abc", abc);

function trd(xf, rf, init, xs) {
  return xs.reduce(xf(rf), init)
}

var xform = compose(
  Filter(isOdd),
  Filter(x=>x<4 || x > 8),
  Map(x=>x**3),
  Map(x=>x+3),
  Map(x=>x*x),
  Map(x=>x/100),
  Map(Math.floor)
);

var xform2 = compose(
  Map(x=>x+2),
  Map(x=>x*x),
  Map(x=>x+1)
);

var oob = Comp();
var e0 = oob([2])(x=>x.reduce(xform(concat),[]))('stop').pop();
var oob = Comp();
var e1 = oob([3])(x=>x.reduce(xform(concat),[]))('stop').pop();
var oob = Comp();
var e2 = oob([4])(x=>x.reduce(xform(concat),[]))('stop').pop();
var oob = Comp();
var e3 = oob([5])(x=>x.reduce(xform(concat),[]))('stop').pop();
var oob = Comp();
var e4 = oob([6])(x=>x.reduce(xform(concat),[]))('stop').pop();
var oob = Comp();
var arty = [];
var oobFunc = v => oob([v])(x=>x.reduce(xform(concat),[]));
var e55 = [1,2,3,4,5,6,7,8,9,10].map(v => oobFunc(v)('stop').pop())
var e5 = cleanCommas(e55)
console.log("e5 is", e5);
var e56 = e5.concat([8,9].map(v => oobFunc(v)('stop').pop()))
e57 = cleanCommas(e56);
console.log("e57 is", e57);
var ob2 = Comp();
var e6 = ob2([1,2,3,4,5,6,7,8,9,10])(x=>x.reduce(xform(concat),[]))('stop').pop();
console.log("e6 is", e6);

sue = [1,2,3,4,5].reduce(Map(x=>x**3)(append),[])
console.log(sue);

function transduce (xf, rf, init, xs) {
  return xs.reduce(xf(rf), init);
}

// var td = xf => rf => init => xs => xs.reduce(xf(rf), init);

var ze = transduce(Map(x=>x), append, [], [1,2,3,4,5]);
console.log("ze is", ze);

// var ez = td(x=>x**3)(append)([])([0,1,2,3,4]);
// console.log("ez is", ez);

var cube_reverse = transduce(Map(x=>x*x), Map(x=>x+1)(Map(x=>x+1)(Map(x=>x+1)(unshift))), [], [1,2,3,4,5]);
console.log("cube_reverse is", cube_reverse);
function* integers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

var toy = [...Array(5).keys()].reduce(Map(x=>x**3)(unshift), [])
console.log("toy is", toy);

var art = [0,1,2,3,4];
var cr = art.reduce(Map(x=>x+1)(Map(x=>x**4)(Map(x=>x**3)(Map(x=>x**(1/4))(Map(x=>x+1000)(unshift))))), [])
console.log("cr is", cr);

function* integers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

console.log("filt 1 through 5", filt(1),
filt(2),
filt(3),
filt(4),
filt(5));
var fi = function fi (p) {return function fil(x) {var a = p(x) ? x : undefined; return a;} };
var o = Comp([1])
var artt = [1,2,3,4,5,6,7,8,9];
// artt.map(v => o(v)(filt)(x=>x**3));
// console.log("o.ar is", o.ar);

function Fux (p) {this.p = p; this.fux = function fux (x) {return p(x)}; var f = this.fux; return f};

var fox = new Fux(x=>x%2 === 1);
var sox = new Fux(x=>x<3000)
var cox = new Fux(x=>x>1000);
//console.log("fox and cox instanceof Fux", fox instanceof Fux, cox instanceof Fux);
//console.log("cox.prototype, cox.__proto__, and Fux.prototype", cox.prototype, cox.__proto__, Fux.prototype);

var o23 = Comp();
function fox88 (n) {let x = [...Array(n).keys()]
.map(v => o23(v)(fox)(x=>x*x)(x=>x+1000)
    (cox)('stop')) ; return x} ;
//console.log("fox88(5).pop() is", fox88(5).pop());

//console.log("fox instanceof Fux", fox instanceof Fux);

//console.log("fox88(7)", fox88(4))
var ob = Comp()
ob(3)(fox)(x=>x**3)(x=>x+3)(x=>x*x)('stop')
// console.log("ob.ar", ob.ar);

ob = Comp(); ob(3)(x=>x**3)(x=>x+3)(fox)(x=>x*x)('stop')
// console.log("ob.ar", ob.ar);
console.log(" **********************************************************");
function less_than (x) {return Filt (y => y < x)};

mapRes = ar.reduce(Map(cube)(concat), []);
console.log("mapRes is", mapRes);

var filterRes = ar.reduce(Filter(x=>x%2===1)(concat), []) ;
console.log("filterRes is", filterRes);

*/

function Filt (p) {
  this.p = p;
  this.filt = function filt (x) {
    return p(x)
  }
};
var less_than = x => new Filt (y => y < x);
var greater_than = x => new Filt (y => y > x);

function filtP (p) {return new Filt(p)};

var fi = function fi (p) {return function fil(x) {var a = p(x) ? x : undefined; return a;} };
var filt = fi(x => x%2 === 0);
var x = "blank";

function cleanF (ar) {
  return ar.filter(
    a => a === 0 || a && typeof a !== "boolean" //
  ).reduce((a,b)=>a.concat(b),[])
};


function Comp ( AR = [] )  {
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    if (x === null || x === NaN || x === undefined) x = f_('stop').pop();
    if (x instanceof Filt) {
      console.log('x instanceof Filt', x instanceof Filt);
      console.log("Kolabzula", x.name, x);
      var z = ar.pop();
      if (x.filt(z)) x = z; else ar = [];
    }
    else if (x instanceof Promise) x.then(y =>
      {if (y != undefined && typeof y !== "boolean" && y === y &&
      y.name !== "f_" && y.name !== "stop" ) {
      ar.push(y);
      diffRender()
    }})
    else if (x != undefined && x === x  && x !== false
      && x.name !== "f_" && x.name !== "stop" ) {
      ar.push(x);
      diffRender()
    };
    function f_ (func) {
      if (func === 'stop') return ar;
      else if (typeof func !== "function") p = func;
      else if (x instanceof Promise) p = x.then(v => func(v));
      else p = func(x);
      return run(p);
    };
    return f_;
  })(x)
}

var fork = f => string => {
    return window[string] = Comp(f('stop'));
}
var ob1 = Comp();
var ob2 = Comp();
var ob3 = Comp();
var ob4 = Comp();
var ob5 = Comp();

function append(acc, x) {
    acc.push(x);
    return acc;
}

function add1(v) { return v + 1; };
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

var reduce = f => ar => v => ar.reduce(f,v)
function apply(x, f) {return f(x);}
function compose(...funcs) {return x => funcs.reduceRight(apply, x);}
function concat(xs, val) {return xs.concat(val);}
var unshift = function unshift (xs,val) {xs.unshift(val); return xs};

var ar = [0,1,2,3,4,5,6,7,8,9];

function mapWR (f) {
  return (acc, val) => {
    return concat(acc, f(val));
  }
}

var resMap = ar.reduce(mapWR(x=>x**3), []);

// console.log("resMap and resFilter",resMap, resFilter)


function Reduce(base) {
  return function(rf) {
    return (acc, v) => {
      return rf(acc, f(v));
    }
  }
}

function Map(f) {
  return function(rf) {
    return (acc, v) => {
      return rf(acc, f(v));
    }
  }
}

function Filter(p) {
  return function(rf) {
    return (acc, v) => {
      return p(v) ?
       rf(acc, v) : acc;
    };
  };
};

var ar = [0,1,2,3,4,5,6,7,8,9];

function tdReduce (a) {
  return function(reducingFunction) {
    return (accumulator, value) => {
      return reducingFunction(accumulator, a);
    }
  }
}

function tdMap(func) {
  return function(reducingFunction) {
    return (accumulator, v) => {
      return reducingFunction(accumulator, func(v));
    }
  }
}

function tdFilter(test) {
  return function(reducingFunction) {
    return (accumulator, v) => {
      return test(v) ?
       reducingFunction(accumulator, v) : accumulator;
    };
  };
};

var add = (a,b) => a + b;
var transformFR = compose(Filter(isOdd), Map(cube));
var transformFRRes = ar.reduce(transformFR(concat), []);
// console.log("transformFRRes", transformFRRes);


function trd(xf, rf, init, xs) {
  return xs.reduce(xf(rf), init)
}
function isOdd (x) {return new Filt(v => v % 2 === 1)};
var lessThan = x => y => new Filt(x => y < x);
var ltTest = lessThan();


function compTest3 (k = 4, n = 25) {

var test9 = ltTest(k*1000).filt
var ar7b = [...Array(n).keys()];

var res4 = ar7b
.filter(v => (v % 2 === 1))
.map(x => x**4)
.map(x => x+3)
.map(x => x-3)
.map(x => Math.sqrt(x))
// console.log("res4 is", res4);

var dotResult = res4
.map(v=>v*v)
.map(v=>v+1000)
.filter(v => v < k*1000);
console.log("dotResult is", dotResult);

var td1 = x => Comp([x])(isOdd)(v=>v**4)(v=>v+3)(v=>(v-3)/Math.sqrt(v-3))('stop').pop()
var td2 = y => Comp([y])(v=>v*v)(v=>v+1000)(test9)('stop').pop()

var res1 = ar7b.map(x => td1(x));
var res2 = res1.map(y => td2(y));
var res3 = ar7b.map(z => td2(td1(z)));

console.log("cleanF(res2) is", cleanF(res2));
console.log("cleanF(res3) is", cleanF(res3));

var xform = compose(
  tdFilter(x=>x%2===1),
  tdMap(x => x**4),
  tdMap(x => x+3),
  tdMap(x => x-3),
  tdMap(x => Math.sqrt(x))
)
var xform2 = compose(
  tdMap(x=>x*x),
  tdMap(x=>x+1000),
  tdFilter(x => x < k*1000))

var xform3 = compose(
  tdMap(x=>x*x),
  tdMap(x=>x+1000),
  tdFilter(x => x < k*1000),
  tdReduce((a,b) => a+b))


var tr1 = ar7b.reduce(xform(xform2(concat)),[] );
var tr2 = ar7b.reduce(xform(xform3(reduce)), 0);
console.log("tr1 is", tr1);
console.log("tr2 is", tr2);
console.log("test9 instanceof Filt", test9 instanceof Filt)
}
compTest3(20,10)
