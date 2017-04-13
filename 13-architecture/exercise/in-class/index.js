// require dependencies
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

var app = express()

mongoose.connect('mongodb://localhost:27017/hackerwall')

var Article = require('./models/Article')

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

var testArticle = new Article({
 url: 'www.google.com',
 author: 'ME',
 title: 'Google',
 description: 'A really great search engine'
});oh interest

// application routes (i.e. controller)
app.get('/', function( req, res ) {
  // index route
  // list every article

  Article.find({}, function(err, articles){
    if ( err ){
      // error
    } else {
      res.render('index', {articles: articles})
    }
  });
})

app.get('/article/:id', function( req, res ) {
  // show route
  // show details for a specific/single article
})

app
  .get('/article/new', function( req, res ) {
    // new view
    // render template for creating a new article
  })
  .post('/article/new', function( req, res ) {
    // create a new article in the DB
    // render show view for new article
  })

// run on port 3000
app.listen(3000)
