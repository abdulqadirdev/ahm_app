
Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "homes#index"
  get '/assets', to: 'homes#assets'
  get '/all_assets', to: 'homes#all_assets'
  get '/assets_dis', to: 'homes#assets_dis'
  get '/dashboard', to: 'homes#dashboard'
  get '/summary', to: 'homes#summary'
  get '/task_info', to: 'homes#task_info'
  get '/dash', to: 'homes#dash'
end
