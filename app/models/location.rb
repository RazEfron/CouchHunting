# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  city       :string           not null
#  country    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
    validates :city, :country, presence: true
    has_many :profiles, class_name: :Profile, foreign_key: "location_id"
end
