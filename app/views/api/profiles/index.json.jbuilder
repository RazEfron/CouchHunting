@profiles.each do |profile|
  json.set! profile.id do
    json.extract! @profile, :id, :user_id, :hosting_status, :date_of_birth, :gender, :occupation, :about_me, :profile_pic_url, :spoken_languages, :interests
  end
end