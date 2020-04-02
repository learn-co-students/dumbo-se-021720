function sayHi(name, greeting) {
  return `${greeting} ${name}`
}

// arrow fn
const sayHi = (name, greeting) => {
  return `${greeting} ${name}`
}

doubelAndAdd2()

// multi-line
const doubelAndAdd2 = (num1, num2) => {
  const newNum = num1 + num2
  return newNum * 2
}

// one-line
const sayHi = (name, greeting) => `${greeting} ${name}`

// multiple args

// one arg
const sayHi = name => `hi ${name}`

// useful for callbacks!
const arr = [1, 2, 3]

arr.map(function (num) {
  return num * 2
})

arr.map(num => num * 2)