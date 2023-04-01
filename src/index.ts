
abstract class Vehicle {
  make: string
  model: string
  year: number
  rented: boolean

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  // Accessor methods
  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  getRented(): boolean {
    return this.rented;
  }

  // Mutator method
  setRented(value: boolean): void {
    this.rented = value;
  }

  // Abstract method
  abstract rentalRate(): number;

  // Rent method
  rent() {
    if (this.rented) {
      console.log("Sorry, this vehicle is already rented.");
    } else {
      this.rented = true;
      console.log("Vehicle rented successfully.");
    }
  }

  // Return method
  return() {
    if (this.rented) {
      this.rented = false;
      console.log("Vehicle returned successfully.");
    } else {
      console.log("This vehicle is not currently rented.");
    }
  }
}

// Car subclass
class Car extends Vehicle {

  numDoors: number
  price: number
  constructor(make: string, model: string, year: number, numDoors: number) {
    super(make, model, year);
    this.numDoors = numDoors;
    this.price = 1000
  }


  // Additional method
  isElectric() {
    // Some logic to determine if the car is electric
  }

  // Implementation of abstract method
  rentalRate() {
    return this.price
  }
}

// Truck subclass
class Truck extends Vehicle {
  numWheels: number
  price: number
  constructor(make: string, model: string, year: number, numWheels: number,) {
    super(make, model, year);
    this.numWheels = numWheels;
    this.price = 1200
  }

  isFourWheelDrive() {
  }

  rentalRate() {
    return this.price
  }
}

// Motorcycle subclass
class Motorcycle extends Vehicle {
  numWheels: number
  price: number
  constructor(make: string, model: string, year: number, numWheels: number,) {
    super(make, model, year);
    this.numWheels = numWheels;
    this.price = 500
  }

  // Additional method
  isSportBike() {
    // Some logic to determine if the motorcycle is a sport bike
  }

  // Implementation of abstract method
  rentalRate() {
    return this.price
  }
}

// Example usage
const myCar = new Car("Toyota", "Camry", 2020, 4);
myCar.rent();
myCar.return();
console.log(myCar.rentalRate())

const myTruck = new Truck("Ford", "F-150", 2019, 4);
myTruck.rent();
myTruck.return();
console.log(myTruck.rentalRate())



const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2022, 2);
myMotorcycle.rent();
myMotorcycle.return();
console.log(myMotorcycle.rentalRate())

