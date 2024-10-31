//anonymous function
var magic = function(argument) {
    return argument;
}

//we can turn it into an arrow function ->

//arrow function
const myFunc = (argument) => argument; //returns the argument

console.log(myFunc("ola"));

//high order arrow function (map, filter, reduce)
//take functions as arguments for processing collections of data

//...when on function takes another functions as an argument...
//...that's a good time for an arrow function


//I don't understand 100% how this example works
const realNumberArray = [4, 3, -1.2, 2.3, 4.5 , -45, 90.3];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}


//default parameters
function defaultParameters(value = 1) {
    return value;
}

console.log(defaultParameters()); //prints 1
console.log(defaultParameters(3)); //prints 3


//rest operator, function with variable number of arguments
//turns the arguments passed in into an array called args
function sumNumbers(...args) { 
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sumNumbers(2,4,6));

//spread operator, expands/spreads out an array
//take an array and spreads it out into individual parts
const arr1 = [1 , 2, 3, 4];
let arr2;

arr2 = [...arr1];
