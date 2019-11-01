class User < ApplicationRecord
    has_many :owners
    has_many :events, through: :owners
    has_many :assistants
    has_many :events, through: :assistants
    has_many :comments
    has_many :events, through: :comments
    has_secure_password
    validates :name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :cel, presence: true
    
end
