class Api::HomesController < ApplicationController
    def index
        @homes = Home.all
        render :index
    end

    def show 
        @home = Home.find(params[:id])
        render :show
    end

    def create
        
        @home = Home.new(home_params)
        if @home.save
            render :show
        else
            render json: @home.errors.full_messages, status: 422
        end
    end

    def update
        @home = Home.find(params[:id])

        if @home.update(home_params)
            render :show
        else
            render json: @home.errors.full_messages, status: 422
        end
    end

    def home_params
        params.require(:home).permit(:owner_id, :max_guest_num, :last_minute_ok, :kid_friendly, :pet_friendly, :smoking_allowed, :sleeping_arrangments)
    end
end
