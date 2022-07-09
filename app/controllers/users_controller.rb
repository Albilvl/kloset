class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def myItems
        items = current_user.items.all
        render json: items
    end

    def myGrails
        grails = current_user.grails.all
        render json: grails
    end

    def update
        @current_user.update!(user_params)
        render json: @current_user
    end

    def myLaundry
        items = current_user.items.where(dirty: true)
        render json: items
    end

    private
    def user_params
        params.permit(:username, :password, :email, :top_size, :pants_size, :shoe_size, :avatar, :color1, :color2)
    end
end
