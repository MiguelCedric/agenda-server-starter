const router = require("express").Router();

// import the controller/function to run when requesting a specific end point
let rideController = require('../controllers/rideController');

// run the function rideController when requestion / endpoint
router.get('/', rideController.postRide);

module.exports = router;