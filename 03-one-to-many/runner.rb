require 'pry'
require_relative './models/tweet'
require_relative './models/account'


coffee_dad = Account.new("coffee_dad")
lizzo = Account.new("lizzo")


p coffee_dad.username # a reader method for the username




# that takes a message, creates a new tweet, and adds it to the user's tweet collection
twit = coffee_dad.post_tweet("having coffee#") 
coffee_dad.post_tweet("drinking a cup #of coffee")
coffee_dad.post_tweet("Death will come to us all")

lizzo.post_tweet("I just took a DNA test")
lizzo.post_tweet("If he don't love you anymore")


# p lizzo.tweets #that returns an array of Tweet instances




binding.pry

false

