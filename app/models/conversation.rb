# == Schema Information
#
# Table name: conversations
#
#  id          :bigint           not null, primary key
#  author_id   :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Conversation < ApplicationRecord
    belongs_to :author, class_name: 'Profile'
    belongs_to :receiver, class_name: 'Profile'

    has_many :personal_messages, -> { order(created_at: :asc) }

    validates :author, uniqueness: {scope: :receiver}

    def self.participating(user) 
        where("(conversations.author_id = ? OR conversations.receiver_id = ?)", user.id, user.id)
    end
end
