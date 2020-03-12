class CreatePurchase < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.string :buyer_name
      t.datetime :delivery_date
      t.timestamps
    end
  end
end
