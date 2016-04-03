/*
     Loop through the array,
    Compare each letter to the first letter of your name, and if it sees that letter:
    It will push that letter and all the letters that follow it to an array, stopping when the number of   	 	letters it pushes are equal to the number of letters in your name.

	TODO: search internet to see if any javascript methods can help to
	make it only search your specific name and not any other name with the same
	first character.

*/





// target text
var text = "blah blah blah Justin blah blah \
            blah blah blah blah blah Justin \
            blah blah Justin blah blah blah"
// search text
var myName = "Justin";

// empty array
var hits = [];

// iterates over the target text 1 character at a time until it reaches the length or end
for (var i = 0; i < text.length; i++) {
// search target text and look for the character "J"
    if (text[i] === "J") {
    // if target text is found then loop through search text and add to the hits array
            for (var j = i; j < (myName.length + i); j++) {
            // pushes each letter to the hits array
                hits.push(text[j]);
            }
        }        
    }      