var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

var server = app.listen(port, function() {
    var host = server.address().address;
    console.log('Listening at http://%s:%s', host, port);
});