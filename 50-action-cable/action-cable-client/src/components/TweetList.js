import React, { useState, useEffect } from 'react'

import TweetItem from './TweetItem'
import NewTweet from './NewTweet'
import TweetForm from './TweetForm'

import { getTweets, createTweet } from '../api'

import consumer from '../cable'

console.log(consumer)

const TweetList = ({ user, currentUser }) => {
  const [tweets, setTweets] = useState({
    feed: [],
    newTweets: []
  })

  useEffect(() => {
    if (user.username) {
      console.log("subscribe to", user.username)
      const subscription = consumer.subscriptions.create({
        channel: "FeedChannel",
        username: user.username,
        hi: "there"
      }, {
        connected: () => console.log("connected"),
        disconnected: () => console.log("disconnected"),
        received: tweet => {
          console.log("received", tweet)
          setTweets(tweets => ({
            ...tweets,
            newTweets: [tweet, ...tweets.newTweets]
          }))
        },
      })

      return () => {
        console.log("unsubscribe from", user.username)
        subscription.unsubscribe()
      }
    }
  }, [user.username])

  useEffect(() => {
    if (user.id) {
      getTweets(user.id).then(tweets => {
        setTweets({
          feed: tweets,
          newTweets: []
        })
      })
    }
  }, [user.id])

  const addTweet = message => {
    createTweet(currentUser.id, message)
    // .then(tweet => {
    //   setTweets(tweets => ({
    //     ...tweets,
    //     newTweets: [tweet, ...tweets.newTweets]
    //   }))
    // })
  }

  const updateTweets = () => {
    setTweets(tweets => ({
      feed: [...tweets.newTweets, ...tweets.feed],
      newTweets: []
    }))
  }

  return (
    <div className="ui segment">
      {currentUser?.id === user.id && (
        <TweetForm addTweet={addTweet} />
      )}
      <div className="ui feed">
        <NewTweet newTweetCount={tweets.newTweets.length} updateTweets={updateTweets} />
        {tweets.feed.map(tweet =>
          <TweetItem
            key={tweet.id}
            username={user.username}
            photo={user.photo}
            tweet={tweet}
          />)}
      </div>
    </div>
  )
}

export default TweetList