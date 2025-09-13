class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age
  }

  intro(){
    console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
  }

  greet(){
    console.log("Hi, I'm from parent class");
  }
}

class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string){
    super(name, age)
    this.subject = subject
  }

  intro(){
    console.log(`Hi, I am ${this.name} and I teach ${this.subject}`);
  }

  display() {
    console.log("Hi, I'm from child class");
  }
}

const teacher1 = new Teacher("Usman", 42, "Physics");
console.log(teacher1);
teacher1.intro();   // Teacher (child) er intro function call hobe 
teacher1.greet();

// console.log(teacher1 instanceof Teacher);    // True
// console.log(teacher1 instanceof Person);     // True

const person1 = new Person("Habib", 38);
person1.intro();  // Person (parent) er intro call hobe 