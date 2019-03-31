

function apply(x, f) {
  return f(x);
}

function concat(...funcs) {
  return x => funcs.reduceRight(apply, x);
}
var xs = [0,1,2,3,4,5,6,7,8,9];

console.log(xs.concat(10))

function concat(xs, val) {
  return xs.concat(val);
}

// var window = {};
function Comp ( AR = [] )  {
  var ar , x, ob, f_ , p ;
  if (Array.isArray(AR)) ar = AR.slice()
  else ar = AR;
  if (ar.length) {x = ar[ar.length-1]};
    return  ob = {ar: ar, run: function run (x) {
        if (x instanceof Promise) x.then(y =>
          {if (y != undefined && y !== false && y !== NaN &&
          y.toString() != "NaN" && y.name !== "f_") {
            ar.push(y);
        }})
        else if (x != undefined && x !== false &&
        x.toString() != "NaN" && x.name !== "f_") {
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
};

var fork = ob => string => {
    window[string] = Comp(ob.ar.slice());
    return window[string].run(window[string].ar.pop());
}

var ob = Comp();
var reduce = ar => f => ar.reduce(f, []);
ob.run([1,2,3,4,5])(reduce)(mapping(add1)(concat))

console.log(ob, ob.ar)
