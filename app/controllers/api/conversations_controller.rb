class Api::ConversationsController < ApplicationController
    def index
        @conversations = Conversation.participating(params[:profileId]).order('updated_at DESC')
        render :index
    end

    def show
        
        if params[:id] == "none"
            
            @conversation = Conversation.find_or_create_by(author_id: params[:author_id], receiver_id: params[:receiver_id])
            if @conversation.id == nil
                @conversation = Conversation.find_or_create_by(author_id: params[:receiver_id] ,receiver_id: params[:author_id])
            end
            
        else
            @conversation = Conversation.find(params[:id])
        end
        
        render :show
    end

    def create 
        @conversation = Conversation.new(conversation_params)
        if @conversation.save!
            render :show 
        else
            render json @conversation.errors.full_messages
        end
    end

    def conversation_params
        params.require(:conversation).permit(:author_id, :receiver_id)
    end
end
