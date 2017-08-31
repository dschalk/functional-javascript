  <a name="back"></a>

#Monads In Javascript 

PLEAE NOTE: This project is constantly evolving and this README.md file is now out of date. To see what this is all about, go to [http://schalk.net:3055](http://schalk.net:3055)  -- David Schalk

I am publishing this website mainly:

(1) To share my "bind()" function along with a few other inventions with website developers and

(2) To help people who are interested in acclimating their thought processes to functional and reactive ways of programming. In order to feel comfortable with functional, reactive code, I think novices and seasoned programmers alike must grow new synaptic structures in their brains. This comes with practice. Understanding without practice leaves one adrift in a sea of confusion.

bind() works by taking an instance of Monad and returning a function that operates on functions, returning functions similar to itself untill it encounters the "terminate" flag instead of another function.

Instances of Monad are very simple. Here is the definition of Monad:
```js
    function Monad(z = 'default', ID = 'tempMonad') {
      this.x = z;
      this.id = ID;
    };
```    
Like the >>= (called "bind") operator in the Haskell programming language, bind() operates on functions that take values and return instances of Monad. "ret()", defined below, resembles Haskell's "return" function. It takes any valid JavaScript value, including deeply nested arrays, instances of Monad, etc., and returns that value encapsulated in an instance of Monad. Here's the definition:
```js
  function ret (v, id) {
    return window[id] = new Monad(v, id);
  }; 
```  
Now, let's see bind() in action. the following code assigns 0 to monad "z0", 3 to z1, 27 to z2, 30 to z3 and 900 to z4, 9 to z5, 7 to z6, and 42 to z7. z1, ... z7 might not have been previously defined. It doesn	matter. bind() initiates the series of computations with the generic throw-away function returned by ret().
```js
bind(ret(0,'z1'))(v=>ret(0))(v=>ret(v+3),"$z1")
(v=>ret(v*v*v),"$z2")(v=>ret(v+3),"$z3")(v=>ret(v*v),"$z4")
(v=>ret(v/100),"$z5")(x=>ret(x-2),"$z6")(v=>ret(v*6),"$z7")
(terminate).map(v => console.log("Monad instance",v.id,"has value",v.x));

Chrome console display:

Monad instance m has value 3
Monad instance m2 has value 27
Monad instance m3 has value 30
Monad instance m4 has value 900
Monad instance m5 has value 9
Monad instance m6 has value 45
Monad instance m7 has value 42  
```
Reactivity is implemented in the Cycle.js framework. Some developers find that Cycle.js has a steep learning curve. It isn't so bad if you start with Andr Staltz' Overview of Cycle.js. Its sheer elegance might take your breath away, and make you want to implement something in it right away. 

This project was created by, and is actively maintained by me, David Schalk. The code repository is at JS-monads You can comment at Reddit
Snabbdom, xstream, and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimention and learning so many supporting files are included as scripts in the index.html page.

Here is the definition of bind():
```js
  function bind (m, ar = []) {
    if (!(m instanceof Monad)) {
      console.log('bind operates only on instances of Monad')
      return;
    }
    var m = m;
    var arr = ar;
    var inner = function (func, ...args) { 
      var y = func(m.x, ...args) 
      if (!(m instanceof Monad)) {
        console.log(func, 'does not return a monad');
        return;
      }
      y.id = testPrefix(args, m.id)
      window[y.id] = y;
      if (func.name === "terminate") {
        window[m.id] = new Monad (m.x, m.id);
        arr.push(window[m.id]);
        return ar
      }
      arr.push(window[y.id])
      return bind(window[y.id], arr); 
    };
    return inner
  } 
```  
When using bind(), coders provide only one argument, which must be an instance of Monad. The second argument runs automatically, starting with an empty array and subsequently accumulating the result of each step in a sequence of computations.

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
These monads are like the Haskell monads in that they resemble the monads of category theory without actually being mathematical monads. See Hask is not a category. by Andrej Bauer and the Discussion below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws (see below) helps instill confidence that the monads are robust, versatile, and reliable tools for isolating and chaining sequences of javascript functions.
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

  Monad.prototype.ret = function (a) {
    return window[this.id] = new Monad(a, this.id);
  }; 
```
In the following discussion, "x === y" signifies that the expression x === y returns true. Let J be the collection of all Javascript values, including functions, instances of Monad, etc, and let F be the collection of all functions mapping values in J to instances of Monad with references (names) matching their ids; that is, with window[id] === m.id for some id which is a valid es2015 variable name. The collection of all such instances of Monad along and all of the functions in F is called "M". For any instances of Monad m, m1, and m2 in M and any functions f and g in F, the following relationships follow easily from the definition of Monad:

Analogues to the Haskell Monad Laws
```js
Left Identity
  m.ret(v).bnd(f, ...args).x === f(v, ...args).x

  ret(v).bnd(f, ...args).x === f(v, ...args).x

  bind(ret(v))(f, ...args)(terminate).pop().x === f(v, ...args).x

  Haskell monad law: (return x) >>= f ≡ f x  
Right Identity
  m.bnd(m.ret) === m  For all m where 
    (m.constructor === Monad) === true    

  m.bnd(ret) === m  For all m where 
    (m.constructor === Monad) === true

  bind(m)(ret)(terminate).pop().x === m.x  For all m where 
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
```

Disussion

The Haskell statement f ≡ g means that f x == g x for all Haskell values x in the domain of f. That is the test applied to Javascript expressions in the "Monad Laws" section (above). Neither the == nor the === operator would provide useful information about the behavior of instances of Monad. Those operators test objects for location in memory. If the left and right sides of predicates create new instances of m, then the left side m and the right side m wind up in different locations in memory. So we expect m.ret(3) === m.ret(3) to return false, and it does. We want to answer the question ≡ answers in Haskell: Can the left and right sides be substituted for one another and still yield the same results.

The Haskell programming language borrowed the term "monad" from the branch of mathematics known as category theory. This was apropriate because Haskell monads, along with the function return and the operator >>=, behave quite a bit like category theory monads, and the inspiration for them came out of category theory. For Haskell monads to actually be category theory monads, they would need to reside in a category-theory category. They don't, although the Haskell mystique tends to give newcommers to the language the impression that they do. See Hask is not a category.
Research into ways of defining a Haskell category appears to be ongoing. This research involves tinkering with special constraints, omitted features, and definitions of morphisms that are not Haskell functions. When a definition of the category is established, Haskell monads are then shown to be, in some contrived context, category-theory monads. Devising such schemes are instructive academic exercises, but I think application developers will always want and need tools which lie outside of the closed space of any category.

However, imitating definitions and patterns found in category theory, as Haskell does in defining the functor, monoid, and monad type classes, was a stroke of genius that vastly enriched the Haskell programming language and brought it into the mainstream as a viable alternative to java, c++, etc. This website runs efficiently on a Haskell websockets server. The modified Haskell Wai Websockets server has proven to be extraordinarily easy to maintain as new requirements become necessary. For example, modifying the server to send chat messages and shared todo lists only to members of the same group was a trivial task. It required just a few lines of no-brainer pattern-matching code.

Monad Demonstrations

The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history (all group members see your score decrease or increase as you navegate backwards and forwards). Monads are shown performing lengthy mathematical computations asycronously in web workers. Monads encapsulate state. The error checking monad carries occurances of NaN and runtime errors through sequences of computations much like the Haskell Maybe monad.

The game code is fairly concise and intuitive. A quick walk-through is presented here. To see monadic functionality at work, I suggest that you take a look at the section captioned Asynchronous Processes
But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of pure, chainable functions, such as the functions in the Underscore and Jquery libraries, understanding Monad instances might finally put you in the comfort zone you seek.

The Game

People who are in the same group, other than the default group named "solo", share the same todo list, chat messages, and simulated dice game. In order to see any of these, you must establish a unique identity on the server by logging in. The websockets connection terminates if the first message the server receives does not come from the sign in form. You can enter any random numbers, letters, or special characters you like. The server checks only to make sure someone hasn't already signed in with the sequence you have selected. If you log in with a name that is already in use, a message will appear and this page will be re-loaded in the browser after a four-second pause.

Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then erased and the application is ready to start accumulating a new history.

Your user name for trying out the game, todo list, and chat demonstrations is a random permutation of the first 14 letters of the alphabet. In the comments section, near the bottom of this page, you can chose your own user name and a password. These facilitate leaving comments which can later be revised or removed.

The game, other demos, and more commentary regarding the code is at [http://schalk.net:3055](http://schalk.net:3055).

