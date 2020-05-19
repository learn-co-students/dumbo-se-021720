# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

coffee_dad = User.create(
  username: "coffee_dad",
  bio: "Just a coffee lovin dad",
  photo: "https://pbs.twimg.com/profile_images/378800000823347939/036f78135425d19367fcbb76ef58e86d_400x400.jpeg"
)

tea_mom = User.create(
  username: "tea_mom",
  bio: "Tea 4 Me",
  photo: "https://pbs.twimg.com/profile_images/2072106723/Yeah__Cute_400x400.jpg"
)

coffee_dad.tweets.create(message: "Having a# cuppa")
coffee_dad.tweets.create(message: "Living the java life")
coffee_dad.tweets.create(message: "Time for a #coffee")

tea_mom.tweets.create(message: "T T T")
tea_mom.tweets.create(message: "Tea > Coffee")