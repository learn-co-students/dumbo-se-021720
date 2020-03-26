class CreateVerbs < ActiveRecord::Migration[6.0]
  def change
    create_table :verbs do |t|
      t.string :name
      t.integer :conjugations
    end
  end
end
