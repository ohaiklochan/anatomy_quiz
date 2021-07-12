require "test_helper"

class QuestionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @question = questions(:one)
  end

  test "should get index" do
    get questions_url, as: :json
    assert_response :success
  end

  test "should create question" do
    assert_difference('Question.count') do
      post questions_url, params: { question: { correct_answer: @question.correct_answer, first_answer: @question.first_answer, fourth_answer: @question.fourth_answer, second_answer: @question.second_answer, text: @question.text, third_answer: @question.third_answer, user_id: @question.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show question" do
    get question_url(@question), as: :json
    assert_response :success
  end

  test "should update question" do
    patch question_url(@question), params: { question: { correct_answer: @question.correct_answer, first_answer: @question.first_answer, fourth_answer: @question.fourth_answer, second_answer: @question.second_answer, text: @question.text, third_answer: @question.third_answer, user_id: @question.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy question" do
    assert_difference('Question.count', -1) do
      delete question_url(@question), as: :json
    end

    assert_response 204
  end
end
