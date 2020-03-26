class ApplicationController < ActionController::Base

  # run this method before every action in every controller
  before_action :setup_layout_data 
  before_action :setup_notifications 

  before_action :ensure_authenticated!

  def setup_layout_data
    @logged_in = !!logged_in_user_id
    logged_in_user if @logged_in
  end

  def setup_notifications
    @errors = flash[:errors]
  end

  private

  def ensure_authenticated!
    unless logged_in?
      flash[:errors] = [ "You must be logged in to do that" ]
      redirect_to new_login_path
    end
  end

  def logged_in?
    !!logged_in_user_id
  end

  def logged_in_user
    @logged_in_user ||= User.find(logged_in_user_id)
  end

  def logged_in_user_id
    session[:user_id]
  end

  def log_in_user(user_id) 
    session[:user_id] = user_id
  end

  def log_out_user
    session[:user_id] = nil
  end

end