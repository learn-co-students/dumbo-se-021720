class FixFuckingPurchaseItems < ActiveRecord::Migration
  def change
    rename_column :receipt_items, :receipt_item_id, :purchase_id
  end
end
