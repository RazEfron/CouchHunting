require 'open-uri';

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Home.delete_all
Profile.delete_all
Location.delete_all
User.delete_all

# /////////users/////////////////////users/////////////////////users/////////////////////users////////////

raz = User.create({first_name: 'Raz', last_name: 'Efron', email: 'razefron01@gmail.com', password: '123456'}) #nyc
stav = User.create({first_name: 'Stav', last_name: 'Efron', email: 'stavefron@gmail.com', password: '123456'})#jerusalem
jesse = User.create({first_name: 'Jesse', last_name: 'Berkowitz', email: 'jesseberkowitz1@gmail.com', password: '123456'})#nyc
olivia = User.create({first_name: 'Olivia', last_name: 'Benjamin', email: 'olivia@gmail.com', password: '123456'})#tel-aviv
zach = User.create({first_name: 'Zach', last_name: 'Staggers', email: 'zach@gmail.com', password: '123456'})#nyc
alex = User.create({first_name: 'Alex', last_name: 'Levin', email: 'alex@gmail.com', password: '123456'})#nyc
tamar = User.create({first_name: 'Tamar', last_name: 'Talmon', email: 'tamar@gmail.com', password: '123456'})#tel-aviv
lilach = User.create({first_name: 'Lilach', last_name: 'Heller', email: 'lilach@gmail.com', password: '123456'})#jerusalem
andrea = User.create({first_name: 'Andrea', last_name: 'Assael', email: 'andrea@gmail.com', password: '123456'})#warsaw
barbara = User.create({first_name: 'Barbara', last_name: 'Zarou', email: 'barbara@gmail.com', password: '123456'})#warsaw
gilad = User.create({first_name: 'Gilad', last_name: 'Ben-david', email: 'gilad@gmail.com', password: '123456'})#nyc
sharon = User.create({first_name: 'Sharon', last_name: 'Diskin', email: 'sharon@gmail.com', password: '123456'})#tel-aviv
noga = User.create({first_name: 'Noga', last_name: 'Hurvitz', email: 'noga@gmail.com', password: '123456'})#tel-aviv
yasmin = User.create({first_name: 'Yasmin', last_name: 'Yablonko', email: 'yasmin@gmail.com', password: '123456'})#tel-aviv
amos = User.create({first_name: 'Amos', last_name: 'Brison', email: 'amos@gmail.com', password: '123456'})#tel-aviv
maayan = User.create({first_name: 'Maayan', last_name: 'Talmon', email: 'maayan@gmail.com', password: '123456'})#jerusalem
goni = User.create({first_name: 'Goni', last_name: 'Sondak', email: 'goni@gmail.com', password: '123456'})#katmandu



# ////////locations/////////////////locations/////////////////locations/////////////////locations/////////

nyc = Location.create({city: 'New York City', country: 'United States of America'})
jerusalem = Location.create({city: 'Jerusalem', country: 'Israel'})
tlv = Location.create({city: 'Tel-aviv', country: 'Israel'})
warsaw = Location.create({city: 'Warsaw', country: 'Poland'})
katmandu = Location.create({city: 'Katmandu', country: 'Nepal'})

# /////////profiles/////////////////////profiles/////////////////////profiles/////////////////////profiles////////////

raz_profile = Profile.create!({
                                user_id: raz.id, 
                                location_id: nyc.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "02/05/1994", 
                                gender: "other", 
                                occupation: "cook", 
                                about_me: "I moved to New York two years ago with my husband Jesse, we love meeting new people and hosting.", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "vegan cooking, coding"})
