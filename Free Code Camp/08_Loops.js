//loops
var myArray = [];
var checkArraySize;

//while loops
//push 4 numbers
while (myArray.length < 4) {
    checkArraySize = myArray.push(myArray.length+1);
    console.log("Array: " + myArray);
    console.log("Array size: " + checkArraySize + "\n\n");
}


//for loops
//push more 4 numbers
for(var i = 4; i < 8; i++) {
    checkArraySize = myArray.push(i+1);
    console.log("Array: " + myArray);
    console.log("Array size: " + checkArraySize + "\n\n");
}

//for(var i = 0; i < 10; i += 2) {} -> increment by two every iteration

//nested arrays and loops:
//arrays inside other array
var nestedArray = [[1,2], [3,4], [5,6,7]];

for(var i = 0; i < nestedArray.length; i++) {
    for(var j = 0; j < nestedArray[i].length; j ++) {
        console.log(nestedArray[i][j]);
    }
}

//do while loops

//while and for loops check the condition before running
//do while loops always run at least once before checking

var a = 10;

do {
    console.log("a is equal to: " + a);
    a++;
} while(a < 5);
