class RenameTypeToGrailTypeInGrails < ActiveRecord::Migration[6.1]
  def change
    rename_column :grails, :type, :grail_type
  end
end
