class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :type
      t.string :weather
      t.string :occasion
      t.string :color
      t.string :image
      t.boolean :dirty

      t.timestamps
    end
  end
end
