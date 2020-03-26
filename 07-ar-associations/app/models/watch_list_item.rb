class WatchListItem < ActiveRecord::Base

  # def movie
  #   Movie.find_by(id: self.movie_id)
  # end
  belongs_to :movie
  # belongs_to :film, class_name: "Movie", foreign_key: "movie_id"

  # def user
  #   User.find_by(id: self.user_id)
  # end
  belongs_to :user

end