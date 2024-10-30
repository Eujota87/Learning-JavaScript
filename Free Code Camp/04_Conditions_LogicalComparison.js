//conditional operators
var num = 6;

if (num < 4) {
    console.log("num < 4");
}
else if (num > 4) {
    console.log("num > 4");
}
else {
    console.log("num == 4");
}


//stricly conditional operator (doesn't type convert before comparison)
var num2 = '5';
if (num2 === 5) {
    console.log("num2 is strictly equal to 5");
}
if (num2 == 5) {
    console.log("num2 is NOT strictly equal to 5");
}

//also works with inequality (!==)
var num3 = 7;
if (num3 !== '7') { // this returns true, as 7 is not equal to '7'
    console.log("num3 is strictly inequal to 7");
}
if (num3 != '7') { //this returns false, as 7 is equal to 7
    console.log("num3 is inequal to 7");
}


//logical operators
if (true && true) {
    //and
}
if (true || false) {
    //or
}
if (!false) {
    //not
}

//skip if statements to return booleans
function oneWay() {
    var a, b;
    if (a > b) {
        return true
    }
}
function anotherWay() {
    var a, b;
    return a > b
} 
