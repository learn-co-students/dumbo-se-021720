class Planet

  @@all = []

  attr_reader :name, :climate

  def initialize(name, climate)
    @name = name
    @climate = climate

    @@all << self
  end

  def colonies
    Colony.all.select do |colony_instance|
      colony_instance.planet == self
    end
  end

  def alien_species
    self.colonies.map do |colony_instance|
      colony_instance.alien_species
    end
  end

  def self.all
    @@all
  end

end