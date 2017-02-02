var tbleUserModule = require ("./tblUserModule"); //to operate 'User' table of 'korsall' database

// console.log ("******  tblUserGetOne  ********");

// tbleUserModule.tblUserGetOne (2, function (err, rows, fields)
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

// console.log ("******  tblUserGetAll  ********");

// tbleUserModule.tblUserGetAll (function (err, rows, fields)
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

tbleUserModule.tblUserUpdate (3, user_infoUpdate, function (err, rows, fields)
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


// console.log ("******  tblUserInsert  ********");

// var newUser = 
// { 
// 	id : 12, 
// 	user_info : 
// 		{
// 			Name : "aaa",
// 			Email : "aaa@aaa.com",
// 			Password : "aaa",
// 			_DOB : "01/01/1911",
// 			Gender : "male",
// 			Social : "aa11",
// 			_TC : "false",
// 			MobileNumber : "1111111111",
// 			Verified : "true",
// 			Active : "true",
// 			LastLogin : "01/01/2017",
// 			IPAddress : "111.111.1.1",
// 			_MACID : "aaa111s",
// 			BrowserString: "aaa111aaa"
// 		}
// };

// tbleUserModule.tblUserInsert (newUser, function (err, result)
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

