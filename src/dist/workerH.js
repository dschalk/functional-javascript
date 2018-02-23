










onmessage = function(ar) {
  importScripts('script2.js');
  var primes = execP(ar.data[0], ar.data[1] + 1)
  primeFactors(primes, ar.data[1])
};

function primeFactors (primeState, n) {
  var number = n;
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
  ar2 = ar.length === 1 ? [] : ar.join(', ');
  ar.sort(function(x,y) {
    return (x - y);
  });
  console.log('Message from workersH is',blurb + number + are_is + ar2);
  postMessage(blurb + number + are_is + ar2);
}







