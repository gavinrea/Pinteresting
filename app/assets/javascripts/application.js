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
//vars for application, global so not inside the DOMContentLoaded function
var slides, slides_total, slide_current;

// means to execute the code only once the document has finished loading
document.addEventListener('DOMContentLoaded', function(){
	var slides = document.getElementsByClassName('slide');//get pics
	var slides_total = slides.length;//get num pics
	var slide_current = 0;//start w/ first pic

	var next_button = document.getElementsByClassName('next')[0]
	var prev_button = document.getElementsByClassName('prev')[0]
	var reset_button = document.getElementsByClassName('reset')[0]

	window.setInterval(function(){// function to set time interval (this will loop)	
		changePicture(slide_current);// change the picture to the current time		
		if(slide_current >= (slides_total-1)){//if we get to the last slide, go back to the first one
			slide_current = 0;		
		}else{// otherwise, just go to the next slide
			slide_current++; //this is an abbreviation for slide_current = slide_current + 1
		};		
		console.log(slide_current);//log the slide to the console so for confirmation
	}, 3000);//do this every 3s

	// First we get the element with class .prev, we want to add a click event listener
	prev_button.addEventListener('click', function () {
      if(slide_current > 0){// the idea is to decrease slide_current by one, to show the previous image
      	slide_current--;
      }else{
        slide_current = (slides_total - 1);// if the slide_current is less than 0 we want to move to the last image
    }
      // then we call the function that changes the current image we had previously coded
      changePicture(slide_current);
      // google analytics format (action, thing, blah, event, label, number)
      ga("send", "event", "slider", "click next", "clicked next button slideshow", 1);
  });
         // First we get the element with class .prev, we want to add an event listener
    // to that element so we can perform a function every time teh element is clicked
    next_button.addEventListener('click', function () {
    	if(slide_current < slides_total-1){slide_current++}
    		else{slide_current = 0};
    	changePicture(slide_current);

    	// // track w/ mixpanel
    	// mixpanel.track("next button pushed");
    });

    reset_button.addEventListener('click', function () {
    	slide_current = 0;
    	changePicture(slide_current);
    });

    // CHANGE BUTTON COLOR
    // next button
    next_button.addEventListener('mouseover',function () {
    	next_button.style.color = "black";
    });
    next_button.addEventListener('mouseout',function () {
    	next_button.style.color = "white";
    });
    // prev
    prev_button.addEventListener('mouseover',function () {
    	prev_button.style.color = "black";
    });
    prev_button.addEventListener('mouseout',function () {
    	prev_button.style.color = "white";
    });
    // reset
    reset_button.addEventListener('mouseover',function () {
    	reset_button.style.color = "black";
    });
    reset_button.addEventListener('mouseout',function () {
    	reset_button.style.color = "white";
    });



    document.getElementsByClassName('userinputtext').addEventListener('onkeydown', function (e){ // the e is the event object (has a bunch of vars), must be passed into function
    	document.getElementsByClassName('bigtitile')[0].innterHTML=e.target.value;//target is the html element, not a string!! must call .value
    });

});

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


