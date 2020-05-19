import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users, handleUserClick }) => (
  <div className="ui cards">
    {users.map(user =>
      <UserCard
        key={user.username}
        handleUserClick={handleUserClick}
        {...user}
      />
    )}
  </div>
)

export default UserList