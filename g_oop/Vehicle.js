// Create a class called Vehicle
class Vehicle {

    //a constructor is aclled when a new Instance of the class is created
    // "this" is a neyword
    constructor(make, model, year, distanceTraveled) {
        this.make = make;           // property
        this.model = model;         // property
        this.year = year;           // property
        this.distanceTraveled =  distanceTraveled = 0;  // property - Initialize distanceDriven to 0
    }

    // METHOD that is common to all vehicles is travel
    travel(distance) {
        this.distanceTraveled += distance; // accumulative add distance passed in to distanceTraveled
        console.log(`The ${this.make} ${this.model} traveled ${distance} kilometers.`);
    }

    // METHOD to get total distance traveled
    getTotalDistance() {
        return this.distanceTraveled;
    }
}
// let myTransport = new Vehicle("Toyota", "Raize", "2022");
// myTransport.travel(1000);
// myTransport.travel(150);

// console.log(`My ${myTransport.year} ${myTransport.make} ${myTransport.model} has traveled a total of ${myTransport.getTotalDistance()} kilometers.`);

// console.log('\n-----------------------------------');

// let myTransport2 = new Vehicle("Toyota", "Raize", "2022", 50);
// myTransport2.travel(100);
// myTransport2.travel(50);

// console.log(`My second transport has traveled a total of ${myTransport2.getTotalDistance()} kilometers.`);

// Class Vehicle is exported.
// Older CommonJS export syntax
// module.exports = Vehicle; 

export default Vehicle; // Modern ES6+ approach to export a JS file