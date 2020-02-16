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
TLV = Location.create({city: 'Tel-aviv', country: 'Israel'})
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
                                user_id: User.find(2).id, 
                                location_id: TLV.id, 
                                hosting_status: "accepting guests", 
                                date_of_birth: "09/11/1985", 
                                gender: "other", 
                                occupation: "hydrotherapyst", 
                                about_me: "I'm nice!!", 
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
    owner_id: User.find(2).id, 
    max_guest_num: 1, 
    last_minute_ok: "true", 
    kid_friendly: "true", 
    pet_friendly: "false", 
    smoking_allowed: "false", 
    sleeping_arrangments: "Private Room", 
    sleeping_arrangment_descreption: "Nice spacious compy private room with a big window",
    additional_information: "Two roomates"
})