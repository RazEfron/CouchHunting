class Api::BookingsController < ApplicationController
    def index
        @bookings = Conversation.find(params[:conversationId]).bookings
        render :index
    end

    def show 
        @bookings = Booking.participating(params[:profileId]).order('updated_at DESC')
        render :index
    end

    def create 
        @booking = Booking.new(booking_params)
        
        if @booking.save!
            render :show
        else
            render json: @booking.errors.full_messages
        end
    end

    def update
        debugger
        @booking = Booking.find(params[:id])
        debugger
        if @booking.update!(booking_params)
            render :show 
        else
            render json @booking.errors.full_messages
        end
    end

    def booking_params
        
        params.require(:booking).permit(:traveler_id, :host_id, :conversation_id, :start_date, :end_date, :num_guests, :flexible_dates, :status)
    end
end
