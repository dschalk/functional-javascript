//'use strict';
var todoData
var mMt3VAL;
var taskL = [];
var namesList;
var MESSAGES = [];
var res = [];
var showTodoDiv = 'block';
var gameDiv = 'block';
var showChatDiv = 'block';
var CHANGE = 'cow';
var chatNode;
var captionDiv = 'block';
var xs = xstream.default;
var h = h.h;
const messages = [];
var buttonNode;
var stat;
var solo = "solo";
var gameData = "nobody 0 | 0 \njudy 0 | 0"
var m = new Monad(42, 'm');
var m0 = new Monad(0, 'm0');
var m1 = new Monad(1, 'm1');
var m2 = new Monad(2, 'm2');
var m3 = new Monad(3, 'm3');
var m4 = new Monad(4, 'm4');
var m5 = new Monad(5, 'm5');
var m6 = new Monad(6, 'm6');
var m7 = new Monad(7, 'm7');
var m8 = new Monad({hello: 8}, 'm8');
var m9 = new Monad(9, 'm9');
var stateArray = [];
var nl = '\n';

function makeSequence (n) {
  var a=[];
  var b=n;
  while (b--) a[b] = b+1;
  return a
}

var tr = x => p => async f => {
  return await f(await p(x))
}

var tr2 = p => async f => {
  return await f(await p(x))
}

function terminate(x) {return x};
function germinate(x) {return x};

console.log(makeSequence(5))

var arf = async p => { 
  var jim = await p; 
  console.log('arf',jim)
  return jim                     ;
}; 

  function Monad(z = 'default', ID = 'tempMonad') {
    this.x = z;
    this.id = ID;
  };

  function Monad2(z = 'generic', ID = 'temp') {
    this.x = z;
    this.id = ID;
  };


var m52 = new Monad2 (52, 'm52');
console.log('m52',m52);

  Monad2.prototype.bnd = function (func, ...args) {
    if (func instanceof Promise) {
      this.getVal(func,this.x,args);
    }
    var m = func(this.x, ...args)
    var ID;
    if (m instanceof Monad2) {
      ID = testPrefix(args, this.id);
      window[ID] = new Monad2(m.x, ID);
      return window[ID];
    }
    else return m;
  };

  Monad2.prototype.ret = function (a) {
    return window[this.id] = new Monad2(a, this.id);
  };

var m52 = new Monad2 (52, 'm52');
function testMon(f,v,...args) {
  if (f(v,...args) instanceof Monad) return true;
  else return false;
}

function testProm(f,v,args) {
  if (f(v,...args) instanceof Promise) return true;
  else return false;
}

var promise = pinkySwear();
promise(true,[42]);
console.log('pinky promise()', promise() );

var m80 = new Monad("Amanda", 'm80');

async function waitP (f, args) {
  var z = await (p);
  m80.ret(z);
  console.log(m80.x);
  return m80.x;
}

  function pause(x) {
    console.log('<W><W><W> In pause. ar is',ar);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  function pauseCube(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x*x*x);
      }, 2000);
    });
  }

const wait2 = x => {
  setTimeout( function (x) {return x},2000 )
}

  function bind (x, arr=[]) {
    this.ar = arr;
    var ar = arr;
    ar.push(x instanceof Monad ? x.x : x)
    if (ar.length === 0) ar = [x];
    console.log('bind: x.x is', x);
    console.log('bind: ar is', ar);
    console.log(' ');
    return function debug8 (func) {
      if (func.name === "terminate") return ar;
      if (x instanceof Promise) {
        var p = x.then(v => func(v instanceof Monad ? v.x : v));
        return bind(p,ar)
      }
      if (x instanceof Monad) {
        return bind(func(x.x),ar);
      }
      return bind(func(x),ar);
    };
  };  

(async function hello() {
  await wait(4000);
  console.log( 'Hello Nurse, you sure are a fine-looking woman.' );
  return ret('Oh Nurse, you tear me up');
})();

 async function trylock () { 
   await wait(1000);
   console.log('<%><>%<%><><%><><%><><%><><%> in tryLock');
   if (this.lock === true) { 
     console.log('this.lock = true');
     return trylock()
   }
   else { this.lock = true } 
  };

function ret (val = 0, id = "retDefault") {
  return window[id] = new Monad(val, id);
}

function ret_2 (val = 0, id = "retDefault") {
  return window[id] = new Monad2(val, id);
}

function id (x) {return x}

  Monad.prototype.bnd = function (func, ...args) {
    if (func instanceof Promise) {
      this.getVal(func,this.x,args);
    }
    var m = func(this.x, ...args)
    var ID;
    if (m instanceof Monad) {
      ID = testPrefix(args, this.id);
      window[ID] = new Monad(m.x, ID);
      return window[ID];
    }
    else return m;
  };

  Monad.prototype.ret = function (a) {
    return window[this.id] = new Monad(a, this.id);
  };
  
  Monad.prototype.getVal = async function fg (f) {
    this.ret(await(f));
  };

  function testPrefix (x,y) {
     var t = y;  // y is the id of the monad calling testPrefix
     if (Array.isArray(x)) {
      x.map(v => {
        if (typeof v == 'string' && v.charAt() == '$') {
           t = v.slice(1);  // Remove "$"
        }
      })
    }
    return t;
  }

  function square (v) {
    return ret(v*v)
  };


  function cube (v, id) {
    return ret(v*v*v, id);
  };

  function add (a, b, id) {
    return ret((parseInt(a,10) + parseInt(b,10)),id);
  };

  const divCinverse = a => b => ret(e/b);
  const divC = a => b => ret(b/a);
  const addC = a => b => ret(a+b);
  const cubeC = v => ret(v*v*v);
  const multC = a => b => ret(a*b);
  const doubleC = a => ret(a+a);
  const squareC = a => ret(a*a);
  const sqrtC = a => ret(Math.sqrt(a));

