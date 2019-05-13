

function ints (n) {return [...Array(n).keys()]}

function Fux (p) {this.p = p; this.fux = function fux (x) {return p(x)}};

function* integers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

function Filt (p) {this.p = p; this.filt = function filt (x) {return p(x)}};
function filtP (p) {return new Filt(p)};

var filtOdd = filtP(x=>x%2 === 1);
var filtEven = filtP(x=>x%2 === 0);

function add1(v) { return v + 1; };
function isOdd(v) { return v % 2 == 1; };
function sum(total,v) { return total + v; };
function cube(v) { return v**3; };

function compose2(...fns) {
  const n = fns.length;

  return function $compose(...args) {
    let $args = args;

    for (let i = n - 1; i >= 0; i -= 1) {
      $args = [fns[i].call(null, ...$args)]; // Say what?
    }

    return $args[0];
  };
}

var compose = (...fns) =>
fns.reduceRight((prevFn, nextFn) =>
  (...args) => nextFn(prevFn(...args)),
  value => value
);


function mapping(f) {
  return function(rf) {
    return (acc, val) => {
      return rf(acc, f(val));
    }
  }
}

var ar74 = [0,1,2,3,4,5,6,7,8,9];

var mapWRf = mapping(cube);
mapRes = ar74.reduce(mapWRf(concat), []);
console.log("mapRes is", mapRes);

function filtering(p) {
  return function(rf) {
    return (acc, val) => {
      return p(val) ? rf(acc, val) : acc;
    };
  };
};
var add = (a,b) => a + b;

var filterWRf = filtering(isOdd);
var filterRes = ar74.reduce(filterWRf(concat), []);
console.log(filterRes);

var transformFR = compose(filtering(isOdd), mapping(cube));
var transformFRRes = ar74.reduce(transformFR(concat), []);
console.log("transformFRRes", transformFRRes);
var abc = ar74.reduce(transformFR(add));
console.log("abc", abc);

var isEven = x => x % 2 === 0;
var not = x => !x;
var isOdd2 = compose(not, isEven);

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
var filter = p => ar => ar.filter(p);
var reduce = f => ar => v => ar.reduce(f,v)
function apply(x, f) {return f(x);}
function concat(xs, val) {return xs.concat(val);}

/* var transduce = curry((step, initial, xform, foldable) =>
  foldable.reduce(xform(step), initial)
); */



var EventEmitter, pipeline, hold;
var ASQ;
var __cow__ = 0;

var slice = function slice (ar) {
    return (a,b) => ar.slice(a,b)
};

var ar = [1,2,3,4,5,6,7,8,9];
console.log('slice(ar)(3,7)', slice(ar)(3,7));

var f_86 = v => t => {
    var ar97 = [v];
    t.map(g => ar97.push(v=g(v)));
    return ar97
};

var foo = x => f_86(x)([v=>v**3, v=>v+x, v=>v**2,
  v=>v**(1/4),v=>v-x,v=>Math.round(v**(1/3))]);

var branch  = function branch (o) {
    var z = Compose(o.ar);
    var e = z.ar.pop();
    return {ar: z.ar, run: z.run(e)};
};

var obbb0 = Compose([7, 11]);
var obbb1 = Compose([7, 11]);
var obbb2 = Compose([7, 11]);
var obbb3 = Compose([7, 11]);
var obbb4 = Compose([7, 11]);
var obbb5 = Compose([7, 11]);
var obbb6 = Compose([7, 11]);
var obbb7 = Compose([7, 11]);
var obbb8 = Compose([7, 11]);
var obbb9 = Compose([7, 11]);
var obbb10 = Compose([7, 11]);
var obbb11 = Compose([7, 11]);
var obbb12 = Compose([7, 11]);
var obbb13 = Compose([7, 11]);
var obbb14 = Compose([7, 11]);
var obbb15 = Compose([7, 11]);

var obb0 = Compose();
var obb1 = Compose();
var obb2 = Compose();
var obb3 = Compose();
var obb4 = Compose();
var obb5 = Compose();
var obb6 = Compose();
var obb7 = Compose();
var obb8 = Compose();
var obb9 = Compose();
var obb10 = Compose();
var obb11 = Compose();
var obb12 = Compose();
var obb13 = Compose();
var obb14 = Compose();
var obb15 = Compose();
var obb16 = Compose();
var _m44_ = "ready";
var it7_bbb = function () {};
var it7_b = function () {};
var bNode;

var clone = function deepClone (obj) {
	   obj.__proto__.obj = obj;
	   var o = JSON.parse(JSON.stringify(obj));
	   var o2 = JSON.parse(JSON.stringify(o.__proto__.obj))
	      // o2 has deep-cloned attributes belonging to obj
	   var o3 = Object.assign({}, o.__proto__.obj);
	      // o3 has cloned shallow methods belonging to obj
	   return Object.assign({}, o3, o2);
	      // first assign
}

var observable = (object, onChange) => {
	const handler = {
		get(target, property, receiver) {
			try {
	  			return new Proxy(target[property], handler);
			} catch (err) {
				return Reflect.get(target, property, receiver);
			}
		},
		defineProperty(target, property, descriptor) {
			onChange();
			return Reflect.defineProperty(target, property, descriptor);
		},
		deleteProperty(target, property) {
			onChange();
			return Reflect.deleteProperty(target, property);
		}
	};

	return new Proxy(object, handler);
};

const Ret = (a=0, b='R') => this[b] = new Monad(a,b);


var Monad = function Monad (z = 42, g = 'generic') {
    this.x = z;
    this.id = g;
    this.bnd = function (func, ...args) {
        var m;
        if (typeof func === "function") {
            m = func(this.x, ...args)
            if (m instanceof Monad) m = m.x;
        }
        else m = func;
        this.x = m;
        return this;
       // return window[this.id] = new Monad(m,this.id);
    };
    this.ret = function (a) {
        this.x = a;
        return this;
    //  return window[this.id] = new Monad(a,this.id);
    };
};
/*
var Monad = function Monad(z = 42, g = 'ID') {
    this.x = z;
    this.id = g;
    this.bnd = function (func, ...args) {
        var m;
        var res;
        if (typeof func === "function") {
            m = func(this.x, ...args)
            if (m instanceof Monad) res = m.x
            else res = m;
            console.log("1**************************** res: \n ", res);
        }
        else res = func;
      console.log("2**************************** res: \n ", res);
        return this[this.id] = new Monad(res, this.id);
    };
    this.ret = function (a) {
      return this[this.id] = new Monad(a,this.id);
    };
};
*/

  function testPrefix (x,y) {
    var t = y;
    var s;
    if (Array.isArray(x)) {
      x.some(v => {
        if (typeof v === 'string' && v.charAt() === '$') {
           t = v.slice(1, v.length);
        }
      })
    }
    return t;
  }


var h = console.log;
var a;

var qfB_proxy;
var Maybe;
var compose;
var window = {};

function autoRefresh(obj) {
    const handler = {
        set (obj, prop, value) {
            diffRender();  // Forces DOM update
            return Reflect.set(obj, prop, value);
        },
    };
    return new Proxy(obj, handler);
}

function Bind(str, bool = false) {
    arBind[str] = [];
    if (bool) arBind[str] = autoRefresh(arBind[str]);
    var p;
    var _bind = function _bind(x) {
        if (x instanceof Promise) x.then(y => {
            arBind[str].push(y);
        })
        else {
            arBind[str].push(x)
        //    diffRender();
        }
        return func => {
            if (func == undefined) return arBind[str];
            if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return _bind(p);
        };
    };
    return _bind;
};
function Bind2() {
    this.arB = [];
    return _bind2 = x => {
        return func => {
        	   var p;
            if (func == '_end_') console.log(`done ${arB.join(', ')}`)
            else if (x instanceof Promise) x.then(v => p = func(v))
            else if (typeof func !== "function") p = func
            else p = func(x);
            console.log("p is", p, "arB is", arB);
            arB.push(p);
            return _bind2(p);
        };
    };
};

/*
function Bind3() {
    this.arB = [];
    return _bind3 = x => {
        if (x instanceof Promise) x.then(y => {
            arB.push(y); console.log(arB);
        })
        else {
            arB.push(x); console.log(arB);
        //    diffRender();
        }
        return func => {
            var p;
            if (func == "stop") return arB;
            if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return _bind3(p);
        };
    };
};

 Bind3()(idP(7))(cubeP)(x=>idP(1*x+arB[0]))(squareP)(() => idP(arB[2]**3))(x=>idP(x/arB[3]))(x=>idP(x-arB[1]))('stop')



function Bind(str) {
    arBind[str] = [];
    var p;
    var _bind = function _bind(x) {
        if (x instanceof Promise) x.then(y => arBind[str].push(y);
        else arBind[str].push(x);
        return func => {
            if (func == undefined) return arBind[str];
            if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return _bind(p);
        };
    };
    return _bind;
};
*/

console.log('Cow1', Cow1);
console.log('Cow2', Cow2);

var factorial = function(n) {
    if(n >1)  return n * factorial(n - 1);
}

function cloneOb (o) {return JSON.parse(JSON.stringify(o))};

var head = function head([ a, ...b ]) {
  return a;
}

var diffRender = function () {return 8};   // See document.onload in maim

