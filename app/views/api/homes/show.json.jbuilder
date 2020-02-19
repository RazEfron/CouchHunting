#  
json.extract! @home, :id, :owner_id, :max_guest_num, :last_minute_ok, :kid_friendly, :pet_friendly, :smoking_allowed, :sleeping_arrangments, :sleeping_arrangment_descreption, :additional_information
json.photoids @home.photos.ids
