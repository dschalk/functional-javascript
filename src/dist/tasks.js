
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
  console.log('ppppppppppppppppppppppppppp  Entered tasksMonad.init - - str is', str);
  console.log('str str str', str);
  this.html = [];
  var task, auth, resp, bool;
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX >>> this.s[0]", this.s[0]);
  var ar = str.split("<@>");
  arr = ar.filter(v => v !== "");
  arr = arr.filter(v => v != "undefined");
  this.s[1] = arr.slice();
  this.s[0] = this.s[1].join("<@>");
  console.log("ZZZZZZZ <0><0><0> XXXXXXXX >>> this.s[1]", this.s[1]);
  console.log("ZZZZZZZ <0><0><0> XXXXXXXX >>> this.s[0]", this.s[0]);
  var n = -1;
  var nodeArray = [];
  var showCheck, showUnCheck, showGreen;
  arr.map(q => { 
    console.log("<q><q><q> ** ZERO MAN - BAZOOWEE here is q:", q);
    let v = q.split("<%>")
    // console.log('In init.map - - v[0],v[1],v[2],v[3]',v[0],v[1],v[2],v[3]);
    task = v[0].replace(/<<>>/g, ","); 
    bool = v[1] === "true" ? true : false;
    auth = v[2];
    resp = v[3];
    console.log('Later inn init.map - - v[0],v[1],v[2],v[3]',v[0],v[1],v[2],v[3]);
    n = parseInt(n,10) + 1;
    showCheck = bool ? "none" : "inline"
    showUnCheck = bool ? "inline" : "none"
    showGreen = bool ? "green" : "yellow"
    showLineThrough = bool ? "line-through" : "none"
    console.log('Ready to start this.html.push 00000000000000000000000000000000000 ');
    this.html.push(h('div#' + n, [
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
  newStr = str + this.s[0];
  return this.init(newStr);
}

MonadState2.prototype.edit = function(num, str) {
  var k = parseInt(num,10);
  var arr = this.s[1].slice();
  console.log('<?><?><?><?><?><?> arr', arr );
  var b = arr.splice(k,1);
  console.log('<?><?><?><?><?><?> b',b );
  // var b = bb.split("<%>");
  b[0] = str;
  var str2 = b.join("<%>");
  arr.splice(k,0,str2);
  newStr = arr.join("<@>");
  this.s[1] = [];
  this.html = [];
  return this.init(newStr);
}

MonadState2.prototype.toggle = function(num) {
  var k = parseInt(num,10);
  var arr = this.s[1].slice();
  var b = arr.map(v => v.split("<%>"));
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ In toggle.map -> START')
  b[k][1] = b[k][1] === "true" ? "false" : "true"
  var newArr = b.map(v => v.join("<%>"))
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! newArr: ', newArr);
  console.log("<$><$><$><$><$><$> toggle array finish <$><$><$><$><$>");
  var newStr = newArr.join("<@>");
  console.log("<$><$><$><$><$><$> toggle newString start<$><$><$><$><$>");
  console.log(newStr)
  console.log("<$><$><$><$><$><$> toggle newString finish <$><$><$><$><$> *****");
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













