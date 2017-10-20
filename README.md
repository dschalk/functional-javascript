  <a name="back"></a>

I have been experimenting with this project off and on for a couple of years. It was recently renamed to "monads-in-javascript" See [http:schalk.net:3055](http://schalk.net:3055) for up-to-date code, commentary, and working demonstrations. This README is stale, and when I refresh it I just cut and paste the browser display at  [http:schalk.net:3055](http://schalk.net:3055). I hope you will take a look and leave a comment. 
-- David Schalk

 A Cycle.js application
FUNCTIONAL REACTIVE PROGRAMMING

WITH CUSTOM MONADS AND CYCLE.JS

I am publishing this page mainly:

(1) To show how "monads", which are objects created by expressions such as "m = new Monad(a,b)." can promote efficiency, maintainability, and robustness in front-end web applications. 
(2) To help people who are interested in acclimating their thought processes to functional and reactive ways of programming. In order to feel comfortable with functional, reactive code, I think novices and seasoned programmers alike need to grow new synaptic connections in their brains. This comes with practice.
```
      Understanding without practice
      adrift in a sea of confusion. 
      understanding with practice
      smooth sailing through every challenge 
```
This is the definition of Monad:
```js
    function Monad(z = 'default', ID = 'tempMonad') {
      this.x = z;
      this.id = ID;
    }; 
```    
Before explaining how the monads work, I invite you to try out some examples of monads in action.

A Few Monad Demonstrations

The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history. All group members see your score decrease or increase as you navigate backwards and forwards.

The game code is fairly concise and intuitive. A quick walk-through is presented at.here. To see monadic functionality at work, I suggest that you take a look at the section captioned Asynchronous Processes
But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of pure, chainable functions, such as the functions in the Underscore and Jquery libraries, understanding our monads might elevate you to the comfort zone you seek.

The Game

People who are in the same group, other than the default group named "solo", share the same todo list, chat messages, and simulated dice game. In order to see any of these, you must establish a unique identity on the server by logging in. The websockets connection terminates if the first message the server receives does not come from the sign in form. You can enter any random numbers, letters, or special characters you like. The server checks only to make sure someone hasn't already signed in with the sequence you have selected. If you log in with a name that is already in use, a message will appear and this page will be re-loaded in the browser after a four-second pause.

Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then erased and the application is ready to start accumulating a new history.

Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. Knowing your password facilitates leaving comments which you can later revise or remove.



Game, Todo List, Text Messages

RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time RL is clicked, one point is deducted. Three goals wins the game. The code is in an appendix.


______________________________________________________________________

Monads

As mentioned above, "monads" are objects "m" for which m "instanceof Monad" returns true. Using "instance" in the JavaScript sense of the word, monads are are instances of Monad. var x = new Monad(0,"x") instantiates a monad named "x" whose value (x attribute) is 0.

Later, I will show you the two methods that I added to Monad.prototype. They facilitate chaining computations in the traditional JavaScript way, using internal methods rather than external functions. But first I will present the less object oriented, more Haskell-like way to link computations.

The functions bind() and ret() are similar in many ways to >>= (known as "bind") and return in the Haskell programming language. Only here, in this astonishingly chaotic world of JavaScript, there is only one type of monad. Functions used in chains of computations operate on only one type: every possible JavaScript value. They are required to return monads, but since any JavaScript value can be wrapped in a monad, this requirement is not a restriction.

By the way, I don't write code completely oblivious to types. I do build type checking into functions sometimes. If a user inserts the wrong type of data, I want a message explaining the situation to appear, and I certainly don't want the application to crash. Another alternative is to code with Typescript. The monads don't force type checking on you, but it certainly is an option.

Arguments provided to bind() can be any JavaScript value optionally followed by an array. If no array is provided, the default empty array [] is used. bind() returns a function that accepts functions with no restrictions on what arguments they accept but, as mentioned above, which must return monads. ret() is a convenient function for wrapping values in monads. Here is its definition:

  function ret (val = 0, id = "retDefault") {
    return window[id] = new Monad(val, id);
  } 
A chain of computations ends when it encounters the "terminate" flag. An array containing the value of every monad returned by the linked computations is then returned. Here's an example:

  bind(0)(v => ret(v+3))(v => ret(v*v*v))(terminate) // [0,3,27] 
Despite the way it looks, (v => ret(v+3)) doesn't take (v => ret(v*v*v)) as its argument. The function returned by bind(v => ret(v+3).x) operates on (v => ret(v+3)).

The following definition of bind() handles promises and monads. I retained the console.log lines so I could better demonstrate what happens in the asynchronous example.
```js
  function bind (x, ar = [], args) {
    console.log('Entering bind. x and ar are',x,ar);
    this.ar = ar;
    var xano = "Charles"
    if (ar.length === 0) ar = [x];
    return function f08 (func, args=[]) {
      if (func.name === "terminate") return ar;
      var y = func(x, ...args) 
      if (y instanceof Promise) {
        console.log('bind: y instanceof Promise, x is',x);
        ar.push(y);
        m7.ret(ar);
        return y;
      }
      if (y instanceof Monad) {
        ar.push(y.x);
        console.log('bind y.x and ar',y.x,ar);
        return bind(y.x, ar);
      }
    }
  };  
```
As you see in the definition above, the invisible functions that stand ready to operate on the next function you provide are the return values of bind(m.x) where m is the return value of the previous function; or, if the argument to bind is a promise, an invisible promise is returned instead. bind is coded only once, at the beginning, but it executes repeatedly along a chain of computations until it reaches the "terminate" flag.

Here's another way of saying essentially the same thing: If a monad "m" is returned by the most recent function you have added to the chain, the return value of bind(m.x) awaits your next addition. If a promise is returned by the previous function, that promise awaits your next action.

The result of every computation in a chain is available to every computation that comes after it. Here's an example:

  bind(1)(addC(2))(cubeC)(addC(3))(multC(ar[1]))(multC(ar[1]))
  (addC(30))(multC(1/ar[3]))(terminate)
  returns [1, 3, 27, 30, 90, 270, 300, 10] 
Or to get only the final result:

  bind(1)(addC(2))(cubeC)(addC(3))(multC(ar[1]))(multC(ar[1]))
  (addC(30))(multC(1/ar[3]))(terminate).pop()  returns 10  
addC, cube and multC (above) are defined as follows:

    const addC = a => b => ret(a+b);
      
    const multC = a => b => ret(a*b);

    const cubeC = a => ret(a*a*a);  
addC() and multC() return curried function when given one argument. For example:

  eq((b => ret(3+b)),addC(3))   // true  
Lambda expressions can be substituted for addC, multC, and cubeC.

  bind(1)(v=>ret(v+2))(v=>ret(v*v*v))(v=>ret(v+3))
  (v=>ret(v*(ar[1])))(v=>ret(v*(ar[1])))(v=>ret(v+30))
  (v=>ret(v*(1/ar[3])))(terminate)
   // [1, 3, 27, 30, 90, 270, 300, 10] 
In the next example, the delayed addition function addP follows the initial bind.bind's argument is 2 and addP's argument is 3 hence a promise with value 5 is returned. The functions cube(), addC(-25)(), and square() perform computations inside of the promise created by "bind(3)(addC(2)).then()"

No side effects occur until the "terminate" flag ends the computations. At that point, the monad m7 receives the result [5,125,100,10000]. m7.x.pop() === 10000, the final result.

bind(3)(addP(2)).then(v => bind(v.x)(cube)
(addC(-25))(square)(terminate))
.then(v => {m7.ret(v); console.log(m7.x)})

12:51:41.133 monad.js:127 Entering bind. x and ar are 3 []
12:51:41.134 monad.js:135 bind: y instanceof Promise, x is 3
12:51:41.134 Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
12:51:43.135 monad.js:127 Entering bind. x and ar are 5 []
12:51:43.135 monad.js:142 bind y.x and ar 125 (2) [5, 125]
12:51:43.136 monad.js:127 Entering bind. x and ar are 125 (2) [5, 125]
12:51:43.137 monad.js:142 bind y.x and ar 100 (3) [5, 125, 100]
12:51:43.138 monad.js:127 Entering bind. x and ar are 100 (3) [5, 125, 100]
12:51:43.138 monad.js:142 bind y.x and ar 10000 (4) [5, 125, 100, 10000]
12:51:43.139 monad.js:127 Entering bind. x and ar are 10000 (4) [5, 125, 100, 10000]
12:51:43.140 VM4189:1 (4) [5, 125, 100, 10000] 
Values v that satisfy "v instanceof Monad" (what I call "monads" in this discussion) are very different from the Haskell monads, but they are similar in that both behave like the monads of category theory without actually being category theory monads. See Hask is not a category. by Andrej Bauer and the Discussion below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws (see below) helps instill confidence that the monads are robust, versatile, and reliable tools for isolating and chaining sequences of JavaScript functions. 

Reactivity occurs naturally in the Cycle.js framework. Some developers find that Cycle.js has a steep learning curve. It isn't so bad if you start with Andr Staltz' Overview of Cycle.js. Its sheer elegance might take your breath away. 

The monads do not depend on Cycle.js. They can be used in React, Node, and all other browser-based applications. I happen to prefer Cycle.js working in conjunction with a Haskell websockets server. 

This project was created by and is actively maintained by me, David Schalk. The code repository is at monads-in-JavaScript You can comment at Reddit or in the Comments section near the end of this page 

Snabbdom xstream, and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and learning so many supporting files are included as scripts in the index.html page. 
Alternative Monad Functionality

Instances of Monad can also link by means of the method "bnd()". It, along with the method "ret()", were made available as follows:

  Monad.prototype.bnd = function (func, ...args) {
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
  }; 
This seems less functional, less like Haskell. It doesn't pass functions down the chain but instead, it passes monads with exposed methods. But is has appealing features. Look how values move along the chain until, at the end they combine to yield 42. Explicitly passing values down the line is impossible with bind(); but with bind(), all functions have access to ar where they can find the values of every monad returned by previous functions.

The code below resembles a lambda calculus expression, and the lambda calculus is the essence of functional programming, resting close to the eternal Tao. But intermediate functions along a linked chain of computations can instantiate monads in the global space, a feature which can be convenient and which doesn't have to be dangerous; but a function that uses this feature is not pure and impure functions are anathema to functional programming.

  ret(2).bnd(v => add(v,1).bnd(cube).bnd(p => add(p,3)
  .bnd(() => ret(p/3).bnd(add,3).bnd(z => [v,p,z,v*p-z]))))
    // [1,27,12,42] 
Haskell Monad Laws

By the way, these are just suggestions in the Haskell programming language. I don't know how the word "law" caught on, but I see them present in the libraries I use.

Left Identity
  m.ret(v).bnd(f, ...args).x === f(v, ...args).x

  ret(v).bnd(f, ...args).x === f(v, ...args).x

  bind(a)(ret)(func, ...args)(terminate).pop() === f(a, ...args).x

  Haskell monad law: (return x) >>= f ≡ f x  
Right Identity
  m.bnd(m.ret) === m  For all m where 
    (m.constructor === Monad) === true    

  bind(a)(func, ...args)(ret)(terminate).pop() === func(a, ...args).x
  // (ret) has no effect on either side of the function.
  bind(3)(ret)(add,5)(ret)(terminate).pop() === add(3,5).x

  Haskell monad law: m >>= return ≡ m 
Commutivity
  eq(m.bnd(f, ...args).bnd(g, ...args), 
  m.bnd(v => f(v, ...args).bnd(g, ...args)))

  eq(bind(ret(v))(f, ...args)(g, ...args)(terminate),
   bind(ret(3,'m'))(x => f(x, ...args))(g, ...args)(terminate))

  Haskell: (m >>= f) >>= g ≡ m >>= ( \x -> (f x >>= g) ) 
Examples demonstrating commutivity
  eq(bind(ret(3))(ret)(cube)(ret)(terminate),
    bind(ret(3))(cube)(terminate)) 
  
  eq(m.ret(3).bnd(ret).bnd(cube).
    bnd(ret),m.ret(3).bnd(cube)) 
The above relationships prove nothing, but they do suggest that the monads will turn out to be flexible and robust. The demonstrations below bear this out.

Back To The Top
Discussion

The Haskell statement f ≡ g returns True if and only if f x == g x for all Haskell values x in the domains of f and g. That is what eq() tests for, in addition to identity of id attributes. In JavaScript, "==" and "===" return false for identical objects that are in different locations in memory.

The Haskell programming language borrowed the term "monad" from the branch of mathematics known as category theory. This was appropriate because Haskell monads, along with the function return and the "bind" operator >>=, behave quite a bit like category theory monads, and the inspiration for them came out of category theory. For Haskell monads to actually be category theory monads, they would need to reside in a category-theory category. They don't, although the Haskell mystique tends to give newcomers to the language the impression that they do. See Hask is not a category.
Research into ways of defining a Haskell category appears to be ongoing. This research involves tinkering with special constraints, omitted features, and definitions of morphisms that are not Haskell functions. When a definition of the category is established, Haskell monads are then shown to be, in some contrived context, category-theory monads. Devising such schemes are instructive academic exercises, but I think application developers will always want and need tools which lie outside of the closed space of any category.

However, imitating definitions and patterns found in category theory, as Haskell does in defining the functor, monoid, and monad type classes, was a stroke of genius that vastly enriched the Haskell programming language and brought it into the mainstream as a viable alternative to java, c++, etc. This website runs efficiently on a Haskell websockets server. The modified Haskell Wai Websockets server has proven to be extraordinarily easy to maintain as new requirements become necessary. For example, modifying the server to send chat messages and shared todo lists only to members of the same group was a trivial task. It required just a few lines of no-brainer pattern-matching code.

Other JavaScript monad schemes mirror type theory and Haskell with their type constructors and monads that operate on types. Examples include Curiosity-Driven and Fantasy Land.
____________________________________________________________________________________________________________
For me, superimposing such abstractions over JavaScript takes too much versatility away from it. It is easy to include some type checking code in function definitions where it is thought to be helpful. For example, if someone enters inappropriate data in a form, a message explaining the mistake can be displayed. I enjoy the freedom and built-in polymorphism of JavaScript as it is. Call me an anarchist.
A Few Words About Cycle.js

Opinionated frameworks tend to annoy and frustrate me. Cycle, on the other hand, is easy on my mind. I love it.

In the early stages of developing this website, I had functions that mutated global variables. Sometimes, I directly mutated values in the DOM with statements like "document.getElementById('id').innerHTML = newValue". Cycle didn't object. Over time, mutating variables and manhandling the DOM gave way to gentler techniques.

Handling events is a breeze. Drivers eliminate the need to name event emitters or observers. Driver output in main() is available to any function or block of code that is interested. The result of any callback is in an event in a stream of events that automatically merge with the other streams that define main's return value, which is a blueprint for the updated user interface. This is breathtakingly elegant. main() is called only once, when the application loads. After that, the application hums like an enchanted perpetual motion machine.

function workerDriver () {
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
};   
Back To The Top
Asynchronous Processes

The next five demonstrations involve computations of prime numbers, Fibonacci numbers, prime Fibonacci numbers, and prime factors of numbers. Several instances of a constructor named "MonadState" (simple and not an ES6 class) are utilyzed, three of which maintain and share share an array of prime numbers maintained in the MonadState instance named "primesState". An array of arrays of prime factors of numbers is maintained in MonadState instance "decompMonad", which is shared by the fourth and fifth examples in this series of async examples. Here is the definition of MonadState:


    function MonadState(g, state) {
      this.id = g;
      this.s = state;
    }    
The first demonstration displays the Fibonacci series up to an upper bound entered in the browser by a user. It also displays a list of the prime Fibonacci numbers in the list of Fibonacci numbers, along with the largest prime number that was generated during a computation.

The progress display confirmed that it took almost no time to generate the list of Fibonacci numbers or to select the ones that are prime. The bottleneck was computing the primes. To see the effectiveness of saving computed prime numbers, I deleted three zeros and then added them back again. At 100,000,000,000,000 and 1,000,000,000,000, the lag times were 67 microseconds and 124 microseconds, respectively. The display, in a brief flash, showed that those delays occorred mostly during the selection of prime Fibonacci numbers from the array of Fibonacci numbers. Firefox's performance was comparable to Chrome's. I entered 1,000,000.000,000,000 in the Firefox browser, and after approximately 35 seconds five additional Fibonacci numbers appeared, topped by 806,515,533,049,393. The largest prime number that had to generated to achieve that result was 28,399,249. A total of 2,640,405 prime numbers were generated.

The demonstrations do not block the main execution thread. Computations are performed in web workers and the results are stored for further use in the main thread.

According to the The On-Line Encyclopedia of Integer Sequences these are the first eleven proven prime Fibonacci numbers: 2, 3, 5, 13, 89, 233, 1597, 28657, 514229, 433494437, 2971215073, and 99194853094755497. The eleventh number, 2971215073, is as far as you can go on an ordinary desktop computer. 
The circles below are red during the computation of A. Fibonacci numbers, B. Prime numbers, and C. prime fibonacci numbers. A, B, and C are shown from left to right. On my desktop computer, the middle circle in the red state starts bcoming briefly discernable a 10,000,000, which is where the largest attainable prime Fibonacci number (2971215073), first appears. The lag time in the Chrome browser at 1,000,000,000,000,000 was a little over thirty-five seconds. After deleting and then replacing the last 0, the delay was under five seconds, demonstrating a significant benefit derived from retrieving previously generated prime numbers instead of computing them again. But once a large array of primes has been generated, lookup times for small number exceeds the time it would take to generate a fresh array of primes. When the square root of the number in the box is less than the largest prime number in primesMonad.s[3], the only circle that turns red is the right one, corresponding to picking out the prime Fibonacci numbers.



The elapsed time is 0 milliseconds.



Fibonacci Numbers

Prime Fibonacci Numbers

The largest generated prime number.

Promises and async/await are not needed

Because this code is running in Cycle.js, waiting for websockets messages to come in and waiting for time consuming procedures to complete without blocking is easily accomplished without using promises or async/await. Drivers stand ready to process websockets and web worker messages.

The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9's, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:




Next, two comma-separated numbers are decomposed into arrays of their prime factors, and those arrays are used to compute their lowest common multiple (lcm). For example, the lcm of 6 and 9 is 18 because 3*6 and 2*9 are both 18. The lcm of the denominators of two fractions is useful in fraction arithmetic; specifically, addition and subtraction. On my desktop computer, two seven digit numbers resulted in a lag of a few seconds when prime numbers had not been previously generated.




The least common multiple of undefined and undefined is undefined
The largest common factor of undefined and undefined is undefined
TEST: undefined * undefined === undefined * undefined
RESULT: false
The Easy Way

This has been a demonstration of MonadState and MonadState transformers. If you really want the least common multiple or the largest common factor of two positive integers, there is no need to generate prime numbers. The next and final demonstration in this section does not use a web worker. The computations block the main thread, but only for a few microseconds.




The least common multiple of undefined and undefined is undefined
The largest common factor of undefined and undefined is undefined
TEST: undefined * undefined === undefined * undefined
RESULT: false
The code for the previous demonstrations is available at the Github repository, and will soon be available here in an appendix. primesMonad and the functions primarily involved in its transformation are shown below:

    function MonadState(g, state) {
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
    }  
primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code:

    var fibKeyPress5$ = sources.DOM
        .select('input#fib92').events('keyup');

    var primeFib$ = fibKeyPress5$.map(e => {
      workerB.postMessage([primesMonad.s, e.target.value]);
    });   
The user's selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling:

execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB.

    const workerB$ = sources.WWB.map(m => {
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
    }); 
MonadEr - An Error-Catching Monad

Instances of MonadEr function much the same as instances of Monad, but when an instance of MonadEr encounters an error, it ceases to perform any further computations. Instead, it passes through every subsequent stage of a sequence of MonadEr expressions, reporting where it is and repeating the error message. It will continue to do this until it is re-instantiated or until its bnd() method runs on the function clean().

Functions used as arguments to the MonadEr bnd() method can be placed in quotation marks to prevent the browser engine from throwing reference errors. Arguments can be protected in the same manner. Using MonadEr can prevent the silent proliferation of NaN results in math computations, and can prevent browser crashes due to attempts to evaluate undefined variables.

The monad laws hold for MonadEr instances. The following relationships were verified in the Chrome console:

    ret3(0,'t',[])  // t is now an instance of MonadEr with t.x = 0 and t.e = [].

    t.ret(3).bnd(cube3).x === cube(3).x
    ret3(3).bnd(cube3).x === cube3(3).x

    t.bnd(t.ret) === t
    t.bnd(ret) === t

    t.ret(0).bnd(add3, 3).bnd(cube3).x ===
    t.ret(0).bnd(v => add3(v,3).bnd(cube3)).x  
Comments

When this page loads in the browser, a user name is automatically generated in order to establish a unique Websocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password.

The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made.

If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again.


Register




COMMENTS




bill commented: What the fuck?

***************************************************************
david commented: It looks good now, bill.

***************************************************************
pill commented: Wonderful web page. There is so much to absorb.

***************************************************************
jim commented: I've been beta testing. Everything works.

***************************************************************
troll commented: Fuck you.

***************************************************************
jim commented: Go away, troll.

***************************************************************


When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1].

