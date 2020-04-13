# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
dogs_array = [
  {
    "id": 1,
    "name": "Fezzik",
    "age": 10,
    "bio": "Likes: soccer balls, peanut butter, cats. Dislikes: chairs. ",
    "profile_pic": "https://vetstreet.brightspotcdn.com/dims4/default/c38213c/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fbc%2F8bcb00a38911e087a80050568d634f%2Ffile%2Fold-english-sheepdog-2-645mk062411.jpg",
    "match": false,
    "breed_name": "sheepdog"
  },
  {
    "id": 2,
    "name": "Wallace",
    "age": 13,
    "bio": "Cybernetically enhanced with speed wheels for maximum stick chasing speed. Belly rubs a must.",
    "profile_pic": "https://www.handicappedpets.com/wp-content/uploads/2018/04/jack-corgi-walkin-wheels.jpg",
    "match": true,
    "breed_name": "corgi"
  },
  {
    "id": 3,
    "name": "Coda",
    "age": 3,
    "bio": "Likes: every ball, peanut butter, people. Dislikes: motorcycles. ",
    "profile_pic": "https://tinyurl.com/wxnbxuu",
    "match": false,
    "breed_name": "unknown"
  },
  {
    "id": 4,
    "name": "Tater Tot",
    "age": 10,
    "bio": "Likes: parks, laying around, cats, . Dislikes: stairs. ",
    "profile_pic": "https://i.chzbgr.com/full/9441876224/h39F6DD50/wheel",
    "match": true,
    "breed_name": "corgi"
  },
  {
    "id": 16,
    "name": "Perky",
    "age": 6,
    "bio": "Likes: large meals, large birds. Dislikes: electric knives. ",
    "profile_pic": "https://i.giphy.com/media/148ujdR19pIXWU/giphy.webp",
    "match": false,
    "breed_name": "pug"
  },
  {
    "name": "Waffles 2",
    "profile_pic": "https://i.pinimg.com/originals/22/6b/3e/226b3e39ddade735a3fc4f3a1093c0f4.jpg",
    "age": "2",
    "bio": "A real present!",
    "match": false,
    "id": 17,
    "breed_name": "chow chow"
  },
  {
    "name": "T-Bone",
    "profile_pic": "https://usa-grlk5lagedl.stackpathdns.com/production/usa/images/1585263016505404-HappyInstagramAccounts_BoobieBillie_1.png?w=1900&fit=crop&crop=faces&fm=pjpg&auto=compress",
    "age": "15",
    "bio": "All the stylez",
    "match": false,
    "id": 18,
    "breed_name": "chihuahua"
  }
]

dogs_array.each do |dog_hash|
  breed = Breed.find_or_create_by(name: dog_hash[:breed_name])

  Dog.create(
    name: dog_hash[:name],
    age: dog_hash[:age],
    profile_pic: dog_hash[:profile_pic],
    bio: dog_hash[:bio],
    match: dog_hash[:match],
    breed: breed,
  )
end