require_relative "config/environment"


prompt = TTY::Prompt.new

# Net::HTTP.get('www.googleapis.com', '/books/v1/volumes?q=puppies', :use_ssl => true)

puts "What do you want to search for?"
search_term = gets.chomp

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{ search_term }")

books_hash = JSON.parse(response.body)

choices = books_hash["items"].map do |book|
  {
    name: book["volumeInfo"]["title"],
    value: book["id"]
  }
end

selected = prompt.select("Choose your destiny?", choices)


# titles.each_with_index do |title, index|
# puts "#{ index + 1 }). #{ title }"
# end

# # index = gets

binding.pry



# 