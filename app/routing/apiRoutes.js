var friends = require("./../data/friends");


//Method for adding new persons to database, as well as comparing them to find closest match
module.exports = function(app){
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        //Need to get friends from friends.js
        
        friends.push(newFriend);
        var closestMatch;
        
    
        //Maybe works?
        for(var i = 0; i< friends.length; i++){
            var sumDifference;
            for(var j = 0; j<friends[i].scores.length; j++){
                //Current score being compared
                var current = friends[i].scores[i];
                //The number that is the difference being added to the sum difference 
                var placeholder = current - newFriend.scores[i];
                //Adding to the sum difference
                sumdifference +=placeholder;
            }
            //Setting the new closest match
            if(sumDifference< closestMatch){
                closestMatch =sumDifference;
            }
        }
      
        res.json(closestMatch);
      });



  




        //Method for displaying the data
        app.get("/api/friends", function(req, res){
            return res.json(friends);
        
            });

  


        }