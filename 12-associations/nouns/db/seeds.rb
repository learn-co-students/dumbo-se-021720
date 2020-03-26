Noun.destroy_all
Purchase.destroy_all
ReceiptItems.destroy_all

Noun.create!(name: "Cantaloupe", definition: "An orange melone", usefulness: 5)
Noun.create!(name: "Computer", definition:  "A box with a light on it", usefulness: 5)
Noun.create!(name: "Caribou", definition:  "A cold-weather deer", usefulness: 5)
Noun.create!(name: "Coca-Cola", definition:  "It's like water, but bad for you", usefulness: 5)
Noun.create!(name: "Corn", definition:  "A starchy food", usefulness: 5)
Noun.create!(name: "Banana", definition:  "A fruit that also functions as a telephone", usefulness: 5)
Noun.create!(name: "Graphite", definition:  "Less toxic than lead", usefulness: 5)
Noun.create!(name: "Pineapple", definition:  "Great on pizza", usefulness: 5)


7.times do 
  Purchase.create!(buyer_name: Faker::Name.name, delivery_date: Faker::Date.forward(days: 14))
end

# Faker::Number.between(from: 3, to: 10)

puts "done"