class Listing < ApplicationRecord
  has_many :reviews
  has_many :favorites

  # stop that pesky N+1 problem by querying for reviews with listings, and user favorite
  scope :with_review_and_favorite, ->(user) { 
    joins(:reviews)
      .left_outer_joins(:favorites)
      .group("listings.id")
      .select("listings.*, AVG(reviews.rating) as rating, CASE WHEN favorites.id is null THEN 0 ELSE 1 END as favorite") 
      .where("favorites.user_id = ? or favorites.user_id is null", user.id)
  }

end