function change () {return 8};

var arBind = [];

function getX () {
    var x = Math.random();
    while (arBind[x] != undefined) {
        x += Math.random();
    };
    return x;
}

var makeBind = () => {
    var x = 1;
    while (arBind[x] != undefined) {x+=1};
    return {a:x, b:Bind(x)};
}

var mkBind = () => {
  var x = 1;
  while (arBind[x] != undefined) {x+=1};
  var f = Bind(x);
  return {ar:arBind[x], run:f};
};

// *****************************************************************
const _bd = x => {
    var x = x;
    return function (func) {
        if (typeof func !== "function") x = func;
        if (func = null) return [x];
        if (x instanceof Promise) _bd(x.then(v => func(v)));
        else _bd(func(x));
    }
};

function getAr (o) {return arBind[o.a]};

function mapToInt (ar) {ar.map(e => toInt(e))};


// import {h, p, span, h1, h2, h3, pre, br, div, label, input, hr, makeDOMDriver} from '@cycle/dom';

var qFormula = function qFormula () {};
var qFunc = function qFunc () {};
var Cow = "0";
var Cow1 = "1";
var Cow2 = "";
var Cow3 = "3";
var Cow4 = "4";
var Cow5 = "5";
var Cow6 = "6";
var Cow7 = "7";
var Cow8 = "8";
var Cow9 = "9";
var qF1$, qF2$, qF3$, oneAction$, twoAction$, threeAction$;
var qRes1 = qRes2 = qResult1 = qResult2 = qR1 = qR2 = ["ready"];
var aa, bb;
var qR = ["flowers"];
var qCow;
var it7;
var it7_b;
var it7_c;
var COW = "ready";
var COW1 = "ready";
var COW2 = "ready";
var COW3 = "ready";
var COW4 = "ready";
var COW5 = "ready";
var COW6 = "ready";
var COW7 = "ready";
var COW8 = "ready";
var COW9 = "ready";
var tiger = "ready";
var ws;
var bxA1=0, bxA2=0, bxA3=0, bxA4=0, bxA5=0, bxA6=0, bxA7=0, bxA8=0, bxA9=0;
var tempName = "Jim";
var mMindexDS = new Monad (0,'mMindexDS');
var socket = {send: x => x};
var sock;
var pName;
var pigText = 888;



// ******************************************** Number parsing and list generation START
var _convert_ = a => b => parseInt(b,a);
var toInt = _convert_ (10);
var toHex = _convert_ (6);

var _conveNt_ = a => b => parseFloat(b,a);
var toFloat = _conveNt_ (10);

function intArray (n) {
  return [...Array(n).keys()];
}

console.log(intArray(7))   // [1,2,3,4,5,6,7]

// ******************************************** Number parsing and list generation END



num9 = 0;
  function test9 () {
    test5(-4);
    setTimeout(() => {test5(-4); test5(-4)},1600)
  }

  function bindTest  () {
  test5(-4);
  setTimeout(() => {test5(-4)},6000)
};

  function rett (x, id="default") {return new Monad(x,id)};

  var rADS = [];

  var roadFunc;
  var nameMess = '';

  var roadAr = [];

  function intersect (array1, array2)  {
    var intersection = array1.filter(n => array2.indexOf(n) !== -1)
  };


  var topPrime = 2;
  var topP = 2;
  var pS = [2];
  var fS = [2]
  var pFS = [2];

  var primeState = [2];
  var primeState2 = [2];
  var fibState = [0,1];
  var prFibState = [2];

  var wolf = 223;
  // console.log('h is', h, 'PLOWAZUPI!');

  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  var S7;
  var store;
  var cow19 = 0


  var counter;

  function counter (n, acc = 0) {
    return n === 0 ? acc : counter(n - 1, acc + 1)
  }

  exports = counter

  var ping43 = {style: {display: "inline"}};
  var ping44 = {style: {display: "inline"}};
  var ping45 = {style: {display: "inline"}};
  var ping46 = {style: {display: "inline"}};
  var ping47 = {style: {display: "inline"}};
  var ping48 = {style: {display: "inline"}};
  var ping49 = {style: {display: "inline"}};
  var ping50 = {style: {display: "inline"}};
  var ping51 = {style: {display: "inline"}};
  var ping52 = {style: {display: "inline"}};

  var worker = new Worker("worker.js");
  var workerB = new Worker("workerB.js");
  var workerC = new Worker("workerC.js");
  var workerD = new Worker("workerD.js");
  var workerE = new Worker("workerE.js");
  var workerF = new Worker("workerF.js");
  var workerG = new Worker("workerG.js");
  var workerH = new Worker("workerH.js");
  var workerI = new Worker("workerI.js");
  var workerJ = new Worker("workerJ.js");
  var workerK = new Worker("workerK.js");
  var workerL = new Worker("workerL.js");
  var workerM = new Worker("workerM.js");
  var workerN = new Worker("workerN.js");
  var workerO = new Worker("workerO.js");

  var m42_ = ['ready'];
  var m43_ = ['ready'];

  var PING_A;
  var PING_B;
  var PING_C;
  var pp4;
  var pingDisplay;
  var pingCompute;

  var m67_RESULT = "pending"
  var m68_RESULT = "pending"
  var m69_RESULT = "pending"
  var PingpongMaker;

  var png = 'ding';
  var _SCORE_ = [0,0];
  var _ar_ = [];
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
  var cow = 0;
  var fredButton;
  var diffR;
  var freday = ["waiting"];
  const messages = [];
  var buttonNode;
  var stat;
  var solo = "solo";
  var RESULT_BINDA = [];
  var RESULT_BIND = [];
  var gameData = "nobody 0 | 0 \njudy 0 | 0"
  var O = {ar: []};


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
  var m38 = new Monad(0, 'm38');
  var stateArray = [];
  var nl = '\n';
  var blue = {style: {color: "#96f9ff"}}
  var bigBlue = {style: {color: "#96f9ff",fontSize: "17"}}
  var bigGold = {style: {color: "#FFD700",fontSize: "17"}}
  var mediumGold = {style: {color: "#FFD700",fontSize: "15"}}
  var smG = {style: {color: "#FFD700",fontSize: "13"}}
  var medG = {style: {color: "#FFD700",fontSize: "15"}}
  var h3Simulation = {style: {color: "#FFD700",fontSize: "22"}}

  var pingL = ar => ar.filter(v => v === true).length;
  var pongL = ar => ar.filter(v => v === false).lengt;


  var ppR = {style: {color: 'red',
    marginLeft: '5%', fontSize: "26"}};
  var ppY = {style: {color: 'yellow',
    marginLeft: '42%', fontSize: "26"}};
  var ppRY = {style: {color: 'yellow',
    marginLeft: '5%', fontSize: "26"}};
  var ppYR = {style: {color: 'red',
    marginLeft: '42%', fontSize: "26"}};

  var _A1 = {style: {color: 'red',
    marginLeft: '5%', fontSize: "26"}};
  var _A2 = {style: {color: 'yellow',
    marginLeft: '5%', fontSize: "26"}};
  var _A3 = {style: {display: 'none'}};

  var pingScore = [0,0];

  var _A4 = (pingScore[0] < pingScore[1]) ? _A2 : _A1

  var ppStyle = false;

  var pingScore2 = [0,0];
  var pingScore3 = [0,0];
  var pingScore4 = [0,0];
  var pingScore5 = [0,0];
  var pingScore6 = [0,0];
  var pingScore7 = [0,0];
  var pingScore8 = [0,0];
  var pingScore9 = [0,0];

  var pingBool = false;

  var pingScr = [0,0];
  var pingScr1 = [0,0];
  var pingScr2 = [0,0];
  var pingScr3 = [0,0];
  var pingScr4 = [0,0];
  var pingScr5 = [0,0];


  var bluetao = {style: {color: "#96f9ff", marginLeft: "3%"}}
  var diffRend = 0;
  var mMt32 = new Monad(0,'mMt32');
  var mMt33 = new Monad(0,'mMt33');
  var playerName = "nobody";
  var playerGroup = "solo"
  var workerH$;
  var dRes;
  var m42_RESULT7 = "ready"

    var runTestResult = [['ready'], 'ready'];

    function demoFunc(x) {
      return foo(x)(v=>v+2)(v=>v*v*v)
      (v=>v+3)(v=>v*a.arfoo[1])
      (z=>z/a.arfoo[3] - 2)()
    };

    function runTest(x) {
      a.arfoo = [];
      var u = demoFunc(x);
      return [u, u === a.arfoo]
    }

  function add3 (a,b,c) {return a+b+c};
  function mult2 (a,b) {return a*b};

  var workerG$;
  var workerH$;
  var workerL$;
  var workerM$;
  var workerN$;
  var workerO$;


  const orange = {style: {color: "#f98043"}}
  const orangeIndent7 = {style: {color: "#f98043", marginLeft: "7%", fontSize: "20px"}}
  const purple = {style: {color: "#ff9bf8"}}
  const orangetao = {style: {color: "#f98043", marginLeft: "3%"}}
  const red = {style: {color: "#ff5b5b"}}
  const bigRed = {style: {color: "#ff5b5b", fontSize: "17"}}
  var bigOrange = styleFunc(["#f98043",,"19px",,,"left"]);
  const giantRed = {style: {color: "#ff5b5b", fontSize: "21"}}
  const littleRed = {style: {color: "#ff5b5b", fontSize: "10"}}
  const redtao = {style: {color: "#ff5b5b", marginLeft: "3%"}}
  const green = {style: {color: "#7fffb4"}}
  const bigGreen = {style: {color: "#7fffb4", fontSize: "17"}}
  const giantGreen = {style: {color: "#7fffb4", fontSize: "20"}}
  const littleGreen = {style: {color: "#7fffb4", fontSize: "13"}}
  const greentao = {style: {color:"#7fffb4", marginLeft: "3%"}}
  const italic = {style: {fontStyle: "italic"}}
  const center = {style: {textAlign: "center", float: "center"}}
  const italicRed = {style: {fontStyle: "italic", color: "#ff5b5b"}}
  const italicYellow = {style: {fontStyle: "italic", color: "#fbfca9"}}


  function styleFunc ([
    color = '#361B01', // 1
    marginLeft = '0px',
    fontSize = '15px',
    fontStyle = 'normal',
    width = '100%', // 4
    textAlign = 'left',
    marginRight = '0px',
    position = 'relative', //7
    right = '0%'  /* 8  */           ]) {
      return {style:{
        color: color,
        marginLeft: marginLeft,
        fontSize: fontSize,
        fontStyle: fontStyle,
        width: width,
        textAlign: textAlign,
        marginRight: marginRight,
        position: position,
        right: right
      }}
  };



  const italicOrange = {style: {fontStyle: "italic", color: "#96f9ff"}}

  const retern = x => y => window[y] = new Monad(x,y);

  const parseIntC = a => b => parseInt(b,a)
  const pInt = parseIntC(10) //  useful function

  var RESULT_8 = [];

  asyncArray = [];

      var res8_SHOW = {style: {fontSize: "13px", color: "rgb(127, 255, 180)", display: "inline"}}
      var res8_HIDE = {style: {fontSize: "13px", color: "rgb(127, 255, 180)", display: "none"}}
      var res8_Style = res8_SHOW;

  var format = b => {b instanceof Promise ?
    b.then(c => {console.log(c); return c}) : console.log(b); return b   };

  var format2 = b => { var a = new Date(); (b.then) ?
    b.then(c => (new Date() - a) + ': ' + c): (Date() - a) + ": " + b};

  var m778_RESULT;
  var m42_RESULT = [];
  var m42_RES = [];
  var m42_R = "";
  var m42_RESULT2 = [];

  var m778_b_RESULT;
  var m43_RESULT = [];
  var m43_RES = [];
  var m3_R = "";
  var m43_RESULT2 = [];

  function makeSequence (n) {
    var a=[];
    var b=n;
    while (b--) a[b] = b+1;
    return a
  }

  // const diffRender = () => document.getElementById('diffRender').click();

  const fredFunc =  a => {freday = a};

  var tr = x => p => async f => {
    return await f(await p(x))
  }

  var tr2 = p => async f => {
    return await f(await p(x))
  }
  var terminate = null;

  console.log(makeSequence(5))

  var arf = async p => {
    var jim = await p;
    console.log('arf',jim)
    return jim                     ;
  };
