class UsersController < ApplicationController

  skip_before_action :ensure_authenticated!

  def new
    @user = User.new
  end

  def create
    # byebug
    @user = User.new(user_params)
    # @user.password = params[:user][:password]
    if @user.save
      log_in_user(@user.id)
      # session[:user_id] = @user.id
      redirect_to colors_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
