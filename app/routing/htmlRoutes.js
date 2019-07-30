
//Routes for HTML files
module.exports = function(app){

var path = require("path");

//Route for home page

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });



      //Route for survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/style.css", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/css/style.css"));
  })

}