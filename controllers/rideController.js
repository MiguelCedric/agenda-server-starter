let agenda = require('../jobs/agenda');

module.exports = {
    postRide: async (req, res) => {
        try {
            // 
            // you ride data
            let myRide = {
                departureDate: new Date(Date.now()), // aslo the archive date in case
                rideData: "Some data"
            }

            let db = req.db;

            await db.collection('rides').insertOne({...myRide}).then( ride => {
                agenda.schedule(
                    myRide.departureDate, // date
                    "archive ride", 
                    { rideId: ride.insertedId}
                );
                res.send("Hello World!")
            })
        

        } catch (err) {
                console.log("error")
                console.log(err)
                res.send("Hello Error!")
        }
    }
}
