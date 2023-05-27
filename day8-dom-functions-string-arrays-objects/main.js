// DOM Manipulation
//  - Add Elements
//  - Remove Elements
//  - Get attributes
//  - Data attributes
//  - Classes
//  - stlye using js

// DOM - Document Object Model

// const body = document.body;
// const myHeading = document.createElement("h2");
// myHeading.innerText = "hi from h2";
// body.append(myHeading);

// const heading = document.querySelector("h1");
// console.log(heading);
// const heading = document.getElementById("heading")
// const heading = document.getElementsByClassName("myHeading")

// heading.setAttribute("id", "heading");
// console.log(heading.getAttribute("title"));
// heading.removeAttribute("title");
// heading.removeAttribute("class");
// heading.removeAttribute("id");

// const myHeading = document.querySelector("#main-heading");

// console.log(myHeading.dataset.myattribute);

// Functions, Strings, Objects, Arrays

// function sum(a, b, c) {
//   console.log("a is", a);
//   console.log("b is", b);
//   console.log("c is", c);
//   const result = a + b + c;
//   console.log("sum is:", result);
// }

// function checkIfEmailIsValidOrNot(email){
//     const patternToMatchEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     return patternToMatchEmail.test(email)
// }

// const isEmailValid = checkIfEmailIsValidOrNot('test@gmail.com')

// console.log(isEmailValid)

// const myName = 'Amit'
// const lowerCaseName = myName.toLocaleLowerCase();
// const upperCaseName = myName.toUpperCase();

// console.log(upperCaseName)

// Objects

const car = {
  color: "Red",
  yearOfManufacture: 2019,
  engineType: "Robust",
};

// console.log(car)

// Array (special objects)

const shoppingCart = ["mangoes", "chips", "cold_drinks", "candies"];

// console.log("Array length", shoppingCart.length)

// shoppingCart.forEach(item => {
//     console.log(item)
// })

// function checkItemInCart(item) {
//   const idx = shoppingCart.indexOf(item);

//   if (idx === -1) {
//     console.log("item not present");
//   } else {
//     console.log("item is present");
//   }
// }

// checkItemInCart('coffee')

// console.log(shoppingCart.indexOf("chocolates"));

// console.log(shoppingCart)