When a comment is created, modified, or deleted, a websockets message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js.

The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger.

commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Here he entire Comments.js file:

function showFunc (name, name2) {return name == name2 ? 'inline-block' : 'none'}

var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
};

var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

MonadState3.prototype.html = [];

MonadState3.prototype.init = function (str) { // All comments delivered on load.
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  this.s[1] = this.s[1].filter(v => v!== '');
  this.s[1].splice(num,1);
  this.s[0] = this.s[1].join("<@>");
  this.html = process(this.s[1]);
  return this.html;
};

function process (a) { //Assembles the HTML for display.
  var arr = a;
  mMcomments.ret([]);
  var n = -1;
  arr.map(a => { 
    console.log('In arr.map - - - - - - - a is ', a );
    var x = a.split("<o>");
    if (x.length != 2) x = ['malfunction', '8888']
    console.log('In arr.map o o o o o o o x is ', x );  
    x[1] = x[1].replace(/<<>>/g, ',');
    show = showFunc(x[0], pMname.x);
    console.log('<><><><> in process. x[0],pMname.x, show', x[0],pMname.x,show);
    n+=1;
    mMcomments.bnd(push, h('div#'+n, [
      h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
      h('br'),
      h('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      h('button#deleteB', {props: {innerHTML: 'delete'}, style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
} 
***************************************************************************************

Haskell Time

This page is for front end developers, but in case anyone is interested, here are the server functions responsible for deleting or amending a comment:

  removeOne _ []                 = []
  removeOne x (y:ys) | x == y    = ys
                     | otherwise = y : removeOne x ys

  changeOne :: Text -> Text -> [Text] -> [Text]
  changeOne _ _ []                 = []
  changeOne z x (y:ys) | x == y    = z : ys
                       | otherwise = y : changeOne z x ys 
Every message sent to the server is a comma separated string beginning with a prefex, then a group, and then a name. Comma separated items after that are named extra and extra2.
The code below is responsible for dealing with comments. As in the browser, websockets messages are dealt with according to their six charachter prefixes. extra and extra2 are the only pertinent data since comments go to all groups

else if "GZ#$42" `T.isPrefixOf` msg              
                  -- FETCH AND BROADCAST ALL COMMENTS ON BROWSER LOAD
   then                                
       do
           st <- atomically $ readTVar state
           broadcast ("GZ#$42," `mappend` group `mappend` "," 
             `mappend` sender `mappend` "," `mappend` comments ) st

else if "GN#$42" `T.isPrefixOf` msg 
                  -- RECEIVE A NEW COMMENT, UPDATE THE FILE AND THE TVAR,
                  --  AND BROADCAST THE NEW COMMENT 
   then
       do
           old <- atomically $ readTVar comms
           lk <- atomically L.new
           let c = old `mappend` (T.replace (at `mappend` at) at extra) 
           let new = T.replace (at `mappend` at) at c -- cleanup
           L.with lk $ TIO.writeFile xcomments new -- lock on writing
           atomically $ writeTVar comms new
           st <- atomically $ readTVar state
           broadcast ("GN#$42," `mappend` group `mappend` ","
               `mappend` sender `mappend` "," `mappend` extra) st

 else if "GD#$42" `T.isPrefixOf` msg      -- DELETE A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = removeOne extra2 b
            let d = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments d
            atomically $ writeTVar comms d
            st <- atomically $ readTVar state
            broadcast ("GD#$42," `mappend` group `mappend` ","
              `mappend` sender `mappend` "," `mappend` extra) st
                
 else if "GE#$42" `T.isPrefixOf` msg      -- EDIT A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = changeOne extra3 extra2 b
            let txt = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments txt
            atomically $ writeTVar comms txt
            st <- atomically $ readTVar state
            broadcast ("GE#$42," `mappend` group `mappend` com
              `mappend` sender `mappend` com `mappend` extra `mappend` com
                 `mappend` extra3) st   
Back To The Top
Feedback From the Error Monad



Appendix A - The Game Code

function MonadState(g, state) {
  console.log(g,'called MonadState with', state);
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
}; 
MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice()
]) {
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display])
   console.log("[score, goals, operator, picked, display]",
     [score, goals, operator, picked, display]);
  this.s = newState;
  buttonNode = bNode(display);
  return window['gameMonad'] = new MonadState('gameMonad', newState);
}

var gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[1,2,3,4]],
      [0,0,0,[],[0,0,0,0]]],1 ]);  
