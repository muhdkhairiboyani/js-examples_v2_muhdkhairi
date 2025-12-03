
const person = { person: "John" };
console.log(person);

// b. Create Person object constructor function
function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

// instantiating new Person objects - This goes back to PROTOTYPE in function Person
const person1 = new Person("John", "Doe");
const person2 = new Person("Alice", "Smith");

console.log(person1);
console.log(person2);

// c. Add a new property to a Person constructor function
Person.prototype.gender = "Male";
Person.prototype.membership = "Basic";


// What is the outcome when I print out person1 and person2?
console.log(person1.gender);
console.log(person2.gender);

person2.membership = "Premium"; // overriding the membership property for person2

//  d. Create a method that returns full name of the person
Person.prototype.getFullName = function () {
    return `Member: ${this.firstName} ${this.lastName},`;
}

Person.prototype.getMembership = () => {
    return `Type: ${this.firstName} ${this.lastName},`;
}

console.log(person1.getFullName() + " " + person1.membership);
console.log(person2.getFullName() + " " + person2.membership);

function animal(limbs, species){
    this.limb = limbs;
    this.species = species;
}

const iguana = new animal(4, "Reptile");
console.log("Iguana Limbs:", iguana.limb, "Iguana species:", iguana.species);

console.log("\nCreate Class: A group of related objects");


