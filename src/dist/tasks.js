
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
  var ar = str.split("<@>");
  this.s[1] = ar.filter(v => (v != ""));
  this.html = bp(this.s[1]);
  return this.html;
}

MonadState2.prototype.delete = function (k) {
  this.s[1].splice(k,1);
  this.s[0] = this.s[1].join("<@>");
  this.html = bp(this.s[1]);
  return this.html;
}

MonadState2.prototype.append = function (str) {
  console.log('In taskMonad.append. this.s is',this.s);
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split("<@>");
  this.html = bp(this.s[1]);
  console.log('1.2.3.4.5. In taskMonad.append. this.s[0], s[1], and this.html',this.s[0],this.s[1],this.html);
  return this.html
}

MonadState2.prototype.edit = function(k, s) {
  console.log('In taskMonad.edit. this.s is',this.s);
  this.s[1] = this.s[1].filter(v => (v != ''));
  this.s[1].splice(k,1,s);
  this.s[0] = this.s[1].join("<@>");
  console.log('In taskMonad.edit. this.s is',this.s);
  this.html = bp(this.s[1]);
  return this.html;
}

MonadState2.prototype.toggle = function(k) {
  var el = this.s[1].slice(k,k+1);
  var ar = el.split("<$>");
  ar[1] = ar[1] === "true" ? "false" : "true"
  var str = ar.join("<$>");
  this.s[1].splice(k,1,str);
  this.html = bp(this.s[1]);
  return this.html;
}

taskMonad = new MonadState2( 'taskMonad', [] );

function bp (ar) {
  console.log('At the start of bp. ar is', ar);
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
      h('input#cbx', { props: { type: 'checkbox', color: 'white', checked: bool }}), 
      h('span.tao4', { for: 'cbx', style: {display: showUnCheck}}, 'The task is completed' ),
      h('span.tao4', { for: 'cbx', style: {display: showCheck}}, 'The task is not completed' ),
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

function bp2 (str) {
  var v = str.split("<$>");
  var n = -1;
  var showCheck, showUnCheck, showGreen;
  var html = [];
    task = v[0].replace(/<<>>/g, ","); 
    bool = v[1] === "true" ? true : false;
    auth = v[2];
    resp = v[3];
    n = parseInt(n,10) + 1;
    showCheck = bool ? "none" : "inline"
    showUnCheck = bool ? "inline" : "none"
    showGreen = bool ? "green" : "yellow"
    showLineThrough = bool ? "line-through" : "none"
    html.push(h('div#' + n, [
      h('span.task3', {style: {color: showGreen, textDecoration: showLineThrough }},'Task: ' + task),
      h('br'),
      h('input#cbx', { props: { type: 'checkbox', color: 'white', checked: bool }}), 
      h('span.tao4', { for: 'cbx', style: {display: showUnCheck}}, 'The task is completed' ),
      h('span.tao4', { for: 'cbx', style: {display: showCheck}}, 'The task is not completed' ),
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
  console.log('In bp <><><><><><><><><><><> html is',html);
  return html;
}












