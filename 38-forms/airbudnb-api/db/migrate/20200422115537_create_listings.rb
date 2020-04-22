class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :image
      t.string :name
      t.string :city
      t.integer :price
      t.boolean :favorite

      t.timestamps
    end
  end
end
