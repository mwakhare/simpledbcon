'use strict';

var mysql = require ('mysql');

var pool = mysql.createPool 
({
    connectionLimit : 100, //max limit to fix.
    host     : 'localhost',
    user     : 'milind',
    password : 'Tori@2016',
    database : 'korsall'
});

module.exports = 
{

    //if successful, function returns: specific user id record from database
    tblUserGetOne: function (userIdToFind)
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
         
            connection.query ("SELECT * FROM user WHERE id = ?",  userIdToFind, function (err, rows, fields)
            {
                connection.release ();
        
                if (err) 
                {   
                    console.error (err);
                    return;
                }   

                if (!err) 
                {
                    console.log (rows);
                    console.log ("Data received from Database: \n" + rows);
                    console.log (fields);   // fields contains extra meta data about results, if available
                    return (rows);          //specific user id record has found and returned.
                }           
            });
 
            //database connection error
            connection.on ('error', function (err)
            {      
                res.json ({"code" : 100, "status" : "Error in database connection"}); //dummy json error code (error code structure to fix)
                return;     
            });
     });
 }


// tblUserGetAll: function  ()
//  {
//     connection.query ("SELECT * FROM user", 
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
//             console.log ("Data received from Db: \n" + rows);
//             console.log (fields);            // fields contains extra meta data about results, if available
//             return (rows);
//         }           
//     });
// },

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

// tblUserDelete: function  (id)
//  {
//     connection.query ("DELETE FROM user WHERE id = ?", id, 
//     function (err, rows, fields)
//     {
//         connection.release ();
        
//         if (err) 
//         {
//             console.error (err);
//             //res.json ({"code" : 100, "status" : "Error in connection database"});
//             return;
//         }   

//         if (!err) 
//         {
//             console.log ('Deleted ' + rows.affectedRows + ' rows');
//             console.log (fields);            // fields contains extra meta data about results, if available
//             return (true);
//         }           
//     });
// }
 
}