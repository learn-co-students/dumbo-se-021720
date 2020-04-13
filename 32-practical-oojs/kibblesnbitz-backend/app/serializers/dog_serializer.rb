class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio, :profile_pic, :match, :breed_name
  # belongs_to :breed
end
