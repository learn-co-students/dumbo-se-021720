class UsersController < ApplicationController

  def create
    user = User.create(
      username: params[:username],
      password: params[:password]
    )
    if user.valid?
      token = encode_token(user.id)
      render json: { user: UserSerializer.new(user), token: token }
    else
      render json: { error: user.errors.full_messages }, status: :bad_request
    end
  end

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token(user.id)
      render json: { user: UserSerializer.new(user), token: token }
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def autologin
    user_id = decode_token
    user = User.find_by(id: user_id)
    if user
      render json: user
    else
      render json: { error: "User not found" }, status: :unauthorized
    end
  end

end
