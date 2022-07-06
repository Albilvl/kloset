class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :item_type, :weather, :occasion, :color, :dirty, :brand, :image
end
