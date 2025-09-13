/*
  Abstraction

  # Abstract method er moddhe logic lekha hoy na, shudhu function create 
    kora hoy "abstraction" keyword diye and etar class must
    abstract class hote hoy

  # Abstract class er moddhe je abstract method ta create kora hoy sei class
    er joto children class create kora hobe prottek taar moddhe oi 
    abstract class er abstract method ta must use korte hobe
*/

abstract class Animal {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  abstract makeSound(): void;

  move(){
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  age: number;

  constructor(name: string, age: number){
    super(name);
    this.age = age;
  }

  makeSound(): void {
      console.log(`${this.name} sounds: Woof!!`);
  }
}

class Cat extends Animal {
  color: string;

  constructor(name: string, color: string){
    super(name);
    this.color = color
  }

  makeSound(): void {
      console.log(`${this.name} sounds: Meow!!`);
  }
}

const dog1 = new Dog("Tommy", 2);
const cat1 = new Cat("Mimi", "Brown");

dog1.move();
cat1.move();
console.log(dog1.age);
console.log(cat1.color);