class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :profile_pic
      t.string :bio
      t.boolean :match
      t.belongs_to :breed, null: false, foreign_key: true

      t.timestamps
    end
  end
end
