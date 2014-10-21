// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

//sanity check that js is working
alert('js is added to application!');
//
var slides, slides_total, slide_current;
// means to execute the code only once the document has finished loading

document.addEventListener('DOMContentLoaded', function(){
	// set up the fButton, bButton and rButton buttons
	fButton = document.getElementsByClassName('fButton')
	bButton = document.getElementsByClassName('bButton')
	rButton = document.getElementsByClassName('rButton')
	// add event listeners
	fButton = addEventListener("click", forward, false);
	bButton = addEventListener("click", backward, false);
	rButton = addEventListener("click", restart, false);

	// get the pictures!
	slides = document.getElementsByClassName('slides');//use a better class name :)
	// how many pictures are there?
	slides_total = slides.length;
	// let's start with the first picture
	slide_current = 0;
	// function to set time interval (this will loop)
	window.setInterval(function(){	
		// change the picture to the current time
		changePicture(slide_current);
		//if we get to the last slide, go back to the first one
		if(slide_current >= (slides_total-1)){
			slide_current = 0;
		// otherwise, just go to the next slide
		}else{
			slide_current++; //this is an abbreviation for slide_current = slide_current + 1
		}
		//log the slide to the console so for confirmation
		console.log(slide_current);
		//do this every 3s
		}, 3000);
});
// forward, backward and restart functions
function forward(){
	// will only increment forward if not on last slide
	if(slide_current != (slides_total-1)){ 
		slide_current += 1
		changePicture(slide_current)
	};
}
function backward(){
	// will only increment forward if not on last slide
	if(slide_current != 0){ 
		slide_current -= 1
		changePicture(slide_current)
	};
}
function restart(){
	// will only increment forward if not on last slide
	slide_current = 0;
	changePicture(slide_current)
}

// helper functino takes a slide as input
function changePicture(slide){
	// iterate though all slides
	for(var i = 0; i < slides.length; i++){
		//change their display to none
		slides[i].style.display = 'none';
	};
	// change the display for the current slide back on!
	slides[slide].style.display = 'block';

};


