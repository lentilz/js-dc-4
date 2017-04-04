var express = require('express'),
    expHandlebars = require('express-handlebars');

var app = express();

app.engine('handlebars', expHandlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
  response.send('hey')
})
app.listen(3000, function(){
  console.log('examples of applistening to port: 3000');
});
