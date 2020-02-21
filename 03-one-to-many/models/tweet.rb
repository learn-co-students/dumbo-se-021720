class Tweet

  @@all = []

  attr_reader :user, :message

  def initialize(user, message)
    @user = user
    @message = message
    # binding.pry
    @@all << self
    # binding.pry
  end

  def self.all
    @@all
  end

end