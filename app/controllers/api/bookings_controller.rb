class Api::BookingsController < ApplicationController
    def index
        @bookings = Conversation.find(params[:conversation_id])
        render :index
    end

    def show 
        @booking = Booking.find(params[:id])
        render :show
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
        @booking = Booking.find(params[:id])

        if @booking.update!(booking_params)
            render :show 
        else
            render json @booking.errors.full_messages
        end
    end

    def booking_params
        params.require(:booking).permit(:traveler_id, :host_id, :conversation_id, :start_date, :end_date, :num_guests, :flexible_dates)
    end
end
