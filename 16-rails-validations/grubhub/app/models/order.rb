class Order < ApplicationRecord
  belongs_to :customer
  belongs_to :meal_type
end
