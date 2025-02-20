// DOM REFERENCES 
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");

// INITIALIZE OPERATION VARIABLES
let a = "";
let b = "";
let operator = "";

// OPERATION FUNCTION
const evaluate = (a, b, operator) => {
    a = parseFloat(a);
    b = parseFloat(b);

    return  operator === "+" ? a + b :
            operator === "-" ? a - b :
            operator === "x" ? a * b :
            operator === "÷" ? (b === 0 ? "8008" : a / b):
            undefined;
};

// NUMBER BUTTONS
numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        let number = this.textContent;
        display.textContent += number;
        if (operator === ""){
            a += number;
        } else {
            b += number;
        }
    });
});

// OPERATOR BUTTONS
operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        operator = this.textContent;
        display.textContent = operator;
    });
});

// CLEAR OPERATION
clearButton.addEventListener("click", function() {
    a = "";
    b = "";
    operator = "";
    display.textContent = "0";
});

// EQUALS OPERATION 
equalsButton.addEventListener("click", function() {
    display.textContent = evaluate(a, b, operator);
    a = "";
    b = "";
    operator = "";
});