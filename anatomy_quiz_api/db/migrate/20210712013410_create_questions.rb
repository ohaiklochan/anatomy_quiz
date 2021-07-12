class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :first_answer
      t.string :second_answer
      t.string :third_answer
      t.string :fourth_answer
      t.string :correct_answer
      t.bigint :user_id

      t.timestamps
    end
  end
end
