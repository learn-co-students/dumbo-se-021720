import React from 'react'

const TweetItem = ({ username, photo, tweet }) => (
  <div className="event">
    <div className="label">
      <img alt={username} src={photo} />
    </div>
    <div className="content">
      <div className="summary">
        {username}
        <div className="date">
          {tweet.created_at}
        </div>
      </div>
      <div className="extra text">
        {tweet.message}
      </div>
    </div>
  </div>
)

export default TweetItem