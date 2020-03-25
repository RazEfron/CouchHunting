class Api::ConversationsController < ApplicationController
    def index
        debugger
        @conversations = Conversation.participating(params[:profile]).order('updated_at DESC')
        render :index
    end

    def show
        debugger
        @conversation = Conversation.find(params[:id])
        render :show
    end

    def create 
        debugger
        @conversation = Conversation.new(conversation_params)

        if @photo.save!
            render :show 
        else
            render json @post.errors.full_messages
        end
    end

    def conversation_params
        params.require(:conversations).permit(:author_id, :receiver_id)
    end
end
