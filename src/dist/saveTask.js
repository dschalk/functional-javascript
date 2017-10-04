

MonadState2.prototype.edit = function (index,string) {
  var task, auth, resp, bool;
  var str = string;
  var arr = str.split(",")
  arr[index] = str;
  var n = -1;
    if (arr.length > 2) {
    console.log("LIGHT THIS BABY UP VVVVVVVVVVVVVVVVVVVVVVV arr is");
    console.log(arr);
    console.log(typeof arr);
    console.log("LIGHT THIS BABY UP VVVVVVVVVVVVVVVVVVVVVVV END");
    var nodeArray = [];
    var showCheck, showUnCheck, showGreen;
    while (arr.length > 3) { 
      console.log("arr.length",arr.length)
      task = arr.shift().replace(/<<>>/g, ","); 
      bool = eval(arr.shift());
      console.log("^^^^^^^^^^wwwwwwwwwww bool", bool);
      auth = arr.shift();
      resp = arr.shift();
      bool = eval(bool);
      n+=1;
      showCheck = bool ? "none" : "inline"
      showUnCheck = bool ? "inline" : "none"
      showGreen = bool ? "green" : "yellow"
      console.log('<#><#><#><#><#> X X X <@><@><@><@><@>In taskMonad. a is', a);

      showLineThrough = bool ? "line-through" : "none"
      nodeArray.push(h('div#' + n +'.todo', [
        h('span.task3', {style: {color: showGreen, textDecoration: showLineThrough }},'Task: ' + task),
        h('br'),
        h('input#cbx',  { props: { type: 'checkbox', color: 'white', checked: bool }}), 
        h('span.tao4', { for: 'cbx', style: {display: showUnCheck}}, 'The task is completed' ),
        h('span.tao4', { for: 'cbx', style: {display: showCheck}}, 'The task is not completed' ),
        h('br'),
        h('span.tao', 'Author: ' + auth + ' / ' + 'Responsibility: ' + resp),
        h('br'),
        h('button#edit1', {props: {innerHTML: 'edit'}}),
        h('input#edit2', { props: { type:'textarea', value: task }}),
        h('button#delete', 'delete'),
        h('br'),
        h('button#chbox1', {style: {display: showUnCheck}}, 'change to not completed'),
        h('button#chbox2', {style: {display: showCheck}}, 'change to completed'),
        h('hr')   
      ]))
      console.log('<#><#><#><#><#> X X X <@><@><@><@><@>In init. nodeArray = ', nodeArray);
    }
    taskMonad.html = nodeArray;
  };  
};

MonadState2.prototype.append = function (string) {
  console.log('<$><$><$><$><$>O<@><@><@><@><@><@> > > > In append. str is', str);
  var str = string + ',' + this.s;
  this.s = str;
  var arr = str.split(",")
  var n = -1;
  this.html = [];
  while (arr.length > 3) { 
    console.log('<#><#><#><#><#> X X X <@><@><@><@><@>In init. this.s = ', this.s);
    console.log("LIGHT THIS BABY UP VVVVVVVVVVVVVVVVVVVVVVV arr is");
    console.log(arr);
    console.log(typeof arr);
    console.log("LIGHT THIS BABY UP VVVVVVVVVVVVVVVVVVVVVVV END");
    var showCheck, showUnCheck, showGreen;
    console.log("arr.length",arr.length)
    task = arr.shift().replace(/<<>>/g, ","); 
    bool = eval(arr.shift());
    console.log("^^^^^^^^^^wwwwwwwwwww arr", arr);
    console.log("^^^^^^^^^^wwwwwwwwwww bool", bool);
    console.log('<$><$><$><$><$><$><$><$><$><$><$><$> this.html', this.html);
    auth = arr.shift();
    resp = arr.shift();
    bool = eval(bool);
    n+=1;
    showCheck = bool ? "none" : "inline"
    showUnCheck = bool ? "inline" : "none"
    showGreen = bool ? "green" : "yellow"
    console.log('<#><#><#><#><#> X X X <@><@><@><@><@>In taskMonad. tasl, bool is', task, bool);
    showLineThrough = bool ? "line-through" : "none"
    this.html.push(h('div#' + n +'.todo', [
      h('span.task3', {style: {color: showGreen, textDecoration: showLineThrough }},'Task: ' + task),
      h('br'),
      h('input#cbx',  { props: { type: 'checkbox', color: 'white', checked: bool }}), 
      h('span.tao4', { for: 'cbx', style: {display: showUnCheck}}, 'The task is completed' ),
      h('span.tao4', { for: 'cbx', style: {display: showCheck}}, 'The task is not completed' ),
      h('br'),
      h('span.tao', 'Author: ' + auth + ' / ' + 'Responsibility: ' + resp),
      h('br'),
      h('button#edit1', {props: {innerHTML: 'edit'}}),
      h('input#edit2', { props: { type:'textarea', value: task }}),
      h('button#delete', 'delete'),
      h('br'),
      h('button#chbox1', {style: {display: showUnCheck}}, 'change to not completed'),
      h('button#chbox2', {style: {display: showCheck}}, 'change to completed'),
      h('hr')   
    ]))
  }
  return this.html; 
};

