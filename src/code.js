import {h, pre} from '@cycle/dom';
var score = 0;
var goals = 0;
var operator = 'add';
var Monad = function Monad(z = 42, g = 'generic') {
  var _this = this;
  this.x = z;
  this.id = g;
  this.bnd = function (func, ...args) {
    var m = func(this.x, ...args)
    if (m instanceof Monad) {
      return window[this.id] = new Monad(m.x, this.id);
    }
    else return m;
  };
  this.ret = function (a) {
    return window[_this.id] = new Monad(a,_this.id);
  };
};

var primes= h('pre',  `    function MonadState(g, state) {
      this.id = g;
      this.s = state;
      this.bnd = (func, ...args) => func(this.s, ...args);  
    };

    var primesMonad = new MonadState('primesMonad', [3, [], 3, [2,3]]);
    Object.freeze(primesMonad);

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

    function execP (state, num) {   // This function is used to update primesMonad.
      var x = state[2];
      var primes = state[3].slice();
      if (x < num) {
        var end = 0;
        while (end < num) {
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
    }  `  )

var primes2 = h('pre',  `    const workerB$ = sources.WWB.map(m => {
      console.log('In workerB$ stream in the main thread. m, m[3] ', m, m.data[3] );
      if (m.data[3] === 'color') {  // Updates the color display.
        fill1Monad.ret(m.data[0]);
        fill2Monad.ret(m.data[1]);
        fill3Monad.ret(m.data[2]);
        mMprimeBlurb.ret(m.data[5]);
        mMfibBlurb.ret(m.data[4]);
        mMprimeFibBlurb.ret(m.data[6]);  
      }
      else {
        console.log('m.data[3] ********************', m.data[3] );
        mMelapsed.ret(elapsed(m.data[0][3]))
        .bnd(v =>  console.log(v));
        mMres.ret(m.data[0])
        window['primesMonad'] = new MonadState('primesMonad', m.data[1], primes_state);
      }
    }); `  )

var primes3 = h('pre',  `    var fibKeyPress5$ = sources.DOM
        .select('input#fib92').events('keyup');

    var primeFib$ = fibKeyPress5$.map(e => {
      workerB.postMessage([primesMonad.s, e.target.value]);
    });   `  )

var primes4 = h('pre',  `    execF(ar[1]).bnd(fpTransformer, ar[0], x)  `  )

const monadIt = h('pre', {style: {color: '#AFEEEE' }}, `  var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
      return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
      return this.p = func;
    };
  }; ` )
  
  var quad = h('pre',  `  var solve = function solve () {
     mMZ3.bnd(a => {
     mMquad4.ret('');
     mMquad6.ret('');
     mMquad5.ret(a + " * x * x ")
     mMZ3.bnd(b => {
     mMquad6.ret(b + ' * x ')
     mMZ3.bnd(c => {
     mMtemp.ret([a,b,c])
    .bnd(gMap, qS4,'mMtemp2')
    .bnd(result => {
      let x = result[0]
      let y = result[1]
      if (x === 0) {
        mMquad5.ret('No solution', mMtemp)
        mMquad6.ret(' ');
        solve();
        return;
      }
      if (y === 0) {
        mMquad5.ret('No solution')
        mMquad6.ret(' ')
        solve();
        return;
      };
      mMquad4.ret("Solutiions for " + a + ", " + b + " and " + c + " are " + x + " and  " + y)
      mMquad5.ret(p(a).text + " * " + x + " * " + x + " + " + p(b).text +
              " * " + x + " " + p(c).text + " = 0")
      mMquad6.ret(p(a).text + " * " + y + " * " + y + " + " + p(b).text +
              " * " + y + " " + p(c).text + " = 0")
      solve();   // Continuing the endless loop.
      }) }) }) })
  };
  solve();

  function gMap(x, f, id) {
    var mon = new Monad(f(x), id);
    window[id] = mon;
    return mon;
  }

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

  var quad$ = sources.DOM
      .select('#quad').events('keypress');

  var quadAction$ = quad$.map(function (e) {
      if (e.keyCode === 13) {
          mMZ3.release(e.target.value);
          document.getElementById('quad').value = null;
      }
  }); `  )


export default {quad, monadIt, primes, primes2, primes3, primes4}

