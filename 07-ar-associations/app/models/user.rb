class User < ActiveRecord::Base

  # self.table_name = "people"

  # def watch_list_items
  #   WatchListItem.where(user_id: self.id)
  # end

  has_many :listings, class_name: "WatchListItem"
  # has_many :movies, :through => :watch_list_items
  has_many :movies, through: :listings

  # has_many :transactions


  # def movies
  #   watch_list_items.map do |watch_list_item|
  #     # Movie.find(watch_list_item.movie_id)
  #     watch_list_item.movie
  #   end
  # end

  def movie_names

  end

end