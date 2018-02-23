










onmessage = function(ar) {
  console.log('In workerG.js <X><X><X><X><X><X><X> Is this where you want to be?');importScripts 
  importScripts('script2.js');
  var primes = execP(ar.data[0], ar.data[1] + 1)
  var factors = primeFactors(primes, ar.data[1])
  postMessage(
    [
      ar.data[1], 
      factors[0].join(', '), 
      primes, factors[2], 
      factors[1], 
      factors[3].join(', '), 
      factors[3] 
     // factors[3] + factors[0] + factors[4] + factors[5]
     // console.log('In workerG >>>>>>>>> factors', factors);
    ]
  );
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
  var are_is = ar.length === 1 ? " is a prime number" : " are "
  var blurb = ar.length === 1 ? "" : "The prime factors of  "
  ar2 = ar.length === 1 ? [] : ar
  ar.sort(function(x,y) {
    return (x - y);
  });
  console.log('In workerG.js.  ar is ', ar );  
  return ([ar, are_is, blurb, ar2]);
}







