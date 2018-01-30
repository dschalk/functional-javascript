











onmessage = function(ar) {
  console.log('In workerH onmessage. ar is', ar);
   
  importScripts('script2.js');
  var primes = execP(ar.data[0], ar.data[1] + 1)
  var factors = primeFactors(primes, ar.data[1])
  postMessage(factors);
};

function primeFactors (primeState, n) {
  var ar = [];
  while (n != 1) {
    primeState[3].map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  }
  console.log('In workerH.js.  ar is ', ar );  
  return ar;
}







