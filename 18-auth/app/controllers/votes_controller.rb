class VotesController < ApplicationController

  # before_action :ensure_authenticated!, only: [ :create, :index ]

  def index
    @votes = Vote.all
  end

  def create 
    @vote = Vote.create(color_id: params[:color_id], user_id: logged_in_user_id)
    unless @vote.valid?
      flash[:errors] = @vote.errors.full_messages
    end
    redirect_to colors_path
  end

  def destroy
    @vote = Vote.find(params["id"])
    if logged_in_user_id == @vote.user_id
      @vote.destroy
    end
    redirect_to votes_path
  end

end

