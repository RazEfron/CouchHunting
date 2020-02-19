# == Schema Information
#
# Table name: homes
#
#  id                              :bigint           not null, primary key
#  owner_id                        :integer          not null
#  max_guest_num                   :integer          default(0), not null
#  last_minute_ok                  :boolean          default(FALSE), not null
#  kid_friendly                    :boolean          default(FALSE), not null
#  pet_friendly                    :boolean          default(FALSE), not null
#  smoking_allowed                 :boolean          default(FALSE), not null
#  sleeping_arrangments            :string
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#  sleeping_arrangment_descreption :text
#  additional_information          :text
#

class Home < ApplicationRecord
    validates :max_guest_num, presence: true

    belongs_to :owner, class_name: :User, foreign_key: :owner_id
    has_many :photos, as: :photoable

end

