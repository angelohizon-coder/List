// by using require it allows us to other javascript files or known as modules to gain access to their functionalities and use them as we develop websites.
const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const app = express();
const port = 3000;

// similar to how it is in java, call the javascript file date and access the method getday();
let day = date.getDay();
let list = ["Study Japanese"];
let workList = [];
// create a new object from method Date() to gain access to its methods

app.set("view engine", "ejs");
// this allows you to use the data given within the form
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("list", {action: "/", day: day, list: list, title: "ToDo List"});
});

app.post("/", function(req, res) {
  list.push(req.body.entry);

  // this allows us to pass the information we received from the form and send it to the app.get('/')
  res.redirect("/");
});

app.get("/work", function(req, res) {
  res.render("list", {action: "/work", day: day, list: workList, title: "Work List"});
});

app.post("/work", function(req, res) {
  workList.push(req.body.entry);

  // this allows us to pass the information we received from the form and send it to the app.get('/work')
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about", {title: "About"});
});

app.listen(port, function() {
  console.log("Server is running on " + port);
});
