class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :city, :price, :favorite, :rating
end
