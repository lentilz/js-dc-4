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

<<<<<<< HEAD
var testArticle = new Article({
 url: 'www.google.com',
 author: 'ME',
 title: 'Google',
 description: 'A really great search engine'
});oh interest

=======
>>>>>>> 8c0a0f9a6249997ae46beca7017ea97374c850c2
// application routes (i.e. controller)
app.get('/', function( req, res ) {
  // index route
  // list every article

<<<<<<< HEAD
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
=======
  Article.find({}, function( err, articles ) {

    res.render('index', { articles: articles })

  })

>>>>>>> 8c0a0f9a6249997ae46beca7017ea97374c850c2
})

app
  .get('/article/new', function( req, res ) {
    // new view
    // render template for creating a new article
<<<<<<< HEAD
=======

    res.render('new')

>>>>>>> 8c0a0f9a6249997ae46beca7017ea97374c850c2
  })
  .post('/article/new', function( req, res ) {
    // create a new article in the DB
    // render show view for new article
<<<<<<< HEAD
=======

    var newArticle = new Article({
      url: req.body.url,
      author: req.body.author,
      title: req.body.title,
      description: req.body.description
    })

    newArticle.save()

    res.redirect('/')

  })

  app.get('/article/:id', function( req, res ) {
    // show route
    // show details for a specific/single article
>>>>>>> 8c0a0f9a6249997ae46beca7017ea97374c850c2
  })

// run on port 3000
app.listen(3000)
