class ControlledForm {
  constructor(formElement) {
    this.form = formElement

    this.form.addEventListener("submit", this.handleSubmit)

    // keep track of the current state of the form
    this.data = {}

    // get initial data
    this.getFormData()

    // add input event handler (event delegation)
    this.form.addEventListener("input", this.handleInput)

  }

  getFormData() {
    // loop through the form elements
    for (let input of this.form.elements) {
      // set up initial data from form
      if (input.type !== "submit") {
        if (input.type === "number") {
          this.data[input.name] = parseInt(input.value)
        } else {
          this.data[input.name] = input.value
        }
      }
    }
  }

  handleInput = e => {
    this.data[e.target.name] = e.target.value

    if (typeof this.onInput === "function") {
      this.onInput(this.data)
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    // get form data
    this.getFormData()

    if (typeof this.onSubmit === "function") {
      this.onSubmit(this.data)
    }
  }

}