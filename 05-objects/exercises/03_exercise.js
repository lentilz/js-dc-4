/*

You can pull in data from another file using JavaScripts `require()` method,
which you pass a path as a string to the file you wish to incldue. For instance,
you could require a json file like this:

var myJSON = require('./path/to/file.json')

Given the above, import `data.json` and save it to a variable.

Once json data is imported, it can be treated like a regular JavaScript object.
How cool is that?

Write a loop that will print out our JSON data as a string, in the following format:

Quick-E-Mart's Current Stock
Item, Color, Price
Aubergine, Purple, 1.59
Apple, Red, 0.78
Nuts, Brown, 2.23

*/

var store = require('./data.json'),
    storeSize = Object.keys(store).length,
    headings = Object.keys( store.Foods[0] );

// console.log(store['Store Name'], storeSize, headings.join(', ') );

console.log( store['Store Name'] + "'s Current Stock");
console.log( headings.join(', ') );

for ( var i = 0; i < store.Foods.length; i++) {
  // console.log( headings.join(', ') );
  // console.log( store[Object.keys(store)[i]] + "'s Current Stock");
  console.log( store.Foods[i].name + ', ' + store.Foods[i].color );
  // console.log( Object.keys(store)[i] + ': ' + store[Object.keys(store)[i]] );
  // console.log( store[Object.keys(store)[i]].typeOF )
}