Here is the code that controls what happens when a player clicks a number or an operator:

  var numClickAction$ = numClick$.map(e => {
    if (gameMonad.fetch3().length < 2)  {
      var a = gameMonad.fetch3();
      var b = gameMonad.fetch4();
      a.push(b.splice(e.target.id, 1)[0]);
      gameMonad.run([,,,a,b]);
      if (a.length === 2 && gameMonad.fetch2() != 0) {
        updateCalc(a, gameMonad.fetch2())
      }
    }
  }).startWith([0, 0, 0, 0]);

  var opClick$ = sources.DOM
      .select('.op').events('click');

  var opClickAction$ = opClick$.map(e => {
    var s3 = gameMonad.fetch3();
    if (s3.length === 2) {
      updateCalc(s3, e.target.innerHTML);
    }
    else {
      gameMonad.run([,,e.target.innerHTML,,]);
    }
  });  
Notice the empty spaces in the arguments to gameMonad.run(). gameMonad.run()'s argument is an array to facilitate calling it with default values. In numClickAction$ we are not changing the score, goals, or operator. The default values of these parameters are their current values. In opClickAction$, we are changing only one thing, the operator. Everything else stays as it is.

When two numbers and an operator have been selected, control passes to updateCalc(). Here's the code:

function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);ar
  if (result === 18 || result === 20) {
    score(result);
  }
  else {
    var a = gameMonad.fetch4().slice();
    a.push(result);
    gameMonad.run([,,0,[],a]);  // Display the result and 
                                // reset the operator and selected values.
  }
};

