class Api::ProfilesController < ApplicationController
    def index
        @profiles = Profile.all
        render :index
    end

    def show 
        @profile = Profile.find(params[:id])
        render :show
    end

    def create
        
        @profile = Profile.new(profiles_params)
        if @profile.save
            render :show
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def update
        @profile = Profile.find(params[:id])

        if @profile.update(profile)
            render :show
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def profiles_params
        params.require(:profile).permit(:user_id, :location_id, :hosting_status, :date_of_birth, :gender, :occupation, :about_me, :profile_pic_url, :spoken_languages, :interests)
    end
end

  