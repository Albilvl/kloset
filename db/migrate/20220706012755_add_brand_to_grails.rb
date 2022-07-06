class AddBrandToGrails < ActiveRecord::Migration[6.1]
  def change
    add_column :grails, :brand, :string
  end
end