function score(result) {
    var sc = parseInt(gameMonad.fetch0());
    var sco = result === 18 ? sc + 3 : sc + 1;
    var scor = sco % 5 === 0 ? sco + 5 : sco;
    var goals = gameMonad.fetch1();
    if (scor === 25 && gameMonad.fetch1() === "2") {  // The player wins.
        mMindex.ret(0);
        gameMonad = new MonadState('gameMonad', 
           [[[0,0,0,[],[0,0,0,0]],[0,0,0,[][0,0,0,0]]],0]);
        socket.send(`CE#$42,solo,0937145159972`);  
                    // Ask the server to announce the winner to the entire group
        newRoll(0,0);
    }
    else if (scor === 25) {
      newRoll(0, parseInt(goals,10) + 1);
    }
    else newRoll(scor, goals);   // No increase in the number of goals.
};   
Additional code is available atmonads-in-JavaScript.
.






















## A Cycle.js application
#FUNCTIONAL REACTIVE PROGRAMMING

#WITH CUSTOM MONADS AND CYCLE.JS

I am publishing this page mainly:

(1) To show how the bind() and ret() functions and the bnd() and ret() operators, features of the monads presented here, facilitate the development of front-end web applications. The game, todo list, chat, comments, and mathematical procedures are demonstrations of the monads in action.

