class Customer < ApplicationRecord

  # STATE_CODES = [ 
  #   "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", 
  #   "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", 
  #   "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", 
  #   "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", 
  #   "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", 
  #   "VA", "WA", "WV", "WI", "WY" 
  # ]

  STATES_CITIES = {
    "NY" => [
      "New York",
      "Brooklyn",
      "The Bronx"
    ],
    "IA" => [
      "Burlington",
      "Fort Madison"
    ],
    "IL" => [
      "Chicago",
      "Oak Park",
      "Moline"
    ]
  }

  has_many :orders
  has_many :meal_types, through: :orders

  validate :city, :city_is_in_the_right_state #custom

  validates :name, :address, :city, :state, :zip, presence: true
  # validates_presence_of :name

  validates :state, inclusion: { 
    in: STATES_CITIES.keys, 
    message: "%{value} is not a valid state" 
  }

  def city_is_in_the_right_state
    unless STATES_CITIES[self.state] && STATES_CITIES[self.state].include?(self.city)
      self.errors.add(:city, "does not exist in the state you entered")
    end
  end


end
