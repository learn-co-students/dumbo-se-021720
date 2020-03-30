// /******* 1st Class Functions *******/
// 1. functions can be assigned to a variable
function sayHi() {
  console.log(`hi`)
  return 10
}

// let a = sayHi // function definition 
// let b = sayHi() // function invocation

// console.log(a)
// console.log(b)

// 2. functions can be passed around as arguments to other functions
function fnCaller(callback) {
  callback()
}

// fnCaller(sayHi)

function calculateFinalPrice(taxCalculatorFn, amount) {
  const taxes = taxCalculatorFn(amount)

  return taxes + amount
}

function calculateNySalesTax(amount) {
  return amount * 0.08875
}

function calculateNjSalesTax(amount) {
  return amount * 0.07
}

function calculateNyIncomeTax(amount) {
  // 1000 lines of computation
  return newAmount
}

const arr = [1, 2, 3]

// named function
// arr.forEach(doubler)

// // anonyous, inline callback function
// arr.forEach(function (num) {
//   console.log(num)
// })

// .map, .filter (select), .find

function doubler(element) {
  console.log(element * 2)
}

function tripler(element, index, originalArray) {
  console.log("element:", element)
  console.log("index:", index)
  console.log("originalArray:", originalArray)
}

function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

// myEach(arr, doubler)

// 3. functions can be returned from functions
// Higher Order Function
function multiplyByX(x) {

  console.log("x is:", x)

  return function (num) {
    return num * x
  }
}

const multiplyBy2 = multiplyByX(2)
const multiplyBy3 = multiplyByX(3)





// /******* Lexical Scoping *******/
// global scope
let name = "Annie"

function sayHi() {
  // function scope
  // let name = "Jack"
  console.log(`hi ${name}`)

  if (true) {
    // block scope
    let tea = "ginger"
    console.log(`in if statement ${name}`)
  }

  function innerFn() {
    let ian = "Ian"
    console.log("in inner fn", name, ian)
  }
  innerFn()

  // console.log(tea)
}

// console.log("Before sayHi:", name)
// sayHi()
// console.log("After sayHi:", name)

// /******* global vs function vs block scope *******/

// /******* scope in nested functions *******/

// /******* var, let, const, function, (global) *******/
// const dinner = "soon"
// console.log(dinner)

var somethingObvious = "does ian remember how this works"

// function alsoSayHi() {
//   console.log("whatever")
// }

// use let if you want to resassigne the variable to a new value
// use const if not

// recordLecture()

// function recordLecture() {
//   console.log("I remembered!")
// }


// /******* Hoisting *******/
// const sayHi = function () {
//   console.log("whatever")
// }