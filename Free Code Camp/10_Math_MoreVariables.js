//Math library

//generate random number
console.log(Math.random());

//whole number from decimals
console.log(Math.floor(0.2));


//ternary operator
//condition ? do_if_true : else_do_this;
function checkAB(a, b) {
    return a == b ? true : false;
}

//nesting ternay operator:
function checkNum(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}


//let and var

//let doesn't allow you to declare a variable more than once
//some people never use var

//let is also declare inside the block/scope you are working on

let myVariable = 10; //try to aways use let