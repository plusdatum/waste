var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
var weather = require('weather-js');

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
      console.log(data);
   });
})

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
