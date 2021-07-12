class AddLastQuestionAnswered < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :last_question_answered_id, :integer
  end
end
