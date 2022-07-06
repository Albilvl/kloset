class ItemsController < ApplicationController



    def  create
        item =  current_user.items.create!(item_params)
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

    def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content
    end

    private 
    def item_params
        params.permit(:name, :brand, :item_type, :weather, :occasion, :color, :dirty, :image, :user_id)
    end
end
