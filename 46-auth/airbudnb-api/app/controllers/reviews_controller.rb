class ReviewsController < ApplicationController

  def create
    listing = Listing.find_by(id: params[:listing_id])
    
    # TODO: use logged in user
    user = User.first 

    Review.create(
      user: user,
      listing: listing,
      comment: params[:comment],
      rating: params[:rating],
    )

    render json: listing, serializer: ListingDetailSerializer
  end

end
