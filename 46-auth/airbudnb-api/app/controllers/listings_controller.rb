class ListingsController < ApplicationController
  before_action :authenticated

  def index
    listings = Listing.with_review_and_favorite(@current_user).order(:id)
    render json: listings
  end

  def search
    listings = Listing.with_review_and_favorite(@current_user).where("city LIKE ?", "%#{params[:city]}%").order(:id)
    render json: listings
  end

  def show
    listing = Listing.find_by(id: params[:id])
    render json: listing, serializer: ListingDetailSerializer
  end

end
