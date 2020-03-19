Rails.application.routes.draw do
  resources :prepositions
  resources :verbs, only: [:index, :show]
  # get "/🖕", to: "verbs#index", as: "verbs"
  # get "/🖕/:id", to: "verbs#show", as: "verb"
  # get "/verbs", to: "verbs#graham"
  # resources :adjectives, only: [:index]

  # patch "/sdfhkds", 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
