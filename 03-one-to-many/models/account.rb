class Account

  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message) #takes a message
    # creates a new tweet
    # binding.pry
    new_tweet_instance = Tweet.new(self, message)

    #and adds it to the user's tweet collection

  end

  def tweets # returns an array of tweet instances

  end

end