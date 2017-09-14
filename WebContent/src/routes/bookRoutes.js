var express = require("express");
 
var booksRouter = express.Router();
 
var router = function(nav){
 var books= [{
 	Title : "Title of book 1",
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
 	Title : "Title of book 6",
 	genere : "genere of book6",
 	author : "author6",
 	read : false
 		
 }];

 booksRouter.route('/')
   .get(function(req , res){
 	  res.render("books", {title : "Books", nav:nav,
 		books  : books });
   });

 booksRouter.route('/:id')
 .get(function(req , res){
	  var id =  req.params.id;
	  
	  res.render("book", {title : "Books", nav:nav,
		book  : books[id] });
 });
 
 return booksRouter;
};
 module.exports = router;