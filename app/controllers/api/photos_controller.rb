class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end

    def show 
        @photo = Photo.find(params[:id])
        debugger
        render :show
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save!
            render :show 
        else
            render json @post.errors.full_messages
        end
    end

    def update 
        @photo = Photo.find(params[:id])
        if @photo.update!(photo_params)
            render :show 
        else
            render json @post.errors.full_messages
        end
    end

    def destroy 
        @photo = Photo.find(params[:id])
        @photo.destroy
    end

    def photo_params
        params.require(:photo).permit(:photo, :caption, :photoable_id, :photoable_type, :main)
    end
end
