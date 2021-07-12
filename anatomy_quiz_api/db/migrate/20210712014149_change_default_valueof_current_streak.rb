class ChangeDefaultValueofCurrentStreak < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :current_streak, :integer, :default => 0
  end
end
