
function showFunc (name, name2) {return name == name2 ? 'inline-block' : 'none'}

function extract ([x]) {return x};

newLine = "↵";
newLine2 = " ↵";

var MonadState3 = function MonadState3(g, state) {
  console.log('KAZAM! BOING! MonadState3 says: here are g and state', g, state);
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

MonadState3.prototype.run = function (string) {
  console.log("FLASH FLASH !!! entering run -- string is",string);
  this.html = [];
  console.log('<*><*><*><*><*> In commentMonad.run - - string, st, str, commentMonad.html');
  console.log('string', string);
  var str = string.replace(/<<>>/g, ",");
  console.log(' >>>> MYSTERIOUS MAGIC >>>> from commentsMonad.run. str is', str );  
  this.s = ["",[]];
  console.log('str', str);
  this.s[0] = str;
  console.log('>>>> ZOOM IN ON THE DUCK >>>> str is', str);
  var ar = str.split("<@>");
  this.s[1] = ar.filter(v => (v != ""));
  console.log("FLASH BANG! !!! deep inside of run. this.s[0] and this.s[1] are ", this.s[0],this.s[1]);
 /* var n = -1;
  this.s[1].map(a => {
    var show = showFunc(a[0], pMname.x);
    n+=1;
    this.html.push(h('div#'+n, [
      h('div', a[0] + ' commented: ' + a[1]),
      h('input#editB', { props: { type:'textarea', value: a[1]}, style: {display: show}}),
      h('button#deleteB', {props: {innerHTML: 'delete'}, style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })  */
  return this.html = process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  console.log("FLASH FLASH !!! entering append -- string is",string);
  // var st = string.replace(/(\r\n|\n|\r)/gm,"");   // Remove newlines
  this.s[0] = this.s[0] + str
  var arr = [];
  var ar0 = str.split('<@>');
  this.s[1] = ar0.filter(v => v !== "");
  return this.html = process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  console.log("FLASH FLASH !!! entering edit -- num and txt are",num,txt);
  var n = parseInt(num,10);
  var arr = this.s[1].slice();
  arr.splice(n,1);
  arr.splice(n,txt,0)
  console.log("WOW 1 2 3 4 5 KAZOOEE! Now in commentMonad.edit");
  var s = [];
  s[1] = this.s[1].slice();
  console.log('s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1 s[1]', s[1] );
  s[1][n] = txt;
  console.log('s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1s1 s[1]', s[1] );
  s[0] = s[1].join("<@>");
  console.log('stringstringstringstringtringstringstringstringstringstring s[0]', s[0] );
  this.s = s;
  console.log('ssssssssssssssssssssssssssssssss s', s );
  return this.html = process(s[1]);
};

function comFunc (x) {
  var a = x.split("<**>").map(v => [h('br'), v]);
  var b = [].concat.apply([],a);
  console.log('RAMALAMADINGDONG <@><@><@> In comFunc. a is', a );
  console.log('RAMALAMADINGDONG <@><@><@> In comFunc. b is', b );
  return b;
}

var a = "1,2,3,0,4,5,0,6,7,8,9,0,10,11,12"
var b = a.split(",0,").map(v => [7 , v])
var c = [].concat.apply([], b);


[ 7, '1,2,3,', 7, ',4,5,', 7, ',6,7,8,9,', 7, ',1', 7, ',11,12' ]
[ h('br') , '1,2,3,', h('br'), ',4,5,', h('br'), ',6,7,8,9,', h('br'), ',1', h('br'), ',11,12' ]

var comme,commen

function process (arr) {
  console.log('MOMBO KATOMBO In procss. arr is',arr);
  var n = -1;
  var html = [];
  var ar = arr.map(v => v.split('<o>'));
   ar.map(a => {
    show = showFunc(a[0], pMname.x);
    n+=1;
    comment = comFunc(a[1])[0];
    html.push(h('div#'+n, [
      h('div', a[0] + ' commented: '),
      comment,
      h('textarea', {props: {cols: 55, rows: 2},
        style: {display: show }}, comment),
      h('button#deleteB', {props: {innerHTML: 'delete'}, style: {display: show, fontSize:14}}),
      h('button#commit', {props: {innerHTML: 'commit edit'}, style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
  return html;
}




