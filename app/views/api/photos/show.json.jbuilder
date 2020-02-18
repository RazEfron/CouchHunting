    debugger
    json.extract! @photo, :id, :photoable_id, :photoable_type, :caption, :main
    json.photoUrl url_for(@photo.photo)