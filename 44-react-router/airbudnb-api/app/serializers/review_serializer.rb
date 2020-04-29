class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :comment, :rating, :date

  def date
    object.created_at.strftime("%B %Y")
  end
end
