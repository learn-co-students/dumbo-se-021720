class User < ApplicationRecord

  has_many :votes

  validates_presence_of :username
  validates_uniqueness_of :username

  def remaining_votes
    5 - self.votes.count
  end

  def can_vote
    self.remaining_votes > 0
  end

  has_secure_password

  # def password=(value)
  #   self.password_digest = BCrypt::Password.create(value)
  # end

  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end

end
