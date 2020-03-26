class CreateWatchListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_list_items do |t|
      t.integer :movie_id
      t.integer :user_id
      t.timestamps
    end
  end
end
