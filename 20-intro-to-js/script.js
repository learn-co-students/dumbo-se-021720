function assert(description, test) {
  const ul = document.querySelector("#tests")
  const li = document.createElement("li")
  li.textContent = description
  li.className = test ? "pass" : "fail"
  ul.append(li)
}

assert("Javascript does basic math", 2 + 2 == 4)
let a
assert("Variables that are declared but not assigned return undefined", a === undefined)
assert("Undefined and null are falsey", !!undefined === false && !!null === false)
let cat = "Nicky"
assert("JS string interpolation uses backticks", `${cat} says meow` === "Nicky says meow")



// save for afternoon: how can we filter an array based on object properties that are passed via variable?