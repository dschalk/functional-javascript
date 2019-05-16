
function diffRender () {};

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

function Filt (p) {this.p = p; this.filt = function filt (x) {return p(x)}};

var filtOdd = new Filt(x=>x%2 === 1);
var filtEven = new Filt(x=>x%2 === 0);
var filtRange = new Filt(x => x > 200 && x < 700);

var filtLess = new Filt(x=>x<3000)
var filtGreater = new Filt(x=>x>1200);

//console.log("fox and cox instanceof Fux", fox instanceof Fux, cox instanceof Fux);
//console.log("cox.prototype, cox.__proto__, and Fux.prototype", cox.prototype, cox.__proto__, Fux.prototype);

var o23 = Comp();
function fox88 (n) {let x = [...Array(n).keys()]
.map(v => o23.run(v)(fox)(x=>x*x)(x=>x+1000)
    (cox)('stop')) ; return x} ;
//console.log("fox88(5).pop() is", fox88(5).pop());

//console.log("fox instanceof Fux", fox instanceof Fux);

//console.log("fox88(7)", fox88(4))
var ob = Comp()

function Comp ( AR = [] )  {
  var ar , x, ob, f_ , p ;
  if (Array.isArray(AR)) ar = AR.slice()
  else ar = AR;
  if (ar.length) {x = ar[ar.length-1]};
  return run = function run (x) {

    if (x instanceof Filt) {
      var z = ar.pop();
      if (x.filt(z)) x = z; else ar = [];
    };

    if (x instanceof Promise) x.then(y =>
      {if (y != undefined && y !== false && y !== NaN && (!(x instanceof Filt)) &&
      y.toString() != "NaN" && y.name !== "f_" ) {
      ar.push(y);
        diffRender()
    }})
    else if (x != undefined && x !== false && (!(x instanceof Filt)) &&
      x.toString() != "NaN" && x.name !== "f_" ) {
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
  }
}


var duce;
var ob = Comp();
var testAr1 = [];
var testAr2 = [];
var testAr3 = [];
var testAr4 = [];
var testAr5 = [];
var test7 = [...Array(35).keys()].map(k => {
// ob = Comp();
duce = Comp([k])(filtOdd)(x=>x**3)(x=>x+3)(x=>Math.round((x-3)**(1/3))+1)(x=>x*x)(filtRange)('stop').pop()
if (duce !== undefined) testAr1.push(duce)

duce = Comp([k])(x=>x**3)(filtOdd)(x=>x+3)(x=>Math.round((x-3)**(1/3))+1)(x=>x*x)(filtRange)('stop').pop()
if (duce !== undefined) testAr2.push(duce)

duce = Comp([k])(x=>x**3)(x=>x+3)(x=>Math.round((x-3)**(1/3))+1)(filtOdd)(x=>x*x)(filtRange)('stop').pop()
if (duce !== undefined) testAr3.push(duce)

duce = Comp([k])(x=>x**3)(x=>Math.round((x-3)**(1/3))+1)(x=>x+3)(x=>x*x)(filtOdd)(filtRange)('stop').pop()
if (duce !== undefined) testAr4.push(duce)

duce = Comp([k])(filtOdd)(x=>x**3)(x=>Math.round((x-3)**(1/3))+1)(x=>x+3)(x=>x*x)(filtRange)('stop').pop()
if (duce !== undefined) testAr5.push(duce)})




console.log("testAr1", testAr1);
console.log("testAr2", testAr2);
console.log("testAr3", testAr3);
console.log("testAr4", testAr1);
console.log("testAr5", testAr1);
/*console.log("testAr6", testAr1);
console.log("testAr7", testAr1);
console.log("testAr8", testAr1);
*/
var ace1 = [...Array(35).keys()]
.filter(v => v%2 === 1)
.map(v => v**3)
.map(v=>v+3)
.map(v=>Math.round((v-2)**(1/3))+1)
.map(v=>v*v)
.filter(v => 200 < v && v < 700)

var ace2 = [...Array(35).keys()]
.map(v => v**3)
.filter(v => v%2 === 1)
.map(v=>v+3)
.map(v=>Math.round((v-3)**(1/3))+1)
.map(v=>v*v)
.filter(v => 200 < v && v < 700)

var ace3 = [...Array(35).keys()]
.map(v => v**3)
.map(v=>v+3)
.filter(v => v%2 === 1)
.map(v=>Math.round((v-3)**(1/3))+1)
.map(v=>v*v)
.filter(v => 200 < v && v < 700)

var ace4 = [...Array(35).keys()]
.map(v => v**3)
.map(v=>v+3)
.map(v=>Math.round((v-3)**(1/3))+1)
.filter(v => v%2 === 1)
.map(v=>v*v)
.filter(v => 200 < v && v < 700)

var ace5 = [...Array(35).keys()]
.map(v => v**3)
.map(v=>v+3)
.map(v=>Math.round((v-3)**(1/3))+1)
.map(v=>v*v)
.filter(v => v%2 === 1)
.filter(v => 200 < v && v < 700)

var ace6 = [...Array(35).keys()]
.filter(v => v%2 === 1)
.map(v => v**3)
.map(v=>v+3)
.map(v=>Math.round((v-3)**(1/3))+1)
.map(v=>v*v)
.filter(v => 200 < v && v < 700)

var ace7 = [1,2,3,4,5]
.map(v => v**3)
.map(v=>v+3)
.filter(v => v%2 === 0)
.map(v=>v*v)
.map(v=>Math.round((v-3)**(1/3))+1)

var ace8 = [1,2,3,4,5]
.map(v => v**3)
.map(v=>v+3)
.filter(v => v%2 === 0)
.map(v=>Math.round((v-3)**(1/3))+1)
.map(v=>v*v)

console.log("ace1 is", ace1);

console.log("ace2 is", ace2);

console.log("ace3 is", ace3);

console.log("ace4 is", ace4);

console.log("ace5 is", ace5);

// console.log("ace6 is", ace6);


//end
