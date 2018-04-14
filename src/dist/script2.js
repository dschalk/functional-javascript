
function testPrefix (x,y) {
  var t = y;
  var s;
  if (Array.isArray(x)) {
    x.some(v => {
      if (typeof v == 'string' && v.charAt() == 'M') {
         t = v.slice(1);
      }
    })
  }
  return t;
}

function Monad(z = 19, g = 'generic') {
  var _this = this;
  this.x = z;
  this.id = g;
  this.bnd = function (func, ...args) {
    var m = func(this.x, ...args)
    var ID;
    if (m instanceof Monad) {
      ID = testPrefix(args, _this.id); 
      _this[ID] = new Monad(m.x, ID);
      return _this[ID];
    }
    else return m;
  };
  this.ret = function (a) {
    return _this[_this.id] = new Monad(a,_this.id);
    console.log('In Monad.ret --> this is',this);
  };
};

var primesMonad = new MonadState('primesMonad', [3, [], 3, [2,3]]);
// Object.freeze(primesMonad);

//*************************************** BEGIN prime Fibonacci numbers

var fpFunc = primesState => x => fibsState => {
  var ar = [];
  var top = Math.ceil(Math.sqrt(fibsState[fibsState.length - 1]) + 3);
  var state = primeNums(primesState, top);
  var top2 = state[state.length - 1];
  postMessage(['green', 'green', 'red', 'color', 'done', 'done', 'computing prime fibs'])
  fibsState.map(fib => {
    if (state.every(p => (fib % p || fib == p))) {ar.push(fib)}
  })  
  postMessage(['green', 'green', 'green', 'color', 'done', 'done', 'done']);
  postMessage( [ [fibsState.join(', '), top2, ar.join(', '), x], state ] )
}

function execF(fibState,n) {
  var a = [0,1];
  var b = [];
  while ((a[0] + a[1]) < n) {
   a = [a[1], a[0] + a[1]];
   b.push(a[0]);
  }
  b.push(a[1]);
  b.shift();
  b.shift();
  postMessage(['green', 'red', 'yellow', 'color', 'done', 'computing primes', 'pending'])
  return b;
};

function pNums(start, n) {
  var store  = [], i, j, primes = [];
  for (i = start; i <= n; ++i) {
    if (!store [i]) {
      primes.push(i);
      for (j = i << 1; j <= n; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}

function small (primes, v) {
  return primes.slice(0, primes.indexOf(primes.find(e => e > v)));
};

function primeNums (p,x) {
  var q = p[p.length - 1];
  if (q > x) return small(p,x)
  else {
    var arr = pNums(q,x,p); 
  // for (var i = q - 1; i < Math.ceil(x+1)+1; i+=1) if (isPrime(i)) arr.push(i);
    return p.concat(arr);
  }
};

function execP (state, num) {
  var x = state[state.length - 1];
  var primes = state.slice();
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







//*************************************** END prime Fibonacci numbers

function fdTransformer (primeState, n, decompState) {
  var factors = decompState[3].slice();
  var factors2 = decompState[3].slice();
  var ar = [];
  var d = decompState[2];
  var k;
  var result;
  if (n <= d) {result = new MonadState('decompMonad', decompState)};
  if (n > d) {
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
    result = new MonadState('decompMonad', [d, factors, d , factors]);
  }
  Object.freeze(result);
  console.log('In fdTransformer  ***  result is', result);
  return result;
}

function pfactors (primeState, n) {
  var ar = [];
  while (n != 1) {
    primeState[3].map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  }
  return ret(ar);
}

function ret(v, id = 'generic') {
  self[id] = new Monad(v, id);
  return self[id];
}

var mMfactors = new Monad('', 'mMfactors');

function MonadState(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);  
};

var fibsMonad = new MonadState('fibsMonad', [0, 1, 2, [0]]);
 
var decompMonad = new MonadState('decompMonad', [3, [[0],[1],[2]], 3, [[0],[1],[2]]]);
Object.freeze(decompMonad)

var count = 1;

function isPrime(n) {
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

function execQ (prms, num) {
  var x = prms[prms.length - 1];
  var primes = prms.slice();
  console.log('<G><G><G><G><G><G><G> ********** In execP. primes:');
  console.log('<G><G><G><G><G><G><G> ********** In execP. primes:', primes);
  console.log('<G><G><G><G><G><G><G> ********** In execP. primes:');
  if (x < num) {
    var end = 0;
    var xx = Math.sqrt(num + 1);
    var yy = Math.ceil(xx);
    console.log('in execQ -- xx and yy are', xx, yy );
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
function execP (state, num) {
  var x = state[2];
  var primes = state[3].slice();
  if (x < num) {
    var end = 0;
    while (true) {
      if (isPrime(end)) primes.push(end);
      if (end > num) return [end, primes, end, primes]
      else end += 1;
    }
  }
  else {
    var newP = primes.filter(v => (v <= num));
    newP.push(primes[newP.length]);
    return [newP[newP.length - 1], newP, x, primes];
  }
}  */

function execD(decompState, primeState, n, a, b) {
  var c = decompState[3].slice();
  var d = decompState[2];
  var res;
  primesMonad = new MonadState('primesMonad', execP(primeState, n));
  primesMonad.bnd(newState => {
    while (d <= n) {
      fact2(newState[3], d)
      .bnd(factors => c.push(factors))
      d += 1;
    }
    var ds = [d, c, d, c]
    res = lcm(ds[3][a], ds[3][b]);
    gd = gcf(ds[3][a], ds[3][b]);
    postMessage([ newState, [a, b, res, gd], ds ])
  })
}

function execLCM (a, b, primeState) {
  console.log('Kind regards from execLCM');
  pfactors(primeState, a).bnd(x => { 
    pfactors(primeState, b).bnd(y => { 
      postMessage([primeState, [a, b, lcm(x,y), gcf(x,y)]])
    })
  })
}

function fact(v) {
  var ar = [];
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
  var r;
  var c = cx.slice();
  var d = dx.slice();
  d.map(v => {
    if (c.some(x => x === v)) {
      c.splice(c.indexOf(v),1)
    }
      r = d.concat(c).reduce(function (a,b) {return a*b})
    }
  )
  return r
}

function gcf (a, bx) {
  var b = bx.slice();
  var ar = [];
  a.map(x => {
    if (b.includes(x)) {
      ar.push(x)
      b.splice(b.indexOf(x),1)
    }
  })
  if (ar.length > 0) {
    return ar.reduce((j,k) => j*k)
  }
  else return 1;
}

/* function bind (x, ar=[]) {
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

function Bind (str) {
  Bind[str] = [];
  return function bindo ( x ) {
    if (x instanceof Promise) x.then(y => {
      Bind[str].push(y);
      diffRender();
      console.log(Bind[str]);
    })
    else {
      Bind[str].push(x)
      diffRender();
    }
    console.log(Bind[str]);
    return function debug8 (func) {
      var p;
      if (func.name === "terminate") return Bind[str];
      if (x instanceof Promise) {
        p = x.then(v => func(v));
      }
      else p = func(x);
      return bindo(p);
    };
  };
};


