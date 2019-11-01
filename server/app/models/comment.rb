class Comment < ApplicationRecord
    belongs_to :users
    belongs_to :events
    validates :title, presence: true
    validates :text, presence: true
    
end
