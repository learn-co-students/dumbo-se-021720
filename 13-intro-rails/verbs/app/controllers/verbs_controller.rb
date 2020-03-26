class VerbsController < ApplicationController

  def index
    # sdfjksdfjk
    @verbs = Verb.all
  end

  def show
    @verb = Verb.find(params[:id])
  end

  # new, create, edit, update, destroy

end
