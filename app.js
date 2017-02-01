// var mysql     =    require('mysql');

// var pool      =    mysql.createPool({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'milind',
//     password : 'Tori@2016',
//     database : 'korsall'
// });


var tbleUserModule = require ("./tblUserModule");

var record = tblUserModule.tblUserGetOne (1);

console.log ("+++++++++++++++++++++++++++");
console.log (record);
console.log ("+++++++++++++++++++++++++++");
