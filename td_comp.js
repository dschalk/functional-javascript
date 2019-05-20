var window = {};
function diffRender () {};

function Comp ( AR = [] )  {
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    if (x instanceof Filt) {
      var z = ar.pop();
      if (x.filt(z)) {x = z}
      else{
         ar = [];
         x = 'stop';
       }
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

function Filt (p) {this.p = p; this.filt = function filt (x) {return p(x)}};
function filtP (p) {return new Filt(p)};

var filtOdd = filtP(x=>x%2 === 1);
var filtEven = filtP(x=>x%2 === 0);
function less_than (x) {return Filt (y => y < x)};

var td_0 = w => Comp([w])(v=>v**4)(v=>v+3)(v=>(v-3)/w*w)('stop').pop();
var td_1 = x => Comp([x])(v=>v**4)(v=>v+3)(v=>(v-3)/x*x)('stop').pop();
var td_2 = y => Comp([y])(v=>v)(v=>v*v)(v=>v+1000)('stop').pop();
var td_3 = z => Comp([z])(td_1)(td_2)('stop').pop();

var res0 = [1,2,3,4,5,6,7,8].map(w => td_0(w)).join(' ');
var res1 = [1,2,3,4,5,6,7,8].map(x => td_1(x)).join(' ');
var res2 = [1, 16, 81, 256].map(y => td_2(y)).join(' ');
var res3 = [1,2,3,4,5,6,7,8].map(z => td_3(z)).join(' ');
console.log("res0 is", res0);
console.log("res1 is", res1);
console.log("res2 is", res2);
console.log("res3 is", res3);
