json.extract! @profile, :id, :user_id, :hosting_status, :date_of_birth, :gender, :occupation, :about_me, :profile_pic_url, :spoken_languages, :interests, :location_id
json.photoids @profile.photos.ids
json.profile_photo_id @profile.photos.select { |p| p.main }.empty? ? '' : @profile.photos.select { |p| p.main }.id
