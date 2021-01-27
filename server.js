var bodyParser = require('body-parser') // bodyparser allows us to receive our information back in json form so it is easy to manipulate
const express = require('express') //express makes routing easy for us using node 
var path = require('path')// not a package that you need to install, already built into node

const app = express()
var PORT = process.env.PORT || 8080; // port variable. will take whatever port is defined by the deployment site like heroku OR 8080 so this will work on our localhost and we won't have to reconfigure it whenever we deploy it live
 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//include html routes in this server file
// and the app that we're passing into that specific function we want to use express
require('./app/routing/html-routes.js')(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});