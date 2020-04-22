class Listing < ApplicationRecord
  has_many :reviews

  def rating
    reviews.average(:rating).round(1)
  end
end
