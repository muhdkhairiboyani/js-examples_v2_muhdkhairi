// IMPORT the Vehicle class from Vehicle.js
// const Vehicle = require("./Vehicle.js"); 

// Modern ES6+ import syntax
import Vehicle from "./Vehicle.js"; 


//  Create a child class called Car from a Parent class called Vehicle class
class Car extends Vehicle { // <-- INHERITANCE: Using 'extends' establishes the inheritance relationship

    constructor(make, model, year) {
        super(make, model, year);        // super (keyword)  - refers to the parent class (Vehicle) and is used to call its constructor
        this.airbag = true;  // It has its own properties Unique to cars  
    }

    // Static Method unique to Car class
    static welcomeStatement(msg) {
        console.log(msg);
    }

    // Polymorphism: Overriding the travel method from Vehicle class
    // Specialized the Parent method for Car class
    drive(distance) {
        super.travel(distance); // Reuses the encapsulated method travel from parent (Vehicle).
        console.log(`Driving is complete. Airbag status: ${this.airbag ? 'Safety Checked Passed' : 'Airbag Absent'}`);
    }

    // checkSafetyFeatures method unique to Car class
    checkSafetyFeatures() {
        return this.airbag ? 'All safety features are intact.' : 'Safety features missing!';
    }

    // IMPLICIT INHERITANCE METHODS inherited here in Car Class?
    // - travel ()
    // - getTotalDistance () - Abstraction from Vehicle class ({Parent Class Method)})
    // - distanceTraveled - Encapsulation from Vehicle class (Parent Class Property)

}

// Static Method call without instantiating the Car class
Car.welcomeStatement("\n------------------\nWelcome Car Owner.\n------------------\n");

// Instansiate a new instance of a Car called nyNewCar
const myNewCar = new Car("Honda", "Civic", 2024);
myNewCar.drive(200); // Calls the Car's specialized drive() method
console.log(`Does my new car have safety features? ${myNewCar.checkSafetyFeatures()}`);
console.log(`Total distance traveled by my car: ${myNewCar.getTotalDistance()} kilometers.`);

// Important line that exports the Car class so it can be used in other files.
// module.exports = Car; 

export default Car; // Modern ES6+ approach to export a JS file
