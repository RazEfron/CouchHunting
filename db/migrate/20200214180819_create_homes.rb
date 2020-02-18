class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.integer :owner_id, null: false
      t.integer :max_guest_num, null: false, :default =>  0
      t.boolean :last_minute_ok, null: false, :default =>  false
      t.boolean :kid_friendly, null: false, :default =>  false
      t.boolean :pet_friendly, null: false, :default =>  false
      t.boolean :smoking_allowed, null: false, :default =>  false
      t.string :sleeping_arrangments

      t.timestamps
    end
  end
end

