fetch("/foo.json").then(resp_4 => {
  return resp_4.json();
}).then(json_5 => {
  return processJson(json_5);
});
