Rails.application.routes.draw do
  
  resources :users, only: [:index, :show] do
    resources :tweets, only: [:index, :create]
  end

end
