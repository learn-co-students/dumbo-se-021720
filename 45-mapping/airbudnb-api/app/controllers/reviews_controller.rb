class ReviewsController < ApplicationController

  def create
    listing = Listing.find_by(id: params[:listing_id])
    listing.reviews.create(
      username: params[:username],
      comment: params[:comment],
      rating: params[:rating],
    )

    render json: listing, serializer: ListingDetailSerializer
  end

end
