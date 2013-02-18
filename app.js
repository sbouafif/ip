/**
 * Module dependencies.
 */

var express = require('express')
  , app = require('express')()
  , routes = require('./routes')
  , server = require('http').createServer(app)
  , path = require('path');
//  , io = require('socket.io').listen(server)

var ip = 0;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/ip', routes.index);

/*io.sockets.on("connection", function (socket) {
  ip = socket.handshake.address;
  console.log("New connection from " + ip.address + ":" + ip.port);
});*/


/*http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});*/
