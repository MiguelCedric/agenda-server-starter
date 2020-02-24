let agenda = require('../jobs/agenda');

module.exports = {
    postRide: (req, res) => {
            // you ride data when someone post a ride
            let myRide = {
                departureDate: new Date(Date.now()), // aslo the archive date
                rideData: "Some data"
            }
            
            // get the database object from the request object
            let db = req.db;

            // create a new ride document the ride data
            db.collection('rides').insertOne({...myRide}, (ride, err) => {
                if(!err) {
                    // if the ride is successfully save in the database, schedule a job with a unique id in the job collection
                    agenda.schedule(
                        myRide.departureDate, // date the function will execute
                        "archive ride", 
                        { rideId: ride.insertedId } // add additional information to be accessed by the function
                    );
                    res.send("Hello World!")
                } else {
                    console.log(err)
                    res.send("Hello Error!")
                }
            })
    }
}
