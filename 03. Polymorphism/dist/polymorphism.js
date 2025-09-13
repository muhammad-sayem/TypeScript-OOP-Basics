"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving in some way`);
    }
}
class Dog extends Animal {
    color;
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    display() {
        console.log(`The color of the dog is ${this.color}`);
    }
    move() {
        console.log(`${this.name} runs on 4 legs`);
    }
}
class Cat extends Animal {
    age;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    display() {
        console.log(`The age of the cat is ${this.age}`);
    }
    move() {
        console.log(`${this.name} walks gracefully`);
    }
}
const animal1 = new Animal("Random Animal");
const dog1 = new Dog("Tommy", "Brown");
const cat1 = new Cat("Mini", 3);
animal1.move();
dog1.move();
cat1.move();
dog1.display();
cat1.display();
//# sourceMappingURL=polymorphism.js.map