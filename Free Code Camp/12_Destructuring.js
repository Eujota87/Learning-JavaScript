//destructuring assignment
//assign the values of multiple properties from an object into multiple variables

let voxel = {x: 3.6, y: 4.5, z: 9.4};

//instead of doing:

// let a = voxel.x;
// let b = voxel.y;
// let c = voxel.z;

//do:

const {x : a, y : b, z : c} = voxel;

//using destructuring with nested objects

const nestedObj = {
    today: {min: 54, max: 43},
    tomorrow: {min: 31, max: 56}
}

const {tomorrow: {max: maxOfTomorrow}, today : {min: minOfToday}} = nestedObj;

