var express = require("express");
var mongodb = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;

var booksRouter = express.Router();
 
var router = function(nav){
  
	booksRouter.use((function(req, res, next){
		if(!req.user){
			res.redirect('/'); 
		}
		next();
	}));

 booksRouter.route('/')
   .get(function(req , res){
	   
	   var url = "mongodb://localhost:27017/libraryApp"; 
		 
		 mongodb.connect(url, function(err, db){
			 
			 var collection = db.collection('books');
			 
			 collection.find({}).toArray(
				function(err, results ){
					res.render("books", {title : "Books", nav:nav,
					books  : results });
				}	 
			 );
			 
		 });
	   
 	 
   });

 booksRouter.route('/:id')
 .get(function(req , res){
	
	var id = new objectId(req.params.id);
	console.log("inside router" + id);
	  var url = "mongodb://localhost:27017/libraryApp"; 
	  
	  mongodb.connect(url, function(err, db){
		  
		  var collection = db.collection('books');
		  
		  collection.findOne({_id:id},  
			 function(err, results ){
				 console.log(results);
				  res.render("book", {title : "Books", nav:nav,
				  book : results });
			 });	 
		 
		  
	  });



	  
	//   res.render("book", {title : "Books", nav:nav,
	// 	book  : books[id] });
 });
 
 return booksRouter;
};
 module.exports = router;