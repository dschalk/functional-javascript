

function ints(n) {return [...Array(n).keys()]};
function range(a,b) { var ar = ints(b+1); ar.splice(0,a+1,a); return ar};
// console.log("range(3,7) is", range(3,7));



function foldW(fn, seed) {
  return function fold (iterable) {
    let acc = seed;

    for (let element of iterable) {
      acc = fn(acc, element);
    }

    return acc;
  }
}

var product = foldW((acc, n) => acc * n, 1);

console.log(product([1,2,3,4,5,6],1));

var map = foldW( ((acc, seed) => acc.concat()






function foldWith(fn) {
  return function fold (iterable) {
    var iterator = iterable[Symbol.iterator]();
    let { value: acc } = iterator.next();

    for (var element of iterator) {
      acc = fn({ acc, element });
    }

    return acc;
  }
}

var product = foldWith(
    ({ acc, element: n }) => acc * n
  );

// console.log(product([1,2,3,4,5,6]))
