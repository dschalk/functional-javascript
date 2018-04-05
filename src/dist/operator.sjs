'lang sweet.js';


function Monad2(z) {
  this.x = z;
};

function ret (v) {
  return new Monad2(v);
}

var id = x => ret(x[0], x[1]);
var cube = x => ret([x[0]*x[0]*x[0], x[1].concat(x[0]*x[0]*x[0])]);
var square = x => ret([x[0]*x[0], x[1].concat(x[0]*x[0])]);
var add = a => b => ret([a+b[0], b[1].concat(a+b[0])]);

operator >>= left 11 = (left, right) => {
  return #`${right}(${left}.x)`;
};

var a = (ret([3, []]) >>= cube >>= add(3) >>= square).x[1].reduce( (a,b) => a+b );

var b = ( ret([0, []]) >>= add(3) >>= cube >>= 
(x => add(x[1][1])([x[1][1],x[1]])) >>=
(x => add(x[0])([-4 * x[1][0], x[1]]))).x[1]

console.log('ret([3, []]) >>= cube >>= add(3) >>= square).x[1].reduce( (a,b) => a+b ) = ', a);

console.log(`(ret([0, []]) >>= add(3) >>= cube >>=  
(x => add(x[1][1])([x[1][1],x[1]])) >>= 
(x => add(x[0])([-4 * x[1][0], x[1]]))).x[1] = `, b);




