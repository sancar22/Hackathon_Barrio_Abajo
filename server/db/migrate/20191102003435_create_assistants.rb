class CreateAssistants < ActiveRecord::Migration[6.0]
  def change
    create_table :assistants do |t|
      t.references :user, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
