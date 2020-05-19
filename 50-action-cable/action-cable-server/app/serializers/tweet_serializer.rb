class TweetSerializer < ActiveModel::Serializer
  attributes :id, :message, :created_at

  def created_at
    self.object.created_at.strftime("%B %d, %Y")
  end
end
