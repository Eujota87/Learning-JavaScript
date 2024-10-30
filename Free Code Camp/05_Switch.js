//swicth cases
var num = 4;

switch(num) {
    case 1:
        console.log("Number One");
        break;
    case 2:
        console.log("Number Two");
        break;
    case 3:
        console.log("Number Three");
        break;
    case 'a':
        console.log("Letter 'a'");
        break;
    default:
        console.log("None of the options");
        break;    
}

//omiting break statement -> assign multiple isntructions to differente values
var num2 = 3;
switch(num) {
    case 1:
    case 2:
    case 3:
        console.log("number is between 1-3");
        break;
    case 4:
    case 5:
        console.log("number is between 4-5");
        break;
}