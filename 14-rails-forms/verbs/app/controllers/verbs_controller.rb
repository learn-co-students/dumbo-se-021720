class VerbsController < ApplicationController

  def index
    # sdfjksdfjk
    @verbs = Verb.all
  end

  def show
    @verb = Verb.find(params[:id])
  end

  def new
    @verb = Verb.new
  end

  def create
    @verb = Verb.create(verb_params)
    redirect_to @verb
  end

  def edit
    @verb = Verb.find(params[:id])
  end

  def update
    @verb = Verb.find(params[:id])
    @verb.update(verb_params)
    redirect_to @verb #verb_path(@verb) # "/verbs/#{ @verb.id }"
  end

  #destroy


  private

  def verb_params
    params.require(:verb).permit(:name, :conjugations)
  end

end
