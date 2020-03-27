class Api::ConversationsController < ApplicationController
    def index
        # debugger
        @conversations = Conversation.participating(params[:profileId]).order('updated_at DESC')
        render :index
    end

    def show
        # debugger
        @conversation = Conversation.find(params[:id])
        render :show
    end

    def create 
        # debugger
        @conversation = Conversation.new(conversation_params)

        if @conversation.save!
            render :show 
        else
            render json @conversation.errors.full_messages
        end
    end

    def conversation_params
        # debugger
        params.require(:conversation).permit(:author_id, :receiver_id)
    end
end
