// var mysql     =    require('mysql');

// var pool      =    mysql.createPool({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'milind',
//     password : 'Tori@2016',
//     database : 'korsall'
// });


var abc = require("./tblUserModule");

var record = abc.tblUserGetOne (1);

console.log("+++++++++++++++++++++++++++");
console.log (record);
console.log("+++++++++++++++++++++++++++");
