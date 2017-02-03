/*
 * module:  app.js 
 * -------------------------
 * This module tests tblUserModule module (5 database releted fuctions (CRUD) on the 'User' Table from) 
 * 
 * tblUserGetOne - to get specific user id recrod
 * tblUserGetAll - to get all the user recrods
 * tblUserInsert - to insert new user recrod
 * tblUserUpdate - to update specific user id recrod
 * tblUserDelete - to delete specific user id recrod
 * 
 */

/*           &&&&&&&&          Second Target         &&&&&&&&&&&&        */

/*
 * This module tests tblOrderModule module (5 database releted fuctions (CRUD) on the 'Order' Table from) 
 * 
 * tblOrderGetOne - to get specific order recrod
 * tblOrderGetAll - to get all the order recrods
 * tblOrderInsert - to insert a new order recrod
 * tblOrderUpdate - to update the specific order recrod
 * tblOrderDelete - to delete specific the order recrod
 * 
 */




'use strict';

/*  This comment is to hide tbleusermodule. starts here
var tblUserModule = require ("./tblUserModule"); //to operate 'User' table of 'korsall' database

console.log ("******  tblUserGetOne  ********");

tblUserModule.tblUserGetOne (2, function (err, rows, fields)
{
	if (err)
	{
		throw err;
	}
	else
	{
		console.log ("+++++++++++++++++++++++++++");
		console.log (rows);
		console.log (fields);
		console.log ("+++++++++++++++++++++++++++");
	}

});

console.log ("******  tblUserGetAll  ********");

tblUserModule.tblUserGetAll (function (err, rows, fields)
{
	if (err)
	{
		throw err;
	}
	else
	{
		console.log ("+++++++++++++++++++++++++++");
		console.log (rows);
		console.log (fields);
		console.log ("+++++++++++++++++++++++++++");
	}

});


console.log ("******  Update  ********");

var user_infoUpdate = 
{
			Name : "ccc",
			Email : "ccc@ccc.com",
			Password : "ccc",
			_DOB : "03/03/1933",
			Gender : "female",
			Social : "cc33",
			_TC : "false",
			MobileNumber : "3333333333",
			Verified : "true",
			Active : "true",
			LastLogin : "03/03/2017",
			IPAddress : "122.122.3.3",
			MACID : "ccc333",
			BrowserString: "ccc3332ccc"
};

tblUserModule.tblUserUpdate (3, user_infoUpdate, function (err, rows, fields)
{
	if (err)
	{
		//console.log (err.message);
	}
	else
	{
		console.log ("+++++++++++++++++++++++++++");
		console.log (rows);
		console.log ("+++++++++++++++++++++++++++");
	}

});


console.log ("******  tblUserInsert  ********");

var newUser = 
{ 
	id : 17, 
	user_info : 
		{
			Name : "aaa",
			Email : "aaa@aaa.com",
			Password : "aaa",
			_DOB : "01/01/1911",
			Gender : "male",
			Social : "aa11",
			_TC : "false",
			MobileNumber : "1111111111",
			Verified : "true",
			Active : "true",
			LastLogin : "01/01/2017",
			IPAddress : "111.111.1.1",
			_MACID : "aaa111s",
			BrowserString: "aaa111aaa"
		}
};

tblUserModule.tblUserInsert (newUser, function (err, result)
{
	if (err)
	{
		//console.log (err.message);
	}
	else
	{
		console.log ("+++++++++++++++++++++++++++");
		console.log (result);
		console.log ("+++++++++++++++++++++++++++");
	}

});


// console.log ("******  tblUserGetDelete  ********");
// tblUserModule.tblUserDelete (1, function (err, result)
// {
// 	if (err)
// 	{
// 		throw err;
// 	}
// 	else if (result.affectedRows == 0)
// 	{
// 		console.log ("record not found");
// 	}
// 	else
// 	{
// 		console.log ("+++++++++++++++++++++++++++");
// 		console.log (result);
// 		console.log ("+++++++++++++++++++++++++++");
// 	}

// });

  This comment is to hide tbleusermodule.  ends here */

