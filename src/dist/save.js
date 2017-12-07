

      
h('div.image_3', [
h('img.image_2', {props: {src: "logo.svg" }}  ),
h('span', ' ' ),
h('a', { props: { href: "https://cycle.js.org/", target: "_blank" } }, 'a cycle.js application')    ]),
h('div', {style: {textalign:"center", fontweight: "bold"}}, [
h('div', {style: {fontsize: "20px", color: "#f7f700"}}, 'functional reactive programming'),
h('br'),
h('div', {style: {fontsize: "18px", fontstyle: "italic", color: "#07f7f7"}},'with cycle.js' ) ]),
h('br'),
h('div.content', [
h('h3', 'polymorphic function composition ' ), 
h('span.tao', ' by calling "bind()" only at the start, multiple functions can be conveniently composed regardless of their return value types, or the types of arguments they take. the '),
h('a', {props: {href: '#chain'}}, 'demonstrations' ),
h('span', ' below show chains of functions in which one performs a computation, one fetches data from a websocket server, one fetches data from a web worker, and one formats the data for display - all without promises. '),
h('br'),
h('br'),
h('span', `${stylefunc(["#71f74c","3%",,"italic"])}`, ' promises'), 
  h('span', ' can be links in chained sequences of computations without explicitly invoking the "then()" method, and '), 
h('span', `${stylefunc(["#71f74c",,,"italic"])}`, 'with access to previous results'),
  
h('span', ' all the way back to the first link in the chain.'),
h('span', ' all you need to do is begin a sequence of functions with the function "bind()". '),


h('p', ' not having to return specialized objects, as other javascript chaining algorithms require, is liberating. having access to prior return values is empowering. ' ),
h('p', ' nothing prevents coders from imposing strict type constraints on the functions they compose. they can even modify bind() to be strictly typed in whatever way serves their purposes. it will still work. '),
h('span.tao', ' examples and discussion of chains containing both synchronous and asynchronous computations can be found '), 
h('a', { props: { href: '#chain' } }, 'here.'),
h('br'),
h('br'),
h('span.tao', 'this project was created by and is actively maintained by me, david schalk. the code repository is at '),
h('a', { props: { href: "https://github.com/dschalk/monads-in-javascript", target: "_blank" } }, 'monads-in-javascript'),
h('span', '. i hope you will comment in the comments section near the end of this page. You can email me at fpschalk@gmail.com. This will remain a work in progress for a while longer. I apologize for all the legacy clutter in the repository. This project went through many changes before I changed its name to "monads-in-javascript", and it has gone through numerous changes since. ' ),
h('p', ' bind() was initially defined to link what I refer to as "monads"; that is, objects created by statements such as "var mon = new Monad (7,"mon") or ret(7) (creating an instance of Monad2) where Monad and Monad2 are defined as: '), 
h('pre', {style: { color: "rgb(181, 244, 240)" }},   `    function Monad(z = 'default', ID = 'tempMonad') {
      this.x = z;
      this.id = ID;
    }; 

    function Monad2(z = 0) {
      this.x = z;
    };  ` ),
h('p', ' With some tweaking, bind() quickly evolved into universal glue for chaining all sorts of functions. I was amazed to see chains of all sorts of links, showing bind() and then nothing but functions. It seemed more a gift from a Muse rather than something I created. ' ),
h('p', ' The methods bnd() and ret() were added to the Monad and Monad2 prototypes. Monads created on the fly by ret() don\'t have "id" properties and normally don\'t have names (corresponding pointers. Thay do their work securely insulated from their outer scope. '),
h('p', ' Before explaining how the monads work, I invite you to try out some interactive demonstrations.'), 
h('h2', ' A Few Monad Demonstrations ' ),
h('p', ' The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history. All group members see your score decrease or increase as you navigate backwards and forwards. ' ),
h('h', ' You are automatically logged in with randomly generated numbers as your user name and password. Your group is the non-group "solo". '),
h('p', ' You can select a persistent name and password. These will make it possible for you to return later to delete or edit comments that you might have saved. '),
h('p#gameIntro', ' The demonstration section also has a text box where you can create or join groups. Changing groups resets your game score and goal tally to zeros. ' ),
      h('span.tao', ' The game code is fairly concise and intuitive. A quick walk-through is presented at.' ),
h('a', { props: { href: '#gameCode' } }, 'here'),
h('span', '. To see monadic functionality at work, I suggest that you take a look at the section captioned ' ),
h('a', { props: { href: '#asyncExplanation' } }, 'Asynchronous Processes'),
h('br'),
h('p', ' But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of functional programming, playing with bind() and the monads in the browser console might lift you into the comfort zone you seek. ' ),
h('h3', 'The Game'),
h('p', 'People who are in the same group, other than the default non-group named "solo", share the same todo list, chat messages, and simulated dice game. '),
h('p', ' Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then emptied and the application is ready to start accumulating a new history. '),
h('p', ' Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. As mentioned above, Knowing your password facilitates revising or removing comments.' ),
h('br') ]),
h('hr.len90', {style: { display: mMgameDiv2.x }}, ),
h('br.len90', {style: { display: mMgameDiv2.x }}, ),
h('div.heading',  {style: { display: mMgameDiv2.x }}, 'Game, Todo List, Text Messages' ),






