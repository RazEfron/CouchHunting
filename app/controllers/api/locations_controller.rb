class Api::LocationsController < ApplicationController
    def index 
        @locations = Location.all
        render :index
    end

    def show
        @location = Location.find(params[:id])
        render :show
    end

    def location_params
        params.require(:location).permit(:city, :country)
    end
end
