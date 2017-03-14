/*

Data Modeling

Create a JavaScript object that is modelled off of a car.

Declare a variable and assign your object to it. Give your car at least four
properties, at least one of which is a method.

*/
var car = {
  model : 'Toyota',
  name : 'Camry',
  color : 'Red',
  year : 1999,
  mileage : 121495,
  upgrades : {
    gps : false,
    rearviewCamera : false,
    radio : true
  }
}

console.log( car + '\n' + car.upgrades.gps );
