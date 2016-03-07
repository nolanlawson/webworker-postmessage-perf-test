importScripts('https://rawgit.com/kawanet/msgpack-lite/master/dist/msgpack.min.js');

self.addEventListener('message', function (e) {
  var message = msgpack.decode(new Uint8Array(e.data));

  var buf = msgpack.encode(message).buffer;
  self.postMessage(buf, [buf]);
});
