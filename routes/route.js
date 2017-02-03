/*
 * module: route.js 
 * -------------------------
 * This module is a router module to handle the route requests.
 * 
 * getAllHandler -  returns JSON array object of all user records from the database.
 * getOneHandler - returns JSON object of the user id specific record from the database. 
 * postOneHandler - adds a new JSON object user record in the database.
 * updateOneHandler - updates the user id specific record in the database.
 * deleteOneHandler - detetes the user id specific record from the database.
 * 
 */

//to operate on 'User' table of 'korsall' database
var tbleUserModule = require ("../tblUserModule"); 

//var app = require ('../app'); //expressJS allows circular dependencies


// ---------------- REST API HANDLERS ---------------------- //

exports.getAllHandler = function (req, res)
{
    //app.get ('/v1/users'
    tbleUserModule.tblUserGetAll (function (err, rows, fields)
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

    }); //tbleUserModule.tblUserGetAll

}; //getAllHandler


exports.getOneHandler = function (req, res)
{
    //app.get ('/v1/user/:id'
    
    var userToFind = req.params.id;

    console.log ("\n\ngetOneHandler One user = "  + userToFind);

     tbleUserModule.tblUserGetOne (userToFind, function (err, rows, fields)
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
    }); //tbleUserModule.tblUserGetAll

}; //getOneHandler


exports.postOneHandler = function (req, res)
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

            tbleUserModule.tblUserInsert (newUser, function (err, result)
            {
                if (err)
                {
                        res.json (false);
                        //console.log (newFeedback.username + " could not be added");
                }
                else
                {
                res.json (true);
                    // console.log ("+++++++++++++++++++++++++++");
                    // console.log (result);
                    // console.log ("+++++++++++++++++++++++++++");
                }

            }); //tblUserInsert

}; //postOneHandler


exports.updateOneHandler = function (req, res)
{
    //app.put ('/v1/users/:id'

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

            tbleUserModule.tblUserUpdate (newUser.id, newUser.user_info, function (err, rows, fields)
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

}; //updateOneHandler


exports.deleteOneHandler = function (req, res)
{
    //app.delete ('/v1/users/:id'

    var userToDelete = req.params.id;

    console.log ("\n\deleteOneHandler One user = "  + userToDelete);

     tbleUserModule.tblUserDelete (userToDelete, function (err, result)
    {
        if (err)
        {
            res.json (false);    
            return;
        }
        else
        {
            res.json (result);
            console.log ("\n\deleteOneHandler: Specific user: " + JSON.stringify (rows));
        }
    }); //tbleUserModule.tblUserDelete

}; //deleteOneHandler