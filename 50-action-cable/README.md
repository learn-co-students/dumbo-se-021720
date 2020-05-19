# Action Cable

## SWBATs
- [ ] Understand the difference between HTTP and WebSocket protocols
- [ ] Create Action Cable channels in Rails
- [ ] Manage Action Cable subscriptions and broadcast messages
- [ ] Connect to Action Cable from a React application


- live notifications
- messaging/chat/ims

- how to do auth (with cookies)
- how to subscribe to general notifications (not a specific feed)


## Action Cable in Rails

Rails has support for WebSockets via Action Cable. Action Cable is included with Rails, so you don't need to install any additional gems to get up and running. 

To allow connections to web socket server, update your `routes.rb` file to include a handshake route for Action Cable:

```rb
# config/routes.rb
Rails.application.routes.draw do
  # will create a route at ws://localhost:3000/cable
  mount ActionCable.server => "/cable"
end
```

With that take care of, let's create a `channel` for web socket connections. You can think of a channel as the web socket equivalent of a controller - it's a way for us to group together common functionality for users interacting with our server. With channels, we're going to be managing *subscriptions* instead of managing requests and responses as we do with our controllers.

You can generate a channel like this:

```sh
$ rails g channel <channel_name>
```

**Note**: Channel names are singluar by convention rather than plural.

Here's an example of what a channel might look like:

```ruby
class FeedChannel < ApplicationCable::Channel
  def subscribed
    # set user status to active when they subscribe to a channel
    @current_user.update(is_active: true)

    # find a Feed instance using params from the subscription
    feed = Feed.find_by(id: params[:id])
    
    # stream_for subscribes to only changes for this specific instance of a feed (instead of all feeds)
    # stream_from subscribes to changes for all feeds
    # make sure your subscribed method has one of stream_for or stream_from being used
    stream_for feed

    # broadcast_to sends a message to all subscribers for this channel
    FeedChannel.broadcast_to feed, { type: "USER_CONNECTED", user: @current_user }
  end

  def unsubscribed
    # set user status to not active when they unsubscribe from a channel
    @current_user.update(is_active: false)

    # broadcast_to sends a message to all subscribers for this channel
    FeedChannel.broadcast_to feed, { type: "USER_DISCONNECTED", user: @current_user }
  end
end
```

In the example above, we're creating a `FeedChannel` that clients can subscribe to. When the client subscribes, we need to provide an identifier for the channel they've subscribed to - that way when any messages are broadcast to that channel, they'll receive them. We create the identifier using [`stream_from` or `stream_for`](https://edgeguides.rubyonrails.org/action_cable_overview.html#streams).

We can then broadcast messages to any clients who are subscribed to that channel using `broadcast_to`, which we'll use to send a payload of JSON data to any clients who are listening.

You can broadcast messages from your channels (as above), but you can also broadcast messages from controller actions:

```rb
class TweetsController < ApplicationController

  def create
    tweet = Tweet.create(message: params[:message], feed_id: params[:feed_id])
    if tweet.valid?
      feed = tweet.feed
      # broadcast to anyone subscribed to the FeedChannel for this specific feed
      FeedChannel.broadcast_to feed, TweetSerializer.new(tweet)
      render json: tweet
    else
      render json: { error: 'Could not create that tweet' }, status: 422
    end
  end

end
```

## Action Cable in React

In addition to the server-side Action Cable library we're using in Rails, there is also a client-side Action Cable library to make it easier to work with WebSocket connections. In addition to the Action Cable library, there are also some wrappers for that library to make it easier to work with React. We're going to work directly with the Action Cable library to get a better sense of its internals and give us more flexibility in using it. **Note**: *The most popular library for working with Action Cable with Rails, `react-actioncable-provider`, is buggy and no longer actively maintained. If you want to use a working fork of it, install via: `npm install ihollander/react-actioncable-provider`*

To get started, let's install the `actioncable` package:

```sh
$ npm install @rails/actioncable
```

First we'll need to connect to Action Cable on our server:

```js
// cable.js
import { createConsumer } from '@rails/actioncable'

const cable = createConsumer("ws://localhost:3000/cable")

export default cable
```

Once we've created the connection, we can use it to subscribe to any channel in our component we like. You could use the `useEffect` hook or `componentDidMount/componentDidUpdate` and `componentWillUnmount` to manage subscribing and unsubscribing:

