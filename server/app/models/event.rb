class Event < ApplicationRecord
    has_many :owners
    has_many :users, through: :owners
    has_many :assistants
    has_many :users, through: :assistants
    has_many :comments
    has_many :users, through: :comments
    has_many :images
    validates :title, presence: true
    validates :description, presence: true
    validates :date, presence: true
    validates :place, presence: true
    validates :contact, presence: true
    validates :category, presence: true
end
