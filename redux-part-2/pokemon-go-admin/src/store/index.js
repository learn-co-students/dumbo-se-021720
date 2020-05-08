import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import pokemonReducer from './pokemonReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store
