/*
 * module:  tblUserModule 
 * -------------------------
 * This module exports 5 database releted fuctions (CRUD) on the 'User' Table
 * 
 * tblUserGetOne - to get specific user id recrod
 * tblUserGetAll - to get all the user recrods
 * tblUserInsert - to insert new user recrod
 * tblUserUpdate - to update specific user id recrod
 * tblUserDelete - to delete specific user id recrod
 * 
 */

'use strict';

const pool = require ('./dbPoolModule');  //to get the 'korsall' database connections' pool

module.exports = 
{

/*
 * Function:  tblUserGetOne 
 * -------------------------
 * This function returns the specific user id recrod from the database
 *
 * userIdToFind: user id whose record to find in the database
 * callback: callback async fuction 
 *
 * returns:  database record of given user id
 *           returns error (if record is not found)
 */
    tblUserGetOne: function (userIdToFind, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Get one record database connection thread id: ' + connection.threadId);
         
            connection.query ("SELECT * FROM user WHERE id = ?",  [userIdToFind], function (err, rows, fields)
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
 * Function:  tblUserGetAll 
 * -------------------------
 * This function returns all the user id recrods from the database
 *
 * callback: callback async fuction 
 *
 * returns:  all database records (user table)
 *           returns error (if records are not found)
 */
    tblUserGetAll: function (callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Get all recors database connection thread id: ' + connection.threadId);
         
            connection.query ("SELECT * FROM user",  function (err, rows, fields)
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
 * Function:  tblUserDelete 
 * -------------------------
 * This function deletes the specific user id recrod from the database
 *
 * userIdToDelete: user id whose record to delete from database
 * callback: callback async fuction 
 *
 * returns:  ?
 *           ? returns zero on error or json (if record is not found)
 */
    tblUserDelete: function (userIdToDelete, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Delete operation database connection thread id: ' + connection.threadId);
         
            connection.query ("DELETE FROM user WHERE id = ?",  [userIdToDelete], function (err, result)
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
                   // console.log ("Data deleted from Database: \n" + result);
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