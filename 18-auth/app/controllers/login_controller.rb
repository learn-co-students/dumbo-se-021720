class LoginController < ApplicationController

  skip_before_action :ensure_authenticated!

  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user != nil && @user.authenticate(params[:password])
      log_in_user(@user.id)
      redirect_to colors_path
    else
      flash[:errors] = [ "I don't know her" ]
      redirect_to new_login_path
    end
  end

  def destroy
    log_out_user
    redirect_to new_login_path
  end

  # private

  # def login_params
  #   params.permit(:username, :password)
  # end


end
