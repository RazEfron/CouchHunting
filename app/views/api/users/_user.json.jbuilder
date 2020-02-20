json.extract! user, :id, :first_name, :last_name, :email 
json.profile_id user.profile ? user.profile.id : 'null'
json.location_id user.profile ? user.profile.location_id : 'null'
json.home_id user.profile ? user.home.id : ""
