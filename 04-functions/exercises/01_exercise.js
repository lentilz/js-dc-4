/*

Hello World

Write a function that `console.log`s 'Hello World' and call it.

*/
function hello() {
  console.log('Hello World')
}

hello()


/*

Declare a variable called myNumber and assign a number value to it.

Next, declare a function called addOne that adds 1 to myNumber. After
that, declare another function called subtractOne that subtracts 1
from myNumber.

Use both of your functions a few times. If there's time, write
functions that add or subtract more than 1 from myNumber.

*/
var myNumber = 13;

function addOne(){
  myNumber++;
  console.log( myNumber + ' added')
}

function substractOne(){
  myNumber--;
  console.log( myNumber + ' substracted')
}

addOne()
