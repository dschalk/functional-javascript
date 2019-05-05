var window = {};

var sum = function(list) {
    function go(acc, xs) {
        if(xs.length === 0) return acc;
        return go(acc+first(xs), rest(xs));
    return go(0, list)
    }
};

var reduce = function reduce (f, acc, xs) {
  return xs.reduce(f, acc);
}

var map = function(f, acc, xs) {
  return reduce(x => {
    acc.concat(f(x))}, acc, xs)
}

console.log("map(x=>x**3, [], [1,2,3,4,5])", map(x=>x**3, [], [1,2,3,4,5 ]));

var filter = function(f, xs) {
  return reduce(x => {
    f(x) ? acc.concat(x) : acc}, [], xs);
}

var para = function(f, acc, xs) {
  if(xs.length === 0) return acc;
  return para(f, f(acc, first(xs), xs), rest(xs));
}

function ints(n) {return [...Array(n).keys()]};
function range(a,b) { var ar = ints(b+1); ar.splice(0,a+1,a); return ar};
console.log("range(3,7) is", range(3,7));



/*

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

var ob = Comp();
var ob2 = Comp();

var fork = o => string => {
    window[string] = Comp(o.ar.slice());
    return window[string].run(window[string].ar.pop());
}

function fu_3 (o) {
    var o = o;
    var ar = [];
    return function su (x) {
      console.log("enterint su -- x is", x)
      if (ar.length < 3) {
         ar.push(x);
      }
      if (ar.length === 3) {
          var tu = ar.reduce((a,b) => a+b,0);
          ar.length = 0;
          o.ar.splice(-3,3);
          console.log("leaving su -- o.ar is", o.ar)
          return tu;
      }
   };
}

function evens (o) {
  var o = o;
  return x => {
    console.log("In evens anonymous -- x is", x)
    o.ar.pop();
    if (x%2 === 0) return x
    console.log("Leaving evens anonymous -- o.ar is", o.ar)
  };
};

var ev = evens(ob2);

var ob3;
var test = evens(ob2);
var ar2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var fu_ob2 = fu_3(ob2);
var ev_ob2 = evens(ob2);
// ob3 = Comp(ar2.map(v => ob2.run(v)(fu_ob2)))
// console.log("ob3.ar is", ob3.ar);
;

// .map(v => console.log(v(x=>x/2)('stop').run(ob2.ar.pop())(x=>x/2)))

// console.log("ob2.ar is", ob2.ar)

var ar3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var fu_ob = fu_3(ob);
var ev_ob = evens(ob);
function func_ob (v) {return ob.run(v)(fu_ob)(ev_ob)}  //(x => {ob.ar.pop();return x/2;} )}


function short (v=0) {setInterval( () => {v+=1; func_ob(v); console.log("ob.ar is", ob.ar)},750 )};
short(0);
*/
