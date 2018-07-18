 
$(document).ready(function(){
ymaps.ready(init);
    var myMap,
		myPlacemark;
	
    function init(){     
        myMap = new ymaps.Map("map", {
            center: [46.47171769, 30.74991310],
            zoom: 17,
			controls: ["zoomControl"]
        });
		
		myMap.behaviors.disable(['scrollZoom'
		
		]);
		
		myPlacemark = new ymaps.Placemark([46.47171769, 30.74991310], {
			 
			
		});
		
		myMap.geoObjects.add(myPlacemark);
    }
	
});

	
	$(document).ready(function(){
  $('.sl').slick({
	  dots: true,
	  autoplay:true,
	  autoplaySpeed:1000,
	  arrows:false,
  });
});
	
	
	
	$(document).ready(function(){
  $('.sl2').slick({
	  dots: true,
	  autoplay:true,
	  autoplaySpeed:1000,
	  arrows:false,
  });
});
	
	
	
	$(document).ready(function(){
  $('.sl3').slick({
	  dots: true,
	  autoplay:true,
	  autoplaySpeed:1000,
	  arrows:false,
	  slidesToShow: 3,
	  slidesToScroll: 1
  });
});
	
	
	
	$(document).ready(function(){
  $('.sl4').slick({
	  dots: false,
	  autoplay:true,
	  autoplaySpeed:1000,
	  arrows:true,
  });
});
	




			 new WOW().init();
		



$(document).ready(function(){
	$('.js-modal').on("click",function(e){
	  	e.preventDefault();
	  	$(".modal,modal-content").fadeIn();
  	});
	
	$('.close').on("click",function(e){
	  	e.preventDefault();
	  	$(".modal,modal-content").fadeOut();
  	});
});

		
		