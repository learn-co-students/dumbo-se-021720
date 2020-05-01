class ListingDetailSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :city, :price, :latitude, :longitude, :rating, :favorite
  has_many :reviews

  def rating
    object.reviews.average(:rating).round(1)
  end

  def favorite
    !!object.favorites.find_by(user: current_user)
  end
end