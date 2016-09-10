var express = require('express');
var server = express();

var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));



server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/about', function(request, response){
  response.sendFile('public/html/about.html', {root: __dirname});
});

server.get('/projects', function(request, response){
    response.sendFile('public/html/projects.html', {root: __dirname});
});

server.get('/portfolio', function(request, response){
    response.sendFile('public/html/portfolio.html', {root: __dirname});
});
server.post('/projects', function(request, response){
  response.json(request.body);
});
server.post('/portfolio', function(request, response){
  response.json(request.body);
});
server.post('/about', function(request, response){
  response.json(request.body);
});

server.listen(port, function(){
  console.log('Now listening on port ...' + port);
});
