class ListingsController < ApplicationController

  def index
    listings = Listing.with_average.order(:id)
    render json: listings
  end

  def search
    listings = Listing.with_average.where("city LIKE ?", "%#{params[:city]}%").order(:id)
    render json: listings
  end

  def show
    listing = Listing.find_by(id: params[:id])
    render json: listing, serializer: ListingDetailSerializer
  end

end
