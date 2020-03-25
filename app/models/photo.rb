# == Schema Information
#
# Table name: photos
#
#  id             :bigint           not null, primary key
#  caption        :string
#  photoable_id   :bigint
#  photoable_type :string
#  main           :boolean
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Photo < ApplicationRecord
    validate :ensure_photo


    belongs_to :photoable, polymorphic: true
    has_one_attached :photo

    before_save  :make_main, :falsify_all_others
    before_destroy :switch_main
    after_destroy  :switch_main


    
    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "must be attached"
    end
  end

    def make_main 
            
        if Photo.where('photoable_type = ?', 'Profile').where('photoable_id = ?', self.photoable_id).where('main = ?', "true").length == 0
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
