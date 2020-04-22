class ReviewsController < ApplicationController

  def create
    listing = Listing.find_by(id: params[:id])
    listing.reviews.create(
      username: params[:username],
      comment: params[:comment],
      rating: params[:rating],
    )

    render json: listing
  end

end
