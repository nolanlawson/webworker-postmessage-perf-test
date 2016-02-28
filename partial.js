self.addEventListener('message', function (e) {
  self.postMessage({msg: JSON.stringify(JSON.parse(e.data.msg))});
});