/*
 * module:  tblOrderModule 
 * -------------------------
 * This module exports 5 database releted fuctions (CRUD) on the 'Order' Table
 * 
 * tblOrderGetOne - to get specific order recrod.
 * tblOrderGetAll - to get all the orders. 
 * tblOrderInsert - to insert new order recrod.
 * tblOrderUpdate - to update specific order recrod.
 * tblOrderDelete - to delete specific order recrod.
 * 
 */

'use strict';

const pool = require ('./dbPoolModule');  //to get the 'korsall' database connections' pool

module.exports = 
{

/*
 * Function:  tblOrderGetOne 
 * -------------------------
 * This function returns the specific order recrod from the database.
 *
 * orderIdToFind: order id whose record to find in the database.
 * callback: callback async fuction. 
 *
 * returns:  database record of given order id
 *           returns error (if record is not found)
 */
    tblOrderGetOne: function (orderIdToFind, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Get one order record database connection thread id: ' + connection.threadId);
         
            connection.query ("SELECT * FROM korsall.order WHERE id = ?",  [orderIdToFind], function (err, rows, fields)
            {
                connection.release ();
        
                if (err) 
                {   
                    console.error (err);
                    callback (err);
                    //return;
                }   

                if (!err) 
                {
                    // return (rows);          //specific order id record has found and returned.
                    callback (null, rows, fields);
                }           
            });
 
            //database connection error
            connection.on ('error', function (err)
            {      
                res.json ({"code" : 100, "status" : "Error in database connection"}); //dummy json error code (error code structure to fix)
                return;     
            });
     });
 },


/*
 * Function:  tblOrderGetAll 
 * -------------------------
 * This function returns all the order recrods from the database
 *
 * callback: callback async fuction 
 *
 * returns:  all database records (order table)
 *           returns error (if records are not found)
 */
    tblOrderGetAll: function (callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Get all order recors database connection thread id: ' + connection.threadId);
         
            connection.query ("SELECT * FROM korsall.order",  function (err, rows, fields)
            {
                connection.release ();
        
                if (err) 
                {   
                    console.error (err);
                    callback (err);
                    //return;
                }   

                if (!err) 
                {
                    // return (rows);          //specific user id record has found and returned.
                    callback (null, rows, fields);
                }           
            });
 
            //database connection error
            connection.on ('error', function (err)
            {      
                res.json ({"code" : 100, "status" : "Error in database connection"}); //dummy json error code (error code structure to fix)
                return;     
            });
     });
 },

/*
 * Function:  tblOrderDelete 
 * -------------------------
 * This function deletes the specific order recrod from the database
 *
 * orderIdToDelete: order id whose record to delete from database
 * callback: callback async fuction 
 *
 * returns:  ?
 *           ? returns zero on error or json (if record is not found)
 */
    tblOrderDelete: function (orderIdToDelete, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Delete operation order table database connection thread id: ' + connection.threadId);
         
            connection.query ("DELETE FROM korsall.order WHERE id = ?",  [orderIdToDelete], function (err, result)
            {
                connection.release ();
                if (err) 
                {   
                    //console.error (err);
                    callback (err);
                    //return;
                }   

                if (!err) 
                {
                   // console.log ("Data deleted from order table from Database: \n" + result);
                   // return (result);         

                    // if (result.affectedRows == 1) 
                    // {
                    //     output = 
                    //     {
                    //         code: 200,
                    //         msg: 'Record is deleted successfully!'
                    //     };
                        
                    // } 
                    // else 
                    // {
                    //     output = 
                    //     {
                    //         code: 500,
                    //         msg: 'Record is NOT deleted.'
                    //     }
                    // }

                    callback (null, result);
                }           
            });
 
            //database connection error
            connection.on ('error', function (err)
            {      
                res.json ({"code" : 100, "status" : "Error in database connection"}); //dummy json error code (error code structure to fix)
                return;     
            });
     });
 },


/*
 * Function:  tblUserInsert 
 * -------------------------
 * This function adds a new user recrod in the database
 *
 * newUserToAdd: new user object to add in the database
 * callback: callback async fuction 
 *
 * returns:  ?
 *           ? returns zero on error or json (if record is not inserted)
 */
tblUserInsert: function (newUserToAdd, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Insert operation database connection thread id: ' + connection.threadId);
         
            var newUserToAddStringify =  JSON.stringify(newUserToAdd);

            connection.query ("INSERT INTO user VALUES (?, ?)", [newUserToAdd.id, JSON.stringify(newUserToAdd.user_info)], function (err, result)
            {
                connection.release ();
                if (err) 
                {   
                    console.error (err);
                    callback (err);
                    return;
                }   

                if (!err) 
                {
                   // console.log ("Data inserted in the Database: \n" + result);
                   // return (result);         

                    // if (result.affectedRows == 1) 
                    // {
                    //     output = 
                    //     {
                    //         code: 200,
                    //         msg: 'Record is added successfully!'
                    //     };
                        
                    // } 
                    // else 
                    // {
                    //     output = 
                    //     {
                    //         code: 500,
                    //         msg: 'Record is NOT added.'
                    //     }
                    // }

                    callback (null, result);
                }           
            });
 
            //database connection error
            connection.on ('error', function (err)
            {      
                res.json ({"code" : 100, "status" : "Error in database connection"}); //dummy json error code (error code structure to fix)
                return;     
            });
     });
 },


/*
 * Function:  tblUserUpdate 
 * -------------------------
 * This function updates a new user recrod in the database
 *
 * userId: user id whose record is to update
 * userUpdate: user update object to update in the database
 * callback: callback async fuction 
 *
 * returns:  ?
 *           ? returns zero on error or json (if record is not updated)
 */
tblUserUpdate: function (userId, userUpdate, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Update operation database connection thread id: ' + connection.threadId);
         
            var userUpdateStr =  JSON.stringify(userUpdate);

            connection.query ('UPDATE user SET user_info = ? Where ID = ?',  [userUpdateStr, userId], function (err, rows, fields)
            {
                connection.release ();
                if (err) 
                {   
                    console.error (err);
                    callback (err);
                    return;
                }   

                if (!err) 
                {
                    //console.log ('\nChanged: ' + rows.changedRows + ' rows');
                    callback (null, rows, fields);
                }           
            });
 
            //database connection error
            connection.on ('error', function (err)
            {      
                res.json ({"code" : 100, "status" : "Error in database connection"}); //dummy json error code (error code structure to fix)
                return;     
            });
     });
 },

}