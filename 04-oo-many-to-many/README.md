Many to Many Relationship
===

## SWBATs
- Implement both sides of a many to many relationships
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate Single Source of Truth by not storing collections of objects on other objects
- Demonstrate Single Source of Truth by not storing one object in multiple collections


## Objectives
- Review Relationships (one to many => has many, belongs to)
- Expand on relationships to express many to many
  - We'll build out a new relationship from scratch to teach this concept

Tweet >- User

Team -< Player

Driver -< Ride >- Passenger
Driver has many Rides
Driver has many Passengers through Rides

Passenger has many Rides
Passenger has many Drivers through Rides

Movie -< Role >- Actor

Model -< Car >- Make

Journalist >- Newspaper -< Subscription >- Reader

Device -< Photo -< PhotoTag >- Tag

Band -< Song >- Listener

For every one X, how many Y?
For every one Y, how many X?

AlienSpecies -< Colony >- Planet
AlienSpecies has many Colonies
AlienSpecies has many Planets hrough Colonies

Planet has many Colonies
Planet has many AlienSpecies hrough Colonies