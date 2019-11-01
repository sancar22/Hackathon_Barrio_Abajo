class CreateOwners < ActiveRecord::Migration[6.0]
  def change
    create_table :owners do |t|
      t.references :users, foreign_key: true
      t.references :events, foreign_key: true
      t.timestamps
    end
  end
end
