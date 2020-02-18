  
@photos.each do |p|
    
    if p.photo.attached?
      json.set! p.id do
        json.extract! p, :id, :photoable_id, :photoable_type, :caption, :main
        json.photoUrl url_for(p.photo)
    end
  end
end