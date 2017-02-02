var mysql = require ('mysql');

var pool = mysql.createPool 
({
    connectionLimit : 100, //max limit to fix.
    host     : 'localhost',
    user     : 'milind',
    password : 'Tori@2016',
    database : 'korsall'
});

module.exports = pool;