/*
    function Monad(z = 'default', ID = 'tempMonad') {
      this.x = z;
      this.id = ID;
    };

   Monad.prototype.bnd = function (func, ...args) {
      var _this = this;
      var m = "cows";
      if (func instanceof Promise) {
        func.then(v => m = v);
      }
      var ID;
      if (func(x, ...args) instanceof Monad) {
        ID = testPrefix(args, this.id);
        _this[ID] = new Monad(m.x, ID);
        return _this[ID];
      }
      else return m;
    };

    Monad.prototype.ret = function (a) {
      return window[this.id] = new Monad(a, this.id);
    };

    Monad.prototype.getVal = async function fg (f) {
      this.ret(await(f));
    };
*/

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

    function Monad2(z = 0) {
      this.x = z;
    };

    Monad2.prototype.ret = a => new Monad2(a);
    Monad2.prototype.bnd = function (func, ...args) {
      return func(this.x, ...args)
    }

  var m52 = new Monad2 (52);
  console.log('m52',m52);

  function testProm(f,v,args) {
    if (f(v,...args) instanceof Promise) return true;
    else return false;
  }

  const wait2 = x => {
    setTimeout( function (x) {return x},2000 )
  }

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

  var m42_RESULT3 = []

  var mMZ60 = new MonadItter();
  /*
  var bindEmitter = new EventEmitter();
  bindEmitter.on(123,v => console.log('My',v));
  bindEmitter.emit(123,"personal pie in the sky");
  */

  var mM40 = new Monad([], 'mM40');
  var RESULT_bind = [];

  var O_001 = {ar: []};
  var O_002 = {ar: []};
  var O_003 = {ar: []};
  var O_004 = {ar: []};


  /*function bind (x, ar=[]) {
    var ar = ar;
    if (ar.length === 0) ar = [x];
    if (x instanceof Promise) x.then(y => ar.push(y));
    else ar.push(x)
    return function debug8 (func) {
      if (func.name === "terminate") return ar;
      var p;
      if (x instanceof Promise) {
        p = x.then(v => func(v));
      }
      else p = func(x);
      return bind(p, ar);
    };
  }; */

//"************************************************************************************"

//*************************************************************************

    function Bd () {
        var p = 8888;
        var _bind = p => func => {
            if (func == undefined) return [p];
            if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
        };
        _bind(p);
     };

    var bnD = Bd();
console.log("bnD is", bnD);
  /*
  function makeBind (x)  {
    this.x = x;
    console.log("x is",x);
    if (arBind[x] !== undefined) {
           makeBind(x+1);
      }
    window["B"+x] = {a:this.x, b:Bind("B"+x)};
    return window["B"+x];
  }

  function makeBind (x)  {
    if (arBind[x] !== undefined) {
           makeBind(x+1);
      }
    return {a:x, b: Bind(x)};
  }

  // var xyz = {a:7, b:function (d) {return d}};

  var c = makeBind();
  var h = c.b(4)(x=>x**3)(x=>x+arBind[c.a][0])(cubeP)()
  console.log("h is", h)

  var bind$ = n => xs.of(n);

  function bindDriver () {
    return xs.create({
      start: listener => { bind$ = a => listener.next(a) },
      stop: () => {}
    })
  };

  var bind1 = Bind("bind1");
  var bind2 = Bind("bind2");
  var bind3 = Bind("bind3");
  var bind4 = Bind("bind4");
  var bind5 = Bind("bind5");
  var bind6 = Bind("bind6");
  var bind7 = Bind("bind7");
  var bind8 = Bind("bind8");
  var bind9 = Bind("bind9");
  /*

var b0 = () => a.arbind;
var b3 = () => a.arbind3;
var bindArr = Bind("bindoArr")([]);
var bindOb = Bind("bindoOb")({ar: []});


var aBind = [];
var bBind = [];
var cBind = [];
var dBind = [];

function barfly (x) {
  var foo = x;
  return function farfly () {
    foo+=1;
    if (foo < 5) return barfly(foo); else console.log('foo is',foo)
  }
}
/*
  var makeBind = name => x => {
    var x = x;
    var ar = [];
    var name = name;
    var bin = () => {
      if (x instanceof Promise) x.then(y => ar.push(y));
      else ar.push(x)
      return function debug8 (func) {
        if (func.name === "terminate") return ar;
        name = ar;
        if (x instanceof Promise) {
          x = x.then(v => func(v));
          name = ar;
        }
        else x = func(x);
        return bin();
      };
    };
    return bin;
  };

  function binda (x, ar=[], str="susan", name ) {
    this[str] = ar;
    window[name] = name;
    var that = this;
    diffRender();
    this[str] = ar;
    if (x instanceof Promise) x.then(y => this[str].push(y));
    else this[str].push(x)
    return function debug8 (func) {
      if (func.name === "terminate") return this[str];
      var p;
      if (x instanceof Promise) {
        console.log("that === this,that, this",that===this,that,this);
        p = x.then(v => func(v));
        window[name] = this[str];
      }
      else {
        p = func(x);
        window[name] = this[str];
      };
      return binda(p, this[str]);
    };
  };
  */
  var logger = () => {console.log('(*)(*)(*)', arm ); return x};

  var runDemo = n => {
    bind2(n)(cubeP)(addP(3))(a=>a+arm[0]+arm[1]-18)
    (multP(1/3))(addP(-11))(()=>arm[1]+arm[2]+arm[3])();
    diffRender();
  }


  function bindEmitterDriver () {
    return xs.create({
      start: listener => { bindEmitter.on = msg => listener.next(msg)},
      stop: () => { bindEmitter.removeAllListeners() }
    });
  };

  var bindAr$ = ar => xs.of(ar);
  /*
  function bind (x, ar=[]) {
    var ar = ar;
    if (ar.length === 0) ar = [x];
    if (x instanceof Promise) x.then(y => ar.push(y));
    else ar.push(x)
    return function debug8 (func) {
      if (func.name === "terminate") return ar;
      var p;
      if (x instanceof Promise) {
        p = x.then(v => func(v));
      }
      else p = func(x);
      return bind(p, ar);
    };
  };
  */
  function Driver () {
    return xs.create({
      start: listener => { freddy$ = k => listener.next(k)},
      stop: () => {}
    })
  };

  var it4 = x => {
    if (socket.readyState === 1) socket.send(`BC#$42,${pMgroup.x},${pMname.x},${x}`);
  }

  var it4_b = x => {
    if (socket.readyState === 1) socket.send(`BD#$42,${pMgroup.x},${pMname.x},${x}`);
  }

  var it4_c = x => {
    if (socket.readyState === 1) socket.send(`BE#$42,${pMgroup.x},${pMname.x},${x}`);
  }

  var it4_d = x => {
    if (socket.readyState === 1) socket.send(`BE#$42,${pMgroup.x},${pMname.x},${x}`);
  }

  var wH$ = sources.WWH();
  var worker$ = sources.WWH();

  worker$._ils = [2];

  var it6 = y => {
    mMZ40.bnd(y => workerH.postMessage([primeState, y]));
  }

  var it6_b = y => {
    mMZ41.bnd(y => workerM.postMessage([primeState, y]));
  }

  var it6_d = y => {
  console.log('<$><$><$><$>$$>>> In it6_d sending package to worker O ***** SEE ME!!! ');
    mMZ61.bnd(y => workerO.postMessage([primeState, y]));
  }

  var it6_c = y => {
    mMZ42.bnd(y => workerL.postMessage([primeState, y]));
}

