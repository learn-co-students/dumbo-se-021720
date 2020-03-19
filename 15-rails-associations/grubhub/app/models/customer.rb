class Customer < ApplicationRecord

  has_many :orders
  has_many :meal_types, through: :orders

end
