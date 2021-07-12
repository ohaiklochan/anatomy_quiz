class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :email
      t.string :password_digest
      t.integer :current_streak
      t.integer :highest_streak

      t.timestamps
    end
  end
end