class UsersController < ApplicationController

  def create
    user = User.create(username: params[:username], password: params[:password])
    
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

end
