class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :top_size
      t.string :pants_size
      t.float :shoe_size
      t.string :avatar
      t.string :color1
      t.string :color2

      t.timestamps
    end
  end
end
