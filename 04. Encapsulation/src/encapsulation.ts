/*
  Encapsulation --- Access Modifiers (public, private, protected, static, readonly)

  # public hoile jekono jayga theke access o kora jaay, edit o kora jaay.
  # private hoile shudhu oi class er moddhe e access kora jaay, child o
    access korte pare na.
  # protected hoile nijer class er moddhe ar nijer child class er moddhe
    access kora jaay.
  # readonly dile shudhu dekha jaay, modify kora jaay na.

 */

class Person {
  readonly name: string;  // readonly deyar karone eta change kora jabe na //
  age: number;
  private email: string;

  constructor(name: string, age: number, email: string){
    this.name = name;
    this.age = age;
    this.email = email;
  }

  display() {
    console.log(`Email of ${this.name} is ${this.email}`);
  }
}

class Student extends Person {
  id: number;

  constructor(name: string, age: number, email: string, id: number){
    super(name, age, email);
    this.id = id;
  }
}

const person1 = new Person("Shafiq", 24, "shafiq@gmail.com");
console.log("Before changing", person1);

// person1.name = "Habib";
person1.age = 31;
console.log("After changing", person1);