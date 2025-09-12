"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    model;
    color;
    regNumber;
    constructor(model, color, regNumber) {
        this.model = model;
        this.color = color;
        this.regNumber = regNumber;
    }
    drive() {
        console.log(this.model, "car is driving");
    }
}
// creating object / instance //
const car1 = new Car("Toyta", "Red", 223301);
console.log(car1);
console.table(car1);
console.log(car1 instanceof Car); // check kore je car1 instance kina Car class er //
car1.drive();
// Example without constructor //
class Person {
    name = "";
    age = 0;
    introduction() {
        console.log(`Hi, I'm ${this.name} and my age is ${this.age}`);
    }
}
const person1 = new Person();
person1.name = "Sayem";
person1.age = 24;
console.log(person1);
//# sourceMappingURL=classesAndObjects.js.map