h('div#gameDiv2', {style: { display: mMgameDiv2.x }}, [
h('br'),
h('div#leftPanel', {style: { display: mMgameDiv2.x }}, [
h('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time RL is clicked, one point is deducted. Three goals wins the game. The code is in an appendix.'),
h('p', {style: {color:'red', fontSize:  '20px'}}, mMgoals2.x ),
buttonNode,
h('br'),
h('button#4.op', 'add'),
h('button#5.op', 'subtract'),
h('button#6.op', 'mult'),
h('button#7.op', 'div'),
h('button#8.op', 'concat'),
h('br'),  
h('br'),  
h('div#dice', { style: { display: mMdice.x } }, [
h('button#roll.tao1', 'ROLL'),
h('button#back.tao100', 'BACK'),
h('button#ahead.tao1', 'FORWARD'),
h('div.tao', `Selected numbers: ${gameMonad.fetch3().join(', ')}` ),
h('div.tao', `Operator: ${gameMonad.fetch2()} ` ),
h('div.tao', 'Index: ' + gameMonad.s[1] ),
h('button#clear', 'Clear selected numbers' ),
h('p', ' When traversing the game history, any time there are two selected numbers and a selected operator, a computation will be performed. You can clear the selected numbers and substitute others, and if you don\'t want a selected operator you can select another one.'),
h('span', 'Change group: '),
h('input#group', 'test' ),
h('p', mMsoloAlert.x ),
h('p', ' You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file. You can use this combination in the future to edit or delete your saved comments. ' ),
h('span.red', mMregister.x ),
h('label', {style: {display: mMshowRegister.x }}, 'Register or log in here:'),
h('input.register', {style: {display: mMshowRegister.x }},),
])
]),

h('div#rightPanel', { style: { display: 'block' } }, [
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('button#todoButton.cow', 'TOGGLE TODO_LIST'),
h('br'),
h('br'),
h('button#chat2.cow', 'TOGGLE CHAT'),
h('br'),
h('br'),
h('br'),
h('div', {style: {fontSize: "14 px"}}, 'Name: ' + pMname.x ),
h('div', {style: {fontSize: "14 px"}}, 'Group: ' + pMgroup.x ),
h('br'),
h('div', {style: {fontSize: "14 px"}}, gameData),
h('br'),
h('div#a100', ' _____________________________________ ' ),
h('p.italic', ' Join group "t" if you want to see some previously created tasks. ' ),
h('div',  { style: { display: showTodoDiv } }, [
  h('div', taskMonad.html ),
  h('div', 'Enter author, responsible person, and task here: '),
  h('input.newTask') ]),
h('br'),
h('span#alert', mMalert.x ),
h('br'),
h('span#alert2'),

h('br'),
    h('div#chatDiv', { style: { display: showChatDiv } }, [
      h('div#messages', [
        h('span', 'Message: '),
        h('input.inputMessage'),
        h('div', messages  ),
        h('br'),
      ])
    ])
]),
h('br'),  
h('br'),  
h('br'),  
h('span', '_____________________________________________________________________________________'),  
h('br'),  
h('br'),  
h('div.content', [
h('h2', 'Monads' ),  




h('p', ' For purposes of this discussion, "monads" are objects "m" for which "m instanceof Monad" returns true. The statement "var mon = new Monad(7,\'mon\')" creates a monad named "mon" which encapsulates the value 7. The expressions "mon.id === \'mon\'", mon.x === 7, and "mon instanceof Monad" all return true'),
h('h', ' The functions bind() and ret() make the monads useful. Here are their definitions: '),
h('pre', {style: {color: "lightBlue"}}, `function bind (x, arr=[]) {
  this.ar = arr;
  var that = this;
  this.ar.push(x instanceof Monad ? x.x : x)
  if (this.ar.length === 0) this.ar = [x];
  console.log('In bond <<>><<>><<>> x is', x);
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    if (x instanceof Promise) {
      var p = x.then(v => func(v.x));
      return bind(p,this.ar);
    }  
    if (x instanceof Monad) return bind(func(x.x),this.ar);
    // Asynchronous functionality without Promises. Begin:
    if (typeof func === 'string' && func.slice(0,3) === "mMZ") { 
      var p = eval(func(x));
      return bind(p, this.ar);
    }
    if (typeof x === 'string' && x.slice(0,3) === "mMZ") { 
      var p = func(eval(x));
      return bind(p, this.ar);
    }
    // Asynchronous functionality without Promises. End.
    return bind(func(x),this.ar);
  };
};  
     
function ret (val) {
    return new Monad2(val);
} ` ),
h('p', ' As is apparent from the definition, bind() is recursive and completely polymorphic. If bind()\'s argument is not a promise, an instance of Monad, an instance of Monad2, or a string, bind() returns "bind(func(x),this.ar)". The array "ar" accumulates results along a sequence of computations. "terminate" returns "ar".'), 
h('p', ' Monad2 is Monad without "id". Anonymous Monad2 instances are insulated from their outer scopes, eliminating the possibility of clashes with other processes. '),
h('p', ' The definition of bind() speaks for itself more articulately the following description, but for what it\'s worth, here it is:  For any value "p" and arrays "ar", "ar2", and "ar3", the invisible function that stands ready to operate on the function ahead of bind(p,ar) in a chain is named "debug8". In the simple case of synchronous code, if the function ahead of bind(p,ar) - in other words, debug8\'s argument - is "func", bind(p,ar)(func) returns debug8 which returns bind(func(p,ar2)) which returns debug8, ready to continue the chain. If the next link is func2, bind(func2(func(p,ar),ar2),ar3) is called, returning debug8, ready to accept the next function in the chain. ' ),
h('p', ' A description of what bind() does with promises isn\'t likely to be helpful. Too many words would be needed. Some examples below show it in action, waiting for WebSocket messages and web worker messages in a single chain. '),

h('p#chain', ' The functions bind() and ret() are similar in some ways to >>= (pronounced "bind") and "return" in the Haskell programming language. Functions used in chains of computations can take a JavaScript value and return a monad, the way Haskell does. But when computations are linked using the JavaScript bind(), there is no restriction on what can be returned by the functions in each succeeding link. This is an example of unharnessed JavaScript\'s potential for creativity and confusion.  '),
  
h('p', ' bind() facilitates the linking together of dissimilar functions. Synchronous functions, promises, and asynchronous functions that use MonadItter instead of the Promises API. Examples of the latter can be seen in upcomming demonstrations. In the functions below, the suffix "C" is for curried functions that return Monad2 instances with integer values. Functions that return Promises that resolve into integers after two seconds have the "P" suffix. format() presents the value of "x" in (p.then(x" and "m.x" for all promises "p" and monads "m" '),
h('pre', `  bind(1)(addP(2))(cubeC)(addC(3))
  (multC(2))(multP(3))
  (addC(30))(multC(1/10))(terminate)
  .slice(1,8).map(v => v.then(z => {
  RESULT_8.push(z.x+' ')})) ` ), 
h('button#res8', res8_Style, 'Click to run the above sequence'),
h('br'),  
h('br'),  
h('div.tao', giantRed, RESULT_8),
h('p', ' Seven promises were prepared in four microseconds. After a two-second delay caused by addP(), "[3,27,30,60]" appeared in rapid succession, too fast to be percieved. Then, after another two-second delay caused by multP(), "[3,27,30,60,180,210,21]" was displayed.  The definitions of the functions are in an appendix. Later, we will look at some less trivial async functions involving web workers and the WebSocket server.'),
h('p', ' After a promise occurs in a linked sequence, subsequent functions populate ar with promises. Promises in ar can be used in computations as shown in the Chrome console log: ' ),
h('img', {props: {src: "async2.png"},style: {height: "145%", width: "145%"}}),
h('p', ' addP() causes a two-second delay, as shown in the timestamps. It also causes every function that follows it to become a promise.  '),
h('p', italicYellow, ' Sequences beginning with bind() reveal exactly what is happening while hiding a confusing mess of nested promises. They also provide a first-rate alternative to "Callback Hell". '),
h('p#cycle', ' bind() overcomes the Promises API\'s lack of any way to access prior results linked by the "then()" method. The number ar[0] as well as the promise ar[5] were used used in the sequence above. A short distance down this page you can see asynchronous procedures based on MonadItter rather than Promises. MonadItter and Cycle.js working together can do everything promises and generators do but with greater flexibility and easier access to all values returned by the function calls is chained procedures. The links can be various functions rather than  ' ),    


h('a', { props: { href: '#top' } }, 'Back To The Top'),
h('br'),  
h('a', {props: {href: '#cyclet'}}, 'Async Procedures' ),
h('p', ' Here are linked procedures that perform a computation, send the result to the Haskell WebSocket server to obtain a random number less than the result (ip4), send the random number to a web worker to obtain the prime factors of the random num)ber (ip6), and finally parse the acquired data for display (ip7): '),
h('span', ' Click below to run '),
h('span', bigRed, 'bind(50)(cubeC)(it4)(it6)(it7)'),
h('br'),
h('br'),
h('button#factors_P', {style: {fontSize: '12px'}}, 'bind(50)(cubeC)(it4)(it6)(it7)'),
h('span', "~~~~~"),  
h('button#clear_P', {style: {fontSize: '12px', marginLeft: "0"}},  'clear results'), 
h('br'),
h('div', m42_RESULT ),  
h('p', ' The definitions of it4(), it6(), and it(7) are: '),
h('pre', `  var it4 = x => {
    if (socket.readyState === 1) {
      socket.send('BB#$42,pMgroup,pMname,' + x);
      return eval("mMZ37.bnd(mMZ37.bnd(y => y),ar)");
    }
  } 

  var it6 = x => {
    mMZ37.bnd(x => workerG.postMessage([primesMonad.s, [x]]));
    mMZ38.bnd(v => mMZ39.release(v));
  }  

  var it7 = v => mMZ39.bnd( v => {
    m42_RESULT.unshift(h('p', orange, 
    'The prime factors of ' + v[0] + v[4] + v[5]));
  }); `),
h('p', ' "h(\'div\', m42_RESULT)" is a permanent fixture in the Snabbdom virtual DOM that is returned by main() and updated by calcStream$. When it7() executes, Sbabbdom performs its diff and render routine, updating the browser window. '),
h('p', ' The asynchronous functions use MonadItter instances mMZ37, mMZ38, and mMZ39 instead of Promises. Here\'s the definition of MonadItter: '),
h('pre', `  var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
      return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
      return this.p = func;
    };
  }; `),
h('p', ' When obtaining data from unreliable sources, one should add error checking functionality or use promises. '), 
h('h3', 'Reactivity In Cycle.js' ),
h('span.tao', ' Reactivity occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andr Staltz\' '),
h('a', { props: { href: "https://egghead.io/courses/cycle-js-fundamentals", target: "_blank" } }, ' Overview of Cycle.js.'),
h('span', ' Its elegance might take your breath away. ' ),
h('br' ),
h('p#reactivity2', ' Let\'s take a look at how the ping pong example works in this Cycle.js application. JavaScript\'s mutable variables come in handy here. The variables "m66_RESULT" and "m67_RESULT" are permanent fixtures in the Snabbdom description of the virtual DOM that is returned by main(). Click the button below observe their values changing until ping or pong achieves a score of 11. '),
h('div', [  
h('button#pingpong', {style: {fontSize: '17px'}}, 'start pingpong'), 
m66_RESULT ]),
m67_RESULT,
h('span.tao', ' To see how this works, click '),
h('a', {props: {href: "#reactivity"}}, 'Reactivity in Cycle.js' ),
h('br'),
h('br' ),
h('br' ),
h('a', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom', ),
h('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,' ),
h('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and learning so many supporting files are included as scripts in the index.html page. ' ),
h('br' ),
      ])])

















