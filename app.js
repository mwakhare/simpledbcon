var tbleUserModule = require ("./tblUserModule"); //to operate 'User' table of 'korsall' database

console.log ("******  tblUserGetOne  ********");

tbleUserModule.tblUserGetOne (2, function (err, rows, fields)
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

tbleUserModule.tblUserGetAll (function (err, rows, fields)
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


console.log ("******  tblUserInsert  ********");

var newUser = 
{ 
	id : 10, 
	user_info : 
		{
			"Name" : "aaa",
			"Email" : "aaa@aaa.com",
			"Password" : "aaa",
			"DOB" : "01/01/1911",
			"Gender" : "male",
			"Social" : "aa11",
			"TC" : "false",
			"MobileNumber" : "1111111111",
			"Verified" : "true",
			"Active" : "true",
			"LastLogin" : "01/01/2017",
			"IPAddress" : "111.111.1.1",
			"MACID" : "aaa111s",
			"BrowserString": "aaa111aaa"
		}
};

tbleUserModule.tblUserInsert (newUser, function (err, result)
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
// tbleUserModule.tblUserDelete (1, function (err, result)
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

