var socket = io.connect('http://localhost');
socket.on('conn', function (data) {
  $('.ip').text(data.ip);
});
