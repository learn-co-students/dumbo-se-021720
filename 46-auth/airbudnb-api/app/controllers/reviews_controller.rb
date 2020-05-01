class ReviewsController < ApplicationController
  serialization_scope :current_user
  before_action :authenticated

  def create
    # user = User.find_by(id: session[:user_id]) 
    
    listing = Listing.find_by(id: params[:listing_id])
    
    Review.create(
      user: @current_user,
      listing: listing,
      comment: params[:comment],
      rating: params[:rating],
    )

    render json: listing, serializer: ListingDetailSerializer
  end

end