async function squareP (x) {
  await wait(2000) 
  return ret(x*x);
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

const divPinverse = a => async b => {
  await wait (2000)
  return ret(a/b);
}

const divP = a => async b => {
  await wait (2000)
  return ret(b/a);
}

const sqrtP = async a => {
  await wait (2000)
  return ret(Math.sqrt(a));
}

const doubleP = async a => {
  await wait (2000)
  return ret(a+a);
}

const addP = x => async y => {
  await wait(2000) 
  return ret(x + y);
}

const multP = x => async y => {
  await wait(2000) 
  return ret(x * y);
}

async function cubeP (x) {
  await wait(2000) 
  return ret(x*x*x);
}

  const divMinverse = a => b => ret(a/b);
  const divM = a => b => ret(b/a);
  const addM = a => b => ret(a+b);
  const cubeM = v => ret(v*v*v);
  const multM = a => b => ret(a*b);
  const doubleM = a => ret(a+a);
  const squareM = a => ret(a*a);
  const sqrtM = a => ret(Math.sqrt(a));

  const addC2 = a => b => c => ret(a+b,c);
  var double = function double(v) {
      return v + v;
  };

  function mult(x, y, id) {
    if (arguments.length = 1) {
      this.x = x;
      return function (z,id = "multDefault") {
        return ret(this.x*z, id)}
    }
    return ret(x * y, id);
  }

  function pi (k) {
    var a = (2*k)*(2*k);
    var b = (k+2)*(k)
    return ret(a/b)
  }

function retrn (m, val=m.x) {
   if (m instanceof Monad) {
     window[m.id] = new Monad(val, m.id);
     return window[m.id];
   }
   return window[m] = new Monad(val,String(m)); 
 }

function fmap (f, mon1, ...args) {
  var a;
  var id;
  if (mon1 instanceof Monad) {
    if (Array.isArray(mon1.x)) {
      a = mon1.x.map(f);
    }
    else if (arguments.length = 3 && arguments[2] instanceof Monad) {
      a = f(mon1.x, arguments[2].x)
    }
    else if (arguments.length = 4) {
      id = arguments[3];
    }
    else if (arguments.length = 3 && typeof arguments[2] == "string") {
      id = arguments[2];
    }
    else a = "fmap error"
  }
  return ret(a,id);
} 


var m0 = new Monad (0, "m0")

  var M = function M(a, b) {
    var mon = new Monad(a, b);
    return mon;
  };

  var count = 0;
  var mM0 = M(0, 'mM0');
  var mM1 = M([], 'mM1');
  var mMbound = M(0, 'mMbound');
  var mM2 = M(0, 'mM2');
  var mM3 = M([], 'mM3');
  var mM4 = M([], 'mM4');
  var mM5 = M(0, 'mM5');
  var mM6 = M('', 'mM6');
  var mM7 = M(0, 'mM7');
  var mM9 = M(3, 'mM9');
  var mM10 = M(4, 'mM10');
  var mM11 = M(5, 'mM11');
  var mM12 = M(7, 'mM12');
  var mM13 = M(12, 'mM13');
  var mM14 = M(12, 'mM14');
  var mM15 = M(12, 'mM15');
  var mM16 = M(0, 'mM16');
  var mM17 = M(0, 'mM17');
  var mM18 = M(0, 'mM18');
  var mM19 = M('waiting', 'mM19');
  var mM20 = M(0, 'mM20');
  var mM21 = M('Yes', 'mM21');
  var mM22 = M(0, 'mM22');
  var mM23 = M([0, 1, 1], 'mM23');
  var mM24 = M([[2, 3], 4, 9], 'mM24');
  var mM25 = M(3, 'mM25');
  var mM26 = M(0, 'mM26');
  var mM27 = M(0, 'mM27');
  var mM28 = M([], 'mM28');
  var mM29 = M([], 'mM29');
  var mM30 = M(0, 'mM30');
  var mM31 = M(0, 'mM31');
  var mM32 = M(0, 'mM32');
  var mM33 = M(0, 'mM33');
  var mM34 = M(0, 'mM34');
  var mM35 = M(3, 'mM35');
  var mM36 = M('', 'mM36');
  var mM37 = M('', 'mM37');
  var mM38 = M(0, 'mM38');
  var mM39 = M(0, 'mM39');
  var mMscbd = M([], 'mMscbd');
  var mMmessages = M([], 'mMmessages');
  var mMscoreboard = M([], 'mMscoreboard');
  var mMmsg = M([], 'mMmsg');
  var mMgoals2 = M('', 'mMgoals2');
  var mMname = M('', 'mMname');
  var mMar = M([1, 2, 3, 4, 5], 'mMar');
  var mMar2 = M([], 'mMar2');
  var mMscores = M('', 'mMscores');
  var mMprefix = M('', 'mMprefix');
  var mMfib = M([0, 1], 'mMfib');
  var mMfib2 = M([0, 1], 'mMfib2');
  var mMmain = M(null, 'mMmain');
  var mMcalc = M(null, 'mMcalc');
  var mMadd = new Monad(0, 'mMadd');
  var mMunit = new Monad(0, 'mMunit');
  var mMprod = new Monad(0, 'mMprod');
  var mMmult = new Monad({}, 'mMmult');
  var mMmult2 = new Monad({}, 'mMmult2');
  var mMpause = new Monad(0, 'mMpause');
  var mMpause2 = new Monad(0, 'mMpause2');
  var mMtem = new Monad(0, 'mMtem');
  var mMtem2 = new Monad(0, 'mMtem2');
  var mMt = new Monad(0, 'mMt');
  var mMtest = new Monad(0, 'mMtest');
  var mMcursor = new Monad(0, 'mMcursor');
  var mMgroup = new Monad('solo', 'mMgroup');
  var mMgoals = new Monad(0, 'mMgoals');
  var mMname = new Monad('', 'mMname');
  var mMob = new Monad({}, 'mMob');
  var mMsender = new Monad('nobody', 'mMsender');
  var mMextra = new Monad('nothing', 'mMextra');
  var mMextra2 = new Monad('nothing', 'mMextra2');
  var mMsave = new Monad({ x: 'start' }, 'mMsave');
  var mMindex = new Monad(0, 'mMindex');
  var mMindex3 = new Monad(0, 'mMindex3');
  var mMtemp = new Monad('temp', 'mMtemp');
  var mMtemp2 = new Monad('temp2', 'mMtemp2');
  var mMtemp3 = new Monad('temp3', 'mMtemp3');
  var mMtemp4 = new Monad('temp4', 'mMtemp4');
  var mMtemp5 = new Monad('temp5', 'mMtemp5');
  var mMte = new Monad(0, 'mMte');
  var mMid = new Monad('cow', 'mMid');
  var mMhelper = new Monad('helper', 'mMhelper');
  var mMtasks = new Monad([], 'mMtasks');
  var mMid = new Monad(42, 'mMid');
  var mMalert = new Monad('', 'mMalert');
  var fibmon = new Monad([0, 1]);
  var mMmax = new Monad(0, 'mMmax');
  var mMfibSave = new Monad(0, 'mMfibSave');
  var mMfibSave2 = new Monad(0, 'mMfibSave2');
  var mMscoreChange = new Monad(0, 'mMscoreChange');
  var mMcurrentRoll = new Monad([0, 0, 0, 0], 'mMcurrentRoll');
  var mMfibs8 = M([0, 1], 'mMfibs8');
  var mMallRolls = new Monad([[0, 0, 0, 0]], 'mMallRolls');
  var mMcurrentList = new Monad([], 'mMcurrentList');
  var mMtaskList = new Monad([], 'mMtaskList');
  var mMcomments = new Monad([], 'mMcomments');
  var mMcommentStr = new Monad([], 'mMcommentStr');
  var mMtaskL = new Monad([], 'mMtaskL');
  var mMsenderList = new Monad([], 'mMsenderList');
  var mMsoloAlert = new Monad('', 'mMsoloAlert');
  var mMe = new Monad('', 'mMe');
  var mMgoals = M(0, 'mMgoals');
  var mMt1 = new Monad(0, 'mMt1');
  var mMt2 = new Monad(0, 'mMt2');
  var mMt3 = new Monad('', 'mMt3');
  var mMa = new Monad('waiting', 'mMa');
  var mMx = new Monad([], 'mMx');
  var mMy = new Monad('waiting', 'mMy');
  var mMb = new Monad('waiting', 'mMb');
  var mMc = new Monad('waiting', 'mMc');
  var mMquad1 = new Monad('', 'mMquad1');
  var mMquad2 = new Monad('', 'mMquad2');
  var mMquad3 = new Monad('', 'mMquad3');
  var m10 = new Monad(10, 'm10');
  var m11 = new Monad(11, 'm11');
  var m12 = new Monad(2, 'm12');
  var m13 = new Monad(3, 'm13');
  var m14 = new Monad(4, 'm14');
  var m15 = new Monad(5, 'm15');
  var m16 = new Monad(6, 'm16');
  var m17 = new Monad(7, 'm17');
  var m18 = new Monad(8, 'm18');
  var m19 = new Monad(9, 'm19');
  var m20 = new Monad(10, 'm20');
  var m21 = new Monad(11, 'm21');
  var m22 = new Monad(2, 'm22');
  var m23 = new Monad(3, 'm23');
  var m24 = new Monad(4, 'm24');
  var m25 = new Monad(5, 'm25');
  var m26 = new Monad(6, 'm26');
  var m27 = new Monad(7, 'm27');
  var m28 = new Monad(8, 'm28');
  var m29 = new Monad(9, 'm29');
  var m30 = new Monad(10, 'm30');
  var m31 = new Monad(11, 'm31');
  var mMprime = new Monad([2], 'mMprime');
  var mMprime2 = new Monad([2], 'mMprime2');
  var mMprimes = new Monad([2], 'mMprimes');
  var mMspreadsheet = new Monad([0, 0, 0, 0], 'mMspreadsheet');
  var mMspreadsheet2 = new Monad([0, 0, 0, 0], 'mMspreadsheet2');
  var mMdummy = new Monad(0, 'mMdummy');
  var mMpf = new Monad(0, 'mMpf');
  var mMpFib = new Monad([], 'mMpFib');
  var RESULT = [0, 0, 0, 0];
  var mMdisplayFibs = new Monad([0, 1], 'mMdisplayFibs');
  var mMmembers = ret([], 'mMmembers');
  var mMcount = new Monad(0, 'mMcount');
  var mMcount2 = new Monad(0, 'mMcount2');
  var mMcount3 = new Monad(0, 'mMcount3');
  var mMcount4 = new Monad(0, 'mMcount4');
  var updateGameFunc = new Monad('start', 'updateGameFunc');
  var cleanup2Func = new Monad('start', 'cleanup2Func');
  var mMres = new Monad(['','',''], 'mMres');
  var mMquad4 = new Monad('', 'mMquad4');
  var mMquad5 = new Monad('', 'mMquad5');
  var mMquad6 = new Monad('', 'mMquad6');
  var mMfactors3 = new Monad('', 'mMfactors3');
  var mMfactors23 = new Monad('', 'mMfactors23');
  var mMfactors3_b = new Monad('', 'mMfactors3_b');
  var mMfactors4 = new Monad('', 'mMfactors4');
  var mMfactors5 = new Monad('', 'mMfactors5');
  var mMfactors6 = new Monad([[0], [1], [2]], 'mMfactors6');
  var mMfactors7 = new Monad('', 'mMfactors7');
  var mMfactors8 = new Monad('', 'mMfactors8');
  var mMfactors6_b = new Monad([[0], [1], [2]], 'mMfactors6_b');
  var mMfactors7_b = new Monad('', 'mMfactors7_b');
  var mMfactors8_b = new Monad('', 'mMfactors8_b');
  var mMfactors800 = new Monad('', 'mMfactors800');
  var mMchange = new Monad(0, 'mMchange')
  var mMchange2 = new Monad(0, 'mMchange2')
  var mMchange3 = new Monad(0, 'mMchange3')
  var backupMonad = new Monad('', 'backupMonad')
  var mMshowRegister = new Monad('inline', 'mMshowRegister')

function prm () {
  return new Promise( (resolve, reject) => {
     mMZ39.bnd((y) => resolve(y)) 
 })                          
}

function prm1 (x) {
  return new Promise( (resolve, reject) => {
     mMZ39.bnd((y) => resolve(x*y)) 
 })                          
}

function prm2 (f) {
  return new Promise( (resolve, reject) => {
     mMZ39.bnd((y) => resolve(f(y))) 
 })                          
}

var prm4 = x => {
  setTimeout(function () {workerC.postMessage([primesMonad.s, [x]])},30 )
  return new Promise( (resolve, reject) => {
     mMZ39.bnd((y) => resolve(y)) 
 })                          
}

var prm5 = x => {
  return new Promise( (resolve, reject) => {
     mMZ39.bnd((y) => resolve(y)) 
 }).then(workerC.postMessage([primesMonad.s, [x]]));                         
}

function largestPrime (x) {bind(x)(prm5)(split2)(terminate)
.pop()
.then(v => console.log(v.pop(),"Is the largest prime factor of",x))} 

function split2(str) {return str.split(',')}

var MonadItter = function MonadItter() {
  this.p = function () {};
  this.release = function () {
    return this.p.apply(this, arguments);
  };
  this.bnd = function (func) {
    return this.p = func;
  };
};

  var MI = function MI() {
    return new MonadItter();
  };

  var mMZ1 = MI();
  var mMZ2 = MI();
  var mMZ3 = MI();
  var mMZ4 = MI();
  var mMZ5 = MI();
  var mMZ6 = MI();
  var mMZ7 = MI();
  var mMZ8 = MI();
  var mMZ9 = MI();
  var mMZ10 = MI();
  var mMZ11 = MI();
  var mMZ12 = MI();
  var mMZ13 = MI();
  var mMZ14 = MI();
  var mMZ15 = MI();
  var mMZ16 = MI();
  var mMZ17 = MI();
  var mMZ18 = MI();
  var mMZ19 = MI();
  var mMZ20 = MI();
  var mMZ21 = MI();
  var mMZ22 = MI();
  var mMZ23 = MI();
  var mMZ24 = MI();
  var mMZ25 = MI();
  var mMZ26 = MI();
  var mMZ27 = MI();
  var mMZ28 = MI();
  var mMZ29 = MI();
  var mMZ30 = MI();
  var mMZ31 = MI();
  var mMZ32 = MI();
  var mMZ33 = MI();
  var mMZ34 = MI();
  var mMZ35 = MI();
  var mMZ36 = MI();
  var mMZ37 = MI();
  var mMZ38 = MI();
  var mMZ39 = MI();
  var mMi3terPrime = MI();
  var mMitterPrime4 = MI();
  var mMitterPrime5 = MI();
  var mMitterFib = MI();
  var mMitterFib2 = MI();
  var mMitterFib3 = MI();
  var mMitterFib4 = MI();
  var mMitterfib5 = MI();
  var mMitterFib6 = MI();
  var mMitterFib7 = MI();
  var mMitterFib8 = MI();
  var mMitterFib9 = MI();
  var mMitterPrimeFibs = MI();
  var mMitterPF = MI();
  var mMitterPF2 = MI();
  var style = ['inline', 'inline', 'inline', 'inline'];
  var nums = [0,0,0,0];
var mMdice = new Monad('block','mMdice');
var mMrightPanel = new Monad('block','mMrightPanel');
var mMrightPanel2 = new Monad('block','mMrightPanel2');
var mMgameDiv2 = new Monad('block','mMgameDiv2');
var mMgameDiv = new Monad('block','mMgameDiv');
var mMlogin = new Monad('block','mMlogin');
var mMlog1 = new Monad('block','mMlog1');
var mMlog2 = new Monad('block','mMlog2');
var mMtodoDiv = new Monad('block','mMtodoDiv');
var mMchatDiv = new Monad('block','mMchatDiv');
var mMcaptionDiv = new Monad('block','mMcaptionDiv');
var mMtodoDiv = new Monad('block','mMtodoDiv');
var mMtodo = new Monad('inline-block','mMtodo');
var mMchat = new Monad('inline-block','mMchatDiv');
var mMcaption = new Monad('block','mMcaptionDiv');
var mMtodo = new Monad('inline','mMtodoDiv');
var mMgame = new Monad('block','mMgameDiv');
var mMerror = new Monad('','mMerror');
var mMseries = new Monad('','mMseries');
var mMnumbers = new Monad([0,0,0,0], 'mMnumbers') 
var mMoperator = new Monad('add', 'mMoperator') 

var mMob = new Monad (0, 'mMob')
var pMname = new Monad('1v65n$%pqw3*@#9', 'pMname');
var pMoldName = new Monad('1v65n$%pqw3*@#9', 'pMoldName');
var pMbackupName = new Monad('backup', 'pMbackupName'); 
var pMpassword = new Monad('password', 'pMpassword');
var pMcombo = new Monad('1v65n$%pqw3*@#9<o>none', 'pMcombo');
var pMgroup = new Monad('solo', 'pMgroup');
var pMscore = new Monad(0, 'pMscore');
var pMgoals = new Monad(0, 'pMgoals');
var pMnums = new Monad([8,8,8,8], 'pMnums');
var pMstate = new Monad([],'pMstate');
var pMindex = new Monad(0, 'pMindex');
var pMdata = new Monad([], 'pMdata');
var pMelms = new Monad( [0,0,0,0], 'pMelms' );
var pMstyle = new Monad( ['inline','inline','inline','inline'], 'pMstyle' );
var pMdisplay = new Monad([], 'pMdisplay');
var pMnewName = new Monad('', 'pMnewName');

var mMnums = new Monad([0,0,0,0], 'mMnums');
var mMnumEls = new Monad([], 'mMnumEls');
var mMstyle = new Monad(['inline', 'inline', 'inline', 'inline'], 'mMstyle')

var worker = new Worker("worker.js");
var workerB = new Worker("workerB.js");
var workerC = new Worker("workerC.js");
var workerD = new Worker("workerD.js");
var workerE = new Worker("workerE.js");
var workerF = new Worker("workerF.js");

var pMop = new Monad (0, 'pMop');

var mMfactors = new Monad ([], 'mMfactors');

var mMfactors_b = new Monad ([], 'mMfactors_b');

function get (m) {
  return m.x;
}

function get2 (m) {
  let v = m.bnd('x => x');
  return v;
}
var a = 3;
var b = 4;
var c = a + b;

function eq (mon1, mon2) {
  if (mon1.id === mon2.id && mon1.x === mon2.x) return true;
  return false;
}

var mMtemp5 = new Monad(0, 'mMtemp5')

  function addStr (x, str) {
      return ret(x + str);
  };

var aD = function (x, b, id = 'mQfred') {
  return window[id] = new MonadMaybe (parseInt(x,10) + parseInt(b,10), id);
};

var cuB = function (v, id = 'default') {
  return window[id] = new MonadMaybe (v * v * v, id);
};

var m = new Monad(3, 'm');

var isFunc = function isFunc (x) { return eval("typeof(" + x + ") == 'function'")};

function MonadSet(z, ID) {
  var _this = this;
  this.s = z;
  this.id = ID;
  this.bnd = function (func, ...args) {
    var m = func(this.s, ...args)
    var ID;
    if (m instanceof Monad) {
      ID = testPrefix(args, _this.id);
      window[ID] = new Monad(m.x, ID);
      return window[ID];
    }
    if (m instanceof MonadSet) {
      ID = testPrefix(args, _this.id);
      window[ID] = new Monad(m.s, ID);
      return window[ID];
    }
    else return m;
  };
  this.ret = function (a) {
    return window[_this.id] = new MonadSet(a,_this.id);
  };
};

var qrs = new Set();
var sMplayers = new MonadSet(qrs, 'sMplayers'); // holds currently online players

var pMclicked = new Monad ([], 'pMclicked');

function MonadArchive(g, state, p) {
  this.id = g;
  this.s = state;
  this.process = p;
  this.a = s[0];
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.run = ar => {
    var ar2 = this.process(ar);
    this.a = ar2[pMindex.x];
    this.s = ar2;
    window[this.id] = this;
    return window[this.id];
  }
};

var primesMonad = new MonadState('primesMonad', [3, [2,3], 3, [2,3]]);

function MonadState(g, state) {
  this.id = g;
  this.s = state;
};

var mMg = new Monad([], 'mMg');


function tP (x) {
  if (eval('typeof ' + x) === 'undefined') return "code4"
  else if (eval(x) !== eval(x)) return "code5"
  else return "code6"
}

function testP (x) {
  if ( eval('typeof ' + x) === 'undefined') return "code4"
  else if (eval(x) !== eval(x)) return "code5"
  else return "code6"
}

function testPrefix3 (x,y) {
  var t = y;
  var s;
  if ( eval('typeof ' + x) === 'undefined') return "code4"
  else if (eval(x) !== eval(x)) return "code5"
  else return "code6"
    x.some(v => {
      if (typeof v == 'string' && v.charAt() == '$') {
         t = v.slice(1);
      }
    })
  return t;
}

function testPrefix2 (x,y) {
  ar.map( v => {
    code = testP(v);
    if (code === 'code4') ar.push(v + ' is undefined.');
    else if (code === 'code5') ar.push(v + ' is NaN.');
    else if (code === 'code6') code = 'code6';
  })
  if (code === 'code6') return y;
  else if (ar.length > 0) return ar;
}
function evalF(x) {
  var v;
  if (typeof x == "string") {v = eval("typeof x")}
  else if (isNaN(x)) v = "NaN";
  return v;
}

  function add2 (x, y) {
    return ret2(x*1 + y*1);
  };


  function square2 (x, str) {
    return ret2(x*x);
  };

  function mult2 (x,y,str) {
    return ret2(x*y);
  };

  function sqroot2 (x) {
    return ret2(Math.sqrt(x));
  }

  function log2(x, message, str) {
    window[str] = new MonadEr(x, str, []);
    return window[str]
  };

  function ret2(v, id = 'generic') {
    window[id] = new MonadEr(v, id, []);
    return window[id];
  }

function cube2 (x,id) {
    return ret2(x*x*x);
};

function push(x, v) {
  var ar = x.slice();
  ar.push(v);
  return ret(ar);
  };

function push2(x, v, id) {
    var ar = x.slice();
    ar.push(v);
    window[id] = new MonadEr(ar, id, []);
    return window[id];
};

function unshift(x, y, id) {
  var ar = x.slice();
  ar.unshift(y);
  window[id] = new Monad(ar, id);
  return window[id];
}

function splice2(x, start, how_many, id) {
    var ar = x.slice();
    ar.splice(start, how_many)
    window[id] = new MonadEr(v, id, []);
    return window[id];
};

function sliceM(x, howmany) {
    var ar = x.slice(howmany);
    return ret(ar);
};

var mMroll = new Monad([0,0,0,0], 'rollMonad');

var mMplayer = new Monad([0,0,0,0], 'mMplayer');

var fpTransformer = function transformer(s, m) {
  var bound = Math.ceil(Math.sqrt(s[3][s[3].length - 1]));
  if (bound > m.a[m.a.length - 1]) {
    m.run(["CE#$42", bound, m.s]);
  }
  return m;
};

var tr3 = function tr3(fibsArray, primesArray) {
  var bound = Math.ceil(Math.sqrt(fibsArray[fibsArray.length - 1]));
  var primes = primesArray.slice();
  if (primesArray.slice(-1)[0] >= bound) {
      primes = primesArray.filter(function (v) { return v <= bound; });
  }
  var ar = [];
  var fibs = fibsArray.slice(3);
  fibs.map(function (v) {
      if (primesArray.every(function (p) { return (v % p || v == p); }))
          ar.push(v);
  });
  return ret([fibsArray.join(', '), primes.join(', '), ar.join(', ')]);
};

var fibs_state = function fibs_state(ar) {
  var a = ar.slice();
  while (a[3].length < a[2]) {
      a = [a[1], a[0] + a[1], a[2], a[3].concat(a[0])];
  }
  return a;
};

var fibsMonad = new MonadState('fibsMonad', [0, 1, 2, [0]], fibs_state);

factor_state([[], [], 24, [2, 3, 5]]);

factor_state2([[], [], 24, [2, 3, 5]]);

var factorsMonad = new MonadState('factorsMonad', [[], [], 2, []], factor_state);

function factor_state(v) {
  v[3].map(function (p) {
      if (v[2] / p == Math.floor(v[2] / p)) {
          v[0].push(p);
      }
  });
  return v;
}

function factor_state2(a) {
  var v = a.slice();
  var result;
  function func (v) {
    for (let p of v[3]) {
      if (v[2] / p == Math.floor(v[2] / p)) {
          v[0].push(p);
          func([v[0], v[1], v[2]/p, v[3]])
          break;
      };
      result = v;
    };
  }
  return result;
}

function factors_state3(a) {
  var b = a.slice();
  var result;
  func(b);
  function func (v) {
    for (let p of v[3]) {
      if (v[2] / p == Math.floor(v[2] / p)) {
        v[1].push(p);
        v[2] = v[2]/p;
        if (v[2] != 1) {
          func(v);
        }
      };
      v[1].sort(function(a, b) {
        return a - b;
      });
      result = v[1];
    };
  }
  return result;
}

function primes_state(v) {
  if (v[0] == "CE#$42" && Array.isArray(v[1]) && typeof v[2] === 'number' ) {
    console.log('In main thread Daddy-Oh and v is ', v );
    worker.postMessage(v)
  }
  else {
    console.log('ERROR', v, 'does not have the form [\"CE#$42\", array, number] in prime_state'  )
  }
}

function message_state(v) {
  var ar = v[0].concat(v[3]);
  return [ v[0], [], [], ar ];
};

function execMessage(el, state) {
  var ar = el.concat(state);
  messageMonad = new MonadState('messageMonad', ar);
};

function message_state(v) {
  var ar = v[0].concat(v);
  return [ ar];
};

var messageMonad = new MonadState('messageMonad', [], message_state);

var mMsetArchive = new Monad([], 'mMsetArchive');

function clean(x, mon) {
  if (mon === void 0) { mon = mMtemp; }
  retrn(mon, []);
};

function pFib(fibs, primes) {
  var ar = [];
  fibs.map(function (f) {
      if (f < 2)
          return;
      if (primes.every(function (p) { return (f % p != 0 || f == p); }))
          ar.push(f);
  });
  return ar;
};

var CURRENT_ROLL = [];
var emit;
var data$;

function rang(n, m) {
  return Array.from(new Array(m - n), function (x, i) { return i + n; });
}


function ad (a, b) { return parseInt(a,10) + parseInt(b,10); };

function cu (a) { return a * a * a; };

function primes(n, ar) {
  var array = ar.slice();
  for (var i = array.slice(-1).pop(); i <= n; i += 2) {
      if (array.every(function (elem) { return i % elem; }))
          array.push(i);
  }
  ;
  return array.join(", ");
}

  var testscore = function testscore(v) {
    if ((v % 5) === 0) return ret(v+5)
    else return ret(v);
  };

  var tscore = function tcore(v) {
    if ((v % 5) === 0) return ret(v+5)
    else return ret(v);
  };

  var expand = function expand(a, b) { return a + ', ' + b; };

  var p = function p(x) {
    if (x >= 0) {
        return ' + ' + x;
    }
    if (x < 0) {
        return '  ' + Math.abs(x);
    }
  };

  var addar = function (a, b) {
    return ret(a.map(function (v) { return v * 1 + b * 1; }), 'sally');
  };

  function numProtect (x) {return (new Number (x))*1; };

  var qS1 = function qS1(a, b, c) {
      var n = (b * (-1)) + (Math.sqrt(b * b - 4 * a * c));
      if (n != n) {
          return 0;
      }
      return n / (2 * a);
  };
  var qS2 = function qS2(a, b, c) {
      var n = (b * (-1)) - (Math.sqrt(b * b - 4 * a * c));
      if (n != n) {
          return 0;
      }
      return n / (2 * a);
  };
  var qS3 = function qS3(a, b, c) {
      return [qS1(a, b, c), qS2(a, b, c)];
  };
      var qS4 = function qS4 ([x,y,z]) {
        let [a,b,c] = [numProtect(x),numProtect(y),numProtect(z)]
        return [qS1(a,b,c), qS2(a,b,c)]
      }

  var qS4 = function qS4(_a) {
      var x = _a[0], y = _a[1], z = _a[2];
      var _b = [x, y, z], a = _b[0], b = _b[1], c = _b[2];
      return qS3(a, b, c);
  };
  var trim = function trim(str) {
      return ret(str.trim(), 'fred');
  };
  var convertBack = function convertBack(str) {
      var ar = str.split('$*$*$');
      var s = str;
      if (ar.length > 1) {
          s = ar.reduce(function (a, b) { return a + ', ' + b; });
      }
      return s;
  };

  var split = function split(x, mon) {
      return retrn(mon, x.split(','));
  };
  var stringify = function stringify(ob) {
      var str = ob.task + ',' + ob.color + ',' + ob.textdecoration + ',' + ob.checked.tostring() +
          ',' + ob.author + ',' + ob.responsible;
      return str;
  };
  var addString = function addString(x, str, mon) {
      if (mon === void 0) { mon = mMtemp5; }
      var s = str;
      if (x.length > 4) {
          s = x + ',' + str;
      }
      return retrn(mon, s);
  };
  var intersection = function (a, b, mon) {
      if (mon === void 0) { mon = mMtemp5; }
      var ar3 = [];
      for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
          var x = a_1[_i];
          for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
              var y = b_1[_a];
              if (x == y) {
                  ar3.push(x);
              }
          }
      }
      return retrn(mon, ar3);
  };


  function noComma (s) {
    s.trim();
    while (s.trim()[0] == ",") {
      s.trim();
      s = s.slice(1);
    }
    return s;
  }

