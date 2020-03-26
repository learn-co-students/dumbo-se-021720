require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/verbs" do
    @verbs = Verb.all
  end

  get "/verbs/:id" do
    @verbs = Verb.all
  end

end
