








var g = prState => x => {
  var primes = execP(prState, x);
  var factors = pfactors(primes,x).x;
  var z;
  if (factors.length > 1) {
    z = "The prime factors of " + x + " are " + factors.join(', ')
  }
  else z = x + " is a prime number"
  return [z, primes[3]];
}
  
onmessage = function(m) {
  var max = m.data[0][m.data[0].length - 1];
  primesState = [max, m.data[0], max, m.data[0]];
  importScripts('script2.js');
  postMessage(g(primesState)(parseInt(m.data[1],10) + 1));
}









