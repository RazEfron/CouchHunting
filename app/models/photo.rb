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

    before_save  :make_main, :falsify_all_others
    before_destroy :switch_main

    def make_main 
        if Photo.where('photoable_type = ?', 'Profile').where('photoable_id = ?', self.photoable_id).length == 0
            self.main = true
        end
    end

    def falsify_all_others
        if self.main == true
        Photo
            .where('photoable_id = ?', self.photoable_id)
            .where('id != ?', self.id)
            .where('photoable_type = ?', 'Profile')
            .update_all("main = 'false'")
        end
    end

    def switch_main
        if self.main == true
            Photo
            .where('photoable_id = ?', self.photoable_id)
            .where('id != ?', self.id)
            .where('photoable_type = ?', 'Profile')
            .limit(1)
            .update("main = 'true'")
        end
    end
end
