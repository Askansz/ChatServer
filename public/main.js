$(function () {
    // Replace 'http://localhost:3000' with your Vercel deployment URL
    const socket = io('https://the-chat-server.vercel.app/');
  
    $('form').submit(function () {
      const message = $('#m').val();
      socket.emit('chat message', message);
      $('#m').val('');
  
      return false;
    });
  
    socket.on('chat message', function (msg) {
      $('#messages').append($('<li>').text(msg));
    });
  });  
