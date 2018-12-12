class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # añadimos esto para evitar ser hackeados.
end
