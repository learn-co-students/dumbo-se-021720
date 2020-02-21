class Account

  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def post_tweet(message) #takes a message
    # creates a new tweet
    # binding.pry
    new_tweet_instance = Tweet.new(self, message)
    # @tweets << new_tweet_instance
    #and adds it to the user's tweet collection

  end

  def tweets # returns an array of tweet instances
    Tweet.all.select do |tweet_instance|
      tweet_instance.user == self
    end
  end

end