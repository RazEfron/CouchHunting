# == Schema Information
#
# Table name: bookings
#
#  id              :bigint           not null, primary key
#  traveler_id     :integer          not null
#  host_id         :integer          not null
#  conversation_id :integer          not null
#  start_date      :date             not null
#  end_date        :date             not null
#  flexible_dates  :boolean          default(FALSE)
#  num_guests      :integer          not null
#  status          :string           default("pending")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Booking < ApplicationRecord
    belongs_to :traveler, class_name: 'Profile'
    belongs_to :host, class_name: 'Profile'
    belongs_to :conversation, class_name: 'Conversation'

    validates :traveler_id, :host_id, :conversation_id, :start_date, :end_date, :num_guests  presence: true

    # after_update :expire_booking


    # def expire_booking
    #     if self.start_date
            
    #     end
        
    # end
end
