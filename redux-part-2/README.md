# Redux 

## Rules for working with Redux
- Never mutate state directly in your reducer! Always return a new version of state. Use spread operator for objects and non-destructive array methods.
- Keep nested state to a minimum. Try to keep your state only one level deep.
- Don't duplicate state - use only the minimum amount of state necessary. Use `useSelector` or `mapStateToProps` to format your state nicely for your components.

## Basic React Redux Setup
- [ ] Install `redux` and `react-redux`
- [ ] Create reducer function and default state
- [ ] Create `store` with `createStore`
- [ ] Create `Provider` at top level of component hierarchy with the `store` as a prop

## Reading State - with Hooks
- [ ] Import `useSelector` in your component
- [ ] Write a selector function to return whatever piece of state is important to your component

## Reading State - with `mapStateToProps`
- [ ] Import `connect` in your component
- [ ] On the line where you export your component, wrap it with `connect(mapStateToProps)(MyComponent)`
- [ ] Write a `mapStateToProps` function to return whatever piece of state is important to your component

## Updating State - with Hooks
- [ ] Import `useDispatch` in your component
- [ ] Call `useDispatch` to get access to the `dispatch` function
- [ ] Call `dispatch` with an action object: `{ type: "ACTION_TYPE", payload: data }`
- [ ] In your reducer, write code to handle the action type and return the new state

## Updating State - with `mapDispatchToProps`
- [ ] Import `connect` in your component
- [ ] On the line where you export your component, wrap it with `connect(mapStateToProps, mapDispatchToProps)(MyComponent)`
- [ ] Write a `mapDispatchToProps` function to return helper functions for capping actions
- [ ] The helper functions should call `dispatch` with an action object: `{ type: "ACTION_TYPE", payload: data }`

## Advanced - Redux Thunk
Redux Thunk lets you write async action creators by giving you access to the `dispatch` function *inside* your action creators. It's primarily used to help organize your action creator code and keep your action logic separate from your component code.

Example use:
```js
export function setWeather(position) {
  return function (dispatch) {
    // you can dispatch multiple actions, so creating a loading/error state is easier
    dispatch({ type: "FETCHING_WEATHER" })

    getWeather(position[0], position[1])
      .then(weather => {
        dispatch({ type: "SET_WEATHER", payload: weather })
      })
  }
} 
```

Setup:
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));
```

## Advanced - Combine Reducers

For larger applications, it might make sense to have multiple reducers handling different parts of state rather than just one big standalone reducer. You can create separate reducers to handle different parts of state, and then use the `combineReducers` function to make one master reducer:

```js
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import pokemonReducer from './pokemonReducer'
import environmentReducer from './environmentReducer'

const reducer = combineReducers({
  environment: environmentReducer,
  pokemon: pokemonReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
```

## Advanced - Redux DevTools

Redux DevTools is a [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for debugging the Redux store.

From the docs - To make things easier, there's an npm package to install:

```sh
npm install redux-devtools-extension
```

Use like so:

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

## Example Folder Structure
```
src/
├── components/
│   ├── MyComponent1.js
│   └── MyComponent2.js
├── store/
│   └── user/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── types.js
│   ├── movies/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── types.js
│   └── index.js
├── App.js
└── index.js
```