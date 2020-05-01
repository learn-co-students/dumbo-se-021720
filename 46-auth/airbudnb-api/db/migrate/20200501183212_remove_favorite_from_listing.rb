class RemoveFavoriteFromListing < ActiveRecord::Migration[6.0]
  def change
    remove_column :listings, :favorite
  end
end
