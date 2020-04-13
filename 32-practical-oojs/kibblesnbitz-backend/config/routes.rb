Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :dogs, only: [:index, :create, :destroy]

  patch "/dogs/:id/match", to: "dogs#match"
end
