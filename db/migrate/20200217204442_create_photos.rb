class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :photo_url, null: false
      t.string :caption
      t.bigint  :photoable_id
      t.string  :photoable_type
      t.boolean :main

      t.timestamps
    end
    add_index :photos, [:photoable_type, :photoable_id]
  end
end
