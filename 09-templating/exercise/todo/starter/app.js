var data = {
  todos: [
    'learn html',
    'learn css',
    'learn js'
  ]
}

function renderedTemplate( data ){
  var app = document.getElementById('app'),
      templateSource = document.getElementById('to-do-template'),
      template = Handlebars.compile( templateSource.innerHTML ),
      renderedTemplate = template(data);

  app.innerHTML = renderedTemplate;
}
renderedTemplate( data )
