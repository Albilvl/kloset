class ItemsController < ApplicationController
    def  create
        item = Item.create!(item_params)
        render json: item, status: :created
    end

    def index
        items = Item.all 
        render json: items  
    end

    def show 
        item = Item.find(params[:id])
        render json :item
    end
end
