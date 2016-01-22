//npm init
//npm install express body-parser cors mongojs --save
var express = require( 'express' );
var mongojs = require( 'mongojs' );
var bodyParser = require( 'body-parser' );
var cors = require( 'cors' );
var mongodb = require( 'mongodb.ObjectId' );


var app = express();
app.use( bodyParser.json() );
app.use( cors );
var nodePort = 3000;

//how to connect to database:

//run monbod
var db = mongojs( 'birds', [ 'sighting' ] );

// POST
app.post( '/api/sighting', function( req, res ) {
  //db.sighting.insert(){}
  var dataToInsert = req.body;
  db.sighting.insert( dataToInsert, function( err, result ) {
    if ( err ) {
      res.status( 500 ).end();
    }
    res.send( result );
  } );
} );

// GET
app.get( '/api/sighting', function( req, res ) {
  db.sighting.find( {}, function( err, result ) {
    res.send( result );
  } );
  console.log( 'get hit' );
  // res.end();
} );

// DELETE
app.delete( '/api/sighting/:id', function( req, res ) {
  var idToDelete = ObjectId( req.params.id );
  db.sighting.remove( {
    _id: idToDelete
  }, function( err, result ) {
    if ( err || result.n === 0 ) {
      res.status( 500 ).send( "Failed to delete" );
    }
    res.send( "Successfully deleted record" );
  } );
  console.log( 'delete hit' );
  // res.end();
} );

// PUT
app.put( '/api/sighting', function( req, res ) {
  var idToModify = ObjectId( req.params.id );
  var updateObject = {
    query: {
      _id: idToModify
    },
    update: req.body,
    new: false
  };

  db.sighting.findAndModify( updateObject, function( err, result ) {
    res.send( result );
  } );
  console.log( 'put hit' );
  // res.end();
} );


app.listen( 3000, function() {} );


/*
find
findOne
update
findByIdAndUpdate
create
modify
save

*/

//function returns a function closure.