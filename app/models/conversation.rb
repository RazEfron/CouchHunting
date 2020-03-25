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
end
