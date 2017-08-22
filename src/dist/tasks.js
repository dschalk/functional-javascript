
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
  console.log('ppppppppppppppppppppppppppp  Entered tasksMonad - - str is', str);
  var task, auth, resp, bool;
  this.s[0] = str;
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX >>> this.s[0]", this.s[0]);
  var ar = str.split("<@>");
  arr = ar.filter(v => v !== "")
  this.s[1] = arr.slice();
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX >>> this.s[1]", this.s[1]);
  var n = -1;
  var nodeArray = [];
  var showCheck, showUnCheck, showGreen;
  arr.map(q => { 
    console.log("q:", q);
    let v = q.split(",")
    console.log('v[0],v[1],v[2],v[3]',v[0],v[1],v[2],v[3]);
    task = v[0].replace(/<<>>/g, ","); 
    bool = v[1] === "true" ? true : false;
    auth = v[2];
    resp = v[3];
    n = parseInt(n,10) + 1;
    showCheck = bool ? "none" : "inline"
    showUnCheck = bool ? "inline" : "none"
    showGreen = bool ? "green" : "yellow"
    showLineThrough = bool ? "line-through" : "none"
    this.html.push(h('div#' + n, [
      h('span.task3', {style: {color: showGreen, textDecoration: showLineThrough }},'Task: ' + task),
      h('br'),
      h('input.cbx',  { props: { type: 'checkbox', color: 'white', checked: bool }}), 
      h('span.tao4', { for: 'cbx', style: {display: showUnCheck}}, 'The task is completed' ),
      h('span.tao4', { for: 'cbx', style: {display: showCheck}}, 'The task is not completed' ),
      h('br'),
      h('span.tao', 'Author: ' + auth + ' / ' + 'Responsibility: ' + resp),
      h('br'),
      h('span#taskEdit', 'Edit -> '),
      h('input#edit2', { props: { type:'textarea', value: task }}),
      h('button#deleteTask', 'delete'),
      h('br'),
      h('button.cbx2', {style: {display: showUnCheck}}, 'change to not completed'),
      h('button.cbx2', {style: {display: showCheck}}, 'change to completed'),
      h('hr')   
    ]))
  })
  return this.html;
}

MonadState2.prototype.delete = function (n) {
  var k = parseInt(n,10);
  this.s[1].splice(k,1);
  this.html.splice(k,1);
  this.s[0] = this.s[1].join("<@>");
  let bee = this.html.length - 1;
  while (bee) {
    taskMonad.html[bee].elm.id = bee;
    bee -= 1;
  }
  return this.html;
}

MonadState2.prototype.append = function (str) {
  newString = str + this.s[0];
  return this.init(newString);
}

MonadState2.prototype.edit = function(num, str) {
  var k = parseInt(num,10);
  var arr = this.s[1].slice();
  var b = arr.splice(k,1);
  b[0] = str;
  arr.splice(k,0,b);
  newStr = arr.join("<@>");
  this.s[1] = [];
  this.html = [];
  return this.init(newStr);
}

MonadState2.prototype.toggle = function(num) {
  var k = parseInt(num,10);
  var arr = this.s[1].slice();
  var b = arr.map(v => v.split(","));
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
  console.log("<$><$><$><$><$><$> toggle array start <$><$><$><$><$> ***************************");
  b[k][1] = b[k][1] === "true" ? "false" : "true"
  var newArr = b.map(v => v.join(","))
  console.log(newArr);
  console.log("<$><$><$><$><$><$> toggle array finish <$><$><$><$><$>");
  var newStr = newArr.join("<@>");
  console.log("<$><$><$><$><$><$> toggle string start<$><$><$><$><$>");
  console.log(newStr)
  console.log("<$><$><$><$><$><$> toggle string finish <$><$><$><$><$> ***************************");
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
  this.s[0] = "";
  this.s[1] = [];
  this.html = [];
  this.init(newStr);
}

/*
  // HTML manipulation
  console.log('taskMonad.html',taskMonad.html);
  var c = this.html.splice(k,1);
  c[0].children[0].text = "Task: " + str;
  this.html.splice(k,0,c[0]);
  console.log('taskMonad.html',taskMonad.html);
  // Assign index numbers
  let bee = this.html.length - 1;
  while (bee) {
    taskMonad.html[bee].elm.id = bee;
    bee -= 1;
  } 
  return this.html;
} */

taskMonad = new MonadState2( 'taskMonad', [] );













