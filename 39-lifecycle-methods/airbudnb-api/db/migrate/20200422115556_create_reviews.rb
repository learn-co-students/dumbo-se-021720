class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :username
      t.string :comment
      t.integer :rating
      t.belongs_to :listing, null: false, foreign_key: true

      t.timestamps
    end
  end
end
