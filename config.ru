# This file is used by Rack-based servers to start the application.
# Entry point of application

require ::File.expand_path('../config/environment',  __FILE__)
run Rails.application
