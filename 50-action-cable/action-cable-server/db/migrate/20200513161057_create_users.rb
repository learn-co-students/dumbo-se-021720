class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :bio
      t.string :photo
      t.boolean :is_active, null: false, default: false

      t.timestamps
    end
  end
end
