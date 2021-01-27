var bodyParser = require('body-parser') // bodyparser allows us to receive our information back in json form so it is easy to manipulate
const express = require('express') //express makes routing easy for us using node 
const app = express()

var PORT = process.env.PORT || 8080; // port variable. will take whatever port is defined by the deployment site like heroku OR 8080 so this will work on our localhost and we won't have to reconfigure it whenever we deploy it live
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});