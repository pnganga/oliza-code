var express = require('express');  
var app = express();
var mongodb = require("mongodb");

// express middleware
var csv = require("ya-csv");
var fs = require('fs');
var bodyParser = require('body-parser');

//MongoDB connection URL - mongodb://host:port/dbName
var dbHost = "mongodb://localhost:27017/client_list";
 
//DB Object
var dbObject;
 
//get instance of MongoClient to establish connection
var MongoClient = mongodb.MongoClient;
 
//Connecting to the Mongodb instance.

MongoClient.connect(dbHost, function(err, db){
  if ( err ) throw err;
  dbObject = db;
});


app.use('/public', express.static('public'));

// parse the csv file
var reader = csv.createCsvFileReader('clientlist.csv', {columnsFromHeader:true,'separator':   ','});
reader.addListener('data', function(data){
var nameHolder = data.name;

mongoclient.db(nameHolder).collection('assets').update({assetId:data.assetId,name:data.name},{upsert:true},function(err,updated){if(err){console.log(err);}});

reader.addListener('end', function(data){
console.log("done");
})




// testing server
app.get('/', function(req, res){

	res.send("hello world");

})

var server = app.listen(8080, function(){
	console.log("server running");
});