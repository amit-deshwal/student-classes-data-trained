// Event Listeners,

// 1. Bubbling - going from inner element to outer most element
// 2. Capturing - coming from top to bottom

// const grandparent = document.querySelector("#grandparent");
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");

// grandparent.addEventListener("click", function () {
//   console.log("Grandparent");
// });

// parent.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("Parent");
// });

// child.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("Child");
// });

// 1. Memory Allocation
// name - undefined
// 2. Code Execution

// console.log(name);

// var name = "Amit";

// function sum(a, b) {
//   const result = a + b;
//   return result;
// }

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(2, 5));
