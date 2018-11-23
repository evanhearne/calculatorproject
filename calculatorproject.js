function addNumberToDisplay(number) {
var displayScreen = document.getElementById('displayScreen');
var displayScreenValue = displayScreen.value;
displayScreen.value = displayScreenValue + number;
}

function addOperatorToDisplay(operator) {
	var displayScreen = document.getElementById('displayScreen');
	var displayScreenValue = displayScreen.value;
	displayScreen.value = displayScreenValue + operator;
}

function evaluateEquation() {
	var displayScreen = document.getElementById('displayScreen');
	var displayScreenValue = displayScreen.value;
	var evaluateEquation = eval(displayScreen.value)
    displayScreen.value = evaluateEquation;
}