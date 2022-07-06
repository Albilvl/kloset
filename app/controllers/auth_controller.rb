class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create, :auto_login]
    def create
        @user = User.find_by!(username: params[:username])

       if @user&.authenticate(params[:password])
        @token = encode_token({ user_id: @user.id })   
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :accepted 
      else
        render json: {error: "Invalid username or password" }, status: :unauthorized
      end
    end
  
    def auto_login
      @token = params[:token]
      user = User.find(JWT.decode(@token, "put your secret password here", true, algorithm: 'HS256')[0]["user_id"])
      render json: user
    end
end
