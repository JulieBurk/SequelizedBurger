
var express = require("express");

var router = express.Router();

// var burger = require("../models/burger");

var db = require("../models")

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger

  db.burgers.findAll().then( function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });

});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  db.burgers.create({
    text: req.body.burger_name, 
    complete: req.body.complete,
  }).then(function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.json(result);
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  db.burger.update({
    text: req.body.burger_id, 
    complete: req.body.complete
  }).then(function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
