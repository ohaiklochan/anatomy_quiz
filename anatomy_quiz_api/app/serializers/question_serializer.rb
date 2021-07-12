class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :text, :first_answer, :second_answer, :third_answer, :fourth_answer, :correct_answer, :user
  belongs_to :user
end
