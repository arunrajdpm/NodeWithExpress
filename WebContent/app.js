var express = require('express');

var app = express();



var port = process.env.PORT || 5000;


var nav = [{
	Links : '/Books',
	name  : 'Books'
}, {
	Links : '/Authors',
	name  : 'Authors'
}];

var booksRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);


app.use('/Books', booksRouter);
app.use('/Admin', adminRouter);


app.use(express.static('public'));
app.set('views',('./src/views'));

//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extnames : '.hbs'}));
//app.set('view engine', '.hbs');

//app.set('view engine', 'jade');
app.set('view engine', 'ejs');


app.get('/', function(rez, res){
	res.render('index', {title : "from rendere", nav: nav});
});

app.get('/node', function(req, res){
	res.send('started  learining');
});

app.listen(port, function(err){
	  console.log('running on port '+ port);
});
  
