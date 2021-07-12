class User < ApplicationRecord
    has_many :questions
    validates :username, uniqueness: true


    has_secure_password
end
