function diffRender () {};
var window = {};

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

var _convert_ = a => b => parseInt(b,a);
var toInt = _convert_ (10);
var toHex = _convert_ (6);

var _conveNt_ = a => b => parseFloat(b,a);
var toFloat = _conveNt_ (10);

function intArray (n) {
  return [...Array(n).keys()];
}

var release = t => instance => async param => {
  await wait(t)
  instance.release(param);
}

async function pause (x) {
  await wait(600)
  return x;
}

var pauseP = t => async x => {
  await wait(t*1000)
  return x;
}

async function pause (x) {
  await wait(600)
  return x;
}

async function pauseM (x) {
  await wait(600)
  return ret(x);
}

async function pauseX (x) {
  await wait(x);
}

async function squareP (x) {
  await wait(1200)
  return x*x;
}

const divPinverse = a => async b => {
  await wait (600)
  return a/b;
}

const divP = a => async b => {
  await wait (600)
  return b/a;
}

const sqrtP = async a => {
  await wait (600)
  return Math.sqrt(a);
}

const doubleP = async a => {
  await wait (1000)
  return a+a;
}

const addP = x => async y => {
  await wait(600)
  return toInt(x) + toInt(y);
}

const addPA = x => async y => {
  await wait(1000)
  return x + y;
}

const multP = x => async y => {
  await wait(1200)
  return x * y;
}

async function cubeP (x) {
  await wait(600)
  return x*x*x;
}

async function rootP (x, t = 600) {
  await wait(t)
  return Math.sqrt(x);
}

async function cubeFormat (x) {
  var a;
  await cubeP(x).then(v => a = v);
  return x + " cubed is " + a;
};

async function idP (x) {
  await wait(1200)
  return x;
}

var idR = t => async x => {
  await wait(t*1000)
  return x;
}

async function idQ (x) {
  await wait(100)
  return x;
}

async function popP (ob) {
  await wait(1000)
  var e = ob.ar.slice().pop();
  return e;
}

var _se = t => a => async b => {
  await wait(t*1000)
  a.release(b);
}

var _sen = _se(1);

var iD = t => async b => {
  await wait(t*1000)
  return b;
}

var _iD = t => async b => {
  await wait(t*1000)
  eval(b);
}

var powP = a => b => async c => {
  await wait(b*1000)
  return c**a;
}

var _pop = t => ar => ar.slice().pop();



function Filt (p) {this.p = p; this.filt = function filt (x) {return p(x)}};
function filtP (p) {return new Filt(p)};

var filtOdd = filtP(x=>x%2 === 1);
var filtEven = filtP(x=>x%2 === 0);

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
      {if (y != undefined && y !== false && y !== NaN && (!(x instanceof Filt)) &&
      y.toString() != "NaN" && y.name !== "f_" && y.name !== "stop" ) {
      ar.push(y);
      diffRender()
    }})
    else if (x != undefined && x !== false && (!(x instanceof Filt)) &&
      x.toString() != "NaN" && x.name !== "f_" && x.name !== "stop" ) {
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

var fork = ob => string => {
    return window[string] = Comp(ob('stop'));
}
    var orb1 = Comp();
    var orb2 = Comp();
    var orb3 = Comp();
    var orb4 = Comp();
    var orb5 = Comp();
    var orb6 = Comp();
    var orb7 = Comp();
    var orb8 = Comp();
    var orb9 = Comp();
    var orb10 = Comp();
    var orb11 = Comp();
    var orb12 = Comp();
    var orb13 = Comp();
    var orb14 = Comp();
    var orb15 = Comp();
    var orb16 = Comp();
    var orb17 = Comp();
    var orb18 = Comp();
    var orb19 = Comp();

function runT (k) {

    orb1 = Comp();
    orb2 = Comp();
    orb3 = Comp();
    orb4 = Comp();
    orb5 = Comp();
    orb6 = Comp();
    orb7 = Comp();
    orb8 = Comp();

var orbit_1 = "In about eight seconds, orb5 will do something shocking. It will remove the last element from orb2.ar and replace it with its square root. Oh well, it's all inside of runT(). "

var orbit_2 = 'Soon, orb6 will obtain copies of the last three elements of orb2 and perform some computations. Then it will display "THE END". '

orb1 = Comp([k])(cubeP)(addP(orb1('stop')[0]))(() =>
        fork(orb1)("orb2")
        (squareP)(multP(1/(orb2('stop')[0] * 100)))(addP(1))(powP(4)(1))(() =>
            fork(orb1)('orb3')(x=>x-3)(x=>x**(1/3))(x=>x+1)(cubeP)(() =>
                orb4(orbit_1)(() => iD(7)(false))(() =>
                    orb5(orb2('stop').pop())(powP(1/2)(3))(x =>
                    orb2(x))(() =>
                        orb6(orbit_2)(iD(7)(false))(() =>
                            orb7(orb2('stop').slice(-3,-2)[0])
                            (iD(1)(orb2('stop').slice(-2,-1)[0]))
                            (iD(1)(orb2('stop').slice(-1)[0]))(powP(1/2)(1))
                            (addP(1))(powP(3)(1))(iD(4)("THE END"))
                        )
                    )
                )
            )
        )
    )
};
runT(3);

orb8 = Comp([4])(cubeP)(addP(orb1('stop')[0]))
setTimeout(() => console.log("orb8('stop')", orb8('stop')),7000);


// end
