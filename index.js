const tftp = require('tftp')


tftp.createServer({
  // host: '0.0.0.0',
  port: '6900',
  root: '.',
  denyPUT: true
}, function (req, res) {
  req.on("error", function (error) {
    //Error from the request
    console.error(error);
  });

  const { remoteAddress } = req.stats

  var message = remoteAddress;
  res.setSize(message.length);
  res.end(message);

}).listen()
