// panggunaan prototype
function elGato(identity, age) {
  this.identity = identity;
  this.age = age;
}

elGato.prototype.eat = function () {
  console.log(`the ${this.identity} eat`);
};

// Object person
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

person1.eat();
person2.eat();

// ES6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Membuat instance dari Person
const person4 = new Person("Alice", 30);
const person5 = new Person("Bob", 25);

console.log(person4.name); // Output: Alice
console.log(person5.name); // Output: Bob

person4.eat(); // Output: Alice is eating
person5.eat(); // Output: Bob is eating
