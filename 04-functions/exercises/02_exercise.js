/*

Create a function called addNumbers that takes two parameters and `console.log`s the result of adding the two parameters together

Create another function called subtractNumbers that takes two
parameters and `console.log`s the result of subtracting the second
parameter from the first parameter.

Call both functions twice, passing in different numbers as arguments
each time.

*/
function addNumbers(num1, num2) {
  console.log(num1 + ' + ' + num2 + '=', num1 + num2);
}
addNumbers(12, 63);
addNumbers(15, 36);

function substractNumbers(num1, num2){
  console.log(num1 + ' - ' + num2 + '=', num1 - num2);
}
substractNumbers(36, 32);
substractNumbers(73, 14);
