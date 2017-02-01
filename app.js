// var mysql     =    require('mysql');

// var pool      =    mysql.createPool({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'milind',
//     password : 'Tori@2016',
//     database : 'korsall'
// });


var tbleUserModule = require ("./tblUserModule");

<<<<<<< Updated upstream
tbleUserModule.tblUserGetOne (1, function (err, rows, fields)
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
=======
tbleUserModule.tblUserGetOne (1, function(err,rows,fields){
	console.log("+++++++++++++++++++++++++++");
	console.log(rows);
	console.log(fields);
	console.log("+++++++++++++++++++++++++++");
>>>>>>> Stashed changes
});
