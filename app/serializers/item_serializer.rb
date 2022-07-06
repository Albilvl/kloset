class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :weather, :occasion, :color, :dirty
end
