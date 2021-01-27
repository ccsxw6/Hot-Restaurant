// html routes are to help direct the user - whenever they click on a link the router will understand based on the info in this file what page to deliver to them

var path = require('path')

// bring data from here to other files
// based on users url, I want to send them different pages
// need a way for them to get to home, reservations and table list
module.exports = function (app) {
    // when we get '/' url from user (when url is local host 8080) we want to execute this function which is going to send user index.html
    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/tables.html')); //THERE ARE TWO UNDERSCORES ON DIRNAME!!!!! 
    });
    app.get('/reserve', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/reserve.html'));
    });

    // different way to send user to homepage
    // if you're using the app and we haven't already defined the url
    //they go to any url other than reserve or tables, send them to the home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

}

//use these new routes to direct the user in our html
/// include these in our server 