var callOrder = 0;
var callOrder2 = 0;
var start77;
var start78;
var start79;
var m42_;
var m43_;
var m44_ = "ready";
var m45_ = "ready";
var f23 = n => "Howdy Doody";
var f27;
/*
var it7 = () => mMZ52.bnd(string => {
  callOrder = callOrder > 24 ? 1 : callOrder + 1;
  if (callOrder === 1) start77 = Date.now();
  m42_.push(callOrder + "  ");
  m42_.push(string)
  m42_.push(h('br'));
  if (callOrder === 25) m42_.push('Elapsed time: ' + (Date.now() - start77) + " ms");
});
*/
var RESULT_7 = [];

var it8 = x => {
  workerH.postMessage([primesMonad.s, [x]]);
}

//var m42_RESULT3 = [];
//m42_RESULT3 = m42_RESULT3.concat(h('div', [h('p', orange, RESULT_7.text).concat(h('br'))]

var RESULT_6 = ""
var ar7 = [];

  //'The prime factors of ' + v[0] + ' are ' + v[1]);
const prm4 = x => {
  if (socket.readyState === 1) socket.send('BB#$42,pMgroup,pMname,' + x);
  return new Promise( (resolve, reject) => {
     mMZ37.bnd((y) => {
       resolve(ret(y));
     })
  })
}

const prm6 = x => {
  workerG.postMessage([primesMonad.s, [x]]);
  return "Done"
}

const prm7_b = x => {
  workerL.postMessage([primesMonad.s, [x]]);
  return "Done"
}


 async function trylock () {
   await wait(1000);
   if (this.lock === true) {
     return trylock()
   }
   else { this.lock = true }
  };

function ret (val = 0) {
  return new Monad2(val);
}

function retLegacy (val = 0, id = "retDefault") {
  return window[id] = new Monad(val, id);
}

function ret_2 (val = 0, id = "retDefault") {
  return window[id] = new Monad2(val, id);
}

function id (x) {return x}

  function square (v) {
    return ret(v*v)
  };


  function cube (v, id) {
    return ret(v*v*v, id);
  };

  function add (a, b, id) {
    return ret((parseInt(a,10) + parseInt(b,10)),id);
  };

  const divCinverse = a => b => e/b;
  const divC = a => b => b/a;
  const addC = a => b => a+b;
  const cubeC = v => v*v*v;
  const idC = v => v;
  const multC = a => b => a*b;
  const doubleC = a => a+a;
  const squareC = a => a*a;
  const sqrtC = a => Math.sqrt(a);

  const divAinverse = a => b => e/b;
  const divA = a => b => b/a;
  const addA = a => b => a+b;
  const cubeA = v => v*v*v;
  const idA = v => v;
  const multA = a => b => a*b;
  const doubleA = a => a+a;
  const squareA = a => a*a;
  const sqrtA = a => Math.sqrt(a);

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

  var m777 = ret(function() {},'m777');
  var m778 = ret(function() {},'m778');
  var m779 = ret(function() {},'m779');
  var m778 = ret(function() {},'m778');
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
  var mM40 = M(0, 'mM40');
  var mM41 = M(0, 'mM41');
  var mM42 = M(0, 'mM42');
  var mM43 = M({}, 'mM43');
  var mM44 = M({}, 'mM44');
  var mM45 = M(3, 'mM45');
  var mM46 = M('', 'mM46');
  var mM47 = M('', 'mM47');
  var mM48 = M(0, 'mM48');
  var mM49 = M(0, 'mM49');
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
  var mMfoo = new Monad([], 'mMfoo');
  var mMbar = new Monad([], 'mMbar');

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
const pop = ar => ret(ar.pop())

const prm5 = x => {
  return new Promise( (resolve, reject) => {
     mMZ39.bnd((y) => resolve(y))
  }).then(workerC.postMessage([primesMonad.s, [x]]));
}

var fx = async () => {await ar[1].then(x => m779.ret(x)); return m779.x}

var LARGEST = 0;

// var ar = [function () {}];

const largest = x => ( () => x + " is the largest prime factor of " + ar[0]);

const factorsF = x => ( () => "the prime factors of " + ar[1] + " are " + x);

const Chan = {};

function makeChan (e) {
    window[e] = {
        p: function () {},
        release: function () {
            return this.p.apply(this, arguments);
        },
        bnd: function (func) {
            return this.p = func;
        },
        ar: []
    };
    return window[e]
  }

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
  var mMZ40 = MI();
  var mMZ41 = MI();
  var mMZ42 = MI();
  var mMZ43 = MI();
  var mMZ44 = MI();
  var mMZ45 = MI();
  var mMZ46 = MI();
  var mMZ47 = MI();
  var mMZ48 = MI();
  var mMZ49 = MI();
  var mMZ50 = MI();
  var mMZ51 = MI();
  var mMZ52 = MI();
  var mMZ53 = MI();
  var mMZ54 = MI();
  var mMZ55 = MI();
  var mMZ56 = MI();
  var mMZ57 = MI();
  var mMZ58 = MI();
  var mMZ59 = MI();
  var mMZ60 = MI();
  var mMZ61 = MI();
  var mMZ62 = MI();
  var mMZ63 = MI();
  var mMZ64 = MI();
  var mMZ65 = MI();
  var mMZ66 = MI();
  var mMZ67 = MI();
  var mMZ68 = MI();
  var mMZ69 = MI();
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

function shorten (ar) {
  if (ar.length > 0) ar.length = ar.length - 1};

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

var ranOdd = n => m => {
  return Array.from(new Array((Math.floor(m/2 + 2)) - n), function (x, i) { return 2*i + n; });
}

var rangOdd = ranOdd(1);

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

var toFloat2 = function toFloat2(x) {
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

   var cloneAr = function clone(x) {
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

function fact2(s, b) {
  var ar = [];
  var n = b;
  while (n != 1) {
    s.map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
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
  var ar= [];
  var r;
  var c = cx.slice();
  var d = dx.slice();
  d.map(v => {
    if (c.some(x => x === v)) {
      ar.push(v)
      c.splice(c.indexOf(v),1)
      d.splice(d.indexOf(v),1)
    }
      r = ar.concat(d).concat(c).reduce(function (a,b) {return a*b})
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
    factors2[1].length = n;
    result = new MonadState('decompMonad', [n+1, factors2[1], factors.length+1, factors]);
  }
  if (n-1 > d) {
    while (d < n) {
      k = d;
      while (k != 1) {
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

var fillMonad = new Monad('blue', 'fillMonad');
var stroke1Monad = new Monad('green', 'stroke1Monad');
var fill1Monad = new Monad('blue', 'fill1Monad');

var stroke2Monad = new Monad('green', 'stroke2Monad');
var fill2Monad = new Monad('blue', 'fill2Monad');

var stroke3Monad = new Monad('green', 'stroke3Monad');
var fill3Monad = new Monad('blue', 'fill3Monad');

var gri, grid, grid1, grid2, grid3, grid4;

var f0 = "1";
var f1 = "2";
var f2 = "3";
var f3 = "4";
var f4 = "1";
var f5 = "2";
var f6 = "3";
var f7 = "4";
sBool = true;

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
  var r = a*b;
  var a2 = a;
  var b2 = b;
  while (b % a !== 0) {
    let z = a;
    a = b % a;
    b = z;
  }
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

/*
var num0 = 0;
var num1 = 1;
var num2 = 2;
var num3 = 3;

var rNum = [1,2,3,4]

  var rNode = [
    h('button#r0', rNum[0] ),
    h('button#r1', rNun[1] ),
    h('button#r2', rNum[2] ),
    h('button#r3', rNum[3] )
  ];

var rN = [rNum[0],rNum[1],rNum[2],rNum[3]];

function bRoad (n,k,arr) {
  var r = arr.slice();
  var a = r[n];
  r[n] = r[k];
  r[k] = a;
  return a;
}

function makeRDS (arr) {
  var r = arr.slice();
  return [
    h('button#r0', r[0] ), h('button#r1', r[1] ),
    h('button#r2', r[2] ), h('button#r3', r[3] )
  ];
};

rNode = makeRDS ( bRoad(0,3,rN )

*/






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

function score(result) {
    var sc = parseInt(gameMonad.fetch0());
    var sco = result === 18 ? sc + 3 : sc + 1;
    var scor = sco % 5 === 0 ? sco + 5 : sco;
    var goals = gameMonad.fetch1();
    if (scor === 25 && gameMonad.fetch1() === "2") {
        mMindex.ret(0);
        gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[0,0,0,0],,],[0,0,0,[][(0, 0, 0, 0)],,]],0]);
        socket.send(`CE#$42,${pMgroup.x},${pMname.x}`);
        newRoll(0,0);
    }
    else if (scor === 25) {
      newRoll(0, parseInt(goals,10) + 1);
    }
    else newRoll(scor, goals);
};

var gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[1,2,3,4],"nobody","solo"], [0,0,0,[],[0,0,0,0],"nobody","solo"]],1 ]);

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

