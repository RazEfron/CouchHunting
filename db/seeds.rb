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

# /////////users////////////

demo_user = User.create({first_name: 'Raz', last_name: 'Efron', email: 'razefron01@gmail.com', password: '123456'})
demo_user2 = User.create({first_name: 'Stav', last_name: 'Efron', email: 'stavefron@gmail.com', password: '123456'})


# ////////locations/////////

nyc = Location.create({city: 'New York City', country: 'United States of America'})
jerusalem = Location.create({city: 'Jerusalem', country: 'Israel'})
tlv = Location.create({city: 'Tel-aviv', country: 'Israel'})
warsaw = Location.create({city: 'Warsaw', country: 'Poland'})
Katmandu = Location.create({city: 'Katmandu', country: 'Nepal'})

# /////////profiles////////////

demo_profile = Profile.create!({
                                user_id: User.first.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "02/05/1994", 
                                gender: "other", 
                                occupation: "cook", 
                                about_me: "I'm cool, come stay with me", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "none"})
demo_profile2 = Profile.create!({
                                user_id: demo_user2.id, 
                                location_id: tlv.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
<<<<<<< HEAD
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm nice!!", 
=======
                                gender: "male", 
                                occupation: "musician", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "English", 
                                interests: "music, art, politics"})
tamar_profile = Profile.create!({
                                user_id: tamar.id, 
                                location_id: tlv.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "23/10/1994", 
                                gender: "female", 
                                occupation: "kindergarden teacher", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "food, music, cinema"})
lilach_profile = Profile.create!({
                                user_id: lilach.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "22/03/1994", 
                                gender: "female", 
                                occupation: "ambulance driver", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "hiking, traveling"})
andrea_profile = Profile.create!({
                                user_id: andrea.id, 
                                location_id: warsaw.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "01/06/1959", 
                                gender: "female", 
                                occupation: "shop owner", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "English", 
                                interests: "clothing, fashion, traveling"})
barbara_profile = Profile.create!({
                                user_id: barbara.id, 
                                location_id: katmandu.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "05/09/1954", 
                                gender: "female", 
                                occupation: "OB/GYN", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "English", 
                                interests: "traveling, food, books"})
gilad_profile = Profile.create!({
                                user_id: gilad.id, 
                                location_id: nyc.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "22/07/1994", 
                                gender: "other", 
                                occupation: "student", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "art, politics, history"})
sharon_profile = Profile.create!({
                                user_id: sharon.id, 
                                location_id: tlv.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "27/10/1994", 
                                gender: "female", 
                                occupation: "software engineer", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "books, computers, comedy"})
noga_profile = Profile.create!({
                                user_id: noga.id, 
                                location_id: tlv.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "27/01/1993", 
                                gender: "female", 
                                occupation: "writer", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "writing, yoga, cooking"})
yasmin_profile = Profile.create!({
                                user_id: yasmin.id, 
                                location_id: tlv.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "27/01/1993", 
                                gender: "female", 
                                occupation: "jurnalist", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English, Arabic", 
                                interests: "politics, tachnology, food"})
amos_profile = Profile.create!({
                                user_id: amos.id, 
                                location_id: tlv.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "02/02/1988", 
                                gender: "male", 
                                occupation: "artist", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "photography, cinema, art"})
maayan_profile = Profile.create!({
                                user_id: maayan.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "21/08/1997", 
                                gender: "female", 
                                occupation: "occupational therapist", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, education"})
goni_profile = Profile.create!({
                                user_id: goni.id, 
                                location_id: warsaw.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "08/07/1989", 
                                gender: "female", 
                                occupation: "school teacher", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!", 
>>>>>>> 9d298ea... search working
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "none"})

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