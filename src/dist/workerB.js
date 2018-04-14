





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

function primeNums (p,x) {
  var q = p[p.length - 1];
  var arr = pNums(q,x,p); 
  return p.concat(arr);
  };

function fpFunc (p, f, x) {
  var pf = [];
  postMessage(['green', 'green', 'red', 'color', 'done', 'done', 'computing prime fibs'])
  f.map(fib => {
    if (p.every(pr => (fib % pr || fib == pr))) {pf.push(fib)}
  })  
  postMessage(['green', 'green', 'green', 'color', 'done', 'done', 'done']);
  return ( pf );
}

function execF(n) {
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

onmessage = function(m) {
  console.log('<W><W><W> **-> In workerB. m is', m);
  var t = Date.now();
  var ar = m.data.slice();
  // importScripts('script2.js');
  postMessage(['red', 'yellow', 'yellow', 'color', 
    'computing fibs', 'pending', 'pending']);
  var fibs = execF(ar[3]);
  var primes = primeNums(ar[0], Math.sqrt(ar[3])+1);
  var prFibs = fpFunc(primes, fibs, ar[3]);
  postMessage([primes, fibs, prFibs, t]);
}











