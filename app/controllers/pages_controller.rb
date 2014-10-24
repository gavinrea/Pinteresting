class PagesController < ApplicationController
  def home
  	#everything inside here defines home page (interacts w/ db)
  	# these emtpy methods will automatically load the view with same name!
  end

  def about
  	
  end

  def ajax
  	render partial: 'ajax', formats: :html #specifies format to be sent as html, not json or xml
  end
end