MonadState.prototype.fetch5 = function () {
  return this.s[0][this.s[1]][5]
}

MonadState.prototype.fetch6 = function () {
  return this.s[0][this.s[1]][6]
}

function send (a,b) {
  var x = gameMonad.s[0][gameMonad.s[1]][5];
  var y = gameMonad.s[0][gameMonad.s[1]][6];
  socket.send(a + ',' + y + ',' + x + ',' + b)
}

MonadState.prototype.clearPicked = function () {
  var st = this.s.slice();
  st[0][st[1]][3] = [];
  st[1] += 1;
  st.splice(this.s[1]+1, 0, st[0]);
  return new MonadState('gameMonad', st);
}

function newRoll (a,b) {
  socket.send(`CA#$42,${pMgroup.x},${pMname.x},6,6,12,20,${a},${b}`);
}
function MonadState4(g, state) {
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

/*
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
*/
function monadConstructor (v,b) {
  var c = new MonadEmitter();
  c.x = v;
  c.id = b;
  c.bnd = function (func, ...args) {
    var m = func(c.x, ...args)
    var ID;
    if (m instanceof MonadEmitter) {
      ID = testPrefix(args, c.id);
      window[ID] = monadConstructor(m.x, ID);
      return window[ID];
    }
    else return m;
  }
  c.on(0, v => {
    return v
  });
  c.on(1, v => {
      var mon = monadConstructor(v, c.id);
      return window[c.id] = mon;
  })
  c.on(2, v => c.bnd(v))
  return c;
};

/*
var em = new EventEmitter;
var eventEmitter = new EventEmitter;
var em2 = new EventEmitter;
em2.on('42',x => console.log(x));

var producer = {
  start: function (listener) {
    em.emit('cow',45)
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
mMZ33.bnd(n => fn2(n));
*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/*function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}  */

function curryReverse(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args.reverse());
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

  var cRev = curryReverse(parseInt)(10);  // Useful function
  ["1","2","3","4","5"].map(v => cRev(v));  // returns [1,2,3,4,5]

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

function execP (state, num) {
  var x = state[2];
  var primes = state[3].slice();
  if (x < num) {
    primesMonad = new MonadState('primesMonad', state);
    primesIt = gen(primesMonad.s[2]+1);
    while (x < num) {
      primes.push(primesIt.next().value);
      x = primes[primes.length - 1];
    }
    return [x, primes, x, primes]
  }
  else {
    var number = primes.indexOf(num) + 1;
    var newP = primes.slice(number);
    return [newP[newP.length - 1], newP, x, primes];
  }
};

function execQ (prms, num) {
  var x = prms[prms.length - 1];
  var primes = prms.slice();
  if (x < num) {
    var end = 0;
    var xx = Math.sqrt(num + 1);
    var yy = Math.ceil(xx);
    while (end < yy) {
      primes.push(primesIt.next().value);
      end = primes[primes.length - 1];
    }
    return [end, primes, end, primes]
  }
  else {
    var number = primes.indexOf(num) + 1;
    var newP = primes.slice(number);
    return [newP[newP.length - 1], newP, x, primes];
  }
};

/*
function pfactors (primes, n) {
  var ar = [];
  while (n != 1) {
    primes.map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  }
  return ar;
}
*/
class Addable {
  [Symbol.for('+')] (other) {
    return // some computation which uses this and other
  }
}
/*
//****************************************************************** START MATRIX
var indexDS = 0;

function rMatrixF (a) {
  var cw1 = Math.sqrt(a[0]*a[5] + a[1]*a[4]);
  var cw2 = Math.sqrt(a[2]*a[7] + a[3]*a[6]);
  var cw3 = Math.sqrt(a[8]*a[13] + a[9]*a[12]);
  var cw4 = Math.sqrt(a[10]*a[15] + a[14]*a[11]);
  var cw = Math.sqrt(cw1*cw4 + cw2*cw3);
  return cw
}



var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var ArrDS = [ [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ];

function makeRDS (arr) {
  var r = arr;
  return [
    h('button#mR0.mR', r[0] ),
    h('button#mR1.mR', r[1] ),
    h('button#mR2.mR', r[2] ),
    h('button#mR3.mR', r[3] ),
    h('button#mR4.mR', r[4] ),
    h('button#mR5.mR', r[5] ),
    h('button#mR6.mR', r[6] ),
    h('button#mR7.mR', r[7] ),
    h('button#mR8.mR', r[8] ),
    h('button#mR9.mR', r[9] ),
    h('button#mR10.mR', r[10] ),
    h('button#mR11.mR', r[11] ),
    h('button#mR12.mR', r[12] ),
    h('button#mR13.mR', r[13] ),
    h('button#mR14.mR', r[14] ),
    h('button#mR15.mR', r[15] )
  ];
};

var rDataDS = [
  h('button#mR0.mR', 0 ),
  h('button#mR1.mR', 1 ),
  h('button#mR2.mR', 2 ),
  h('button#mR3.mR', 3 ),
  h('button#mR4.mR', 4 ),
  h('button#mR5.mR', 5 ),
  h('button#mR6.mR', 6 ),
  h('button#mR7.mR', 7 ),
  h('button#mR8.mR', 8 ),
  h('button#mR9.mR', 9 ),
  h('button#mR10.mR', 10 ),
  h('button#mR11.mR', 11 ),
  h('button#mR12.mR', 12 ),
  h('button#mR13.mR', 13 ),
  h('button#mR14.mR', 14 ),
  h('button#mR15.mR', 15 )
];

function rExchange (j, k, rN=rNumsDS, AR=ArrDS, rD = rDataDS, i = mMindexDS) {
  console.log("In rExchange i is", i);
  var r = rN;
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  console.log(r);
  var g = r.slice();
  AR.splice(i.x, 0, g);
  console.log(AR)
  rD = makeRDS(r);
  return rD;
}

var horseDS = rDataDS;
//****************************************************************** END MATRIX
*/
var rNuS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var rGrid$ = rNuS => xs.of(rNuS);

function gridDriver () {
  return xs.create({
    start: listener => { rGrid$ = ar => listener.next(ar)},
    stop: () => {}
  })
};

//  Highest possible number: 17.3
//  rNumsDS: 6, 9, 4, 11, 8, 7, 10, 5, 2, 13, 0, 15, 12, 3, 14, 1
//    rMatrixF(rNumsDS: 17.3160677686392

function rExDS ([, rN=rNumsDS, AR=ArrDS, rD = rDataDS, i = mMindexDS]) {
  console.log("In rExchange i is", i);
  var j = ar[0];
  var k = ar[1];
  var r = rN;
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  console.log(r);
  var g = r.slice();
  AR.splice(i.x, 0, g);
  console.log(AR)
  rD = makeRDS(r);
  return rD;
}


function rClick () {document.getElementById('rNums').click()};

var compose = (...fns) =>
fns.reduceRight((prevFn, nextFn) =>
  (...args) => nextFn(prevFn(...args)),
  value => value
);

var test_7 = compose(
val => { console.log(1, val); return val**2; },
val => { console.log(2, val); return val+=4; },
val => { console.log(3, val); return val*=2; }
);

console.log("test_7(3)");
console.log(test_7(3))
console.log("test_7(3)");


console.log(Math.random()*100000000000000000);

// var s = new Set();


function pr66 (x,p) {
  var ar = [];
  var primes = p.filter(p => (p < x));
  primes.map(e => {
    primes.map(p => {
    if ((p + e) == x && p < (x/2 + 1)) {ar.push([p,e])};
      })
  })
  return ar;
}

console.log(pr66(30,[2,3,5,7,11,13,17,19,23,29]).reverse().join("  "))

              var ar = [x=>x, x=>x**3, x=>x+3, x=>x**2, x=>x/300,x=>x*14]
               var f = v => t => t.map(g=>v=g(v))

               f(3)(ar)  //   [3, 27, 30, 900, 3, 42]

function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, 'constructor'
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, 'constructor', descriptor);
  return proxy;
}


