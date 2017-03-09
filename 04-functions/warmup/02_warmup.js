/*
Warm up

2,520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

var i = false
var k = 0
while (i === false) {
    k = k+1
    for( var m = 2; m < 20; m++ ) {
      if ( k % m === 0 && k % (m+1) === 0) {
        i = true
        console.log(k)
      }
    }

    // if ((k % 2===0) && (k % 3===0) && (k % 4===0) && (k % 5===0) && (k % 6===0) && (k % 7===0) && (k % 8===0) && (k % 9===0) && (k % 10===0)) {
    //   i = true
    //   console.log(k)
    // }

    console.log('hi')
}
