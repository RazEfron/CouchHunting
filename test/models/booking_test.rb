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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