var view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;

    // Indicate success
    return true;
  }
});


// test6(3);
// console.log("arBind.a11", arBind.a11, "_______________________-----__--------------------- digit");

// ************* CLOSURE Saves cache of Fibonacci numbers
console.log(" ************* CLOSURE Saves cache of Fibonacci numbers");

function fibb () {
	var fibs = [];
	var d;
	var a = 0;
	var b = 1;
	function f (n) {
  		if (a > n) {
  		    console.log("a > n");
  		    return fibs.filter(v => v <= n)
  	 };
		  while (a < n) {
	       fibs.push(a);
    	   d = a;
    	   a = b;
        b = d + b;
    }
    return fibs;
    }
    return f;
}
var fib = fibb();
console.log(fib(15));
console.log(fib(1000))
console.log(fib(15));

console.log(" ************* Closure test END");

// *************************************************** Observable

var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]

var foocow_0 = [];
var foocow_1 = [];
var foocow_2 = [];
var foocow_3 = [];
var foocow_4 = [];
var foocow_5 = [];
var foocow_6 = [];
var foocow_7 = [];
var foocow_8 = [];

function runFoo (n) {
    foocow_0 = foo(n+0);
    foocow_1 = foo(n+1);
    foocow_2 = foo(n+2);
    foocow_3 = foo(n+3);
    foocow_4 = foo(n+4);
    foocow_5 = foo(n+5);
    foocow_6 = foo(n+6);
    foocow_7 = foo(n+7);
    foocow_8 = foo(n+8);
}

runFoo(-4)

// ************************************** Proxy handler apply demo
console.log("************************************** Proxy handler apply demo");
var F_17 = '';
var F_18 = '';


function primeNums(n) {
  var store  = [], i, j, primes = [];
  for (i = 2; i <= n; ++i) {
    if (!store [i]) {
      primes.push(i);
      for (j = i << 1; j <= n; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}

function f17 (a, b=0, c=1, d=false) {return [a, c, b+c,d]};

var fibHandler = {
    apply: function(a, b, c) {
         var ax = a(...c)
         var arr = [0];
        while (ax[2] < ax[0]) { //"the fibonacci numbers up to " + c[2] + " are" + arr.join(', ');
            ax = a(...ax);
            arr.push(ax[1]);
        }
        if (c[3]) {
            var prms = primeNums(c[0]);
            var prmFibs = prms.filter(v => arr.includes(v));
            return `The prime Fibonacci numbers up to ${c[0]} are ${prmFibs.join(', ')}`;
        }
    return `The Fibonacci numbers up to ${ax[0]} are ${arr.join(', ')}`
    }
}

f17 = new Proxy(f17, fibHandler)
console.log(f(600));
console.log(f(600,0,1,true))







// *********************************************************** Ghost proxy
var proxyResult = 0;

var tail = function tail([ a, ...b ]) {
  return b;
}

// [1,2, ,,, n]
function intAr (n) {
     return tail([...Array(n+1).keys()]);
}

function intArray (n) {
     return [...Array(n+1).keys()].join(', ');
}

var factorial = n =>
    n <= 1 ? n : n * factorial(n - 1);

var _state_ = {attribute: 0};

function addOne () {this.attribute = this.attribute + 1}
function takeOne () {this.attribute = this.attribute - 1}

var handlerGet = {
    get: (a, b, c) => {
        if (b === "next") {addOne.apply(_state_); return _state_.attribute}
        else if (b === "previous") {takeOne.apply(_state_); return _state_.attribute}
        else if (b === "factorial") {return factorial(_state_.attribute)}
        else if (b === "primes") {return primeNums(_state_.attribute).join(', ')}
        else if (b === "ints") {return intArray(_state_.attribute)}
    }
}

const count = new Proxy ({}, handlerGet);

// ************************************************************ Spreadsheet


const _state = {a: 0, b: 0, sum: 0, prod: 0 }

function add_a () {this.a += 1}
function subtract_a () {this.a -= 1}

function add_b () {this.b += 1}
function subtract_b () {this.b -= 1}

function set_a (x) {this.a = x};
function set_b (z) {this.b = z};

function sum () {this.sum = this.a + this.b}
function prod () {this.prod = this.a * this.b}

function resetState () {this.a=0;this.b=0;this.sum=0;this.prod=0};

var handlerUpdate = {
    get: (a, b, c) => {
        if (b === "add_a") add_a.apply(_state)
        else if (b === "add_b") add_b.apply(_state)
        else if (b === "subtract_a") subtract_a.apply(_state)
        else if (b === "subtract_b") subtract_b.apply(_state)
        else if (b === "resetState") resetState.apply(_state)
        else if (b === "resetState") resetState.apply(_state)
        sum.apply(_state);
        prod.apply(_state);
        diffRender();
    }
}

const _count = new Proxy ({}, handlerUpdate);

console.log(`${_state.a} + ${_state.b} = ${_state.sum}`);
console.log(`${_state.a} * ${_state.b} = ${_state.prod}`);

console.log(_state.sum, _state.prod);

//***************************************************************** mBnd, test4, test5, test6

 function Bnd3 () {
    this.ar = [];
    this.run = x => {
        if (x instanceof Promise) x.then(y => this.ar.push(y))
        else this.ar.push(x);
        return func => {
            var p;
            if (func == 'stop') return this.ar;
            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return this.run(p);
        };
    };
};

function _Pipe () {var o = Object.create(Bnd3); o.__proto__(); return o;}

async function cubeQ (x) {
  await wait(3000)
  return x*x*x;
}

async function squareQ (x) {
  await wait(3000)
return x*x;
}

console.log("******************************** Start Compose Tests ******************************");

var incC = x => Math.sqrt(x.ar.pop())+1;
/*
var ob1 = Compose([2,4]);
ob1.run(fork(ob1))(x=>x*x);
console.log("ob1.ar is", ob1.ar);

var ob2 = Compose(ob1.ar);
ob2.run(fork(ob2))(incC(ob2))(x=>x*x);
console.log("ob2.ar is", ob2.ar)

var ob3 = Compose(ob2.ar);
ob3.run(fork(ob3))(incC(ob3))(x=>x*x);
console.log("ob3.ar is", ob3.ar)

var ob4= Compose(ob3.ar);
ob4.run(fork(ob4))(incC(ob4))(x=>x*x);
console.log("ob4.ar is", ob4.ar)

var ob5= Compose(ob4.ar);
ob5.run(fork(ob5))(incC(ob5))(x=>x*x);
console.log("ob5.ar is", ob5.ar)
*/
console.log("******************************** End Compose Tests ******************************");


Bnd5 = {
     ar: [],
     run: x => {
        if (x instanceof Promise) x.then(y => ar.push(y))
        else ar.push(x);
        return func => {
            var p;
            if (func == 'stop') return ar;
            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else if (func.constructor === Monad) p = func.x;
            else p = func(x);
            return run(p);
        };
    }
};

/*
 function Bnd3 () {
    this.ar = [];
    this.run = x => {
        if (x instanceof Promise) x.then(y => this.ar.push(y))
        else this.ar.push(x);
        return func => {
            var p;
            if (func == 'stop') return this.ar;
            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return this.run(p);
        };
    };
};
*/

function diffR (obj) {
    return obj = autoRefresh(obj)
};

var mBnd = (bool = false, val = "mBnd") => {
    var x = Symbol(val)      // "val" can be useful in debugging;
    var ob = {key: x, run: Bind(x)};
    arBind[ob.key] = (bool) ? diffR(arBind[ob.key]) : arBind[ob.key];
    return ob;
};

var _mBx = (bool) => {
    var ob = new Bnd3();
    ob.ar = (bool) ? autoRefresh(ob.ar) : ob.ar;
    return ob;
};

function test4 (w) {
    var f = Comp([w]);
    return f(cubeP)
    (x=>idP(x+f('stop')[0]))(squareP)(() => idP(f('stop')[2]**3))
    (x=>idP(x/f('stop')[3]))(x=>idP(x-f('stop')[1]))('stop')
};

/*function test6 (w) {
    var x = Symbol();
    var run = Bind(x, true);
    var ar = arBind[x];  // arBind is an object in global scope
    return run(w)(cubeP)
      (x=>idP(x+ar[0]))(squareP)(() => idP(ar[2]**3))
        (x=>idP(x/ar[3]))(x=>idP(x-ar[1]))()
};*/
var _D0 = _D1 = _E0 = _E1 = ['cow'];
var _B0 = _B1 = _B2 = _B3 = _B4 = _B5 = _B6 = _B7 = _B8 = ['ready'];
var _C0 = _C1 = _C2 = _C3 = _C4 = _C5 = _C6 = _C7 = _C8 = ['ready'];

function test5 (n) {

     var x = toInt(n);

    _C0 = test4(x+0);
    _C1 = test4(x+1);
    _C2 = test4(x+2);
    _C3 = test4(x+3);
    _C4 = test4(x+4);
    _C5 = test4(x+5);
    _C6 = test4(x+6);
    _C7 = test4(x+7);
    _C8 = test4(x+8);
}


 var _oB_ = {};

 function  qfB (a,b,c) {
      var C0 = [];
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
        C0[0] = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          C0[1] = `x = ${aa} and x = ${bb}`;
      }
      if (!(aa === aa)) {
          C0[0] = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          C0[1] = '';
      }
      return C0;
  }

 var qfC = a => b => c => {
      var C0 = [];
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
        C0[0] = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          C0[1] = `x = ${aa} and x = ${bb}`;
      }
      if (!(aa === aa)) {
          C0[0] = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          C0[1] = '';
      }
      return C0;
  }

 var qf_dem6 = a => b => c => {
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
          _oB_.g = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          _oB_.h = `x = ${aa} and x = ${bb}`;
      }
      if (!(aa === aa)) {
          _oB_.g = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          _oB_.h = '';
      }
  }



