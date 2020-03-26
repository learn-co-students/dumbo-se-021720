class OrdersController < ApplicationController

  def new
    @customers = Customer.all
    @meal_types = MealType.all
    @order = Order.new
  end

  def create
    @order = Order.create(order_params) 
    redirect_to @order.customer
  end 

  private

  def order_params
    params.require(:order).permit(:customer_id, :meal_type_id)
  end

end
