/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , path = require('path')
  , io = require('socket.io').listen(server);

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

app.get('/', function(req, res){
  io.sockets.on('connection', function (socket) {
    ip = socket.handshake.address;
    socket.emit('conn', {ip: ip.address});
    console.log('New connection from ' + ip.address + ':' + ip.port);
  });
  
  res.render('index', {title: 'ip'});
});

server.listen(3000);
