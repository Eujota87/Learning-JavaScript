//objects (type of structure)
var myDog = {
    "name": "Yoshi", //properties
    "color": "white",
    age: 2, //you can name the properties with/without quotes
    "eat today": true, //use quotes for properties with spaces...
    "if": "if" //or for properties with a name of a reserved word
};

//access via dot notation or brackets notation
console.log(myDog.name + " eats today: " + myDog["eat today"]);

//accessing properties from number values
var testObj = {
    12: "Doze",
    16: "Dezeseis",
    19: "Dezenove"
}
var num = 16;
console.log(testObj[num]);


//update obj properties
myDog.name = "Yuki";
myDog["eat today"] = false;
console.log(myDog.name + " eats today: " + myDog["eat today"]);

//add new propeties to an obj
myDog["size"] = "medium";
console.log(myDog.name + " is " + myDog.size);

//delete properties from obj
delete myDog.age;

console.log(myDog.age); //undefined
console.log(myDog.hasOwnProperty("age")); //false, does not have this property

//nested objs
var nestedObj = {
    property1: 1,
    property2: 2,
    arrayProperty: ['a', 'b', 'c'],
    nestedProperty: {
        nest1: 'red',
        nest2: 'green',
        nest3: 'blue'
    }
};

console.log(nestedObj.nestedProperty.nest1);

//array of objects
var mixedArrarObj = [
    {
        type: "flower",
        species: [
            "rose",
            "tulip"
        ]
    },
    { 
        type: "tree",
        species: [
            "oak",
            "pine"
        ]
    }
];

//acces oak: second element of array, first element of species property array
console.log(mixedArrarObj[1].species[0]);


//using const to declare an obj

const newObj = new Object();
//think of const declarations as "create a variable whose identity remains constant", 
//not "whose value remains constant" — or, "create IMMUTABLE BINDINGS", not "immutable values".

//const assures that variable won't have any other object's Binding.
//var anotherNewObj = new Object();
//newObj = anotherNewObj;          -> this is not allowed, since newObj is declared as const


//when assinging a variable to an existing obj, it does not create a copy of it,
//but points to the same obj, or share the same memory addres
var oneObj = new Object();
var otherObj = oneObj;


//freeze the properties of an obj (make then constant)

const MY_CONST_OBJ = {
    PI : 3.14
}

Object.freeze(MY_CONST_OBJ);