# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  caption    :string
#  main       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
    belongs_to :photoable, polymorphic: true
    has_one_attached :photo

    before_save :falsify_all_others


    def falsify_all_others
        if Photo.where('id == ?', self.id).main == true
        Photo
            .where('photoable_id == ?', self.photoable_id)
            .where('id != ?', self.id)
            .where('photoable_type == ?', 'profile')
            .update_all("main = 'false'")
        end
    end
end
