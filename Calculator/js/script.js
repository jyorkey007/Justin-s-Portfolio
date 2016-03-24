function buttonOne(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "1" onclick
	// from the onclick event with id button1
	document.getElementById('output').value += text;
}

function buttonTwo(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "2" onclick
	// from the onclick event with id button2
	document.getElementById('output').value += text;
}

function buttonThree(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "3" onclick
	// from the onclick event with id button3
	document.getElementById('output').value += text;
}

function buttonFour(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "4" onclick
	// from the onclick event with id button4
	document.getElementById('output').value += text;
}

function buttonFive(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "5" onclick
	// from the onclick event with id button5
	document.getElementById('output').value += text;
}

function buttonSix(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "6" onclick
	// from the onclick event with id button6
	document.getElementById('output').value += text;
}

function buttonSeven(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "7" onclick
	// from the onclick event with id button7
	document.getElementById('output').value += text;
}

function buttonEight(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "8" onclick
	// from the onclick event with id button8
	document.getElementById('output').value += text;
}

function buttonNine(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "9" onclick
	// from the onclick event with id button9
	document.getElementById('output').value += text;
}

function buttonZero(text) {
	// selects the input box with id output and then
	// gets the value which is nothing and adds a "0" onclick
	// from the onclick event with id buttonZero
	document.getElementById('output').value += text;
}

function buttonClear() {
	// selects the input box with id output and 
	// gets the value which is nothing and makes it
	// equal to an empty string which clears the 
	// screen
	document.getElementById('output').value = '';
}

function buttonSubtract() {
	document.getElementById('output').value += '-';
}

function buttonAddition() {
	document.getElementById('output').value += '+';
}

function buttonMultiplication() {
	document.getElementById('output').value += '*';
}

function buttonDivision() {
	document.getElementById('output').value += '/';
}

function buttonDecimal() {
	document.getElementById('output').value += '.';	
}

function buttonEquals() {
	document.getElementById('output').value = eval(document.getElementById('output').value);
}
