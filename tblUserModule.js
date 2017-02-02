'use strict';

const pool = require ('./dbPoolModule');  //to get the 'korsall' database connections' pool

/*
 * module:  tblUserModule 
 * -------------------------
 * This module exports 5 database releted fuctions on the 'User' Table
 * 
 * tblUserGetOne - to get specific user id recrod
 * tblUserGetAll - to get all the user recrods
 * tblUserInsert - to insert new user recrod
 * tblUserUpdate - to update specific user id recrod
 * tblUserDelete - to delete specific user id recrod
 * 
 */
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
 
            console.log ('Database connection thread id: ' + connection.threadId);
         
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
 
            console.log ('Database connection thread id: ' + connection.threadId);
         
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
 
            console.log ('Database connection thread id: ' + connection.threadId);
         
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
 
            console.log ('Database connection thread id: ' + connection.threadId);
         
            connection.query ("INSERT INTO user SET ?",  [newUserToAdd], function (err, result)
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

// var sql = "SELECT * FROM ?? WHERE ?? = ?";
// var inserts = ['users', 'id', userId];
// sql = mysql.format(sql, inserts);


// var user = { id: 26, user_info: '{"Name":"sggg","Email":"gg@gmail.com","Password":"gg45kkk","DOB Date of Anniversary":"03/10/2017","Gender":"female","Social":"xp11","TC":"false","Mobile Number":"8754123658","Verified":"true","Active":"true","Last Login":"03/06/2017","IP Address":"192.168.1.125","MAC ID":"1589fds","Browser String":"yrytorrs"}'};

// connection.query ("INSERT INTO user SET ?", user, function (err, result)


// tblUserInsert: function  (user)
//  {
//     connection.query ("INSERT INTO user SET ?", user, 
//     function (err, rows)
//     {
//         connection.release ();
        
//         if (err) 
//         {
//             console.error (err);
//             return;
//         }   

//         if (!err) 
//         {
//             console.log ('Last insert ID: ' + rows.insertId);
//             console.log (fields);            // fields contains extra meta data about results, if available
//             return (true);
//         }           
//     });
// },
 


// important running version

 //connection.query ('UPDATE user SET user_info = JSON_SET(user_info, "$.Name", ?,"$.Email",?) Where ID = ?', ["mohan","mn@gmail.com" ,24],function (err, result) 

       

// con.query(
//   'UPDATE user SET user_info = JSON_SET(user_info, "$.Name", ?) Where ID = ?', ["VISHAL", 17],function (err, result) {
//     if (err) throw err;
//     console.log('Changed ' + result.changedRows + ' rows');
//   }
// );




// tblUserUpdate: function  (id, user_info)
//  {
//     connection.query ("UPDATE user SET user_info = ? WHERE id = ?", [user_info, id], 
//     function (err, rows, fields)
//     {
//         connection.release ();
        
//         if (err) 
//         {
//             console.error (err);
//             return;
//         }   

//         if (!err) 
//         {
//             console.log ('\nChanged: ' + rows.changedRows + ' rows');
//             console.log (fields);            // fields contains extra meta data about results, if available
//             return (true);
//         }           
//     });
// },


}