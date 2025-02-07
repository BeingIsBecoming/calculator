const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

let numberOne = document.querySelector(".number");
let numberTwo = document.querySelector(".number");
let operator = document.querySelector(".operator");

const addButton = document.querySelector("#add");
addButton.addEventListener("click",add);

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click",subtract);

const multiplyButton = document.querySelector("#add");
multiplyButton.addEventListener("click",multiply);

const divideButton = document.querySelector("#add");
divideButton.addEventListener("click",divide);

const equalsButton = document.querySelector(".equals");
// equalsButton.addEventListener("click",());

const clearButton = document.querySelector(".clear");
// clearButton.addEventListener("click",());
