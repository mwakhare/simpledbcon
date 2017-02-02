var tbleUserModule = require ("./tblUserModule"); //to operate 'User' table of 'korsall' database

var app = require ('../app'); //expressJS allows circular dependencies


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
  //app.post('/v1/feedbacks'

  var newFeedback = new FeedBackModel ();

  newFeedback.username = req.body.username;
  newFeedback.location = req.body.location;
  newFeedback.response1 = req.body.response1;
  newFeedback.response2 = req.body.response2;
  newFeedback.response3 = req.body.response3;
  newFeedback.response4 = req.body.response4;
  newFeedback.comment = req.body.comment;

   //save to db through model :: Add a record
   newFeedback.save (function (err, savedFeedback)
   {
        if (err)
        {
            res.json (false);
            //console.log (newFeedback.username + " could not be added");
        }
        else
        {
            res.json (true);
            //res.json (savedFeedback);

            //console.log (newFeedback.username + " added successfully");
        } 
    }); //newFeedback.save

}; //postOneHandler


exports.updateOneHandler = function (req, res)
{
    //app.put ('/v1/feedbacks/:id'

    var feedbackUserName = req.params.id;
    var feedbackLocation = req.body.location;
    // var feedbackResponse1 = req.params.response1;
    // var feedbackResponse2 = req.params.response2;
    // var feedbackResponse3 = req.params.response3;
    // var feedbackResponse4 = req.params.response4;
    // var feedbackComment = req.params.comment;

   FeedBackModel.update ( {_id: feedbackUserName }, 
                            { $set:{ location : feedbackLocation }}, 
                            {multi:false}, 
                            function (err, updatedRec)
                            {
                                if (err)
                                {
                                    res.json (false);
                                }
                                else
                                {
                                    //res.json (true);
                                    res.json (updatedRec);
                                }
                            }
                        );
}; //updateOneHandler


exports.deleteOneHandler = function (req, res)
{
    //app.delete ('/v1/feedbacks/:id'

    var feedbackToDelete = req.params.id;

    FeedBackModel.remove ( {_id : feedbackToDelete}, 
                            function (err, feedbackRec)
                            {
                                if (err)
                                {
                                    res.json (false);
                                    console.log (feedbackToDelete.username  + " could not be deleted");
                                }
                                else
                                {
                                    res.json(true);
                                    console.log ("\n\ndeleteOneHandlerRecord is deleted successfully");
                                } 
                            }
                        ); //FeedBackModel.remove

}; //deleteOneHandler