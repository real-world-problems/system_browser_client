(function(global) {
  'use strict';

  var net = require('net');

  var socket = new net.Socket();

  socket.connect(9696, '127.0.0.1', function() {
    console.log('Connected to 127.0.0.1:9696');
  });

  socket.send = function(request) {
    this.socket.write(request.to_json());
  };

  var factory = function() {
    return socket;
  };

  global.app.factory('socket', [factory]);
})(window.global);
