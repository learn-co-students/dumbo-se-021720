class FeedChannel < ApplicationCable::Channel
  def subscribed

    user = User.find_by(username: params[:username])
    
    # will create a subscription for a specific feed
    stream_for user
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
