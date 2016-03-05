function cStyleBufferToBinaryString(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;

  var i = 0;
  while (bytes[i] > 0) {
    binary += String.fromCharCode(bytes[i]);
    i++;
  }
  return binary;
}

function binaryStringToCStyleBuffer(bin, buf) {
  var length = bin.length;
  var arr = new Uint8Array(buf);
  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }
  arr[i] = 0;

  return buf;
}

self.addEventListener('message', function (e) {
  var buf = e.data;
  var message = JSON.parse(cStyleBufferToBinaryString(buf));
  buf = binaryStringToCStyleBuffer(JSON.stringify(message), buf);
  self.postMessage(buf, [buf]);
});
