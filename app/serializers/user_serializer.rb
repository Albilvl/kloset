class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :top_size, :pants_size, :shoe_size, :avatar, :color1, :color2

  has_many :items
  has_many :grails
end
