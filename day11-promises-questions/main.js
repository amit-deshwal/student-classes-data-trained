// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');

// Sysnchronous - async operations - Microtask queues - Macrotask queues

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(data => {
//   console.log(data);
// })

// console.log('end');

// start end 1 2

// start 1 end 2

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// start 1 3 end 2

// start 1 end 2 3

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');

// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

// start middle 1 success end ///1
// start success 1 middle end ///2
// start 1 middle success end ///3
// start middle 1 end success ///4

// Sysnchronous -> async operations ->
// -> Microtask queues(promises,async/await)
// -> Macrotask queues(setTimeout, setInterval)

// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')

// start end setTimeout resolve //1
// start end resolve setTimeout //2
// start setTimeout resolve end //3
// start resolve end setTimeout //4

// Sysnchronous -> async operations ->
// -> Microtask queues(promises,async/await)
// -> Macrotask queues(setTimeout, setInterval)

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// 4 1 2 timerStart timerEnd success
// 1 2 4 timerStart success timerEnd
// 4 1 2 timerStart success timerEnd

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

//  1 2 3
//  1 3 2

// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

// Macrotask -  timer1, timer2

// timer1 promise1 timer2
// timer2 promise1 timer1
// promise1 timer1 timer2