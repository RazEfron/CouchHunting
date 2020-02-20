# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Profile.delete_all
Location.delete_all
User.delete_all

# /////////users/////////////////////users/////////////////////users/////////////////////users////////////

raz = User.create({first_name: 'Raz', last_name: 'Efron', email: 'razefron01@gmail.com', password: '123456'})
stav = User.create({first_name: 'Stav', last_name: 'Efron', email: 'stavefron@gmail.com', password: '123456'})
jesse = User.create({first_name: 'Jesse', last_name: 'Berkowitz', email: 'jesseberkowitz1@gmail.com', password: '123456'})
olivia = User.create({first_name: 'Olivia', last_name: 'Benjamin', email: 'olivia@gmail.com', password: '123456'})
zach = User.create({first_name: 'Zach', last_name: 'Staggers', email: 'zach@gmail.com', password: '123456'})
alex = User.create({first_name: 'Alex', last_name: 'Levin', email: 'alex@gmail.com', password: '123456'})
tamar = User.create({first_name: 'Tamar', last_name: 'Talmon', email: 'tamar@gmail.com', password: '123456'})
lilach = User.create({first_name: 'Lilach', last_name: 'Heller', email: 'lilach@gmail.com', password: '123456'})
andrea = User.create({first_name: 'Andrea', last_name: 'Assael', email: 'andrea@gmail.com', password: '123456'})
barbara = User.create({first_name: 'Barbara', last_name: 'Zarou', email: 'barbara@gmail.com', password: '123456'})
gilad = User.create({first_name: 'Gilad', last_name: 'Ben-david', email: 'gilad@gmail.com', password: '123456'})
sharon = User.create({first_name: 'Sharon', last_name: 'Diskin', email: 'sharon@gmail.com', password: '123456'})
noga = User.create({first_name: 'Noga', last_name: 'Hurvitz', email: 'noga@gmail.com', password: '123456'})
yasmin = User.create({first_name: 'Yasmin', last_name: 'Yablonko', email: 'yasmin@gmail.com', password: '123456'})
amos = User.create({first_name: 'Amos', last_name: 'Brison', email: 'amos@gmail.com', password: '123456'})
maayan = User.create({first_name: 'Maayan', last_name: 'Talmon', email: 'maayan@gmail.com', password: '123456'})
goni = User.create({first_name: 'Goni', last_name: 'Sondak', email: 'goni@gmail.com', password: '123456'})



# ////////locations/////////////////locations/////////////////locations/////////////////locations/////////

nyc = Location.create({city: 'New York City', country: 'United States of America'})
jerusalem = Location.create({city: 'Jerusalem', country: 'Israel'})
tlv = Location.create({city: 'Tel-aviv', country: 'Israel'})
warsaw = Location.create({city: 'Warsaw', country: 'Poland'})
Katmandu = Location.create({city: 'Katmandu', country: 'Nepal'})

# /////////profiles/////////////////////profiles/////////////////////profiles/////////////////////profiles////////////

raz_profile = Profile.create!({
                                user_id: raz.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "02/05/1994", 
                                gender: "other", 
                                occupation: "cook", 
                                about_me: "I'm cool, come stay with me", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "none"})
stav_profile = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
stav_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
                                                                

# /////////profiles/////////////////////profiles/////////////////////profiles/////////////////////profiles////////////                                

demo_home = Home.create!({
    owner_id: User.first.id, 
    max_guest_num: 3, 
    last_minute_ok: "true", 
    kid_friendly: "true", 
    pet_friendly: "false", 
    smoking_allowed: "false", 
    sleeping_arrangments: "Private Room", 
    sleeping_arrangment_descreption: "Nice spacious compy private room with a big window",
    additional_information: "Two roomates"
})

demo_home2 = Home.create!({
    owner_id: demo_user2.id, 
    max_guest_num: 1, 
    last_minute_ok: "true", 
    kid_friendly: "true", 
    pet_friendly: "false", 
    smoking_allowed: "false", 
    sleeping_arrangments: "Private Room", 
    sleeping_arrangment_descreption: "Nice spacious compy private room with a big window",
    additional_information: "Two roomates"
})