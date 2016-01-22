sightingModel = require( './../models/sightingModel' );
// We can usesightingtModel as a constructor function, but it is more than that. // It is more than that, it has other methods attached to it.
module.exports = {
  create: function( req, res ) {
    vasightingnt = nesightingntModel( req.body );
    sightingent.save( function( err, result ) {
      console.log( result );
      res.send( result );
    } );
  },
  // sightingient now has all the functions,
  // going to assume we have a collection in our database,
  // calsightingient.
  // both our object with our data, and our interface to the database, if we call save on this object, it is going to save itself.
  // antime someone sends something new, we create a representation of it and save it to the database
  // everything weill go through this model.
  // 80% it's flow and position, the other 20% is max.length and stuff

  read: function( req, res ) {
    sightingient
      .find( req, res )
      .exec()
      .then( function( err, result ) {
        if ( err ) res.status( 500 ).send( err );
        else res.send( reslt );
      } );
  },

  update: function( req, res ) {
    Sighting.findByIdAndUpdate( req.params.id, {
      $set: req.body
    }, function( err, result ) {
      if ( err ) res.status( 500 ).send( err );
      else res.send( reslt );
    } );
  },

  delete: function( req, res ) {
    Sighting.findByIDAndRemove( req.params.id, {
      $delete: req.body
    }, function( err, result ) { // TODO  fix this.

    } );
  }

}; //constructor function for a scheme, now we make another to make a model of that constructor function.? 10:40am