(2) To help people who are interested in acclimating their thought processes to functional and reactive ways of programming. In order to feel comfortable with functional, reactive code, I think novices and seasoned programmers alike must grow new synaptic structures in their brains. This comes with practice.

      Understanding without practice
      adrift in a sea of confusion. 
      understanding with practice
      smooth sailing through every challenge 
Here is the definition of Monad:
```js
    function Monad(z = 'default', ID = 'tempMonad') {
      this.x = z;
      this.id = ID;
    };
```    
What I call "monads" here are objects which respond affirmatively to "typeof object === Monad". They have two attributes, id and x. monad.x is what I sometimes call the "value" of a monad.

The functions bind() and ret() are similar in many ways to >>= (known as "bind") and return in the Haskell programming language. Only here, in this astonishingly chaotic world of JavaScript, there is only one type of monad and the functions (bind and ret) and methods (bnd() and ret()) on which they depend operate on only one type: every possible JavaScript value. All of them return monads. A monad can be a wrapper for a primitive value, and array, a monad, or anything else.

We begin with a discussion of bind() and ret(). The bnd() and ret() methods were added to the Monad prototype and will be discussed later.

bind accepts any javascript value as its argument and returns a function that operates on functions, always returning a similar function until it encounters the "terminate" flag. There is one restriction of the values returned by the functions that come after a call to bind: They must return monads.

ret() accepts any JavaScript value and returns that value wrapped in a monad.

  ret(v) = m where m.x = v 
A chain of computations returns an array of each succeeding computation. Here's an example:

  bind(0)(v => ret(v+3))(v => ret(v*v*v))(terminate) // [3,27] 
Despite the way it looks, (v => ret(v+3)) doesn't take (v => ret(v*v*v)) as its argument. bind(0) obviously affects the expressions that follow it. Here how:
```js
  function bind (x, ar = []) {
    this.ar = ar;
    return function (func, ...args) {
      if (func.name === "terminate") return ar;
      var y = func(x, ...args) 
      ar.push(y.x);
      return bind(y.x, ar);
    }
  };  
```
The invisible functions that stand ready to operate on the next function you provide are the return values of bind(m.x) where m is the return value of the previous function. bind is coded only once, at the beginning, but it executes repeatedly along a chain of computations until it reaches the "terminate" flag.

Here's another way of saying essentially the same thing: If m is returned by the most recent function you have added to the chain, the return value of bind(m.x) awaits your next addition.

Here is the definition of ret():
```js
  function ret (val, id = "default") {
    if (val instanceof Monad && arguments.length === 2)
      return window[val.id] = new Monad(id, val.id) 
    if (val instanceof Monad)
      return window[val.id] = new Monad(val.x, val.id)
    return window[id] = new Monad(val, id);
  } 
```
As you see, ret() encapsulates values that are not monads but does not return monads containing monads. There are ways to next monads within monads; for example, monad m1 becomes the value of m2 when you write:
    var m2 = new Monad(m1, "m2") 
But using ret() on non-monad value v and using it again on the result we see:
```js
    let m = ret(v)
    then m.x === v 
    but ret(m) === m 
    and m.x === v  nothing changed. 
```    
Let's examine bind more closely. By using "ar" in three places, the following example illustrates the fact that the result of every computation in a chain is available to every computation that comes after it.
```js
  bind(1)(addC(2))(cubeC)(addC(3))(multC(ar[0]))(multC(ar[0]))
  (addC(30))(multC(1/ar[2]))(terminate)
    // [3, 27, 30, 90, 270, 300, 10] 
Or to get only the final result:

  bind(1)(addC(2))(cubeC)(addC(3))(multC(ar[0]))(multC(ar[0]))
  (addC(30))(multC(1/ar[2]))(terminate).pop()
    // 10  
```    
addC, cube and multC (above) are defined as follows:
```js
    const addC = a => b => ret(a+b);
      
    const multC = a => b => ret(a*b);

    const cubeC = a => ret(a*a*a);  
```
bind()'s second argument is an array that is automatically provided. It is possible to substitute any array you like for the default starting array [].

Values v that satisfy "v instanceof Monad" (called "monads" in this discussion) are very different from the Haskell monads, but they are similar in that both behave like the monads of category theory without actually being category theory monads. See Hask is not a category. by Andrej Bauer and the Discussion below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws (see below) helps instill confidence that the monads are robust, versatile, and reliable tools for isolating and chaining sequences of javascript functions. 

Reactivity occurs naturally in the Cycle.js framework. Some developers find that Cycle.js has a steep learning curve. It isn't so bad if you start with Andr Staltz' Overview of Cycle.js. Its sheer elegance might take your breath away. 

The monads do not depend on Cycle.js. They can be used in React, Node, and all other browser-based applications. I happen to prefer Cycle.js working in conjunction with my Haskell websockets server. 

This project was created by and is actively maintained by me, David Schalk. The code repository is at monads-for-javascript You can comment at Reddit or in the Comments section near the end of this page 

Snabbdom xstream, and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and learning so many supporting files are included as scripts in the index.html page. 
Alternative Monad Functionality

Chaining of JavaScript procedures usually occurs by means of methods inside of linked objects. rather than by means of external functions like bind(). Instances of Monad can also link by means of a method. It is called "bnd()" and it, along with "ret()", were made available as follows:
```js
  Monad.prototype.bnd = function (func, ...args) {
    var m = func(this.x, ...args)
    var ID;
    if (m instanceof Monad) {
      ID = testPrefix(args, this.id);
      window[ID] = new Monad(m.x, ID);
      return window[ID];
    }
    else return m;
  };
```
  Monad.prototype.ret = function (a) {
    return window[this.id] = new Monad(a, this.id);
  }; 
This seems less functional, less like Haskell. It doesn't pass functions down the chain but rather objects with exposed methods. But is has endearing features. Look how values move along the chain until, at the end they combine to yield 42. This would be impossible with bind(), which is why bind() has ar. The code below looks a bit like the lambda calculus, the essence of functional programming.

  ret(2).bnd(v => add(v,1).bnd(cube).bnd(p => add(p,3)
  .bnd(() => ret(p/3).bnd(add,3).bnd(z => [v,p,z,v*p-z]))))
    // [1,27,12,42] 
Haskell Monad Laws



Left Identity
  m.ret(v).bnd(f, ...args).x === f(v, ...args).x

  ret(v).bnd(f, ...args).x === f(v, ...args).x

  ret(m) === m

  Haskell monad law: (return x) >>= f ≡ f x  
