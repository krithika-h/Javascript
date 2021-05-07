// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

class Person {
    name = 'max';

    constructor() {
        // super(); //no need super() since we are not extending from base class
        this.age = 30;
    }

    greet = function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    }

    // greet() {
    //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    // }
}

const p = new Person();
console.log(p)



// function Person() {
//     this.age = 20;
//     this.name = 'max';
//     this.greet = function() {
//         console.log(`Hi Im ${name} and my age is ${this.age}`);
//     };
// }

// function Person() {
//         this.age = 20;
//         this.name = 'max';
//     }

// Person.prototype.greet = function () {
//     console.log(`Hi Im ${name} and my age is ${this.age}`);
// }

// const person = new Person();
// console.log(person);
// console.log(person); //outputs : Person {age: 20, name: "max", greet: ƒ}
// person.greet();

