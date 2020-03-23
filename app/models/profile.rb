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
    validate :date_of_birth, if: :over_18

    belongs_to :user, class_name: :User, foreign_key: "user_id"
    belongs_to :location, class_name: :Location, foreign_key: "location_id"

    has_many :photos, as: :photoable
    has_one :home, through: :user

    def over_18
        return false if self.date_of_birth == nil
        today = Date.today
            date = self.date_of_birth
            age = (today.year - date.year)
            age -= 1 if [date.day, date.month, today.year].join('/').to_date > Date.today
                # checks if specific date birthdate has passed
            if age >= 18
                true
            else
                # adds error that will be render with errors.full_messages
                self.errors.add(:_, " Age must be greater than or equal to 18")
                # credit to Calvin Churnak
            end
    end

    def self.search(location, search)
        
        if search ==  nil
            return Profile.joins(:home).where('location_id = ?', location).where('hosting_status = ?', 'accepting guests')
        end

        query_string = Profile.joins(:home).where('location_id = ?', location).where('hosting_status = ?', 'accepting guests')

        search.each do |query|
            
            query_string = query_string.where(query)
        end
        
        return query_string
    end
end
