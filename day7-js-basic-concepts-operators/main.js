// Single threaded & synchornous programming language

// - it can execute single task at a time

// 1. Variables

// - they're container which can store some information fr u

// var myName = "Amit";

// console.log("my name is", myName);

// let age = 25;
// const state = "Haryana";

// console.log("my age is", age);
// console.log("yrs of exp.", state);

// use const if val. is going to be constant

// - var variables are hoisted
// console.log(a);
// var a = 10;
// console.log(a)

// let/const are not hoisted
// console.log(a);
// const a = 10;

// Redeclaration of varibales

// 1. with var
// var myName = 'Amit'
// var myName = 'Amit'
// console.log(myName)

// 2. with let/const
// const myName = "Amit";
// const myName = 'Amit2';
// console.log(myName2)

// const myAge = 25

// myAge = 20;

// console.log(myName);

//Operators in JS

// 1. Arithmetic Operators

// Addtion(+), Mul(*), Division(/), Modulus(%), Increment(++), Decrement(--), Exponential(**)

// const num1 = 3;
// const num2 = 4;

// const result = num1 + num2;

// console.log(result)

// 2. Comparision operator

// - will compare the operands & return a boolean value(true/false)
// == (equality)
// === (strict equality)
// != (not equal to)
// !== (strictly not equal t0)
// > (greater than)
// < (less than)
// >= (greater than or equals to)
// <= (less than or equals to)

// Type coercision

// ===, !==

// const a = 20;
// const b = 15;

// const result = a >= b;
// console.log(result);

// 3. Assignment Operators

// =, +=, -=, ==, /=, *=, %=

// let num1 = 4;
// let num2 = 1;
// let num3 = 3;
// let num4 = 3;

// num1 += num2; (4+1, num1 =5)

// num2 %= num3; (1 % 3, num2 = 1)

// num4 -= num3; (3 - 3, num4 =0)

// num1 %= num4; (5 % 0, num1 = NaN)

// console.log(num1);

// 4. Logical Operators
// 1. OR ( || )
// 2. And ( && )
// 3. NOT ( ! )

// const isFit = false;
// const isAgeGreaterThan30 = true;

// if (!isFit && isAgeGreaterThan30) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Precedence
// BODMAS

// B - brackets ()
// of - **
// D - Division /
// Multipy  *
// A - Addition +
// S - Substraction -

// const result = 3 / (9 - 3 + 4 * 1) - 9 + 4 + (3 - 1 + 4);


// console.log(result);
