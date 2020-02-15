@users.each do |user|
    json.set! user.id do
        # debugger
        json.extract! user, :id, :first_name, :last_name, :email, :profile_id
        json.profile_id user.profile ? user.profile.id : 'null'
        json.profile user.profile
        json.location_id user.profile ? user.profile.location_id : 'null'
        json.location user.profile ? user.profile.location : 'null'
        json.home_id user.home ? user.home.id : 'null'
        json.home user.home ? user.home : 'null'
    end
end

