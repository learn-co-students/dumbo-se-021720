require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/nouns" do
    @nouns = Noun.search(params["q"])
    erb :index
  end

  get '/nouns/:id' do
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

end
