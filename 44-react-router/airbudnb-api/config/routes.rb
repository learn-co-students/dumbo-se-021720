Rails.application.routes.draw do
  get "/listings/search", to: "listings#search"
  resources :listings, only: [:index, :show] do
    resources :reviews, only: [:create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
