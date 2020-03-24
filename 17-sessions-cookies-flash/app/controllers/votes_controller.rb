class VotesController < ApplicationController

  def create
    if session[:votes] > 0
      @vote = Vote.create(color_id: params[:color_id])
      session[:votes] -= 1
      flash[:notification] = "You just voted for ##{ @vote.color.hex }"
    else
      flash[:notification] = "You're all out of votes 🖕"
    end
    redirect_to colors_path
  end


  


  # def update
  #   @vote = Vote.find(params[:id])
  #   if @vote.update(vote_params)
  #     redirect_to @vote
  #   else
  #     # render :edit
  #     flash[:errors] = @vote.errors.full_messages
  #     redirect_to edit_vote_path
  #   end
  # end

end

