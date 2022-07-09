class Grail < ApplicationRecord
    belongs_to :user

    validates :name, :brand, :weather, :grail_type, :image, :color, :occasion, :link, presence: true
end
