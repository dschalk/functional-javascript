import {h, pre} from '@cycle/dom';
var score = 0;
var goals = 0;
var operator = 'add';

var Monad = function Monad(z = 42, g = 'generic') {
    this.x = z;
    this.id = g;
    this.bnd = function (func, ...args) {
      var m = func(this.x, ...args)
      var mon;
      if (m instanceof Monad) {
        mon = testPrefix(args,this.id);
        return window[mon] = new Monad(m.x, mon);
      }
      else return m;
    };
    this.ret = function (a) {
      return window[_this.id] = new Monad(a,_this.id);
    };
  };

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
  solve(); `)

  var quad2 = h('pre', `  function gMap(x, f, id) {
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



var monad = h('div',  [
h('h1', 'The Monads'),
h('p', ' The definition of Monad, which is the basic monad constructor, is a little complicated. It isn\'t intended as a puzzle, so a little explanation is in order. ' ),
h('p', ' The term "monad" will mean "instance of Monad". Monad could have been defined as a class, but the current definition suffices. ' ),
h('p', ' Monads are created by code such as "const m = new Monad("anything", "m")". The arguments will be the values of m.x and m.id. The first argument can be any Javascript value, such as string, array, or monad. The second argument should be the name of the monad. ' ),
h('p', ' A monad, say "m", can be replaced by another monad named "m" in the global space through the use of the method "ret()". It looks like m.x gets mutated, but that isn\'t what happens. Previously defined references to m retain their values, as demonstrated below: '),

h('pre',
`var m = new Monad (5, 'm');
var arr = [m];
var p = m;
m.ret(100);
console.log(m.x, arr[0].x, p.x);
// 100, 5, 5
` ),

h('p', ' In global scope (window in the browser), m.x changed to 100; but p and arr still refer to 5, the previous value of m.x. Similarly, when a monad uses its bnd() method to modify its x attribute, the change is seen globally, but nowhere else. Previous references to the monad remain stable, as this example illustrates: ' ),

h('pre',
`var m = new Monad (5, 'm');
var arr = [m];
var p = m;
m.bnd(add,95);
console.log(m.x, arr[0].x, p.x);
// 100, 5, 5
` ),

h('p', ' Had there been no reference to m, the previous instance would have been subject to removal by the garbage collector. ' ),
h('p', ' It is possible to mutate monads with code such as m.x = 888. That might be a good thing to do in a function with many recursions, but it seems like a misuse of monads. Monads are never mutated on this website. Object.freeze() is used to prevent mutation in the definition of primesMonad (shown below). '),
  h('p', ' The bnd() method can leave the calling monad\'s global value unchanged while assigning a value (in the global space) to another previously defined monad, or to a freshly created monad. So regardless of whether or not "m2" is defined, m.ret(4).bnd(cube,"$m2") causes m.x === 4 and m2.x === 64 to both return true. ' ),

h('pre',
`m.ret(4).bnd(cube,"$m2")
console.log(m.x, m2.x)   // 4 64
m.ret(0).bnd(add,3,"$m2").bnd(cube,"$m3")
console.log(m.x, m2.x, m3.x)  // 0 3 27
` ),

h('p', ' The definition of Monad (below) shows how bnd() checks to see if func(m.x, ...args) returns a monad. If it does, "testPrefix" looks for a pattern that matches "$val" in the arguments that were provided to m.bnd(func, ...args). If the pattern is found, the global space acquires a monad named "val" with val.x === func(m.x, ...args). If no monad named "val" previously existed, one is created. Otherwise, val\'s global definition gets superseded. val can be any sequence of characters that constitute a valid javascript identifier. ' ),
h('p', ' Instances of Monad facilitate changing values without mutation. They also provide a way to chain function calls. For example, m.ret(2).bnd(add, 1).bnd(cube) causes m.x === 27 to return true. This works because ret(), add, and cube all return monads when they are applied to m.x. The definition of add and cube are shown below and can be found in the Github repository. ' ),
h('p', ' If the three numbers from the previous sequence were all that we required, we could obtain them more efficiently by running: ' ),
h('pre',
`var demoResult = ret(0).bnd(x => add(x, 3).bnd(y => cube(y).bnd(z => [x,y,z])));
console.log('We started with', demoResult[0], 
    'and got', demoResult[1], 'and', demoResult[2]);
The console displays "We started with 0 and got 3 and 27"
` ),
h('p', ' Doing it that was leaves only one monad - the one named "temp" - for the garbage collector. It also eliminates concern about name collisions among the monads. There is little danger that a monad named "temp" is being used to store a value somewhere else in the application code. The temp monad is obviously not a monad for preserving values. The result could have been logged to the console or used in further computations without creating a reference to it.' ),
h('pre',
`ret(0).bnd(x => add(x, 3).bnd(y => cube(y).bnd(z =>
console.log('We started with', x, 'and got', y, 'and', z))));
The console displays "We started with 0 and got 3 and 27"
` ),
h('p', ' More complex, multi-stage computations in sequenced monads are demonstrated later in this presentation. If such monads don\'t depend on information that exists outside of their scope, their effects in a running application are easier to grasp, and opportunities for unintended behavior in edge cases are minimized. Developers can gain further control and confidence in their applications by allowing only the last monad in any sequence to make changes in global scope. Code is easier to write and maintain when you can readily pinpoint a minimal number of places where an application\'s state gets updated. ' ),
h('p', ' So, with that out of the way, here are the definitions of Monad and testPrefix: ' ),

h('h3', ' Monad '),
h('pre',  `  var Monad = function Monad(z = 42, g = 'generic') {
    this.x = z;
    this.id = g;
    this.bnd = function (func, ...args) {
      var m = func(this.x, ...args)
      var mon;
      if (m instanceof Monad) {
        mon = testPrefix(args,this.id);
        return window[mon] = new Monad(m.x, mon);
      }
      else return m;
    };
    this.ret = function (a) {
      return window[_this.id] = new Monad(a,_this.id);
    };
  };
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
  }  `  ) ])

var variations = h('div',  [
h('h3', 'Variations on the Theme' ),
h('p', ' Variations on the Monad theme serve diverse purposes. Instances of MonadState preserve computations so they won\'t have to be performed again. An instance of MonadState2 keeps a record of game play allowing players to back up and resume play from a previous display of numbers. It also keeps the current game parameters - score, goals, operator, selected numbers, and remaining numbers - in a single array which is stored in the archive whenever a new state is created. MonadItter instances are used to parse websockets messages and organize the callbacks neatly. MonadEr catches NaN and prefents crashes when undefined variables are encountered. I defined a message emitting monad but it seemed useless in this Cycle application where reactivity is pervasive. When you want to emit and listen for messages, it is better to build a driver and merge its stream of messages into the application cycle. '),

h('p', ' The various monad constructors demonstrate a way of encapsulating procedures and state in chainable objects. You might incorporate Monad or one of the other constructors presented here in your application, but I think the thing that is most valuable is the general concept. I prefer Cycle.js, but I think the monads might make Node, React and some of the other frameworks more manageable. ' ),

h('h3', 'Computations' ),
h('p', ' Computations are easy to link if each result is returned in an instance of Monad. Here are a few examples of functions that return instances of Monad: '),
  h('pre',  `  function ret(v, id = 'temp') {
      window[id] = new Monad(v, id);
      return window[id];
    }
    function cube (v, id) {
      return ret(v * v * v);
    };
    function add (x, b) {
      return ret(parseInt(x,10) + parseInt(b,10) );
    };
    function log(x,y) {
        console.log(y)
        return ret(x);
    };  `  ),
h('p', ' The "$" prefix provides control over the destination of computation results. In the following example, m1, m2, and m3 have already been declared. Here is a comparison of the results obtained when the "$" prefix is used and when it is omitted: ' ),

h('pre', `    m1.ret(7).bnd(m2.ret).bnd(m3.ret)  // All three monads get the value 7.
    m1.ret(0).bnd(add,3,'m2').bnd(cube,'m3')  // \'m1\', \'m2\', and \'m3\' are ignored` ),
h('pre', `    Result: m1.x === 27
            m2.x === 7
            m3.x === 7  ` ),
h('pre', `    m1.ret(0).bnd(add,3,'$m2').bnd(cube,'$m3')   ` ),
h('pre', `    Result: m1.x === 0
            m2.x === 3
            m3.x === 27  ` ),
h('p', ' If the prefix "$" is absent, bnd() ignores the string argument. But when the "$" prefix is present, m1 retains its initial value, m2 retains the value it gets from from adding m\'s value (which is 0) to 3, and m3.x is the result of applying "cube" to m2.x. Both forms could be useful. ' ),
h('p', ' The following example shows lambda expressions sending variables v1 and v2 through a sequence of computations and v3 sending the final result to the string that is logged. It also shows monads a, b, c, d, e, f, and g being updated and preserved in an array that is not affected by further updates. That is because calling the ret() method does not mutate a monad; it creates a fresh instance with the same name. Here is the example, shown in a screen shot of the Chrome console:. ' ),
h('img.image', {props: {src: "demo_000.png"}}  ),
h('h3', ' The Monad Laws '),
h('p', ' In the following discussion, "x === y" signifies that the expression x === y returns true. Let J be the collection of all Javascript values, including functions, instances of Monad, etc, and let F be the collection of all functions mapping values in J to instances of Monad with references (names) matching their ids; that is, with window[id] === m.id for some id which is a valid es2015 variable name. The collection of all such instances of Monad along and all of the functions in F is called "M". For any instances of Monad m, m1, and m2 in M and any functions f and g in F, the following relationships follow easily from the definition of Monad: '),
h('div', 'Left Identity ' ),
h('pre', `    m.ret(v, ...args).bnd(f, ...args).x === f(v, ...args).x
    ret(v, ...args).bnd(f, ...args).x === f(v, ...args).x
    Examples: m.ret(3).bnd(cube).x === cube(3).x  Tested and verified
    ret(3).bnd(cube).x === cube(3).x     Tested and verified
    Haskell monad law: (return x) >>= f \u2261 f x  ` ),
h('div#discussion', ' Right Identity  ' ),
h('pre', `    m.bnd(m.ret) === m      Tested and verified
    m.bnd(m.ret) === m   Tested and verified
    m.bnd(ret) === m  Tested and verified
    Haskell monad law: m >>= return \u2261 m `  ),
    h('div', ' Commutivity  ' ),
    h('pre', `    m.bnd(f1, ...args).bnd(f2, ...args).x === m.bnd(v => f1(v, ...args).bnd(f2, ...args)).x
    Example: m.ret(0).bnd(add, 3).bnd(cube).x ===
    m.ret(0).bnd(v => add(v,3).bnd(cube)).x  Tested amd verified
    Haskell monad law: (m >>= f) >>= g \u2261 m >>= ( \\x -> (f x >>= g) ) `),
h('a', { props: { href: '#top' } }, 'Back To The Top'),
h('h3', ' Disussion ' ),
h('span.tao', ' The Haskell statement ' ),
h('span.turk6', `f \u2261 g` ),
h('span', ' means that f x == g x for all Haskell values x of the appropriate type. That is the test applied to Javascript expressions in the "Monad Laws" section (above). Neither the == nor the === operator would provide useful information about the behavior of instances of Monad, which are objects. Those operators test objects for location in memory. If the left and right sides of predicates create new instances of m, then the left side m and the right side m wind up in different locations in memory. So we expect m.ret(3) === m.ret(3) to return false, and it does. The question we want answered is the question \u2261 answers in Haskell: Can the left and right sides be substituted for one another and still yield the same results.'),
h('br' ),
h('br' ),
h('span.tao', ' The Haskell programming language borrowed the term "monad" from the branch of mathematics known as category theory. This was apropriate because Haskell monads, along with the function return and the operator >>=, behave quite a bit like category theory monads, and the inspiration for them came out of category theory. For Haskell monads to actually be category theory monads, they would need to reside in a category-theory category. They don\'t, although the Haskell mystique tends to give newcommers to the language the impression that they do. See ' ),
h('a', { props: { href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/", target: "_blank" } }, 'Hask is not a category.'),
h('br' ),
h('p', ' Research into ways of defining a Haskell category appears to be ongoing. It involves tinkering with special constraints, omitted features, and definitions of morphisms that are not Haskell functions. When a definition of the category is established, Haskell monads are then shown to be, in some contrived context, category-theory monads. Devising such schemes are instructive academic exercises, but I don\'t think they can provide anything useful to programmers working on applications for industry, commerce, and the Internet. ' ),
h('p', ' However, imitating definitions and patterns found in category theory, as Haskell does in defining the functor, monoid, and monad type classes, was a stroke of genius that vastly enriched the Haskell programming language and brought it into the mainstream as a viable alternative to java, c++, etc.  This website runs efficiently on a Haskell websockets server. The modified Haskell Wai Websockets server has proven to be extraordinarily easy to maintain as new requirements become necessary. For example, modifying the server to send chat messages and shared todo lists only to members of the same group was a trivial task. It required just a tiny amount of pattern-matching code. Category theory patterns make the Haskell interface to the Cycle front end robust, versitile, and reliable. Those are the qualities that I strive to emulate with JS-monads.'  ) ])

var p503j = h('pre',  `
`  )

var cycle = h('div',  [
h('h3', {style: {textAlign: "center"}}, ' A Few Words About Cycle.js ' ),
h('p', ' Opinionated frameworks tend to annoy and frustrate me. Cycle, on the other hand, is easy on my mind. I love it.' ),
h('p', ' In the early stages of developing this website, I had functions that mutated global variables. Sometimes, I directly mutated values in the DOM with statements like "document.getElementById(\'id\').innerHTML = newValue". Cycle didn\'t object. Over time, mutating variables and manhandling the DOM gave way to gentler techniques.  ' ),
h('p', ' Handling events is a breeze. Drivers eliminate the need to name event emitters or observers. Driver output in main() is available to any function or block of code that is interested. The result of any callback is in an event in a stream of events that automatically merge with the other streams that define main\'s return value, which is a blueprint for the updated user interface. This is breathtakingly elegant. main() is called only once, when the application loads. After that, the application hums like an enchanted perpetual motion machine. ' ),


h('pre', `function workerDriver () {
  return xs.create({
    start: listener => { worker.onmessage = msg => listener.next(msg)},
    stop: () => { worker.terminate() }
  });
};
function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)},
    stop: () => { socket.close() }
  });
};   ` )      ])


export default {quad, quad2, monadIt, primes, primes2, primes3, primes4, monad}

