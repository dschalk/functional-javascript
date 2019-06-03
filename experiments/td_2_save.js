var window = {};

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
            if (func === 'stop') return ob;
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

function fu_3 (o) {
    var o = o;
    var n = 0;
    return function (x) {
       n+=1;
       if (n === 3) {
           n = 0;
           var a = o.ar.splice(-3,3);
           var e = a.reduce((a,b) => a+b,0);
           //o.ar.push(e);
           return e;
       }
    }
};

function evens (o) {
    var o = o;
    return function (x) {
        if (x%2 === 1) {
            o.ar.pop();
            return undefined
        }
    }
}

var ob2 = Comp();
var ev = evens(ob2);

var test = evens(ob2);
var ar2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
ar2.map(v => ob2.run(v)(ev)(x=>x/2));

console.log("ob2.ar is", ob2.ar)

var ob = Comp();
var ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var fu_ob = fu_3(ob);
var ev_ob = evens(ob);
console.log("ar.map(v => ...",
  ar.map(v => ob.run(v)(fu_ob)(ev_ob)));;  // (x=>x/2));
// ob.run(1)(2)(3)(f);

console.log(ob.ar)
