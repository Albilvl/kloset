Rails.application.routes.draw do
  resources :grails
  resources :items, only: [:create, :index, :show, :destroy ]
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #Items
  get '/myItems', to: "users#myItems"
  # delete '/items/:id', to: "items#destroy"
 
  # AUTHENTICATION
  post "/newaccount", to: "users#create"
  post "/login", to: "auth#create"
  post '/auto_login', to: 'auth#auto_login'
  get '/logged_in', to: 'application#logged_in?'


end