var toFloat = function toFloat(x) {
  return ret(parseFloat(x));
};

  var par = function par(x) {
      var ar = x.slice();
      ar.splice(0,3)
      return ret(ar)
  }

  function sqroot (x) {
    return ret(Math.sqrt(x));
  }

   var clone = function clone(x) {
    var array = x.slice()
    return ret(array, 'cloneFunc')
  }

  var spliceAdd = function spliceAdd(x, index, array) {
      var ar = x.slice();
      ar.splice(index, 0, array);
      return ret(ar);
  };

  var spliceM = function spliceM(x, start, how_many) {
      var ar = x.slice();
      ar.splice(start, how_many)
      return ret(ar);
  };

  var sliceM = function sliceM(x, howmany) {
      var ar = x.slice(howmany);
      return ret(ar);
  };

  var concat = function concat(x, v, id = "concatDefault") {
      var a = x.slice();
      var a2 = a.concat(v);
      return ret(a2, id);
  };
  var sliceFront = function sliceFront(x, n) {
      var ar = x.slice(n);
      return ret(ar);
  };
  var filter = function filter(x, condition) {
      var ar = x.slice();
      return ret(ar.filter(function (v) { return condition; }));
  };
  var map = function map(x, f) {
          var ar = [];
          var keys = Object.keys(x);
          for (let k in x) { ar[k] = f(x[k]) };
      return ret(ar);
  };
  var intersperse = function intersperse(x) {
      var ar = x.reduce(function (a, b) { return (a + ', ' + b); });
      return ret(ar);
  };
  var addTest = function addTest(x) {
      if (x % 5 == 0)
          return ret(x + 5);
      else
          return ret(x);
  };

  var addTest2 = function addTest2(x) {
      if (x % 5 == 0)
          return ret(x + 5);
      else
          return ret(x);
  };

