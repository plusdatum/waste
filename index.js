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
var resultWeather;

weather.find({
      search: 'San Francisco, CA',
      degreeType: 'F',
      function(err, result){
         if(err) console.log(err);

         resultWeather = JSON.stringify(result, null, 2);
      }
   });

io.on('connection', function(socket){
   console.log("--> Usuario conectado");   
})

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
setinterval(() => io.emit('weather', resultWeather, 2000);

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
