var express = require('express');
var bodyParser = require('body-parser');
var cookiePraser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');



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
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookiePraser());
app.use(session({secret : "library"}));


require('./src/config/passport.js')(app);



app.use('/Books', booksRouter);
app.use('/Admin', adminRouter);
app.use('/auth', authRouter);




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
  
