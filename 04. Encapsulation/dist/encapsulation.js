"use strict";
/*
  Encapsulation --- Access Modifiers (public, private, protected, static, readonly)

  # public hoile jekono jayga theke access o kora jaay, edit o kora jaay
  # private hoile shudhu oi class er moddhe e access kora jaay, child o
    access korte pare na
  # readonly dile shudhu dekha jaay, modify kora jaay na

 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name; // readonly deyar karone eta change kora jabe na //
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    display() {
        console.log(`Email of ${this.name} is ${this.email}`);
    }
}
class Student extends Person {
    id;
    constructor(name, age, email, id) {
        super(name, age, email);
        this.id = id;
    }
}
const person1 = new Person("Shafiq", 24, "shafiq@gmail.com");
console.log("Before changing", person1);
// person1.name = "Habib";
person1.age = 31;
console.log("After changing", person1);
//# sourceMappingURL=encapsulation.js.map