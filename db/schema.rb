# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_16_002707) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "max_guest_num", default: 0, null: false
    t.boolean "last_minute_ok", default: false, null: false
    t.boolean "kid_friendly", default: false, null: false
    t.boolean "pet_friendly", default: false, null: false
    t.boolean "smoking_allowed", default: false, null: false
    t.string "sleeping_arrangments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "sleeping_arrangment_descreption"
    t.text "additional_information"
  end

  create_table "locations", force: :cascade do |t|
    t.string "city", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "location_id", null: false
    t.string "hosting_status", null: false
    t.date "date_of_birth", null: false
    t.string "gender", null: false
    t.string "occupation"
    t.text "about_me"
    t.string "profile_pic_url"
    t.string "spoken_languages"
    t.string "interests"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_profiles_on_location_id"
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "profile_id"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
