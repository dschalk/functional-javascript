












exports = operator >>= left = (left, right) => {
  return #`${left}.then(${right})`;
};

var result = (cubeP(3) >>= addP(3)) >>= squareP 

console.log('In file1.js *** * * * * * result: ', result)


