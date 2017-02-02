/*
 * module:  dbPoolModule 
 * -------------------------
 * This module exports a pool of 'korsall' database connection objects
 * 
 */

'use strict';

const mysql = require ('mysql');

const pool = mysql.createPool 
({
    connectionLimit : 100, //max limit to fix.
    host     : 'localhost',
    user     : 'milind',
    password : 'Tori@2016',
    database : 'korsall'
});

// var pool = mysql.createPool 
// ({
//     connectionLimit : 100, //max limit to fix.
//     host     : 'localhost',
//     user     : 'root',
//     password : 'torinit@123',
//     database : 'demo'
// });

module.exports = pool;