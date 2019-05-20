var window = {};
function diffRender () {};

function filtCheck (a) {
  if (a instanceof Filt) {
    var z = ar.slice(-1)[0];
    if (!(a.filt(z))) {
      ar = [];
      flag = true;
      console.log("a is false, ar = [], flag = true")
    }
  }
};

function compCheck (x) {
  if (x instanceof Promise) {
    x.then(y => {
      if (y != undefined && y !== false && y === y &&
      y.name !== "f_" && y.name !== "stop" ) {
        ar.push(y);
        diffRender()
      }
    })
  }
  else if (x != undefined && x !== false && x === x &&
      x.name !== "f_" && x.name !== "stop" ) {
      ar.push(x);
      diffRender()
  }
};

function Comp ( AR = [] )  {
  var flag = false;
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    filtCheck(x)
    compCheck(x)
    function f_ (func) {
      if (func === 'stop') return ar
      else if (flag === true) return f_
      else if (typeof func !== "function") p = func;
      else if (x instanceof Promise) p = x.then(v => func(v));
      else p = func(x);
      return run(p);
    };
    return f_;
  })(x)
}

function Filt (p) {
    this.p = p;
    this.filt = function filt (x) {
        return p(x)
    }
};

function filtP (p) {return new Filt(p)};

var oddOnly = filtP(x=>x%2 === 1);
var evenOnly = filtP(x=>x%2 === 0);

function less_than (x) {return new Filt (y => y < x)};

var tdR = ar => td => {
  var a = ar.map(v => td(v));
  return a.filter(v => v !== undefined);
}
var arR = [...Array(20).keys()]
var tdRes = tdR(arR);

var td_0 = w => Comp()(w)(v=>v**4)(v=>v+3)(v=>Math.sqrt(v-3))('stop').pop()
var td_1 = x => Comp()(x)(v=>v**4)(v=>v+3)(v=>v-3)(Math.sqrt)(less_than(100))(x=>x);
var td_2 = y => Comp()(y)(evenOnly)(v=>v*v)(v=>v+1000)(v=>v-500)(v=>v-500)(v=>v+10000)
        // Comp()(evenOnly)(v=>v*v)(v=>v+1000)('stop').pop();
 var td_4 = v => Comp()(v)()

var r0 = tdRes(td_0)
var r1 = tdRes(td_1)('stop');
var r2 = tdRes(td_2)('stop');
var r3 = td_1(td_2)('stop');

console.log("r0 is", r0)
console.log("r1 is", r1)
console.log("r2 is", r2)
console.log("r3 is", r3)
