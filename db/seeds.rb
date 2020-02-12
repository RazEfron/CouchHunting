# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# /////////users////////////

demo_user = User.create({first_name: 'Raz', last_name: 'Efron', email: 'razefron01@gmail.com', password: '123456'})
demo_user = User.create({first_name: 'Raz', last_name: 'Efron', email: 'razefron02@gmail.com', password: '123456'})

# ////////locations/////////

nyc = Location.create({city: 'New York City', country: 'United States of America'})
jerusalem = Location.create({city: 'Jerusalem', country: 'Israel'})
TLV = Location.create({city: 'Tel-aviv', country: 'Israel'})
warsaw = Location.create({city: 'Warsaw', country: 'Poland'})
Katmandu = Location.create({city: 'Katmandu', country: 'Nepal'})