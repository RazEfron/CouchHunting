class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end

    def show 
        @photo = Photo
            .where('photoable_type == ?', 'profile')
            .where('id == ?', params[:id])
        render :show
    end

    def photo_params
        params.require(:photo).permit(:photo_url, :caption, :photoable_id, :photoable_type, :main)
    end
end
