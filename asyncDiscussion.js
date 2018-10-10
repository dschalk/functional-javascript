
h('pre', h3Simulation, 'Asynchronous Processes - A deep dive into Demonstration 2' ),V

h('p', ' Clicking the button "bind(145)(x=>x**3)(it4)(it6)(it7)" prompts bind(145)(x=>x**3)(it4)(it6)(it7) to execute twenty-five times. The factorsAction7$ stream flows into the virtual DOM where changes cause the Snabbdom diff and render process to update the browser. Here\'s some of the relevant code: ' ),
h('pre',  `var factorsClick7$ = sources.DOM
  .select('button#factors_Q').events('click');

var factorsAction7$ = factorsClick7$.map( e => {
  m42_ = [];

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
}); ` ),
    
h('p', 'it4() sends the number 3,048,625 to the server which responds by sending back a pseudo-random number between 1 and 3,048,625. '),

h('pre', `var it4 = x => {
  if (socket.readyState === 1) socket
  .send(\`BC#$42,${pMgroup.x},${pMname.x},${x}\`);
} `),

h('p', 'WS is a driver defined as follows: ' ),

h('pre', `function createWebSocket(path) {
    var host = window.location.hostname;
    if (host === '')
        host = 'localhost';
    var uri = 'ws://' + host + ':3055' + path;
    var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

var socket = createWebSocket('/');

function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)}, 
    stop: () => { socket.close() }
  });
}; ` ),

h('p', ' The prefix "xs" designates the name space for the xstream library. ' ),

h('pre', `function main(sources) {
  const messages$ = sources.WS.map( e => {
    var v = e.data.split(',')  // The string arriving from the server is made into an array.
    ...
    ret(v[0]  // "ret" is defined below:
              // v[0] is the prefix of each message from the server.
    ...
    .bnd(next, 'BC#$42', mMZ28)  // Executes when a "BC$#42"-prefixed message arrives from the server

Instances of Monad2 encapsulate values. Here is the definition:

function Monad2(z = 0) {
  this.x = z;
};

Monad2.prototype.ret = a => new Monad2(a);

Monad2.prototype.bnd = function (func, ...args) {
  return func(this.x, ...args)
}

function ret (val = 0) {  // Similar to Monad2.prototype.ret
  return new Monad2(val);
} ` ),

h('p', ' Back to messages$: ' ),

h('pre', `ret(v[0])
...
  .bnd(next, 'BC#$42', mMZ28)  
 ) ` ),

h('p', ' When anything prefixed by mMZ28 comes in from the server, mMZ28.release executes, causing mMZ40.bnd(r) to execute, where "r" is the random number obtained from the Haskell server. ' ),

h('pre', `mMZ28.bnd( () => {
  mMZ40.release(v[3]);
}); ` ),

h('p', ' The cached prime numbers and the random number obtained from the server are then sent to workerH. it6 deviates from the functional principle of placing all extraneous data in the arguments. ' ),

h('pre', `var it6 = x => {
  mMZ40.bnd(x => workerH.postMessage([primesMonad.s[3], x])); ` ),

h('p', 'Here\'s the definition of workerH.js: ' ),

h('pre', `function isPrime(n) {
   var m = Math.sqrt(n);
   for (var i=2;i<=m;i++) if (n%i==0) return false;
   return true;
}

function primeNums (p,x) {
  var q = p[p.length - 1];
  var arr = []; 
  for (var i = q; i < Math.ceil(x+1); i+=1) if (isPrime(i)) arr.push(i);
  arr = p.concat(arr)
  return arr
}  

function pfactors (prms, n) {
  var ar = [];
    prms.map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  return ar;
}

sortFactors = ar => ar.sort(function(x,y) {
  return (x - y);
});

var g = p => x => {
  var primes = primeNums(p,x);
  var factors = pfactors(primes,x);
  var z;
  if (factors.length > 1) {
    z = "The prime factors of " + x + " are " + sortFactors(factors).join(', ')
  }
  else z = x + " is a prime number"
  return [primes, z];
}

onmessage = function(m) {
  var a = m.data[0];
  var b = parseInt(m.data[1],10);
  postMessage(g(a)(b));
}  ` ),

h('p', ' "mMZ52.bnd(m => { ... " could have been placed anywhere. Putting it at the end of "bind(50)(x => x*x*x)(it4)(it6)(it7)"illustrates the flexibility of bind for the purposes of Example 1, but in production it would also make Demonstration 1 easier to understand by people responsible for maintaining the code. ' ),

