
// DOM REFERENCES
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");

// EVALUATION VARIABLES
let a = "";
let b = "";
let operator = "";
let displayText = "";

// EVALUATION FUNCTION
const evaluate = (a, b, operator) => {
    a = parseFloat(a);
    b = parseFloat(b);

    return  operator === "+" ? a + b :
            operator === "-" ? a - b :
            operator === "x" ? a * b :
            operator === "÷" ? (b === 0 ? "8008" : a / b):
            undefined;
};

// EVENT DELEGATION

// NUMBERS
numberButtons.forEach(button => {
    button.addEventListener("click", function(){
        let number = this.textContent;
        display.textContent += number;
    });
});

// CLEAR 
clearButton.addEventListener("click", function() {
    a = "";
    b = "";
    operator = "";
    display.textContent = "";
});