class FavoritesController < ApplicationController
  serialization_scope :current_user
  before_action :authenticated

  def create
    listing = Listing.find_by(id: params[:listing_id])

    favorite = listing.favorites.create(user: @current_user)
    if favorite.valid?
      render json: listing, serializer: ListingDetailSerializer
    else
      render json: { errors: favorite.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    listing = Listing.find_by(id: params[:listing_id])

    favorite = Favorite.find_by(user: @current_user, listing: listing)

    if favorite
      favorite.destroy
      render json: listing, serializer: ListingDetailSerializer
    else
      render json: { errors: favorite.errors.full_messages }, status: :bad_request
    end
  end
end
