@homes.each do |home|
  json.set! home.id do
    json.extract! home, :id, :owner_id, :max_guest_num, :last_minute_ok, :kid_friendly, :pet_friendly, :smoking_allowed, :sleeping_arrangments
  end
end