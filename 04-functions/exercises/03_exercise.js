/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/

function average(num1, num2){
  console.log( num1 + ' + ' + num2, (num1 + num2)/2);

  return (num1 + num2)/2;
}

average(10, 20)


/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

1. subtract x2 from x1 to get deltaX
2. subtract y2 from y1 to get deltaY
3. square both deltaX and deltaY
4. add the square of deltaX to the square of deltaY
5. take the square root of the sum of step 4


*/
