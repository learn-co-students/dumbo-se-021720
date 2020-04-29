class AddLatAndLongToListings < ActiveRecord::Migration[6.0]
  def change
    add_column :listings, :latitude, :decimal, precision: 10, scale: 6
    add_column :listings, :longitude, :decimal, precision: 10, scale: 6
  end
end
