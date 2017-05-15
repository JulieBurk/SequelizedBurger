
var express = require("express");

var router = express.Router();

// var burger = require("../models/burger");

var db = require("../models")

// // get route -> index
// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

router.get("/", function(req, res) {
  // express callback response by calling burger.selectAllBurger

  db.burgers.findAll().then( function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });

});

// post route -> back to index
router.post("/create", function(req, res) {
  console.log(req.body);
  // takes the request object using it as input for buger.addBurger
  db.burgers.create({
    burger_name: req.body.burger_name, 
    devoured: req.body.devoured,
  }).then(function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/burgers");
  });
});

// put route -> back to index
router.put("/update", function(req, res) {
  db.burgers.update({devoured:true},
    {where:{id: req.body.burger_id}}).then(function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/burgers");
  });
});

module.exports = router;
// db.burgers.update({devoured:true},{where:{id: req.body.burger_id}}).then(function(result) { /* ... */ });