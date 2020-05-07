Redux
===

## SWBATs

### Part 1.1: Message Passing
- [x] Explain the pattern / technique of message passing
- [x] Refactor a component's behavior to use message passing 

### Part 1.2: Redux
- [x] Install the redux library so it can be used in a project.
- [x] Create a `store` in redux with some default `state`.
- [x] Create a `reducer` to change `state` based on an `action.type`.
- [x] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [x] Read `state` in the `store`.

### Part 2: React Redux
- [ ] Install the `react-redux` library so it can be used in a project.
- [ ] Make the `store` available to their application by using the `Provider` component.
- [ ] Use `connect` to give components the ability to listen for changes to the `store`.
- [ ] Use `dispatch` in a React component.
- [ ] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [ ] Use `mapDispatchToProps`
- [ ] *Bonus* Use action creators & object form of `mapDispatchToProps`
- [ ] *Bonus* React-Redux hooks: `useSelector` and `useDispatch`

### Part 3: Advanced Redux
- [ ] Install the `redux-thunk` library
- [ ] Use `applyMiddleware` from the redux library and `thunkMiddleware` from the redux-thunk library
- [ ] Create action creators that return functions in order to dispatch asynchronously
- [ ] Discuss best practices of action architecture when using thunk


![React State vs. Redux](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg)

Redux **will** test your JavaScript knowledge to the **MAX**!!!

## Notes

### What is Message Passing?
```
"Message passing is a technique for invoking behavior (i.e., running a program) on a computer. In contrast to the traditional technique of calling a program by name, message passing uses an object model to distinguish the general function from the specific implementations. The invoking program sends a message and relies on the object to select and execute the appropriate code." -Wikipedia
```

Message passing is built on the idea of centralization of program flow: all program flows pass through **one** central function, which in turn invokes the desired functionality. In order to do this, the central function needs to be told 2 things: **a type** which tells the central function which function to call, and, because functions sometimes need data, **a payload** which contains all of the data needed to run the desired function (usually an object).

CLI:

```rb
def menu(choice, data)
  case choice
  when 1
    print_turtles
  when 2
    new_turtle
  when 3
    select_turtle
  when 4
    create_turtle(data)
  when 5
    delete_turtle(data)
  end

  menu
end

user_input = gets.chomp.to_i
menu(user_input)
```






Routes + Controllers:
```rb
class TurtlesController < ApplicationController
  def index
    # ...
  end

  def new
    # ...
  end

  def create
    # ...
  end
  
  # etc.
end

# routes.rb
get "/turtles", to: "turtles#index"
get "/turtles/new", to: "turtles#new"
post "/turtles", to: "turtles#create"
```

### [Three Principles](https://redux.js.org/introduction/three-principles)

- **Single source of truth.** The global state of your application is stored in an object tree within a single store.
- **State is read-only.** The only way to change the state is to emit an action, an object describing what happened.
- **Changes are made with pure functions.** To specify how the state tree is transformed by actions, you write pure reducers.

### Vocabulary
- [ ] Redux - a global state management system
- [ ] store - return value of the `createStore`. Holds your global state. Also contains the functions for reading (`getState`) and writing (`dispatch`) to state.
- [ ] reducer - A function that is used to create new state by REDUCING the old state and the incoming data (payload) into a new state. Uses message passing based on your `action.type` to control what gets returned.
- [ ] getState() - gets the state (read state)
- [ ] dispatch() - changes state (write state) 
- [ ] action - contains the message that tells your reducer how to change state. always has a type attribute, may have payload attribute to contain incoming data. a POJO
- [ ] type - attribute of the action containing a string that is used to control program flow in the reducer
- [ ] payload - part of the action. contains the data that will be used to change state

![Redux Data Flow](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

### React Redux
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] Provider
- [ ] connect()

### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```

### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)


### Additional Resources
- [Redux Thunk Walkthrough](https://alligator.io/redux/redux-thunk/)
- [Cartoon Intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)