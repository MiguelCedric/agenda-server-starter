const router = require("express").Router();

// import the controllers/functions to run when requesting a specific end point
let rideController = require('../controllers/rideController');


// run the function postRide in rideController when requestion "/" endpoint
router.get('/', rideController.postRide);


module.exports = router; // to be imported in server.js and used with route middleware