function log3(x, message) {
    return ret(x);
};

function log4(x, message) {
  console.log(message);
  return ret(x);
};

function log5(x) {
  console.log(x);
  return ret(x);
};

function log(x,y) {
    return ret(y);
};

function logX(x,y) {
    return ret(y);
};

function acc (x, y, str) {
  return window[str] = new MonadAcc(x + y, str);
}

var lg = function lg(x) {
    return ret(x);
};
var getIndex = function getIndex(event_object) {
    var task = event_object.currentTarget.parentNode.innerText;
    var possibilities = event_object.currentTarget.parentNode.parentNode.childNodes;
    var keys = Object.keys(possibilities);
    for (var k in keys) {
        if (task == possibilities[k].innerText) {
            return k;
        }
    }
};
var getIndex2 = function getIndex2(e) {
    var elem = e.currentTarget.parentNode.children[0].innerHTML;
    var elem2 = e.currentTarget.parentNode.parentNode.childNodes;
    var keys = Object.keys(elem2);
    for (var k in keys) {
        if (elem == elem2[k].childNodes[0].innerHTML) {
            return k;
        }
    }
};

var tempstyle = { display: 'inline' };
var tempstyle2 = { display: 'none' };
var mMdisplay = new Monad('display', 'mMdisplay');

function refresh () {
    setTimeout(function () {
    document.location.reload(false);
    }, 4000);
};

