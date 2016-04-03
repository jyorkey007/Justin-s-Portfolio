// chess board

// declares a variable for the size(length) of the board - 8
var size = 8;
// declares a variable for the size width of the board - 8
var sizeWidth = 8;
//declares a variable making it an empty string
var board = "";

/*
     creates a loop to make the chess board. 
     outer for loop handles the amount of lines
     and the inner for loop handles each character
     on a line. the if statement says if var x plus var y
     is divisible by 2 make var board and empty string
     else make it an octothorpe("#"). then after then add
     a line break
*/  
for (var y = 0; y < size; y++) {
	for (var x = 0; x < sizeWidth; x++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#"; /* this can be whatever you want it to be "!", "?" ect... */
		}
	board += "#";
	}
}