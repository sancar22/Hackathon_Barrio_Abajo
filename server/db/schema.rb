# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_01_212431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assistants", force: :cascade do |t|
    t.bigint "users_id"
    t.bigint "events_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["events_id"], name: "index_assistants_on_events_id"
    t.index ["users_id"], name: "index_assistants_on_users_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "title"
    t.text "text"
    t.bigint "users_id"
    t.bigint "events_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["events_id"], name: "index_comments_on_events_id"
    t.index ["users_id"], name: "index_comments_on_users_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "date"
    t.string "place"
    t.string "contact"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "name"
    t.bigint "events_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["events_id"], name: "index_images_on_events_id"
  end

  create_table "owners", force: :cascade do |t|
    t.bigint "users_id"
    t.bigint "events_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["events_id"], name: "index_owners_on_events_id"
    t.index ["users_id"], name: "index_owners_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "last_name"
    t.string "password_digest"
    t.string "email"
    t.string "cel"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "assistants", "events", column: "events_id"
  add_foreign_key "assistants", "users", column: "users_id"
  add_foreign_key "comments", "events", column: "events_id"
  add_foreign_key "comments", "users", column: "users_id"
  add_foreign_key "images", "events", column: "events_id"
  add_foreign_key "owners", "events", column: "events_id"
  add_foreign_key "owners", "users", column: "users_id"
end
