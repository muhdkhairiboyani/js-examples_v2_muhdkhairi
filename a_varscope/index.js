// 1. Primitive data type

let pi = 3.142; // a variable with a number of 3.142

console.log(pi);

let  strValue = "Hello"; // variable with a string of "Hello"
console.log(strValue);

let boolValue = true; // Variable storing a boolean of true
console.log(boolValue);

let nullValue = null; // Variable of null value
console.log(typeof nullValue);

let undefinedValue; // Variable that is declared but uninitialised
console.log(typeof undefinedValue);

// 2. Non-primitive types
let arr = ["a","b","c"]; // An array of 3 elements: starting index 0
console.log(arr);

let faang = new Array(); // Declare a new instance of a new Array called faang
faang[0] = "Facebook"; 
faang[1] = "Amazon";
faang[2] = "Google";

console.log(faang);
console.log(faang[0]);
console.log(faang[3]);

/* let person = {name: "Sam", age: "42"};
console.log("Name:", person.name);
console.log("Age:", person.age); */

let person = {name: "Sam", age: "42"};
console.log(`Name: ${person.name}`);
console.log("Age:", person.age);

let vehicle = new Object(); // Declaring a new INSTANCE of a n Object called vehicle
vehicle.name = "Suzuki"; // Giving the vehicle object a PROPERTY called "name" and assigning it a value "Suzuki"
vehicle.model = "Swift"; // Giving the vehicle object a PROPERTY called "model" and assigning it a value "Swift"
vehicle.color = "Blue"; // Giving the vehicle object a PROPERTY called "color" and assigning it a value "Blue"







function functionName(){

    // exe statement 1
    //exe statement 2

}