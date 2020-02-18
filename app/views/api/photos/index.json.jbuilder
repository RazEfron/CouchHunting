@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :photoable_id, :photoable_type, :photo_url, :caption, :main
  end
end