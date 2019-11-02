Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      post '/user/register', to: 'users#register'
      post '/user/login', to: 'users#login'
      post '/user/addevent', to: 'users#createEvent'
      post '/user/joinevent', to: 'users#joinEvent'
      post '/user/comment', to: 'users#commentEvent'
      get '/user/events', to: 'users#getEvents'
      get '/user/comments', to: 'users#getComments'
      get '/user/eventowner', to: 'users#getEventOwner'
    end
  end
end
