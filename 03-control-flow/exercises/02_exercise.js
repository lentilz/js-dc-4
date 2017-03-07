/*
  While Loops
  In-class Exercise #2
  Code Independently, then together
*/

// Create an array with the names 'curly', 'lary' and 'moe'
var names = ['curly', 'lary', 'moe'],
    name = 0;

/*
Create a simple while loop that iterates over the array of names and `console.log`s them
*/
// console.log( names.length )
// while ( name < names.length ) {
//   console.log( names[name] );
//   name++
// }

/*
Create a simple while loop that iteratoes over each name in the array of names. Inside your loop, if the name is 'curly', then `console.log` 'curly is the best', otherwise `console.log` the current name is one of the three stooges
*/
while ( name < names.length ) {
  names[name] === 'curly' ? 
    console.log( 'curly is the best' ) :
    console.log( names[name], ', is not curly');
  name++
}


// Create a `do while` loop that does the same as the above
// console.log( name , names.length  );
// do {
//   console.log( names[ name ] )
//   name++
// } while ( name < names.length )
