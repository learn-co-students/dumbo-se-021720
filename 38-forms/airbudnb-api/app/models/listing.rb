class Listing < ApplicationRecord
  has_many :reviews

  def rating
    reviews.average(:rating)
  end
end
