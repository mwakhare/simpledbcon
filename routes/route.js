/*
 * module: route.js 
 * -------------------------
 * This module is a router module to handle all the route requests for USER and ORDER tables.
 * 
 * getAllUserHandler -  returns JSON array object of all the user records from the database.
 * getOneUserHandler - returns JSON object of the specific user id record from the database. 
 * postOneUserHandler - adds a new JSON object user record in the database.
 * updateOneUserHandler - updates the specific user id record in the database.
 * deleteOneUserHandler - detetes the specific user id  record from the database.
 * 
 * 
 * getAllOrderHandler -  returns JSON array object of all the order records from the database.
 * getOneOrderHandler - returns JSON object of the specific order id record from the database. 
 * postOneOrderHandler - adds a new JSON object order record in the database.
 * updateOneOrderHandler - updates the specific order id record in the database.
 * deleteOneOrderHandler - detetes the specific order id record from the database.
 * 
 */

//to operate on 'User' table of 'korsall' database
var tblUserModule = require ("../tblUserModule"); 
var tblOrderModule = require ("../tblOrderModule"); 

//var app = require ('../app'); //expressJS allows circular dependencies


// ---------------- REST API HANDLERS FOR USER TABLE ---------------------- //

exports.getAllUserHandler = function (req, res)
{
    //app.get ('/v1/users'
    tblUserModule.tblUserGetAll (function (err, rows, fields)
    {
        if (err)
        {
            res.json (false);    
            return;
        }
        else
        {
            res.json (rows);
            console.log ("\n\ngetAllHandler: All users Array: " + JSON.stringify (rows));
        }

    }); //tblUserModule.tblUserGetAll

}; //getAllUserHandler


exports.getOneUserHandler = function (req, res)
{
    //app.get ('/v1/user/:id'
    
    var userToFind = req.params.id;

    console.log ("\n\ngetOneHandler One user = "  + userToFind);

     tblUserModule.tblUserGetOne (userToFind, function (err, rows, fields)
    {
        if (err)
        {
            res.json (false);    
            return;
        }
        else
        {
            res.json (rows);
            console.log ("\n\ngetOneHandler: Specific user: " + JSON.stringify (rows));
        }
    }); //tblUserModule.tblUserGetOne

}; //getOneUserHandler


exports.postOneUserHandler = function (req, res)
{
  //app.post('/v1/users'
            var newUser = 
            { 
                id : req.body.userID, 
                user_info : 
                    {
                        Name : req.body.userName,
                        Email : req.body.Email,
                        Password : req.body.password,
                        _DOB : req.body.dob,
                        Gender : req.body.gender,
                        Social : req.body.social,
                        _TC : req.body.tc,
                        MobileNumber : req.body.mobile,
                        Verified : req.body.verified,
                        Active : req.body.active,
                        LastLogin : req.body.lastLogin,
                        IPAddress : req.body.ipAddress,
                        _MACID : req.body._MACID,
                        BrowserString:req.body.browserString
                    }
            };

            tblUserModule.tblUserInsert (newUser, function (err, result)
            {
                if (err)
                {
                        res.json (false);
                        //console.log (newUser.id + " could not be added.");
                }
                else
                {
                res.json (true);
                    // console.log ("+++++++++++++++++++++++++++");
                    // console.log (result);
                    // console.log ("+++++++++++++++++++++++++++");
                }

            }); //tblUserInsert

}; //postOneUserHandler


exports.updateOneUserHandler = function (req, res)
{
    //app.put ('/v1/users/:id'

            var newUser = 
            { 
                id : req.params.id, 
                user_info : 
                    {
                        Name : req.body.userName,
                        Email : req.body.Email,
                        Password : req.body.password,
                        _DOB : req.body.dob,
                        Gender : req.body.gender,
                        Social : req.body.social,
                        _TC : req.body.tc,
                        MobileNumber : req.body.mobile,
                        Verified : req.body.verified,
                        Active : req.body.active,
                        LastLogin : req.body.lastLogin,
                        IPAddress : req.body.ipAddress,
                        _MACID : req.body._MACID,
                        BrowserString:req.body.browserString
                    }
            };

            tblUserModule.tblUserUpdate (newUser.id, newUser.user_info, function (err, rows, fields)
            {
                if (err)
                {
                        res.json (false);
                }
                else
                {
                    res.json (rows);
                    // console.log ("+++++++++++++++++++++++++++");
                    // console.log (fields);
                    // console.log ("+++++++++++++++++++++++++++");
                }

            }); //tblUserUpdate

}; //updateOneUserHandler


