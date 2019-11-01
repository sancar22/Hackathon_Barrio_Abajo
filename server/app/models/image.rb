class Image < ApplicationRecord
    belongs_to :events
    validates :name, presence: true
    
end
