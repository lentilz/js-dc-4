var xaxis = [14, 52],
    yaxis = [83, 02],
    slope;

// Print our values of X&Y axis Arrays
console.log( 'X-Axis: ' + xaxis, 'Y-Axis: ' + yaxis);

// Calculate the slope
slope = (yaxis[1]-yaxis[0])/(xaxis[1]-xaxis[0]);

// Log distance
console.log( slope );
