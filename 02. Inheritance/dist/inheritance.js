"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
    }
    greet() {
        console.log("Hi everyone");
    }
}
class Teacher extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    intro() {
        console.log(`Hi, I am ${this.name} and I teach ${this.subject}`);
    }
}
const teacher1 = new Teacher("Usman", 42, "Physics");
console.log(teacher1);
teacher1.intro();
teacher1.greet();
// console.log(teacher1 instanceof Teacher);
// console.log(teacher1 instanceof Person);
//# sourceMappingURL=inheritance.js.map