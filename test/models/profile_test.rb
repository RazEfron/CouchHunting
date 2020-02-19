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

require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
