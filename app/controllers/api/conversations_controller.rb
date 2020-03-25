class Api::ConversationsController < ApplicationController
    def index
        @conversations = Conversation.participating(current_user).order('updated_at DESC')
    end
end
