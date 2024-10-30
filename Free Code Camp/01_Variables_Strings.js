//in-line comment

/*
multi-line comment
*/

//data types:
//undefined, null, boolean, string, symbol, number and object

//declaring a variable
let myNumber  = 10;
var myNumber2 = 20;
//declaring a constant
const pi = 3.13;

//declaring vs assigning
var a;
a = 10;

//basic operations
var x = 10 + 20;
var y = 20 - 10;
var z = (x / y) * 7;

z += 2;
z++;
z--;

console.log("My z variable: " + z);

//floats and remainders
var myFloat = 2.0 * 3.2;

console.log("My float/decial variable: " + myFloat);

var myRemainder = 9 % 2;

console.log("My remainder variable: " + myRemainder);

//strings and scape character
var myStr = "I am a \"double quoted\" string";
var myStr2 = 'Or I can write it "like this"';
var myStr3 = `'Or even "like this" with single and double quotes'`;
console.log(myStr);
console.log(myStr2);
console.log(myStr3);

console.log("This is\nA new line");

console.log("The length of myString is: " + myStr.length);