var express = require("express");
 
var adminRouter = express.Router();
var mongodb = require("mongodb").MongoClient;

var books= [{
 	Title : "Title of book 1 ",
 	genere : "genere of book1",
 	author : "author1",
 	read : false
 		
 },{
 	Title : "Title of book 2",
 	genere : "genere of book2",
 	author : "author2",
 	read : false
 		
 },{
 	Title : "Title of book 3",
 	genere : "genere of book3",
 	author : "author3",
 	read : false
 		
 },{
 	Title : "Title of book 4",
 	genere : "genere of book4",
 	author : "author4",
 	read : false
 		
 },{
 	Title : "Title of book 5",
 	genere : "genere of book5",
 	author : "author5",
 	read : false
 		
 },{
 	Title : "Title  arun",
 	genere : "genere of book6",
 	author : "author6",
 	read : false
 		
 }];
 
var router = function(nav){

adminRouter.route('/addBooks')
   .get(function(req , res){
	   
	 var url = "mongodb://localhost:27017/libraryApp"; 
	 	 
	 mongodb.connect(url, function(err, db){
		
		 var collection = db.collection('books');
		 
		 collection.insertMany(books, function(err, results){
			res.send(results) ;
			db.close();
		 });
		});
		
	 });
	   
	 
	   
 	 

 	 
	   
  

 return adminRouter;
 };
 
 



module.exports = router;