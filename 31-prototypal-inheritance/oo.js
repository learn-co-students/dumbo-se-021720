// // Bronze Age OOJS
// function Dog(firstName, favSnacks) {
//   this.firstName = firstName
//   this.favSnacks = favSnacks
//   // this.__proto__ = Dog.prototype
// }

// Dog.prototype.speak = function speak() {
//   console.log(`hi my name is ${this.firstName}`)
// }

class Dog {

  // class variable
  static all = []

  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks
    Dog.all.push(this)
  }

  // instance methods
  speak() {
    console.log(`hi my name is ${this.firstName}`)
  }

  speakAndDoATrick() {
    this.speak()
    console.log("roll over")
  }

  // class methods
  static findByName(name) {
    return Dog.all.find(dog => dog.firstName === name)
  }
}


const dog1 = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("jubilee", ['carrots', 'french fries'])