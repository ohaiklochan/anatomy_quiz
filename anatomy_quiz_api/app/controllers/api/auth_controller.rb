class Api::AuthController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
          render json: user
        else
          render json: {error: 'User is invalid'}, status: 401
        end
    end
    
      def show
        token = request.headers['Authorization']
        user = User.find_by(id: token)
        if user
          render json: user
        else
          render({json: {error: 'Invalid token'}, status: 401})
        end
    end
end
