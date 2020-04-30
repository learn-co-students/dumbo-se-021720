class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :city, :price, :favorite, :latitude, :longitude

  attribute :rating do
    object.rating.round(1)
  end
end