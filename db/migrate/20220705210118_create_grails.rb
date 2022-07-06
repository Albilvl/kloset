class CreateGrails < ActiveRecord::Migration[6.1]
  def change
    create_table :grails do |t|
      t.string :name
      t.string :type
      t.string :weather
      t.string :occasion
      t.string :color
      t.string :link

      t.timestamps
    end
  end
end
