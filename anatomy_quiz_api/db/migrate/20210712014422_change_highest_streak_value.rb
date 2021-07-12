class ChangeHighestStreakValue < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :highest_streak, :integer, :default => 0
  end
end
