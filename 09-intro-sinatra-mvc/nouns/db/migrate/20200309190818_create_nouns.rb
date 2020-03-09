class CreateNouns < ActiveRecord::Migration
  def change
    create_table :nouns do |t|
      t.string :name
      t.string :definition
      t.integer :usefulness
    end
  end
end
