#!/usr/bin/env js
function diffRender () {};
var window = {};

function Filt (p) {this.p = p; this.filt = function filt (x) {return p(x)}};
function filtP (p) {return new Filt(p)};

var fi = function fi (p) {return function fil(x) {var a = p(x) ? x : undefined; return a;} };
var filt = fi(x => x%2 === 0);
var x = "blank";

function Comp ( AR = [] )  {
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    if (x instanceof Filt) {
      var z = ar.pop();
      if (x.filt(z)) x = z; else ar = [];
    }
    else if (x instanceof Promise) x.then(y =>
      {if (y != undefined && y !== false && y === y &&
      y.name !== "f_" && y.name !== "stop" ) {
      ar.push(y);
      diffRender()
    }})
    else if (x != undefined && x !== false && x === x &&
      x.name !== "f_" && x.name !== "stop" ) {
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

/*
function Comp ( AR = [] )  {
  var ar , x, ob, f_ , p ;
  if (Array.isArray(AR)) ar = AR.slice()
  else ar = AR;
  if (ar.length) {x = ar[ar.length-1]};
    return  ob = {ar: ar, run: function run (x) {
        if (x.name!== "undefined" && x.name === "filt") {x = filt(x)};
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
*/

var ob1 = Comp();
var ob2 = Comp();
var ob3 = Comp();
var ob4 = Comp();
var ob5 = Comp();

function append(result, x) {
    result.push(x);
    return result;
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

function filterWR (p) {
  return (acc, val) => {
    return p(val) ? concat(acc, val) : acc;
  }
}

var resFilter = ar.reduce(filterWR(isOdd), [])

// console.log("resMap and resFilter",resMap, resFilter)

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
  Map(x=>x*x),
  Filter(isEven),
  Map(x=>x+x),
  Map(x=>x+5),
);

var xform2 = compose(
  Map(x=>x+2),
  Map(x=>x*x),
  Map(x=>x+1)
);

var ob2 = Comp();
// ob2([1,2,3,4,5,6,7,8,9])(x=>x.reduce(xform(concat),[]));
var ob3 = Comp();
[0,1,2,3,4,5,6,7].map(v => ob3(v)(x=>xform(concat,[])(x)));

console.log("[0,1,2,3,4].reduce(transformFR(concat),[])",[0,1,2,3,4].reduce(transformFR(concat),[]))

var zza = Comp(ar); var zzt = zza(zza.ar)(x=>x.reduce(Map(x=>x**3)
 (Filter(x=>x%2===0)(Map(x=>x+10000)
   (concat))),[]))('stop').pop();
console.log("zzt is", zzt);

var zzb = Comp(ar); var zzu = zzb(zzb.ar)(x=>x.reduce(Map(x=>x**3)
 (Filter(x=>x%2===0)(Map(x=>x+10000)
   ((a,b)=>a+b))),0))('stop').pop();

console.log("zzu is", zzu);

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

var ob2 = Comp();
ob2([1,2,3,4,5])(arr => arr.reduce(Map(x=>x**3)(concat),[]));
var mule = ob2.ar.pop();

console.log("mule is", mule);

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


//end
