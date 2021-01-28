// can technically put both in same place, but we like to divide code to help organize better
//api routes are for our data -- going to help determine what data the user sees as well as what data the user is able to post to our server to store 

var tableData = require('../data/table-data.js')
var waitListData = require('../data/waitinglist-data.js')


module.exports = function (app) {
   
    app.get('/api/tables', function (req, res) {
        res.json(tableData)
    });
    app.get('/api/waitlist', function (req, res) {
        res.json(waitListData)
    });

    //when our app has a post route to api tables it will run this function, first it will check to see if the table data has fewer than five entries, if it does, it's going to send the reservation the user types in to the table data array otherwise it's going to send it to the waitlist data array. the res json lines of true and false are a boolean value that we set up here so that we can trigger a diff message to the user
    app.post('/api/tables', function(req, res) {
        if(tableData.length < 5) {
            tableData.push(req.body);
            res.json(true)
        }else{
            waitListData.push(req.body)
            res.json(false)
        }
    })

    //when we post to api clear, empty out all arrays - next, write our matching ajax for the tables.html
    app.post('/api/clear', function() {
        tableDate = [];
        waitListData = [];

        console.log(tableData)
        console.log(waitListData)
    })
}