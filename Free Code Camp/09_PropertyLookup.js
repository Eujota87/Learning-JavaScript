//code challenge

//array of objects
var contacts = [
    {
        firstName : "Samuel",
        lastName : "Azeredo",
        number : "039349320",
        likes : ["Batata", "Arroz", "Feijao"]
    },
    {
        firstName : "Amara",
        lastName : "Shibuya",
        number : "043905804",
        likes : ["Carro", "Moto"]
    },
    {
        firstName : "Ricardo",
        lastName : "Rocha",
        number : "343298743",
        likes : ["Amarelo", "Azul"]
    },
    {
        firstName : "Pedro",
        lastName : "Oliveira",
        number : "324928783",
    },
]

//pass a name and a property, returns the value of the property
//tells if the property is empty or no name is found
function lookUpProfile(name, prop) {
    for(var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            //use first value if exists, or use the second one
            return contacts[i][prop] || "No such property";
        } 
    }
    return "No such contact";
}

console.log(lookUpProfile("Pedro", "lastName"));