(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// var io = require('socket.io')();

$(function () {
  console.log('main.js');

  var a = function a() {
    console.log('let a');
  };

  a();

  var socket = io();
  $('form').submit(function () {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg));
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FBRUEsRUFBRSxZQUFVO0FBQ1YsVUFBUSxHQUFSLENBQVksU0FBWjs7QUFFQSxNQUFJLElBQUksU0FBSixDQUFJLEdBQU07QUFDWixZQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsR0FGRDs7QUFJQTs7QUFHQSxNQUFJLFNBQVMsSUFBYjtBQUNBLElBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVTtBQUN6QixXQUFPLElBQVAsQ0FBWSxjQUFaLEVBQTRCLEVBQUUsSUFBRixFQUFRLEdBQVIsRUFBNUI7QUFDQSxNQUFFLElBQUYsRUFBUSxHQUFSLENBQVksRUFBWjtBQUNBLFdBQU8sS0FBUDtBQUNELEdBSkQ7QUFLQSxTQUFPLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVMsR0FBVCxFQUFhO0FBQ3JDLE1BQUUsV0FBRixFQUFlLE1BQWYsQ0FBc0IsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLEdBQWYsQ0FBdEI7QUFDRCxHQUZEO0FBSUQsQ0FwQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLy8gdmFyIGlvID0gcmVxdWlyZSgnc29ja2V0LmlvJykoKTtcblxuJChmdW5jdGlvbigpe1xuICBjb25zb2xlLmxvZygnbWFpbi5qcycpO1xuICBcbiAgbGV0IGEgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2xldCBhJyk7XG4gIH07XG4gIFxuICBhKCk7XG4gIFxuICBcbiAgdmFyIHNvY2tldCA9IGlvKCk7XG4gICQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24oKXtcbiAgICBzb2NrZXQuZW1pdCgnY2hhdCBtZXNzYWdlJywgJCgnI20nKS52YWwoKSk7XG4gICAgJCgnI20nKS52YWwoJycpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHNvY2tldC5vbignY2hhdCBtZXNzYWdlJywgZnVuY3Rpb24obXNnKXtcbiAgICAkKCcjbWVzc2FnZXMnKS5hcHBlbmQoJCgnPGxpPicpLnRleHQobXNnKSk7XG4gIH0pO1xuICBcbn0pO1xuIl19
