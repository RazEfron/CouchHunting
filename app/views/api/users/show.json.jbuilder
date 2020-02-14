json.extract! @user, :id, :first_name, :last_name, :email, :profile_id
json.profile_id @user.profile ? @user.profile.id : 'null'
json.profile @user.profile
json.location_id @user.profile.location_id ? @user.profile.location_id : 'null'
json.location @user.profile.location