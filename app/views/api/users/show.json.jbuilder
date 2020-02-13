debugger
json.extract! @user, :id, :first_name, :last_name, :email 

json.profile_id @user.profile.id
# json.has_profile @user.profile ? true : false