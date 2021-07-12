class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      render json: @user
    else
      render json: {errors:"I cannot create this user"}
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.valid?
      @user.save
      render json: @user
    else
      render json: {errors: "I cannot update this user"}
    end
  end

  def ranked_users
    @users = User.all.sort_by{|u| u.highest_streak}.reverse
    render json: @users
  end

  # DELETE /users/1
  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :first_name, :email, :password_digest, :current_streak, :highest_streak, :last_question_answered_id)
    end
end
