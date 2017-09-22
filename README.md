  <a name="back"></a>

#Monads In Javascript 

A Cycle.js application

## FUNCTIONAL REACTIVE PROGRAMMING

## WITH CUSTOM MONADS AND CYCLE.JS


I am publishing this page mainly:

(1) To share my "bind()" function along with a few other inventions with website developers and

(2) To help people who are interested in acclimating their thought processes to functional and reactive ways of programming. In order to feel comfortable with functional, reactive code, I think novices and seasoned programmers alike must grow new synaptic structures in their brains. This comes with practice.
```
      Understanding without practice
      adrift in a sea of confusion. 
      understanding with practice
      smooth sailing through every challenge 
```
What I call "monads" here are objects which respond affirmatively to "typeof object === Monad". They have two attributes, id and x. monad.x is what I sometimes call the "value" of the monad.

bind() takes a monad as its argument and returns a function that operates on functions, returning functions similar to itself untill it encounters the "terminate" flag. This looks like bind(m)(function1)(function2)(function3) ... where m is a monad and the functions operate on the values of the monads returned by the previous function and ruturn monads. Any JavaScript value can be the value of a monad. It is easy to wrap anything in a monad, so the restriction on return values does not restrict what you can do.

Instances of Monad are very simple. Here is the definition of Monad:

    function Monad(z = 'default', ID = 'tempMonad') {
      this.x = z;
      this.id = ID;
    }; 
Like the >>= (called "bind") operator in the Haskell programming language, bind() operates on functions that take values and return instances of Monad. "ret()", defined below, resembles Haskell's "return" function in that it is the left and right identity function on monads, and it takes a value as an argument and returns a monad containing that value.

    var m = ret(v)
    m.x === v  
Here are the definitions of Monad and ret:

  function ret (v, id) {
    return window[id] = new Monad(v, id);
  )

  function ret (val, id = "default") {
    if (val instanceof Monad && arguments.length === 2)
      return window[val.id] = new Monad(id, val.id) 
    if (val instanceof Monad)
      return window[val.id] = new Monad(val.x, val.id)
    return window[id] = new Monad(val, id);
} 
As you see, ret() encapsulates values that are not monads but does not return monads containing monads. Nesting can be accomplished. For example, monad m1 becomes the value of m2 when you write:
    var m2 = new Monad(m1, "m2") 

