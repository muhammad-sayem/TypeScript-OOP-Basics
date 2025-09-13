"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    age;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} sounds: Woof!!`);
    }
}
class Cat extends Animal {
    color;
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    makeSound() {
        console.log(`${this.name} sounds: Meow!!`);
    }
}
const dog1 = new Dog("Tommy", 2);
const cat1 = new Cat("Mimi", "Brown");
dog1.move();
cat1.move();
console.log(dog1.age);
console.log(cat1.color);
//# sourceMappingURL=abstraction.js.map