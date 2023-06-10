// Array methods

// 1. push () - add element to end of the array

// const numbers = [1,2,3];
// 4 to the array
// numbers.push(4)

// console.log(numbers)

// 2. pop () - remove Element from end of array
// const numbers2 = [1,2,3];
// console.log("old arr", numbers2)

// numbers2.pop()

// console.log("new arr", numbers2)
// console.log("popped el", lastElement)

// 3. shift () - delete/extract from start of the array

// const numbers2 = [1, 2, 3];

// console.log("old arr", numbers2);

// numbers2.shift();

// console.log("new arr", numbers2);

// 4. unshift() - add elements to start of array
// -- opp of push method

// const numbers2 = [1, 2, 3];

// console.log("old arr", numbers2);

// numbers2.unshift(0);

// console.log("new arr", numbers2);

// 5. splice(startIndex, deleteCount, item1?, items2?,...n items)
// -- it will modify the existing array

// const chars = ['a', 'b', 'c' ,'d'];

// 'e', 'f' ,'c' ,'d'

// console.log(numbers[2])

// chars.splice(0, 2 ,'e', 'f');

// [1, 6, 7, 8, 9, 2, 3, 4, 5, 6];

// console.log(chars);

// 1,2,3,4,5
// 1,2,3,4

// 6. slice (start, end) - extract elements from starting to ending index
// - doesn't modify the existing array
// -it returns new array

// const numbers = [1, 2, 3, 4, 5];
// deletedElements - [1, 2, 3]

// const allItemsRemoved = numbers.slice(0,3)

// console.log("numbers", numbers)
// console.log("deletedElements", allItemsRemoved)

// 7. concat() - combine elements of different arrays

// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

//1,2,3,4,5,6

// 4,5,6,1,2,3

// ... - spread operator

// const finalArrUsingConcat = numbers1.concat(numbers2);

// const finalArrUsingSpread = [...numbers2, ...numbers1];
// console.log(finalArrUsingConcat);

// 8. forEach(element, index, array) - runs a function for every element

// 3, 4, 5

// function addTwoToElement(el) {
//   return el + 2;
// }

// const numbers = [10, 2, 3, 6, 7, 11];
// 10, 2, 6

// const even = [];
// const odd = [];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// numbers.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log("even")
//     even.push(element);
//   } else {
//     console.log("odd")
//     odd.push(element);

//   }
// });

// console.log(even);
// console.log(odd);

// How to do searching in array

// 1. indexOf(item) - pass the item which u want o search for
// - find element - return index
// - not able to find element - return -1

// const names = ['john', 'mary', 'christine', 'angela']

// function checkIfStudentExistInClassOrNot(name){
//     console.log(names.indexOf(name))
//     if(names.indexOf(name) !== -1){
//         return 'found'
//     } else {
//         return 'not found'
//     }
// }

// const ifNameFoundOrNot = checkIfStudentExistInClassOrNot('xyz')

// console.log(ifNameFoundOrNot)

// 2. includes- returns true or false

// const names = ['john', 'mary', 'christine', 'angela', 'john']

// console.log(names.indexOf('john'))

// const ifNameFoundOrNot = names.includes('john wick')

// console.log(ifNameFoundOrNot)

// When to use what
// -- Use includes if you only wants to check if element is present or not
// -- Use indexOf if you only want to get the index of that particular item in the array

// 3. find
// -- Use find if you want to iterate through all the items
// -- Use includes if u only wants to check for the firstOccurence

// const names = ['john', 'mary', 'christine', 'angela', 'john']

// const allFoundItems = names.find(function (value){
//     if(value === 'john'){
//         console.log("john is present")
//     }
// })
// console.log(allFoundItems)

// 4. filter() - creates a new array containing all the elements which satisfies the condition

// const names = ["john", "mary", "christine", "angela", "john"];

// const allTheJohns = names.filter((ele) => ele === "john");

// console.log(allTheJohns)


// split & join

// split(separator, limit)

// const names = 'John - Marry - Alena';
// const allNames = names.split('-')

// console.log(allNames)


// const names  = ['John', 'Marry', 'Alena']

// const str = names.join(',')

// console.log(str)