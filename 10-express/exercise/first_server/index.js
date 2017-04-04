var express = require('express'),
    xHandlebars = require('express-handlebars'),
    app = express();

var data = {
  'projects': [
    {
      'id': 0,
      'title': 'War - the card game',
      'description': 'Implement the game of war as a command line app'
    },
    {
      'id': 1,
      'title': 'Express homework',
      'description': 'finish the homework for the Express class'
    },
    {
      'id': 2,
      'title': 'Some other project',
      'description': "Think of some other projects or something I don't know what ever."
    }
  ]
}

app.engine('handlebars', xHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function( request, response){
  response.render('home', {
    'title': 'Test'
  })
});

app.get('/about', function( request, response){
  response.send('this is the about page')
});

app.get('/projects', function( request, response ) {
  response.render('projects', data );
});

app.get('projects/:id', function ( request, response) {
  var id = request.params.id,
      index = parseInt( id, 10),
      project = data.projects[ index ];

  response.render('project', project)
});

app.listen(3000, function(){
  console.log('examples of applistening to port: 3000');
});
