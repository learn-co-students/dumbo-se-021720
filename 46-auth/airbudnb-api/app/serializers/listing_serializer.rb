class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :city, :price, :latitude, :longitude, :favorite

  attribute :favorite do
    object.favorite == 1
  end

  attribute :rating do
    object.rating.round(1)
  end
end