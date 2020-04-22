class ListingsController < ApplicationController

  def index
    listings = Listing.all.order(:id)
    render json: listings
  end

end
