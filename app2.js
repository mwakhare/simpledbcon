/*
 * module:  app2.js 
 * -------------------------
 * This module is a RESTful webserver.
 * 
 * GET /v1/users -  returns all the user records.
 * GET /v1/users/:id - returns the specific user id record. 
 * POST /v1/users - adds a new user record.
 * PUT /v1/users/:id' - updates the specific user id record.
 * DELETE /v1/users/:id - detetes the specific user id record.
 * 
 */
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */
/*
 * 
 * GET /v1/orders -  returns all the orders records.
 * GET /v1/orders/:id - returns the specific order record. 
 * POST /v1/orders - adds a new order record.
 * PUT /v1/orders/:id' - updates the specific order record.
 * DELETE /v1/orders/:id - detetes the specific order id record.
 * 
 */

'use strict';

var express = require ('express');
var bodyparser = require ('body-parser');

var app = express(); 
var routes = require ('./routes/route.js');

app.use (bodyparser.json ());
app.use (bodyparser.urlencoded ({extended:false}));

// REST Routes for user table
app.get ('/v1/users', routes.getAllUserHandler);  				// return all the user records
app.get ('/v1/users/:id', routes.getOneUserHandler);  			// return one user record
app.post ('/v1/users', routes.postOneUserHandler); 				// add new user record
app.put ('/v1/users/:id', routes.updateOneUserHandler); 		// update the user record
app.delete ('/v1/users/:id', routes.deleteOneUserHandler); 		// detete the user record

// REST Routes for order table
app.get ('/v1/orders', routes.getAllOrderHandler);  			// return all the order records
app.get ('/v1/orders/:id', routes.getOneOrderHandler);  		// return one order record
app.post ('/v1/orders', routes.postOneOrderHandler); 			// add new order record
app.put ('/v1/orders/:id', routes.updateOneOrderHandler); 		// update the order record
app.delete ('/v1/orders/:id', routes.deleteOneOrderHandler); 	// detete the order record


// TCP-IP web server port address.
var port = process.env.PORT || 3000;

// start RESTful web server.
app.listen (port, function ()
{
	console.log ('\n\nHTTP web server is listening on port: ' + port);
});

//for mocha testing
module.exports = app;