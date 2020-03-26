class Purchase < ActiveRecord::Base

  has_many :receipt_items
  has_many :nouns, through: :receipt_items

end