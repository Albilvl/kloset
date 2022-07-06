class GrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :weather, :occasion, :color, :link
end
