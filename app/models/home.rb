class Home < ApplicationRecord
    validates :max_guest_num, :last_minute_ok, :kid_friendly, :pet_friendly, :smoking_allowed, presence: true
    belongs_to :owner, class_name: :User, foreign_key: :owner_id
end

