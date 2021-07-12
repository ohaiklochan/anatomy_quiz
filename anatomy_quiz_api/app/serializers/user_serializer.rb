class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :password, :current_streak, :highest_streak, :last_question_answered_id
end
