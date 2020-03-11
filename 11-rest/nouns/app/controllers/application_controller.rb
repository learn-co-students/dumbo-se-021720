require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/nouns" do #index
    @nouns = Noun.search(params["q"])
    erb :index
  end

  get "/nouns/new" do
    erb :new
  end

  get '/nouns/:id' do #show
    @noun = Noun.find(params[:id])
    erb :show
  end

  # get '/nouns/2' do
  #   @noun = Noun.find(2)
  #   erb :show
  # end

  # get '/nouns/3' do
  #   @noun = Noun.find(3)
  #   erb :show
  # end

  # get '/nouns/4' do
  #   @noun = Noun.find(4)
  #   erb :show
  # end

  # create
  post "/nouns" do
    binding.pry
    noun = Noun.create(params)
    redirect to "/nouns/#{ noun.id }"
  end


  # update
  put "/nouns/:id" do
    noun = Noun.find(8)
    noun.update(name: "Castle", definition: "A big cold home", usefulness: 2)
  end


  # destroy
  delete "/nouns/:id" do
    # noun = Noun.find(12)
    # noun.destroy

    Noun.destroy(12)
  end

end
