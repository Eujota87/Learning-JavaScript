//functions
function sumOfTwo(num1, num2) {
    return num1 + num2;
}

console.log("Sum of two numbers: " + sumOfTwo(3,4));

//functions without return specified returns: undefined


//scope - local vs global variables
console.log("Test before creation: " + test); //test is undefined here

var test = 5; //test is declared

function changeTest() {
    test = 6;
}

console.log("Test no change: " + test); //test before being changed

changeTest(); //change test
console.log("Test change: " + test); //test after change

function localTest() {
    var test = 9; //create a local variable with same name
    console.log("Test local: " + test);
}
localTest();

console.log("Test global: " + test); //global test is not affect by the copy


//next in line - add an item to the end of array, and remove/return the first
function nextInLine(array, item) {
    array.push(item)
    return array.shift();
}

var testArray = [1,2,3,4,5];
console.log("Array before change: " + testArray);
console.log("Item removed: " + nextInLine(testArray,6));
console.log("Array after change: " + testArray);