Before seeing the potentially confusing definition of bind(), let's take a look at bind() in action. The following code assigns 0 to monad "z1", 3 to z2, 27 to z3, 30 to z4 and 27000 to z4, and 900 to z6. The z's were created on the fly if they did not already exist. Note that prior computation results are available along the chain.
```js
bind(ret(0,'z1'))(add,3,"$z2")(cube,"$z3")(add,z2.x,"$z4")
(cube,"$z5")(x=>ret(x/z4.x),"$z6")(terminate)
console.log(z1,z2,z3,z4,z5,z6) 
```
The Chrome console displays: 
```txt
Monad {x: 0, id: "z1"} Monad {x: 3, id: "z2"} 
Monad {x: 27, id: "z3"} Monad {x: 30, id: "z4"} 
Monad {x: 27000, id: "z5"} Monad {x: 900, id: "z6"}  
```
Add and cube are defined as follows:
```js
    function add(a, b) {
      return ret((parseInt(a,10) + parseInt(b,10)));
    }

    function cube(v) {
      return ret(v*v*v);
    }
```    
There is no need to assign names to the intermediate monads if you only want the result. Here is a more succinct version of the same computation:
```js
  bind(ret(2))(x=>add(cube(x+1).x,x+1))
  (v=>ret(cube(v).x/v))(terminate).x        // 900  
```
Reactivity occurs naturally in the Cycle.js framework. Some developers find that Cycle.js has a steep learning curve. It isn't so bad if you start with Andr Staltz' free [Overview of Cycle.js](https://egghead.io/courses/cycle-js-fundamentals). Its sheer elegance might take your breath away. 

This project was created by and is actively maintained by me, David Schalk. The code repository is at JS-monads You can comment at Reddit
Snabbdom, xstream, and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimention and learning so many supporting files are included as scripts in the index.html page.

Here is the definition of bind():
```js
  function bind (m) {
    return function (func, ...args) {
      if (func.name === "terminate") return m; 
      var y = func(m.x, ...args) 
      var id = testPrefix(args, y.id)
      return bind(ret(y.x, id));
    }
  };  
```
When using bind(), coders provide only one argument, which must be an instance of Monad. The funtions provided to bind(m) run sequentially from left to right, using the value returned by the previous function. When "terminate" flag is provided as the final argument in a sequence, the result of the most recent computation is returned.

testPrefix() looks for strings prefixed by "$". If it finds one, y.id is assigned the value of the substring that follows the prefix. If no string beginning with "$" is found, y.id will not change. y.id will never be undefined because functions provided to bind must return instances of Monad. Here is the definition of testPrefix:
```js
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
``` 
All values v that satisfy "v instanceOf Monad" (We call them "monads" in this discussion) are very different from the Haskell monads, but they are similar in that both behave like the monads of category theory without actually being category theory monads. See Hask is not a category. by Andrej Bauer and the Discussion below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws (see below) helps instill confidence that the monads are robust, versatile, and reliable tools for isolatin?g and chaining sequences of javascript functions.

##Alternative Monad Functionality
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

  Monad.prototype.ret = function (a) {
    return window[this.id] = new Monad(a, this.id);
  }; 
```  
The monad methods (above) are still being used to support legacy code on this site. Demonstrations showing that m.ret is the left and right identity on monads, and showing that m.bnd is cummutative are in the Appendix.

##Comparison with Haskell monads
By the definition of "monad" in category theory, all morphisms (functions by analogy here) are commutative and have a left and right identity morphism. retrn() is our left and right identity function. For all monads m:
```js
    retrn(m) === m
    bind(m)(retrn)(terminate) === m 
    bind(retrn(7,m))(cube)(terminate).id === cube(7,'m').id 
    bind(retrn(7,m))(cube)(terminate).x === cube(7,'m').x 
```
Haskell is very different from Javascript. The Haskell identity laws are:
```
    m >>= return ≡ m   // Left identity
    m >>= return ≡ m   // Right identity
    (m >>= f) >>= g ≡ m >>= ( \x -> (f x >>= g) ) // Commutivity 
```
  bind(ret(3,'m'))(f, ...args)(g, ...args)(terminate).x ===
  bind(ret(3,'m'))(x => f(x, ...args))(g, ...args)(terminate).x
  
  bind(ret(3,'m'))(f, ...args)(g, ...args)(terminate).id ===
  bind(ret(3,'m'))(x => f(x, ...args))(g, ...args)(terminate).id
  
  EXAMPLE:

  bind(ret(3,'m'))(add,1)(cube)(terminate).x ===
  bind(ret(3,'m'))(x => add(1,x))(cube)(terminate).x
  
  bind(ret(3,'m'))(add,1)(cube)(terminate).id ===
  bind(ret(3,'m'))(x => add(1,x))(cube)(terminate).id  
Note: Non-mutating computations are assigned unique places in memory, so we compare the x and id attributes of monadic results. The "≡" operator provides similar information in the Haskell programming language.

In Haskell, commutivity is expressed like this:


The Haskell programming language borrowed the term "monad" from the branch of mathematics known as category theory. This was apropriate because Haskell monads, along with the function return and the operator >>=, behave quite a bit like category theory monads, and the inspiration for them came out of category theory. For Haskell monads to actually be category theory monads, they would need to reside in a category-theory category. They don't, although the Haskell mystique tends to give newcommers to the language the impression that they do. See Hask is not a category.
Research into ways of defining a Haskell category appears to be ongoing. This research involves tinkering with special constraints, omitted features, and definitions of morphisms that are not Haskell functions. When a definition of the category is established, Haskell monads are then shown to be, in some contrived context, category-theory monads. Devising such schemes are instructive academic exercises, but I think application developers will always want and need tools which lie outside of the closed space of any category.

However, imitating definitions and patterns found in category theory, as Haskell does in defining the functor, monoid, and monad type classes, was a stroke of genius that vastly enriched the Haskell programming language and brought it into the mainstream as a viable alternative to java, c++, etc. This website runs efficiently on a Haskell websockets server. The modified Haskell Wai Websockets server has proven to be extraordinarily easy to maintain as new requirements become necessary. For example, modifying the server to send chat messages and shared todo lists only to members of the same group was a trivial task. It required just a few lines of no-brainer pattern-matching code.

Monad Demonstrations

The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history (all group members see your score decrease or increase as you navegate backwards and forwards). Monads are shown performing lengthy mathematical computations asycronously in web workers. Variations on the Monad theme encapsulate state. The error checking monad carries occurances of NaN and runtime errors through sequences of computations much like the Haskell Maybe monad.

The game code is fairly concise and intuitive. A quick walk-through is presented at.here. To see monadic functionality at work, I suggest that you take a look at the section captioned Asynchronous Processes
But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of pure, chainable functions, such as the functions in the Underscore and Jquery libraries, understanding our monads might elevate you to the comfort zone you seek.

The Game

People who are in the same group, other than the default group named "solo", share the same todo list, chat messages, and simulated dice game. In order to see any of these, you must establish a unique identity on the server by logging in. The websockets connection terminates if the first message the server receives does not come from the sign in form. You can enter any random numbers, letters, or special characters you like. The server checks only to make sure someone hasn't already signed in with the sequence you have selected. If you log in with a name that is already in use, a message will appear and this page will be re-loaded in the browser after a four-second pause.

Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then erased and the application is ready to start accumulating a new history.

Your user name for trying out the game, todo list, and chat demonstrations is a random permutation of the first 14 letters of the alphabet. In the comments section, soon to be near the bottom of this page, you can chose your own persistent user name and password. These facilitate leaving comments which can later be revised or removed.



Game, Todo List, Text Messages

RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time RL is clicked, one point is deducted. Three goals wins the game.


When traversing the game history, any time there are two selected numbers you can click any operator to obtain a result; or you can clear the selected numbers and click numbers of your choice. You can do anything you want with displayed numbers, but if there is a previously selected operater and you click a second number (shown after "Selected numbers:"), a computation will be performed using the previously selected operator. If that happens and it isn't what you want, you can back up and select a different operater before clicking a second number.

You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file accessible by the server. You can use this combination to edit or delete your saved comments now or in the future after you log in.

A Few Words About Cycle.js

Opinionated frameworks tend to annoy and frustrate me. Cycle, on the other hand, is easy on my mind. I love it.

In the early stages of developing this website, I had functions that mutated global variables. Sometimes, I directly mutated values in the DOM with statements like "document.getElementById('id').innerHTML = newValue". Cycle didn't object. Over time, mutating global variables and manhandling the DOM gave way to going with the flow of the framework. 

In Cycle.js, handling events is a breeze. Drivers eliminate the need to name event emitters or observers. Driver output in main() is available to any function or block of code that is interested. The result of any callback is in an event in a stream of events that automatically merge with the other streams that define main's return value, a blueprint for the updated user interface. This is breathtakingly elegant. main() is called only once, when the application loads. After that, the application hums like an enchanted perpetual motion machine.

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

These are displayed in the [online demonstration](http://schalk.net:3055):

The elapsed time is 0 milliseconds.

Fibonacci Numbers

Prime Fibonacci Numbers

The largest generated prime number.

The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9's, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. 

Next, two comma-separated numbers are decomposed into arrays of their prime factors, and those arrays are used to compute their lowest common multiple (lcm). For example, the lcm of 6 and 9 is 18 because 3*6 and 2*9 are both 18. The lcm of the denominators of two fractions is useful in fraction arithmetic; specifically, addition and subtraction. On my desktop computer, two seven digit numbers resulted in a lag of a few seconds when prime numbers had not been previously generated.

The least common multiple of undefined and undefined is undefined
The largest common factor of undefined and undefined is undefined
TEST: undefined * undefined === undefined * undefined
RESULT: false

###Doing Things The Hard Way

The next two demonstration generate the same results as the previous two; but in doing so, they also generate and add to a shared and persistent (for the duration of the browser session) array of arrays of prime decompositions of the positive integers. The array is the value of decompMonad.s. It is re-used as the starting point for generating larger arrays, or as a sort of lookup table if a required prime decomposition has already been computed. The index of an array is the number whose decomposition is in the array so, for example, array-of-arrays[12] is [2,2,3]. The actual code will be shown later and is also available at the Github repository.

The next demonstration shares the array of arrays of prime decompositions with the previous demonstration. That array is kept in a MonadState instance named "decompMonad". Computing prime decompositions of numbers that end up being ignored is clearly inefficient, so please bear in mind that a demonstration of a JS-monads way to keep mutable state in immutable, composable, globally accessable objects.

The online demonstration contains the following text.

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
The code for the previous demonstrations is available at the Github repository, and will soon be available here in an appendex. primesMonad and the functions primarily involved in its transformation are shown below:

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
primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the rele2ant code:

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

If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the passord does not match the password in the record, you will be asked to try again.

Comments are stored in a text file on the server in memory in a TVar. The TVar blocks access while an addition, modification, or delete action takes place. Attempts to access the comments in the MVar at such times do not result in error. Processes attempting to gain access que up. They gain access on a first in first out basis, so no process attempting to add, modify, or delete a comment will hang indefinitely. Soon, the registered names and passwords will be in an MVar.


Register




COMMENTS




mary commented: How about a video presentation, David?

***************************************************************
david commented: Yes. I plan to make a series of them.

***************************************************************
ann commented: Cool beans. May I suck your cock?

***************************************************************
david commented: Yes, but 0nly if you take it up your ass. I want to finish in your rectum.

***************************************************************
ann commented: I'm excited now. Of course you may.

***************************************************************
mary commented: You guys shouldn't talk like that. It's inappropriate in a comments section.

***************************************************************
0277778636912 commented: pete,1

***************************************************************


When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. An HTML string of comments goes in commentMonad.html.

The processes of adding a new comment or revising an existing one are initiated by entering text in the browser. The process of deleting a comment is set in motion by clicking a button.

These operations are designed to send and receive a minamal amount of information. A new comment is sent to the server and the server saves it and broadcasts it to all online browsers. A revised comment is sent to and from the server with no other information. Revising a comment involves sending the new version, along the index number of the comment in the array in commentMonad.s[1], to and from the server. Only the index number is sent and broadcast when a comment is deleted.

Since the history of comment section is not being preserved, the functions that make it work mutate commentMonad.s. Functions never mutate primitive values outside of their scopes. When they change the value of a monad residing in the global space, the old monad is left behind and a fresh one is instantiated with the new value. the ret() function and method, the bind() function, and the bnd() method all do this. Mutating expressions such as m.x = v for some monad m and value v is discouraged. In some earlier versions, I hid the x attribute in a closure. The getter "get()" is still available. The values of monads are currently exposed because, for example, "m.x[3].filter ..." is clearer and more esthetically pleasing (to me, anyway) than "get(m)[3].filter ...".

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
Disussion

The Haskell statement f ≡ g means that f x == g x for all Haskell values x in the domain of f. That is the test applied to Javascript expressions in the "Monad Laws" section (above). Neither the == nor the === operator would provide useful information about the behavior of instances of Monad. Those operators test objects for location in memory. If the left and right sides of predicates create new instances of m, then the left side m and the right side m wind up in different locations in memory. So we expect m.ret(3) === m.ret(3) to return false, and it does. We want to answer the question ≡ answers in Haskell: Can the left and right sides be substituted for one another and still yield the same results.

.

.

.

.

.
