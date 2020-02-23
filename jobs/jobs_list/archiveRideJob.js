let MongoClient = require("mongodb").MongoClient;

module.exports = (agenda) => {
    agenda.define("archive ride", (job, done) => {
        console.log("Archiving ride ...")

        // to be able to that you need to grab the ride id which is on the job object
        // first let's connect to mongo db server
        let client = new MongoClient(process.env.MONGO_URL)
        
        client.connect((err) => {
            if(!err) {
                console.log('connection to db successful');
                
                // connect to the database
                let db = client.db(process.env.DB_NAME);
                
                // get the data passed when scheduling the job in the controller
                let rideId = job.attrs.data.rideId; 
                
                db.collection('rides').findOneAndUpdate({_id: rideId}, { $set: { status: 'expired' }}, (error) => {
                    if(!error) {
                        console.log('Successfully archived ride. rideId: ', rideId);
                        client.close();
                        done();
                    } else {
                        console.log("Error archiving ride ID: ", rideId);
                        console.log(error);
                        client.close();
                        done();
                    }
                })
            } else {
                console.log(err);
                client.close();
                done();
            }
        })
    })
}