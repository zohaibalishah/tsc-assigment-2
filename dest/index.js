"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    // Accessor methods
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getRented() {
        return this.rented;
    }
    // Mutator method
    setRented(value) {
        this.rented = value;
    }
    // Rent method
    rent() {
        if (this.rented) {
            console.log("Sorry, this vehicle is already rented.");
        }
        else {
            this.rented = true;
            console.log("Vehicle rented successfully.");
        }
    }
    // Return method
    return() {
        if (this.rented) {
            this.rented = false;
            console.log("Vehicle returned successfully.");
        }
        else {
            console.log("This vehicle is not currently rented.");
        }
    }
}
// Car subclass
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
        this.price = 1000;
    }
    // Additional method
    isElectric() {
        // Some logic to determine if the car is electric
    }
    // Implementation of abstract method
    rentalRate() {
        return this.price;
    }
}
// Truck subclass
class Truck extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = numWheels;
        this.price = 1200;
    }
    isFourWheelDrive() {
    }
    rentalRate() {
        return this.price;
    }
}
// Motorcycle subclass
class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = numWheels;
        this.price = 500;
    }
    // Additional method
    isSportBike() {
        // Some logic to determine if the motorcycle is a sport bike
    }
    // Implementation of abstract method
    rentalRate() {
        return this.price;
    }
}
// Example usage
const myCar = new Car("Toyota", "Camry", 2020, 4);
myCar.rent();
myCar.return();
console.log(myCar.rentalRate());
const myTruck = new Truck("Ford", "F-150", 2019, 4);
myTruck.rent();
myTruck.return();
console.log(myTruck.rentalRate());
const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2022, 2);
myMotorcycle.rent();
myMotorcycle.return();
console.log(myMotorcycle.rentalRate());
