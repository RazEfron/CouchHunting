@users.each do |user|
    json.set! user.id do
        # debugger
        json.extract! user, :id, :first_name, :last_name, :email, :profile_id
        json.profile_id user.profile ? user.profile.id : 'null'
    end
end

