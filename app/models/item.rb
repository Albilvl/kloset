class Item < ApplicationRecord
    belongs_to :user

    validates :name, :brand, :weather, :item_type, :image, :color, :occasion, presence: true
end
