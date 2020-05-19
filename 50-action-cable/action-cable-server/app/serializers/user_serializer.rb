class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :photo, :is_active
end
