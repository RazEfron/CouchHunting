class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false
      t.string :hosting_status, null: false
      t.date :date_of_birth, null: false
      t.string :gender, null: false
      t.string :occupation
      t.text :about_me
      t.string :profile_pic_url
      t.string :spoken_languages
      t.string :interests

      t.index :user_id
      t.index :location_id

      t.timestamps
    end
  end
end
