class GrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :grail_type, :weather, :occasion, :color, :link, :image, :brand
end
