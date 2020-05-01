class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :listing

  validates :user_id, uniqueness: { scope: listing_id }
end