var Cow1 = "Judy", Cow2 = "Judith";
var pie = "Peach";

var quadOb = {ar: [], fu: function fu (x) {this.ar.push(x)}};

var quadHandler = {
    get: function(target, bbb, ccc) {
    if ( Array.isArray(target[bbb]) && target[bbb].length === 3) {
        foo8 (target[bbb][0], target[bbb][1], target[bbb][2], 'Cow1', 'Cow2');
        target[bbb] = [];
    }
    diffRender();
    return Reflect.get(target,bbb,ccc);
    }
}

quadOb = new Proxy (quadOb, quadHandler);





// (((((( *********************************** )))))) >>>->-->--->DEMONSTRATIONS 3, 4, 5

const _qOb_ = {a: '', b: '', c: '', d: '', e: '', f: ''};


function foo8 (a, b, c, x, y) {
    var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    if (aa === aa) {
        _qOb_[x] = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
        _qOb_[y] = `x = ${aa} and x = ${bb}`;
    }
    else {
        _qOb_[x] = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
        _qOb_[y] = '';
    }
} ;





// Demonstration 6

 var qf_dem6 = a => b => c => {
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
          _oB_.g = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          _oB_.h = `x = ${aa} and x = ${bb}`;
      }
      if (!(aa === aa)) {
          _oB_.g = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          _oB_.h = '';
      }
  }

