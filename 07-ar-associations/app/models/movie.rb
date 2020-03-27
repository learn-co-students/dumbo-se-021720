class Movie < ActiveRecord::Base

  has_many :watch_list_items
  has_many :users, through: :watch_list_items

end