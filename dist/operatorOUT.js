function Monad2(z_7) {
  this.x = z_7;
}
function ret(v_8) {
  return new Monad2(v_8);
}
var cube_0 = x_9 => ret(x_9 * x_9 * x_9);
var square_1 = x_10 => ret(x_10 * x_10);
var add_2 = a_11 => b_12 => ret(a_11 + b_12);
square_1(add_2(3)(cube_0(ret(3).x).x).x).x;