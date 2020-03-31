class Api::MessagesController < ApplicationController
    def index 
        # 
        if params[:message][:conversation] == "none"
            @messages = Message.search(params[:message][:first])
        else
            @messages = Conversation.find(params[:message][:conversation].to_i).messages
        end

        render :index
    end

    def show 
        @message = Conversation.find(params[:id]).messages.limit(1)
        render :show
    end

    def create 
        @message = Message.new(message_params)           

        if @message.save!
            render :show 
        else
            render json @message.errors.full_messages
        end
    end

    def message_params
        params.require(:message).permit(:body, :conversation_id, :profile_id, :created_at)
    end
end
