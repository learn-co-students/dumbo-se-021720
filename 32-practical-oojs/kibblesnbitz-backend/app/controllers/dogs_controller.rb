class DogsController < ApplicationController

  # request: GET /dogs
  def index
    dogs = Dog.all

    # response
    # render (:index) -> HTML
    render json: dogs
  end

  # request: POST /dogs
  def create
    # what data we can access from the request?
    # access data from params (comes from the BODY of the request)
    breed = Breed.find_or_create_by(name: params[:breed_name])

    dog = Dog.create(
      name: params[:name],
      age: params[:age],
      profile_pic: params[:profile_pic],
      bio: params[:bio],
      match: params[:match],
      breed: breed,
    )
    
    if dog.valid?
      # what to send a response?
      render json: dog
    else 
      render json: { message: "woops" }, status: 400
    end
  end

  # Request: DELETE /dogs/:id
  def destroy
    # delete the dog from the db
    dog = Dog.find(params[:id])
    dog.destroy
    
    # send some response
    render json: {}
  end

  # Request: PATCH /dogs/:id/match
  def match
    # find the dog
    dog = Dog.find(params[:id])
    # toggle match from true to false or vice verse
    dog.update(match: !dog.match)

    # send a response with the updated dog
    render json: dog
  end

end
