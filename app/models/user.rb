class User < ApplicationRecord
    has_secure_password

    has_many :items
    has_many :grails

    validates :username, :email, uniqueness: {case_sensitive: false}
    validates :color1, presence: true, allow_blank: false
    validates :color2, presence: true, allow_blank: false
end
