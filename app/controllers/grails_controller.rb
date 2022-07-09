class GrailsController < ApplicationController

    def create 
        grail = current_user.grails.create!(grail_params)
        render json: grail, status: :created
    end 

    def index
        grails = current_user.grails.all 
        render json: grails  
    end

    def show 
        grail = current_user.grails.find(params[:id])
        render json :grail
    end

    def destroy
        grail = current_user.grails.find(params[:id])
        grail.destroy
    end

    private 
    def grail_params
        params.permit(:name, :brand, :grail_type, :weather, :occasion, :color, :link, :image, :user_id)
    end

end
