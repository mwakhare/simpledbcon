//var express   =    require("express");
// var mysql     =    require('mysql');
// //var app       =    express();

var abc = require("./tblUserModule");

// var pool      =    mysql.createPool({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'milind',
//     password : 'Tori@2016',
//     database : 'korsall'
// });



var record = abc.tblUserGetOne (1, function);

console.log("+++++++++++++++++++++++++++");
console.log (record);
console.log("+++++++++++++++++++++++++++");
