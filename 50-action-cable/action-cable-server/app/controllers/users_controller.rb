class UsersController < ApplicationController

  def index
    users = User.includes(:tweets).order("tweets.created_at DESC")
    render json: users
  end

  def show
    user = User.find_by(id: params[:id])
    session[:user_id] = user.id
    render json: user
  end

end