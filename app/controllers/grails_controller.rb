class GrailsController < ApplicationController

    def create 
        grail = current_user.grails.create!(grail_params)
        render json: grail, status: :created
    end 

    def index
        grails = Grail.all 
        render json: grails  
    end

    def show 
        grail = Grail.find(params[:id])
        render json :grail
    end
end
