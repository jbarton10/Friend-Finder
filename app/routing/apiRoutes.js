var friends = require("./../data/friends");


//Method for adding new persons to database, as well as comparing them to find closest match
module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        //console.log(newFriend);

        //Need to get friends from friends.js

        
        var closestFriendScore=20;
        var closestFriend;


        //Maybe works?
        for (var i = 0; i < friends.length; i++) {
            var sumDifference = 0 ;
 
            for (var j = 0; j < friends[i].scores.length; j++) {
                
                //Current score being compared
                var current = friends[i].scores[i];
                
                //The number that is the difference being added to the sum difference 
                var placeholder = Math.abs(current - newFriend.scores[i]);
                //Adding to the sum difference
                sumDifference += placeholder;
            }
            //Setting the new closest match
            if (sumDifference < closestFriendScore) {
                closestFriendScore = sumDifference;
                closestFriend = friends[i];
             
            }
        }
        
        friends.push(newFriend);

        res.json(closestFriend);
    });








    //Method for displaying the data
    app.get("/api/friends", function (req, res) {
        return res.json(friends);

    });




}