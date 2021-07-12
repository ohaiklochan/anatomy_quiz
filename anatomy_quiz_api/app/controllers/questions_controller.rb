class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    @questions = Question.all.sort_by{|q| q.id}

    render json: @questions
  end

  # GET /questions/1
  def show
    @question = Question.find(params[:id])
    render json: @question
  end

  # POST /questions
  def create
    @question = @user.questions.build(question_params)

    if @question.valid?
      @question.save
      render json: @question
    else
      render json: {errors:"I cannot create that question"}
    end
  end

  # PATCH/PUT /questions/1
  def update
    @question = Question.find(params[:id])
    @question.update(question_params)
    if (@question.valid?)
        @question.save
      render json: @question
    else
      render json: {errors:"I cannot update that question"}
    end
  end

  # DELETE /questions/1
  def destroy
    @question = Question.find(params[:id])
    @question.destroy
  end

  private
    
    def set_user
      @user = User.find_by(id: params[:user_id])
    end

    # Only allow a list of trusted parameters through.
    def question_params
      params.require(:question).permit(:text, :first_answer, :second_answer, :third_answer, :fourth_answer, :correct_answer, :user_id)
    end
end
