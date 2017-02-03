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
 * Function:  tblOrderInsert 
 * -------------------------
 * This function adds a new order recrod in the database
 *
 * newOrderToAdd: new user object to add in the database
 * callback: callback async fuction 
 *
 * returns:  ?
 *           ? returns zero on error or json (if order record is not inserted)
 */
tblOrderInsert: function (newOrderToAdd, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Insert operation on order table, database connection thread id: ' + connection.threadId);
         
            var sql =  "INSERT INTO `korsall`.`order`" 
                      + "(`id`, `products`, `order_total`, `order_status`, `order_shipping_carrier`, `order_shipping_reference`,"
                      + "`tax_details`, `is_cancelled`, `is_returned`, `tax_id`, `created_by`, `created_on`, `last_modified_by`,"
                      + "`last_modified_on`)"
                      +  "VALUES"
                      +  "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"


            connection.query (sql, 
                                [
                                    newOrderToAdd.id, 
                                    JSON.stringify(newOrderToAdd.products),
                                    newOrderToAdd.order_total,
                                    JSON.stringify(newOrderToAdd.order_status),
                                    newOrderToAdd.order_shipping_carrier,
                                    
                                    newOrderToAdd.order_shipping_reference,
                                    JSON.stringify(newOrderToAdd.tax_details),
                                    JSON.stringify(newOrderToAdd.is_cancelled),
                                    JSON.stringify(newOrderToAdd.is_returned),
                                    newOrderToAdd.tax_id,
                                    
                                    newOrderToAdd.created_by,
                                    newOrderToAdd.created_on,
                                    newOrderToAdd.last_modified_by,
                                    newOrderToAdd.last_modified_on
                                ], 
                            
                            function (err, result)
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
 * Function:  tblOrderUpdate 
 * -------------------------
 * This function updates the existing order recrod in the database.
 *
 * orderId: order id whose record is to update
 * orderUpdate: order update object to update in the database
 * callback: callback async fuction 
 *
 * returns:  ?
 *           ? returns zero on error or json (if order record is not updated)
 */
tblOrderUpdate: function (orderId, orderUpdate, callback)
    {
        pool.getConnection (function (err, connection)
        {
            if (err) 
            {
                connection.release ();
                res.json ({"code" : 100, "status" : "Error in database connection"});  //dummy json error code (error code structure to fix)
                return;
            }   
 
            console.log ('Update operation on order table, database connection thread id: ' + connection.threadId);
         
            //var userUpdateStr =  JSON.stringify(userUpdate);

            var sql = "UPDATE `korsall`.`order`"
                    + "SET"
                    + "`id` = " + orderId +  ","
                    + "`products` = " + JSON.stringify(orderUpdate.products) + ","
                    + "`order_total` = " + orderUpdate.order_total + ","
                    + "`order_status` = " + JSON.stringify(orderUpdate.order_status) + ","
                    + "`order_shipping_carrier` = " + orderUpdate.order_shipping_carrier + ","
                    + "`order_shipping_reference` = " + orderUpdate.order_shipping_reference + ","
                    + "`tax_details` = " + JSON.stringify(orderUpdate.tax_details) + ","
                    + "`is_cancelled` = " + JSON.stringify(orderUpdate.is_cancelled) + ","
                    + "`is_returned` = " + + JSON.stringify(orderUpdate.is_returned) + ","
                    + "`tax_id` = " + orderUpdate.tax_id + ","
                    + "`created_by` = " + orderUpdate.created_by + ","
                    + "`created_on` = " + orderUpdate.created_on + ","
                    + "`last_modified_by` = " + orderUpdate.last_modified_by + ","
                    + "`last_modified_on` = " + orderUpdate.last_modified_on 
                    + "WHERE `id` = " + orderId  + ";"


            connection.query (sql, function (err, rows, fields)
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