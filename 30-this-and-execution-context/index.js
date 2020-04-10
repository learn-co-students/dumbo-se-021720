// console.log("Global context", this)

function whatsThis() {
  // execution context
  console.log("THIS IS:", this)
}

function speak(greeting, moreArgs) {
  console.log(`${greeting} my name is ${this.firstName}`)
}

const b = "yes"

function sayFavSnacks() {
  const a = "hi"
  // execution context
  // 1. determine what `this` is
  // 2. find any local variables defined in that fn
  // 3. determine what other variables it access to higher in scope
  console.log(b)

  // console.log("OUTSIDE forEach, this:", this)

  this.favSnacks.forEach((snack) => {
    // console.log("INSIDE forEach, this:", this)
    console.log(`${this.firstName} likes ${snack}`)
  })
}

const someArrow = () => console.log(this)

// objects as way to encapsulate data + behavior
// POJO -> Plain Ol Javascript Object
// const dog = {
//   firstName: 'fezzik',
//   favSnacks: ['peanut butter', 'soccer balls'],
//   speak: speak,
//   sayFavSnacks: sayFavSnacks,
//   dogThis: this,
//   dogNoArrow: function () {
//     console.log(this)
//   },
//   dogArrow: () => console.log(this),
//   dogNoArrowBind: function () {
//     console.log(this)
//   }.bind(this)
// }

// const dog2 = {
//   name: 'jubilee',
//   favSnacks: ['carrots', 'french fries'],
//   speak: speak,
//   sayFavSnacks: sayFavSnacks
// }

// dog.whatsThis() -> this will be the dog
// whatsThis() -> this will be the global (window)

// Prehistoric OOJS
// factory function
function createDog(firstName, favSnacks) {

  return {
    firstName: firstName,
    favSnacks: favSnacks,
    speak: speak,
    sayFavSnacks: sayFavSnacks
  }
}
// const dog = createDog("fezzik", ['peanut butter', 'soccer balls'])
// const dog2 = createDog("jubilee", ['carrots', 'french fries'])

// Bronze age OOJS
// constructor function
// function Dog(firstName, favSnacks) {
//   // create a new object an assign that object to `this`
//   this.firstName = firstName
//   this.favSnacks = favSnacks
//   this.speak = speak
//   this.sayFavSnacks = sayFavSnacks
//   // return the new object
// }


// Modern OOJS
class Dog {
  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks

    // methods
    // this.speak = function speak(greeting) {
    //   console.log(`${greeting} my name is ${this.firstName}`)
    // }
    // this.sayFavSnacks = sayFavSnacks
  }

  // instance method
  speak() {
    console.log(`woof my name is ${this.firstName}`)
  }
}

const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("jubilee", ['carrots', 'french fries'])

