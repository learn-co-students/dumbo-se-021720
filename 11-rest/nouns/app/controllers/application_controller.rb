require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    redirect to "/nouns"
    # erb :welcome
  end

  get "/nouns" do #index
    @nouns = Noun.search(params["q"])
    erb :index
  end

  #new
  get "/nouns/new" do
    @noun = Noun.new
    erb :new
  end

  get '/nouns/:id' do #show
    @noun = Noun.find(params[:id])
    erb :show
  end


  # create
  post "/nouns" do
    noun = Noun.create(params[:noun])
    redirect to "/nouns/#{ noun.id }"
  end

  #edit
  get '/nouns/:id/edit' do
    @noun = Noun.find(params[:id])
    erb :edit
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
