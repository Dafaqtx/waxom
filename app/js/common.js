$(document).ready(function() {

	// btn in projects select
	$('.normal-btn').on('click', function(e) {
		e.preventDefault();
		('.normal-btn').removeClass('active');
		$(this).addClass('active');
	});

   
	// counters animatin
    var show = true;
	var countbox = ".counters__item";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                  
		var w_top = $(window).scrollTop();    
		var e_top = $(countbox).offset().top;
		var w_height = $(window).height();
		var d_height = $(document).height();
		var e_height = $(countbox).outerHeight();
		if(w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$('.counters__number').spincrement({
    			from: 0,
    			duration: 5000,
    			thousandSeparator: false
   			});
			show = false;
		}
	});

	//posts slider
	$('.posts').slick({
        dots: false,
  		infinite: true,
  		speed: 300,
  		slidesToShow: 3,
  		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '15px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '15px',
	        slidesToShow: 1
	      }
	    }
	  ]
    });
});