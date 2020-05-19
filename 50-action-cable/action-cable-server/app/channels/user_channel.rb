class UserChannel < ApplicationCable::Channel
  def subscribed
    puts "SUBSCRIBED " * 10
    p current_user
    
    # generic stream to anyone subscribed to (not just a specific instance)
    stream_from "user_channel"
    
    current_user.update(is_active: true)

    # broadcast to anyone subscribed to this channel
    ActionCable.server.broadcast "user_channel", current_user
  end

  def unsubscribed
    puts "UNSUBSCRIBED " * 10
    # Any cleanup needed when channel is unsubscribed
    current_user.update(is_active: false)

    ActionCable.server.broadcast "user_channel", current_user
  end
end