function quadMaker (x,y) {
    return a => b => c => {
        var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        if (aa === aa) {
            _oB_[x] = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`;
            _oB_[y] = `x = ${aa} and x = ${bb}`;
        }
        if (!(aa === aa)) {
            _oB_[x] = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
            _oB_[y] = '';
        }
    }
}

// Demonstration 3

 var qf_dem3 = a => b => c => {
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
          _oB_.a = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          _oB_.b = `x = ${aa} and x = ${bb}`;
      }
      if (!(aa === aa)) {
          _oB_.a = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          _oB_.b = '';
      }
  }

Cow3 = "Montana";
Cow4 = "Ivy";

var obQ = {ar: [], f: function (x) {
    obQ.ar.push(x)
    if (obQ.ar.length === 3) {
        quadMaker("a", "b") (obQ.ar[0])(obQ.ar[1])(obQ.ar[2]);
        obQ.ar = [];
    }
}};

// Demonstration 4

var qf_dem4 = a => b => c => {
      var C0 = [];
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
          _oB_.c = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          _oB_.d = `x = ${aa} and x = ${bb}`;
      }
      else if (!(aa === aa)) {
          _oB_.c = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          _oB_.d = '';
      }
  }

var curriedAsync = function curriedAsync (x) {
    var original_f = x;
    var f = x;
    return function g (d) {
        f = f(d);  // f will be a functidn the first two times
        if ( typeof f !== "function" ) f = original_f;
    }
}

var fu_4 = curriedAsync(quadMaker("c", "d"));

// Demonstration 5

function ann23 () {
     var ob = Compose()
     return func = y => {
        ob.run(toFloat(y));
        if (ob.ar.length === 3) {
            quadMaker("e", "f")(ob.ar[0])(ob.ar[1])(ob.ar[2]);
            ob.ar = [];
            // diffRender();
        }
        return func;
    }
};

var ann27 = ann23();

function push3 (ar, x) {ar.push(x);  return ar };

var  _arQuad = [];

function push3 (ar, x) {ar.push(x);  return ar };

push3 = new Proxy(push3, {
    apply: function(a, b, c) {
        if (c[0].length === 3) {console.log('c is',c); c = [ [], c[1] ]}
        if (c[0].length === 2) {
          console.log('c is',c);
           quadMaker("g", "h")(c[0][0])(c[0][1])(c[1]);
            _arQuad = [];
        }
    return Reflect.apply(a,b,c);
    }
});

var obR  = { ar: [] };

obR.push = x => {
    var a = obR.ar
    a.push(x);
    if (a.length === 3) {
        quadMaker('a', 'b')(a[0])(a[1])(a[2]);
        a.length = 0
    }
};




/*
Bnd5 = {
     ar: [],
     run: function (x) {
        if (x instanceof Promise) x.then(y => this.ar.push(y))
        else this.ar.push(x);
        return func => {
            var p;
            if (func == 'stop') return this.ar;
            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else if (func.constructor === Monad) p = func.x;
            else p = func(x);
            return this.run(p);
        };
    }
};

 Bnd5 = {
     ar: [],
     run: function (x) {
        if (x instanceof Promise) x.then(y => ar.push(y))
        else this.ar.push(x);
        return func => {
            var p;
            if (func == 'stop') return this.ar;
            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v))
            else p = func(x);
            return this.run(p);
        };
    }
};

var ob1 = Object.create(Bnd3); ob1.__proto__();
var ob2 = Object.create(Bnd3); ob2.__proto__();
var ob3 = Object.create(Bnd3); ob3.__proto__();

var d = ob1.run(5)(x=>x**4)('stop');
var e = ob2.run(3)(x=>x**3)(x=>x+ob2.ar[0])('stop');
ob3.run(2)(x=>x**7);
console.log(d, e, ob3.ar);

var o1 = Object.create(Bnd5);
o1.ar = o1.ar.slice();
var o2 = Object.create(Bnd5);
o2.ar = o2.ar.slice();
var o3 = Object.create(Bnd5);
o3.ar = o3.ar.slice();


var dd = o1.run(5)(x=>x**4)('stop');
var ee = o2.run(3)(x=>x**3)(x=>x+o2.ar[0])('stop');
o3.run(2)(x=>x**7);
console.log(dd, ee, o3.ar);

function f1A () {var o = Object.create(Bnd3); o.__proto__(); return o;}
function f1B () {var o = Object.create(Bnd5); o.ar = o.ar.slice(); return o;}

var a1 = f1A();
var a2 = f1A();
var a3 = f1A();
var de1 = a1.run(5)(x=>x**4)('stop');
var de2 = a2.run(3)(x=>x**3)(x=>x+o2.ar[0])('stop');
a3.run(2)(x=>x**7);

console.log(de1, de2, a3.ar)

var b1 = f1B();
var b2 = f1B();
var b3 = f1B();
var be1 = b1.run(5)(x=>x**4)('stop');
var be2 = b2.run(3)(x=>x**3)(x=>x+o2.ar[0])('stop');
b3.run(2)(x=>x**7);

console.log(be1, be2, b3.ar)

var e1 = new Bnd3()
var e2 = new Bnd3()
var e3 = new Bnd3()

var de1 = e1.run(5)(x=>x**4)('stop');
var de2 = e2.run(3)(x=>x**3)(x=>x+o2.ar[0])('stop');
e3.run(2)(x=>x**7);

console.log(de1, de2, e3.ar);
*/
async function dRendP (x) {
  await wait(x)
  diffRender();
};

async function cubeP3 (x) {
  dRendP(3300);
  await wait(3000);
  return x*x;
};

var A1 = [];
var A2 = [];
var A3 = [];
var A4 = [];
var A5 = [];
var A6 = [];
var A7 = [];

var logDelay = async () => {
  await wait(5000)
  diffRender();
}

var incC = x => Math.sqrt(x.ar.pop())+1

var squareP3 = x => Math.sqrt(x.ar.pop())+1
var cubeP3 = x => x.pop()**(1/3)


const go = () => diffRender();

async function _dRP (x) {
    await wait(x)
    diffRender();
};

async function squareP3 (x) {
_dRP(3300);
await wait(3000)
return x*x;
};

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

var _send = _se(1)(mMZ63);

function _wait (f) {return mMZ63.bnd(f)};

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

var sq = powP(2);
var cu = powP(3);
var sqA = x => x*x;
var cuA = x => x**3;
var adA = x => y => x + y;

var  popP = t => async ar => {
    await wait (t * 1000)
    return ar.slice().pop();
};

function Compose ( AR = [] )  {
  var ar , x, ob, f_ , p ;
  if (Array.isArray(AR)) ar = AR.slice()
  else ar = AR;
  if (ar.length) {x = ar[ar.length-1]};
    return  ob = {ar: ar, run:  async function run (x) {
    if (x instanceof Promise) {
        x.then(y => {
            if (y != undefined && y && y.toString() != "NaN" != NaN) {
                ar.push(y);
                console.log("dog shit _____________________cow ")
                diffRender();
            }
        })
    }
    else {if (x != undefined && x.toString() != "NaN") ar.push(x)};
        return function f_ (func) {
            if (func === 'stop') return ar;

            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return run(p);
        };
  } };
};

/* function Comp ( AR = '' )  {
    var ar , x, ob, f_ , p, z;
    if (Array.isArray(AR)) ar = AR.slice()
    else ar = AR;
    if (Array.isArray(ar) && ar.length) x = ar.slice(1)
    else x = ar;
    return  ob = {ar: ar, run: function run (x) {
        if (x != undefined && x !== false && x !== NaN && (!(x instanceof Fux)) &&
        x.toString() != "NaN" && x.name !== "f_" ) {
            if (Array.isArray(ob.ar)) ob.ar.push(x)
            else ob.ar = p;
        if (x instanceof Fux) {var z = ob.ar.pop();
            if (x.fux(z)) x = z;
        };
        if (x instanceof Promise) x.then(y => z = y);
        else z = x;
        return function f_ (func) {
            if (func === 'stop') return ar;
            else if (typeof func !== "function") p = func;
            else if (z instanceof Promise) p = z.then(v => func(v));
            else p = func(z);
            return run(p);
        };
    }}}
};

function Comp ( AR = [] )  {
  var ar , ob, f_ , p, x;
  if (Array.isArray(AR)) ar = AR.slice()
  else ar = AR;
  if (ar.length) {x = ar[ar.length-1]};
  return  ob = {ar: ar, run: function run (x) {

    if (x instanceof Filt) {
      var z = ob.ar.pop();
      if (x.filt(z)) {x = z}
      else {
        ar = [];
        f_('stop');
       }
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
      if (func === 'end') return ob;
      else if (typeof func !== "function") p = func;
      else if (x instanceof Promise) p = x.then(v => func(v));
      else p = func(x);
      return run(p);
    };
    return f_;
  }}
}  */

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
} };
runT(3);

/*
// ->   ************************************************ transduce tduce
var arf =  [x=>x*10,  x=>x*x, x=>x+x];
var arn = [1,2,3,4,5,6,7]

var ff1 = ar => ar.reduceRight((a,b) => b(a))
var ark = ar => x => ar.concat(x);

var tduce = ar1 => ar2  => ar2.map(v => (ff1)(ark(ar1)(v)))
console.log(tduce(arf)(arn))


  var tdF = arF => arA => {var ob, result = []; arA.map(v => {
      result.push(arF.reduce((a,b) => b(a),v))
      })
      return result;
  }

  var dd = tdF([x=>x**3, x=>x+3, x=>x*x])([1,2,3,4,5])
  console.log("dd is", dd);


  var f77F = bee => arN => {
      var res = [];
      var os;
      arN.map(x => {
          os = Comp([x]);
          res.push(eval("fork(os)('os')" + bee))});
      return res;
  };

var zee = f77F("(x=>x**3)(x=>x+3)(x=>x*x)('stop').pop()")([1,2,3,4,5])
console.log("zee is",zee)

console.log("[...Array(5).keys()]", [...Array(5).keys()])




var tduce = ar1 => ar2  => ar2.map(v => (ff1)(ark(ar1)(v)))
console.log(tduce(arf)(arn))


var arF = [x=>x**3, x=>x+3, x=>x*x];
var arA = [1,2,3,4,5];

function CompAr ( AR = [], funcAr, argsAr )  {
    var ar = AR, x, ob, f_ , p ;
    var result = [];
    var funcAr = funcAr;
    var argsAr = argsAr;
    var fs = funcAr.slice();
    var args = argsAr.slice();
    console.log("Before recurse. ar is", ar);
    var recurse =  () => {
        console.log("In recurse() -- args.length is", args.length);
        x = args.pop();
        let xx = x;
        ar = [x];
        fs.map(func => {
            console.log("1 func, xx, and func(x)", func, xx, func(xx))
            if (!(func instanceof Function)) {
                console.log("2 func, xx and func(x)", func, xx, func(xx))
            }
            else if (func instanceof Promise) x.then(y => {
                if (y != undefined && y !== false && y !== NaN &&
                y.toString() != "NaN" && y.name !== "f_" ) {
                console.log("3 func, xx, and func(x)", func, xx, func(xx))
                    xx = func(y);
                }
            })
            else if (func != undefined && x !== false &&
            x.toString() != "NaN" && x.name !== "f_" ) {
                console.log("4 func, xx, and func(x)", func, xx, func(xx))
                xx = func(x);
            };
            ar.push(xx);
            console.log("ar is", ar)
            x = xx;
        })
        result.splice(0,0,x);
        console.log("Still in recurse() result is", result);
    }
    while (args.length > 0) recurse()
    return ["Cowgirl", result];
}

var adP = t => a => async b => {
    await wait(t*1000)
    return a + b;
}

console.log("CompAr([], arF, arA) returned:")
console.log(CompAr([],arF,arA));
var arF = [x=>x**3, x=>x+3, x=>x*x];
var arf = [cubeP, addP(3), squareP];
var arrf = [powP(3)(6), adP(3)(3), powP(2)(1)]
var ara = [1,2,3,4,5];
console.log("CompAr([], arrf, ara) returned:")
CompAr([],arF,arA).map(v => console.log(v));
console.log("<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>");
var ff = fu => x => {
    var ob = Comp([x]);
    fu.map(f => {
        ob.run(ob.ar.pop())(f)
    })
   return ob;
}

function fg (fs) {
    var fs = fs;
    return function foam (x) {
        var o = {
            ob: Comp([x]),
            fu: fs.map(f => {
                o.ob.run(o.ob.ar.pop())(f)
            })
        }
    }
}

var td = f => async a => a.map(x => ff(f)(x))
var trd = (td(arrf));
var b = trd(ara);
console.log(b)

var CompTd = funcs => {
  var ob = {
    fs: funcs,
    a: [],
    f: x => {
      ob.a.push(ob.fs.reduce((a,b) => b(a),x));
      return ob;
    }
  }
  return ob;
}

var ob3 = CompTd(arF);

ob3.f(3)
ob3.f(4)
ob3.f(5)
ara.map(v => ob3.f(v))
console.log(ob3);

var ee = makeChan('ee');
console.log("ob3.f(7)", ob3.f(7).f(8).a)
function fu () {ee.bnd(() => {console.log("Hello"); ee.bnd(()=>{console.log("World");
ee.bnd(()=>{console.log("Hello Mars"); ee.bnd(() => fu())()})})})};
fu();
ee.release();
ee.release();
ee.release();
ee.release();
ee.release();
ee.release();
ee.release();
ee.release();



function apply(x, f) {
  return f(x);
}

function concat(xs, val) {
  return xs.concat(val);
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// transformations
var add1 = x => x + 1;
var doubleIt = x => x * 2;
var add = (x, y) => x + y;

// predicates
var isEven = x => x % 2 === 0;
var isOdd = x => !isEven(x);

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

/*
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
  Map(x=>x+1),
);

var ob2 = Comp();
// ob2.run([1,2,3,4,5,6,7,8,9])(x=>x.reduce(xform(concat),[]));
var ob3 = Comp();
[0,1,2,3,4,5,6,7].map(v => ob3.run(v)(x=>xform(concat,[])(x)));

console.log("[0,1,2,3,4].reduce(transformFR(concat),[])",[0,1,2,3,4].reduce(transformFR(concat),[]))

var zza = Comp(ar); var zzt = zza.run(zza.ar)(x=>x.reduce(Map(x=>x**3)
 (Filter(x=>x%2===0)(Map(x=>x+10000)
   (concat))),[]))('stop').pop();
console.log("zzt is", zzt);

var zzb = Comp(ar); var zzu = zzb.run(zzb.ar)(x=>x.reduce(Map(x=>x**3)
 (Filter(x=>x%2===0)(Map(x=>x+10000)
   ((a,b)=>a+b))),0))('stop').pop();

console.log("zzu is", zzu);

sue = [1,2,3,4,5].reduce(Map(x=>x**3)(concat),[])
console.log(sue);

function Fux (p) {this.p = p; this.fux = function fux (x) {return p(x)}};

var fox = new Fux(x=>x%2 === 0);

var cox = new Fux(x=>x>1200);

function Comp2 ( AR = [] )  {
    var ar , x, ob, f_ , p, z;
    if (Array.isArray(AR)) ar = AR.slice()
    else ar = AR;
    if (Array.isArray(ar) && ar.length) x = ar.slice(1)
    else x = ar;
    return  ob = {ar: ar, run: function run (x) {
        if (x != undefined && x !== false && x !== NaN && (!(x instanceof Fux)) &&
        x.toString() != "NaN" && x.name !== "f_" ) {
            if (Array.isArray(ob.ar)) ob.ar.push(x)
            else ob.ar = p;
            console.log("ob.ar, p", ob.ar, p);
        if (x instanceof Fux) {var z = ob.ar.pop();
            if (x.fux(z)) x = z;
        };
        if (x instanceof Promise) x.then(y => z = y);
        else z = x;
        return function f_ (func) {
            if (func === 'stop') return ob.ar;
            else if (typeof func !== "function") p = func;
            else if (z instanceof Promise) p = z.then(v => func(v));
            else p = func(z);

            console.log("At the end of Comp -- p is", p );
            return run(p);
        };
    }}}
};

var zee = [1,2,3,4,5].map(v => Comp2().run(v)(x=>x**3)(x=>x+3)(x=>x*x)('stop').pop());
console.log('zee is', zee);

*/


// end
