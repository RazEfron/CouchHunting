Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resources :profiles, only: [:index, :create, :show, :update]
    resources :homes, only: [:index, :create, :show, :update]
    resources :locations, only: [:index, :show]
    resources :photos, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
   end

   get '/api/search', to: 'api/profiles#search_resaults'

   root "static_pages#root"
end
