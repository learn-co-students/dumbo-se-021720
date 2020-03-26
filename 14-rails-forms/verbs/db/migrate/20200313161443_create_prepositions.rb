class CreatePrepositions < ActiveRecord::Migration[6.0]
  def change
    create_table :prepositions do |t|
      t.string :name
      t.integer :whatever

      t.timestamps
    end
  end
end
