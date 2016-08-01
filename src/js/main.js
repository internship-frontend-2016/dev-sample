'use strict';
// var io = require('socket.io')();

$(function(){
  console.log('main.js');
  
  let a = () => {
    console.log('let a');
  };
  
  a();
  
  
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
  
});
