Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post "/signup", to: "users#signup"
      post "/login", to: "users#login"
      post "/logout", to: "users#logout"
      get "/autologin", to: "users#autologin"
    end
  end
end
