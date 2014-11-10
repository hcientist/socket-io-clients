var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));

var port = 3000;
http.listen(port, function (){
  console.log('listening on *:', port);
});

var theRoom = 'some-room';
var defaultNsps = '/';

io.sockets.on('connection', function (socket) {

  console.log('joining ', theRoom);
  socket.join(theRoom);
  

});

setInterval(function(){
  // console.log(io.of(defaultNsps).adapter.rooms[theRoom]);
  console.log(io.nsps[defaultNsps].adapter.rooms[theRoom]);
}, 1000);