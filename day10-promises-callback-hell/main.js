// 1. Aschyronous JS
// 2. Schyronous JS
// 3. Callback Hell
// 4. Promises

// 1. Aschyronous JS
// 2. Schyronous JS

// console.log("1");

// // setTimeout(function () {
// //   console.log("2");
// // }, 6000);

// setTimeout(function () {
//   console.log("2");
// }, 3 * 1000);

// console.log("3");

// console.log("4");

// 1,2,3,4
// 1,3,4,2

// 3. Callback Hell

// Buy a stock

// Tata motors - 110/stock

// 100 rs - 10/qty

// Buy button

// 1. If your current balance is enough (1000Rs)
// 2. If seller is there for 10 qty with 100rs
// 3. Buy the stock & update the current balance

// const stocksToBuy = [
//   { stockName: "TATA_MOTORS", QTY: "10", PRICE: "100" },
// ];
// const accountBalance = 2000;

// function checkCurrentBalance() {
//   function checkForSellerPresentOrNot() {
//     function buyAndUpdateAccountBalance(funct) {}
//   }
// }
// resons too many callbacks is not good - maintainibility, handle erros, bulky code, dependency

// 4. PROMISES

const stockToBuy = [{ stockName: "TATA_MOTORS", QTY: "10", PRICE: "100" }];
let accountBalance = 2000;
const seller = {
  stockName: "TATA_MOTORS",
  TOTAL_QTY: "20",
  QTY_TO_SELL: "5",
  PRICE: "100",
};
let marketClosed = false;

// 1. If your current balance is enough (1000Rs)
// 2. If seller is there for 10 qty with 100rs
// 3. Buy the stock & update the current balance

const stockPromise = new Promise(function (resolve, reject) {
  const totalAmountNeededToBuyStock = stockToBuy[0].QTY * stockToBuy[0].PRICE; //1000
  if (marketClosed) {
    const err = new Error("market closed");
    reject(err);
    return;
  }
  if (accountBalance >= totalAmountNeededToBuyStock) {
    console.log("enough balance");
    if (
      seller.QTY_TO_SELL === stockToBuy[0].QTY &&
      seller.PRICE === stockToBuy[0].PRICE
    ) {
      console.log("2nd conditon matched");
      console.log("Buy stock");
      accountBalance = accountBalance - totalAmountNeededToBuyStock;
      console.log("new updated balance is", accountBalance);
      resolve("Stock bought successfully");
    } else {
      const err = new Error("seller doesn't agrees");
      reject(err);
    }
  } else {
    const err = new Error("not enough balance");
    reject(err);
  }
});

// stockPromise
//   .then(function (promiseResult) {
//     console.log(promiseResult);
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

async function buyStock() {
  try {
    const result = await stockPromise;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

buyStock();

// Resolve -  if promise is fulfilled
// Reject - if promise is not fulfiled

// States of Promise,
// 1. PENDING
// 2. FULFILLED

// const user = fetch("https://jsonplaceholder.typicode.com/todos/1");

// {user: undefined}
// {user: PENDING}
// {user: FULFILLED}
// user.then((response) => response.json()).then((json) => console.log(json));