function ret3(v, id = 'generic') {
    window[id] = new MonadEr(v, id, []);
    return window[id];
  }

function cube3(x) {
    return ret3(x*x*x);
}

function clean3 (x, id) {
  window[id] = new MonadEr(x, id, []);
  return window[id];
}

var a = 'jack'
var b = '0/"andy"'

function testP (x,id) {
    if ( eval('typeof ' + x) === 'undefined') {
      console.log(`............... ERROR parameter ${x} is not defined`);
      window[id].e = [`${x} is not defined`]
      return 'STOP';
    }
    if (eval(x) !== eval(x)) {
      console.log(`............... ERROR parameter ${x} is not a number`);
      window[id].e = [`${x} is not a number`];
      return 'STOP';
    }
    mMZ12.release([]);
    return []
}

function MonadEr (val, ID, er = []) {
  var test;
  var arr = arr = [];
  this.x = val;
  this.e = er;
  this.id = ID;
  this.getx = function getx (x) {return this.x};
  this.bnd = function (f, ...args) {
    var args = args;
    if (f === 'clean3' || f === clean3) {
      this.e = [];
      window[this.id] = new MonadEr(this.x, this.id, []);
      return window[this.id];
    }
    if (this.e.length > 0) {
      console.log('BYPASSING COMPUTATION in MonadEr instance', this.id, f, '.  PROPAGATING ERROR:',  this.e[0]);
      return this;
    }

    if (args.length > 0) {
      arr = args.filter(v => !(typeof v == 'string' && v.charAt() == '$' && v.slice(0,4) !== 'Math'))

      arr.map(v => {
        test = testP(v, this.id)
        if (test === 'STOP') {
          console.log('\"STOP\" returned from testP. Ending code execution in ',this.id, '.' )
          this.e.push('STOP');
          return this;
        }
      });
    }
    if (test !== "STOP") {
    try {
      var testId = testPrefix(args, this.id);
      var ar = arr.map(v => eval(v))
      var m = eval(f)(this.x, ...ar)
      var id = testPrefix(ar, c.id);
      window[testId] = new MonadEr(m.x, testId, []);
      return window[testId];
      }
      catch(error) {
        this.e.push('STOP -- Execution Aborted. ');
        console.log(f, 'ERROR in ',id,error,' No further computations will be attempted');
        return this;
      }
    }
    else {
      this.e.push('STOP -- Execution Aborted. ');
      console.log(f, 'ERROR "STOP" returned from testP. No further computations will be attempted');
      return this;
    }
  }
  this.ret = function (a) {
    window[this.id] = new MonadEr(a, this.id, []);
    return window[this.id];
  }
};


