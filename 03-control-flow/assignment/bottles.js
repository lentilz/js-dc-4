// 100-2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

var bottles = 100,
    empty = 0;

for (var i=bottles; i >= 0; i--) {
    if ( i === 1 ) {
      console.log( i + ' bottle of beer on the wall, ' + i + ' bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.');
    } else if ( i === 0 ) {
      console.log( 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.' );
    } else {
        console.log( i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + (i - 1) + ' bottle of beer on the wall.');
    }
}
