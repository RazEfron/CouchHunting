class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :location_id, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :gender, null: false
      t.date :birth_date, null: false

      t.index :location_id
      t.index :email, unique: true
      t.timestamps
    end
   
  end
end

