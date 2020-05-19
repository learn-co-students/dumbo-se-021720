class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :photo
end
