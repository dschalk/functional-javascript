
function showFunc (name, name2) {return name == name2 ? 'inline-block' : 'none'}
var result444;
var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
};

MonadState3.prototype.html = [];

var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);




