class Dog < ApplicationRecord
  belongs_to :breed

  validates :name, presence: true

  def breed_name
    self.breed.name
  end
end
