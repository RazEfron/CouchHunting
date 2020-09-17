class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :traveler_id, null: false
      t.integer :host_id, null: false
      t.integer :conversation_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.boolean :flexible_dates, :default =>  false
      t.integer :num_guests, null: false
      t.string :status, :default => "pending"

      t.timestamps
    end
      add_index :bookings, :traveler_id
      add_index :bookings, :conversation_id
  end
end
