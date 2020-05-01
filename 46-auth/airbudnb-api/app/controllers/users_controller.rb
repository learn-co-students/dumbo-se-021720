class UsersController < ApplicationController

  def create
    user = User.create(username: params[:username], password: params[:password])
    session[:user_id] = user.id

    render json: user
  end

end
