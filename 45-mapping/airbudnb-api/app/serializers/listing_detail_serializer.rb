class ListingDetailSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :city, :price, :favorite, :rating
  has_many :reviews

  def rating
    object.reviews.average(:rating).round(1)
  end
end