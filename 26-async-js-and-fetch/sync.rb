require 'rest-client'
require 'json'
require 'pry'

puts "Getting you a pokemon..."

response = RestClient.get("https://pokeapi.co/api/v2/pokemon/1/")
# JavaScript Object Notation
pokemon = JSON.parse(response)

# binding.pry

puts "Your pokemon is: #{pokemon["name"]}"