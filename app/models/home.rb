class Home < ApplicationRecord
    validates :max_guest_num, presence: true
    belongs_to :owner, class_name: :User, foreign_key: :owner_id
end

