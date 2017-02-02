var express = require ('express');
var bodyparser = require ('body-parser');

var app = express(); 
var routes = require ('./routes/route.js');


app.use (bodyparser.json ());
app.use (bodyparser.urlencoded ({extended:false}));

// REST Routes

app.get ('/v1/users', routes.getAllHandler);  				// return all feedbacks records
app.get ('/v1/users/:id', routes.getOneHandler);  			// return one record
app.post ('/v1/users', routes.postOneHandler); 				// add new feedback record
app.put ('/v1/users/:id', routes.updateOneHandler); 		// update a record
app.delete ('/v1/users/:id', routes.deleteOneHandler); 		// detete a record


var port = process.env.PORT || 3000;

app.listen (port, function ()
{
	console.log ('\n\nHTTP server is listening on port: ' + port);
});