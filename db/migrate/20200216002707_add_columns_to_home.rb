class AddColumnsToHome < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :sleeping_arrangment_descreption, :text
    add_column :homes, :additional_information, :text

  end
end
