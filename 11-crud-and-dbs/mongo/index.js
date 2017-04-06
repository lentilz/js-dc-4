var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
var Entry = require('./models/entry.js')

// mongoose.connect('mongodb://localhost:27017/guestbook')

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.get('/', function(req, res){
  Entry.find({}, function(err, guests){
    res.render('home', {name: "Ramsay", guests: guests})
  })
})

app.post('/', function(req, res){
  var currentEntry = new Entry({
    name: 'Lentie',
    created_on: Date,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })
})

app.listen( 3000, function() {
  console.log( 'Your server is running. Better go catch it.' )
})
