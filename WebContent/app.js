var express = require('express');

var app = express();

var port = 5000;


app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(rez, res){
	res.send('hello node');
});

app.get('/node', function(req, res){
	res.send('started  learining');
});

app.listen(port, function(err){
	  console.log('running on port '+ port);
});
  
