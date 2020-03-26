class Vote < ApplicationRecord
  belongs_to :color
  belongs_to :user

  validate :user_must_be_able_to_vote

  def user_must_be_able_to_vote
    unless self.user.can_vote
      self.errors.add(:user, "has no votes remaining")
    end
  end

end