var mMindex2 = new Monad(0,'mMindex2');

// ***************************************************************************

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class G extends Polygon {
  constructor (na) {
    this.name = na;
  }
};

var ops = ['+','-','*','/', 'concat'];
var nums = [3,4,5,6];

var mMregister = new Monad('', 'mMregister');

var f7 = function f7 () {
var ar = [];
for (var a of [2,4,6,8]) {
  for (var b of [3,6,9,12]) {
    if (a + b === 18) {
      ar.push([a,b])
      break;
    }
  }
}
return ar
}

var x = f7();
console.log(x)

console.log('Almost at the bottom of monad.js primesMonad is', primesMonad );

var decompMonad = new MonadState('decompMonad', [3, [[0],[1],[2]], 3, [[0],[1],[2]]]);

function execP (state, num) {
  var top = state[2];
  var top2 = state[2];
  var primes = state[3];
  var primes2 = state[3]
  var result;
  if (num == state[0] || num == top) {
    result = new MonadState('primesMonad', state);
  }

  else if (num < top) {
    var temp = primes.filter(v => v <= num);
    var q = temp.indexOf(temp[temp.length - 1]);
    temp.push(primes[q + 1]);
    result = new MonadState('primesMonad', [primes[q+1], temp, top, primes]);
  }

  else {
    while (top2 <=  num ) {
      if (primes2.every(e =>  (top / e != Math.floor(top / e))))  {
        primes.push(top);
        top2 = top;
      };
      top += 2;
    }
    result = new MonadState('primesMonad', [top2, primes, top2, primes] );
  }
  return result;
};

function execF(n) {
  var a = [0,1];
  var b = [];
  while ((a[0] + a[1]) < n) {
   a = [a[1], a[0] + a[1]];
   b.push(a[0]);
  }
  b.push(a[1]);
  return new MonadState('fibsMonad', [a[0], a[1], n, b]);
};

function execD(listState, primeState, n) {
  var c = listState[3];
  var d = listState[2];
  var g;
  var ds;

  if (n == listState[0] || n == d)           {
    ds = new MonadState('decompMonad', listState);
  }

  else if (n < d) {
    var cn = c.slice(n);
    ds = new MonadState('decompMonad', [n, cn, d, c]);
  }
  else {
    execP(s, n)
    .bnd(newState => {
      while (d <= n) {
        fact2(newState[3], d)
        .bnd(factors => c.push(factors))
        d += 1;
      }
      ds = new MonadState('decompMonad', [d, c, d, c]);
      primesState = newState;
    })
  }
  return [ds, primesState];
}

function fact(v) {
  var ar = [];
  console.log('Entering fact. v2 and v[1] are:', v2, v[1] );
  while (v2 != 1) {
    for (let p of v[1]) {
      if (v2 / p === Math.floor(v2 / p)) {
        ar.push(p);
        v2 = v2/p;
      };
    }
  }
  ar.sort(function(a, b) {
    return a - b;
  });
  return ret(ar);
}

function fact2(s, b) {
  var ar = [];
  var n = b;
  while (n != 1) {
    console.log('In fact2 n is ', n );
    s.map(p => {
      if (n/p === Math.floor(n/p)) {
        console.log('In fact2. ar is', ar );
        ar.push(p);
        n = n/p;
        console.log(n);
      };
    })
  }
  ar.sort(function(x,y) {
    return (x - y);
  });
  return ret(ar);
}

var fibs_state = function fibs_state(ar) {
  var a = ar.slice();
  while (a[0] < a[2]) {
      a = [a[1], a[0] + a[1], a[2], a[3].concat(a[0])];
  }
  return a;
};

