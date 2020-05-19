import React, { useReducer, useEffect } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { getUsers } from '../api'
import Loader from './Loader'

// state & reducer for useReducer
const initialState = {
  users: [],
  selectedUsername: null
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USERS":
      return {
        ...state,
        users: payload.users,
        selectedUsername: payload.selectedUsername
      }
    case "SET_SELECTED_USERNAME":
      return {
        ...state,
        selectedUsername: payload
      }
    default:
      return state
  }
}

const TweetsContainer = ({ currentUser }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { users, selectedUsername } = state

  // fetch users
  useEffect(() => {
    getUsers().then(users => {
      dispatch({
        type: "SET_USERS", payload: {
          users,
          selectedUsername: users[0].username
        }
      })
    })
  }, [])

  const handleUserClick = username => dispatch({ type: "SET_SELECTED_USERNAME", payload: username })

  const selectedUser = users.find(user => user.username === selectedUsername)

  if (!selectedUser) return <Loader />

  console.log(users)

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <UserList users={users} handleUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          {selectedUser && <TweetList user={selectedUser} currentUser={currentUser} />}
        </div>
      </div>
    </div>
  )

}

export default TweetsContainer