class ChangePantsSizeToBeFloatInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :pants_size, :float
  end
end