function lcm (cx,dx) {
  console.log('************In lcm cx, dx ', cx, dx );
  var ar= [];
  var r;
  var c = cx.slice();
  var d = dx.slice();
  d.map(v => {
    console.log('Hello from lcm, most excellent friend of mine.');
    if (c.some(x => x === v)) {
      ar.push(v)
      c.splice(c.indexOf(v),1)
      d.splice(d.indexOf(v),1)
    }
      r = ar.concat(d).concat(c).reduce(function (a,b) {return a*b})
      console.log('Bottom of map in lcm ar, d, c, r', ar, d, c, r );
    }
  )
  return r
}

//*************************************** BEGIN prime Fibonacci numbers

var fpTransformer = function fpTransformer(fibsState, primeState, then) {
  var ar = [];
  execP (primeState, Math.ceil(Math.sqrt(fibsState[1]))).bnd(ps => {
    fibsState[3].map(fs => {
      if (ps[3].filter(r => r <= fs).every(p => (fs % p || fs == p))) {ar.push(fs)};
    })
    var now = Date.now();
    var elapsed = now - then;
    postMessage( [ [fibsState[3].join(', '), ps[2], ar.join(', '), elapsed], ps ] )
  })
}



//*************************************** END prime Fibonacci numbers

function fdTransformer (primeState, decompState, n) {
  var factors = decompState[3].slice();
  var factors2 = decompState[3].slice();
  var ar = [];
  var d = decompState[2];
  var k;
  var result = new MonadState('decompMonad', decompState);
  if (n-1 < d) {
    console.log('In fdTransformer ### n < d block. n and d are:', n, d )
    factors2[1].length = n;
    result = new MonadState('decompMonad', [n+1, factors2[1], factors.length+1, factors]);
  }
  if (n-1 > d) {
    while (d < n) {
      k = d;
      while (k != 1) {
      console.log('In fdTransformer else block. n, d, k', n, d, k )
        primeState[3].map(p => {
          if (k/p === Math.floor(k/p)) {
            ar.push(p);
            k = k/p;
          };
        })
      }
      ar.sort(function(x,y) {
        return (x - y);
      });
      factors.push(ar);
      ar = [];
      d += 1;
    }
    result = new MonadState('decompMonad', [d+1, factors, d+1 , factors]);
  }
  return result;
}

function lcf (a,b) {
  var ar = [];
  a.map(x => {
    if (b.includes(x)) {
      ar.push(x)
      a.splice(a.indexOf(x),1)
      b.splice(b.indexOf(x),1)
    }
  })
  return ar.reduce((j,k) => j*k)
}

var stroke1Monad = new Monad('green', 'stroke1Monad');
var fill1Monad = new Monad('blue', 'fill1Monad');

var stroke2Monad = new Monad('green', 'stroke2Monad');
var fill2Monad = new Monad('blue', 'fill2Monad');

var stroke3Monad = new Monad('green', 'stroke3Monad');
var fill3Monad = new Monad('blue', 'fill3Monad');

var mMfibBlurb = new Monad('', 'mMfibBlurb');
var mMprimeBlurb = new Monad('','mMprimeBlurb');
var mMprimeFibBlurb = new Monad('','mMprimeFibBlurb');
var mMelapsed = new Monad(0, 'mMelapsed');
var mMcom2 = new Monad('block', 'mMcom2');
var mMcom3 = new Monad('none', 'mMcom3');
var mMcombo = new Monad('block', 'mMcombo');

function elapsed (t) {
  var x = Date.now();
  return (x - t);
}

function simpleWay (a,b) {
  console.log('In simpleWay a, b', a, b );
  var r = a*b;
  var a2 = a;
  var b2 = b;
  while (b % a !== 0) {
    console.log('In the simpleWay while block. a, b', a, b );
    let z = a;
    a = b % a;
    b = z;
  }
  console.log(a2, b2, a, a2*b2/a);
  return [a2, b2, a2*b2/a, a];
}

function styl (s) {
  switch(s) {
    case (0): return ['none', 'none', 'none', 'none'];
    break;
    case (1): return ['inline', 'none', 'none', 'none'];
    break;
    case (2): return ['inline', 'inline', 'none', 'none'];
    break;
    case (3): return ['inline', 'inline', 'inline', 'none'];
    break;
    case (4): return ['inline', 'inline', 'inline', 'inline'];
    break;
    default: return;  //console.log('Bad argument in styl. s is', s );
  }
}

function bNode (arr) {
  console.log('In bNode - - - arr is', arr);
  var x = styl(arr.length);
  var node = h('div#bNode', [
    h('button#0.num', { style: { display: x[0] }}, ' ' + arr[0] + ' '),
    h('button#1.num', { style: { display: x[1] }}, ' ' + arr[1] + ' '),
    h('button#2.num', { style: { display: x[2] }}, ' ' + arr[2] + ' '),
    h('button#3.num', { style: { display: x[3] }}, ' ' + arr[3] + ' ')
  ]);
  return node;
}

function isPrime(n) {
   if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
   var m = Math.sqrt(n);
   for (var i=2;i<=m;i++) if (n%i==0) return false;
   return true;
}

function *gen(x) {
   var x = x
   while(true) {
     if(isPrime(x)) yield x;
     x++;
   }
}

var primesIt = gen(primesMonad.s[2]+1);

var mMadvice = new Monad ('', 'mMadvice'); 

function calc (a, op, b) {
  var result;
  switch (op) {
    case "concat":
      result = parseInt(a.toString().concat(b.toString()), 10)
      break;
    case "add":
      result = parseInt(a, 10) + parseInt(b, 10);
      break;
    case "subtract":
      result = parseInt(a, 10) - parseInt(b, 10);
      break;
    case "mult":
      result = parseInt(a, 10) * parseInt(b, 10);
      break;
    case "div":
      result = parseInt(a, 10) / parseInt(b, 10);
      break;
    default: 'major malfunction in calc.';
  }
  return result;
};
/*
function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);
  var s = gameMonad.s.slice();
  var s04 = s[0][s[1]][4].slice()
  s04.push(result);
  var s00 = s[0][s[1]][0];
  var s01 = s[0][s[1]][1];
  console.log("<^><^><^> push has been executed <^><^><^> s04 <^><^><^>", s04);
  gameMonad.run(s00, s01, 0, [], s04); 
  if (result === 18 || result === 20) {
    score(result);
  }
};

function score(result) {
    var sc = parseInt(gameMonad.fetch0());
    var sco = result === 18 ? sc + 3 : sc + 1;
    var scor = sco % 5 === 0 ? sco + 5 : sco;
    var goals = gameMonad.fetch1();
    if (scor === 25 && gameMonad.fetch1() === "2") {
        retrn(mMindex,0);
        gameMonad = new MonadState('gameMonad', [[0,0,0,[],[0,0,0,0]],[0,0,0,[][0,0,0,0]],0]);
        socket.send(`CE#$42,${pMgroup.x},${pMname.x}`);
        newRoll(0,0);
    }
    else if (scor === 25) {
      newRoll(0, goals*1 + 1);
    }
    else newRoll(scor, goals);
};

function newRoll (a,b) {
  socket.send(`CA#$42,${pMgroup.x},${pMname.x},6,6,12,20,${a},${b}`);
}
*/






function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);ar
  if (result === 18 || result === 20) {
    score(result);
  }
  else {
    var a = gameMonad.fetch4().slice();
    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO in update calc. a is', a);
    a.push(result);
    gameMonad.run([,,0,[],a]);
  }
};

