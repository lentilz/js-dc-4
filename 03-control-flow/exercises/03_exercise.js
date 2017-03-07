/*

  In-class Exercise 02
  Independent coding

  Prompt:

  If we list the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all multiples of 3 or 5 below 1000.

*/
 var total = 0;

// get multiples of 3 and 5 below 1000
for ( var i=0; i<10; i++ ){
  if ( i % 3 === 0 || i % 5 === 0 ){
    console.log(i + ' is a multiple of 3 or 5')
    total+= i
  } else {
    console.log('not a multiple');
  }
}
console.log( total )
