
var rep = new RegExp('<<>>', 'g');
var rep2 = new RegExp(',', 'g');
function MonadState2(g, state) {
  console.log('someone called with g and state', g, state);
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);  
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
};

MonadState2.prototype.html = [];

MonadState2.prototype.init = function (str) {
  this.s[0] = str;
  this.s[1] = str.split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  this.html = bp2(this.s[1]);
  console.log('In init -- this.html is', this.html);
  return this.html;
}

MonadState2.prototype.delete = function (k) {
  this.s[1].splice(k,1);
  this.s[0] = this.s[1].join("<@>");
  this.html = bp2(this.s[1]);
  console.log('In delete -- this.html is', this.html);
  return this.html;
}

MonadState2.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split("<@>");
  this.html = bp2(this.s[1]);
  console.log('In append, this.html is', this.html);
  return this.html
}
MonadState2.prototype.edit = function(k, s) {
  this.s[1] = this.s[1].filter(v => (v != ''));
  this.s[1].splice(k,1,s);
  this.s[0] = this.s[1].join("<@>");
  this.html = bp2(this.s[1]);
  console.log('In edit, html is', this.html);
  return this.html;
}

MonadState2.prototype.toggle = function(k) {
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -- In toggle, k is', k);
  var j = toInt(k);
  var a  = taskMonad.s[1][j].split("<$>")[1] === "true" ? "false" : "true";
  var b = taskMonad.s[1][j];
  var c = b.split("<$>");
  taskMonad.s[1][k] = c[0]+"<$>"+a+"<$>"+c[2]+"<$>"+c[3];
  this.html = bp2(this.s[1]);
  return this.html;
}

taskMonad = new MonadState2( 'taskMonad', [] );

function bp2 (ar) {
  taskMonad.html = [];
  var n = -1;
  var html = [];
  var arr = ar.filter(v => (v != ""));
  arr.map(x => {
  var showCheck, showUnCheck, showGreen;
    let v = x.split("<$>");
    let task = v[0].replace(/<<>>/g, ","); 
    let bool = v[1] === "true" ? true : false;
    let auth = v[2];
    let resp = v[3];
    n = parseInt(n,10) + 1;
    showCheck = bool ? "none" : "inline"
    showUnCheck = bool ? "inline" : "none"
    showGreen = bool ? "green" : "yellow"
    showLineThrough = bool ? "line-through" : "none"
    html.push(h('div#' + n, [
      h('span.task3', {style: {color: showGreen, textDecoration: showLineThrough }},'Task: ' + task),
      h('br'),
      h('span.tao4', { style: {display: showUnCheck}}, 'The task is completed' ),
      h('span.tao4', { style: {display: showCheck}}, 'The task is not completed' ),
      h('span', " Toggle "),
      h('img.box', {props: {src: "unchecked.png"}, style: {display:showCheck, height: "5%", width: "5%"}}  ),
      h('img.box', {props: {src: "checked.jpg"}, style: {display:showUnCheck, height: "5%", width: "5%"}}  ),
      h('br'),
      h('span.tao', 'Author: ' + auth + ' / ' + 'Responsibility: ' + resp),
      h('br'),
      h('span#taskEdit', 'Edit -> '),
      h('input#edit2', {style: {width: "75%"}}, {props: { type:'textarea', value: task }}, task),
      h('button#deleteTask', {style: {fontSize: "18px"}}, 'delete'),
      h('br'),
      h('button.cbx2', {style: {display: showUnCheck, fontSize: "16px"}}, 'change to not completed'),
      h('button.cbx2', {style: {display: showCheck, fontSize: "16px"}}, 'change to completed'),
      h('hr')   
    ]))
  })
  console.log('In bp <><><><><><><><><><><> html is',html);
  return html;
}












