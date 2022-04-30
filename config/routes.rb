Rails.application.routes.draw do
  get 'timers/index'
  root to: "timers#index"
end
