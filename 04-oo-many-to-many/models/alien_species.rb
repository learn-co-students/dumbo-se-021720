class AlienSpecies

  @@all = []

  attr_reader :race, :language, :home_planet

  def initialize(race, language, home_planet)
    @race = race
    @language = language
    @home_planet = home_planet

    @@all << self
  end

  def colonies
    Colony.all.select do |colony_instance|
      colony_instance.alien_species == self
    end
  end

  def self.all
    @@all
  end

end