// 1. 'this' in JS

// - this references the object that is currently calling the function
// - the object it refers to will depend on how & where it's used

// 1. Global Context

// - In global context 'this' refers to the window object

// this.color = 'red'

// console.log("window", window)

// console.log(this === window)

// 2. Function context
//   1. 'use strict' - this would be undefined inside a function
//   2. 'normal' - this would still refer window object

// A. Normal function invocation
// function sayHello(greeting){
//     console.log(this)
// }

// sayHello("Hi")

// B. Method Invocation

// - JS will set 'this' to the method where it's called
// - If we want to change the context of 'this', we can use bind

// let counter1 = {
//   count: 0,
//   increaseCount: function () {
//     return ++this.count;
//   },
// };

// let counter2 = {
//   count: 10,
//   name: "counter 2"
// };

// const invocation1 = counter1.increaseCount();
// const invocation2 = counter1.increaseCount.bind(counter2);

// console.log(invocation1);
// console.log(invocation2());

// 3. Constructor Invocation

// function Car(nameOfCar, builtYear) {
//   this.name = nameOfCar;
//   this.year = builtYear;
// }

// Car.prototype.getCarName = function () {
//   return `The car ${this.name} was built in year ${this.year}`;
// };

// const myCar1 = new Car("BMW", "2019");
// const myCar2 = new Car("Ferrari", "2010");
// const myCar3 = new Car("Alto", "2015");

// console.log(myCar1.getCarName());
// console.log(myCar2.getCarName());
// console.log(myCar3.getCarName());

// 4. Indirect Invocation

// Call
// Apply
// Bind

// A. Call
// function printName() {
//   console.log(`The person ${this.name}, who is ${this.age}`);
// }

// let person1 = {
//   name: "John",
//   age: "18",
// };
// let person2 = {
//   name: "Angela",
//   age: "21",
// };

// printName.call(person1);
// printName.call(person2, "CANADA", "Rocket Sceintist");

// B.Apply;

// function printName(country, job) {
//   console.log(country);
//   console.log(job);
//   console.log(`The person ${this.name}, who is ${this.age}`);
// }

// let person1 = {
//   name: "John",
//   age: "18",
// };
// let person2 = {
//   name: "Angela",
//   age: "21",
// };

// printName.apply(person1, ["USA", "IT_PROFESSIONAL"]);
// printName.apply(person2, ["USA", "ROCKET_SCIENTIST"]);

// C. Bind

// - Bind returns us a new function

// function printName(country, job) {
//   console.log(`The person ${this.name}, who is ${this.age}`);
// }

// let person1 = {
//   name: "John",
//   age: "18",
// };

// const pp1 = printName.bind(person1);

// pp1()

// Classes in JS

// Before ES6- there were no classes present in JS

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// const john = new Person("John");

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const john = new Person("John");

// const arrOfNames = ['hi'];

// console.log(typeof arrOfNames)

// 5. Dates in JS

// const currDate = new Date();
// const date = currDate.getDate();
// const year = currDate.getFullYear();
// const currMonth = currDate.getMonth() + 1;

// console.log(`Today is ${date}/${currMonth}/${year}`);
