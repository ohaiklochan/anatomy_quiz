class ChangeLastQuestionAnsweredDefaultValue < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :last_question_answered_id, :integer, :default => 0
  end
end
