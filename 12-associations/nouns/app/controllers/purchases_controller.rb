class PurchasesController < ApplicationController

  get "/purchases" do #index of purchases
    @purchases = Purchase.all
    erb :"purchases/index"
  end

  get "/purchases/:id" do # show page
    @purchase = Purchase.find(params[:id])
    erb :"purchases/show"
  end


end