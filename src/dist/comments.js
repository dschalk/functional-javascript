
function showFunc (name, name2) {return name == name2 ? 'inline-block' : 'none'}

function extract ([x]) {return x};

newLine = "↵";
newLine2 = " ↵";

var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
};

var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

MonadState3.prototype.clear = function () { return this.s = [ '', []] }
MonadState3.prototype.html = [];

MonadState3.prototype.init = function (str) {
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  this.html = process(this.s[1]);
  return this.html
}

MonadState3.prototype.append = function (str) {
  var st = str.replace(/(\r\n|\n|\r)/gm,"");   // Remove newlines
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>');
  this.s[1] = this.s[1].filter(v => (v != ""));
  this.html = process(this.s[1]);
  return this.html;
}

MonadState3.prototype.edit = function (num,txt) {
  this.s[1].splice(num,1,txt)
  this.s[0] = this.s[1].join("<@>");
  this.html = process(this.s[1]);
  return this.html;
};

MonadState3.prototype.remove = function (num) {
  this.s[1].splice(num,1);
  this.s[0] = this.s[1].join("<@>");
  this.html = process(this.s[1]);
  return this.html;
};

function process (arr) {
  var n = -1;
  var html = [];
  arr.map(a => { 
    var x = a.split("<o>");
    x[1] = x[1]
    show = showFunc(x[0], pMname.x);
    console.log('<><><><> in process. x[0],pMname.x, show', x[0],pMname.x,show);
    n+=1;
    html.push(h('div#'+n, [
      h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
      h('br'),
      h('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      h('button#deleteB', {props: {innerHTML: 'delete'}, style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
  return html;
}




