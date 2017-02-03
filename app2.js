/*
 * module:  app2.js 
 * -------------------------
 * This module is a RESTful webserver.
 * 
 * GET /v1/users -  returns all user records.
 * GET /v1/users/:id - returns the user id specific record. 
 * POST /v1/users - adds a new user record.
 * PUT /v1/users/:id' - updates the user id specific record.
 * DELETE /v1/users/:id - detetes the user id specific record.
 * 
 */

'use strict';

var express = require ('express');
var bodyparser = require ('body-parser');

var app = express(); 
var routes = require ('./routes/route.js');

app.use (bodyparser.json ());
app.use (bodyparser.urlencoded ({extended:false}));

// REST Routes
app.get ('/v1/users', routes.getAllHandler);  				// return all user records
app.get ('/v1/users/:id', routes.getOneHandler);  			// return one user record
app.post ('/v1/users', routes.postOneHandler); 				// add new user record
app.put ('/v1/users/:id', routes.updateOneHandler); 		// update the user record
app.delete ('/v1/users/:id', routes.deleteOneHandler); 		// detete the user record


// TCP-IP web server port address.
var port = process.env.PORT || 3000;

// start RESTful web server.
app.listen (port, function ()
{
	console.log ('\n\nHTTP web server is listening on port: ' + port);
});

module.exports = app;