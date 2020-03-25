class Api::MessagesController < ApplicationController
    def index 
        @messages = Conversation.find(params[:id]).messages
        render :index
    end
end
