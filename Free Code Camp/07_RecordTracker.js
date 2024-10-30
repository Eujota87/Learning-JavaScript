//coding challenge
//we have a collection which is a group of records

var collection = {
    //each record is a property (id)
    "2548" : {
        "album": "Sliperry When Wet",
        "artist": "Bon Jovi",
        "Tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439" : {
        "album": "ABBA Gold"
    }
}

//keep a copy of the collection for tests
//JSON.stringify converts value into JSON (JavaScript Object Notation)
//JSON.parse converts a JSON to a JavaScript Obj
var collectionCopy = JSON.parse(JSON.stringify(collection));

console.log("Collection before change:");
console.log(JSON.stringify(collection));

var myId = "5439";
var myProp = "artist";
var myValue = "ABBA";

//if value is empty, delete property
//if property is tracks, push a new element
//else, udpates thg value of the property
function updateRecords(id, prop, value) {

    if(value === "") {
    
        delete collection[id][prop];
    } else if(prop === "tracks") {
        //this assign the value of itself if the array already exists...
        //or create an empty array
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else collection[id][prop] = value;

    return collection;
}

console.log("Collection after change:");
console.log(JSON.stringify(updateRecords(myId, myProp, myValue)));
