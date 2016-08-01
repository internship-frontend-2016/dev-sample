var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });

app.use(express.static('build')); // build ディレクトリを使う

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});