import React from 'react'

const UserCard = ({ username, bio, photo, is_active, handleUserClick }) => (
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" alt={username} src={photo} />
      <div className="header">
        {username}
      </div>
      <div className="meta" style={{ color: `${is_active ? "Green" : "Grey"}` }}>
        {is_active ? "Online" : "Offline"}
      </div>
      <div className="description">
        {bio}
      </div>
    </div>
    <div onClick={() => handleUserClick(username)} className="ui bottom attached button">
      <i className="add icon"></i>
        View Tweets
      </div>
  </div>
)

export default UserCard