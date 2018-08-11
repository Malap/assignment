class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name, null: :false
      t.string :number, null: :false
      t.timestamps null: false
    end
  end
end
