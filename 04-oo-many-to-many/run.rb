require 'pry'
require_relative './models/alien_species'
require_relative './models/planet'
require_relative './models/colony'

humans = AlienSpecies.new("human", "all kinds", "earth?")
AlienSpecies.new("martian", "marzanian", "mars")
protoss = AlienSpecies.new("protoss", "protozian", "protozoa")

earth = Planet.new("earth", "all kinds")
mars = Planet.new("mars", "dry")

Colony.new("nyc", 8000000, earth, protoss)
Colony.new("san fran", 5000000, earth, humans)
Colony.new("area 51", 10, mars, humans)

binding.pry
"ok"

# earth	all kinds
# mars	dry

# human	all kinds	earth?
# martian	marzanian	mars
# protoss	protozian	protozoa