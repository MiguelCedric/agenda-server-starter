let express = require('express')
require('dotenv').config(); // make environment variables available throughout the app
let expressMongoDB = require('express-mongo-db')

// importing routes
let indexRoutes = require('./routes/routes');

let app = express();
let port = 3000
// connects to the database and attach a db object to the request object
app.use(expressMongoDB(process.env.DB_URL))

app.use('/', indexRoutes)

app.listen(port, () => {
    console.log(`Server is listenung on port ${port}...`)
})