```js
import React, { useEffect } from 'react'
import cable from '../cable'

const TweetList = ({ feedId }) => {
  useEffect(() => {
    // params must include the channel, and can also include any other info you'd like as params for the subscription
    const params = {
      channel: "FeedChannel",
      id: feedId
    }

    // handlers lets you define callback functions to run when messages are received from the subscription
    const handlers = {
      received: data => console.log("received", data),
      connected: () => console.log("connected"),
      disconnected: () => console.log("disconnected"),
    }

    // subscribe to the cable
    cable.subscriptions.create(params, handlers)

  }, [feedId])

  return <div>I'm connected to the FeedChannel!</div>
}
```

### Action Cable in React: Advanced

For more advanced handling of the Action Cable connection, we could use [React Context](https://reactjs.org/docs/context.html#api) and create a Provider component to give give our app access to the cable. The idea with this component is to have it wrap our entire application (like Provider from `react-redux`) and give us access to the Action Cable connection whenever we need it. The advantage of this approach is we're keeping the Action Cable connection as part of the React component hierarchy, which means we can work with connecting to/disconnecting from the Action Cable server more easily.

```js
// cable/context.js
import { createContext } from 'react'

// create a shared context
export const CableContext = createContext()

// create a context provider component
export const CableProvider = ({ children }) => {

  return (
    <CableContext.Provider value={null}>
      {children}
    </CableContext.Provider>
  )
}
```

We want the provider to connect to Action Cable when the component renders, so let's use the `useEffect` hook for that:

```js
// cable/context.js
import React, { createContext, useEffect, useState } from 'react'
import { createConsumer } from '@rails/actioncable'

// create a shared context
export const CableContext = createContext()

// create a context provider component
export const CableProvider = ({ children }) => {
  const [cable, setCable] = useState(null)

  useEffect(() => {
    // connect to server
    if (!cable) {
      setCable(createConsumer("ws://localhost:3000/cable"))
    }

    return () => {
      // disconnect if component unmounts
      if (cable) {
        cable.disconnect()
      }
    }
  }, [cable])

  return (
    <CableContext.Provider value={cable}>
      {children}
    </CableContext.Provider>
  )
}
```

Now we can use our custom CableProvider component to wrap our application:


```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { CableProvider } from './cable/context'
import App from './App';

ReactDOM.render(
  <CableProvider>
    <App />
  </CableProvider>,
  document.getElementById('root')
);

```

With all that set up, now we can subscribe to our Action Cable channels from any component we like. We'll need a couple of hooks to manage the subscription `useContext` to get access to the cable connection, and `useEffect` to subscribe/unsubscribe to specific channels:

```js
import React, { useContext, useEffect } from 'react'
import { CableContext } from '../cable/context'

const TweetList = ({ feedId }) => {
  const cable = useContext(CableContext)

  useEffect(() => {
    // params must include the channel, and can also include any other info you'd like as params for the subscription
    const params = {
      channel: "FeedChannel",
      id: feedId
    }

    // handlers lets you define callback functions to run when messages are received from the subscription
    const handlers = {
      received: data => console.log("received", data),
      connected: () => console.log("connected"),
      disconnected: () => console.log("disconnected"),
    }

    // subscribe to the cable
    cable.subscriptions.create(params, handlers)

  }, [feedId, cable.subscriptions])

  return <div>I'm connected to the FeedChannel!</div>

}
```


### Notes on Deploying

Make sure to follow these steps if you plan on deploying your app! There are a few additional settings you need for Rails to work in production:

* [Heroku and ActionCable](https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable#what-are-websockets)

## Resources

### Useful Tools for testing on multiple computers/mobile
* [Rails server binding](https://fullstacknotes.com/make-rails-4-2-listens-to-all-interfaces/)
* [ngrok](https://ngrok.com/)
* [localtunnel](https://github.com/localtunnel/localtunnel)

### Example Apps:
* [Flyak](https://github.com/ihollander/flyak-actioncable)

* [Hidden Names App](http://hidden-names.herokuapp.com/)
* [Hidden Names Frontend](https://github.com/alexgriff/hidden_phrase_frontend)
* [Hidden Names Backend](https://github.com/alexgriff/hidden_phrase_backend)

* [Gridbuds App](https://gridbuds.netlify.com/lobby)
* [Gridbuds Frontend](https://github.com/ihollander/react-ipuz)
* [Gridbuds Backend](https://github.com/ihollander/react-ipuz-api)