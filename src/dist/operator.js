function Monad2(z_10) {
  this.x = z_10;
}
function ret(v_11) {
  return new Monad2(v_11);
}
var id_0 = x_12 => ret(x_12[0], x_12[1]);
var cube_1 = x_13 => ret([x_13[0] * x_13[0] * x_13[0], x_13[1].concat(x_13[0] * x_13[0] * x_13[0])]);
var square_2 = x_14 => ret([x_14[0] * x_14[0], x_14[1].concat(x_14[0] * x_14[0])]);
var add_3 = a_15 => b_16 => ret([a_15 + b_16[0], b_16[1].concat(a_15 + b_16[0])]);
var a_8 = square_2(add_3(3)(cube_1(ret([3, []]).x).x).x).x[1].reduce((a_17, b_18) => a_17 + b_18);
var b_9 = (x_19 => add_3(x_19[0])([-4 * x_19[1][0], x_19[1]]))((x_20 => add_3(x_20[1][1])([x_20[1][1], x_20[1]]))(cube_1(add_3(3)(ret([0, []]).x).x).x).x).x[1];
console.log("ret([3, []]) >>= cube >>= add(3) >>= square).x[1].reduce( (a,b) => a+b ) = ", a_8);
console.log(`(ret([0, []]) >>= add(3) >>= cube >>=  
(x => add(x[1][1])([x[1][1],x[1]])) >>= 
(x => add(x[0])([-4 * x[1][0], x[1]]))).x[1] = `, b_9);
