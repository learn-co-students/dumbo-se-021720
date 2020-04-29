class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :city, :price, :favorite

  attribute :rating do
    object.rating.round(1)
  end
end