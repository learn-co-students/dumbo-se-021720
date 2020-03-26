class CreateReceiptItems < ActiveRecord::Migration
  def change
    create_table :receipt_items do |t|
      t.integer :quantity
      t.integer :noun_id, foreign_key: true
      t.integer :receipt_item_id, foreign_key: true
      t.timestamps
    end
  end
end
