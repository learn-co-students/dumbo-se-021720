React Best Practices
===

## SWBAT

- [ ] Write cleaner React code

## Question Concerns?
- accessing `key` prop, passing up objects thru callbacks
- functional setState: `this.setState(prevState => { return { state stuff: state’s stuff } }) `

- class components vs functional

- Class Component: if you need state of lifecycle methods 
- Functional component: all other cases


```js
// object notation
// this.state.count === 2
this.setState({ 
  count: this.state.count + 1
})
if (something) {
  this.setState({ 
    count: this.state.count + 1
  })
}
// this.state.count === 3

// this.state.count === 2
// callback - preferred for update state based on previous state
this.setState(prevState => ({ count: prevState.count + 1 }))


if (something) {
  this.setState(prevState => {
    return {
      count: prevState.count + 1
    }
  })
}
// this.state.count === 4

```

## Component Reusability
```js
<Button displayText={this.state.count} handleClick={updaterFn}>

<Button displayText={this.state.emoji} handleClick={setNewEmoji}>

const Button = ({ displayText, handleClick }) => {
  return <button onClick={handleClick}>{displayText}</button>
}
```

## Objectives

- Opinions
  - [ ] Code Organization/file structure 
  - [ ] Presentational vs Container components

- Optimizations:
  - [ ] Functional vs Class Components 
  - [ ] Fragments

- Best Practices:
  - [ ] callback for setState
  - [ ] Callbacks (avoid useless wrapping)
  - [ ] Functional setState

- JS tricks/bugs often seen in React:
  - [ ] Arrow functions returning objects () => ({ })

```js
const arrow = () => {
  return {
    someKey: "value"
  }
}

const arrowImplictReturn = () => ({
  someKey: "value"
})
```

  - [ ] Destructuring  ====> let { likes, name } = this.props
```js
// { name: "some name", handleClick: () => {} }

const Component = (props) => {
  const { name, handleClick } = props

  return (
    <div onClick={handleClick}>{name}</div>
  )
} 

const Component = ({ name, handleClick }) => {

  return (
    <div onClick={handleClick}>{name}</div>
  )
} 
```

  - [ ] Spread (w/ prepend and append) this.setState({ messages: [...this.state.messages, 'newmessage']})
  - [ ] Objects with the same key/value name ===> let myPerson = {firstName, lastName}
  - [ ] constructor vs. ES7 instance variables ===> ie state = {}
  - [ ] dynamic keys ==>  { [variable]: "as_key" } 

- Topics for later... look ahead on your own if you're curious
    - [ ] Hooks 
    - [ ] Redux
    - [ ] HOCs (maybe)

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)
[Hooks](https://reactjs.org/docs/hooks-intro.html)