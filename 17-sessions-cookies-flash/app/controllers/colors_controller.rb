class ColorsController < ApplicationController

  def index
    # if session["votes"] == nil
    #   session["votes"] = 5
    # end
    session[:votes] ||= 5
    @notification = flash[:notification]
    @votes_remaining = session[:votes]
    if request.path != colors_path
      redirect_to colors_path
    end
    @colors = Color.includes(:votes).all
  end

end