const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let list = [];

app.set('view engine', 'ejs');
// this allows you to use the data given within the form
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //
  // const day = new Date();
  // const dayNumber = day.getDay();

  // create a new object from method Date() to gain access to its methods
  let entry = new Date();
  // property and value for the function toLocalDateString
  // , year: 'numeric', month: 'long', day: 'numeric'
  // you can add the properties given above
  let options = { weekday: 'long'};
  // to toLocalDateString is the funciton used from the Date method
  let day = entry.toLocaleDateString('en-us', options);

  res.render('list', {day: day, list: list});
});

app.post("/", function(req, res) {
  let entry = req.body.entry;
  list.push(entry);

  // this allows us to pass the information we received from the form and send it to the app.get('/')
  res.redirect("/");
})

app.listen(port, function() {
  console.log("Server is running on " + port);
});

// function daySelector(date) {
//   switch(date) {
//     case 'Sunday':
//     break;
//     case 'Monday':
//     break;
//     case 'Tuesday':
//     break;
//     case 'Wednesday':
//     break;
//     case 'Thursday':
//     break;
//     case 'Friday':
//     break;
//     case 'Saturday':
//     break;
//     default:
//
//   }
// }
