class AuthController < ApplicationController

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Invalid username or password" } #, status: :unauthorized
    end
  end

  def autologin
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  def logout
    reset_session
    render json: { message: "👍" }
  end

end
