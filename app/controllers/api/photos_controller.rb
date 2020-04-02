class Api::PhotosController < ApplicationController
    def index
        # 
        if params[:idsArray]
            @photos = Photo.all.where(id: params[:idsArray])
        else
            @photos = Photo.all
        end
        render :index
    end

    def show 
        @photo = Photo.find(params[:id])
        render :show
    end

    def create
           
        @photo = Photo.new(photo_params)
           
        if @photo.save!
            render :show 
        else
            render json: @post.errors.full_messages
        end
    end

    def update 
        @photo = Photo.find(params[:id])
        if @photo.update!(photo_params)
            render :show 
        else
            render json @photo.errors.full_messages
        end
    end

    def destroy 
            
        @photo = Photo.find(params[:id])
            
        @photo.delete
    end

    def photo_params
        params.require(:photo).permit(:photo, :caption, :photoable_id, :photoable_type, :main)
    end
end
