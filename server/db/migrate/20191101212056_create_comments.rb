class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :title
      t.text :text
      t.references :users, foreign_key: true
      t.references :events, foreign_key: true
      t.timestamps
    end
  end
end
