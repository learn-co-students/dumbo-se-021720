class ReceiptItemsController < ApplicationController

  get "/receipt_items/new" do
    @nouns = Noun.all
    erb :"receipt_items/new"
  end

  post "/receipt_items" do
    receipt_item = ReceiptItem.create(params)
    redirect to "/purchases/#{ receipt_item.purchase_id }"
  end

end