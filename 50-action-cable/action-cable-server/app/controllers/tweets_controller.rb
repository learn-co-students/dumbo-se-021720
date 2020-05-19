class TweetsController < ApplicationController

  def index
    tweets = Tweet.where(user_id: params[:user_id]).order(created_at: :desc)
    render json: tweets
  end


  def create
    tweet = Tweet.create(message: params[:message], user_id: params[:user_id])
    if tweet.valid?


      user = tweet.user
      # first argument: subscription identifier
      # second: payload (data) as JSON
      FeedChannel.broadcast_to user, TweetSerializer.new(tweet)
      
      render json: tweet
    else
      render json: {error: 'Could not create that tweet'}, status: 422
    end
  end

end