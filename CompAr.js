

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
  await wait(1000)
  return toFloat(x) + toFloat(y);
}

const adP = t => x => async y => {
  await wait(t*1000)
  return toFloat(x) + toFloat(y);
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

var iD = t => async b => {
  await wait(t*1000)
  return b;
}

var _iD = t => async b => {
  await wait(t*1000)
  return eval(b);
}

var powP = a => b => async c => {
  await wait(b*1000)
  return c**a;
}

var _pop = t => ar => ar.slice().pop();


var arF = [x=>x**3, x=>x+3, x=>x*x];
var arA = [1,2,3,4,5];


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

console.log("CompAr([], arF, arA) returned:")
console.log(CompAr([],arF,arA));

var arF = [x=>x**3, x=>x+3, x=>x*x];
var arf = [cubeP, addP(3), squareP];
var arrf = [powP(3)(6), adP(3)(3), powP(2)(1)]
var ara = [1,2,3,4,5];

var Tduce = funcs => x => funcs.reduce((a,b) => b(a),x)
console.log("Tduce(arF)(3) is",Tduce(arF)(3))
var tduce1 = Tduce(arF);
console.log("tduce1(3) is", tduce1(3))

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
console.log('ob3 is', ob3);
console.log("ob3.f(7)", ob3.f(7))
console.log("ob3.f(8).a", ob3.f(8).a)