/*
MonadState2.prototype.toggle = function (n) {
  console.log('<$><$><$><$><$>O<@><@><@><@><@><@> > > > In toggle. n is', n);
  var showCheck, showUnCheck, showGreen, showLineThrough;
  var arr = this.s.slice().split("<@>");
  arr[n][1] = !arr[n][1]; 
  var nodeArray = [];
  var n = -1
  arr.map(a => {
    n+=1
    showCheck = bool ? "none" : "inline"
    showUnCheck = bool ? "inline" : "none"
    showGreen = bool ? "green" : "yellow"
    showLineThrough = bool ? "line-through" : "none"
    nodeArray.push(h('div#' + n +'.todo', [
      h('span.task3', { style: { color: showGreen, textDecoration: showLineThrough } }, 'Task: ' + task),
      h('br'),
      h('input#cbx',  { props: { type: 'checkbox', color: 'white', checked: bool }}), 
      h('span.tao4', { for: 'cbx', style: {display: showUnCheck}}, 'The task is completed' ),
      h('span.tao4', { for: 'cbx', style: {display: showCheck}}, 'The task is not completed' ),
      h('br'),
      h('span.tao', 'Author: ' + auth + ' / ' + 'Responsibility: ' + resp),
      h('br'),
      h('button#edit1', {props: {innerHTML: 'edit'}}),
      h('input#edit2', { props: { type:'textarea', value: task }}),
      h('button#delete', 'delete'),
      h('br'),
      h('button#chbox1', {style: {display: showUnCheck}}, 'change to not completed'),
      h('button#chbox2', {style: {display: showCheck}}, 'change to completed'),
      h('hr')   
    ])) 
  });  
  taskMonad.html = nodeArray;
};

MonadState2.prototype.delete = function (n) {
  console.log('<$><$><$><$><$>O<@><@><@><@><@><@> > > > In delete. n is', n);
  var showCheck, showUnCheck, showGreen, showLineThrough;
  var ar0 = str.split('@');
  var ar1 = ar0.map(v => v.split(','));
  var arr = ar1.map(v => {v[1] = eval(v[1])});
  arr[n][1] = !arr[n][1]; 
  var nodeArray = [];
  var n = -1
  arr.map(a => {
    n+=1
    showCheck = bool ? "none" : "inline"
    showUnCheck = bool ? "inline" : "none"
    showGreen = bool ? "green" : "yellow"
    showLineThrough = bool ? "line-through" : "none"
    nodeArray.push(h('div#' + n +'.todo', [
      h('span.task3', { style: { color: showGreen, textDecoration: showLineThrough } }, 'Task: ' + task),
      h('br'),
      h('input#cbx',  { props: { type: 'checkbox', color: 'white', checked: bool }}), 
      h('span.tao4', { for: 'cbx', style: {display: showUnCheck}}, 'The task is completed' ),
      h('span.tao4', { for: 'cbx', style: {display: showCheck}}, 'The task is not completed' ),
      h('br'),
      h('span.tao', 'Author: ' + auth + ' / ' + 'Responsibility: ' + resp),
      h('br'),
      h('button#edit1', {props: {innerHTML: 'edit'}}),
      h('input#edit2', { props: { type:'textarea', value: task }}),
      h('button#delete', 'delete'),
      h('br'),
      h('button#chbox1', {style: {display: showUnCheck}}, 'change to not completed'),
      h('button#chbox2', {style: {display: showCheck}}, 'change to completed'),
      h('hr')   
    ])) 
  });  
  taskMonad.html = nodeArray;
};

*/