Right Identity
  m.bnd(m.ret) === m  For all m where 
    (m.constructor === Monad) === true    

  m.bnd(ret) === m  For all m where 
    (m.constructor === Monad) === true

  bind(m)(retrn)(terminate) === m  For all m where 
    (m.constructor === Monad) === true
    
  Haskell monad law: m >>= return ≡ m 
Commutivity
  eq(m.bnd(f, ...args).bnd(g, ...args), 
  m.bnd(v => f(v, ...args).bnd(g, ...args)))

  eq(bind(ret(v))(f, ...args)(g, ...args)(terminate),
   bind(ret(3,'m'))(x => f(x, ...args))(g, ...args)(terminate))

  Haskell: (m >>= f) >>= g ≡ m >>= ( \x -> (f x >>= g) ) 
Additional expressions showing "ret" is the left and right identity function.
  m.ret(3).bnd(ret).bnd(cube).bnd(ret).x === 
    m.ret(3).bnd(cube).x

  bind(ret(3))(ret)(cube)(ret)(terminate).pop().x === 
    bind(ret(3))(cube)(terminate).pop().x 
Examples demonstrating commutivity
  eq(bind(ret(3))(ret)(cube)(ret)(terminate),
    bind(ret(3))(cube)(terminate)) 
  
  eq(m.ret(3).bnd(ret).bnd(cube).
    bnd(ret),m.ret(3).bnd(cube)) 
Back To The Top
Discussion

The Haskell statement f ≡ g means that f x == g x for all Haskell values x in the domain of f. That is the test applied to JavaScript expressions in the "Monad Laws" section (above). Neither the == nor the === operator would provide useful information about the behavior of instances of Monad. Those operators test objects for location in memory. If the left and right sides of predicates create new instances of m, then the left side m and the right side m wind up in different locations in memory. So we expect m.ret(3) === m.ret(3) to return false, and it does. We want to answer the question ≡ answers in Haskell: Can the left and right sides be substituted for one another and still yield the same results.
Comparison With Haskell Monads

By the definition of "monad" in category theory, all morphisms (functions by analogy here) are commutative and have a left and right identity morphism. ret() is our left and right identity function. The expression eq(m1,m2) returns true if and only if m1.x === m2.x and m1.id === m2.id. m1 === m2 returns false if m1 and m2 are in different locations in memory. The Haskell "≡" operator provides information similar to eq().

  function eq (mon1, mon2) {
    if (mon1.id === mon2.id && mon1.x === mon2.x) return true;
    else return false;
  } 
Here are some identity comparisons:

  bind(m)(ret,'m')(terminate) === m  // Right identity 
  ret(m) === m                       // Left Identity  
  eq(bind(m)(ret)(cube)(terminate),
    cube(m.x))                       // Similar to Haskell right identity
  bind(retrn(m))(terminate) === m    // Similar to Haskell left identity
  eq(bind(m)(ret)(cube)(ret)(terminate),
    cube(m.x))                       // Inserting ret has no effect   
The Haskell identity laws are:

    return a >>= k ≡ k a   // Left identity
    m >>= return ≡ m       // Right identity  
The Haskell commutivity law is:

  (m >>= f) >>= g ≡ m >>= ( \x -> (f x >>= g) ) 
And here it is in terms of our JavaScript monads:

  eq(bind(ret(3,'m'))(f, ...args)(g, ...args)(terminate),
     bind(ret(3,'m'))(x => f(x, ...args))(g, ...args)(terminate))
  
  EXAMPLE:

  eq(bind(ret(3,'m'))(add,1)(cube)(terminate),
     bind(ret(3,'m'))(x => add(1,x))(cube)(terminate)) 
The Haskell programming language borrowed the term "monad" from the branch of mathematics known as category theory. This was appropriate because Haskell monads, along with the function return and the "bind" operator >>=, behave quite a bit like category theory monads, and the inspiration for them came out of category theory. For Haskell monads to actually be category theory monads, they would need to reside in a category-theory category. They don't, although the Haskell mystique tends to give newcomers to the language the impression that they do. See Hask is not a category.
Research into ways of defining a Haskell category appears to be ongoing. This research involves tinkering with special constraints, omitted features, and definitions of morphisms that are not Haskell functions. When a definition of the category is established, Haskell monads are then shown to be, in some contrived context, category-theory monads. Devising such schemes are instructive academic exercises, but I think application developers will always want and need tools which lie outside of the closed space of any category.

However, imitating definitions and patterns found in category theory, as Haskell does in defining the functor, monoid, and monad type classes, was a stroke of genius that vastly enriched the Haskell programming language and brought it into the mainstream as a viable alternative to java, c++, etc. This website runs efficiently on a Haskell websockets server. The modified Haskell Wai Websockets server has proven to be extraordinarily easy to maintain as new requirements become necessary. For example, modifying the server to send chat messages and shared todo lists only to members of the same group was a trivial task. It required just a few lines of no-brainer pattern-matching code.

Other JavaScript monad schemes mirror type theory and Haskell with their type constructors and monads that operate on types. Examples include Curiosity-Driven and Fantasy Land. For me, superimposing such abstractions over JavaScript diminishes it. It is easy to include some type checking code in function definitions where it is thought to be helpful. For example, if someone enters inappropriate data in a form, a message explaining the mistake can be displayed. I enjoy the freedom and versatility of JavaScript as it is.
Monad Demonstrations

The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history (all group members see your score decrease or increase as you navigate backwards and forwards). Monads are shown performing lengthy mathematical computations asycronously in web workers. Variations on the Monad theme encapsulate state. The error checking monad carries occurrences of NaN and runtime errors through sequences of computations much like the Haskell Maybe monad.

The game code is fairly concise and intuitive. A quick walk-through is presented at.here. To see monadic functionality at work, I suggest that you take a look at the section captioned Asynchronous Processes
But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of pure, chainable functions, such as the functions in the Underscore and Jquery libraries, understanding our monads might elevate you to the comfort zone you seek.

The Game

People who are in the same group, other than the default group named "solo", share the same todo list, chat messages, and simulated dice game. In order to see any of these, you must establish a unique identity on the server by logging in. The websockets connection terminates if the first message the server receives does not come from the sign in form. You can enter any random numbers, letters, or special characters you like. The server checks only to make sure someone hasn't already signed in with the sequence you have selected. If you log in with a name that is already in use, a message will appear and this page will be re-loaded in the browser after a four-second pause.

Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then erased and the application is ready to start accumulating a new history.

Your user name for trying out the game, todo list, and chat demonstrations is a random permutation of the first 14 letters of the alphabet. In the comments section, soon to be near the bottom of this page, you can chose your own persistent user name and password. These facilitate leaving comments which can later be revised or removed.



Game, Todo List, Text Messages

RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time RL is clicked, one point is deducted. Three goals wins the game.


addsubtractmultdivconcat

