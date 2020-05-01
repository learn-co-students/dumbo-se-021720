class AddUserToReviews < ActiveRecord::Migration[6.0]
  def up
    add_reference :reviews, :user, foreign_key: true
    change_column_null :reviews, :user_id, false
    remove_column :reviews, :username, :string
  end
  
  def down
    remove_reference :reviews, :user
    add_column :reviews, :username, :string
  end
end
