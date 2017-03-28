/*

Exercise 3
The event object

*/



/*

Get an array of all the buttons on the screen. Write an event handler that just `console.log`s "you clicked a button" when called. Loop over your array of buttons and attach our event handler to each button

*/
var buttons = document.querySelectorAll('.js-button');
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function(e) {
//     console.log( 'you clicked a button' );
//     e.preventDefault();
//   })
// }


/*

Refactor your event handler so that it `console.log`s the event object. Poke around the event object

*/
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function(e) {
//     console.log( this );
//     console.log( e );
//
//     e.preventDefault();
//   })
// }


/*

Refactor your event handler so that it `console.log`s the target subobject

*/

// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function(e) {
//     // console.log( this );
//     console.log( e.target, e );
//
//     e.preventDefault();
//   })
// }


/*

Student activity:
Do one more refactor of the event handler. Your event handler should:

1. get the increment/decrement value from the event target
2. turn that value into a number
3. add the increment/decrement value to the current value of counterIndex and update the page

Hint: any data that we define in our html with data-* will be in our elements dataset property

*/

var counterIndex = 0,
    counter = document.querySelector('h1');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    var incrementer = event.target.dataset.incrementer;

    counterIndex += parseInt( incrementer, 10 );
    counter.innerText = 'Counter: ' + counterIndex

    e.preventDefault();
  })
}