ROLLBACKFORWARD
Selected numbers:
Operator: 0
Index: 1
Clear selected numbers
When traversing the game history, any time there are two selected numbers you can click any operator to obtain a result; or you can clear the selected numbers and click numbers of your choice. You can do anything you want with displayed numbers, but if there is a previously selected operator and you click a second number (shown after "Selected numbers:"), a computation will be performed using the previously selected operator. If that happens and it isn't what you want, you can back up and select a different operator before clicking a second number.

Change group: 
You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file accessible by the server. You can use this combination to edit or delete your saved comments now or in the future after you log in.

Register or log in here:






TOGGLE TODO_LIST

TOGGLE CHAT

User Data Currently Held in the Server's State TVar

4603461045102-1

*****************************************************
Name: 4603461045102
Group: solo

nobody 0 | 0 judy 0 | 0

_________________________________________________
Join group "t" if you want to see some previously created tasks.

Enter author, responsible person, and task here:




Message: 

____________________________________________________________________________________________________________
A Few Words About Cycle.js

Opinionated frameworks tend to annoy and frustrate me. Cycle, on the other hand, is easy on my mind. I love it.

In the early stages of developing this website, I had functions that mutated global variables. Sometimes, I directly mutated values in the DOM with statements like "document.getElementById('id').innerHTML = newValue". Cycle didn't object. Over time, mutating variables and manhandling the DOM gave way to gentler techniques that I developed in conjunction with the "proof of concept" features that I was in a hurry to get up and running.

Handling events is a breeze. Drivers eliminate the need to name event emitters or observers. Driver output in main() is available to any function or block of code that is interested. The result of any callback is in an event in a stream of events that automatically merge with the other streams that define main's return value, a blueprint for the updated user interface. This is breathtakingly elegant. main() is called only once, when the application loads. After that, the application hums like an enchanted perpetual motion machine.

function workerDriver () {
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
};   
Back To The Top
Asynchronous Processes

The next five demonstrations involve computations of prime numbers, Fibonacci numbers, prime Fibonacci numbers, and prime factors of numbers. Several instances of a constructor named "MonadState" (simple and not an ES6 class) are utilyzed, three of which maintain and share share an array of prime numbers maintained in the MonadState instance named "primesState". An array of arrays of prime factors of numbers is maintained in MonadState instance "decompMonad", which is shared by the fourth and fifth examples in this series of async examples. Here is the definition of MonadState:


    function MonadState(g, state) {
      this.id = g;
      this.s = state;
      this.bnd = (func, ...args) => func(this.s, ...args);
    }    
The first demonstration displays the Fibonacci series up to an upper bound entered in the browser by a user. It also displays a list of the prime Fibonacci numbers in the list of Fibonacci numbers, along with the largest prime number that was generated during a computation.

The progress display confirmed that it took almost no time to generate the list of Fibonacci numbers or to select the ones that are prime. The bottleneck was computing the primes. To see the effectiveness of saving computed prime numbers, I deleted three zeros and then added them back again. At 100,000,000,000,000 and 1,000,000,000,000, the lag times were 67 microseconds and 124 microseconds, respectively. The display, in a brief flash, showed that those delays occorred mostly during the selection of prime Fibonacci numbers from the array of Fibonacci numbers. Firefox's performance was comparable to Chrome's. I entered 1,000,000.000,000,000 in the Firefox browser, and after approximately 35 seconds five additional Fibonacci numbers appeared, topped by 806,515,533,049,393. The largest prime number that had to generated to achieve that result was 28,399,249. A total of 2,640,405 prime numbers were generated.

The demonstrations do not block the main execution thread. Computations are performed in web workers and the results are stored for further use in the main thread.

According to the The On-Line Encyclopedia of Integer Sequences these are the first eleven proven prime Fibonacci numbers: 2, 3, 5, 13, 89, 233, 1597, 28657, 514229, 433494437, 2971215073, and 99194853094755497. The eleventh number, 2971215073, is as far as you can go on an ordinary desktop computer. 
The circles below are red during the computation of A. Fibonacci numbers, B. Prime numbers, and C. prime fibonacci numbers. A, B, and C are shown from left to right. On my desktop computer, the middle circle in the red state starts bcoming briefly discernable a 10,000,000, which is where the largest attainable prime Fibonacci number (2971215073), first appears. The lag time in the Chrome browser at 1,000,000,000,000,000 was a little over thirty-five seconds. After deleting and then replacing the last 0, the delay was under five seconds, demonstrating a significant benefit derived from retrieving previously generated prime numbers instead of computing them again. But once a large array of primes has been generated, lookup times for small number exceeds the time it would take to generate a fresh array of primes. When the square root of the number in the box is less than the largest prime number in primesMonad.s[3], the only circle that turns red is the right one, corresponding to picking out the prime Fibonacci numbers.



The elapsed time is 0 milliseconds.



Fibonacci Numbers

Prime Fibonacci Numbers

The largest generated prime number.

The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9's, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:




Next, two comma-separated numbers are decomposed into arrays of their prime factors, and those arrays are used to compute their lowest common multiple (lcm). For example, the lcm of 6 and 9 is 18 because 3*6 and 2*9 are both 18. The lcm of the denominators of two fractions is useful in fraction arithmetic; specifically, addition and subtraction. On my desktop computer, two seven digit numbers resulted in a lag of a few seconds when prime numbers had not been previously generated.




The least common multiple of undefined and undefined is undefined
The largest common factor of undefined and undefined is undefined
TEST: undefined * undefined === undefined * undefined
RESULT: false
Doing Things The Hard Way

The next two demonstration generate the same results as the previous two; but in doing so, they also generate and add to a shared and persistent (for the duration of the browser session) array of arrays of prime decompositions of the positive integers. The array is the value of decompMonad.s. It is re-used as the starting point for generating larger arrays, or as a sort of lookup table if a required prime decomposition has already been computed. The index of an array is the number whose decomposition is in the array so, for example, array-of-arrays[12] is [2,2,3]. The actual code will be shown later and is also available at the Github repository.

Enter a number here: 


The next demonstration shares the array of arrays of prime decompositions with the previous demonstration. That array is kept in a MonadState instance named "decompMonad". Computing prime decompositions of numbers that end up being ignored is clearly inefficient, so please bear in mind that a demonstration of a JS-monads way to keep mutable state in immutable, composable, globally accessable objects.

Enter two comma-separated integers here: 


The least common multiple of undefined and undefined is undefined
The largest common factor of undefined and undefined is undefined
TEST: undefined * undefined === undefined * undefined
RESULT: false
The Easy Way

This has been a demonstration of MonadState and MonadState transformers. If you really want the least common multiple or the largest common factor of two positive integers, there is no need to generate prime numbers. The next and final demonstration in this section does not use a web worker. The computations block the main thread, but only for a few microseconds.




The least common multiple of undefined and undefined is undefined
The largest common factor of undefined and undefined is undefined
TEST: undefined * undefined === undefined * undefined
RESULT: false
The code for the previous demonstrations is available at the Github repository, and will soon be available here in an appendix. primesMonad and the functions primarily involved in its transformation are shown below:

    function MonadState(g, state) {
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
    }  
primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code:

    var fibKeyPress5$ = sources.DOM
        .select('input#fib92').events('keyup');

    var primeFib$ = fibKeyPress5$.map(e => {
      workerB.postMessage([primesMonad.s, e.target.value]);
    });   
The user's selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling:

execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB.

    const workerB$ = sources.WWB.map(m => {
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
    }); 
MonadEr - An Error-Catching Monad

Instances of MonadEr function much the same as instances of Monad, but when an instance of MonadEr encounters an error, it ceases to perform any further computations. Instead, it passes through every subsequent stage of a sequence of MonadEr expressions, reporting where it is and repeating the error message. It will continue to do this until it is re-instantiated or until its bnd() method runs on the function clean().

Functions used as arguments to the MonadEr bnd() method can be placed in quotation marks to prevent the browser engine from throwing reference errors. Arguments can be protected in the same manner. Using MonadEr can prevent the silent proliferation of NaN results in math computations, and can prevent browser crashes due to attempts to evaluate undefined variables.

The monad laws hold for MonadEr instances. The following relationships were verified in the Chrome console:

    ret3(0,'t',[])  // t is now an instance of MonadEr with t.x = 0 and t.e = [].

    t.ret(3).bnd(cube3).x === cube(3).x
    ret3(3).bnd(cube3).x === cube3(3).x

    t.bnd(t.ret) === t
    t.bnd(ret) === t

    t.ret(0).bnd(add3, 3).bnd(cube3).x ===
    t.ret(0).bnd(v => add3(v,3).bnd(cube3)).x  
Comments

When this page loads in the browser, a user name is automatically generated in order to establish a unique Websocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password.

The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made.

If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again.

Comments are stored in a text file on the server in memory in a TVar. The TVar blocks access while an addition, modification, or delete action takes place. Attempts to access the comments in the MVar at such times do not result in error. Processes attempting to gain access que up. They gain access on a first in first out basis, so no process attempting to add, modify, or delete a comment will hang indefinitely. Soon, the registered names and passwords will be in an MVar.


Register




COMMENTS




mary commented: How about a video presentation, David?

***************************************************************
mary commented: You guys shouldn't talk like that. It's inappropriate in a comments section.

***************************************************************


When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. An HTML string of comments goes in commentMonad.html.

The processes of adding a new comment or revising an existing one are initiated by entering text in the browser. The process of deleting a comment is set in motion by clicking a button.

These operations are designed to send and receive a minimal amount of information. A new comment is sent to the server and the server saves it and broadcasts it to all online browsers. A revised comment is sent to and from the server with no other information. Revising a comment involves sending the new version, along the index number of the comment in the array in commentMonad.s[1], to and from the server. Only the index number is sent and broadcast when a comment is deleted.

Since the history of comment section is not being preserved, the functions that make it work mutate commentMonad.s. Functions never mutate primitive values outside of their scopes. When they change the value of a monad residing in the global space, the old monad is left behind and a fresh one is instantiated with the new value. the ret() function and method, the bind() function, and the bnd() method all do this. Mutating expressions such as m.x = v for some monad m and value v is discouraged. In some earlier versions, I hid the x attribute in a closure. The getter "get()" is still available. The values of monads are currently exposed because, for example, "m.x[3].filter ..." is clearer and more aesthetically pleasing (to me, anyway) than "get(m)[3].filter ...".

When a comment is created, modified, or deleted, a websockets message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received and forwarded acted upon by functions contained in a file named comments.js. This is a script contained in index.html, so the functions are available in the Chrome and Firefox developer consoles.

Here is the entire Comments.js file:

function showFunc (name, name2) {return name == name2 ? 'inline-block' : 'none'}

var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
};

var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

MonadState3.prototype.html = [];

MonadState3.prototype.init = function (str) { // All comments delivered on load.
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  this.html = process(this.s[1]);
  return this.html
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>');
  this.s[1] = this.s[1].filter(v => (v != ""));
  this.html = process(this.s[1]);
  return this.html;
}

MonadState3.prototype.edit = function (num,txt) {
  this.s[1].splice(num,1,txt)
  this.s[0] = this.s[1].join("<@>");
  this.html = process(this.s[1]);
  return this.html;
};

MonadState3.prototype.remove = function (num) {
  this.s[1].splice(num,1);
  this.s[0] = this.s[1].join("<@>");
  this.html = process(this.s[1]);
  return this.html;
};

function process (arr) { //Assembles the HTML for display.
  var n = -1;
  var html = [];
  arr.map(a => { 
    var x = a.split("<o>");
    x[1] = x[1]
    show = showFunc(x[0], pMname.x);
    console.log('<><><><> in process. x[0],pMname.x, show', x[0],pMname.x,show);
    n+=1;
    html.push(h('div#'+n, [
      h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
      h('br'),
      h('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      h('button#deleteB', {props: {innerHTML: 'delete'}, style: 
          {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
  return html;
} 
***************************************************************************************




Back To The Top
Feedback From the Error Monad


Analogues to the Haskell Monad Laws

Left Identity
  m.ret(v).bnd(f, ...args).x === f(v, ...args).x

  ret(v).bnd(f, ...args).x === f(v, ...args).x

  retrn(m) === m

  Haskell monad law: (return x) >>= f ≡ f x  
Right Identity
  m.bnd(m.ret) === m  For all m where 
    (m.constructor === Monad) === true    

  m.bnd(ret) === m  For all m where 
    (m.constructor === Monad) === true

  bind(m)(retrn)(terminate) === m  For all m where 
    (m.constructor === Monad) === true
    
  Haskell monad law: m >>= return ≡ m 
Commutivity
  m.bnd(f, ...args).bnd(g, ...args).x === 
    m.bnd(v => f(v, ...args).bnd(g, ...args)).x

  Haskell monad law: (m >>= f) >>= g ≡ m >>= ( \x -> (f x >>= g) ) 
Additional expressions showing "ret" is the left and right identity function.
  m.ret(3).bnd(ret).bnd(cube).bnd(ret).x === 
    m.ret(3).bnd(cube).x

  bind(ret(3))(ret)(cube)(ret)(terminate).pop().x === 
    bind(ret(3))(cube)(terminate).pop().x 
Examples demonstrating commutivity
  m.ret(0).bnd(add, 3).bnd(cube).x === 
    m.ret(0).bnd(v => add(v,3).bnd(cube)).x 

  bind(ret(0))(add,3)(cube)(terminate).pop().x === 
    bind(ret(0))(v=>add(v,3))(cube)(terminate).pop().x 
Back To The Top
Discussion

The Haskell statement f ≡ g means that f x == g x for all Haskell values x in the domain of f. That is the test applied to JavaScript expressions in the "Monad Laws" section (above). Neither the == nor the === operator would provide useful information about the behavior of instances of Monad. Those operators test objects for location in memory. If the left and right sides of predicates create new instances of m, then the left side m and the right side m wind up in different locations in memory. So we expect m.ret(3) === m.ret(3) to return false, and it does. We want to answer the question ≡ answers in Haskell: Can the left and right sides be substituted for one another and still yield the same results.

.

.

.

.

.