/* Order module database testing starts here */
var tblOrderModule = require ("./tblOrderModule"); //to operate 'Order' table of 'korsall' database

// console.log ("******  tblOrderGetOne  ********");

// tblOrderModule.tblOrderGetOne (1, function (err, rows, fields)
// {
// 	if (err)
// 	{
// 		throw err;
// 	}
// 	else
// 	{
// 		console.log ("+++++++++++++++++++++++++++");
// 		console.log (rows);
// 		console.log (fields);
// 		console.log ("+++++++++++++++++++++++++++");
// 	}

// });

// console.log ("******  tblOrderGetAll  ********");

// tblOrderModule.tblOrderGetAll (function (err, rows, fields)
// {
// 	if (err)
// 	{
// 		throw err;
// 	}
// 	else
// 	{
// 		console.log ("+++++++++++++++++++++++++++");
// 		console.log (rows);
// 		console.log (fields);
// 		console.log ("+++++++++++++++++++++++++++");
// 	}

// });

// console.log ("******  tblOrderGetDelete  ********");
// tblOrderModule.tblOrderDelete (3, function (err, result)
// {
// 	if (err)
// 	{
// 		throw err;
// 	}
// 	else if (result.affectedRows == 0)
// 	{
// 		console.log ("record not found");
// 	}
// 	else
// 	{
// 		console.log ("+++++++++++++++++++++++++++");
// 		console.log (result);
// 		console.log ("+++++++++++++++++++++++++++");
// 	}

// });

// console.log ("******  tblOrderInsert  ********");

// var newOrder = 
// { 
// 	id : 78, 
// 	products : {a: "3", b: "4" },
// 	order_total : 7777, 	
// 	order_status : {a: "3", b: "4", c: "5" },
// 	order_shipping_carrier : 'vbvbvbvb',
// 	order_shipping_reference: 'bvbvbv',

// 	tax_details : {a: "3", b: "4" },
// 	is_cancelled : {a: "3", b: "4" },
// 	is_returned : {a: "3", b: "4" },
// 	tax_id : 1,

// 	created_by : 1,
// 	created_on : '20330303',
// 	last_modified_by : 444,
// 	last_modified_on : '20330303'

// };


// tblOrderModule.tblOrderInsert (newOrder, function (err, result)
// {
// 	if (err)
// 	{
// 		//console.log (err.message);
// 	}
// 	else
// 	{
// 		console.log ("+++++++++++++++++++++++++++");
// 		console.log (result);
// 		console.log ("+++++++++++++++++++++++++++");
// 	}

// });


console.log ("******  Update  ********");

var orderUpdate = 
{
	 	products: { a : "8888", b : "8888"}, 
		order_total: 8888, 
		order_status: {a: "8888", b: "8888", c: "8888"}, 
		order_shipping_carrier: 'rrrrrrrr', 
		order_shipping_reference: 'rrrrrrrrrr', 
		tax_details: {a: "888888", b: "88888"}, 
		is_cancelled: {a: "88888", b: "88888"},
		is_returned: {a: "88888", b: "888888"}, 
		tax_id: 3, 
		created_by: 888, 
		created_on: '20220202', 
		last_modified_by: 888, 
		last_modified_on: '20220202'
};

tblOrderModule.tblOrderUpdate (99, orderUpdate, function (err, rows, fields)
{
	if (err)
	{
		//console.log (err.message);
	}
	else
	{
		console.log ("+++++++++++++++++++++++++++");
		console.log (rows);
		console.log ("+++++++++++++++++++++++++++");
	}

});


console.log ("******  tblOrderGetOne  ********");

tblOrderModule.tblOrderGetOne (99, function (err, rows, fields)
{
	if (err)
	{
		throw err;
	}
	else
	{
		console.log ("+++++++++++++++++++++++++++");
		console.log (rows);
		console.log (fields);
		console.log ("+++++++++++++++++++++++++++");
	}

});