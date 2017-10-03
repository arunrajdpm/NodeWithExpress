var passport = require('passport'),
	LocalStrategy =  require('passport-local').Strategy,
	mongodb = require("mongodb").MongoClient;

module.exports = function(){

	passport.use(new LocalStrategy(
							{
							    usernameField : 'userName',
								passwordField : 'password'
							}, 
							
							function(username, password , done){	
							
								var url = "mongodb://localhost:27017/libraryApp";
								
								mongodb.connect(url, function(err, db){

									var user  = {
										username : username,
										password : password
									};	
								
										var userCollection = db.collection("users");
										
										userCollection.findOne({username : username}, function(err , results){  		
													var user = results;	
													 if(results.password == password)
															done(null , user);
													 else 
														   done(null, false, {message : "Incorrect Password"}); 	  				
															});					
											 
							});
							
							}));

};