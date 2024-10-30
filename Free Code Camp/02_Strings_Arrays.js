//more on strings
var myStr = "ABC";

console.log("Second letter of myStr: " + myStr[1]);
console.log("Last letter of myStr: " + myStr[myStr.length - 1]);

//strings are imutable(cannot change single element):
//myStr[2] = "A"; -> This is not allowed
//myStr = "ABA";  -> This is allowed

//more operations with strings
function wordBlanks(noun, adj, verb, adverb) {
    var result = "";
    result += "The " + adj + " " + noun + " " + verb + " to the store " + adverb;
    return result
}
console.log(wordBlanks("dog", "big", "jump", "slowly"));

//arrays
var ourArray = ["Samuel", "Deborah", "Isaac"];
var otherArray = ["Samuel", 23, 4.3, true]; //mixing data types

//nested arrays
var nestedArray = [["Red", 3], ["Blue", 2]];
console.log(nestedArray[0][0]);
console.log(nestedArray[0][1]);
console.log(nestedArray[1][0]);
console.log(nestedArray[1][1]);

//push - adds element at the end
var smallArray = ["dog", "cat"];
smallArray.push("bird"); //returns the new size of array
console.log(smallArray);

//pop - remove last element
smallArray.pop(); //returns the element that was removed
console.log(smallArray);

//shift - remove the first element
smallArray.shift(); //returns the element that was removed
console.log(smallArray); 

//unshift - adds at the beginning
smallArray.unshift("bear"); //returns the new size of array
console.log(smallArray); 

