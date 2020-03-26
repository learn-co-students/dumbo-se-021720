class NounsController < ApplicationController

  get "/nouns" do #index
    @nouns = Noun.search(params["q"])
    erb :"nouns/index"
  end

  #new
  get "/nouns/new" do
    @noun = Noun.new
    erb :"nouns/new"
  end

  get '/nouns/:id' do #show
    @noun = Noun.find(params[:id])
    erb :"nouns/show"
  end


  # create
  post "/nouns" do
    noun = Noun.create(params[:noun])
    redirect to "/nouns/#{ noun.id }"
  end

  #edit
  get '/nouns/:id/edit' do
    @noun = Noun.find(params[:id])
    erb :"nouns/edit"
  end

  # update
  patch "/nouns/:id" do
    noun = Noun.find(params[:id])
    # params.delete("_method")
    # binding.pry
    noun.update(params[:noun])
    redirect to "/nouns/#{ noun.id }"
  end


  # destroy
  delete "/nouns/:id" do
    # noun = Noun.find(12)
    # noun.destroy

    Noun.destroy(params[:id])
    redirect to "/nouns"
  end

end