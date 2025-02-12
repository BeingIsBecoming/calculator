// OPERATOR FUNCTIONS
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => (b === 0 ? "8008" : a / b);

// OPERATION VARIABLES
let num1 = document.querySelectorAll(".number");
let num2 = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let decimal = document.querySelector(".decimal");

let clearDisplay = document.querySelector(".clear");
let display = "";

// SWITCH CASE FUNCTION -- POLYMORPHISM
const evaluate = (num1,num2,operator) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === "+") return add(num1,num2);
    if (operator === "-") return subtract(num1,num2);
    if (operator === "x") return multiply(num1,num2);
    if (operator === "÷") return divide(num1,num2);
};

// EVENT HANDLER DELEGATION

