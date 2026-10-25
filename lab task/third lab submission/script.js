let firstNumber = "";
let secondNumber = "";
let operator = "";
 
function addNumber(number) {
 
    if (operator == "") {
        firstNumber = firstNumber + number;
    }
    else {
        secondNumber = secondNumber + number;
    }
 
    document.getElementById("display").value += number;
}
 
function setOperator(op) {
 
    if (firstNumber != "" && operator == "") {
        operator = op;
 
        document.getElementById("display").value += op;
    }
}
 
function clearScreen() {
 
    firstNumber = "";
    secondNumber = "";
    operator = "";
 
    document.getElementById("display").value = "";
}
 
function deleteNumber() {
 
    let text = document.getElementById("display").value;
    let result = "";
 
    for (let i = 0; i < text.length - 1; i++) {
        result += text[i];
    }
 
    if (secondNumber != "") {
        secondNumber = secondNumber.slice(0, -1);
    }
    else if (operator != "") {
        operator = "";
    }
    else {
        firstNumber = firstNumber.slice(0, -1);
    }
 
    document.getElementById("display").value = result;
}
 
function calculate() {
 
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let result;
 
    if (firstNumber == "" || secondNumber == "") {
        return;
    }
 
    if (operator == "+") {
        result = num1 + num2;
    }
    else if (operator == "-") {
		result = num1 - num2;
	}
	else if (operator == "*") {
		result = num1 * num2;
	}
	else if (operator == "/") {
		result = num1 / num2;
	}
 
    document.getElementById("display").value = result;
 
    firstNumber = "" + result;
    secondNumber = "";
    operator = "";
}