function score(result) {
    var sc = parseInt(gameMonad.fetch0());
    var sco = result === 18 ? sc + 3 : sc + 1;
    var scor = sco % 5 === 0 ? sco + 5 : sco;
    var goals = gameMonad.fetch1();
    if (scor === 25 && gameMonad.fetch1() === "2") {
        mMindex.ret(0);
        gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[0,0,0,0]],[0,0,0,[][0,0,0,0]]],0]);
        socket.send(`CE#$42,${pMgroup.x},${pMname.x}`);
        newRoll(0,0);
    }
    else if (scor === 25) {
      newRoll(0, parseInt(goals,10) + 1);
    }
    else newRoll(scor, goals);
};



var gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[1,2,3,4]], [0,0,0,[],[0,0,0,0]]],1 ]);

MonadState.prototype.dec = function () {
  this.s[1] -= 1;
  buttonNode = bNode(this.s[0][this.s[1]][4]);
  socket.send(`CG#$42,${pMgroup.x},${pMname.x},${this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
  window[this.id] = this;
  return this;
};

MonadState.prototype.inc = function () {
  this.s[1] += 1
  buttonNode = bNode(this.s[0][this.s[1]][4]);
  socket.send(`CG#$42,${pMgroup.x},${pMname.x},${this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
  window[this.id] = this;
  return this;
};

MonadState.prototype.fetch0 = function () {
  return this.s[0][this.s[1]][0];
}

MonadState.prototype.fetch1 = function () {
  return this.s[0][this.s[1]][1];
}

MonadState.prototype.fetch2 = function () {
  return this.s[0][this.s[1]][2];
}

MonadState.prototype.fetch3 = function () {
  return this.s[0][this.s[1]][3].slice();
}

MonadState.prototype.fetch4 = function () {
  return this.s[0][this.s[1]][4].slice();
}

MonadState.prototype.clearPicked = function () {
  var st = this.s.slice();
  st[0][st[1]][3] = [];
  st[1] += 1;
  st.splice(this.s[1]+1, 0, st[0]);
  return new MonadState('gameMonad', st);
}

MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice()
]) {
  console.log('In MonadState run ***************%%%%%%%^^^^^^&&&&&&&');
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display])
   console.log("[score, goals, operator, picked, display]",[score, goals, operator, picked, display]);
  this.s = newState;
  buttonNode = bNode(display);
  return window['gameMonad'] = new MonadState('gameMonad', newState);
}













/*

var gameMonad = new MonadState('gameMonad', [ [ [0,0,0,[],['lemon','lemon','lemon','lemon'] ]],0 ]);
console.log("gameMonad.s",gameMonad.s)

MonadState.prototype.fetch0 = function () {
  return this.s[0][this.s[1]][0];
}

MonadState.prototype.fetch1 = function () {
  return this.s[0][this.s[1]][1];
}

MonadState.prototype.fetch2 = function () {
  var x = this.s[0][this.s[1]][2];
  retrn(mMoperator,x);
  return x;
}

MonadState.prototype.fetch3 = function () {
  var x = this.s[0][this.s[1]][3].slice();
  retrn(mMnumbers,x);
  return x;
}

MonadState.prototype.fetch4 = function () {
  return this.s[0][this.s[1]][4].slice();
}

MonadState.prototype.clearPicked = function () {
  var st = this.s.slice();
  st[0][st[1]][3] = [];
  st[1] += 1;
  st.splice(this.s[1]+1, 0, st[0]);
  retrn(mMnumbers,[])
  return new MonadState('gameMonad', st);
}

MonadState.prototype.run = function (
  score,// = this.s[0][this.s[1]][0],
  goals,// = this.s[0][this.s[1]][1],
  operator,// = this.s[0][this.s[1]][2],
  picked, // = this.s[0][this.s[1]][3].slice(),
  display, // = this.s[0][this.s[1]][4].slice()
  ) {
  this.s[1] = this.s[1] + 1;
  var newState = [score, goals, operator, picked, display];
  var s = this.s.slice();
  var s0 = s[0].slice();
  s0.splice(this.s[1], 0, newState);
  window['gameMonad'] = new MonadState('gameMonad', [s0, s[1]] );
  window['gameMonad'].html = bNode(s0[s[1]][4]);
  return window['gameMonad'];
}

gameMonad.run(0,0,0,[],[2,4,6,8])
*/



function newRoll (a,b) {
  socket.send(`CA#$42,${pMgroup.x},${pMname.x},6,6,12,20,${a},${b}`);
}
function MonadState4(g, state) {
    console.log('someone called with g and state in MonadState4', g, state);
    this.id = g;
    this.s = state;
    this.bnd = (func, ...args) => func(this.s, ...args);
    this.ret = function (a) {
      return new MonadState4(this.id, a);
  };
};

var registered = new MonadState4('registered', {} );

MonadState4.prototype.run = function (str) {
  var s = {};
  str.split('@')
  .filter(v => v.length > 0)
  .map(x => x = x.split('<o>'))
  .map(v => s[v[0]] = v[1])
  this.s = s;
  console.log('In MonadState4.run. &&&&&&&&&&&&&&&&&& s is', s);
};

MonadState4.prototype.test = function (name) {
  var result = false;
  for (var a in this.s) {
    if (a == name) result = true
  }
  return result;
};

MonadState4.prototype.reg = 'inline';
MonadState4.prototype.login = 'inline';
MonadState4.prototype.clear = function () {this.s = []}

function rand () {
  var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n']
  return chars.sort( function() { return 0.5 - Math.random() } ).join('');
};

var rand$ = xs.of(rand());

  console.log('*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*');
  console.log( 'Hello Nurse' );
  console.log('*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*');
 


function MonadEvents(z = 'default', ID = 'temp') {
  var _this = this;
  this.x = z;
  this.id = ID;
  this.bnd = function (func, ...args) {
    var m = func(this.x, ...args)
    var ID;
    if (m instanceof MonadEvents) {
      ID = testPrefix(args, _this.id);
      window[ID] = new MonadEvents(m.x, ID);
      return window[ID];
    }
    else return m;
  };
  this.ret = function (a) {
    return window[_this.id] = new MonadEvent(a,_this.id);
  };
  this.stream = new EventEmitter();
  this.stream.on(1, v => _this.bnd(v[0], ...[1]));
  this.stream.on(2, v => _this.ret(v));
};



class MonadEmitter extends EventEmitter {};

function monadConstructor (v,b) {
  var c = new MonadEmitter();
  c.x = v;
  c.id = b;
  c.bnd = function (func, ...args) {
    console.log(func);
    var m = func(c.x, ...args)
    console.log(m);
    var ID;
    if (m instanceof MonadEmitter) {
      ID = testPrefix(args, c.id);
      window[ID] = monadConstructor(m.x, ID);
      return window[ID];
    }
    else return m;
  }
  c.on(0, v => {
    console.log(v)
    return v
  });
  c.on(1, v => {
      var mon = monadConstructor(v, c.id);
      return window[c.id] = mon;
  })
  console.log(v);
  c.on(2, v => c.bnd(v))
  return c;
};

var em = new EventEmitter;
var eventEmitter = new EventEmitter;
var em2 = new EventEmitter;
em2.on('42',x => console.log(x));

var producer = {
  start: function (listener) {
    this.id = em.emit('cow',45)
  },

  stop: function () {
  },

  id: 0
}

var listener = {
  next: (x) => {
    em.on(1, x => console.log('Yes sir.',x))
  },
  error: (err) => {
    console.error('The Stream gave me an error: ', err);
  },
  complete: () => {
    console.log('The Stream told me it is done.');
  },
}

var stream$ = xs.of(producer)

stream$.addListener(listener)





em.on(142, v => console.log('142',v ));



















