Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "auth#login"
  get "/autologin", to: "auth#autologin"
  post "/logout", to: "auth#logout"
  
  get "/listings/search", to: "listings#search"
  resources :listings, only: [:index, :show] do
    resources :reviews, only: [:create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
