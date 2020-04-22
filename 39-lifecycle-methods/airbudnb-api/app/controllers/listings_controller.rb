class ListingsController < ApplicationController

  def index
    listings = Listing.all.order(:id)
    render json: listings
  end

  def search
    listings = Listing.where("city LIKE ?", "%#{params[:city]}%").order(:id)
    render json: listings
  end

end