exports.deleteOneUserHandler = function (req, res)
{
    //app.delete ('/v1/users/:id'

    var userToDelete = req.params.id;

    console.log ("\n\deleteOneUserHandler One user = "  + userToDelete);

     tblUserModule.tblUserDelete (userToDelete, function (err, result)
    {
        if (err)
        {
            res.json (false);    
            //return;
        }
        else
        {
            res.json (result);
            console.log ("\n\deleteOneHandler: Specific user: " + JSON.stringify (result));
        }
    }); //tblUserModule.tblUserDelete

}; //deleteOneUserHandler



// ---------------- REST API HANDLERS FOR ORDER TABLE ---------------------- //
exports.getAllOrderHandler = function (req, res)
{
    //app.get ('/v1/orders'
    tblOrderModule.tblOrderGetAll (function (err, rows, fields)
    {
        if (err)
        {
            res.json (false);    
            return;
        }
        else
        {
            res.json (rows);
            console.log ("\n\ngetAllOrderHandler: All users Array: " + JSON.stringify (rows));
        }

    }); //tblOrderModule.tblOrderGetAll

}; //getAllHandler


exports.getOneOrderHandler = function (req, res)
{
    //app.get ('/v1/orders/:id'
    
    var orderToFind = req.params.id;

    console.log ("\n\ngetOneOrderHandler One order = "  + orderToFind);

     tblOrderModule.tblOrderGetOne (orderToFind, function (err, rows, fields)
    {
        if (err)
        {
            res.json (false);    
            return;
        }
        else
        {
            res.json (rows);
            console.log ("\n\ngetOneOrderHandler: Specific order: " + JSON.stringify (rows));
        }
    }); //tblOrderModule.tblOrderGetOne

}; //getOneOrderHandler


exports.postOneOrderHandler = function (req, res)
{
  //app.post('/v1/orders'

        var newOrder = 
        { 
            id : req.body.orderID, 
            products : req.body.products,
            order_total : req.body.order_total, 	
            order_status : req.body.order_status,
            order_shipping_carrier : req.body.order_shipping_carrier,
            order_shipping_reference: req.body.order_shipping_reference,

            tax_details : req.body.tax_details,
            is_cancelled : req.body.is_cancelled,
            is_returned : req.body.is_returned,
            tax_id : req.body.tax_id,

            created_by : req.body.created_by,
            created_on : req.body.created_on,
            last_modified_by : req.body.last_modified_by,
            last_modified_on : req.body.last_modified_on
        };

            tblOrderModule.tblOrderInsert (newOrder, function (err, result)
            {
                if (err)
                {
                        res.json (false);
                        //console.log (newOrder + " could not be added.");
                }
                else
                {
                res.json (true);
                    // console.log ("+++++++++++++++++++++++++++");
                    // console.log (result);
                    // console.log ("+++++++++++++++++++++++++++");
                }

            }); //tblOrderInsert

}; //postOneOrderHandler


exports.updateOneOrderHandler = function (req, res)
{
    //app.put ('/v1/orders/:id'

var orderUpdate = 
        { 
            //id : req.params.id, 
            products : req.body.products,
            order_total : req.body.order_total, 	
            order_status : req.body.order_status,
            order_shipping_carrier : req.body.order_shipping_carrier,
            order_shipping_reference: req.body.order_shipping_reference,

            tax_details : req.body.tax_details,
            is_cancelled : req.body.is_cancelled,
            is_returned : req.body.is_returned,
            tax_id : req.body.tax_id,

            created_by : req.body.created_by,
            created_on : req.body.created_on,
            last_modified_by : req.body.last_modified_by,
            last_modified_on : req.body.last_modified_on
        };


            tblOrderModule.tblOrderUpdate (req.params.id, orderUpdate, function (err, rows, fields)
            {
                if (err)
                {
                        res.json (false);
                }
                else
                {
                    res.json (rows);
                    // console.log ("+++++++++++++++++++++++++++");
                    // console.log (fields);
                    // console.log ("+++++++++++++++++++++++++++");
                }

            }); //tblOrderUpdate

}; //updateOneOrderHandler


exports.deleteOneOrderHandler = function (req, res)
{
    //app.delete ('/v1/orders/:id'

    var orderToDelete = req.params.id;

    console.log ("\n\deleteOneOrderHandler One order = "  + orderToDelete);

     tblOrderModule.tblOrderDelete (orderToDelete, function (err, result)
    {
        if (err)
        {
            res.json (false);    
            //return;
        }
        else
        {
            res.json (result);
            console.log ("\n\deleteOneOrderHandler: Specific order: " + JSON.stringify (result));
        }
    }); //tblOrderModule.tblOrderDelete

}; //deleteOneOrderHandler
