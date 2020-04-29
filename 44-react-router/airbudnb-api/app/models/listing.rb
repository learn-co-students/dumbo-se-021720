class Listing < ApplicationRecord
  has_many :reviews

  # stop that pesky N+1 problem by querying for reviews with listings
  scope :with_average, -> { joins(:reviews).group("listings.id").select("listings.*, AVG(reviews.rating) as rating") }

  # shmeh
  # def rating
  #   reviews.average(:rating).round(1)
  # end
end
