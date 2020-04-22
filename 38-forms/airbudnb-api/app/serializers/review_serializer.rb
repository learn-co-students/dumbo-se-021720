class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :comment, :rating, :listing_id
end
