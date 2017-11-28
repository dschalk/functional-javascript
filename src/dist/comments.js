
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

MonadState3.prototype.init = function (str) { // All comments delivered on load.
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  result444 = process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  console.log('this.s[1]',this.s[1]);  
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  console.log(this.s[1]);
  this.s[1] = this.s[1].filter(v => v!== '');
  console.log(this.s[1]);
  this.s[1].splice(num,1);
  console.log(this.s[1]);
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  this.s[0] = this.s[1].join("<@>");
  process(this.s[1]);
};


function process (a) { //Assembles the HTML for display.
  var arr = a;
  commentMonad.html = [];
  console.log('In process in comments.js. ************************ arr is', arr);
  var n = -1;
  arr.map(a => { 
    console.log('In arr.map - - - - - - - a is ', a );
    var x = a.split("<o>");
    if (x.length != 2) x = ['malfunction', '8888']
    console.log('In arr.map o o o o o o o x is ', x );  
    x[1] = x[1].replace(/<<>>/g, ',');
    show = showFunc(x[0], pMname.x);
    console.log('<><><><> in process. x[0],pMname.x, show', x[0],pMname.x,show);
    n+=1;
    commentMonad.html.push(h('div#'+n, [
      h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
      h('br'),
      h('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      h('button#deleteB', {props: {innerHTML: 'delete'}, style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
}