stav_profile = Profile.create!({
                                user_id: stav.id, 
                                location_id: jerusalem.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "female", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm a new mom leaving in the outskirts of jerusalem with my husband Benjamin and our new born baby, Keshet. We are both experienced travelers and would love to host anyone who needs a place to crash!!", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "cooking, yoga, carpentry"})
jesse_profile = Profile.create!({
                                user_id: jesse.id, 
                                location_id: nyc.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "17/08/1990", 
                                gender: "other", 
                                occupation: "social worker", 
                                about_me: "Born and raised in New York, moved back to the city after a few years of leaving abroad in warsaw and Israel", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "politics, art, vegan cooking"})
olivia_profile = Profile.create!({
                                user_id: olivia.id, 
                                location_id: tlv.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "04/04/1995", 
                                gender: "other", 
                                occupation: "Urban Planing", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "french, spanish English", 
                                interests: "social justice, ultimate frisby"})
zach_profile = Profile.create!({
                                user_id: zach.id, 
                                location_id: nyc.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "05/09/1986", 
                                gender: "male", 
                                occupation: "realestate agent", 
                                about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
", 
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "English", 
                                interests: "music, art"})
alex_profile = Profile.create!({
                                user_id: alex.id, 
                                location_id: nyc.id, 
                                hosting_status: " not accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm nice!!", 

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
                                profile_pic_url: "http://localhost:3000/assets/default_profile_pic-f8571514bc2a7c4f9615895db9b8a5fb1076e839f6c7f28c63301288c89a9a8e.png", 
                                spoken_languages: "Hebrew, English", 
                                interests: "traveling, art"})
                                                                

# /////////homes/////////////////////homes/////////////////////homes/////////////////////homes////////////                                

raz_home = Home.create!({
    owner_id: raz.id, 
    max_guest_num: 3, 
    last_minute_ok: "true", 
    kid_friendly: "true", 
    pet_friendly: "false", 
    smoking_allowed: "false", 
    sleeping_arrangments: "Private Room", 
    sleeping_arrangment_descreption: "Nice spacious compy private room with a big window",
    additional_information: "Two roomates"
})

stav_home = Home.create!({
    owner_id: stav.id, 
    max_guest_num: 1, 
    last_minute_ok: "true", 
    kid_friendly: "true", 
    pet_friendly: "false", 
    smoking_allowed: "false", 
    sleeping_arrangments: "Private Room", 
    sleeping_arrangment_descreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!",
    additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!"
})

jesse_home = Home.create(owner_id: jesse.id)
olivia_home = Home.create(owner_id: olivia.id)
zach_home = Home.create(owner_id: zach.id)
alex_home = Home.create(owner_id: alex.id)
tamar_home = Home.create(owner_id: tamar.id)
lilach_home = Home.create(owner_id: lilach.id)
andrea_home = Home.create(owner_id: andrea.id)
barbara_home = Home.create(owner_id: barbara.id)
gilad_home = Home.create(owner_id: gilad.id)
sharon_home = Home.create(owner_id: sharon.id)
noga_home = Home.create(owner_id: noga.id)
yasmin_home = Home.create(owner_id: yasmin.id)
amos_home = Home.create(owner_id: amos.id)
maayan_home = Home.create(owner_id: maayan.id)
goni_home = Home.create(owner_id: goni.id)

# /////////photos/////////////////////photos/////////////////////photos/////////////////////photos////////////  

alex_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/alex.jpg')

alex_photo = Photo.new(caption: "profile Picture", photoable_id: alex_profile.id, photoable_type: "Profile", main: true)

alex_photo.photo.attach(io: alex_photo_file, filename: 'alex.jpg')

alex_photo.save!

amos_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/amos.jpg')

amos_photo = Photo.new(caption: "profile Picture", photoable_id: amos_profile.id, photoable_type: "Profile", main: true)

amos_photo.photo.attach(io: amos_photo_file, filename: 'amos.jpg')

amos_photo.save!


andrea_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/andrea.jpg')

andrea_photo = Photo.new(caption: "profile Picture", photoable_id: andrea_profile.id, photoable_type: "Profile", main: true)

andrea_photo.photo.attach(io: andrea_photo_file, filename: 'andrea.jpg')

andrea_photo.save!

barbara_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/barbara.jpg')

barbara_photo = Photo.new(caption: "profile Picture", photoable_id: barbara_profile.id, photoable_type: "Profile", main: true)

barbara_photo.photo.attach(io: barbara_photo_file, filename: 'barbara.jpg')

barbara_photo.save!

gilad_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/gilad.jpg')

gilad_photo = Photo.new(caption: "profile Picture", photoable_id: gilad_profile.id, photoable_type: "Profile", main: true)

gilad_photo.photo.attach(io: gilad_photo_file, filename: 'gilad.jpg')

gilad_photo.save!


goni_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/goni.jpg')

goni_photo = Photo.new(caption: "profile Picture", photoable_id: goni_profile.id, photoable_type: "Profile", main: true)

goni_photo.photo.attach(io: goni_photo_file, filename: 'goni.jpg')

goni_photo.save!

jesse_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/jesse.jpg')

jesse_photo = Photo.new(caption: "profile Picture", photoable_id: jesse_profile.id, photoable_type: "Profile", main: true)

jesse_photo.photo.attach(io: jesse_photo_file, filename: 'jesse.jpg')

jesse_photo.save!

lilach_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/lilach.jpg')

lilach_photo = Photo.new(caption: "profile Picture", photoable_id: lilach_profile.id, photoable_type: "Profile", main: true)

lilach_photo.photo.attach(io: lilach_photo_file, filename: 'lilach.jpg')

lilach_photo.save!

maayan_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/maayan.jpg')

maayan_photo = Photo.new(caption: "profile Picture", photoable_id: maayan_profile.id, photoable_type: "Profile", main: true)

maayan_photo.photo.attach(io: maayan_photo_file, filename: 'maayan.jpg')

maayan_photo.save!

noga_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/noga.jpg')

noga_photo = Photo.new(caption: "profile Picture", photoable_id: noga_profile.id, photoable_type: "Profile", main: true)

noga_photo.photo.attach(io: noga_photo_file, filename: 'noga.jpg')

noga_photo.save!

olivia_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/olivia.jpg')

olivia_photo = Photo.new(caption: "profile Picture", photoable_id: olivia_profile.id, photoable_type: "Profile", main: true)

olivia_photo.photo.attach(io: olivia_photo_file, filename: 'olivia.jpg')

olivia_photo.save!

raz1_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/raz1.JPG')

raz1_photo = Photo.new(caption: "NY 04/19", photoable_id: raz_profile.id, photoable_type: "Profile", main: false)

raz1_photo.photo.attach(io: raz1_photo_file, filename: 'raz1.jpg')

raz1_photo.save!

raz2_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/raz2.JPG')

raz2_photo = Photo.new(caption: "NY 02/19", photoable_id: raz_profile.id, photoable_type: "Profile", main: false)

raz2_photo.photo.attach(io: raz2_photo_file, filename: 'raz2.jpg')

raz2_photo.save!

razMain_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/razMain.JPG')

razMain_photo = Photo.new(caption: "NY 01/20", photoable_id: raz_profile.id, photoable_type: "Profile", main: true)

razMain_photo.photo.attach(io: razMain_photo_file, filename: 'razMain.jpg')

razMain_photo.save!

sharon_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/sharon.jpg')

sharon_photo = Photo.new(caption: "profile Picture", photoable_id: sharon_profile.id, photoable_type: "Profile", main: true)

sharon_photo.photo.attach(io: sharon_photo_file, filename: 'sharon.jpg')

sharon_photo.save!

stav_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/stav.jpg')

stav_photo = Photo.new(caption: "profile Picture", photoable_id: stav_profile.id, photoable_type: "Profile", main: true)

stav_photo.photo.attach(io: stav_photo_file, filename: 'stav.jpg')

stav_photo.save!

tamar_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/tamar.jpg')

tamar_photo = Photo.new(caption: "profile Picture", photoable_id: tamar_profile.id, photoable_type: "Profile", main: true)

tamar_photo.photo.attach(io: tamar_photo_file, filename: 'tamar.jpg')

tamar_photo.save!

yasmin_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/yasmin.jpg')

yasmin_photo = Photo.new(caption: "profile Picture", photoable_id: yasmin_profile.id, photoable_type: "Profile", main: true)

yasmin_photo.photo.attach(io: yasmin_photo_file, filename: 'yasmin.jpg')

yasmin_photo.save!

zach_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/zach.jpg')

zach_photo = Photo.new(caption: "profile Picture", photoable_id: zach_profile.id, photoable_type: "Profile", main: true)

zach_photo.photo.attach(io: zach_photo_file, filename: 'zach.jpg')

zach_photo.save!


house1_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/house1.jpg')

house1_photo = Photo.new(caption: "profile Picture", photoable_id: raz_home.id, photoable_type: "Home", main: true)

house1_photo.photo.attach(io: house1_photo_file, filename: 'house1.jpg')

house1_photo.save!

house2_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/house2.jpg')

house2_photo = Photo.new(caption: "profile Picture", photoable_id: raz_home.id, photoable_type: "Home", main: true)

house2_photo.photo.attach(io: house2_photo_file, filename: 'house2.jpg')

house2_photo.save!

house3_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/house3.jpg')

house3_photo = Photo.new(caption: "profile Picture", photoable_id: raz_home.id, photoable_type: "Home", main: true)

house3_photo.photo.attach(io: house3_photo_file, filename: 'house3.jpg')

house3_photo.save!

house4_photo_file = open('https://couch-hunting-seed.s3.amazonaws.com/house4.jpg')

house4_photo = Photo.new(caption: "profile Picture", photoable_id: raz_home.id, photoable_type: "Home", main: true)

house4_photo.photo.attach(io: house4_photo_file, filename: 'house4.jpg')

house4_photo.save!