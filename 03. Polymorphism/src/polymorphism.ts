class Animal {
  name: string;

  constructor(name: string) {
    this.name = name
  }

  move() {
    console.log(`${this.name} is moving in some way`);
  }
}

class Dog extends Animal {
  color: string;

  constructor(name: string, color: string){
    super(name);
    this.color = color;
  }

  display(){
    console.log(`The color of the dog is ${this.color}`);
  }

  move() {
    console.log(`${this.name} runs on 4 legs`);
  }
}

class Cat extends Animal {
  age: number;

  constructor(name: string, age: number){
    super(name);
    this.age = age;
  }

  display(){
    console.log(`The age of the cat is ${this.age}`);
  }

  move() {
    console.log(`${this.name} walks gracefully`);
  }
}

const animal1 = new Animal("Random Animal")
const dog1 = new Dog("Tommy", "Brown")
const cat1 = new Cat("Mini", 3);

animal1.move();
dog1.move();
cat1.move();

dog1.display();
cat1.display();