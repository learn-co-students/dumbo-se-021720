
import React from 'react';

const pluralizeTweets = num => num > 1 ? 'tweets' : 'tweet'

const NewTweetInfo = ({ newTweetCount, updateTweets }) => {
  if (!newTweetCount) return null

  return (
    <div onClick={updateTweets} className="ui message info">
      You have {newTweetCount} new {pluralizeTweets(newTweetCount)}
    </div>
  )
};

export default NewTweetInfo;