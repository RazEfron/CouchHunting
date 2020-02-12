# == Schema Information
#
# Table name: profiles
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  location_id      :integer          not null
#  hosting_status   :string           not null
#  date_of_birth    :date             not null
#  gender           :string           not null
#  occupation       :string
#  about_me         :text
#  profile_pic_url  :string
#  spoken_languages :string
#  interests        :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Profile < ApplicationRecord
    validates :user_id, :location_id, :hosting_status, :date_of_birth, :gender, presence: true

    belongs_to :user, class_name: "user", foreign_key: "user_id"
    belongs_to :location, class_name: "location", foreign_key: "location_id"

end

