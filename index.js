var session = require('cookie-session');
var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
var weather = require('weather-js');
var helmet  = require('helmet');

var expiryDate = new Date(Date.now() + 60 * 60 * 1000);

app.use(helmet());
app.use(session({
   name: 'session',
   keys: ['key1', 'key2'],
   cookie: { secure: true,
             httpOnly: true,
             domain: 'herokuapp.com',
             path: 'foo/bar',
             expires: expiryDate
           }
   })
);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

io.on('connection', function(socket){
   console.log("--> Usuario conectado");

   socket.on('ubication', function(data){
      io.sockets.emit('location', data);
   });
})

setInterval(() => io.emit('time', new Date().toLocaleString()), 1000);

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
