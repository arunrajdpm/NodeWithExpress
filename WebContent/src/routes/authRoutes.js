var express = require("express");
var authRouter = express.Router();
var mongodb = require("mongodb").MongoClient;
var passport = require("passport");
 
var router = function(nav){

		authRouter.route('/signUp')
				.post(function(req, res){
					
//					var url = "mongodb://localhost:27017/libraryApp";
//					
//					monogdb.connect(url, function(err, db){
//						
//						var collection = db.collection("users");
//						
//						var user = {
//								username : req.body.userName,
//								password : req.body.password						
//						};
//						
//						
//						collection.insert(user, function(err, results){
//							req.login(results, function(){
//								 res.redirect('/auth/profile');
//							});
//						});
//						
//						
//					});
					
					req.login(req.body, function(){
						 res.redirect('/auth/profile');
					});	
					
					
				});
	   
		
	authRouter.route('/signIn')
	   		.post(passport.authenticate('local', {
	   			failureRedirect: '/'
	   		}
	   		), function(req, res){
	   			res.redirect('/auth/profile');
	   		});
		
		
	 
	   authRouter.route('/profile')
	   		.get(function(req, res){
	   			 
	   			res.json(req.user);
	   		});
	   		
 	 

 	 
	   
  

 return authRouter;
 };
 
 



module.exports = router;