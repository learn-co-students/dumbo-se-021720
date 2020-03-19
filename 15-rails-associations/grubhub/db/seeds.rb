# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


eric = Customer.create!(name: "Eric")
ryan = Customer.create!(name: "Ryan")
andy = Customer.create!(name: "Andy")

burrito = MealType.create!(name: "Burrito")
pizza = MealType.create!(name: "Pizza")
pho = MealType.create!(name: "Pho")
gyro = MealType.create!(name: "Gyro")
chickee_rice = MealType.create!(name: "Halal Chickee rice")
