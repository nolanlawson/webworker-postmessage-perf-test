self.addEventListener('message', function (e) {
  self.postMessage(JSON.stringify(JSON.parse(e.data)));
});