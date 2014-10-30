# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# need at the beginning of every coffee script file
# tabbing is impt!
$ ->
	#select pins and once they are loaded
	$('#pins').imagesLoaded ->
		#call jquery masonry on pins
		$('#pins').masonry
			itemSelector: '.box'
			isFitWidth: true
			